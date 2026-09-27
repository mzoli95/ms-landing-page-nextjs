import type { Lang } from "./i18n";

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
      price: en ? "HUF 20,000–50,000" : "20 000–50 000 Ft",
      hint: en
        ? "Indicative project fee for one agreed, reproducible issue."
        : "Irányadó projektdíj egy egyeztetett, reprodukálható hibára.",
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
      price: en ? "HUF 40,000–100,000" : "40 000–100 000 Ft",
      hint: en
        ? "Indicative project fee for one clearly defined task."
        : "Irányadó projektdíj egy jól körülhatárolt feladatra.",
      features: en
        ? [
            "Excel/CSV processing, file organisation, a recurring report or data import.",
            "Agreed inputs and output, sample-based checks and brief operating instructions.",
            "Larger workflows and multiple integrations belong to the broader automation packages below.",
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
