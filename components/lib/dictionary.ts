import type { Lang } from "@/components/lib/i18n";

type ServicePreviewItem =
  | string
  | {
      text: string;
      benefit?: string;
    };

export type Dictionary = {
  nav: {
    subtitle: string;
    items: { href: string; label: string }[];
    mobileMenuLabel: string;
    languageSwitcher: {
      hu: string;
      en: string;
    };
    themeToggle: {
      light: string;
      dark: string;
      switchToLight: string;
      switchToDark: string;
    };
  };
  footer: {
    location: string;
    services: string;
    pricing: string;
    contact: string;
  };
  home: {
    why: {
      eyebrow: string;
      title: string;
      description: string;
    };
    useCases: {
      eyebrow: string;
      title: string;
      description: string;
    };
    services: {
      eyebrow: string;
      title: string;
      description: string;
    };
    process: {
      eyebrow: string;
      title: string;
      description: string;
    };
    pricing: {
      eyebrow: string;
      title: string;
      description: string;
    };
  };
  hero: {
    badges: string[];
    title: string;
    locationLine: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
    bullets: string[];
  };
  featureGrid: { title: string; desc: string }[];
  servicesPreview: {
    cards: { title: string; items: ServicePreviewItem[] }[];
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
  };
  useCases: {
    labels: {
      problem: string;
      solution: string;
      why: string;
    };
    cards: {
      id: string;
      title: string;
      who: string;
      timeframeLabel: string;
      problem: string[];
      solution: string[];
      why: string[];
    }[];
  };
  steps: { title: string; desc: string }[];
  pricingGrid: {
    labels: {
      mostPopular: string;
      requestOffer: string;
      development: string;
      pcAddon: string;
      noteTitle: string;
      noteText: string;
    };
    plans: {
      name: string;
      price: string;
      hint: string;
      popular?: boolean;
      features: string[];
    }[];
    pcPlans: {
      name: string;
      price: string;
      hint: string;
      features: string[];
    }[];
  };
  pcService: {
    eyebrow: string;
    title: string;
    description: string;
    availability: string;
    area: string[];
    typicalIssues: string;
    dailyPainPoints: string;
    typicalIssuesList: string[];
    everyday: string[];
    tipTitle: string;
    tipText: string;
  };
  comingSoon: {
    locationLine: string;
    title: string;
    description: string;
    sendEmail: string;
    call: string;
    discoveryTitle: string;
    discoveryText: string;
    fastStartTitle: string;
    fastStartText: string;
    emailLabel: string;
    phoneLabel: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    description: string;
    locationLine: string;
  };
  aboutSection: {
    intro: string[];
    valuesTitle: string;
    values: { title: string; desc: string }[];
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    contactDetails: string;
    phone: string;
    coverage: string;
    coverageValue: string;
    helpTitle: string;
    helpItems: string[];
    responseTitle: string;
    responseText: string;
  };
  contactForm: {
    name: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    helpLabel: string;
    helpTooltip: string;
    detailsPlaceholder: string;
    validationRequired: string;
    validationEmail: string;
    sending: string;
    send: string;
    success: string;
    error: string;
    validationTooShort: string;
    validationTooLong: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    description: string;
  };
  pricingPage: {
    eyebrow: string;
    title: string;
    description: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    description: string;
    home: string;
    contact: string;
  };
};

const hu: Dictionary = {
  nav: {
    subtitle: "digitalizálás • rendszerek",
    items: [
      { href: "/", label: "Főoldal" },
      { href: "/portfolio", label: "Munkáim" },
      { href: "/services", label: "Szolgáltatások" },
      { href: "/pricing", label: "Árak" },
      { href: "/about", label: "Rólam" },
      { href: "/contact", label: "Kapcsolat" },
    ],
    mobileMenuLabel: "Menü",
    languageSwitcher: {
      hu: "Nyelv váltása magyarra",
      en: "Nyelv váltása angolra",
    },
    themeToggle: {
      light: "Világos mód",
      dark: "Sötét mód",
      switchToLight: "Váltás világos módra",
      switchToDark: "Váltás sötét módra",
    },
  },
  footer: {
    location:
      "Siófok és környéke • Somogy megye • Távolabb egyeztetéssel • Online országosan",
    services: "Szolgáltatások",
    pricing: "Árak",
    contact: "Kapcsolat",
  },
  home: {
    why: {
      eyebrow: "Miért működik?",
      title: "Kevesebb kézi munka. Kevesebb hiba. Tisztább működés.",
      description:
        "A cél egy olyan megoldás, amit a csapatod tényleg használ, és ami gyorsítja a napi munkát.",
    },
    useCases: {
      eyebrow: "Így néz ki a gyakorlatban",
      title: "Egyszerűbb működés, kevesebb káosz a napi munkában",
      description:
        "Segítek a vállalkozásoknak egyszerűbbé tenni a működésüket automatizálással, egyedi fejlesztéssel és megbízható számítógépes háttérrel.",
    },
    services: {
      eyebrow: "Szolgáltatások",
      title: "Megoldások, amik tényleg gyorsítják a napi működést",
      description:
        "Néhány erős példa röviden. A teljes szolgáltatási lista a Szolgáltatások oldalon található.",
    },
    process: {
      eyebrow: "Hogyan dolgozunk?",
      title: "Gyors indulás, tiszta lépések, biztos haladás",
      description:
        "Rövid egyeztetés után lépésről lépésre haladunk, és a feladatokat közös felületen követheted.",
    },
    pricing: {
      eyebrow: "Árak",
      title: "Csomagok és egyedi ajánlatok",
      description:
        "Itt röviden látod az irányokat, a teljes árlista és minden részlet az Ár oldalon van.",
    },
  },
  hero: {
    badges: [
      "Adminisztráció csökkentés",
      "Excel kiváltása",
      "Valós idejű összefoglalók",
      "Egyedi rendszerfejlesztés",
    ],
    title:
      "Excel és jegyzetek helyett kezeld a folyamataid egyetlen átlátható felületen.",
    locationLine:
      "Molnár Systems • Siófok és környéke, Somogy megye • Távolabb egyeztetéssel • Online országosan",
    intro:
      "Ha eleged van abból, hogy Excelben és jegyzetekben kell keresgélned: készítek egy egyszerű, testre szabott rendszert, ami időt spórol, hibát csökkent, és láthatóvá teszi a céged működését.",
    ctaPrimary: "Kérek ingyenes konzultációt",
    ctaSecondary: "Árak és csomagok",
    note: "15 perces előszűrés – megmondom, érdemes-e fejleszteni.",
    bullets: [
      "Belső rendszerek és munkafolyamatok automatizálása",
      "Rendezett adatkezelés, összefoglalókkal és exporttal",
      "Integráció meglévő rendszerekkel és eszközökkel",
      "Pénzügyi és működési adatok egy közös, átlátható felületen",
      "Excel kiváltása stabil, testre szabott webes rendszerrel",
      "PC szerviz és számítógépes segítség (helyi kiegészítő szolgáltatás, online is elérhető)",
    ],
  },
  featureGrid: [
    {
      title: "Határidők és automatikus emlékeztetők",
      desc: "Emailes emlékeztetők és feladatlista, hogy semmi ne maradjon el vagy csússzon.",
    },
    {
      title: "Pénzügyi áttekintés egy helyen",
      desc: "Bevétel, kiadás és alakulás egy képernyőn, hogy könnyebb legyen dönteni.",
    },
    {
      title: "Készlet és eszközök követése",
      desc: "Időben jelzi, ha fogy valami, és segít, hogy ne álljon le a munka.",
    },
    {
      title: "Rendezett adatok, kevesebb hiba",
      desc: "Az adatok egy helyen vannak, átláthatóan, ismétlődések nélkül.",
    },
    {
      title: "Jogosultság és adatvédelem",
      desc: "Mindenki csak azt látja, amire szüksége van, így kisebb az esély a hibára.",
    },
    {
      title: "Folyamatos működés és támogatás",
      desc: "Karbantartás, mentés és javítás, hogy a rendszer stabilan működjön.",
    },
    {
      title: "Gyors ajánlatadás és árazás",
      desc: "Gyors, egységes ajánlatkészítés, hogy ne menjen el idő a kézi számolásra.",
    },
    {
      title: "Minden feladat állapota egy helyen",
      desc: "Azonnal látszik, mi van kész, mi csúszik, és hol kell gyorsan közbelépni.",
    },
    {
      title: "Kevesebb egyeztetés, gyorsabb döntések",
      desc: "Minden fontos információ egy helyen van, ezért kevesebb a felesleges visszakérdezés.",
    },
  ],
  servicesPreview: {
    cards: [
      {
        title: "Belső rendszerek és webappok",
        items: [
          {
            text: "Ügyfél- és munkanyilvántartás (egyszerű rendszer)",
            benefit:
              "Minden adat egy helyen, nincs keresgélés több app között.",
          },
          {
            text: "Folyamat: beérkezett -> folyamatban -> kész -> számlázva",
            benefit:
              "Azonnal látszik, hol tart egy munka, így kisebb a csúszás.",
          },
          {
            text: "Ügyfélportál, dokumentumok, státuszok",
            benefit:
              "Kevesebb telefon és e-mail, mert az ügyfél maga is látja az állapotot.",
          },
          {
            text: "Dolgozói feladatlista és napi teendők követése",
            benefit: "A csapat tisztábban látja a napi priorításokat.",
          },
          {
            text: "Egyszerű jogosultságkezelés (ki mit lát és módosít)",
            benefit: "Kisebb az adatkezelési hiba esélye.",
          },
        ],
      },
      {
        title: "Automatizálás és értesítések",
        items: [
          {
            text: "Határidő riasztó emailben",
            benefit: "Kevesebb elfelejtett feladat és biztosabb teljesítés.",
          },
          {
            text: "Készlet minimum figyelés",
            benefit: "Nem fogy el váratlanul a szükséges anyag.",
          },
          {
            text: "Emlékeztetők: szerviz, lejáratok, kontrollok",
            benefit: "A visszatérő feladatok időben elvégezhetők.",
          },
          {
            text: "Automatikus visszajelzés ügyfélnek az állapotváltozásról",
            benefit: "Profibb ügyfélélmény és kevesebb visszakérdezés.",
          },
          {
            text: "Napi vagy heti összefoglaló e-mail a nyitott feladatokról",
            benefit: "Gyors vezetői rálátás egyetlen levélben.",
          },
        ],
      },
      {
        title: "Adatkezelés, összefoglalók, döntéstámogatás",
        items: [
          {
            text: "Bevétel-kiadás, be nem fizetett számlák, eredmény",
            benefit: "Pontosan látható, mi mennyit hoz vagy visz.",
          },
          {
            text: "Fő mutatók áttekinthető grafikonokkal",
            benefit:
              "Egy pillantással érthető a trend, nem kell táblázatot bogarászni.",
          },
          {
            text: "Adatok rendbetétele, ismétlődések megszüntetése",
            benefit: "Kevesebb admin hiba és pontosabb nyilvántartás.",
          },
          {
            text: "Egyszerű havi összefoglaló a cég teljesítményéről",
            benefit: "Gyorsabb döntés a következő hónapra.",
          },
          {
            text: "Gyors export könyveléshez vagy vezetői egyeztetéshez",
            benefit: "Kevesebb manuális adatmásolás.",
          },
        ],
      },
      {
        title: "Hardver és számítógépes megoldások",
        items: [
          {
            text: "Számítógép, nyomtató, szkenner és perifériák beállítása",
            benefit:
              "Az eszközök telepítve, összekötve és kipróbálva kerülnek átadásra.",
          },
          {
            text: "Távoli segítség szoftveres és beállítási problémákhoz",
            benefit:
              "Sok hiba kiszállás nélkül, gyorsabban és kedvezőbb költséggel megoldható.",
          },
          {
            text: "Egyedi PC, alkatrészbővítés és hibafeltárás",
            benefit:
              "Tervezés, kompatibilitás-ellenőrzés, beépítés és tesztelés egy helyen.",
          },
          {
            text: "Lassú indulás és lefagyás okának feltárása",
            benefit: "Nem találgatás, célzott javítás történik.",
          },
          {
            text: "Új laptop vagy asztali gép beüzemelése, átköltöztetéssel",
            benefit: "Gyorsabb indulás, kevesebb kiesett munkaidő.",
          },
          {
            text: "Otthoni vagy irodai alap hálózat rendbetétele",
            benefit: "Stabilabb internet és kevesebb megszakadás.",
          },
          {
            text: "Nyomtató és szkenner telepítése, hálózati megosztása",
            benefit:
              "A szükséges driverek, beolvasási célok és többgépes használat is beállítható.",
          },
          {
            text: "Monitor, dokkoló, webkamera és egyéb perifériák beüzemelése",
            benefit:
              "Az eszközök megfelelő csatlakoztatással és kipróbált beállításokkal működnek.",
          },
          {
            text: "Router, Wi-Fi és vezetékes kapcsolat alap hibakeresése",
            benefit:
              "Segítség gyenge jel, szakadozás vagy eszközcsatlakozási problémák esetén.",
          },
          {
            text: "Külső meghajtó, adattárolás és egyszerű mentés beállítása",
            benefit:
              "A fontos fájlok rendezettebben és kisebb adatvesztési kockázattal tárolhatók.",
          },
        ],
      },
      {
        title: "Kisvállalkozói kisebb programok és weboldalak",
        items: [
          {
            text: "Árkalkuláció mini app munkadíjjal és anyagköltséggel",
            benefit: "Gyorsabb és egységesebb árajánlatadás helyszínen is.",
          },
          {
            text: "Landing page szolgáltatás bemutatására és ajánlatkérésre",
            benefit:
              "Több érdeklődő érkezik, és egyszerűbb a kapcsolatfelvétel.",
          },
          {
            text: "Portfólió oldal referenciákkal és képgalériával",
            benefit: "Gyorsabban épít bizalmat új ügyfeleknél.",
          },
          {
            text: "Statikus vagy dinamikus weboldal az igényekhez igazítva",
            benefit: "Csak azért fizetsz, amire valóban szükséged van.",
          },
          {
            text: "Egyszerű ügyfél- és ajánlatnyilvántartó kis program",
            benefit: "Kevesebb admin, gyorsabb utánkövetés.",
          },
        ],
      },
      {
        title: "Weboldal frissítés és gyorsítás",
        items: [
          {
            text: "Meglévő weboldal rendbetétele és korszerűsítése",
            benefit: "Modernebb benyomás, jobb első bizalom.",
          },
          {
            text: "Betöltési sebesség javítása, felesleges elemek csökkentése",
            benefit: "Kevesebb lemorzsolódó látogató.",
          },
          {
            text: "Tartalom és menüpontok átláthatóbb újrarendezése",
            benefit: "A látogató gyorsabban megtalálja, amit keres.",
          },
        ],
      },
      {
        title: "Kapcsolat- és ajánlatkérési folyamat egyszerűsítése",
        items: [
          {
            text: "Könnyebben kitölthető kapcsolatfelvételi űrlap",
            benefit: "Több érdeklődő küldi el végig az űrlapot.",
          },
          {
            text: "Automatikus visszaigazolás az érdeklődőknek",
            benefit: "Az ügyfél azonnal tudja, hogy megérkezett az üzenete.",
          },
          {
            text: "Beérkező kérések rendezése egy átlátható nézetben",
            benefit: "Kevesebb elveszett ajánlatkérés.",
          },
        ],
      },
      {
        title: "Számlázás és admin feladatok egyszerűsítése",
        items: [
          {
            text: "Fizetési határidők automatikus emlékeztetése",
            benefit: "Gyorsabban beérkező számlák és jobb pénzforgalom.",
          },
          {
            text: "Be nem fizetett számlák gyors áttekintése",
            benefit: "Azonnal látszik, kit kell emlékeztetni.",
          },
          {
            text: "Havi admin feladatok listázása egy helyen",
            benefit: "Kisebb eséllyel marad ki fontos teendő.",
          },
        ],
      },
      {
        title: "Dokumentumok és belső tudásanyag rendezése",
        items: [
          {
            text: "Szerződések, sablonok és minták egy közös helyen",
            benefit: "Nem kell több mappában keresgélni.",
          },
          {
            text: "Egyszerű keresés a dokumentumok között",
            benefit: "Pár másodperc alatt megtalálható, ami kell.",
          },
          {
            text: "Verziók és frissítések követése átláthatóan",
            benefit: "Mindig látszik, melyik a legfrissebb fájl.",
          },
          {
            text: "Jóváhagyási lépések és felelősök kijelölése dokumentumonként",
            benefit:
              "Pontosan látszik, kinél tart az anyag, így gyorsabb az ügyintézés.",
          },
        ],
      },
      {
        title: "Belső kommunikáció és feladatátadás egyszerűsítése",
        items: [
          {
            text: "Rövid, egységes átadási jegyzetek minden feladathoz",
            benefit: "Kevesebb félreértés a csapaton belül.",
          },
          {
            text: "Visszakérdezések és döntések egy helyen rögzítve",
            benefit: "Nem vész el fontos információ e-mailek között.",
          },
          {
            text: "Feladathoz kötött felelős és határidő",
            benefit: "Egyértelmű, ki mit visz tovább és meddig.",
          },
          {
            text: "Lezárt feladatok rövid tanulságainak gyűjtése",
            benefit: "A csapat gyorsabban tanul, kevesebb hibával dolgozik.",
          },
        ],
      },
      {
        title: "Adatbázisok tervezése és rendbetétele",
        items: [
          {
            text: "Új adatbázis felépítése a valós működéshez igazítva",
            benefit: "Stabil alapot ad a későbbi bővítésekhez.",
          },
          {
            text: "Régi, szétszórt adatok egyesítése és tisztítása",
            benefit: "Pontosabb adatokkal könnyebb jó döntést hozni.",
          },
          {
            text: "Gyorsabb keresés és szűrés a nagyobb adatmennyiségnél",
            benefit: "Kevesebb várakozás, gyorsabb napi munka.",
          },
          {
            text: "Automatikus mentési és visszaállítási javaslatok",
            benefit: "Kisebb kockázat adatvesztés esetén.",
          },
        ],
      },
      {
        title: "Infrastruktúra kialakítása és tanácsadás (SEO-val)",
        items: [
          {
            text: "Alap technikai környezet kialakítása (domain, tárhely, e-mail)",
            benefit: "Gyorsabb indulás, kevesebb technikai akadály.",
          },
          {
            text: "Rendszer- és eszközválasztási tanácsadás",
            benefit: "Nem fizetsz feleslegesen rossz eszközökre.",
          },
          {
            text: "SEO tanácsadás: kereshetőség javítása technikai és tartalmi oldalon",
            benefit: "Könnyebben rád találnak a potenciális ügyfelek.",
          },
          {
            text: "Weboldal teljesítmény és alap biztonság ellenőrzése",
            benefit: "Stabilabb működés és jobb felhasználói élmény.",
          },
        ],
      },
    ],
    ctaTitle: "Nem találod, amit keresel?",
    ctaDesc:
      "Ha nem tudod pontosan, mit szeretnél, írj 3 mondatot a problémáról, és javaslok egy gyors, költséghatékony megoldást.",
    ctaButton: "Kérek javaslatot",
  },
  useCases: {
    labels: {
      problem: "Probléma",
      solution: "Javasolt megoldás",
      why: "Miért jó",
    },
    cards: [
      {
        id: "internal-dev",
        title: "Saját belső fejlesztés, kiszámíthatóan",
        who: "KKV tulajdonosok, csapatvezetők",
        timeframeLabel: "Lépésenként indulás",
        problem: [
          "Sok apró belső igény gyűlik össze, de nincs rá dedikált ember.",
          "Nehéz előre látni, mennyi idő és pénz kell a fejlesztésekre.",
        ],
        solution: [
          "Egy közös belső felület a napi feladatokra.",
          "Státuszok, jogosultságok és kimutatások egy helyen.",
          "Fokozatos bővítés, mindig a legfontosabb lépéssel.",
        ],
        why: [
          "Nem kell egyszerre nagy projektet bevállalni.",
          "Átláthatóbb működés és jobb vezetői rálátás.",
        ],
      },
      {
        id: "web-project",
        title: "Weboldal, webes program vagy asztali program?",
        who: "Növekedő vállalkozások",
        timeframeLabel: "Gyors indulás, stabil folytatás",
        problem: [
          "Nem egyértelmű, milyen megoldás illik a cégedhez.",
          "Egy rossz döntés később drága kerülőutat okozhat.",
        ],
        solution: [
          "Rövid egyeztetés után kiválasztjuk a megfelelő irányt.",
          "Először a legfontosabb funkció készül el, hogy gyorsan használható legyen.",
          "Úgy épül fel, hogy később könnyen bővíthető maradjon.",
        ],
        why: [
          "A projekt már az elején fókuszban marad.",
          "A költség és a haladás jobban követhető.",
        ],
      },
      {
        id: "private-tools",
        title: "Egyszerű, saját listázó program magánszemélyeknek",
        who: "Egyéni felhasználók",
        timeframeLabel: "Kisebb feladat, gyors átadás",
        problem: [
          "A napi nyilvántartás több helyen vagy papíron történik.",
          "A meglévő programok túl bonyolultak az igényhez képest.",
        ],
        solution: [
          "Egyszerű listázó felület a saját mezőiddel.",
          "Gyors keresés, szűrés, export.",
          "Pont annyi funkció, amennyi valóban kell.",
        ],
        why: [
          "Kevesebb idő megy el adminisztrációra.",
          "Átlátható marad, nem lesz túlbonyolítva.",
        ],
      },
      {
        id: "crm-sales",
        title: "Ajánlatok és utánkövetések nem veszhetnek el",
        who: "Szolgáltató cégek / értékesítési csapatok",
        timeframeLabel: "Gyors alapverzió, későbbi bővítéssel",
        problem: [
          "Az ajánlatok e-mailben, jegyzetben és táblázatban szóródnak szét.",
          "Nincs tiszta kép arról, kinél mi a következő lépés.",
          "Az utánkövetés könnyen késik vagy elmarad.",
        ],
        solution: [
          "Egyszerű folyamat: érdeklődő -> ajánlat -> utánkövetés -> lezárás.",
          "Automatikus emlékeztetők a következő teendőkhöz.",
          "Átlátható nézet a teljes csapatnak.",
        ],
        why: [
          "Kevesebb elveszett lehetőség.",
          "Kiszámíthatóbb értékesítési munka.",
          "Gyorsabb reakció az ügyfelek felé.",
        ],
      },
      {
        id: "excel-workflow",
        title: "Kinőtt Excel-nyilvántartás rendbetétele vagy kiváltása",
        who: "Excelben dolgozó kisvállalkozások és irodai csapatok",
        timeframeLabel: "Első használható verzió 1–3 hét alatt",
        problem: [
          "Több fájl és eltérő verzió kering e-mailben vagy megosztott mappákban.",
          "A képletek könnyen sérülnek, az ismétlődő adatbevitel pedig hibákat okoz.",
          "Nehéz megmondani, ki és mikor módosított egy fontos adatot.",
        ],
        solution: [
          "A meglévő munkafüzetek és folyamatok rövid felmérése, adattisztítással.",
          "Egységes import, ellenőrzött űrlapok, keresés és jogosultságok.",
          "Automatikus összesítők, exportok és szükség esetén fokozatos webes kiváltás.",
        ],
        why: [
          "Nem kell mindent egyszerre lecserélni: az Excel-import és -export megmaradhat.",
          "Kevesebb kézi másolás, sérült képlet és verzióütközés.",
          "Pontosabb adatok és gyorsabban elkészülő kimutatások.",
        ],
      },
      {
        id: "admin-automation",
        title: "Adminisztráció automatizálása, hogy ne vigye el a napot",
        who: "Irodai adminisztrációt végző KKV-k",
        timeframeLabel: "1-2 kulcslépéssel induló automatizálás",
        problem: [
          "Sok ismétlődő manuális adatbevitel terheli a csapatot.",
          "Ugyanazt az adatot több helyre kell beírni.",
          "A hibák javítása utólag sok időt visz el.",
        ],
        solution: [
          "Automatikus adatátadás a használt eszközök között.",
          "Űrlapok és belső lépések összekötése.",
          "Egyszerű ellenőrzési pontok a hibák csökkentésére.",
        ],
        why: [
          "Kevesebb dupla munka.",
          "Pontosabb és gyorsabb napi munka.",
          "A csapat több időt fordíthat fontos feladatokra.",
        ],
      },
      {
        id: "printer-command-line-recovery",
        title: "Nyomtatási hiba helyreállítása parancssori diagnosztikával",
        who: "Otthoni felhasználók és kis irodák",
        timeframeLabel: "Célzott, gyors hibaelhárítás",
        problem: [
          "A nyomtató csatlakoztatva volt, de a Windows nem tudta megfelelően használni.",
          "A szokásos újracsatlakoztatás és grafikus beállítások nem oldották meg a hibát.",
          "A nyomtatási sor, a szolgáltatás, a port vagy az illesztőprogram beállítása hibás állapotban maradt.",
        ],
        solution: [
          "A nyomtatási szolgáltatás, a várólista és az eszközbeállítások ellenőrzése parancssorból.",
          "A hibás állapot célzott visszaállítása, majd a port és az illesztőprogram egyeztetése.",
          "Tesztoldalas ellenőrzés a teljes rendszer újratelepítése nélkül.",
        ],
        why: [
          "Nem kellett új számítógépet, nyomtatót vagy Windows-telepítést választani.",
          "A beavatkozás a hiba okát kezelte, nem csak ideiglenesen kerülte meg.",
          "Hasonló szoftveres és perifériaproblémák távolról is megoldhatók lehetnek.",
        ],
      },
      {
        id: "pc-service",
        title: "Lassú a gép? Sokszor RAM vagy SSD bővítéssel gyorsan javítható",
        who: "Magánszemélyek és helyi vállalkozások",
        timeframeLabel: "Gyors hibaelhárítás és karbantartás",
        problem: [
          "Lassú vagy bizonytalanul működő gép akadályozza a munkát.",
          "Kevés RAM esetén a rendszer belassulhat több alkalmazás mellett.",
          "Rendszerhiba vagy vírus miatt leállhat a napi használat.",
        ],
        solution: [
          "Átvizsgálás után célzott RAM vagy SSD bővítés, ha ez kell a gyorsuláshoz.",
          "Rendszer rendbetétele és tisztítása a jobb működésért.",
          "Újratelepítés és adatmentés, ha szükséges.",
        ],
        why: [
          "Rövidebb kiesés, gyorsabb visszaállás.",
          "Megbízhatóbb géphasználat a mindennapokban.",
          "Nem kell feleslegesen új gépet venni.",
        ],
      },
    ],
  },
  steps: [
    {
      title: "Rövid felmérés",
      desc: "15-30 percben feltérképezzük, hol megy el idő és hol csúszik a munka.",
    },
    {
      title: "Javaslat + prototípus",
      desc: "Kapsz 1-2 tiszta opciót, és egy gyorsan kipróbálható első verziót.",
    },
    {
      title: "Építés & átadás",
      desc: "Lépésenként építünk, heti haladással. Átadáskor betanítás és rövid útmutató is jár.",
    },
    {
      title: "Support",
      desc: "Havi csomagban karbantartás és kisebb fejlesztések. Stabil működés.",
    },
  ],
  pricingGrid: {
    labels: {
      mostPopular: "Bővíthető alap",
      requestOffer: "Ajánlatkérés",
      development: "Fejlesztés",
      pcAddon: "PC és számítógépes segítség",
      noteTitle: "Megjegyzés:",
      noteText:
        "Az induló árak tudatosan szűk, jól körülhatárolt tartalomra vonatkoznak. A pontos funkciókat, az adótartalmat és az esetleges külső költségeket rövid egyeztetés után, írásos ajánlatban rögzítem.",
    },
    plans: [
      {
        name: "Folyamatfelmérés + célzott megoldás",
        price: "79 000 Ft-tól",
        hint: "Egy jól körülhatárolt probléma felmérése és megoldása",
        features: [
          "Rövid folyamatfelmérés és priorizált javaslat",
          "Egy manuális lépés kiváltása: emlékeztető, státuszkövetés vagy egyszerű összefoglaló",
          "Átadás és rövid betanítás",
        ],
      },
      {
        name: "Mini automatizálás sprint",
        price: "129 000 Ft-tól",
        hint: "2–3 hét • kevesebb kézi admin, gyors eredménnyel",
        features: [
          "1 ismétlődő folyamat automatizálása, legfeljebb 2 adatforrással",
          "Automatikus emlékeztetők és alap státuszkövetés",
          "Rövid videós átadás és használati leírás",
        ],
      },
      {
        name: "Ajánlatkezelés alapcsomag",
        price: "199 000 Ft-tól",
        hint: "Tisztább értékesítési folyamat • kevesebb elvesző érdeklődő",
        features: [
          "Pipeline: érdeklődő → ajánlat → utánkövetés → lezárás",
          "Feladat- és határidő-emlékeztetők",
          "Csapat szintű áttekintés a folyamat szűk keresztmetszeteiről",
        ],
      },
      {
        name: "Belső rendszer – induló modul",
        price: "349 000 Ft-tól",
        hint: "Egy fő folyamat működő első verziója • később bővíthető",
        popular: true,
        features: [
          "Egy kiválasztott folyamat és a hozzá tartozó alapadatok kezelése",
          "Legfeljebb 2 szerepkör, státuszkövetés és alap naplózás",
          "Egy áttekintő felület a legfontosabb mutatókkal",
          "Átadás és dokumentáció",
        ],
      },
      {
        name: "Weboldal induló csomag",
        price: "149 000 Ft-tól",
        hint: "Bemutatkozás + érdeklődőgyűjtés • gyors online induláshoz",
        features: [
          "Legfeljebb 4 tartalmi oldal, egy nyelven, hozott szöveggel",
          "Kapcsolati vagy ajánlatkérő űrlap beállítással",
          "Sebességoptimalizálás és alap SEO beállítások",
        ],
      },
      {
        name: "Landing page csomag",
        price: "99 000 Ft-tól",
        hint: "1 fókuszált oldal • hirdetéshez vagy ajánlatkéréshez",
        features: [
          "1 mobilbarát oldal, legfeljebb 6 szekcióval, hozott tartalommal",
          "Űrlap, köszönőoldal és alap mérés (pl. Analytics / események)",
          "1 összevont módosítási kör és átadás",
        ],
      },
      {
        name: "Landing + hirdetésindítás",
        price: "179 000 Ft-tól",
        hint: "Landing oldal + alap kampány setup • mérhető indulás",
        features: [
          "Landing oldal konverziós űrlappal és köszönőoldallal",
          "Google / Meta alap kampánybeállítás és eseménymérés",
          "30 napos finomhangolási javaslat rövid riporttal",
        ],
      },
      {
        name: "Adatbázis + riportok",
        price: "249 000 Ft-tól",
        hint: "Szétszórt adatokból tiszta alap • gyorsabb döntésekhez",
        features: [
          "Adattisztítás és ismétlődések csökkentése",
          "Közös adatstruktúra kialakítása",
          "Vezetői összefoglaló nézet és export",
        ],
      },
      {
        name: "Weboldal karbantartás",
        price: "19 000 Ft / hó-tól",
        hint: "Frissítés, hibajavítás és kisebb módosítások havi keretben",
        features: [
          "Rendszeres frissítések, mentések és biztonsági ellenőrzések",
          "Havi 1 óra kisebb tartalmi és funkcionális módosítás",
          "Havi működési és teljesítmény-ellenőrzés",
        ],
      },
      {
        name: "Rendszer karbantartás",
        price: "39 000 Ft / hó-tól",
        hint: "Meglévő egyedi rendszered stabil működéséhez",
        features: [
          "Hibajavítás és verziókövetés",
          "Havi 2 óra kisebb fejlesztés vagy hibajavítás",
          "Működési riport és javaslat a következő lépésekhez",
        ],
      },
      {
        name: "SEO alapcsomag",
        price: "39 000 Ft / hó-tól",
        hint: "Lokális + technikai SEO kisvállalkozói fókuszban",
        features: [
          "Technikai SEO alapjavítások (sebesség, meta, indexelés)",
          "Lokális SEO beállítások és kulcsszófókusz",
          "Havi rövid teljesítmény-összefoglaló",
        ],
      },
      {
        name: "SEO + tartalomfrissítés",
        price: "69 000 Ft / hó-tól",
        hint: "Technikai SEO + tartalom + rendszeres frissítés",
        features: [
          "SEO alapcsomag + havi tartalmi frissítések",
          "Kulcsszófókuszú oldal- és szövegfrissítés",
          "Havi riport: láthatóság, kattintások, javasolt következő lépés",
        ],
      },
      {
        name: "Tanácsadás és tervezés",
        price: "12 000 Ft / óra",
        hint: "Gyors szakmai döntéstámogatás elakadás esetén",
        features: [
          "Rendszer- és folyamatátvilágítás",
          "Konkrét, priorizált javaslatlista",
          "Igény esetén a tanácsadás kivitelezésbe fordítható",
        ],
      },
      {
        name: "Fejlesztési keret – 5 óra",
        price: "55 000 Ft / csomag",
        hint: "Kisebb backlog, gyors javítások és mini fejlesztések",
        features: [
          "5 óra fejlesztési keret 60 napon belüli felhasználással",
          "Prioritás szerinti feladatsorrend és státuszfrissítés",
          "Átlátható időelszámolás feladatonként",
        ],
      },
      {
        name: "Fejlesztési keret – 10 óra",
        price: "105 000 Ft / csomag",
        hint: "Folyamatos kisebb igényekhez kedvezőbb óradíjjal",
        features: [
          "10 óra fejlesztési keret 90 napon belüli felhasználással",
          "Gyorsabb reakció több párhuzamos kisebb feladatra",
          "Havi rövid összefoglaló a felhasznált keretről",
        ],
      },
      {
        name: "Egyedi fejlesztés",
        price: "12 000 Ft / óra",
        hint: "Rugalmas elszámolás kisebb, egyedi feladatokhoz",
        features: [
          "Konkrét fejlesztés a megbeszélt feladatra",
          "Átlátható elszámolás időráfordítás szerint",
          "Minimum 2 óra / alkalom az érdemi haladásért",
        ],
      },
      {
        name: "Sürgős hibajavítás",
        price: "18 000 Ft / óra",
        hint: "Kiemelt prioritású, gyors beavatkozást igénylő hibákra",
        features: [
          "Hibaanalízis és javítás 24–48 órás célidővel",
          "Kommunikáció és állapotfrissítés rövid ciklusokban",
          "Csak sürgős, üzletileg kritikus esetekre",
        ],
      },
      {
        name: "Havi support / üzemeltetés",
        price: "29 000 Ft / hó-tól",
        hint: "Karbantartás, kisebb fejlesztések és kiszámítható működés",
        features: [
          "Frissítések, mentések és alap ellenőrzések",
          "Havi keret kisebb módosításokra és fejlesztésekre",
          "Gyors hibajavítás és tanácsadás",
        ],
      },
    ],
    pcPlans: [
      {
        name: "PC alapellenőrzés és hibafelmérés",
        price: "5 000 Ft-tól",
        hint: "Legfeljebb 30 perces első felmérés • javítás külön egyeztetéssel",
        features: [
          "A panasz és az alap rendszerállapot ellenőrzése",
          "Induló programok, tárhely és elérhető hibaadatok áttekintése",
          "Javaslat: mit érdemes javítani vagy bővíteni",
        ],
      },
      {
        name: "Windows újratelepítés + adatmentés",
        price: "12 900 Ft-tól",
        hint: "Géptípustól és mentési igénytől függ",
        features: [
          "Adatmentés a megbeszélt mappák szerint",
          "Tiszta telepítés + driverek + alap beállítás",
          "Alap programcsomag (böngésző, PDF stb.)",
        ],
      },
      {
        name: "SSD vagy RAM bővítés",
        price: "5 000 Ft-tól",
        hint: "Munkadíj • alkatrész külön",
        features: [
          "Kompatibilitás ellenőrzés és egyszerű RAM/SSD-beépítés",
          "Szakszerű beépítés és alap teszt",
          "Klónozás, rendszerköltöztetés és nehéz szétszerelés külön díj",
        ],
      },
      {
        name: "Új gép beüzemelés + átköltöztetés",
        price: "9 900 Ft-tól",
        hint: "Régi gépről újra • kisebb leállással",
        features: [
          "Felhasználói beállítások és alap programok telepítése",
          "Fontos fájlok és mappák átmásolása",
          "Email és alap eszközök működésének ellenőrzése",
        ],
      },
      {
        name: "Kisvállalati géppark karbantartás",
        price: "24 900 Ft / hó-tól",
        hint: "2–5 géphez • megelőző karbantartás és gyors reakció",
        features: [
          "Havi állapotellenőrzés és frissítések",
          "Alap biztonsági és mentési ellenőrzés",
          "Prioritásos hibabejelentés-kezelés",
        ],
      },
      {
        name: "PC összeszerelés és alapteszt",
        price: "12 000 Ft-tól",
        hint: "Egyszerű asztali konfiguráció • alkatrészek külön",
        features: [
          "Konfigurációtervezés költségkeret és felhasználás alapján",
          "Összeszerelés, kábelmenedzsment és alap stabilitásteszt",
          "Operációs rendszer és adatköltöztetés külön ajánlat szerint",
        ],
      },
      {
        name: "Távoli számítógépes segítség",
        price: "5 000 Ft-tól",
        hint: "Első 30 perc • folytatás csak előre egyeztetett díjjal",
        features: [
          "Program-, e-mail-, nyomtató- és alap rendszerbeállítások",
          "Szoftveres hibák, frissítések és lassulások ellenőrzése",
          "Biztonságos kapcsolódás, csak az egyeztetett időtartamra",
        ],
      },
    ],
  },
  pcService: {
    eyebrow: "Kiegészítő szolgáltatás",
    title: "Eseti PC szerviz és számítógépes segítség",
    description:
      "Magánszemélyeknek és vállalkozásoknak elsősorban Siófokon és környékén, valamint Somogy megyében. Távolabbi helyszín is egyeztethető.",
    availability: "Elérhetőség",
    area: [
      "📍 Gépleadás: Siófok vagy környéke",
      "🚗 Kiszállás Somogy megyében, távolabb előzetes egyeztetéssel",
      "💻 Távoli segítség is elérhető",
    ],
    typicalIssues: "Tipikus problémák",
    dailyPainPoints: "Mindennapi fájdalompontok",
    typicalIssuesList: [
      "Windows újratelepítés és adatmentés",
      "Lassú gép gyorsítása, vírusirtás",
      "Indulási és lefagyási problémák feltárása",
      "SSD / RAM és egyéb alkatrész bővítés",
      "Laptop tisztítás és hűtés karbantartás",
      "Új eszköz beüzemelése",
      "Céges gépek karbantartása",
      "Egyedi PC összerakás és tanácsadás",
    ],
    everyday: [
      "Eltűnt fájlok, véletlen törlés vagy sérült rendszer",
      "Nem indul el a laptop (fekete képernyő, boot hiba)",
      "Új laptopot vettél, de nincs rendesen beállítva",
      "Nincs biztonsági mentés – adatvesztés megelőzés",
    ],
    tipTitle: "A lassú gép nem mindig „öreg gép”.",
    tipText:
      "Sok esetben egy SSD csere vagy rendszerkarbantartás töredék áron jelentős gyorsulást hoz egy új gép vásárlásához képest.",
  },
  comingSoon: {
    locationLine:
      "Siófok és környéke • Somogy megye • Távolabb egyeztetéssel • Online országosan",
    title: "Hamarosan indulunk 🚀",
    description:
      "Dolgozunk az oldalon. Addig is, ha belső rendszert, automatizálást vagy átlátható összefoglaló nézetet szeretnél, írj nyugodtan emailt.",
    sendEmail: "Írok emailt",
    call: "Hívás",
    discoveryTitle: "15 perces egyeztetés",
    discoveryText:
      "3 kérdés alapján megmondom, mi a leggyorsabb nyereség nálatok.",
    fastStartTitle: "Gyors indulás",
    fastStartText:
      "Tipikusan 1–2 hét alatt elindítható egy első, működő megoldás.",
    emailLabel: "Email:",
    phoneLabel: "Telefon:",
  },
  aboutPage: {
    eyebrow: "Rólam",
    title: "Digitális megoldások, emberközelből",
    description:
      "Zoli vagyok, a Molnár Systems fejlesztője. Szeretem megérteni, hogyan dolgozik valaki, és olyan szoftvert készíteni, amely illeszkedik a feladataihoz és az ötleteihez.",
    locationLine:
      "Siófok és környéke • Somogy megye • Távolabb egyeztetéssel • Online országosan",
  },
  aboutSection: {
    intro: [
      "Mérnökinformatikusként egyedi szoftvereket, webes felületeket és automatizálásokat készítek. Kisvállalkozásoknak és magánszemélyeknek is segítek: egy ismétlődő feladat egyszerűsítésétől egy saját alkalmazás megvalósításáig.",
      "A Molnár Systems célja, hogy a napi munkát és a saját ötletek megvalósítását átgondolt fejlesztésekkel segítse. Ez lehet egy Excel-táblázat automatizálása, több forrásból érkező adatok összefésülése, egy rendszeresen frissülő kimutatás vagy egy egyedi nyilvántartó alkalmazás. Abból indulok ki, amit már használsz, és közösen megnézzük, min érdemes változtatni.",
      "Fontos számomra, hogy értsd és kényelmesen tudd használni az elkészült megoldást. Előre egyeztetjük a feladatot és a díjat, fejlesztés közben megmutatom, hol tartunk, az átadáskor pedig végigvesszük a használatát. Kisebb, jól körülhatárolt kéréssel is megkereshetsz.",
      "A fejlesztés mellett PC-építésben, bővítésben, diagnosztikában és eszközbeállításban is tudok segíteni. Online országosan dolgozom; személyesen elsősorban Siófokon és környékén, valamint Somogy megyében vagyok elérhető. Távolabbi kiszállást előzetes egyeztetéssel vállalok.",
    ],
    valuesTitle: "Amit fontosnak tartok",
    values: [
      {
        title: "Valódi problémák megoldása",
        desc: "Először megértem a feladatot és a jelenlegi munkamenetet. Így olyan változtatást tudok javasolni, amelynek a mindennapi használatban is értelme van.",
      },
      {
        title: "Mérnöki szemlélet és stabilitás",
        desc: "Szoftverfejlesztési, rendszertervezési és adatkezelési háttérrel dolgozom, ezért fontos számomra, hogy a végeredmény ne csak látványos, hanem megbízható és hosszú távon is használható legyen.",
      },
      {
        title: "Egyszerűség és átláthatóság",
        desc: "Világos feladatleírással, egyeztetett díjjal és követhető lépésekkel dolgozom. A kész megoldás mellé érthető használati útmutatót adok.",
      },
      {
        title: "Személyes hozzáállás",
        desc: "Közvetlenül velem egyeztetsz, és én dolgozom a megoldáson. A kérdéseidet és a használat közben felmerülő észrevételeidet is átbeszéljük.",
      },
    ],
    ctaTitle: "Dolgoznál velem?",
    ctaDesc:
      "Írd le az ötletedet vagy azt a feladatot, amit egyszerűsítenél. Az első egyeztetésen megnézzük, hogyan tudok segíteni.",
    ctaButton: "Kapcsolatfelvétel",
  },
  contactPage: {
    eyebrow: "Kapcsolat",
    title: "Ötleted van, vagy segítségre van szükséged?",
    description:
      "Írd meg röviden, miben lenne szükséged segítségre, és megnézzük, hogyan lehet belőle egy egyszerűen használható, működő megoldás. Az első egyeztetés kötetlen.",
    contactDetails: "Elérhetőségek",
    phone: "Telefon:",
    coverage: "Terület:",
    coverageValue:
      "Siófok és környéke • Somogy megye • Távolabb egyeztetéssel • Online országosan",
    helpTitle: "Ez segít, ha megírod",
    helpItems: [
      "milyen ötlettel vagy problémával keresel meg",
      "eszközhiba esetén a pontos típust és a tünetet",
      "mit szeretnél elérni, és van-e kereted vagy határidőd",
    ],
    responseTitle: "Mire számíthatsz?",
    responseText:
      "Általában 24 órán belül válaszolok, és ha látok jó irányt, egy rövid egyeztetésben átbeszéljük a következő lépést.",
  },
  contactForm: {
    name: "Név",
    namePlaceholder: "Pl. Kiss Péter",
    emailLabel: "Email",
    emailPlaceholder: "pl. peter@example.com",
    helpLabel: "Miben segíthetek?",
    helpTooltip:
      "Írd le, mi a probléma és mi a cél, kb. hány felhasználó érintett, van-e határidő. Minél több infó, annál jobb javaslatot tudok adni!",
    detailsPlaceholder:
      "Írd le a kérésedet: saját ötlet, weboldal, PC-építés, bővítés vagy eszközhiba. Ha tudod, add meg a típust, a keretet és a határidőt.",
    validationRequired: "Kérlek töltsd ki ezt a mezőt.",
    validationEmail: "Kérlek adj meg egy érvényes email címet.",
    sending: "Küldés...",
    send: "Üzenet küldése",
    success: "Köszi! Megkaptam az üzenetet, hamarosan válaszolok.",
    error: "Hopp, valami nem ment át. Írj emailt, vagy próbáld újra.",
    validationTooShort: "Kérlek, írj be egy kicsit hosszabb szöveget.",
    validationTooLong: "A megadott szöveg túl hosszú.",
  },
  servicesPage: {
    eyebrow: "Szolgáltatások",
    title: "Digitális és hardveres megoldások",
    description:
      "Egyedi rendszerek, automatizálás, webes és hardveres segítség — a stabil adatkezeléstől és mentéstől a kereső- és AI-láthatóságig.",
  },
  pricingPage: {
    eyebrow: "Árak",
    title: "Kiinduló csomagok, érthető keretek",
    description:
      "Néhány tipikus megoldás irányára. A pontos műszaki tartalmat és költséget rövid felmérés után rögzítjük.",
  },
  notFound: {
    eyebrow: "404",
    title: "Az oldal nem található",
    description:
      "A keresett oldal nem létezik, vagy időközben másik címre került.",
    home: "Vissza a főoldalra",
    contact: "Kapcsolat",
  },
};

const en: Dictionary = {
  nav: {
    subtitle: "digitalization • systems",
    items: [
      { href: "/", label: "Home" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    mobileMenuLabel: "Menu",
    languageSwitcher: {
      hu: "Switch language to Hungarian",
      en: "Switch language to English",
    },
    themeToggle: {
      light: "Light mode",
      dark: "Dark mode",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
  },
  footer: {
    location:
      "Siófok area • Somogy county • Further afield by arrangement • Online across Hungary",
    services: "Services",
    pricing: "Pricing",
    contact: "Contact",
  },
  home: {
    why: {
      eyebrow: "Why it works",
      title: "Less manual work. Fewer mistakes. Better visibility.",
      description:
        "The goal is not just to build something, but to help your company run faster and calmer.",
    },
    useCases: {
      eyebrow: "How it looks in practice",
      title: "Simpler day-to-day operations with less chaos",
      description:
        "I help businesses simplify operations with automation, tailored development, and reliable computer support.",
    },
    services: {
      eyebrow: "Services",
      title: "Focused solutions here, full list on a dedicated page",
      description:
        "This section gives a quick overview. Full service details are on the Services page.",
    },
    process: {
      eyebrow: "How we work",
      title: "Transparent process, weekly small deliveries",
      description: "Short check-ins, fast prototype, stable handover.",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Packages and custom offers",
      description:
        "Quick overview here, full pricing details are on the Pricing page.",
    },
  },
  hero: {
    badges: [
      "Less administration",
      "Replace Excel",
      "Real-time reporting",
      "Custom software",
    ],
    title:
      "Stop juggling Excel and notes — run your business from one clear dashboard.",
    locationLine:
      "Molnár Systems • Siófok area and Somogy county • Further afield by arrangement • Online across Hungary",
    intro:
      "If you are tired of searching through spreadsheets and notes, I build a simple custom system that saves time, reduces errors, and makes operations visible.",
    ctaPrimary: "Book a free consultation",
    ctaSecondary: "Pricing & packages",
    note: "15-minute pre-check – I will tell you if development is worth it.",
    bullets: [
      "Internal systems and workflow automation",
      "Database-first operation with reports and exports",
      "Integrations with existing tools and systems",
      "Financial and operational metrics in one dashboard",
      "Replace Excel with a stable custom web system",
      "PC service and computer support (local add-on, online available)",
    ],
  },
  featureGrid: [
    {
      title: "Deadlines and automatic reminders",
      desc: "Email notifications, task tracking and status follow-up so nothing slips.",
    },
    {
      title: "Clear reports and dashboards",
      desc: "Revenue, costs and trends in one view for faster decisions.",
    },
    {
      title: "Inventory and resource tracking",
      desc: "Minimum stock alerts, movement tracking and reorder suggestions.",
    },
    {
      title: "Clean, stable database foundation",
      desc: "Organized data without duplicates, with fast queries and scalable structure.",
    },
    {
      title: "Access control and data safety",
      desc: "Roles, logging and baseline protection so everyone sees only what they should.",
    },
    {
      title: "Reliable operations and support",
      desc: "Maintenance, backups and small improvements for predictable operation.",
    },
    {
      title: "Faster quoting and pricing",
      desc: "Quotes can be prepared in a few clicks with consistent calculations and fewer manual mistakes.",
    },
    {
      title: "Real-time job status tracking",
      desc: "You can instantly see where each task stands, making prioritization and response easier.",
    },
    {
      title: "Fewer calls and clarification loops",
      desc: "Shared, clear information helps both clients and team members get answers faster.",
    },
  ],
  servicesPreview: {
    cards: [
      {
        title: "Internal systems and web apps",
        items: [
          {
            text: "Client/job tracking (simple system)",
            benefit: "All key information stays in one place.",
          },
          {
            text: "Flow: incoming -> in progress -> done -> invoiced",
            benefit: "You always see where each job stands.",
          },
          {
            text: "Client portal, documents and statuses",
            benefit: "Fewer back-and-forth messages with clients.",
          },
          {
            text: "Team task list and daily work tracking",
            benefit: "Clearer priorities for everyday work.",
          },
          {
            text: "Simple permission setup (who can view or edit what)",
            benefit: "Lower chance of avoidable mistakes.",
          },
        ],
      },
      {
        title: "Automation and notifications",
        items: [
          {
            text: "Deadline alerts by email",
            benefit: "Fewer missed tasks and tighter execution.",
          },
          {
            text: "Minimum stock monitoring",
            benefit: "Avoid running out of key materials unexpectedly.",
          },
          {
            text: "Reminders: service, expiry dates, controls",
            benefit: "Recurring tasks get done on time.",
          },
          {
            text: "Automatic client updates when status changes",
            benefit: "More trust and fewer status-check calls.",
          },
          {
            text: "Daily or weekly email summary of open tasks",
            benefit: "Fast management overview without extra meetings.",
          },
        ],
      },
      {
        title: "Database, reports and decision support",
        items: [
          {
            text: "Revenue-costs, unpaid invoices and profit overview",
            benefit: "You can clearly see what earns and what drains money.",
          },
          {
            text: "Key metrics with clear charts",
            benefit: "Important trends are easier to understand at a glance.",
          },
          {
            text: "Data cleanup and duplicate removal",
            benefit: "More accurate records and fewer admin errors.",
          },
          {
            text: "Simple monthly performance summary",
            benefit: "Faster planning for the next month.",
          },
          {
            text: "Quick export for accounting or management review",
            benefit: "Less manual copy-paste work.",
          },
        ],
      },
      {
        title: "Hardware and computer solutions",
        items: [
          {
            text: "Computer, printer, scanner and peripheral setup",
            benefit:
              "Devices are installed, connected and tested before handover.",
          },
          {
            text: "Remote help for software and configuration problems",
            benefit:
              "Many issues can be resolved faster without an on-site visit.",
          },
          {
            text: "Custom PCs, component upgrades and diagnostics",
            benefit:
              "Planning, compatibility checks, installation and testing in one place.",
          },
          {
            text: "Startup slowdown and freeze diagnostics",
            benefit: "Targeted fixes instead of guesswork.",
          },
          {
            text: "New laptop or desktop setup with data migration",
            benefit: "Faster go-live with less interruption.",
          },
          {
            text: "Basic home or office network cleanup",
            benefit: "More stable internet and fewer connection issues.",
          },
          {
            text: "Printer and scanner installation and network sharing",
            benefit:
              "Drivers, scan destinations and shared use across multiple computers can be configured.",
          },
          {
            text: "Monitor, docking station, webcam and peripheral setup",
            benefit:
              "Devices are connected correctly and handed over with tested settings.",
          },
          {
            text: "Basic router, Wi-Fi and wired network troubleshooting",
            benefit:
              "Help with weak signal, dropouts and device connection problems.",
          },
          {
            text: "External storage and simple backup configuration",
            benefit:
              "Important files are stored more clearly with a lower risk of data loss.",
          },
        ],
      },
      {
        title: "Small-business tools and websites",
        items: [
          {
            text: "Price-calculation mini app for labor and material costs",
            benefit: "Faster and more consistent quoting.",
          },
          {
            text: "Landing page for service presentation and quote requests",
            benefit: "More inbound leads and easier contact collection.",
          },
          {
            text: "Portfolio website with references and gallery",
            benefit: "Builds trust faster with new clients.",
          },
          {
            text: "Static or dynamic website based on your real needs",
            benefit: "You pay only for what actually brings value.",
          },
          {
            text: "Simple client and quote tracking mini app",
            benefit: "Less admin overhead and faster follow-up.",
          },
        ],
      },
      {
        title: "Website refresh and speed improvement",
        items: [
          {
            text: "Modernize and clean up your existing website",
            benefit: "Stronger first impression and better trust.",
          },
          {
            text: "Improve loading speed and remove unnecessary elements",
            benefit: "Fewer visitors leave before reading your content.",
          },
          {
            text: "Reorganize content and navigation for clearer browsing",
            benefit: "Visitors find what they need faster.",
          },
        ],
      },
      {
        title: "Simplified contact and quote-request flow",
        items: [
          {
            text: "Easier-to-fill contact form",
            benefit: "More visitors complete and submit requests.",
          },
          {
            text: "Automatic confirmation for incoming requests",
            benefit: "Clients instantly know their message arrived.",
          },
          {
            text: "Organized request view so follow-up stays clear",
            benefit: "Fewer lost quote requests.",
          },
        ],
      },
      {
        title: "Simplified invoicing and admin tasks",
        items: [
          {
            text: "Automatic reminders for payment deadlines",
            benefit: "Faster payments and healthier cash flow.",
          },
          {
            text: "Quick overview of unpaid invoices",
            benefit: "You immediately see who needs a reminder.",
          },
          {
            text: "Monthly admin task list in one place",
            benefit: "Lower chance of missing important admin work.",
          },
        ],
      },
      {
        title: "Organized documents and internal knowledge",
        items: [
          {
            text: "Contracts, templates and files in one shared place",
            benefit: "No more searching across scattered folders.",
          },
          {
            text: "Simple search across documents",
            benefit: "Find needed files in seconds.",
          },
          {
            text: "Clear tracking of updates and versions",
            benefit: "Everyone sees which version is the latest.",
          },
          {
            text: "Approval steps and owners assigned per document",
            benefit:
              "You can see exactly who is responsible, which speeds up delivery.",
          },
        ],
      },
      {
        title: "Simplified internal communication and handover",
        items: [
          {
            text: "Short, consistent handover notes for each task",
            benefit: "Fewer misunderstandings inside the team.",
          },
          {
            text: "Questions and decisions logged in one place",
            benefit: "Important details do not get lost across emails.",
          },
          {
            text: "Clear owner and deadline for each task",
            benefit: "Everyone knows who takes the next step and by when.",
          },
          {
            text: "Quick lessons captured after completed tasks",
            benefit: "The team improves faster with fewer repeated mistakes.",
          },
        ],
      },
      {
        title: "Database design and cleanup",
        items: [
          {
            text: "Build a new database structure aligned with real operations",
            benefit: "Creates a stable foundation for future growth.",
          },
          {
            text: "Merge and clean scattered legacy data",
            benefit: "Cleaner data leads to better decisions.",
          },
          {
            text: "Faster search and filtering for larger datasets",
            benefit: "Less waiting and quicker daily work.",
          },
          {
            text: "Backup and recovery recommendations",
            benefit: "Lower risk when unexpected data issues happen.",
          },
        ],
      },
      {
        title: "Infrastructure setup and consulting (with SEO)",
        items: [
          {
            text: "Basic technical setup (domain, hosting, email)",
            benefit: "Faster launch with fewer technical blockers.",
          },
          {
            text: "System and tool selection consulting",
            benefit: "Avoid spending on the wrong tools.",
          },
          {
            text: "SEO consulting for technical and content improvements",
            benefit: "Potential clients can find you more easily.",
          },
          {
            text: "Website performance and baseline security review",
            benefit: "More stable operation and better user experience.",
          },
        ],
      },
    ],
    ctaTitle: "Cannot find what you need?",
    ctaDesc:
      "If you are not sure what you want yet, send me 3 sentences about your challenge and I will suggest a fast, cost-effective approach.",
    ctaButton: "Request recommendation",
  },
  useCases: {
    labels: {
      problem: "Problem",
      solution: "Suggested solution",
      why: "Why it helps",
    },
    cards: [
      {
        id: "internal-dev",
        title:
          "You want internal development capacity without hiring full-time",
        who: "SME owners and team leads",
        timeframeLabel: "Start module by module after discovery",
        problem: [
          "Many internal requests pile up with no dedicated developer.",
          "Ad-hoc implementation makes budgeting hard.",
          "It is difficult to see team operations end-to-end.",
        ],
        solution: [
          "Internal web system for daily workflows.",
          "Permissions, statuses and reporting in one place.",
          "Step-by-step roadmap that stays expandable.",
        ],
        why: [
          "No need to jump into a huge project all at once.",
          "Delivery cadence follows your business rhythm.",
          "Better visibility and calmer operations.",
        ],
      },
      {
        id: "web-project",
        title: "Website, web app, or desktop app?",
        who: "Growing businesses",
        timeframeLabel: "Fast prototype, then stable build-up",
        problem: [
          "The right platform choice is unclear.",
          "A wrong technical decision can become expensive.",
          "Business goals and product scope are not fully aligned.",
        ],
        solution: [
          "Short decision workshop: website vs. web app vs. desktop app.",
          "Build the most important workflow first so it becomes usable quickly.",
          "Structure it so future expansion stays simple.",
        ],
        why: [
          "The project stays focused from day one.",
          "You can validate value faster.",
          "Investment remains easier to control.",
        ],
      },
      {
        id: "private-tools",
        title: "As an individual, you want a simple custom listing tool",
        who: "Private users",
        timeframeLabel: "Small scope, quick handover",
        problem: [
          "Daily tracking is split across apps or paper.",
          "Existing tools feel too heavy for the real need.",
          "Searching and filtering data takes too much time.",
        ],
        solution: [
          "Clean listing interface with your own fields.",
          "Fast search, filtering and export.",
          "Only the features you actually need.",
        ],
        why: [
          "Less time spent on admin.",
          "The system stays simple and maintainable.",
          "Fast practical value with low complexity.",
        ],
      },
      {
        id: "crm-sales",
        title: "Quotes and follow-ups should never get lost",
        who: "Service businesses and sales teams",
        timeframeLabel: "Fast baseline, then phased expansion",
        problem: [
          "Quotes are scattered across email, notes and spreadsheets.",
          "There is no clear view of each lead's next step.",
          "Follow-ups are often late or missed.",
        ],
        solution: [
          "Simple pipeline: new lead → quote → follow-up → close.",
          "Automatic reminders for next actions.",
          "Clear dashboards for team and individual tracking.",
        ],
        why: [
          "Fewer lost opportunities.",
          "More predictable sales execution.",
          "Faster response times for clients.",
        ],
      },
      {
        id: "excel-workflow",
        title:
          "Clean up or replace an Excel workflow that has outgrown spreadsheets",
        who: "Small businesses and office teams working in Excel",
        timeframeLabel: "First usable version in 1–3 weeks",
        problem: [
          "Multiple files and conflicting versions circulate by email or shared folders.",
          "Formulas are fragile and repeated data entry creates avoidable errors.",
          "It is difficult to see who changed an important value and when.",
        ],
        solution: [
          "Short review of current workbooks and processes, including data cleanup.",
          "Consistent imports, validated forms, search and access control.",
          "Automatic summaries, exports and a gradual move to a web app when useful.",
        ],
        why: [
          "Excel import and export can remain, so everything does not change at once.",
          "Less copying, fewer broken formulas and fewer version conflicts.",
          "Cleaner data and faster reporting.",
        ],
      },
      {
        id: "admin-automation",
        title: "Automate admin tasks so they do not consume your day",
        who: "SMEs with office-heavy administration",
        timeframeLabel: "Start with 1-2 critical automation steps",
        problem: [
          "Repeated manual data entry drains team capacity.",
          "The same data has to be entered in multiple places.",
          "Fixing avoidable mistakes takes significant time.",
        ],
        solution: [
          "Automatic data flow between your existing tools.",
          "Connect forms and internal process steps.",
          "Validation checkpoints to catch errors early.",
        ],
        why: [
          "Less duplicate work.",
          "Better speed and accuracy together.",
          "More time spent on value-creating work.",
        ],
      },
      {
        id: "printer-command-line-recovery",
        title: "Printer failure recovered with command-line diagnostics",
        who: "Home users and small offices",
        timeframeLabel: "Focused, fast troubleshooting",
        problem: [
          "The printer was connected, but Windows could not use it correctly.",
          "Normal reconnection and graphical settings did not resolve the issue.",
          "The print queue, service, port or driver configuration remained in a broken state.",
        ],
        solution: [
          "Inspect the print service, queue and device configuration from the command line.",
          "Reset the faulty state and align the port and driver configuration.",
          "Verify with a test page without reinstalling the complete system.",
        ],
        why: [
          "No replacement computer, printer or Windows installation was needed.",
          "The intervention addressed the cause instead of temporarily bypassing it.",
          "Similar software and peripheral issues may also be resolved remotely.",
        ],
      },
      {
        id: "pc-service",
        title: "Slow computer? In many cases RAM or SSD upgrades solve it fast",
        who: "Individuals and local businesses",
        timeframeLabel: "Fast troubleshooting and maintenance",
        problem: [
          "A slow or unstable machine blocks daily work.",
          "Low RAM can cause significant slowdowns during multitasking.",
          "System issues or malware interrupt usage.",
          "New machine or fresh OS setup takes too much time.",
        ],
        solution: [
          "Targeted RAM or SSD upgrades after diagnostics when hardware is the bottleneck.",
          "System optimization together with the hardware upgrade.",
          "Reinstall and backup with clear agreed scope.",
          "Simple next-step advice without jargon.",
        ],
        why: [
          "Shorter downtime and quicker recovery.",
          "More predictable day-to-day performance.",
          "No unnecessary hardware spending.",
        ],
      },
    ],
  },
  steps: [
    {
      title: "1) Quick assessment",
      desc: "Where does it hurt today? Where do delays and mistakes happen? 15–30 min call.",
    },
    {
      title: "2) Proposal + prototype",
      desc: "You get 1–2 options: quick win or system build. Step by step.",
    },
    {
      title: "3) Build & handover",
      desc: "Weekly sync, small deliveries. Handover includes onboarding and docs.",
    },
    {
      title: "4) Support",
      desc: "Monthly maintenance and minor improvements for stable operation.",
    },
  ],
  pricingGrid: {
    labels: {
      mostPopular: "Built to grow",
      requestOffer: "Request quote",
      development: "Development",
      pcAddon: "PC and computer support",
      noteTitle: "Note:",
      noteText:
        "Starting prices intentionally cover a narrow, clearly defined scope. Exact features, tax treatment and external costs are confirmed in a written quote after a short assessment.",
    },
    plans: [
      {
        name: "Workflow assessment + focused solution",
        price: "from 79,000 HUF",
        hint: "Assess and solve one clearly defined operational problem",
        features: [
          "Short workflow assessment with prioritized recommendation",
          "Replace one manual step: reminder, status tracking or a simple summary",
          "Handover and short onboarding",
        ],
      },
      {
        name: "Mini automation sprint",
        price: "from 129,000 HUF",
        hint: "2–3 weeks • reduce manual admin with quick practical gains",
        features: [
          "1 recurring workflow with up to 2 data sources",
          "Automatic reminders and basic status tracking",
          "Short video handover and usage notes",
        ],
      },
      {
        name: "Quote management starter package",
        price: "from 199,000 HUF",
        hint: "Cleaner sales workflow • fewer lost leads",
        features: [
          "Pipeline: lead → quote → follow-up → close",
          "Task and deadline reminders",
          "Team-level overview of bottlenecks in the process",
        ],
      },
      {
        name: "Internal system – starter module",
        price: "from 349,000 HUF",
        hint: "A working first version of one core workflow • expandable later",
        popular: true,
        features: [
          "One selected workflow and its core business data",
          "Up to 2 roles, status tracking and basic activity logging",
          "One overview screen with the most important metrics",
          "Handover and documentation",
        ],
      },
      {
        name: "Website starter package",
        price: "from 149,000 HUF",
        hint: "Company presence + lead generation for a fast online start",
        features: [
          "Up to 4 content pages in one language, supplied copy",
          "Contact or quote request form setup",
          "Speed optimization and basic SEO setup",
        ],
      },
      {
        name: "Landing page package",
        price: "from 99,000 HUF",
        hint: "One focused page for ads or lead generation",
        features: [
          "1 mobile-friendly page, up to 6 sections, supplied content",
          "Form, thank-you page and basic tracking setup",
          "1 consolidated revision round and handover",
        ],
      },
      {
        name: "Landing page + ad launch",
        price: "from 179,000 HUF",
        hint: "Landing page plus basic campaign setup for a measurable start",
        features: [
          "Landing page with conversion form and thank-you page",
          "Basic Google / Meta campaign setup and event tracking",
          "30-day optimization recommendations with a short report",
        ],
      },
      {
        name: "Database cleanup + reporting",
        price: "from 249,000 HUF",
        hint: "Turn scattered data into a clean base for faster decisions",
        features: [
          "Data cleanup and duplicate reduction",
          "Shared data structure aligned to real workflows",
          "Management summary view and export",
        ],
      },
      {
        name: "Website maintenance",
        price: "from 19,000 HUF / month",
        hint: "Updates, bug fixes and smaller changes in a monthly scope",
        features: [
          "Regular updates, backups and security checks",
          "1 hour of smaller content and functional changes per month",
          "Monthly performance and reliability check",
        ],
      },
      {
        name: "System maintenance",
        price: "from 39,000 HUF / month",
        hint: "For keeping your custom system stable and usable",
        features: [
          "Bug fixing and version maintenance",
          "2 hours of smaller improvements or fixes per month",
          "Operational summary and recommended next steps",
        ],
      },
      {
        name: "SEO starter package",
        price: "from 39,000 HUF / month",
        hint: "Local + technical SEO with small-business focus",
        features: [
          "Technical SEO fixes (speed, meta, indexing)",
          "Local SEO setup and keyword focus",
          "Short monthly performance summary",
        ],
      },
      {
        name: "SEO + content updates",
        price: "from 69,000 HUF / month",
        hint: "Technical SEO, content and regular updates together",
        features: [
          "SEO starter package + monthly content updates",
          "Keyword-focused page and copy improvements",
          "Monthly report: visibility, clicks and recommended next steps",
        ],
      },
      {
        name: "Consulting and planning",
        price: "12,000 HUF / hour",
        hint: "Fast expert input when you are blocked",
        features: [
          "Review of workflows and systems",
          "Concrete prioritized recommendation list",
          "Can later be turned into implementation if needed",
        ],
      },
      {
        name: "Development block – 5 hours",
        price: "55,000 HUF / package",
        hint: "For smaller backlog items, quick fixes and mini improvements",
        features: [
          "5 development hours usable within 60 days",
          "Priority-based task order and status updates",
          "Transparent time reporting per task",
        ],
      },
      {
        name: "Development block – 10 hours",
        price: "105,000 HUF / package",
        hint: "Better effective hourly rate for recurring small requests",
        features: [
          "10 development hours usable within 90 days",
          "Faster reaction to multiple parallel small tasks",
          "Short monthly summary of used hours",
        ],
      },
      {
        name: "Custom development",
        price: "12,000 HUF / hour",
        hint: "Flexible billing for smaller custom tasks",
        features: [
          "Actual implementation for the agreed task",
          "Transparent time-based billing",
          "2-hour minimum per session for meaningful progress",
        ],
      },
      {
        name: "Urgent bug fixing",
        price: "18,000 HUF / hour",
        hint: "Priority handling for issues that require fast intervention",
        features: [
          "Issue analysis and fix with a 24–48 hour target window",
          "Short-cycle communication and status updates",
          "Only for urgent, business-critical cases",
        ],
      },
      {
        name: "Monthly support / operations",
        price: "from 29,000 HUF / month",
        hint: "Maintenance, small improvements and predictable operation",
        features: [
          "Updates, backups and basic checks",
          "Monthly scope for smaller changes and improvements",
          "Fast bug fixing and consultation",
        ],
      },
    ],
    pcPlans: [
      {
        name: "PC basic check and fault assessment",
        price: "from 5,000 HUF",
        hint: "Initial assessment up to 30 minutes; repairs quoted separately",
        features: [
          "Check the reported symptom and basic system state",
          "Review startup tasks, storage and available error data",
          "Recommendation on what to repair or upgrade",
        ],
      },
      {
        name: "Windows reinstall + data backup",
        price: "from 12,900 HUF",
        hint: "Depends on device type and backup needs",
        features: [
          "Data backup based on the agreed folders",
          "Clean install + drivers + basic setup",
          "Basic software package (browser, PDF, etc.)",
        ],
      },
      {
        name: "SSD or RAM upgrade",
        price: "from 5,000 HUF",
        hint: "Labour only • parts billed separately",
        features: [
          "Compatibility check and straightforward RAM/SSD installation",
          "Professional installation and basic testing",
          "Cloning, migration and complex disassembly quoted separately",
        ],
      },
      {
        name: "New PC setup + migration",
        price: "from 9,900 HUF",
        hint: "From old device to new one with minimal downtime",
        features: [
          "User setup and installation of basic software",
          "Transfer of important files and folders",
          "Check email and key tools after setup",
        ],
      },
      {
        name: "Small business device maintenance",
        price: "from 24,900 HUF / month",
        hint: "For 2–5 devices • preventive maintenance and fast response",
        features: [
          "Monthly health check and updates",
          "Basic security and backup review",
          "Priority handling of reported issues",
        ],
      },
      {
        name: "PC assembly and basic testing",
        price: "from 12,000 HUF",
        hint: "Straightforward desktop configuration • parts separate",
        features: [
          "Configuration planning based on budget and intended use",
          "Assembly, cable management and basic stability tests",
          "Operating-system installation and migration quoted separately",
        ],
      },
      {
        name: "Remote computer support",
        price: "from 5,000 HUF",
        hint: "First 30 minutes; further work priced in advance",
        features: [
          "Software, email, printer and basic system configuration",
          "Software errors, updates and slowdown checks",
          "Secure connection limited to the agreed support session",
        ],
      },
    ],
  },
  pcService: {
    eyebrow: "Add-on service",
    title: "Occasional PC service and computer support",
    description:
      "For individuals and businesses primarily in the Siófok area and Somogy county. Visits further afield can also be arranged.",
    availability: "Availability",
    area: [
      "📍 Drop-off: Siófok or nearby",
      "🚗 Visits across Somogy county; further afield by prior arrangement",
      "💻 Remote help is also available",
    ],
    typicalIssues: "Typical issues",
    dailyPainPoints: "Everyday pain points",
    typicalIssuesList: [
      "Windows reinstall and data backup",
      "Speed-up for slow computers, malware cleanup",
      "Startup and freezing issue diagnostics",
      "SSD / RAM and other hardware upgrades",
      "Laptop cleaning and cooling maintenance",
      "New device setup",
      "Business PC maintenance",
      "Custom PC build and consultation",
    ],
    everyday: [
      "Missing files, accidental deletion or damaged system",
      "Laptop does not start (black screen, boot issue)",
      "You bought a new laptop but it is not properly set up yet",
      "No backup in place – prevent data loss before it happens",
    ],
    tipTitle: "A slow computer is not always an “old computer”.",
    tipText:
      "In many cases, an SSD upgrade or proper system maintenance can deliver a major speed boost at a fraction of the cost of buying a new machine.",
  },
  comingSoon: {
    locationLine:
      "Siófok area • Somogy county • Further afield by arrangement • Online across Hungary",
    title: "Launching soon 🚀",
    description:
      "We are currently polishing the site. Meanwhile, if you need an internal system, automation or reporting dashboard, feel free to email me.",
    sendEmail: "Send email",
    call: "Call",
    discoveryTitle: "15-minute discovery call",
    discoveryText:
      "Based on 3 quick questions I can show the fastest practical gain for your case.",
    fastStartTitle: "Fast start",
    fastStartText:
      "A first working solution can usually be launched in 1–2 weeks.",
    emailLabel: "Email:",
    phoneLabel: "Phone:",
  },
  aboutPage: {
    eyebrow: "About",
    title: "Digital solutions with a human approach",
    description:
      "I’m Zoli, the developer behind Molnár Systems. I enjoy understanding how someone works and building software that fits their tasks and ideas.",
    locationLine:
      "Siófok area • Somogy county • Further afield by arrangement • Online across Hungary",
  },
  aboutSection: {
    intro: [
      "I develop custom software, web interfaces and automations. I work with small businesses and individuals, from simplifying a recurring task to building a personal application.",
      "Molnár Systems helps people with everyday work and personal ideas through thoughtful development. That might mean automating an Excel workbook, combining data from several sources, creating a regularly updated report or building a custom tracking application. I start with the tools you already use, and we work out what is worth changing.",
      "I want you to understand the finished solution and feel comfortable using it. We agree the task and fee in advance, I show you progress during development, and we go through how to use it at handover. Small, clearly defined requests are welcome too.",
      "Alongside development, I also help with PC building, upgrades, diagnostics and device setup. I work online across Hungary; in-person help is primarily available in Siófok and the surrounding area, and across Somogy county. Visits further afield can be arranged in advance.",
    ],
    valuesTitle: "What matters to me",
    values: [
      {
        title: "Solving real problems",
        desc: "I first understand the task and your current workflow. That helps me suggest changes that make sense in everyday use.",
      },
      {
        title: "Engineering mindset and stability",
        desc: "I approach projects with a software engineering, systems design and data handling perspective, where reliability and long-term usability matter just as much as implementation.",
      },
      {
        title: "Simplicity and transparency",
        desc: "I work with a clear scope, an agreed fee and visible steps. The finished solution comes with understandable instructions.",
      },
      {
        title: "Personal commitment",
        desc: "You discuss the task directly with me, and I develop the solution. We also go through your questions and feedback from using it.",
      },
    ],
    ctaTitle: "Would you like to work together?",
    ctaDesc:
      "Describe your idea or the task you would like to simplify. In our first conversation, we will work out how I can help.",
    ctaButton: "Get in touch",
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Have an idea or need technical help?",
    description:
      "Send me a short message about what you need help with, and we can look at how to turn it into a simple, practical solution. The first discussion is informal and without obligation.",
    contactDetails: "Contact details",
    phone: "Phone:",
    coverage: "Coverage:",
    coverageValue:
      "Siófok area • Somogy county • Further afield by arrangement • Online across Hungary",
    helpTitle: "It helps if you include",
    helpItems: [
      "what idea or problem you would like help with",
      "the exact device model and symptom, if relevant",
      "your goal, budget and timeframe if known",
    ],
    responseTitle: "What happens next?",
    responseText:
      "I usually reply within 24 hours, and if I see a good direction, we can discuss the next step in a short call.",
  },
  contactForm: {
    name: "Name",
    namePlaceholder: "e.g. John Smith",
    emailLabel: "Email",
    emailPlaceholder: "e.g. john@example.com",
    helpLabel: "How can I help?",
    helpTooltip:
      "Describe the challenge and the goal, approx. user count, and any deadline. The more detail you share, the better suggestion I can give.",
    detailsPlaceholder:
      "Describe your request: a personal idea, website, PC build, upgrade or device issue. Include the model, budget and timeframe if you know them.",
    validationRequired: "Please fill out this field.",
    validationEmail: "Please enter a valid email address.",
    sending: "Sending...",
    send: "Send message",
    success: "Thanks! I received your message and will reply soon.",
    error: "Something went wrong. Please email me or try again.",
    validationTooShort: "Please write a slightly longer message.",
    validationTooLong: "Your message is too long.",
  },
  servicesPage: {
    eyebrow: "Services",
    title: "Digital and hardware solutions",
    description:
      "Custom systems, automation, web and hardware support — from reliable data and backups to search and AI visibility.",
  },
  pricingPage: {
    eyebrow: "Pricing",
    title: "Starting packages with clear scope",
    description:
      "Indicative prices for typical solutions. The exact technical scope and cost are confirmed after a short assessment.",
  },
  notFound: {
    eyebrow: "404",
    title: "Page not found",
    description:
      "The page you are looking for does not exist or may have been moved.",
    home: "Back to home",
    contact: "Contact",
  },
};

export const dictionaries: Record<Lang, Dictionary> = {
  hu,
  en,
};

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang] ?? dictionaries.hu;
}
