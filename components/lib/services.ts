import { getDevelopmentServices } from "./development-services";
import { getDictionary } from "./dictionary";
import type { Lang } from "./i18n";

export function getServices(lang: Lang) {
  const en = lang === "en";
  const prices = getDictionary(lang).pricingGrid;
  return [
    {
      slug: "diagnosztika-tavsegitseg",
      title: en ? "Diagnostics and remote help" : "Diagnosztika és távsegítség",
      price: prices.pcPlans[6].price,
      summary: en
        ? "A slow PC, a software error or a setting you cannot find. Start with a short, focused assessment."
        : "Lassú gép, hibázó program, elakadt beállítás. Egy rövid, célzott felméréssel is el lehet indulni.",
      intro: en
        ? "You can ask for help with your home computer just as you would with a work device. Tell me what happens, when it started and what you have already tried. We will choose remote help or an in-person check based on the symptom."
        : "Otthoni számítógéppel ugyanúgy kereshetsz, mint munkaeszközzel. Írd le, mit tapasztalsz, mióta jelentkezik, és mit próbáltál eddig. Ebből eldöntjük, hogy távolról vagy személyesen érdemes megnézni.",
      examples: en
        ? [
            "Slow startup, freezes and recurring error messages",
            "Email, printer or application settings",
            "Updates, storage and startup programs",
            "Initial assessment before a hardware upgrade",
          ]
        : [
            "Lassú indulás, fagyás, visszatérő hibaüzenet",
            "Levelezés, nyomtató vagy program beállítása",
            "Frissítések, tárhely és induló programok áttekintése",
            "Első állapotfelmérés alkatrészvásárlás előtt",
          ],
      steps: en
        ? [
            "Describe the symptom and device. We agree the fee before connecting.",
            "For remote help, you approve the connection and can follow the work on screen.",
            "We check the relevant settings and evidence, and fix a simple issue if it fits the session.",
            "You receive a short explanation and the next steps; further work requires a separate agreement.",
          ]
        : [
            "Leírod a hibát és az eszköz típusát; kapcsolódás előtt egyeztetjük a díjat.",
            "Távsegítségnél te engedélyezed a kapcsolatot, és a képernyőn követheted a munkát.",
            "Megnézzük a releváns beállításokat és adatokat; az időkeretbe férő egyszerű hibát javítjuk.",
            "Rövid magyarázatot és javaslatot kapsz. További munkát csak új egyeztetés után végzek.",
          ],
      scope: en
        ? "5,000 HUF covers the first 30 minutes of remote help or a basic assessment. These are alternative services, not two sessions for one fee. Longer diagnostics, repairs and travel are quoted separately."
        : "Az 5 000 Ft az első, legfeljebb 30 perces távsegítség vagy alapellenőrzés díja. Ez két választható szolgáltatás, nem két alkalom egy díjért. A hosszabb diagnosztika, javítás és kiszállás külön egyeztetés tárgya.",
      prepare: en
        ? "Device model, operating system, exact error message and when it occurs. Do not send passwords."
        : "Eszköztípus, operációs rendszer, pontos hibaüzenet és a hiba jelentkezésének körülményei. Jelszót ne küldj.",
      related: "/portfolio/molnar-diagnostic",
      relatedLabel: "Molnár Diagnostic",
    },
    {
      slug: "pc-epites",
      title: en ? "Custom PC building" : "Egyedi PC építés",
      price: prices.pcPlans[5].price,
      summary: en
        ? "A computer for gaming, learning, work or a hobby, built around your budget."
        : "Játékhoz, tanuláshoz, munkához vagy hobbihoz, a saját keretedhez igazítva.",
      intro: en
        ? "You do not need to arrive with a complete parts list. Tell me which applications or games you use, the monitor you have and your budget. We can review a planned configuration or assemble parts you already own."
        : "Nem kell kész alkatrészlistával érkezned. Elég, ha elmondod, milyen programokat vagy játékokat használnál, milyen monitorod van, és mennyit szánsz a gépre. Meglévő listát is átnézek, és hozott alkatrészekből is összeállítható a konfiguráció.",
      examples: en
        ? [
            "A first gaming PC within a set budget",
            "Quiet home, study or office computer",
            "A machine for editing, development or creative work",
            "Compatibility review of a planned parts list",
          ]
        : [
            "Első gamer PC meghatározott költségkerettel",
            "Csendes otthoni, tanulós vagy irodai gép",
            "Vágáshoz, fejlesztéshez vagy kreatív munkához választott konfiguráció",
            "Összeállított alkatrészlista kompatibilitási ellenőrzése",
          ],
      steps: en
        ? [
            "Agree the use case, budget and reusable components.",
            "Review compatibility, cooling, power and expansion options.",
            "Assemble the agreed parts and organise the cabling.",
            "Check startup and basic stability, then explain the handover and any remaining setup.",
          ]
        : [
            "Egyeztetjük a felhasználást, a keretet és a megtartható alkatrészeket.",
            "Ellenőrizzük a kompatibilitást, hűtést, tápellátást és bővíthetőséget.",
            "Összeszerelem az egyeztetett alkatrészeket, és rendezem a kábelezést.",
            "Ellenőrzöm az indulást és az alap stabilitást; átadáskor átbeszéljük a további beállításokat.",
          ],
      scope: en
        ? "From 12,000 HUF labour for a straightforward desktop build and basic tests. Parts, software licences, operating-system installation, data transfer, custom liquid cooling and complex rebuilds are separate items."
        : "12 000 Ft-tól munkadíj egy egyszerű asztali konfiguráció összeszerelésére és alaptesztjére. Az alkatrészek, licencek, rendszertelepítés, adatköltöztetés, egyedi vízhűtés és összetettebb átépítés külön tétel.",
      prepare: en
        ? "Budget, main applications or games, monitor resolution and any parts you already have."
        : "Költségkeret, fő programok vagy játékok, monitor felbontása, valamint a meglévő alkatrészek típusa.",
      related: "/services/pc-bovites",
      relatedLabel: en ? "Upgrading an existing PC" : "Meglévő gép bővítése",
    },
    {
      slug: "pc-bovites",
      title: en ? "PC upgrades and migration" : "PC bővítés és költöztetés",
      price: prices.pcPlans[2].price,
      summary: en
        ? "RAM, SSD and component upgrades, after checking what your machine actually needs."
        : "RAM, SSD és alkatrészcsere, annak ellenőrzésével, hogy mire van valóban szükség.",
      intro: en
        ? "An existing machine may be worth keeping. We look at its limits and the task you want it to handle before choosing an upgrade. If replacing the computer makes more sense, I will explain why."
        : "Lehet, hogy a meglévő géped még jól használható. Vásárlás előtt megnézzük a korlátait és azt, milyen feladatra szeretnéd használni. Ha inkább a gépcsere észszerű, azt is elmondom.",
      examples: en
        ? [
            "More memory for everyday applications",
            "Adding an SSD or replacing storage",
            "Graphics card or power-supply compatibility",
            "Moving files and settings to a new computer",
          ]
        : [
            "Memóriabővítés több párhuzamos programhoz",
            "SSD beépítése vagy háttértár cseréje",
            "Videókártya vagy tápegység kompatibilitása",
            "Fájlok és beállítások átköltöztetése új gépre",
          ],
      steps: en
        ? [
            "Identify the exact model and the bottleneck.",
            "Check slots, capacity, power and compatibility.",
            "Agree the parts and protect the relevant data before work.",
            "Install and test the component, with migration agreed separately if needed.",
          ]
        : [
            "Azonosítjuk a pontos típust és a lassulás vagy korlát okát.",
            "Ellenőrizzük a foglalatokat, kapacitást, tápellátást és kompatibilitást.",
            "Egyeztetjük az alkatrészt, és a munka előtt gondoskodunk az érintett adatok mentéséről.",
            "Beépítem és ellenőrzöm az alkatrészt; a szükséges rendszerköltöztetést külön egyeztetjük.",
          ],
      scope: en
        ? "From 5,000 HUF labour for a straightforward RAM or SSD installation. Parts, cloning, data migration and difficult disassembly are quoted separately. Not every laptop has replaceable memory or storage."
        : "5 000 Ft-tól munkadíj egyszerű RAM- vagy SSD-beépítésre. Alkatrész, klónozás, adatköltöztetés és nehezebb szétszerelés külön ajánlat szerint. Nem minden laptop memóriája vagy háttértára cserélhető.",
      prepare: en
        ? "Exact computer or motherboard model, current configuration and what you want to improve."
        : "Pontos gép- vagy alaplaptípus, jelenlegi konfiguráció és az, min szeretnél javítani.",
      related: "/usecases/lassu-szamitogep",
      relatedLabel: en
        ? "How I investigate a slow computer"
        : "Így vizsgálom a lassú gépet",
    },
    {
      slug: "elektronikai-eszkozok",
      title: en
        ? "Devices and home electronics"
        : "Eszközök és otthoni elektronika",
      price: prices.pcPlans[0].price,
      summary: en
        ? "Printer, router, monitor or another electronic device: describe the problem and we will work out the next step."
        : "Nyomtató, router, monitor vagy más elektronikai eszköz: írd le a hibát, és megnézzük, merre érdemes elindulni.",
      intro: en
        ? "You can contact me with a device question even if it does not fit a listed package. The model and symptom determine whether I can help with setup, connections, fault isolation or a targeted replacement."
        : "Akkor is megkereshetsz egy eszköz problémájával, ha nem találod külön csomagként. A típus és a tünet alapján egyeztetjük, hogy beállításban, csatlakoztatásban, hibafeltárásban vagy célzott cserében tudok-e segíteni.",
      examples: en
        ? [
            "A printer that is offline or not detected",
            "Router, Wi-Fi and home-network settings",
            "Monitor, docking station and peripheral connections",
            "Initial fault assessment of another electronic device",
          ]
        : [
            "Offline vagy fel nem ismert nyomtató",
            "Router, Wi-Fi és otthoni hálózat beállítása",
            "Monitor, dokkoló és perifériák csatlakozási gondjai",
            "Más elektronikai eszköz első hibafelmérése",
          ],
      steps: en
        ? [
            "Send the model and a description or photo of the symptom.",
            "We agree whether an assessment is appropriate and its cost.",
            "Check connections, settings and reproducible faults.",
            "You receive a proposed next step; component-level repairs require a separate assessment of feasibility.",
          ]
        : [
            "Elküldöd a típust és a jelenség leírását vagy képét.",
            "Egyeztetjük, vállalható-e a vizsgálat, és mennyi a díja.",
            "Ellenőrizzük a csatlakozásokat, beállításokat és reprodukálható hibákat.",
            "Javaslatot kapsz a folytatásra; az alkatrészszintű javítás vállalhatóságát külön kell tisztázni.",
          ],
      scope: en
        ? "A simple, agreed initial check starts at 5,000 HUF for up to 30 minutes. This is not a blanket repair fee for every device. Parts, specialist repairs and travel are separate."
        : "Egyszerű, előre egyeztetett alapellenőrzés 5 000 Ft-tól, legfeljebb 30 percben. Ez nem minden készülékre érvényes javítási díj. Az alkatrész, speciális javítás és kiszállás külön tétel.",
      prepare: en
        ? "Manufacturer, exact model, symptom, error code and connected devices."
        : "Gyártó, pontos típus, tünet, hibakód és a csatlakoztatott eszközök.",
      related: "/services/diagnosztika-tavsegitseg",
      relatedLabel: en
        ? "Diagnostics and remote help"
        : "Diagnosztika és távsegítség",
    },
    {
      slug: "egyedi-fejlesztes",
      title: en
        ? "Your own idea or custom software"
        : "Saját ötlet és egyedi fejlesztés",
      price: prices.plans[15].price,
      summary: en
        ? "A personal website, hobby project, small utility or business system. You do not need a company to get in touch."
        : "Személyes oldal, hobbiprojekt, kis segédprogram vagy üzleti rendszer. Nem kell hozzá vállalkozás, hogy megkeress.",
      intro: en
        ? "A complete specification is not required. Start with what you want to achieve or what you do repeatedly by hand. I will help clarify what is feasible and how to begin with a small first version."
        : "Nem szükséges kész specifikáció. Elég, ha leírod, mit szeretnél elérni, vagy mit végzel újra és újra kézzel. Segítek tisztázni, mi valósítható meg, és hogyan lehet egy kisebb első verzióval kezdeni.",
      examples: en
        ? [
            "Personal portfolio, club or community website",
            "A hobby collection tracker or small custom tool",
            "Spreadsheet processing and repetitive-task automation",
            "A webshop, application or internal business workflow",
          ]
        : [
            "Saját portfólió, egyesületi vagy közösségi weboldal",
            "Hobbigyűjtemény nyilvántartása vagy kis segédprogram",
            "Táblázatfeldolgozás és ismétlődő feladat automatizálása",
            "Webshop, alkalmazás vagy céges belső folyamat",
          ],
      steps: en
        ? [
            "Describe your goal, users and approximate budget.",
            "Clarify the smallest useful version together.",
            "Agree the scope, price and milestones in writing.",
            "Review a working preview, then test and hand over the agreed result.",
          ]
        : [
            "Leírod a célt, a használókat és a hozzávetőleges keretet.",
            "Közösen kijelöljük a legkisebb, már hasznos első verziót.",
            "Írásban rögzítjük a tartalmat, díjat és mérföldköveket.",
            "Működő előnézetet kapsz, majd teszteljük és átadjuk az egyeztetett megoldást.",
          ],
      scope: en
        ? "An initial conversation is free. Custom development is 12,000 HUF/hour with a minimum of 2 hours, or a fixed project quote. A personal request does not have to become a large package."
        : "Az első egyeztetés díjmentes. Egyedi fejlesztés 12 000 Ft/óra, minimum 2 órás alkalommal, vagy rögzített projektajánlat szerint. Egy magáncélú kérésből sem kell nagy csomagot csinálni.",
      prepare: en
        ? "What you want to achieve, an example if you have one, timeframe and budget. An everyday-language description is enough."
        : "Mit szeretnél elérni, van-e hozzá példa, mikorra kellene, és milyen keretben gondolkodsz. Hétköznapi leírás is elég.",
      related: "/portfolio",
      relatedLabel: en ? "Browse my projects" : "Nézd meg a munkáimat",
    },
    ...getDevelopmentServices(lang),
  ];
}
