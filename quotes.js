(function () {
  const Q = {
    craving: [
      'Głód trwa kilka minut. Zrób serię i zobacz, kto wygra.',
      'To tylko impuls, nie rozkaz. Nie musisz go wykonywać.',
      'Wypij wodę, oddychaj głęboko, policz do stu. Za chwilę będzie lżej.',
      'Każdy odparty głód osłabia nałóg i wzmacnia Ciebie.',
      'Zamiast papierosa sięgnij po hantle.',
      'Nikotyna obiecuje ulgę, ale to ona wywołuje napięcie. Nie daj się nabrać.',
      'Jeden papieros to nie jeden papieros, tylko powrót do punktu wyjścia.',
      'Teraz jest trudno, ale za rok będziesz dumny, że wytrzymałeś.'
    ],
    relapse: [
      'Potknięcie to nie porażka. Porażką jest dopiero rezygnacja.',
      'Licznik wrócił do zera, ale Twoja wiedza i siła zostały.',
      'Wielu rzucających próbuje kilka razy. Wracasz do gry.',
      'Zapisz, co wywołało zapalenie. Następnym razem będziesz o krok przed tym.',
      'Dziś zaczynasz od nowa, ale z lepszym planem niż wcześniej.',
      'Nie karz się. Wstań i zrób jedną serię.'
    ],
    early: [
      'Pierwsze godziny są najtrudniejsze. Każda minuta to punkt dla Ciebie.',
      'Organizm już zaczyna się oczyszczać. Daj mu szansę.',
      'Dziś tylko jedno zadanie: nie zapalić. Reszta to dodatek.',
      'Nie myśl o całym życiu bez papierosa. Myśl o najbliższej godzinie.',
      'Zrobiłeś najtrudniejszy krok: zacząłeś.',
      'Za każdym razem, gdy wytrzymasz, uczysz mózg, że papieros nie jest potrzebny.'
    ],
    week1: [
      'Pierwsze dni to burza, potem robi się spokojniej.',
      'Skoro wytrzymałeś już tyle, kolejny dzień też jest w zasięgu.',
      'Twoje płuca zaczynają się regenerować. Każdy oddech to czuje.',
      'Rozdrażnienie to częsty objaw odstawienia. Mija z każdym dniem.',
      'Każdy dzień bez papierosa to pieniądze w kieszeni i energia na trening.',
      'Nawyk słabnie z każdą odmową.'
    ],
    month1: [
      'Masz za sobą najcięższy etap. Teraz budujesz nową tożsamość.',
      'Kondycja rośnie. Porównaj, ile powtórzeń robisz teraz, a ile na początku.',
      'Nie jesteś już osobą, która próbuje rzucić. Jesteś osobą, która nie pali.',
      'Uważaj na okazje: kawa, alkohol, stres. Tam najczęściej wraca pokuścia.',
      'Każdy tydzień to dowód, że to działa.'
    ],
    long: [
      'Miesiące bez papierosa to Twój najlepszy trening charakteru.',
      'Twoje serie są coraz mocniejsze. To efekt czystszych płuc i uporu.',
      'Spójrz na oszczędności. To Twoja nagroda.',
      'Jeden dzień po drugim. Tak powstają lata.',
      'Jesteś dowodem, że się da.'
    ],
    morning: [
      'Dzień dobry. Zacznij od wody i jednej serii, reszta pójdzie łatwiej.',
      'Poranna seria pompek to pierwsze zwycięstwo dnia.',
      'Dziś znowu wybierasz siebie. Zaczynaj.',
      'Zanim sięgniesz po telefon, zrób 10 powtórzeń.',
      'Każdy poranek bez papierosa to dobry początek.',
      'Plan na dziś: nie palić, ruszać się, odpoczywać.'
    ],
    afternoon: [
      'Pół dnia za Tobą. Zrób serię i odśwież głowę.',
      'Spadek energii po obiedzie mija szybciej, gdy się ruszasz.',
      'Pięć minut ruchu daje więcej niż pięć minut wymówek.',
      'Napij się wody, rozciągnij plecy, zrób serię bicepsa.',
      'Jeszcze kilka godzin, a dzień będzie wygrany.'
    ],
    evening: [
      'Wieczorne pokuście jest głośne, ale krótkie. Przeczekaj je.',
      'Zamknij dzień serią i dumą z siebie.',
      'Dziś się udało. Jutro też się uda.',
      'Dobry sen to sprzymierzeniec w rzucaniu i w budowaniu formy.',
      'Zanim pójdziesz spać, zajrzyj w osiągnięcia. Zasłużyłeś.',
      'Wieczór bez papierosa to spokojniejszy sen i lepszy poranek.'
    ],
    night: [
      'Jest późno. Odpocznij, regeneracja też jest częścią planu.',
      'Mięśnie rosną podczas odpoczynku, a płuca regenerują się, gdy nie palisz.',
      'Idź spać. Rano znowu zrobisz swoje.'
    ],
    due: [
      'Czas na serię! Dwie minuty ruchu i wracasz do swoich spraw.',
      'Hantle czekają. Bicepsy same się nie zrobią.',
      'Wstań, zrób powtórzenia, zapisz serię. Gotowe.',
      'Ciało lubi rytm. Co godzinę trochę ruchu robi różnicę.',
      'Nie czekaj na motywację. Zrób pierwsze powtórzenie.',
      'Każda pompka to cegła w Twojej formie.',
      'Ruch zamiast papierosa to wymiana na lepsze.'
    ],
    goal: [
      'Cel dnia zaliczony! Reszta to bonus.',
      'Dziś dałeś z siebie wystarczająco. Szacunek.',
      'Plan wykonany. Możesz odpocząć z czystym sumieniem.',
      'Bez papierosa i z wykonanym celem. Tak buduje się formę.',
      'Cel osiągnięty. Jutro podnieś poprzeczkę o kilka powtórzeń.'
    ],
    nudge: [
      'Dzień się jeszcze nie skończył. Jedna seria i masz zapisany ruch.',
      'Zero powtórzeń dziś? Zrób pierwszą serię i zakończ pustą passy.',
      'Nawet 10 powtórzeń liczy się lepiej niż nic.',
      'Seria dni czeka na dzisiejszy wpis.'
    ],
    generic: [
      'Głód nikotynowy trwa kilka minut. Twoje mięśnie zostają na dłużej.',
      'Każda seria to głos na osobę, którą chcesz być.',
      'Nie musisz być idealny. Wystarczy, że dziś nie zapalisz.',
      'Oddech, który odzyskujesz, jest wart więcej niż jakakolwiek paczka.',
      'Siła to suma małych powtórzeń. Tak samo wolność.',
      'Wczoraj dałeś radę. Dziś też dasz.',
      'Słabszy dzień? Zrób jedną serię, to już wygrana.',
      'Każda godzina bez papierosa to realna zmiana w organizmie.',
      'Pieniądze, które zostają w kieszeni, kupią lepszą odżywkę.',
      'Dyscyplina bije motywację. Zrób serię, nawet gdy nie chcesz.',
      'Jesteś silniejszy niż nawyk.'
    ]
  };
  const ICON = { craving: '\u{1F6E1}\uFE0F', relapse: '\u{1F4AA}', early: '\u{1F331}', week1: '\u{1F525}', month1: '\u{1F3C5}', long: '\u{1F451}', morning: '\u{1F305}', afternoon: '\u2600\uFE0F', evening: '\u{1F319}', night: '\u{1F634}', due: '\u23F0', goal: '\u{1F3AF}', nudge: '\u{1F449}', generic: '\u2728' };

  function rng(seed) {
    return function () {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  const hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };

  function flags() {
    const now = Date.now(), hr = new Date().getHours();
    const el = now - new Date(S.quit).getTime();
    const lastRel = (S.relapses || []).length ? S.relapses[S.relapses.length - 1].t : 0;
    return {
      craving: window.__crv && now - window.__crv < 20 * 60e3,
      relapse: lastRel && now - lastRel < 864e5,
      due: S.en && S.nextAt && S.nextAt <= now,
      goal: todayReps() >= S.dgoal,
      nudge: hr >= 17 && hr < 23 && todayReps() === 0,
      dur: el < 864e5 ? 'early' : el < 7 * 864e5 ? 'week1' : el < 30 * 864e5 ? 'month1' : 'long',
      tod: hr >= 5 && hr < 11 ? 'morning' : hr >= 11 && hr < 18 ? 'afternoon' : hr >= 18 && hr < 23 ? 'evening' : 'night'
    };
  }

  function pick(f, rand) {
    const w = [[f.dur, 3], [f.tod, 3], ['generic', 2]];
    if (f.craving) w.push(['craving', 20]);
    if (f.relapse) w.push(['relapse', 5]);
    if (f.due) w.push(['due', 6]);
    if (f.goal) w.push(['goal', 4]);
    if (f.nudge) w.push(['nudge', 4]);
    const tot = w.reduce((a, b) => a + b[1], 0);
    let r = rand() * tot, cat = w[0][0];
    for (const [c, x] of w) { if (r < x) { cat = c; break; } r -= x; }
    const list = Q[cat];
    return { cat, text: list[Math.floor(rand() * list.length)] };
  }

  let curKey = '', cur = null, last = localStorage.getItem('nsq_last') || '';
  function update(force) {
    const el = document.getElementById('quote');
    if (!el) return;
    const f = flags();
    const key = Math.floor(Date.now() / 18e5) + '|' + ['craving', 'relapse', 'due', 'goal', 'nudge'].map(k => f[k] ? 1 : 0).join('') + f.dur + f.tod;
    if (force || key !== curKey || !cur) {
      let q;
      for (let i = 0; i < 4; i++) {
        q = pick(f, force ? Math.random : rng(hash(key + i)));
        if (q.text !== last) break;
      }
      cur = q; curKey = key; last = q.text; localStorage.setItem('nsq_last', last);
      el.innerHTML = '';
      const t = document.createElement('div');
      t.textContent = ICON[q.cat] + ' \u201E' + q.text + '\u201D';
      const h = document.createElement('div');
      h.style.cssText = 'font-size:.7rem;margin-top:6px;opacity:.7;font-style:normal';
      h.textContent = 'dotknij, aby zmienić';
      el.append(t, h);
    }
  }

  const oRender = window.renderLvl;
  window.renderLvl = function (s) { oRender(s); update(false); };
  const oCrave = window.craving;
  window.craving = function () { window.__crv = Date.now(); oCrave(); update(true); };
  const qe = document.getElementById('quote');
  if (qe) { qe.style.cursor = 'pointer'; qe.addEventListener('click', () => update(true)); }
  update(true);
})();
