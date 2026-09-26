import type { Lang } from "./i18n";

type SearchContent = {
  title: string;
  description: string;
  faq: [string, string][];
};

export function getServiceSearch(
  slug: string,
  lang: Lang,
): SearchContent | undefined {
  const en = lang === "en";
  const content: Record<string, SearchContent> = {
    "pc-epites": {
      title: en
        ? "Custom gaming and work PC builds in Siófok"
        : "Gamer és munka PC építés Siófokon",
      description: en
        ? "Custom PC assembly, parts selection, compatibility checks and basic testing. For gaming, work and creative applications. Siófok area and Somogy county."
        : "Egyedi PC-építés játékhoz, munkához és kreatív feladatokhoz. Alkatrészválasztás, kompatibilitás-ellenőrzés, összeszerelés és alapteszt Siófokon és Somogy megyében.",
      faq: en
        ? [
            [
              "Can you build a PC using parts I already own?",
              "Yes. I review the parts list and check compatibility, power requirements, cooling and possible upgrades before assembly. The scope and labour fee are agreed in advance.",
            ],
            [
              "Do you build gaming PCs and workstations too?",
              "Yes. The configuration is chosen around your games or applications, monitor resolution, performance needs and budget. You can request a new build or discuss rebuilding an existing machine.",
            ],
          ]
        : [
            [
              "Hozott alkatrészekből is vállalsz PC-építést?",
              "Igen. Összeszerelés előtt átnézem az alkatrészlistát, a kompatibilitást, a tápellátást, a hűtést és a bővítési lehetőségeket. A feladatot és a munkadíjat előre egyeztetjük.",
            ],
            [
              "Gamer gépet és munkára szánt konfigurációt is építesz?",
              "Igen. A konfigurációt a játékokhoz vagy programokhoz, a monitor felbontásához, a teljesítményigényhez és a költségkerethez igazítjuk. Új gép összeállításával és meglévő gép átépítésével is kereshetsz.",
            ],
          ],
    },
    "pc-bovites": {
      title: en
        ? "RAM and SSD upgrades, PC upgrades in Siófok"
        : "RAM- és SSD-bővítés, PC-bővítés Siófokon",
      description: en
        ? "Memory and storage upgrades with compatibility checks. Review your existing computer before buying parts. Siófok area and Somogy county, further afield by arrangement."
        : "RAM- és SSD-bővítés, alkatrészcsere és adatköltöztetés kompatibilitás-ellenőrzéssel. Meglévő számítógépek bővítése Siófokon és Somogy megyében.",
      faq: en
        ? [
            [
              "Should I buy RAM or an SSD before contacting you?",
              "It is better to check the machine first. The exact model, existing components and task determine which upgrade is compatible and worthwhile.",
            ],
            [
              "Does an upgrade include moving my files?",
              "Data transfer, backups and system installation are scoped separately where needed. Tell me which files and applications you want to keep so we can include them in the quote.",
            ],
          ]
        : [
            [
              "Vegyek RAM-ot vagy SSD-t, mielőtt jelentkezem?",
              "Érdemes előbb megnézni a gépet. A pontos típus, a meglévő alkatrészek és a felhasználás alapján döntjük el, melyik bővítés kompatibilis és észszerű.",
            ],
            [
              "Az adatköltöztetés is része a bővítésnek?",
              "Az adatköltöztetést, biztonsági mentést és rendszertelepítést szükség esetén külön egyeztetjük. Írd meg, mely fájlokat és programokat szeretnéd megtartani, hogy ezek is szerepeljenek az ajánlatban.",
            ],
          ],
    },
    "diagnosztika-tavsegitseg": {
      title: en
        ? "PC diagnostics in Siófok and remote support"
        : "PC-diagnosztika Siófokon és távsegítség",
      description: en
        ? "Help with a slow computer, software errors and settings. Remote support across Hungary or on-site assessment around Siófok. A focused initial check from HUF 5,000."
        : "Lassú számítógép, hibázó program vagy elakadt beállítás? PC-diagnosztika Siófok környékén, távsegítség országosan. Rövid alapellenőrzés 5 000 Ft-tól.",
      faq: en
        ? [
            [
              "Can you diagnose every fault remotely?",
              "No. Software and configuration issues can often be investigated remotely, but physical faults may need an in-person inspection. I first ask about the symptoms and the device.",
            ],
            [
              "What happens if the initial assessment is not enough?",
              "We agree any longer diagnosis or repair and its fee before continuing. The starting fee covers up to 30 minutes of remote help or a basic assessment, not an unlimited repair.",
            ],
          ]
        : [
            [
              "Minden hiba kideríthető távsegítséggel?",
              "Nem. Program- és beállítási problémák sokszor távolról is vizsgálhatók, fizikai hibához viszont személyes ellenőrzés kellhet. Először a tüneteket és az eszköz típusát egyeztetjük.",
            ],
            [
              "Mi történik, ha nem elég az alapellenőrzés?",
              "A hosszabb vizsgálatot vagy javítást és annak díját a folytatás előtt megbeszéljük. Az induló díj legfeljebb 30 perces távsegítséget vagy alapellenőrzést fed, nem korlátlan javítást.",
            ],
          ],
    },
    "elektronikai-eszkozok": {
      title: en
        ? "Printer, Wi-Fi and device setup in Siófok"
        : "Nyomtató-, Wi-Fi- és eszközbeállítás Siófokon",
      description: en
        ? "Help setting up printers, scanners, Wi-Fi and other devices. Troubleshooting around Siófok and in Somogy county; visits further afield by arrangement."
        : "Nyomtató, szkenner, Wi-Fi és elektronikai eszközök beállítása, hibafeltárása Siófokon és Somogy megyében. Távolabbi kiszállás előzetes egyeztetéssel.",
      faq: en
        ? [
            [
              "What information helps before a visit?",
              "Send the model, the error message or symptom, how the device is connected and what you have already tried. Include your location for on-site help.",
            ],
            [
              "Does device support include component-level electronics repair?",
              "This service focuses on setup and fault assessment. If the issue requires specialist component repair, we discuss that after the assessment rather than treating it as a standard setup task.",
            ],
          ]
        : [
            [
              "Mit írjak meg a kiszállás előtt?",
              "Az eszköz típusát, a hibaüzenetet vagy tünetet, a csatlakozás módját és azt, mit próbáltál eddig. Helyszíni segítségnél a települést is írd meg.",
            ],
            [
              "Az eszközbeállítás elektronikai alkatrészjavítást is jelent?",
              "Ez a szolgáltatás elsősorban beállítás és hibafeltárás. Ha speciális alkatrészjavítás szükséges, azt a felmérés után külön megbeszéljük; nem kezeljük egyszerű beállításként.",
            ],
          ],
    },
    "egyedi-fejlesztes": {
      title: en
        ? "Custom software and internal business systems"
        : "Egyedi szoftverfejlesztés és belső rendszerek",
      description: en
        ? "Custom applications, internal systems and integrations for businesses and individuals. Based in Siófok, working remotely across Hungary. Start with your actual workflow."
        : "Egyedi alkalmazások, belső rendszerek és integrációk vállalkozásoknak és magánszemélyeknek. Siófoki fejlesztő, online együttműködés országosan.",
      faq: en
        ? [
            [
              "Do I need a finished specification?",
              "No. Describe the result you want and how you handle the task today. We define the scope, required data, integrations and handover criteria together.",
            ],
            [
              "Can I request a small personal tool rather than a business system?",
              "Yes. Personal projects and focused tools are welcome. We can start with a useful, limited version and agree later additions separately.",
            ],
          ]
        : [
            [
              "Kész specifikációval kell jelentkeznem?",
              "Nem. Írd le az elérni kívánt eredményt és azt, hogyan végzed ma a feladatot. A tartalmat, a szükséges adatokat, a rendszerkapcsolatokat és az átadás feltételeit közösen határozzuk meg.",
            ],
            [
              "Kis magáncélú programot is kérhetek, nem csak céges rendszert?",
              "Igen. Saját ötlettel és célzott segédprogrammal is megkereshetsz. Indulhatunk egy hasznos, körülhatárolt változattal, a későbbi bővítéseket pedig külön egyeztetjük.",
            ],
          ],
    },
    "excel-automatizalas": {
      title: en
        ? "Excel automation, data cleaning and recurring reports"
        : "Excel-automatizálás, adattisztítás és összesítések",
      description: en
        ? "Combine Excel and CSV files, clean data and automate recurring summaries. Custom workflows for businesses and individuals, available remotely across Hungary."
        : "Excel- és CSV-fájlok összefésülése, adattisztítás, ismétlődő összesítések és riportok automatizálása. KKV-knak és magánszemélyeknek, országosan online.",
      faq: en
        ? [
            [
              "Can we keep using our existing Excel files?",
              "Often, yes. We first examine the file structure and workflow, then decide what can be automated without replacing tools that already work.",
            ],
            [
              "What should I send for a useful quote?",
              "Describe the input files, the desired output and how often the task runs. If examples are needed, use anonymised sample data without passwords or confidential customer information.",
            ],
          ]
        : [
            [
              "Megtarthatjuk a meglévő Excel-fájlokat?",
              "Sok esetben igen. Először a fájlok szerkezetét és a munkamenetet nézzük meg, majd eldöntjük, mi automatizálható a jól működő eszközök lecserélése nélkül.",
            ],
            [
              "Mi kell egy használható árajánlathoz?",
              "Írd le, milyen fájlokból milyen eredményt szeretnél, és milyen gyakran fut a feladat. Ha mintára van szükség, anonimizált adatokat használjunk, jelszavak és bizalmas ügyféladatok nélkül.",
            ],
          ],
    },
    "statisztikak-kimutatasok": {
      title: en
        ? "Custom dashboards, statistics and business reports"
        : "Egyedi kimutatások, statisztikák és dashboardok",
      description: en
        ? "Turn revenue, cost, inventory and operational data into clear reports and dashboards. Agreed metrics, filters and comparisons; remote development across Hungary."
        : "Bevétel, költség, készlet és működési adatok érthető kimutatásokban. Egyedi riportok, dashboardok, szűrők és összehasonlítások, országosan online.",
      faq: en
        ? [
            [
              "Can a report combine several data sources?",
              "Yes, subject to access and data quality. We agree which files or systems supply the data, how values relate to each other and how updates should work.",
            ],
            [
              "How do we decide which metrics belong in the dashboard?",
              "We start with the questions you need to answer. Definitions, time periods and comparisons are agreed so the figures are interpretable and can be checked against the source data.",
            ],
          ]
        : [
            [
              "Több adatforrásból is készülhet közös kimutatás?",
              "Igen, a hozzáférés és az adatok minősége alapján. Egyeztetjük, mely fájlokból vagy rendszerekből érkeznek az adatok, hogyan kapcsolódnak össze, és miként frissüljenek.",
            ],
            [
              "Hogyan választjuk ki a dashboard mutatóit?",
              "Azokból a kérdésekből indulunk ki, amelyekre választ szeretnél kapni. Egyeztetjük a fogalmakat, időszakokat és összehasonlításokat, hogy a számok értelmezhetők és a forrásadatokkal ellenőrizhetők legyenek.",
            ],
          ],
    },
    webfejlesztes: {
      title: en
        ? "Website and web application development in Siófok"
        : "Weboldalkészítés és webalkalmazás-fejlesztés Siófok",
      description: en
        ? "Mobile-friendly websites, landing pages, portfolios and custom web applications for businesses and individuals. Siófok-based development, available across Hungary."
        : "Mobilbarát weboldal, landing oldal, portfólió és egyedi webalkalmazás cégeknek és magánszemélyeknek. Siófoki webfejlesztés, online együttműködés országosan.",
      faq: en
        ? [
            [
              "Do I need a website or a web application?",
              "A website may be enough to present your work and receive enquiries. Accounts, permissions, data entry or connected workflows may call for a web application. We choose based on the tasks visitors need to complete.",
            ],
            [
              "Are hosting, domains and ongoing support included?",
              "The quote separates development from any hosting, domain, licence and maintenance costs. We agree what is needed for launch and what support you want afterwards.",
            ],
          ]
        : [
            [
              "Weboldalra vagy webalkalmazásra van szükségem?",
              "Bemutatkozáshoz és ajánlatkéréshez sokszor elég egy weboldal. Fiókokhoz, jogosultságokhoz, adatbevitelhez vagy összekapcsolt folyamatokhoz webalkalmazás lehet célszerű. A látogatók feladatai alapján választunk.",
            ],
            [
              "A tárhely, domain és későbbi támogatás is benne van?",
              "Az ajánlatban a fejlesztést és az esetleges tárhely-, domain-, licenc- és karbantartási költségeket külön rögzítjük. Egyeztetjük az induláshoz szükséges tételeket és az átadás utáni támogatást.",
            ],
          ],
    },
  };
  return content[slug];
}
