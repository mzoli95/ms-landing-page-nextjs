import type { Lang } from "./i18n";

export function getCases(lang: Lang) {
  const en = lang === "en";
  return [
    {
      slug: "kereslet-es-keszlet",
      category: en ? "Commerce" : "Webshop és készlet",
      project: "ToyZumi",
      href: "/portfolio/toyzumi#uzleti-ertek",
      title: en
        ? "People search. Your stock misses the mark."
        : "Keresik. Mégsem azt tartod készleten.",
      summary: en
        ? "How search signals can help inform the next supplier order."
        : "Hogyan segíthetnek a keresési jelzések a következő beszállítói rendelés előtt?",
      problem: en
        ? "Sales reports exclude products that are missing from your catalogue. Ordering more of last month's bestsellers can overlook emerging demand."
        : "Az eladási riportból nem derül ki, mit kerestek hiába. Ha csak a korábbi sikerek alapján rendelsz, új érdeklődési irányok maradhatnak rejtve, miközben más termékek a polcon állnak.",
      mistakes: en
        ? [
            "Treating page views as confirmed purchase intent",
            "Ignoring zero-result searches",
            "Ordering without subtracting available stock",
          ]
        : [
            "A megtekintést biztos vásárlási szándéknak tekinteni",
            "Figyelmen kívül hagyni a nulla találatos kereséseket",
            "A meglévő készlet levonása nélkül újrarendelni",
          ],
      steps: en
        ? [
            "Collect search terms and distinguish searches with no results.",
            "Compare clicks, wishlists, carts and preorders with actual purchases.",
            "Review the resulting priorities alongside stock and supplier constraints.",
            "Start with a limited quantity and compare the result with the original signal.",
          ]
        : [
            "Gyűjtsd össze a keresési kifejezéseket, külön a nulla találatos kereséseket.",
            "Nézd együtt a kattintásokat, kívánságlistákat, kosarakat, előrendeléseket és vásárlásokat.",
            "Vesd össze a javasolt prioritásokat a készlettel és a beszállítói feltételekkel.",
            "Indulj kisebb mennyiséggel, majd ellenőrizd, lett-e tényleges kereslet a jelzésből.",
          ],
      evidence: en
        ? "ToyZumi's current code combines search and interaction metrics with stock, and produces ranked procurement suggestions. This is decision support, not a sales forecast guarantee."
        : "A ToyZumi jelenlegi kódja a keresési és interakciós adatokat készlettel veti össze, és rangsorolt beszerzési javaslatot ad. Ez döntéstámogatás, nem garantált értékesítési előrejelzés.",
      check: en
        ? "Review sell-through and remaining stock after the procurement cycle. Use comparable periods and account for campaigns."
        : "A beszerzési ciklus után nézd meg az értékesített és megmaradt mennyiséget. Összehasonlítható időszakokat használj, és számolj a kampányok hatásával is.",
    },
    {
      slug: "ettermi-rendeles",
      category: en ? "Hospitality" : "Éttermi működés",
      project: "Menutivo",
      href: "/portfolio/menutivo",
      title: en
        ? "One table. Several phones. Who pays for what?"
        : "Egy asztal. Több telefon. Ki mit fizet?",
      summary: en
        ? "A connected ordering process from QR scan to staff-confirmed payment."
        : "Összefüggő rendelési folyamat a QR-kódtól a személyzet által igazolt fizetésig.",
      problem: en
        ? "Guests order in several rounds and split the bill. Without a shared table session, staff have to reconcile separate orders and payment requests manually."
        : "A vendégek több körben rendelnek, majd külön fizetnének. Közös asztali munkamenet nélkül a személyzetnek kell összeillesztenie az eltérő rendeléseket és fizetési kéréseket.",
      mistakes: en
        ? [
            "Equating a shared QR code with a complete ordering workflow",
            "Allowing the same item to be selected for two simultaneous payments",
            "Keeping a previous party's session open",
          ]
        : [
            "A QR-kódot kész rendeléskezelési folyamatnak tekinteni",
            "Ugyanazt a tételt két párhuzamos fizetéshez is hozzárendelni",
            "Nyitva hagyni az előző társaság munkamenetét",
          ],
      steps: en
        ? [
            "Connect devices to a shared table session.",
            "Preserve who ordered each item and in which round.",
            "Reserve selected payment items so they cannot be claimed twice.",
            "Have staff confirm payment and close only the fully settled table.",
          ]
        : [
            "Kapcsold a telefonokat közös asztali munkamenethez.",
            "Őrizd meg, ki és melyik körben rendelte a tételeket.",
            "Foglald a fizetésre kiválasztott tételeket, hogy ne lehessen kétszer hozzárendelni őket.",
            "A személyzet igazolja a rendezést, és csak a teljesen rendezett asztalt zárja le.",
          ],
      evidence: en
        ? "Menutivo documents shared sessions, temporary item reservations and staff-confirmed on-site payment. Online payment and invoicing are not complete integrations yet."
        : "A Menutivo dokumentált működésében közös munkamenet, ideiglenes tételfoglalás és személyzet által igazolt helyszíni fizetés szerepel. Az online fizetés és számlázás integrációja még nem teljes.",
      check: en
        ? "Test two devices choosing the same item, reservation expiry and a new party joining after table closure."
        : "Próbáld ki két telefonnal ugyanannak a tételnek a kiválasztását, a foglalás lejáratát és a lezárás után érkező új társaság csatlakozását.",
    },
    {
      slug: "lassu-szamitogep",
      category: en ? "Diagnostics" : "Számítógépes hibakeresés",
      project: "Molnár Diagnostic",
      href: "/portfolio/molnar-diagnostic",
      title: en
        ? "A slow computer does not always need new parts."
        : "Lassú a gép. De biztos, hogy alkatrész kell?",
      summary: en
        ? "Measure the symptom before choosing a fix, then compare the result."
        : "Előbb mérjük meg a panaszt, utána válasszunk megoldást, végül ellenőrizzük az eredményt.",
      problem: en
        ? "Slowness can come from startup programs, low free space, memory pressure or a particular workload. Replacing parts without checking may miss the cause."
        : "A lassulás mögött induló programok, kevés szabad hely, memóriahiány vagy egy adott terhelés is állhat. A mérés nélküli alkatrészcsere könnyen elkerüli a valódi okot.",
      mistakes: en
        ? [
            "Inferring a hardware failure from a single short measurement",
            "Treating missing sensor data as a healthy result",
            "Comparing before and after under different workloads",
          ]
        : [
            "Egyetlen rövid mérésből hardverhibát megállapítani",
            "A hiányzó szenzoradatot hibamentes eredménynek tekinteni",
            "Más terhelés mellett összevetni az előtte–utána állapotot",
          ],
      steps: en
        ? [
            "Record when the problem occurs and which application is involved.",
            "Inspect the inventory, available memory, storage, startup tasks and relevant logs.",
            "Choose a targeted intervention based on the evidence; protect important data before changing the system.",
            "Repeat the same measurement on the same machine under comparable conditions.",
          ]
        : [
            "Rögzítsd, mikor jelentkezik a hiba, és melyik programnál tapasztalható.",
            "Nézd meg a leltárt, szabad memóriát, tárhelyet, induló programokat és releváns naplókat.",
            "A jelek alapján válassz célzott beavatkozást; módosítás előtt gondoskodj a fontos adatok mentéséről.",
            "Ugyanazon a gépen, összehasonlítható körülmények között ismételd meg a mérést.",
          ],
      evidence: en
        ? "Molnár Diagnostic supports machine inventories, targeted checks, hardware sheets and before-and-after reports. It distinguishes missing readings from measured results."
        : "A Molnár Diagnostic gépleltárt, célzott vizsgálatokat, hardverlapot és előtte–utána riportot támogat. A hiányzó mérési adatokat megkülönbözteti a tényleges eredményektől.",
      check: en
        ? "Compare the symptom and relevant measurements. A successful single test is not a guarantee that every component is fault-free."
        : "A panasz változását és a hozzá tartozó mérési adatokat hasonlítsd össze. Egy sikeres részteszt nem jelenti, hogy minden alkatrész hibátlan.",
    },
  ];
}
