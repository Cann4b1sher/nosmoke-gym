(function () {
  const ALL = [
    // --- GŁÓD / KRYZYS ---
    { id: 'c1', cat: 'craving', text: 'Głód nikotynowy to tylko fala chemiczna w mózgu. Osiąga szczyt po 3 minutach i opada — przeczekaj go z ciężarem w ręku.' },
    { id: 'c2', cat: 'craving', text: 'Nikotyna nie redukuje stresu — ona go wywołuje między papierosami. Zapalenie to tylko chwilowe nakarmienie potwora, który zaraz poprosi o więcej.' },
    { id: 'c3', cat: 'craving', text: 'To tylko impuls, nie rozkaz. Żaden mięsień w Twoim ciele nie musi go słuchać.' },
    { id: 'c4', cat: 'craving', text: 'Wypij dużą szklankę lodowatej wody, weź 5 głębokich wdechów i zrób jedną serię. Zobaczysz, że chęć zniknie.' },
    { id: 'c5', cat: 'craving', text: 'Za każdym razem, gdy mówisz „nie”, neuroprzekaźniki w Twoim mózgu przebudowują nawyk. Właśnie trenujesz silną wolę.' },
    { id: 'c6', cat: 'craving', text: 'Jeden papieros to nie wyjątek. To podpisanie kontraktu na kolejnych 10 000 wypalonych sztuk.' },
    { id: 'c7', cat: 'craving', text: 'Dyskomfort odstawienia to fizyczny dowód, że Twoje ciało wyrzuca truciznę. Ciesz się nim — to proces leczenia.' },
    { id: 'c8', cat: 'craving', text: 'Pomyśl o osobie, którą chcesz być za rok. Czy ona pali? Jeśli nie — nie daj się złamać teraz.' },
    { id: 'c9', cat: 'craving', text: 'Ochota na papierosa i tak minie — bez względu na to, czy zapalisz, czy zrobisz pompki. Wybierz opcję, z której będziesz dumny.' },
    { id: 'c10', cat: 'craving', text: 'Zamiast karmić koncerny tytoniowe, napompuj krew do klatki i ramion.' },

    // --- PIERWSZE DNI (1-7 DNI) ---
    { id: 'e1', cat: 'early', text: 'Pierwsze 72 godziny to najtrudniejszy fizyczny test. Po 3 dniach nikotyna w 100% opuszcza krwioobieg.' },
    { id: 'e2', cat: 'early', text: 'Twoje rzęski w płucach właśnie zaczynają się oczyszczać. Każdy głęboki oddech dostarcza więcej tlenu do pracujących mięśni.' },
    { id: 'e3', cat: 'early', text: 'Nie musisz planować całego roku bez papierosa. Skup się tylko na dotrwaniu do wieczora.' },
    { id: 'e4', cat: 'early', text: 'Rozdrażnienie i brak koncentracji to normalne objawy. Twój mózg uczy się wytwarzać dopaminę bez chemicznego wspomagacza.' },
    { id: 'e5', cat: 'early', text: 'Tętno spoczynkowe już zaczyna spadać. Twoje serce ma lżejszą pracę przy każdej serii ćwiczeń.' },
    { id: 'e6', cat: 'early', text: 'Każda godzina to realny postęp biologiczny. Spójrz w zakładkę Zdrowie — organizm naprawia się non-stop.' },
    { id: 'e7', cat: 'early', text: 'Kryzysy trwają krótko, a zysk z rzucenia zostaje na dekady.' },
    { id: 'e8', cat: 'early', text: 'Najważniejsza walka toczy się teraz. Wytrzymaj początek, a reszta pójdzie z górki.' },

    // --- BUDOWANIE NAWYKU (TYDZIEŃ - MIESIĄC) ---
    { id: 'm1', cat: 'month', text: 'Najgorsze fizyczne objawy masz za sobą. Teraz budujesz nową tożsamość — sportowca, nie palacza.' },
    { id: 'm2', cat: 'month', text: 'Lepsze dotlenienie mięśni oznacza wyższą wydolność i szybszą regenerację między seriami na siłowni.' },
    { id: 'm3', cat: 'month', text: 'Pieniądze, które szły z dymem, leżą teraz na Twoim koncie. Za miesiąc to kwota na solidne suplementy lub sprzęt.' },
    { id: 'm4', cat: 'month', text: 'Uważaj na momenty automatyczne: poranna kawa, jazda autem, chwila po jedzeniu. Zastąp je szklanką wody lub serią pompek.' },
    { id: 'm5', cat: 'month', text: 'Twoje płuca pompują więcej tlenu. Na treningu bicepsa poczujesz lepszą pompę i mniej zadyszki.' },
    { id: 'm6', cat: 'month', text: 'Nie ma czegoś takiego jak „tylko jeden mach na imprezie”. Jesteś wolnym człowiekiem — nie wracaj do klatki.' },

    // --- DŁUGI STAŻ (POWYŻEJ MIESIĄCA) ---
    { id: 'l1', cat: 'long', text: 'Miesiące bez dymu to żelazny dowód Twojego charakteru. Mało kto ma taką dyscyplinę.' },
    { id: 'l2', cat: 'long', text: 'Twoje ryzyko zawału i udaru drastycznie spadło. Ciało odwdzięcza się siłą i energią.' },
    { id: 'l3', cat: 'long', text: 'Zapomniałeś już, jak pachną ubrania palacza. Twój węch i smak działają na 100%.' },
    { id: 'l4', cat: 'long', text: 'Dyscyplina wypracowana przy rzucaniu palenia przekłada się na każdy trening i cel życiowy.' },
    { id: 'l5', cat: 'long', text: 'Jesteś inspiracją dla każdego, kto twierdzi, że rzucenie jest niemożliwe.' },

    // --- MOTYWACJA TRENINGOWA & SIŁA ---
    { id: 'g1', cat: 'gym', text: 'Pompowanie krwi do mięśni wyzwala endorfiny i dopaminę — naturalny, zdrowy haj bez zjazdu.' },
    { id: 'g2', cat: 'gym', text: 'Pompki budują klatkę i triceps, hantle rzeźbią biceps. Nikotyna zabierała Ci siłę — odbieraj ją seria po serii.' },
    { id: 'g3', cat: 'gym', text: 'Dyscyplina to robienie tego, co trzeba, nawet gdy Ci się nie chce. Zrób serię i poczuj różnicę.' },
    { id: 'g4', cat: 'gym', text: 'Mikrotreningi co godzinę podkręcają metabolizm, spalają kalorie i utrzymują stałe skupienie w ciągu dnia.' },
    { id: 'g5', cat: 'gym', text: 'Każde powtórzenie to małe zwycięstwo nad lenistwem i starym nałogiem.' },
    { id: 'g6', cat: 'gym', text: 'Nie musisz robić życiówek za każdym razem. Liczy się regularność i nieodpuszczanie.' },
    { id: 'g7', cat: 'gym', text: 'Prawdziwy progres buduje się z małych cegiełek — 15 pompek teraz, 15 za godzinę, 100 na koniec dnia.' },
    { id: 'g8', cat: 'gym', text: 'Biceps nie urośnie od myślenia o treningu. Chwyć hantle i zrób swoje.' },
    { id: 'g9', cat: 'gym', text: 'Ruch fizyczny to najszybszy sposób na zresetowanie przebodźcowanej głowy.' },
    { id: 'g10', cat: 'gym', text: 'Siła fizyczna i mentalna idą w parze. Kto kontroluje swoje ciało, kontroluje swoje nawyki.' },

    // --- PORY DNIA (PORANEK) ---
    { id: 'p1', cat: 'morning', text: 'Dzień dobry! Zamiast papierosa do kawy — duża szklanka wody i poranna seria pompek na rozruch.' },
    { id: 'p2', cat: 'morning', text: 'Pierwsza seria zrobiona rano ustawia nastawienie na cały dzień. Zwyciężasz już o poranku.' },
    { id: 'p3', cat: 'morning', text: 'Czyste płuca o poranku to najlepsze uczucie. Żadnego kaszlu, żadnego ciężaru na klatce.' },
    { id: 'p4', cat: 'morning', text: 'Dzisiejszy dzień to kolejna szansa na pobicie rekordu powtórzeń i powiększenie oszczędności.' },

    // --- PORY DNIA (WIECZÓR & NOC) ---
    { id: 'w1', cat: 'evening', text: 'Kolejny dzień wygrany bez dymu. Spójrz na statystyki i doceń swoją pracę.' },
    { id: 'w2', cat: 'evening', text: 'Wieczorny odpoczynek smakuje lepiej, gdy wiesz, że wykonałeś cel dzienny.' },
    { id: 'w3', cat: 'evening', text: 'Sen bez nikotyny we krwi jest głębszy, a regeneracja mięśni przebiega o wiele szybciej.' },
    { id: 'w4', cat: 'evening', text: 'Zamknij dzisiejszy dzień z czystym sumieniem. Jutro obudzisz się jeszcze silniejszy.' },
    { id: 'w5', cat: 'night', text: 'Czas na regenerację. Mięśnie rosną i płuca naprawiają się podczas snu — odpocznij.' },

    // --- CZAS NA TRENING (DUE) ---
    { id: 'd1', cat: 'due', text: 'Minęła godzina — czas na ruch! Odłóż ekran, zrób zadaną serię i wracaj do zajęć.' },
    { id: 'd2', cat: 'due', text: 'Twoje mięśnie czekają na bodziec. 2 minuty wysiłku i kolejna cegiełka do formy dołożona.' },
    { id: 'd3', cat: 'due', text: 'Nie odkładaj serii na później. Zrób ją teraz, a organizm odwdzięczy się zastrzykiem energii.' },
    { id: 'd4', cat: 'due', text: 'Dzwonek zadzwonił — czas na pompki lub hantle. Żadnych wymówek.' },

    // --- CEL DNIA ZALICZONY ---
    { id: 'g_ok1', cat: 'goal', text: '🎯 Dzienny cel powtórzeń osiągnięty! Świetna robota, każda kolejna seria to czysty bonus.' },
    { id: 'g_ok2', cat: 'goal', text: '🎯 Plan wykonany na 100%. Tak właśnie buduje się żelazną dyscyplinę i formę.' },

    // --- PRZYPOMNIENIE POD WIECZÓR (BRAK POWTÓRZEŃ) ---
    { id: 'ndg1', cat: 'nudge', text: 'Dzień powoli mija, a licznik powtórzeń jeszcze pusty. Zrób chociaż jedną serię, by utrzymać passę!' },
    { id: 'ndg2', cat: 'nudge', text: 'Nie kładź się spać z zerem na liczniku. 15 pompek zajmie Ci minutę — zrób je teraz!' }
  ];

  const ICONS = {
    craving: '🛡️',
    early: '🌱',
    month: '💎',
    long: '👑',
    gym: '💪',
    morning: '🌅',
    evening: '🌙',
    night: '😴',
    due: '⏰',
    goal: '🎯',
    nudge: '⚡'
  };

  const SEEN_KEY = 'nosmoke_seen_quotes_v2';
  function getSeen() {
    try { return JSON.parse(localStorage.getItem(SEEN_KEY) || '[]'); } catch (_) { return []; }
  }
  function addSeen(id) {
    let seen = getSeen().filter(x => x !== id);
    seen.push(id);
    // Zachowaj historię max 40 ostatnich, żeby nie blokować na zawsze
    if (seen.length > 40) seen = seen.slice(seen.length - 40);
    localStorage.setItem(SEEN_KEY, JSON.stringify(seen));
  }

  function getContext() {
    const now = Date.now(), hr = new Date().getHours();
    const el = Math.max(0, now - new Date(S.quit).getTime());
    return {
      craving: window.__crv && now - window.__crv < 20 * 60e3,
      due: S.en && S.nextAt && S.nextAt <= now,
      goal: todayReps() >= S.dgoal,
      nudge: hr >= 17 && hr < 23 && todayReps() === 0,
      el,
      hr
    };
  }

  function getEligible(ctx) {
    let cats = [];
    if (ctx.craving) {
      cats = ['craving', 'craving', 'gym']; // mocny priorytet
    } else if (ctx.due) {
      cats = ['due', 'due', 'gym'];
    } else if (ctx.nudge) {
      cats = ['nudge', 'gym', 'craving'];
    } else if (ctx.goal && Math.random() < 0.4) {
      cats = ['goal'];
    } else {
      // Normalny kontekst: czas trwania + pora dnia + siłownia ogólna
      if (ctx.hr >= 5 && ctx.hr < 11) cats.push('morning');
      else if (ctx.hr >= 18 && ctx.hr < 23) cats.push('evening');
      else if (ctx.hr >= 23 || ctx.hr < 5) cats.push('night');

      if (ctx.el < 7 * 864e5) cats.push('early', 'early', 'craving');
      else if (ctx.el < 30 * 864e5) cats.push('month', 'gym');
      else cats.push('long', 'gym');

      cats.push('gym', 'craving');
    }

    const available = ALL.filter(q => cats.includes(q.cat));
    return available.length ? available : ALL;
  }

  let curQuote = null;

  function nextQuote(force) {
    const ctx = getContext();
    const pool = getEligible(ctx);
    const seen = getSeen();

    // Filtruj cytaty, których ostatnio NIE widzieliśmy
    let unseen = pool.filter(q => !seen.includes(q.id));
    if (!unseen.length) {
      // Jeśli wszystkie w puli zostały już pokazane, bierzemy dowolny oprócz aktualnego
      unseen = pool.filter(q => !curQuote || q.id !== curQuote.id);
    }
    if (!unseen.length) unseen = ALL;

    const chosen = unseen[Math.floor(Math.random() * unseen.length)];
    curQuote = chosen;
    addSeen(chosen.id);

    const el = document.getElementById('quote');
    if (!el) return;

    el.innerHTML = '';
    const t = document.createElement('div');
    t.style.fontWeight = '500';
    t.style.lineHeight = '1.4';
    t.textContent = (ICONS[chosen.cat] || '✨') + ' „' + chosen.text + '”';

    const h = document.createElement('div');
    h.style.cssText = 'font-size:.72rem;margin-top:6px;opacity:.65;font-style:normal;letter-spacing:.3px';
    h.textContent = '👆 dotknij, aby wylosować inny';

    el.append(t, h);
  }

  // Podepnij pod globalne zdarzenia
  const oRender = window.renderLvl;
  window.renderLvl = function (s) { oRender(s); if (!curQuote) nextQuote(); };

  const oCrave = window.craving;
  window.craving = function () { window.__crv = Date.now(); oCrave(); nextQuote(true); };

  const qe = document.getElementById('quote');
  if (qe) {
    qe.style.cursor = 'pointer';
    qe.addEventListener('click', () => nextQuote(true));
  }

  // Losuj nowy co 15 minut automatycznie
  setInterval(() => nextQuote(false), 15 * 60e3);

  nextQuote(true);
})();
