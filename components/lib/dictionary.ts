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
    responseTitle: string;
    responseItems: string[];
    directEmailHint: string;
    phone: string;
    coverage: string;
    coverageValue: string;
  };
  contactForm: {
    name: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    helpLabel: string;
    helpTooltip: string;
    detailsPlaceholder: string;
    exampleTitle: string;
    exampleItems: string[];
    privacyNote: string;
    validationRequired: string;
    validationEmail: string;
    sending: string;
    send: string;
    success: string;
    error: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    description: string;
    quickPoints: string[];
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
      { href: "/services", label: "Szolgáltatások" },
      { href: "/pricing", label: "Árak" },
      { href: "/usecases", label: "Példák" },
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
    location: "Siófok - Somogy megye - Magyarország egész területén",
    services: "Szolgáltatások",
    pricing: "Árak",
    contact: "Kapcsolat",
  },
  home: {
    why: {
      eyebrow: "Miért működik?",
      title: "Kevesebb kézi munka, kevesebb hiba, nyugodtabb működés",
      description:
        "Olyan megoldást készítek, amit a csapatod tényleg használni fog, és ami nem bonyolítja, hanem egyszerűsíti a napi munkát.",
    },
    useCases: {
      eyebrow: "Így néz ki a gyakorlatban",
      title: "Valós példák arra, hogyan lesz kevesebb a káosz",
      description:
        "Ilyen helyzetekben szokott sokat segíteni egy egyszerűbb belső rendszer, egy jól eltalált automatizálás vagy egy átláthatóbb riport.",
    },
    services: {
      eyebrow: "Szolgáltatások",
      title: "Megoldások, amik tényleg levesznek terhet a válladról",
      description:
        "Röviden mutatom a leggyakoribb irányokat. Nem kell előre tudnod, pontosan mire van szükséged.",
    },
    process: {
      eyebrow: "Hogyan dolgozunk?",
      title: "Egyszerű indulás, tiszta lépések, biztos haladás",
      description:
        "Rövid egyeztetéssel indulunk, utána lépésről lépésre haladunk, hogy végig lásd, mi készül és hol tartunk.",
    },
    pricing: {
      eyebrow: "Árak",
      title: "Csomagok és egyedi ajánlatok",
      description:
        "Itt az induló irányokat látod. Ha a helyzeted más, egyedi ajánlatot is kérhetsz.",
    },
  },
  hero: {
    badges: [
      "Kevesebb adminisztráció",
      "Excel kiváltása",
      "Átláthatóbb működés",
      "Egyedi belső rendszer",
      "Valós idejű riportok",
      "Automatizálás",
      "Emlékeztetők és határidők",
      "PC szerviz",
    ],
    title:
      "Excelben, jegyzetekben vagy papíron vezeted a vállalkozásod? Lásd végre egy helyen a pénzed és a határidőidet.",
    locationLine: "Molnár Systems • Siófok és Somogy megye • Országosan online",
    intro:
      "Ha eleged van abból, hogy Excelben és jegyzetekben kell keresgélned: készítek egy egyszerű, testre szabott rendszert, ami időt spórol, hibát csökkent, és láthatóvá teszi a céged működését.",
    ctaPrimary: "Megnézem, mi segíthet",
    ctaSecondary: "Árak és csomagok",
    note: "15 perces első egyeztetésben megmondom, érdemes-e ezzel most foglalkozni.",
    bullets: [
      "Belső rendszerek és ismétlődő feladatok egyszerűsítése",
      "Rendezett adatok, összefoglalók és exportok egy helyen",
      "Kapcsolódás a most használt eszközeidhez, ahol érdemes",
      "Pénzügyi és működési adatok átlátható, közös nézetben",
      "Excel kiváltása egy egyszerűbb, saját webes rendszerrel",
      "PC szerviz és számítógépes segítség helyben vagy online",
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
        title: "Belső rendszerek és egyszerű webes felületek",
        items: [
          {
            text: "Ügyfél- és munkanyilvántartás egy helyen",
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
            text: "Határidő emlékeztető e-mailben",
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
        title: "Adatok rendbetétele és átlátható összefoglalók",
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
        title: "PC karbantartás",
        items: [
          {
            text: "SSD/RAM bővítés, gyorsítás",
            benefit:
              "Gyakran olcsóbb és elég gyors megoldás új gép vásárlása helyett.",
          },
          {
            text: "Újratelepítés + adatmentés",
            benefit:
              "A fontos adatok megmaradnak, a gép tisztábban indul újra.",
          },
          {
            text: "Vírusirtás, alap biztonsági beállítások",
            benefit: "Kisebb kockázat adatvesztésre és leállásra.",
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
        ],
      },
      {
        title: "Kisebb üzleti programok és weboldalak",
        items: [
          {
            text: "Árkalkuláció mini app munkadíjjal és anyagköltséggel",
            benefit: "Gyorsabb és egységesebb árajánlatadás helyszínen is.",
          },
          {
            text: "Érdeklődőszerző oldal szolgáltatás bemutatására",
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
        title: "Technikai alapok és online jelenlét rendbetétele",
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
            text: "SEO tanácsadás: hogy könnyebben rád találjanak a Google-ben",
            benefit: "Könnyebben rád találnak a potenciális ügyfelek.",
          },
          {
            text: "Weboldal teljesítmény és alap biztonság ellenőrzése",
            benefit: "Stabilabb működés és jobb felhasználói élmény.",
          },
        ],
      },
    ],
    ctaTitle: "Nem vagy biztos benne, mire van szükséged?",
    ctaDesc:
      "Írj pár mondatot arról, mi akadozik most a munkában, és javaslok egy egyszerű, reális első lépést.",
    ctaButton: "Kérek egy első javaslatot",
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
        title: "Saját belső fejlesztés, kiszámítható lépésekben",
        who: "KKV tulajdonosoknak és csapatvezetőknek",
        timeframeLabel: "Lépésenként indulás",
        problem: [
          "Sok apró belső igény gyűlik össze, de nincs rá külön ember.",
          "Nehéz előre látni, mennyi idő és pénz kell a fejlesztésekre.",
        ],
        solution: [
          "Egy közös belső felület a napi feladatokra és állapotokra.",
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
        title: "Az ajánlatok és a visszahívások ne vesszenek el",
        who: "Szolgáltató cégeknek és értékesítési csapatoknak",
        timeframeLabel: "Gyors alapverzió, későbbi bővítéssel",
        problem: [
          "Az ajánlatok e-mailben, jegyzetben és táblázatban szétcsúsznak.",
          "Nincs tiszta kép arról, kinél mi a következő lépés.",
          "Az utánkövetés könnyen késik vagy elmarad.",
        ],
        solution: [
          "Egyszerű folyamat: érdeklődő -> ajánlat -> visszahívás -> lezárás.",
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
        id: "admin-automation",
        title: "Adminisztráció egyszerűsítése, hogy ne vigye el a napot",
        who: "Olyan KKV-knak, ahol sok a visszatérő adminisztráció",
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
        id: "pc-service",
        title: "Lassú a gép? Sokszor gyorsan rendbe hozható",
        who: "Magánszemélyeknek és helyi vállalkozásoknak",
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
      title: "Javaslat és első verzió",
      desc: "Kapsz 1-2 tiszta opciót, és egy gyorsan kipróbálható első verziót.",
    },
    {
      title: "Építés & átadás",
      desc: "Lépésenként építünk, heti haladással. Átadáskor betanítás és rövid útmutató is jár.",
    },
    {
      title: "További támogatás",
      desc: "Ha kell, utána is segítek karbantartással, javításokkal és kisebb fejlesztésekkel.",
    },
  ],
  pricingGrid: {
    labels: {
      mostPopular: "Legnépszerűbb",
      requestOffer: "Ajánlatot kérek",
      development: "Fejlesztési csomagok",
      pcAddon: "PC segítség külön is kérhető",
      noteTitle: "Megjegyzés:",
      noteText:
        "A fenti árak tájékoztató jellegűek. Rövid egyeztetés után pontos árat és terjedelmet mondok.",
    },
    plans: [
      {
        name: "Első rendbetétel",
        price: "149 000 Ft-tól",
        hint: "Gyors kezdés • 1 konkrét problémára",
        features: [
          "Rövid áttekintés arról, hol megy el az idő",
          "1 kézzelfogható javítás vagy egyszerű automatizálás",
          "Átadás rövid magyarázattal",
        ],
      },
      {
        name: "Admin könnyítés",
        price: "229 000 Ft-tól",
        hint: "2-3 hét • kevesebb kézi ismétlődő munka",
        features: [
          "Űrlapok és visszatérő admin lépések egyszerűsítése",
          "Automatikus emlékeztetők és alap státuszkövetés",
          "Rövid videós átadás és használati leírás",
        ],
      },
      {
        name: "Ajánlatok és utánkövetés rendben",
        price: "329 000 Ft-tól",
        hint: "Átláthatóbb értékesítési folyamat • kevesebb elvesző érdeklődő",
        features: [
          "Érdeklődő -> ajánlat -> utánkövetés -> lezárás folyamat egy helyen",
          "Feladat- és határidőemlékeztetők",
          "Áttekintés arról, hol akad el a folyamat",
        ],
      },
      {
        name: "Egyszerű belső rendszer",
        price: "450 000 Ft-tól",
        hint: "Első működő verzió • később bővíthető",
        popular: true,
        features: [
          "Ügyfelek, feladatok és állapotok követése egy helyen",
          "Alap jogosultságkezelés és naplózás",
          "Áttekintő felület a fontos számokkal és státuszokkal",
          "Átadás és rövid dokumentáció",
        ],
      },
      {
        name: "Bemutatkozó weboldal + kapcsolatfelvétel",
        price: "290 000 Ft-tól",
        hint: "Ha gyorsan kell egy letisztult online jelenlét",
        features: [
          "Reszponzív weboldal alap szerkezettel",
          "Kapcsolati vagy ajánlatkérő űrlap",
          "Sebesség és alap SEO beállítások",
        ],
      },
      {
        name: "Kampány landing oldal",
        price: "199 000 Ft-tól",
        hint: "1 fókuszált oldal • hirdetéshez vagy ajánlatkéréshez",
        features: [
          "Mobilbarát, célra kihegyezett landing oldal",
          "Űrlap, köszönőoldal és alap mérés",
          "Gyors átadás egy rövid módosítási körrel",
        ],
      },
      {
        name: "Landing oldal + hirdetés indulás",
        price: "279 000 Ft-tól",
        hint: "Landing oldal mellé alap kampányindítás",
        features: [
          "Landing oldal űrlappal és köszönőoldallal",
          "Google vagy Meta alap kampánybeállítás és eseménymérés",
          "30 napos finomhangolási javaslat rövid összefoglalóval",
        ],
      },
      {
        name: "Adatrendrakás + összefoglalók",
        price: "390 000 Ft-tól",
        hint: "Ha sok helyen vannak az adatok és nehéz átlátni őket",
        features: [
          "Adattisztítás és ismétlődések csökkentése",
          "Közös adatstruktúra kialakítása",
          "Egyszerű vezetői összefoglaló és export",
        ],
      },
      {
        name: "Weboldal karbantartás (havidíjas)",
        price: "39 000 Ft / hó-tól",
        hint: "Frissítések és kisebb módosítások havi keretben",
        features: [
          "Rendszeres frissítések, mentések, biztonsági ellenőrzések",
          "Kisebb tartalmi és funkcionális módosítások havi kerettel",
          "Teljesítmény és működés folyamatos felügyelete",
        ],
      },
      {
        name: "Program / belső rendszer karbantartás",
        price: "69 000 Ft / hó-tól",
        hint: "Ha a meglévő rendszeredet stabilan működtetnéd",
        features: [
          "Hibajavítás és verziókövetés",
          "Kisebb fejlesztési igények priorizált kezelése",
          "Működési riport és javaslat a következő lépésekhez",
        ],
      },
      {
        name: "SEO alapcsomag",
        price: "79 000 Ft / hó-tól",
        hint: "Jobb láthatóság helyi és technikai alapokkal",
        features: [
          "Technikai SEO alapjavítások (sebesség, meta, indexelés)",
          "Lokális SEO beállítások és kulcsszó fókusz",
          "Havi rövid teljesítmény-összefoglaló",
        ],
      },
      {
        name: "SEO + tartalomfrissítés",
        price: "119 000 Ft / hó-tól",
        hint: "SEO mellé folyamatos szöveg- és oldalfeljavítás",
        features: [
          "SEO alapcsomag + havi tartalmi frissítések",
          "Kulcsszófókuszú oldal- és szövegfrissítés",
          "Havi riport: láthatóság, kattintás, javasolt következő lépés",
        ],
      },
      {
        name: "Átbeszélés és tervezés",
        price: "18 000 Ft / óra",
        hint: "Ha előbb tisztán szeretnél látni, mit érdemes megcsinálni",
        features: [
          "Rendszer- és folyamatátvilágítás megbeszélés alapján",
          "Konkrét javaslatlista priorizálva",
          "Igény esetén a tanácsadás később kivitelezésbe fordítható",
        ],
      },
      {
        name: "5 órás fejlesztési keret",
        price: "85 000 Ft / csomag",
        hint: "Kisebb javításokra és rövidebb feladatokra",
        features: [
          "5 óra fejlesztési keret 60 napon belüli felhasználással",
          "Prioritás szerinti feladatsorrend és státuszfrissítés",
          "Átlátható időelszámolás feladatonként",
        ],
      },
      {
        name: "10 órás fejlesztési keret",
        price: "165 000 Ft / csomag",
        hint: "Ha rendszeresen vannak kisebb feladataid",
        features: [
          "10 óra fejlesztési keret 90 napon belüli felhasználással",
          "Gyorsabb reakció több párhuzamos kisebb feladatra",
          "Havi rövid összefoglaló a felhasznált keretről",
        ],
      },
      {
        name: "Egyedi fejlesztés óradíjjal",
        price: "18 000 Ft / óra",
        hint: "Ha egy konkrét kisebb feladatot kell megoldani",
        features: [
          "Konkrét fejlesztés a megbeszélt feladatra (nem csak konzultáció)",
          "Átlátható elszámolás időráfordítás szerint",
          "Minimum 2 óra / alkalom, hogy érdemi haladás legyen",
        ],
      },
      {
        name: "Sürgős hibajavítás (24-48 óra)",
        price: "24 000 Ft / óra",
        hint: "Ha üzletileg fontos hibát kell gyorsan javítani",
        features: [
          "Hibaanalízis és javítás 24-48 órás célidővel",
          "Kommunikáció és állapotfrissítés rövid ciklusokban",
          "Csak sürgős, üzletileg kritikus esetekre",
        ],
      },
      {
        name: "Havi support / üzemeltetés",
        price: "49 000 Ft / hó-tól",
        hint: "Karbantartás és kisebb fejlesztések kiszámítható keretben",
        features: [
          "Frissítések, mentések, alap ellenőrzések",
          "Havi keret kisebb módosításokra / fejlesztésekre",
          "Gyors hibajavítás és tanácsadás",
        ],
      },
    ],
    pcPlans: [
      {
        name: "PC átvizsgálás + gyorsítás",
        price: "9 900 Ft-tól",
        hint: "Ha lassú a gép és szeretnéd tudni, miért",
        features: [
          "Lassulás okainak feltárása (szoftver/hardver)",
          "Alap karbantartás (startup, takarítás, beállítások)",
          "Javaslat: mit érdemes javítani / bővíteni",
        ],
      },
      {
        name: "Windows újratelepítés + adatmentés",
        price: "24 900–59 900 Ft",
        hint: "Géptípustól és mentési igénytől függően",
        features: [
          "Adatmentés (megbeszélt mappák szerint)",
          "Tiszta telepítés + driverek + alap beállítás",
          "Alap programcsomag (böngésző, PDF, stb.)",
        ],
      },
      {
        name: "SSD vagy RAM bővítés",
        price: "14 900 Ft-tól",
        hint: "Alkatrész külön • célzott gyorsítás meglévő gépre",
        features: [
          "Kompatibilitás ellenőrzés vásárlás előtt",
          "Szakszerű beépítés és alap teszt",
          "Rövid javaslat a további gyorsításhoz",
        ],
      },
      {
        name: "Új gép beüzemelés + költöztetés",
        price: "19 900 Ft-tól",
        hint: "Régi gépről újra, a fontos dolgok áthozásával",
        features: [
          "Felhasználói beállítások és alap programok telepítése",
          "Fontos fájlok és mappák átmásolása",
          "Email és alap eszközök működésének ellenőrzése",
        ],
      },
      {
        name: "Kisvállalati géppark havi karbantartás",
        price: "39 900 Ft / hó-tól",
        hint: "2-5 gépre • megelőző karbantartás és gyors segítség",
        features: [
          "Havi állapotellenőrzés és frissítések",
          "Alap biztonsági és mentési ellenőrzés",
          "Prioritásos hibabejelentés kezelés",
        ],
      },
      {
        name: "Egyedi PC összerakás",
        price: "34 900 Ft-tól",
        hint: "Munkadíj • alkatrészek külön, igényre szabva",
        features: [
          "Konfiguráció tervezés költségkeret és felhasználás alapján",
          "Összeszerelés, kábelmenedzsment és terheléses teszt",
          "Windows, driverek és alap szoftverek beállítása",
        ],
      },
    ],
  },
  pcService: {
    eyebrow: "Kiegészítő szolgáltatás",
    title: "Eseti PC szerviz és számítógépes segítség",
    description: "Magánszemélyeknek és vállalkozásoknak Somogy megyében.",
    availability: "Elérhetőség",
    area: [
      "📍 Gépleadás: Siófok vagy környéke",
      "🚗 Igény esetén kiszállás a környéken",
      "💻 Távoli segítség (remote) is elérhető",
    ],
    typicalIssues: "Tipikus problémák",
    dailyPainPoints: "Mindennapi fájdalompontok",
    typicalIssuesList: [
      "Windows újratelepítés, adatmentés",
      "Lassú gép gyorsítása, vírusirtás",
      "Indulási / lefagyási problémák feltárása",
      "SSD / RAM és egyéb alkatrész bővítés",
      "Laptop tisztítás, hűtés karbantartás",
      "Új eszköz beüzemelése",
      "Céges gépek karbantartása",
      "Egyedi PC összerakás és tanácsadás",
    ],
    everyday: [
      "Eltűnt fájlok / véletlen törlés / sérült rendszer",
      "Nem indul el a laptop (fekete képernyő, boot hiba)",
      "Új laptopot vettél, de nincs rendesen beállítva",
      "Nincs biztonsági mentés – adatvesztés megelőzés",
    ],
    tipTitle: "A lassú gép nem mindig „öreg gép”.",
    tipText:
      "Sok esetben egy SSD csere vagy rendszerkarbantartás töredék áron jelentős gyorsulást hoz egy új gép vásárlásához képest.",
  },
  comingSoon: {
    locationLine: "Siófok - Somogy megye - Magyarország egész területén",
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
      "Mérnökinformatikusként abban segítek, hogy a vállalkozásod ne az adminisztrációval küzdjön, hanem valóban fejlődhessen. Hiszek a hatékony, átlátható és egyszerű digitális megoldásokban, amelyek valódi értéket teremtenek.",
  },
  aboutSection: {
    intro: [
      "Mérnökinformatikusként rengeteg különböző rendszerrel, folyamattal és problémával találkoztam – és mindig az volt a kedvenc részem, amikor sikerült egy bonyolult, zűrzavaros folyamatot egyszerűvé, átláthatóvá tenni.",
      "A Molnár Systemset azért hoztam létre, mert láttam, hogy sok kis- és középvállalkozás rengeteg időt veszít elavult Exceleken, papíralapú folyamatokon és összefüggéstelen eszközökön. Ezeket lehet egyszerűbbé tenni – és örömmel segítek ebben.",
      "Siófok környékéről dolgozom, de ügyfeleimet online egész Magyarországon támogatom. Akár egy kisebb automatizálásról, akár egy komplett belső rendszerről van szó, szívesen megbeszéljük.",
    ],
    valuesTitle: "Amit fontosnak tartok",
    values: [
      {
        title: "Problémamegoldó szemlélet",
        desc: "Nem sablon megoldásokat adok – minden ügyféllel közösen tárom fel a valódi problémát, és arra szabott rendszert építek.",
      },
      {
        title: "Mérnökinformatikus háttér",
        desc: "Szoftverfejlesztési, adatrendezési és rendszertervezési tudással közelítem meg a feladatokat, a minőség és stabilitás mindig prioritás.",
      },
      {
        title: "Átláthatóság és egyszerűség",
        desc: "Nálam minden ajánlat és munka átlátható. Az egyszerűség nem csak cél, hanem alapelv – hogy te is pontosan tudd, mi történik.",
      },
      {
        title: "Lelkesedés és elkötelezettség",
        desc: "Amit csinálok, azt szeretem is csinálni. A te projekted nálam nem egy sorszám. Valóban érdekel, hogyan tudok segíteni, és mindig a legjobb megoldást keresem.",
      },
    ],
    ctaTitle: "Szeretnél velem dolgozni?",
    ctaDesc:
      "Írj vagy töltsd ki a kapcsolati űrlapot – 15 percben átbeszéljük, mire lenne szükséged.",
    ctaButton: "Vegyük fel a kapcsolatot",
  },
  contactPage: {
    eyebrow: "Kapcsolat",
    title: "Van egy ötleted vagy problémád?",
    description:
      "Írd meg röviden, mi akadozik most a munkában vagy min szeretnél javítani. Nem kell műszaki leírás: elég, ha a helyzetet leírod.",
    contactDetails: "Elérhetőségek",
    responseTitle: "Mire számíthatsz?",
    responseItems: [
      "Átnézem, amit írtál, és visszajelzek, hogy látok-e benne jó első lépést.",
      "Ha kell, felteszek 2-3 rövid pontosító kérdést.",
      "Ha van értelme, kapsz egy egyszerű javaslatot és egy induló irányárat.",
    ],
    directEmailHint: "Ha kényelmesebb, közvetlenül emailben is írhatsz.",
    phone: "Telefon:",
    coverage: "Terület:",
    coverageValue: "Siófok - Somogy megye - Magyarország egész területén",
  },
  contactForm: {
    name: "Név",
    namePlaceholder: "Pl. Kiss Péter",
    emailLabel: "Email",
    emailPlaceholder: "pl. kiss.peter@ceg.hu",
    helpLabel: "Miben segíthetek?",
    helpTooltip:
      "Írd le röviden, mi nem működik jól most, mi lenne a cél, és van-e határidő. Nem kell technikai nyelven fogalmaznod.",
    detailsPlaceholder:
      "Például: ajánlatok és visszahívások elvesznek, sok az Excel, vagy lassú a gép. Írd le röviden, mi a gond és min javítanál.",
    exampleTitle: "Ez bőven elég az induláshoz:",
    exampleItems: [
      "mi akadozik most a napi munkában",
      "mi lenne a jó eredmény",
      "van-e határidő vagy sürgősség",
    ],
    privacyNote: "Az üzenetedet csak a kapcsolatfelvételhez használom fel.",
    validationRequired: "Kérlek töltsd ki ezt a mezőt.",
    validationEmail: "Kérlek adj meg egy érvényes email címet.",
    sending: "Küldés...",
    send: "Küldöm az üzenetet",
    success: "Köszi, megkaptam. Hamarosan válaszolok.",
    error:
      "Most valami nem ment át. Írhatsz közvetlenül emailt is, vagy próbáld újra.",
  },
  servicesPage: {
    eyebrow: "Szolgáltatások",
    title: "Gyakori munkák",
    description:
      "Itt látod, miben tudok a leggyakrabban segíteni. Nem kell pontosan tudnod a megoldást, elég ha a problémát felismered.",
    quickPoints: [
      "ha sok a kézi admin és az Exceles kerülőút",
      "ha nem látod át egy helyen a státuszokat és számokat",
      "ha gyors, reális első lépéssel indulnál",
    ],
  },
  pricingPage: {
    eyebrow: "Árak",
    title: "Egyszerű, átlátható csomagok",
    description:
      "Nem kell előre mindent pontosan tudnod. Válassz kiinduló csomagot, vagy írj, és segítek belőni, mi éri meg.",
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
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/usecases", label: "Use Cases" },
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
    location: "Siófok - Somogy county - Across Hungary",
    services: "Services",
    pricing: "Pricing",
    contact: "Contact",
  },
  home: {
    why: {
      eyebrow: "Why it works",
      title: "Less manual work, fewer mistakes, clearer day-to-day operations",
      description:
        "The goal is to build something your team will actually use and that makes daily work easier, not heavier.",
    },
    useCases: {
      eyebrow: "How it looks in practice",
      title: "Real examples of how daily work becomes simpler",
      description:
        "These are typical situations where a simple internal tool, automation or clearer reporting makes a real difference.",
    },
    services: {
      eyebrow: "Services",
      title: "Solutions that remove everyday friction",
      description:
        "Here is a quick overview of the most common directions. You do not need to know the exact solution in advance.",
    },
    process: {
      eyebrow: "How we work",
      title: "Simple process, clear next steps",
      description: "Short check-ins, quick first version, and clear handover.",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Packages and custom offers",
      description:
        "You can start with a package or ask for a custom quote if your case is different.",
    },
  },
  hero: {
    badges: [
      "Less admin work",
      "Replace Excel",
      "Clearer overview",
      "Custom internal tools",
      "Real-time reporting",
      "Automation",
      "Reminders & deadlines",
      "PC support",
    ],
    title:
      "Still running your business in Excel, notes or paper? See your money and deadlines in one place.",
    locationLine:
      "Molnár Systems • Siófok and Somogy county • Online across Hungary",
    intro:
      "If you are tired of searching through spreadsheets and notes, I build a simple custom system that saves time, reduces errors, and makes operations visible.",
    ctaPrimary: "Book a free consultation",
    ctaSecondary: "Pricing & packages",
    note: "In a short first call, I can tell you if this is worth doing now.",
    bullets: [
      "Internal tools and simpler repeatable workflows",
      "Organized data, summaries and exports in one place",
      "Connection to your existing tools where it makes sense",
      "Financial and operational numbers in one clear view",
      "Replace spreadsheet chaos with a simple custom system",
      "PC service and computer support locally or online",
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
        title: "Internal systems and simple web tools",
        items: [
          {
            text: "Client and job tracking in one place",
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
            text: "Deadline reminders by email",
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
        title: "Clean data and easy-to-read summaries",
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
        title: "PC maintenance",
        items: [
          {
            text: "SSD/RAM upgrades and speed-up",
            benefit: "Often cheaper and faster than buying a new computer.",
          },
          {
            text: "OS reinstall + data backup",
            benefit: "Important files stay safe while the system is refreshed.",
          },
          {
            text: "Malware cleanup and baseline security setup",
            benefit: "Lower risk of data loss and downtime.",
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
        title: "Technical setup and online visibility",
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
            text: "SEO guidance so more potential clients can find you",
            benefit: "Potential clients can find you more easily.",
          },
          {
            text: "Website performance and baseline security review",
            benefit: "More stable operation and better user experience.",
          },
        ],
      },
    ],
    ctaTitle: "Not sure what you need yet?",
    ctaDesc:
      "Send a few sentences about what is slowing you down and I will suggest a practical first step.",
    ctaButton: "Get a first recommendation",
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
        title: "You need internal development help without hiring full-time",
        who: "For SME owners and team leads",
        timeframeLabel: "Start module by module after discovery",
        problem: [
          "Many small internal requests pile up, but nobody owns them.",
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
        title: "Quotes and follow-ups should not get lost",
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
        id: "admin-automation",
        title: "Simplify admin work so it does not consume your day",
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
        id: "pc-service",
        title:
          "Slow computer? In many cases it can be fixed faster than you think",
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
      title: "2) Proposal + first version",
      desc: "You get 1–2 clear options and, if it makes sense, a quick first version to react to.",
    },
    {
      title: "3) Build & handover",
      desc: "Weekly sync, small deliveries. Handover includes onboarding and docs.",
    },
    {
      title: "4) Ongoing support",
      desc: "If needed, I stay involved with maintenance, fixes and small improvements.",
    },
  ],
  pricingGrid: {
    labels: {
      mostPopular: "Most popular",
      requestOffer: "Ask for quote",
      development: "Development packages",
      pcAddon: "PC help is also available separately",
      noteTitle: "Note:",
      noteText:
        "These prices are indicative. After a short call, I can give you a precise scope and quote.",
    },
    plans: [
      {
        name: "First cleanup step",
        price: "from 149,000 HUF",
        hint: "Fast start for 1 specific problem",
        features: [
          "Short review of where time is being lost",
          "1 practical fix or simple automation",
          "Handover with short explanation",
        ],
      },
      {
        name: "Admin relief",
        price: "from 229,000 HUF",
        hint: "2-3 weeks to reduce repetitive manual work",
        features: [
          "Simplify forms and recurring admin steps",
          "Automatic reminders and basic status tracking",
          "Short video handover and usage notes",
        ],
      },
      {
        name: "Quotes and follow-up organized",
        price: "from 329,000 HUF",
        hint: "Cleaner sales flow with fewer lost leads",
        features: [
          "Lead -> quote -> follow-up -> close flow in one place",
          "Reminders for tasks and deadlines",
          "Overview of where the process gets stuck",
        ],
      },
      {
        name: "Simple internal system",
        price: "from 450,000 HUF",
        hint: "A first working version that can grow later",
        popular: true,
        features: [
          "Clients, tasks and statuses tracked in one place",
          "Baseline permissions and logging",
          "Simple overview with key numbers and statuses",
          "Handover and short documentation",
        ],
      },
      {
        name: "Website + contact capture",
        price: "from 290,000 HUF",
        hint: "A clear online presence you can launch quickly",
        features: [
          "Responsive website with core structure",
          "Contact or quote request form",
          "Speed optimization and baseline SEO setup",
        ],
      },
      {
        name: "Campaign landing page",
        price: "from 199,000 HUF",
        hint: "One focused page for ads or lead generation",
        features: [
          "Mobile-friendly landing page built around one goal",
          "Form, thank-you page and baseline tracking",
          "Fast delivery with one short revision round",
        ],
      },
      {
        name: "Landing page + ad launch",
        price: "from 279,000 HUF",
        hint: "Landing page plus basic campaign setup",
        features: [
          "Landing page with form and thank-you page",
          "Baseline Google or Meta campaign setup with event tracking",
          "30-day optimization suggestions with a short summary",
        ],
      },
      {
        name: "Data cleanup + summaries",
        price: "from 390,000 HUF",
        hint: "For scattered data that is hard to see through",
        features: [
          "Data cleanup and duplicate reduction",
          "Shared data model aligned with real workflows",
          "Simple management summary and exports",
        ],
      },
      {
        name: "Website maintenance (monthly)",
        price: "from 39,000 HUF / month",
        hint: "Updates and small changes in a monthly scope",
        features: [
          "Regular updates, backups and security checks",
          "Small content and feature changes within monthly scope",
          "Ongoing monitoring for speed and stability",
        ],
      },
      {
        name: "App / internal system maintenance",
        price: "from 69,000 HUF / month",
        hint: "Keep your existing system stable and usable",
        features: [
          "Bug fixing and version maintenance",
          "Priority handling of small improvement requests",
          "Short monthly report with next-step recommendations",
        ],
      },
      {
        name: "SEO starter package",
        price: "from 79,000 HUF / month",
        hint: "Better visibility through local and technical basics",
        features: [
          "Technical SEO baseline fixes (speed, meta, indexing)",
          "Local SEO setup and keyword focus",
          "Short monthly performance summary",
        ],
      },
      {
        name: "SEO + content updates",
        price: "from 119,000 HUF / month",
        hint: "SEO with ongoing page and copy improvements",
        features: [
          "SEO starter package + monthly content updates",
          "Keyword-focused page and copy optimization",
          "Monthly report with visibility and next-step actions",
        ],
      },
      {
        name: "Review and planning",
        price: "18,000 HUF / hour",
        hint: "If you first want clarity on what is worth building",
        features: [
          "Workflow and system review based on your current setup",
          "Prioritized action list with practical next steps",
          "Can be extended into implementation if needed",
        ],
      },
      {
        name: "5-hour development block",
        price: "85,000 HUF / package",
        hint: "For fixes and smaller tasks",
        features: [
          "5 development hours usable within 60 days",
          "Priority-based task queue with status updates",
          "Transparent task-level time reporting",
        ],
      },
      {
        name: "10-hour development block",
        price: "165,000 HUF / package",
        hint: "For recurring smaller requests",
        features: [
          "10 development hours usable within 90 days",
          "Faster handling for multiple parallel small tasks",
          "Short monthly summary of used hours",
        ],
      },
      {
        name: "Custom development hourly",
        price: "18,000 HUF / hour",
        hint: "For one specific smaller task",
        features: [
          "Actual implementation for the agreed custom task (not only consulting)",
          "Transparent time-based billing",
          "2-hour minimum per session for meaningful progress",
        ],
      },
      {
        name: "Urgent bug fix (24-48h)",
        price: "24,000 HUF / hour",
        hint: "For business-critical issues that need a quick fix",
        features: [
          "Issue analysis and fix with 24-48h target window",
          "Short-cycle communication and status updates",
          "For urgent and business-critical incidents only",
        ],
      },
      {
        name: "Monthly support / operations",
        price: "from 49,000 HUF / month",
        hint: "Maintenance and smaller improvements in a predictable scope",
        features: [
          "Updates, backups and basic checks",
          "Monthly scope for minor changes and improvements",
          "Fast bug fixes and consultation",
        ],
      },
    ],
    pcPlans: [
      {
        name: "PC checkup + speed-up",
        price: "from 9,900 HUF",
        hint: "If your computer feels slow and you want to know why",
        features: [
          "Identify causes of slowdown (software/hardware)",
          "Basic maintenance (startup, cleanup, settings)",
          "Recommendation: what to repair or upgrade",
        ],
      },
      {
        name: "Windows reinstall + data backup",
        price: "24,900–59,900 HUF",
        hint: "Depends on the device and backup needs",
        features: [
          "Data backup (as agreed folders)",
          "Clean install + drivers + baseline setup",
          "Basic software package (browser, PDF, etc.)",
        ],
      },
      {
        name: "SSD or RAM upgrade",
        price: "from 14,900 HUF",
        hint: "Parts are separate, for a targeted speed improvement",
        features: [
          "Compatibility check before purchase",
          "Professional installation and baseline test",
          "Short recommendation for further improvements",
        ],
      },
      {
        name: "New device setup + transfer",
        price: "from 19,900 HUF",
        hint: "Move from the old machine to the new one with less hassle",
        features: [
          "User setup and essential software installation",
          "Transfer of important files and folders",
          "Email and core tool functionality check",
        ],
      },
      {
        name: "Small business device maintenance (monthly)",
        price: "from 39,900 HUF / month",
        hint: "For 2-5 devices with preventive maintenance and faster help",
        features: [
          "Monthly health check and updates",
          "Baseline security and backup checks",
          "Priority handling for reported issues",
        ],
      },
      {
        name: "Custom PC build",
        price: "from 34,900 HUF",
        hint: "Labor only, parts are separate and chosen for your needs",
        features: [
          "Hardware planning based on budget and use case",
          "Assembly, cable management and stress testing",
          "OS setup, drivers and baseline software install",
        ],
      },
    ],
  },
  pcService: {
    eyebrow: "Add-on service",
    title: "On-demand PC service and computer support",
    description: "For individuals and businesses in Somogy county.",
    availability: "Availability",
    area: [
      "📍 Drop-off: Siófok and nearby area",
      "🚗 On-site support available nearby",
      "💻 Remote help is also available",
    ],
    typicalIssues: "Typical issues",
    dailyPainPoints: "Daily pain points",
    typicalIssuesList: [
      "Windows reinstall and data backup",
      "Speed optimization and malware cleanup",
      "Boot and freeze issue diagnostics",
      "SSD / RAM and other hardware upgrades",
      "Laptop cleaning and cooling maintenance",
      "New device setup",
      "Business PC maintenance",
      "Custom PC build and consultation",
    ],
    everyday: [
      "Missing files / accidental deletion / damaged system",
      "Laptop does not start (black screen, boot error)",
      "You bought a new laptop, but setup is incomplete",
      "No backup in place – prevent data loss",
    ],
    tipTitle: "A slow computer is not always an old computer.",
    tipText:
      "In many cases, an SSD upgrade or proper system maintenance provides major speed improvements at a fraction of a new machine cost.",
  },
  comingSoon: {
    locationLine: "Siófok - Somogy county - Across Hungary",
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
      "As an engineer, I help your business spend less time on admin and more on growth through simple and effective digital systems.",
  },
  aboutSection: {
    intro: [
      "As an engineer, I have worked with many different systems, workflows and operational issues. My favorite part has always been turning a chaotic process into something simple and transparent.",
      "I started Molnár Systems because many small businesses lose too much time in outdated spreadsheets, paper-based routines and disconnected tools. This can be made simpler — and I enjoy helping with exactly that.",
      "I work from the Siófok area, but support clients online across Hungary.",
    ],
    valuesTitle: "What matters to me",
    values: [
      {
        title: "Problem-solving mindset",
        desc: "I do not use one-size-fits-all templates. We identify the real issue together and build a tailored system.",
      },
      {
        title: "Engineering background",
        desc: "I approach projects with software engineering, database and system design perspective where quality and stability come first.",
      },
      {
        title: "Transparency and simplicity",
        desc: "Offers and delivery are always transparent. Simplicity is not only a goal but a core principle.",
      },
      {
        title: "Commitment and ownership",
        desc: "Your project is not just another ticket. I genuinely care about outcomes and always look for the best practical solution.",
      },
    ],
    ctaTitle: "Would you like to work together?",
    ctaDesc:
      "Send a message or fill in the contact form — in 15 minutes we can map what you need.",
    ctaButton: "Get in touch",
  },
  contactPage: {
    eyebrow: "Contact",
    title: "Do you have an idea or a challenge?",
    description:
      "Write a few lines about what is slowing you down or what you want to improve. You do not need a technical brief, just describe the situation in plain language.",
    contactDetails: "Contact details",
    responseTitle: "What happens next?",
    responseItems: [
      "I review your message and tell you whether I see a sensible first step.",
      "If needed, I ask 2-3 short clarifying questions.",
      "If it makes sense, you get a simple proposal and a starting price range.",
    ],
    directEmailHint: "If it is easier, you can also write directly by email.",
    phone: "Phone:",
    coverage: "Coverage:",
    coverageValue: "Siófok - Somogy county - Across Hungary",
  },
  contactForm: {
    name: "Name",
    namePlaceholder: "e.g. John Smith",
    emailLabel: "Email",
    emailPlaceholder: "e.g. john@company.com",
    helpLabel: "How can I help?",
    helpTooltip:
      "Briefly describe what is not working well today, what outcome you want, and whether there is a deadline. No technical wording needed.",
    detailsPlaceholder:
      "For example: quotes and follow-ups get lost, there is too much Excel work, or a computer is too slow. Briefly describe the problem and what you want to improve.",
    exampleTitle: "This is enough to get started:",
    exampleItems: [
      "what is slowing down daily work",
      "what a good result would look like",
      "whether there is a deadline or urgency",
    ],
    privacyNote: "Your message is only used for getting back to you.",
    validationRequired: "Please fill out this field.",
    validationEmail: "Please enter a valid email address.",
    sending: "Sending...",
    send: "Send message",
    success: "Thanks, I got your message. I will reply soon.",
    error: "Something went wrong. You can also email me directly or try again.",
  },
  servicesPage: {
    eyebrow: "Services",
    title: "Common projects for SMEs",
    description:
      "This page shows the most common ways I can help. You do not need to know the exact solution yet, it is enough to recognize your problem here.",
    quickPoints: [
      "when too much work still happens manually or in spreadsheets",
      "when statuses, numbers and tasks are hard to see in one place",
      "when you want a fast, realistic first step instead of a huge project",
    ],
  },
  pricingPage: {
    eyebrow: "Pricing",
    title: "Simple, transparent packages",
    description:
      "You do not need a perfect specification upfront. Pick a starting package, or send a message and I will help you find what makes sense.",
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
