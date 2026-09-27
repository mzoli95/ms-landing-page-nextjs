import type { Lang } from "./i18n";

export type OfferExample = {
  name: string;
  audience: string;
  deliverable: string;
  price: string;
  time: string;
};

export function getFocusedOffers(lang: Lang) {
  const en = lang === "en";
  return [
    {
      id: "website-fix",
      topic: "web",
      services: ["webfejlesztes"],
      name: en
        ? "Fix one specific website issue"
        : "Weboldal egy konkrét hibájának javítása",
      price: en ? "HUF 15,000–50,000" : "15 000–50 000 Ft",
      hint: en
        ? "Simple, isolated fixes: HUF 15,000–35,000. Issues requiring deeper investigation: HUF 20,000–50,000, quoted after review."
        : "Egyszerű, elkülöníthető javítás: 15 000–35 000 Ft. Mélyebb hibafeltárást igénylő feladat: 20 000–50 000 Ft, áttekintés utáni ajánlattal.",
      examples: [
        {
          name: en
            ? "Fix one broken web feature"
            : "Egy hibás webes funkció javítása",
          audience: en
            ? "For businesses and developers"
            : "Vállalkozásoknak és fejlesztőknek",
          deliverable: en
            ? "A working contact form or a corrected mobile layout, with the affected flow checked. One agreed issue, without a wider redesign."
            : "Működő kapcsolatfelvételi űrlap vagy javított mobilnézet, az érintett folyamat ellenőrzésével. Egy egyeztetett hiba, nagyobb újratervezés nélkül.",
          price: en ? "HUF 15,000–35,000" : "15 000–35 000 Ft",
          time: en ? "1–4 working hours" : "1–4 munkaóra",
        },
      ],
      features: en
        ? [
            "For example: a broken form, mobile layout or login problem.",
            "Investigation, a targeted fix and verification of the affected flow.",
            "Code access and complexity are checked before quoting; a redesign or wider rebuild needs a separate quote.",
          ]
        : [
            "Például hibás űrlap, mobilon széteső elrendezés vagy bejelentkezési probléma.",
            "Hibafeltárás, célzott javítás és az érintett folyamat ellenőrzése.",
            "Ajánlat előtt áttekintjük a hozzáféréseket és az összetettséget; az újratervezés vagy nagyobb átépítés külön ajánlat.",
          ],
    },
    {
      id: "office-automation",
      topic: "excel",
      services: ["excel-automatizalas", "statisztikak-kimutatasok"],
      name: en
        ? "Automate one recurring office task"
        : "Egy ismétlődő irodai feladat automatizálása",
      price: en ? "HUF 15,000–100,000" : "15 000–100 000 Ft",
      hint: en
        ? "Small file-processing tools: HUF 15,000–50,000. A recurring workflow with scheduling or additional checks: HUF 40,000–100,000."
        : "Kisebb fájlfeldolgozó eszközök: 15 000–50 000 Ft. Ütemezéssel vagy további ellenőrzésekkel kiegészített, rendszeres munkafolyamat: 40 000–100 000 Ft.",
      examples: [
        {
          name: en ? "Excel / CSV processor" : "Excel-/CSV-feldolgozó",
          audience: en
            ? "For online shops, offices and retailers"
            : "Webshopoknak, irodáknak és kereskedőknek",
          deliverable: en
            ? "Merge agreed file formats, remove duplicates using defined rules and produce a report, with a reusable tool and brief instructions."
            : "Egyeztetett formátumú fájlok összefésülése, duplikációk szűrése rögzített szabályokkal és kész kimutatás; újrafuttatható eszközzel és rövid útmutatóval.",
          price: en ? "HUF 15,000–40,000" : "15 000–40 000 Ft",
          time: en ? "2–5 working hours" : "2–5 munkaóra",
        },
        {
          name: en
            ? "Supplier price-list conversion"
            : "Beszállítói árlista átalakítása",
          audience: en ? "For online shop owners" : "Webshop-tulajdonosoknak",
          deliverable: en
            ? "Convert one supplier Excel format into your shop's agreed import template, with adjustable markup and a checked sample. Includes the converter and import file; live store import is agreed separately."
            : "Egy beszállítói Excel-formátum átalakítása a webshop egyeztetett importsablonjára, állítható árréssel és ellenőrzött mintával. Átalakító eszköz és importfájl; az éles betöltés külön egyeztetéssel.",
          price: en ? "HUF 25,000–50,000" : "25 000–50 000 Ft",
          time: en ? "3–6 working hours" : "3–6 munkaóra",
        },
        {
          name: en ? "Small file-management tool" : "Fájlkezelő kisprogram",
          audience: en
            ? "For photographers, offices and estate agents"
            : "Fotósoknak, irodáknak és ingatlanközvetítőknek",
          deliverable: en
            ? "One agreed operation: batch renaming, image resizing or document organisation. Includes a reusable tool and instructions, preserving originals and saving results separately."
            : "Egy egyeztetett művelet: tömeges átnevezés, képméretezés vagy dokumentumrendezés. Újrafuttatható kisprogram és útmutató, az eredetik megőrzésével és külön mentett eredménnyel.",
          price: en ? "HUF 15,000–30,000" : "15 000–30 000 Ft",
          time: en ? "2–4 working hours" : "2–4 munkaóra",
        },
      ],
      features: en
        ? [
            "Excel/CSV processing, file organisation, a recurring report or data import.",
            "Agreed inputs and output, sample-based checks and brief operating instructions.",
            "Larger workflows and multiple integrations belong to the broader automation packages in the full price list.",
          ]
        : [
            "Excel/CSV-feldolgozás, fájlok rendezése, rendszeres kimutatás vagy adatimport.",
            "Egyeztetett bemenet és eredmény, mintán ellenőrzött működés és rövid használati útmutató.",
            "Nagyobb folyamatra és több rendszer összekötésére a részletes árlista automatizálási csomagjai adnak kiindulópontot.",
          ],
    },
    {
      id: "angular-dotnet",
      topic: "development",
      services: ["egyedi-fejlesztes"],
      name: en
        ? "Angular / .NET development support"
        : "Angular / .NET bedolgozás",
      price: en ? "HUF 8,000–12,000/hour" : "8 000–12 000 Ft/óra",
      hint: en
        ? "For an existing project, with an agreed hourly rate and budget."
        : "Meglévő projekthez, előre rögzített óradíjjal és költségkerettel.",
      features: en
        ? [
            "A bug fix or a small feature in an existing Angular or .NET application.",
            "Code changes, relevant checks and a brief handover summary.",
            "Code review and onboarding count towards the agreed allowance. Extra hours require agreement; new applications are quoted separately.",
          ]
        : [
            "Hibajavítás vagy kisebb funkció meglévő Angular- vagy .NET-alkalmazásban.",
            "Kódmódosítás, a feladathoz illő ellenőrzés és rövid átadási összefoglaló.",
            "A kód megismerése is része az egyeztetett időkeretnek. Többletóra csak egyeztetéssel; új alkalmazásra külön ajánlat készül.",
          ],
    },
    {
      id: "remote-diagnostics",
      topic: "hardware",
      services: ["diagnosztika-tavsegitseg"],
      name: en ? "Remote PC troubleshooting" : "Távoli PC-hibafeltárás",
      price: en ? "HUF 8,000–12,000" : "8 000–12 000 Ft",
      hint: en
        ? "Up to 60 minutes of investigation; the fee is agreed before the session."
        : "Legfeljebb 60 perc vizsgálat; a díjat az alkalom előtt egyeztetjük.",
      features: en
        ? [
            "Slow PC, printer trouble or a software error that can be investigated remotely.",
            "A brief written summary and recommended next steps; the fee covers diagnosis, not a guaranteed repair.",
            "Repairs or further investigation are agreed separately. The shorter, up to 30-minute remote-help option remains available from HUF 5,000.",
          ]
        : [
            "Lassulás, nyomtatóprobléma vagy távolról vizsgálható szoftverhiba.",
            "Rövid írásos összefoglaló és javítási javaslat; a díj a vizsgálatot fedezi, nem garantált javítást.",
            "A javítás vagy további vizsgálat külön egyeztetés tárgya. A rövidebb, legfeljebb 30 perces távsegítség továbbra is 5 000 Ft-tól elérhető.",
          ],
    },
  ];
}
