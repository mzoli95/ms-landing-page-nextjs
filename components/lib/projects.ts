import type { Lang } from "./i18n";

export function getProjects(lang: Lang) {
  const en = lang === "en";
  return [
    {
      slug: "toyzumi",
      name: "ToyZumi",
      category: en ? "E-commerce" : "E-kereskedelem",
      summary: en
        ? "A collector-focused webshop: demand signals for procurement, loyalty for returning customers and connected operations."
        : "Gyűjtőkre hangolt webshop: keresleti jelzések a beszerzéshez, hűségprogram a visszatéréshez és összekapcsolt napi működés.",
      status: en ? "Staging · In development" : "Staging · Fejlesztés alatt",
      features: en
        ? [
            "Storefront and checkout",
            "Inventory and operations",
            "Loyalty and marketing",
          ]
        : [
            "Webshop és vásárlási folyamat",
            "Készlet és operáció",
            "Hűségprogram és marketing",
          ],
      scope: en
        ? "Development environment with demonstration data. The case study shows the documented system, not production business results."
        : "Fejlesztői környezet, demonstrációs adatokkal. Az esettanulmány a dokumentált rendszert mutatja be, nem éles üzleti eredményeket.",
      stack: ["Webshop", "Back office", "Automation"],
    },
    {
      slug: "menutivo",
      name: "Menutivo",
      category: en ? "Restaurant platform" : "Éttermi platform",
      summary: en
        ? "Restaurant discovery, QR ordering and shared table sessions, with separate views for owners, waiters and the kitchen."
        : "Étteremkereső, QR-rendelés és közös asztali munkamenet, saját tulajdonosi, pincér- és konyhai felülettel.",
      status: en ? "In development" : "Fejlesztés alatt",
      features: en
        ? [
            "QR ordering without an account",
            "Shared table and item splitting",
            "Restaurant, waiter and kitchen roles",
            "Menu, table and staff management",
          ]
        : [
            "QR-rendelés fiók nélkül is",
            "Közös asztal és fizetendő tételek szétosztása",
            "Éttermi, pincér- és konyhai szerepkörök",
            "Étlap, asztalok és munkatársak kezelése",
          ],
      scope: en
        ? "On-site payment is currently confirmed by staff. Online payment and invoicing integrations are still being developed; selecting items does not charge a bank card."
        : "A helyszíni fizetést jelenleg a személyzet igazolja. Az online fizetés és a számlázás integrációja még készül; a tételek kiválasztása önmagában nem bankkártyás terhelés.",
      stack: ["React", "TypeScript", ".NET", "SQL Server", "Keycloak"],
    },
    {
      slug: "molnar-diagnostic",
      name: "Molnár Diagnostic",
      category: en ? "Windows diagnostics" : "Windows-diagnosztika",
      summary: en
        ? "A native Windows diagnostic application built with C#, .NET 10 and WPF: machine inventory, targeted checks and before-and-after comparisons in one service workflow."
        : "C#, .NET 10 és WPF alapú natív Windows-diagnosztikai alkalmazás: gépleltár, célzott vizsgálatok és előtte–utána összehasonlítás egy közös szervizfolyamatban.",
      status: en ? "Under active development" : "Folyamatos fejlesztés",
      features: en
        ? [
            "Hardware inventory and service sheet",
            "Targeted printer and performance checks",
            "Before-and-after comparison",
            "Exportable HTML and JSON reports",
          ]
        : [
            "Hardverleltár és átadható szervizlap",
            "Célzott nyomtató- és teljesítményvizsgálat",
            "Előtte–utána összehasonlítás",
            "Exportálható HTML- és JSON-riport",
          ],
      scope: en
        ? "Results describe the properties actually measured. Unavailable readings are marked separately. The tool is not an antivirus or a complete manufacturer hardware test."
        : "Az eredmények a ténylegesen mért tulajdonságokra vonatkoznak; a hiányzó adatokat külön jelzi. Az eszköz nem vírusirtó és nem teljes körű gyártói hardverteszt.",
      stack: ["C#", ".NET 10", "WPF / XAML", "Windows"],
    },
  ];
}
