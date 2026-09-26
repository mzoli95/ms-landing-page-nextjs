import type { Lang } from "./i18n";
import { getDictionary } from "./dictionary";

export function getDevelopmentServices(lang: Lang) {
  const en = lang === "en";
  const price = getDictionary(lang).pricingGrid.plans[15].price;
  const scope = en
    ? "Small tasks can be billed at 12,000 HUF/hour, with a minimum of 2 hours, or quoted as a fixed project. The number of files, data quality, update frequency and required integrations determine the scope. Licences and external subscriptions are agreed separately."
    : "Kisebb feladatok 12 000 Ft/óra díjjal, minimum 2 órás alkalommal, vagy rögzített projektajánlattal kérhetők. A fájlok száma, az adatok minősége, a frissítés gyakorisága és a szükséges kapcsolatok határozzák meg a feladat méretét. A licenceket és külső előfizetéseket külön egyeztetjük.";
  return [
    {
      slug: "excel-automatizalas",
      title: en ? "Excel and task automation" : "Excel és feladatautomatizálás",
      price,
      summary: en
        ? "Combine monthly files, clean spreadsheets and generate recurring summaries without repeating the same manual steps."
        : "Havi fájlok összefésülése, táblázatok rendbetétele és ismétlődő összesítések elkészítése a kézi lépések újrajátszása nélkül.",
      intro: en
        ? "If each week starts with copying the same columns, a focused automation may help. For example, several monthly sales exports can become one checked table and a repeatable summary. We choose between formulas, Power Query, a macro or a separate program based on your files and the way you work."
        : "Ha minden hét ugyanazoknak az oszlopoknak a másolgatásával kezdődik, érdemes automatizálni a folyamatot. Például több havi értékesítési exportból készülhet egy ellenőrzött közös táblázat és újrafuttatható összesítő. A fájljaid és a használat alapján döntjük el, hogy képlet, Power Query, makró vagy külön program a megfelelő megoldás.",
      examples: en
        ? [
            "Merge Excel and CSV files with agreed column mappings",
            "Find duplicates, missing values and inconsistent date or number formats",
            "Generate recurring stock, order or expense summaries",
            "Prepare template-based quotes or documents from spreadsheet rows",
            "Import data from a system export or an agreed API",
          ]
        : [
            "Excel- és CSV-fájlok összefűzése egyeztetett oszlopok alapján",
            "Duplikációk, hiányzó adatok, eltérő dátum- és számformátumok ellenőrzése",
            "Rendszeres készlet-, rendelés- vagy költségösszesítő készítése",
            "Sablonos ajánlat vagy dokumentum előállítása táblázatsorokból",
            "Adatok beolvasása rendszerexportból vagy egyeztetett API-kapcsolaton keresztül",
          ],
      steps: en
        ? [
            "Review a sample file and your current manual steps.",
            "Agree input formats, checks and the expected output.",
            "Build a repeatable workflow with clear error messages.",
            "Compare results with a known sample and hand over instructions for running it again.",
          ]
        : [
            "Átnézünk egy mintafájlt és a jelenlegi kézi lépéseket.",
            "Rögzítjük a bemeneti formátumot, az ellenőrzéseket és az elvárt kimenetet.",
            "Elkészítem az újrafuttatható folyamatot, érthető hibajelzésekkel.",
            "Ismert mintán összevetjük az eredményt, és átadom az újrafuttatás leírását.",
          ],
      scope,
      prepare: en
        ? "A sample with fictional data, the expected result, Excel version and how often the task repeats. Mention whether macros are allowed."
        : "Egy fiktív adatokkal kitöltött mintafájl, az elvárt eredmény, az Excel verziója és a feladat gyakorisága. Jelezd azt is, ha makró nem használható.",
      related: "/services/statisztikak-kimutatasok",
      relatedLabel: en
        ? "Statistics and reports"
        : "Statisztikák és kimutatások",
    },
    {
      slug: "statisztikak-kimutatasok",
      title: en
        ? "Statistics, reports and dashboards"
        : "Statisztikák, kimutatások és riportok",
      price,
      summary: en
        ? "Turn sales, costs, stock or website activity into understandable charts, comparisons and regularly updated reports."
        : "Értékesítésből, költségekből, készletből vagy weboldaleseményekből érthető grafikonok, összehasonlítások és rendszeresen frissíthető kimutatások.",
      intro: en
        ? "Start with a question: which products attract interest, where do costs increase, or how did this month compare with last month? I help define the metrics and build an Excel report or custom web dashboard around the data you actually have. Missing data and estimates are labelled clearly."
        : "Induljunk egy kérdésből: melyik termék iránt nő az érdeklődés, hol emelkednek a költségek, vagy hogyan alakult ez a hónap az előzőhöz képest? Segítek meghatározni a mutatókat, és a ténylegesen rendelkezésre álló adatokból Excel-kimutatást vagy egyedi webes áttekintő felületet készítek. A hiányzó adatokat és becsléseket külön jelöljük.",
      examples: en
        ? [
            "Monthly revenue and cost comparisons by category",
            "Sales and stock reports filtered by product or period",
            "Search, click and conversion summaries where tracking is available",
            "Charts, pivot tables and exportable management reports",
            "A custom dashboard with agreed refresh frequency and access rights",
          ]
        : [
            "Havi bevétel- és költségösszehasonlítás kategóriánként",
            "Értékesítési és készletkimutatások termék- vagy időszakszűréssel",
            "Keresések, kattintások és konverziók összesítése, ha a mérés rendelkezésre áll",
            "Grafikonok, pivotkimutatások és exportálható vezetői összefoglalók",
            "Egyedi áttekintő felület egyeztetett frissítéssel és hozzáférésekkel",
          ],
      steps: en
        ? [
            "Define the questions the report needs to answer.",
            "Review sources, metric definitions and data quality.",
            "Build a first report with filters and agreed comparisons.",
            "Reconcile totals with source data, then document refresh and export steps.",
          ]
        : [
            "Megfogalmazzuk, milyen kérdésekre adjon választ a kimutatás.",
            "Átnézzük az adatforrásokat, a mutatók jelentését és az adatminőséget.",
            "Elkészül az első riport a szűrésekkel és az egyeztetett összehasonlításokkal.",
            "Ellenőrizzük az összegeket a forrásadatokkal, és dokumentáljuk a frissítést, exportot.",
          ],
      scope,
      prepare: en
        ? "Your questions, a sample dataset, current reports if any and desired refresh frequency. If tracking is not set up yet, that is scoped separately."
        : "A megválaszolandó kérdések, mintaadatok, meglévő kimutatások és a kívánt frissítési gyakoriság. Ha még nincs adatgyűjtés, annak kialakítását külön egyeztetjük.",
      related: "/portfolio/toyzumi",
      relatedLabel: en
        ? "Demand signals in the ToyZumi project"
        : "Keresleti jelzések a ToyZumi projektben",
    },
    {
      slug: "webfejlesztes",
      title: en
        ? "Websites and web applications"
        : "Weboldal- és webalkalmazás-fejlesztés",
      price: getDictionary(lang).pricingGrid.plans[5].price,
      summary: en
        ? "Personal sites, company websites, landing pages and custom web applications, with mobile layouts and clear content."
        : "Személyes és céges weboldalak, landing oldalak és egyedi webalkalmazások, mobilra tervezett felülettel és átlátható tartalommal.",
      intro: en
        ? "We start with what visitors need to do: understand your offer, get in touch, browse a collection or complete a task. A small website can be enough; forms, user accounts and integrations are scoped around the actual need."
        : "Abból indulunk ki, mit szeretnél lehetővé tenni a látogatóknak: megismerni az ajánlatodat, kapcsolatba lépni veled, böngészni egy gyűjteményt vagy elvégezni egy feladatot. Sokszor egy kisebb weboldal is elég; az űrlapokat, felhasználói fiókokat és rendszerkapcsolatokat a tényleges igényhez igazítjuk.",
      examples: en
        ? [
            "A personal portfolio, club or company website",
            "A focused landing page with an enquiry form",
            "A searchable catalogue or custom customer interface",
            "A web application with agreed roles and integrations",
          ]
        : [
            "Személyes portfólió, egyesületi vagy céges bemutatkozó oldal",
            "Egy ajánlatra épülő landing oldal érdeklődői űrlappal",
            "Kereshető katalógus vagy egyedi ügyfélfelület",
            "Webalkalmazás egyeztetett jogosultságokkal és rendszerkapcsolatokkal",
          ],
      steps: en
        ? [
            "Agree the audience, purpose and content.",
            "Review page structure and an initial design.",
            "Build the pages and agreed features.",
            "Check mobile layouts, forms and technical search foundations, then hand over.",
          ]
        : [
            "Egyeztetjük a célközönséget, a célt és a szükséges tartalmat.",
            "Átnézzük az oldalszerkezetet és az első látványtervet.",
            "Elkészítem az oldalakat és a megbeszélt funkciókat.",
            "Ellenőrizzük a mobilnézetet, űrlapokat és keresési alapokat, majd átadom az oldalt.",
          ],
      scope: en
        ? "A landing page starts at 99,000 HUF: one language, one responsive page with up to six sections, supplied content and one consolidated revision round. The starter website package is 149,000 HUF for up to four content pages. Custom applications and integrations require a separate quote; domain, hosting and paid services are separate."
        : "Landing oldal 99 000 Ft-tól: egy nyelv, egy mobilbarát oldal legfeljebb hat szekcióval, hozott tartalommal és egy összevont módosítási körrel. A weboldal induló csomag 149 000 Ft-tól legfeljebb négy tartalmi oldalt jelent. Egyedi alkalmazás és integráció külön ajánlat alapján készül; a domain, tárhely és fizetős szolgáltatások külön tételek.",
      prepare: en
        ? "Your goal, audience, a few examples and any existing text or images. Mention required forms, logins or connections to other tools."
        : "A célod, célközönséged, néhány példa, valamint a meglévő szövegek és képek. Jelezd, ha űrlap, belépés vagy más rendszerrel való kapcsolat szükséges.",
      related: "/portfolio",
      relatedLabel: en
        ? "Explore development projects"
        : "Fejlesztési projektek megtekintése",
    },
  ];
}
