import type { Lang } from "@/components/lib/i18n";

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
    cards: { title: string; items: string[] }[];
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
      title: "Kevesebb kézi munka. Kevesebb hiba. Nagyobb átláthatóság.",
      description:
        "A cél nem az, hogy „készüljön valami”, hanem hogy a céged gyorsabban és nyugodtabban működjön.",
    },
    useCases: {
      eyebrow: "Így néz ki a gyakorlatban",
      title: "A pontos megoldás mindig a folyamatodhoz igazodik",
      description:
        "Konkrét példák, ilyen helyzetekből szokott gyorsan kézzelfogható eredmény lenni.",
    },
    services: {
      eyebrow: "Szolgáltatások",
      title: "Belső appok és automatizálás – a cégedre szabva",
      description:
        "Nem kell mindent egyszerre. Kezdjük egy gyorsnyereséggel, és építjük tovább modulárisan.",
    },
    process: {
      eyebrow: "Hogyan dolgozunk?",
      title: "Átlátható folyamat, heti kis szállítások",
      description: "Rövid egyeztetés, gyors prototípus, stabil átadás.",
    },
    pricing: {
      eyebrow: "Árak",
      title: "Csomagok, hogy könnyű legyen dönteni",
      description:
        "Fix keretek, tiszta elvárások. Irányárak: felmérés után pontosítjuk.",
    },
  },
  hero: {
    badges: [
      "Adminisztráció csökkentés",
      "Excel kiváltása",
      "Valós idejű riportok",
      "Egyedi rendszerfejlesztés",
    ],
    title:
      "Excelben, jegyzetekben vagy papíron vezeted a vállalkozásod? Lásd végre egy helyen a pénzed és a határidőidet.",
    locationLine: "Molnár Systems • Siófok és Somogy megye • Országosan online",
    intro:
      "Ha eleged van abból, hogy Excelben és jegyzetekben kell keresgélned: készítek egy egyszerű, testre szabott rendszert, ami időt spórol, hibát csökkent, és láthatóvá teszi a céged működését.",
    ctaPrimary: "Kérek ingyenes konzultációt",
    ctaSecondary: "Árak és csomagok",
    note: "15 perces előszűrés – megmondom, érdemes-e fejleszteni.",
    bullets: [
      "Belső rendszerek és workflow automatizálás",
      "Adatbázis alapú működés, riportokkal és exporttal",
      "Integráció meglévő rendszerekkel és eszközökkel",
      "Pénzügyi és működési adatok egy közös dashboardon",
      "Excel kiváltása stabil, testre szabott webes rendszerrel",
      "PC szerviz és IT támogatás (helyi kiegészítő szolgáltatás, online is elérhető)",
    ],
  },
  featureGrid: [
    {
      title: "Határidők és automatikus emlékeztetők",
      desc: "Email értesítések, feladatlista és követés, hogy semmi ne csússzon el (szerviz, garancia, projekt).",
    },
    {
      title: "Átlátható kimutatások és felületek",
      desc: "Bevétel, kiadás, trendek egy közös nézetben, hogy gyorsabb döntéseket hozhass.",
    },
    {
      title: "Készlet és erőforrás követés",
      desc: "Minimum készlet riasztás, mozgások nyomon követése, rendelési javaslatok.",
    },
    {
      title: "Tiszta, stabil adatbázis alap",
      desc: "Rendbetett adatok, duplikációk nélkül. Gyors lekérdezések és növekedésre kész rendszer.",
    },
    {
      title: "Jogosultság és adatvédelem",
      desc: "Szerepkörök, naplózás és alap védelem, hogy mindenki csak azt lássa, amit kell.",
    },
    {
      title: "Folyamatos működés és támogatás",
      desc: "Karbantartás, mentések és kisebb fejlesztések, kiszámítható, stabil rendszer.",
    },
  ],
  servicesPreview: {
    cards: [
      {
        title: "Belső rendszerek és webappok",
        items: [
          "Ügyfél/munka nyilvántartás (CRM light)",
          "Workflow: beérkezett → folyamatban → kész → számlázva",
          "Ügyfélportál, dokumentumok, státuszok",
        ],
      },
      {
        title: "Automatizálás és értesítések",
        items: [
          "Határidő riasztó emailben",
          "Készlet minimum figyelés",
          "Emlékeztetők: szerviz, lejáratok, kontrollok",
        ],
      },
      {
        title: "Adatbázis, riportok, döntéstámogatás",
        items: [
          "Bevétel–kiadás, kintlévőség, eredmény",
          "KPI dashboardok chartokkal",
          "Adatbázis normalizálás, rendbetétel",
        ],
      },
      {
        title: "PC karbantartás (kiegészítő)",
        items: [
          "SSD/RAM bővítés, gyorsítás",
          "Újratelepítés + adatmentés",
          "Vírusirtás, alap biztonsági beállítások",
        ],
      },
    ],
    ctaTitle: "Nem tudod pontosan, mi kell?",
    ctaDesc:
      "Írj 3 mondatot a problémáról, és javaslok egy gyors, költséghatékony megoldást.",
    ctaButton: "Kérek javaslatot",
  },
  useCases: {
    labels: {
      problem: "Probléma",
      solution: "Megoldás koncepció",
      why: "Miért jó",
    },
    cards: [
      {
        id: "reminders",
        title: "Határidők és ügyfél-emlékeztetés rendbetétele",
        who: "Szervizek / rendszeres karbantartást végző cégek",
        timeframeLabel: "Gyors indulás • igény alapján ütemezve",
        problem: [
          "Az ügyféladatok több helyen vannak (Excel, jegyzet, email).",
          "A visszahívások és esedékességek manuálisak, könnyű elfelejteni.",
          "A visszatérő ügyfelek kezelése esetleges.",
        ],
        solution: [
          "Egységes ügyfél- és eszköznyilvántartás.",
          "Automatikus emlékeztetők előre beállított szabályok alapján.",
          "Átlátható felület a státuszok és határidők követéséhez.",
        ],
        why: [
          "Kevesebb elmaradt utánkövetés.",
          "Több visszatérő ügyfél.",
          "A határidők nem fejben vagy külön fájlokban élnek.",
        ],
      },
      {
        id: "dashboard",
        title: "Vezetői rálátás egy helyen",
        who: "Adminisztrációval terhelt KKV-k / kisebb irodák",
        timeframeLabel: "Első működő verzió • lépésenként bővíthető",
        problem: [
          "A pénzügyi és működési adatok szétszórtan vannak.",
          "Nincs napi szintű, gyors áttekintés.",
          "A havi riport manuális gyűjtést igényel.",
        ],
        solution: [
          "Egységes adatkezelés a fő mutatókhoz.",
          "Letisztult dashboard a legfontosabb számokkal.",
          "Exportálható riport nézetek.",
        ],
        why: [
          "Gyorsabb, megalapozottabb döntések.",
          "Kevesebb manuális adminisztráció.",
          "Átláthatóbb működés.",
        ],
      },
      {
        id: "inventory",
        title: "Készletfigyelés, hogy ne álljon meg a munka",
        who: "Anyaggal dolgozó vállalkozások / kisebb kereskedések",
        timeframeLabel: "Stabil alap • később bővíthető",
        problem: [
          "A készlet nem mindig naprakész.",
          "Hiányzó tételek munka- vagy bevételkiesést okoznak.",
          "A beszerzés inkább reakció, mint tervezés.",
        ],
        solution: [
          "Egyszerű készletmozgás-kezelés.",
          "Minimum készletszint figyelés és jelzés.",
          "Automatikus rendelési javaslat.",
        ],
        why: [
          "Kevesebb leállás alapanyaghiány miatt.",
          "Tervezhetőbb beszerzés.",
          "Kiszámíthatóbb működés.",
        ],
      },
    ],
  },
  steps: [
    {
      title: "1) Rövid felmérés",
      desc: "Mitől fáj most? Hol csúszik idő, hol van hiba? 15–30 perc, gyors kérdések.",
    },
    {
      title: "2) Javaslat + prototípus",
      desc: "Kapsz 1–2 opciót: gyorsnyereség vagy rendszerépítés. Lépésről lépésre.",
    },
    {
      title: "3) Építés & átadás",
      desc: "Heti egyeztetés, kis szállítások. Átadáskor betanítás + dokumentáció.",
    },
    {
      title: "4) Support",
      desc: "Havi csomagban karbantartás és kisebb fejlesztések. Stabil működés.",
    },
  ],
  pricingGrid: {
    labels: {
      mostPopular: "Legnépszerűbb",
      requestOffer: "Ajánlatkérés",
      development: "Fejlesztés",
      pcAddon: "PC / IT (kiegészítő)",
      noteTitle: "Megjegyzés:",
      noteText:
        "a fenti árak irányárak. A pontos ajánlatot egy rövid egyeztetés után adom, az igények és az összetettség alapján.",
    },
    plans: [
      {
        name: "Felmérés + gyorsnyereség",
        price: "149 000 Ft-tól",
        hint: "Gyors indulás • 1 fókuszált automatizálás vagy mini megoldás",
        features: [
          "Rövid folyamatfelmérés + javaslatlista",
          "1 konkrét probléma gyors rendbetétele (pl. emlékeztető / státusz / riport)",
          "Átadás + rövid betanítás",
        ],
      },
      {
        name: "Belső rendszer (modulárisan)",
        price: "450 000 Ft-tól",
        hint: "Első verzió (MVP) • utána lépésenként bővíthető",
        popular: true,
        features: [
          "Ügyfél / munka / státusz követés egy helyen",
          "Jogosultságok és naplózás (alapszint)",
          "Riportok és dashboard (a döntéshez szükséges mutatókkal)",
          "Átadás + dokumentáció",
        ],
      },
      {
        name: "Havi support / üzemeltetés",
        price: "49 000 Ft / hó-tól",
        hint: "Karbantartás • kisebb fejlesztések • kiszámítható működés",
        features: [
          "Frissítések, mentések, alap ellenőrzések",
          "Havi keret kisebb módosításokra / fejlesztésekre",
          "Gyors hibajavítás és tanácsadás",
        ],
      },
    ],
    pcPlans: [
      {
        name: "PC gyors átvizsgálás + optimalizálás",
        price: "9 900 Ft-tól",
        hint: "Állapottól függ • diagnosztika + gyors rendbetétel",
        features: [
          "Lassulás okainak feltárása (szoftver/hardver)",
          "Alap karbantartás (startup, takarítás, beállítások)",
          "Javaslat: mit érdemes javítani / bővíteni",
        ],
      },
      {
        name: "Windows újratelepítés + adatmentés",
        price: "24 900–59 900 Ft",
        hint: "Géptípustól és mentési igénytől függ",
        features: [
          "Adatmentés (megbeszélt mappák szerint)",
          "Tiszta telepítés + driverek + alap beállítás",
          "Alap programcsomag (böngésző, PDF, stb.)",
        ],
      },
    ],
  },
  pcService: {
    eyebrow: "Kiegészítő szolgáltatás",
    title: "Eseti PC szerviz és IT támogatás",
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
      "Dolgozunk az oldalon. Addig is, ha belső rendszert, automatizálást vagy riport dashboardot szeretnél, írj nyugodtan emailt.",
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
        desc: "Szoftverfejlesztési, adatbázis- és rendszertervezési tudással közelítem meg a feladatokat, a minőség és stabilitás mindig prioritás.",
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
      "Írd meg, mit szeretnél megvalósítani, és megnézzük, hogyan lehet belőle működő rendszer. Nincs kötelezettség.",
    contactDetails: "Elérhetőségek",
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
      "Írd le, mi a probléma és mi a cél, kb. hány felhasználó érintett, van-e határidő. Minél több infó, annál jobb javaslatot tudok adni!",
    detailsPlaceholder:
      "Írd le röviden a helyzetet: mi a probléma, mi a cél, kb. mennyi felhasználó, van-e határidő.",
    validationRequired: "Kérlek töltsd ki ezt a mezőt.",
    validationEmail: "Kérlek adj meg egy érvényes email címet.",
    sending: "Küldés...",
    send: "Üzenet küldése",
    success: "Köszi! Megkaptam az üzenetet, hamarosan válaszolok.",
    error: "Hopp, valami nem ment át. Írj emailt, vagy próbáld újra.",
  },
  servicesPage: {
    eyebrow: "Szolgáltatások",
    title: "Gyakori munkák",
    description:
      "Belső rendszerek, automatizálás, adatbázis és riportok – plusz kiegészítő PC szerviz.",
  },
  pricingPage: {
    eyebrow: "Árak",
    title: "Átlátható csomagok",
    description:
      "Gyors döntés és eredmény. Pár kérdés után pontos ajánlatot adok.",
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
      title: "Less manual work. Fewer mistakes. Better visibility.",
      description:
        "The goal is not just to build something, but to help your company run faster and calmer.",
    },
    useCases: {
      eyebrow: "How it looks in practice",
      title: "The right solution always fits your process",
      description:
        "Concrete examples where visible results usually come quickly.",
    },
    services: {
      eyebrow: "Services",
      title: "Internal apps and automation tailored to your business",
      description:
        "You do not need everything at once. We start with a quick win and build it modularly.",
    },
    process: {
      eyebrow: "How we work",
      title: "Transparent process, weekly small deliveries",
      description: "Short check-ins, fast prototype, stable handover.",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Packages to make decisions easier",
      description:
        "Clear scope, clear expectations. Indicative prices become precise after assessment.",
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
      "Still running your business in Excel, notes or paper? See your money and deadlines in one place.",
    locationLine:
      "Molnár Systems • Siófok and Somogy county • Online across Hungary",
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
      "PC service and IT support (local add-on, online available)",
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
  ],
  servicesPreview: {
    cards: [
      {
        title: "Internal systems and web apps",
        items: [
          "Client/job tracking (light CRM)",
          "Workflow: incoming → in progress → done → invoiced",
          "Client portal, documents and statuses",
        ],
      },
      {
        title: "Automation and notifications",
        items: [
          "Deadline alerts by email",
          "Minimum stock monitoring",
          "Reminders: service, expiry dates, controls",
        ],
      },
      {
        title: "Database, reports and decision support",
        items: [
          "Revenue-costs, receivables and profit overview",
          "KPI dashboards with charts",
          "Database normalization and clean-up",
        ],
      },
      {
        title: "PC maintenance (add-on)",
        items: [
          "SSD/RAM upgrades and speed-up",
          "OS reinstall + data backup",
          "Malware cleanup and baseline security setup",
        ],
      },
    ],
    ctaTitle: "Not sure exactly what you need?",
    ctaDesc:
      "Send me 3 sentences about your challenge and I will suggest a fast, cost-effective approach.",
    ctaButton: "Request recommendation",
  },
  useCases: {
    labels: {
      problem: "Problem",
      solution: "Solution concept",
      why: "Why it helps",
    },
    cards: [
      {
        id: "reminders",
        title: "Fixing deadlines and client follow-ups",
        who: "Service teams and recurring maintenance businesses",
        timeframeLabel: "Quick start • scheduled to your needs",
        problem: [
          "Client data is scattered across Excel, notes and email.",
          "Callbacks and due dates are manual and easy to miss.",
          "Handling returning customers is inconsistent.",
        ],
        solution: [
          "Unified client and device registry.",
          "Automatic reminders with predefined rules.",
          "Clear interface for statuses and deadlines.",
        ],
        why: [
          "Fewer missed follow-ups.",
          "More returning customers.",
          "Deadlines are no longer in your head or separate files.",
        ],
      },
      {
        id: "dashboard",
        title: "Management visibility in one place",
        who: "SMEs and small offices with heavy administration",
        timeframeLabel: "First working version • expandable step by step",
        problem: [
          "Financial and operational data is fragmented.",
          "No fast daily overview is available.",
          "Monthly reports require manual collection.",
        ],
        solution: [
          "Unified data handling for key indicators.",
          "Clean dashboard with the most important numbers.",
          "Exportable report views.",
        ],
        why: [
          "Faster and better-informed decisions.",
          "Less manual administration.",
          "More transparent operations.",
        ],
      },
      {
        id: "inventory",
        title: "Inventory tracking to avoid downtime",
        who: "Material-heavy businesses and small retailers",
        timeframeLabel: "Stable baseline • extendable later",
        problem: [
          "Stock levels are not always up to date.",
          "Missing items cause delays and lost revenue.",
          "Purchasing is reactive instead of planned.",
        ],
        solution: [
          "Simple stock movement management.",
          "Minimum stock monitoring and alerts.",
          "Automatic reorder suggestion.",
        ],
        why: [
          "Less downtime due to missing materials.",
          "More predictable purchasing.",
          "More reliable day-to-day operations.",
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
      mostPopular: "Most popular",
      requestOffer: "Request offer",
      development: "Development",
      pcAddon: "PC / IT (add-on)",
      noteTitle: "Note:",
      noteText:
        "prices above are indicative. I provide an exact quote after a short discovery call based on your requirements and complexity.",
    },
    plans: [
      {
        name: "Assessment + quick win",
        price: "from 149,000 HUF",
        hint: "Fast start • 1 focused automation or mini solution",
        features: [
          "Short process assessment + recommendation list",
          "Quick fix for 1 concrete issue (reminder / status / report)",
          "Handover + short onboarding",
        ],
      },
      {
        name: "Internal system (modular)",
        price: "from 450,000 HUF",
        hint: "First version (MVP) • expandable in steps",
        popular: true,
        features: [
          "Client / work / status tracking in one place",
          "Permissions and logging (baseline)",
          "Reports and dashboard with key decision metrics",
          "Handover + documentation",
        ],
      },
      {
        name: "Monthly support / operations",
        price: "from 49,000 HUF / month",
        hint: "Maintenance • small improvements • predictable operation",
        features: [
          "Updates, backups and basic checks",
          "Monthly scope for minor changes and improvements",
          "Fast bug fixes and consultation",
        ],
      },
    ],
    pcPlans: [
      {
        name: "PC quick audit + optimization",
        price: "from 9,900 HUF",
        hint: "Depends on condition • diagnostics + quick tuning",
        features: [
          "Identify causes of slowdown (software/hardware)",
          "Basic maintenance (startup, cleanup, settings)",
          "Recommendation: what to repair or upgrade",
        ],
      },
      {
        name: "Windows reinstall + data backup",
        price: "24,900–59,900 HUF",
        hint: "Depends on device type and backup needs",
        features: [
          "Data backup (as agreed folders)",
          "Clean install + drivers + baseline setup",
          "Basic software package (browser, PDF, etc.)",
        ],
      },
    ],
  },
  pcService: {
    eyebrow: "Add-on service",
    title: "On-demand PC service and IT support",
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
      "Tell me what you want to build, and we can map it into a working system. No obligations.",
    contactDetails: "Contact details",
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
      "Describe the challenge and the goal, approx. user count, and any deadline. The more detail you share, the better suggestion I can give.",
    detailsPlaceholder:
      "Briefly describe your situation: what is the problem, what is the goal, approx. user count, and any deadline.",
    validationRequired: "Please fill out this field.",
    validationEmail: "Please enter a valid email address.",
    sending: "Sending...",
    send: "Send message",
    success: "Thanks! I received your message and will reply soon.",
    error: "Something went wrong. Please email me or try again.",
  },
  servicesPage: {
    eyebrow: "Services",
    title: "Common projects for SMEs",
    description:
      "Internal systems, automation, database work and reporting – plus optional PC support.",
  },
  pricingPage: {
    eyebrow: "Pricing",
    title: "Transparent packages",
    description:
      "Fast decisions and practical outcomes. After a few questions, you get a precise offer.",
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
