const express = require('express');
const { Pool } = require('pg');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

const app = express();
app.set('trust proxy', 1);
app.use(express.json({ limit: '1mb' }));

const DB_URL = process.env.DATABASE_URL || '';
const SECRET = process.env.TOKEN_SECRET || '';
const INVITE = process.env.INVITE_CODE || '';
const pool = DB_URL ? new Pool({
  connectionString: DB_URL,
  ssl: /\.render\.com/.test(DB_URL) ? { rejectUnauthorized: false } : false,
  max: 5
}) : null;
let ready = false;

async function init() {
  if (!pool) return;
  await pool.query(`CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    salt TEXT NOT NULL,
    hash TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now())`);
  await pool.query(`CREATE TABLE IF NOT EXISTS app_data (
    user_id INT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    blob JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now())`);
  ready = true;
}
const initLoop = () => init().catch(e => { console.error('DB init failed:', e.message); setTimeout(initLoop, 10000); });
initLoop();

const scrypt = (p, s) => new Promise((res, rej) =>
  crypto.scrypt(p, s, 64, (e, k) => (e ? rej(e) : res(k.toString('hex')))));

const b64 = b => Buffer.from(b).toString('base64url');
function sign(uid) {
  const p = b64(JSON.stringify({ u: uid, e: Date.now() + 180 * 864e5 }));
  const s = crypto.createHmac('sha256', SECRET).update(p).digest('base64url');
  return p + '.' + s;
}
function verify(tok) {
  if (!tok || !SECRET) return null;
  const [p, s] = tok.split('.');
  if (!p || !s) return null;
  const exp = crypto.createHmac('sha256', SECRET).update(p).digest('base64url');
  const a = Buffer.from(s), b = Buffer.from(exp);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const d = JSON.parse(Buffer.from(p, 'base64url').toString());
    return d.e > Date.now() ? d.u : null;
  } catch (_) { return null; }
}

const hits = new Map();
function limited(req, res) {
  const k = req.ip, now = Date.now();
  const h = (hits.get(k) || []).filter(t => now - t < 15 * 60e3);
  if (h.length >= 20) { res.status(429).json({ error: 'Za dużo prób. Spróbuj za 15 minut.' }); return true; }
  h.push(now); hits.set(k, h); return false;
}

function needDb(req, res, next) {
  if (!pool || !SECRET) return res.status(503).json({ error: 'Serwer nie jest skonfigurowany (brak DATABASE_URL lub TOKEN_SECRET).' });
  if (!ready) return res.status(503).json({ error: 'Baza danych jeszcze się uruchamia. Spróbuj za chwilę.' });
  next();
}
function auth(req, res, next) {
  const t = (req.headers.authorization || '').replace(/^Bearer /, '');
  const uid = verify(t);
  if (!uid) return res.status(401).json({ error: 'Brak autoryzacji' });
  req.uid = uid; next();
}
const validUser = u => typeof u === 'string' && /^[a-z0-9_.-]{3,32}$/.test(u.toLowerCase());
const validPass = p => typeof p === 'string' && p.length >= 8 && p.length <= 200;

app.post('/api/register', needDb, async (req, res) => {
  if (limited(req, res)) return;
  try {
    const { user, pass, invite } = req.body || {};
    if (INVITE && invite !== INVITE) return res.status(403).json({ error: 'Nieprawidłowy kod zaproszenia' });
    if (!validUser(user)) return res.status(400).json({ error: 'Login: 3-32 znaki (a-z, 0-9, _ . -)' });
    if (!validPass(pass)) return res.status(400).json({ error: 'Hasło: minimum 8 znaków' });
    const name = user.toLowerCase();
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = await scrypt(pass, salt);
    const r = await pool.query('INSERT INTO users(username,salt,hash) VALUES($1,$2,$3) ON CONFLICT DO NOTHING RETURNING id', [name, salt, hash]);
    if (!r.rows.length) return res.status(409).json({ error: 'Taki login już istnieje' });
    res.json({ token: sign(r.rows[0].id), user: name });
  } catch (e) { console.error(e); res.status(500).json({ error: 'Błąd serwera' }); }
});

app.post('/api/login', needDb, async (req, res) => {
  if (limited(req, res)) return;
  try {
    const { user, pass } = req.body || {};
    if (!validUser(user) || typeof pass !== 'string') return res.status(401).json({ error: 'Zły login lub hasło' });
    const r = await pool.query('SELECT id,salt,hash FROM users WHERE username=$1', [user.toLowerCase()]);
    if (!r.rows.length) return res.status(401).json({ error: 'Zły login lub hasło' });
    const h = await scrypt(pass, r.rows[0].salt);
    const ok = crypto.timingSafeEqual(Buffer.from(h), Buffer.from(r.rows[0].hash));
    if (!ok) return res.status(401).json({ error: 'Zły login lub hasło' });
    res.json({ token: sign(r.rows[0].id), user: user.toLowerCase() });
  } catch (e) { console.error(e); res.status(500).json({ error: 'Błąd serwera' }); }
});

app.get('/api/data', needDb, auth, async (req, res) => {
  try {
    const r = await pool.query('SELECT blob, updated_at FROM app_data WHERE user_id=$1', [req.uid]);
    res.json(r.rows.length ? { data: r.rows[0].blob, updated: r.rows[0].updated_at } : { data: null });
  } catch (e) { console.error(e); res.status(500).json({ error: 'Błąd serwera' }); }
});

app.put('/api/data', needDb, auth, async (req, res) => {
  try {
    const data = req.body && req.body.data;
    if (!data || typeof data !== 'object' || Array.isArray(data)) return res.status(400).json({ error: 'Nieprawidłowe dane' });
    await pool.query(`INSERT INTO app_data(user_id,blob,updated_at) VALUES($1,$2,now())
      ON CONFLICT (user_id) DO UPDATE SET blob=EXCLUDED.blob, updated_at=now()`, [req.uid, JSON.stringify(data)]);
    res.json({ ok: true });
  } catch (e) { console.error(e); res.status(500).json({ error: 'Błąd serwera' }); }
});

app.get('/healthz', (req, res) => res.json({ ok: true, db: ready }));
app.get('/quotes.js', (req, res) => res.type('application/javascript').sendFile(path.join(__dirname, 'quotes.js')));
app.get('/', (req, res) => {
  let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  if (!html.includes('/quotes.js')) html = html.replace('</body>', '<script src="/quotes.js"></script></body>');
  res.type('html').send(html);
});

const port = process.env.PORT || 10000;
app.listen(port, '0.0.0.0', () => console.log('listening on ' + port));
