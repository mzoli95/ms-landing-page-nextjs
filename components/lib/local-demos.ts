import type { Lang } from "./i18n";

export type LocalDemo = {
  id:
    | "pet-grooming"
    | "hair-studio"
    | "beauty-studio"
    | "auto-workshop"
    | "trade-estimator"
    | "document-management"
    | "roadside-rescue"
    | "warehouse-desktop";
  name: string;
  coverImage?: string;
  previewImage: string;
  imagePrefix?: string;
  sector: string;
  headline: string;
  description: string;
  features: string[];
  reminder: string;
  accent: string;
  problem?: string;
  solution?: string;
};

export function getLocalDemos(lang: Lang): LocalDemo[] {
  const en = lang === "en";
  return [
    {
      id: "pet-grooming",
      previewImage: "/images/demos/pet-grooming-booking.jpg",
      name: "Mancs Műhely",
      sector: en ? "Pet grooming" : "Kutyakozmetika",
      headline: en
        ? "Every pet has a story."
        : "Minden kedvencnek saját története van.",
      description: en
        ? "A welcoming website with appointments and linked owner and pet profiles. Previous visits and grooming notes stay together, even when one owner brings several pets."
        : "Barátságos weboldal időpontfoglalással, összekapcsolt gazdi- és állatadatlapokkal. A korábbi látogatások és ápolási megjegyzések egy helyen maradnak, akkor is, ha egy gazdi több kedvenccel érkezik.",
      features: en
        ? [
            "Bookings, rescheduling and cancellations",
            "Owner profiles with several pets",
            "Waitlist and internal cancellation alerts",
          ]
        : [
            "Foglalás, időpontmódosítás és lemondás",
            "Gazdiadatlap több hozzárendelt állattal",
            "Várólista és belső lemondási értesítések",
          ],
      reminder: en
        ? "A cancellation appears in the management view, helping the salon offer the vacant slot to someone on the waitlist."
        : "Lemondáskor jelzés jelenik meg a kezelőfelületen, így a felszabadult helyet könnyebb felajánlani a várólistán lévőknek.",
      accent: "#557765",
    },
    {
      id: "hair-studio",
      previewImage: "/images/demos/hair-studio-admin.jpg",
      name: "FORMA Hair Studio",
      sector: en ? "Hair studio" : "Fodrászat",
      headline: en
        ? "More time for the person in your chair."
        : "Több figyelem annak, aki a székedben ül.",
      description: en
        ? "A warm, editorial look with services, prices and a short booking flow. Guest profiles bring appointments and preferences together, reducing the back-and-forth around each visit."
        : "Meleg tónusú, letisztult megjelenés szolgáltatásokkal, árakkal és rövid foglalási folyamattal. A vendégprofilban az időpontok és egyéni igények is visszakereshetők, kevesebb külön egyeztetéssel.",
      features: en
        ? [
            "Service-based appointment durations",
            "Guest profiles and visit history",
            "Appointment and return-visit reminders",
          ]
        : [
            "Szolgáltatáshoz igazodó foglalási idő",
            "Vendégprofil és látogatási előzmények",
            "Időpont- és visszatérési emlékeztetők",
          ],
      reminder: en
        ? "An optional email reminds the guest about an appointment or their next hair refresh, with suggested times to book."
        : "A kérhető e-mail az időpontra vagy a következő hajfrissítésre emlékeztet, foglalható időpontok javaslatával.",
      accent: "#8b5139",
    },
    {
      id: "beauty-studio",
      previewImage: "/images/demos/beauty-studio-booking.jpg",
      name: "LUNE Nails & Lashes",
      sector: en ? "Nails & lashes" : "Köröm és pilla",
      headline: en
        ? "Two specialities. One guest experience."
        : "Két szakterület. Egy átlátható vendégélmény.",
      description: en
        ? "Nail and lash treatments share one elegant site and booking calendar. Guests filter the services, view the gallery and choose a treatment in a few steps."
        : "Körmös- és pilláskezelések egy elegáns oldalon, közös foglalási naptárral. A vendég szűrhet a szolgáltatások között, megnézheti a galériát, majd néhány lépésben kezelést választhat.",
      features: en
        ? [
            "Nail and lash service categories",
            "Guest records and treatment history",
            "Refill reminders and custom deadlines",
          ]
        : [
            "Köröm- és pillaszolgáltatások szűrése",
            "Vendégadatlap és kezelési előzmények",
            "Töltési emlékeztetők és egyedi határidők",
          ],
      reminder: en
        ? "Treatment-specific return intervals help remind consenting guests when a refill is due. A future booking prevents an unnecessary return reminder."
        : "A kezelésenként beállítható visszatérési idő segít emlékeztetni az ezt kérő vendéget a töltésre. Meglévő következő foglalás esetén nem kap felesleges visszahívót.",
      accent: "#956a82",
    },
    {
      id: "auto-workshop",
      previewImage: "/images/demos/auto-workshop-booking.jpg",
      name: "FORDULAT Autóműhely",
      sector: en ? "Auto workshop" : "Autóműhely",
      headline: en
        ? "The next service stays on the radar."
        : "A következő szerviz sem merül feledésbe.",
      description: en
        ? "A clear workshop website with booking and customer-linked vehicle records. Completed work, mileage and maintenance dates help plan the next visit."
        : "Átlátható műhelyoldal időpontfoglalással és ügyfélhez rendelt járműadatlapokkal. Az elvégzett munkák, kilométeróra-adatok és karbantartási dátumok segítenek megtervezni a következő látogatást.",
      features: en
        ? [
            "Customer and vehicle records",
            "Oil-change and annual-check reminders",
            "Email suggestions for available appointments",
          ]
        : [
            "Ügyfél- és járműnyilvántartás",
            "Olajcsere- és éves átnézési emlékeztetők",
            "Szabad időpontok javaslata e-mailben",
          ],
      reminder: en
        ? "Oil-change reminders use the vehicle's configured interval and entered mileage. An annual-check reminder is prepared when there has been no completed visit that year and no upcoming booking."
        : "Az olajcsere-emlékeztető a járműhöz beállított időközből és a rögzített kilométeradatból számol. Éves átnézést akkor javasol, ha abban az évben még nem volt lezárt látogatás és nincs következő foglalás.",
      accent: "#d88d36",
    },
    {
      id: "trade-estimator",
      previewImage: "/images/demos/trade-estimator-calculator.jpg",
      name: "SZIKRA",
      sector: en ? "Trade estimates & inventory" : "Szakipari árkalkulátor",
      headline: en
        ? "A site survey becomes a clear quote."
        : "A felmérésből átlátható ajánlat.",
      description: en
        ? "An electrician-themed web app with a presentation website, editable material prices, stock and labour costs. Quantities, hours, travel and contingency add up to an itemised estimate that can be saved and printed."
        : "Villanyszerelőre hangolt webalkalmazás bemutatkozó oldallal, saját anyagárakkal, készlettel és munkadíjjal. A mennyiségek, munkaórák, kiszállás és tartalék menthető, nyomtatható, tételes ajánlattá állnak össze.",
      problem: en
        ? "Prices sit in different lists, labour is estimated from memory, and a missing item may only become apparent once work has started. Preparing the quote often slips into the evening."
        : "Az árak külön listákban vannak, a munkadíj fejben készül, a hiányzó anyag pedig néha csak munka közben derül ki. Az ajánlat összeállítása így estére marad.",
      solution: en
        ? "Choose from your own materials, enter quantities and hours, then review the cost breakdown and stock shortage together. Saved quotes keep their original prices even after the catalogue changes."
        : "Válassz a saját anyagaidból, add meg a mennyiségeket és a munkaórákat, majd egy helyen lásd az árat és a készlethiányt. A mentett ajánlat akkor is megőrzi az eredeti árait, ha később módosítod az árlistát.",
      features: en
        ? [
            "Editable material prices and stock movements",
            "Labour, travel, markup and contingency in separate lines",
            "Saved quotes, copies and printing / PDF",
            "Stock issued once, after quote acceptance",
          ]
        : [
            "Szerkeszthető anyagárak és naplózott készletmozgások",
            "Munkadíj, kiszállás, felár és tartalék külön soron",
            "Mentett ajánlatok, másolat és nyomtatás / PDF",
            "Elfogadás után egyszeri, külön anyagkiadás",
          ],
      reminder: en
        ? "The sample needs 12 sockets but only 8 are in stock. The missing 4 are flagged during calculation. Saving does not reduce or reserve stock; issuing requires sufficient stock."
        : "A mintamunkához 12 konnektor kell, de csak 8 van készleten. A hiányzó 4 darabot már a kalkulációnál jelzi. A mentés nem csökkenti és nem foglalja a készletet; kiadáshoz elegendő anyagnak kell rendelkezésre állnia.",
      accent: "#315de4",
    },
    {
      id: "document-management",
      previewImage: "/images/demos/molnar-documents-registry.jpg",
      name: "Molnár Documents",
      coverImage: "/images/demos/molnar-documents-landing.jpg",
      imagePrefix: "molnar-documents",
      sector: en ? "Document management" : "Dokumentumkezelés",
      headline: en
        ? "Every document has a clear next step."
        : "Minden iratnak követhető útja van.",
      description: en
        ? "A document register with manual entry, phone photos and PDF attachments. Local text recognition helps prepare the data, while separate reviewers and managers handle approval."
        : "Dokumentumnyilvántartás kézi rögzítéssel, telefonos fotóval és PDF-mellékletekkel. A helyi szövegfelismerés segít az adatok előkészítésében, az ellenőrzés és jóváhagyás külön szerepkörökhöz tartozik.",
      problem: en
        ? "Documents arrive on paper, by email or as phone photos. A separate spreadsheet does not show who is reviewing the current version or why an item was returned."
        : "Az iratok papíron, e-mailben vagy telefonos fotóként érkeznek. A külön táblázatból nem látszik, ki ellenőrzi az aktuális változatot, és miért küldték vissza.",
      solution: en
        ? "Capture a document, check the recognised fields and send it through two approval steps. The original file, searchable record and decision history stay together."
        : "Rögzítsd az iratot, ellenőrizd a felismert mezőket, majd küldd végig a kétlépcsős jóváhagyáson. Az eredeti fájl, a kereshető adatlap és a döntések története együtt marad.",
      features: en
        ? [
            "Phone upload via a short-lived QR link; photos and PDFs",
            "Local Hungarian/English OCR with human verification",
            "Review, approval and returns with a reason",
            "Document versions, change history and CSV/JSON exports",
          ]
        : [
            "Telefonos feltöltés lejáró QR-linkkel; fotók és PDF-ek",
            "Helyi magyar/angol OCR, emberi adatellenőrzéssel",
            "Ellenőrzés, jóváhagyás és indokolt visszaküldés",
            "Dokumentumverziók, változástörténet és CSV/JSON-export",
          ],
      reminder: en
        ? "A returned document shows what needs correcting. Overdue items can be filtered in the register, and submitted records stay locked until returned for changes."
        : "Visszaküldéskor látszik, mit kell javítani. A lejárt iratok külön szűrhetők, a beküldött adatlap pedig csak visszaküldés után módosítható.",
      accent: "#176b63",
    },
    {
      id: "roadside-rescue",
      previewImage: "/images/demos/molnar-roadside-offers.jpg",
      name: "Molnár Roadside",
      coverImage: "/images/demos/molnar-roadside-landing.jpg",
      imagePrefix: "molnar-roadside",
      sector: en ? "Roadside assistance" : "Autómentés és egyeztetés",
      headline: en
        ? "The right help, with the details already shared."
        : "A megfelelő segítség, előre tisztázott részletekkel.",
      description: en
        ? "A responsive driver and rescue-provider app. Vehicle details, shared location, comparable quotes and a private conversation follow the same request from breakdown to transport."
        : "Reszponzív autós és autómentős alkalmazás. Járműadatok, megosztott helyszín, összehasonlítható ajánlatok és privát beszélgetés kísérik végig a kérést a lerobbanástól a szállításig.",
      problem: en
        ? "The car has broken down. You call several providers, repeat the location and vehicle details, and still do not know who can help or what it will cost."
        : "Lerobbant az autó. Több mentőt hívsz, újra elmondod a helyszínt és a jármű adatait, de még nem látod, ki tud segíteni és mennyiért.",
      solution: en
        ? "Share the details once. Suitable nearby demo providers receive the request, send quotes and answer in chat. Choose a destination and a provider, then follow the rescue status."
        : "Egyszer adod meg az adatokat. A közeli, megfelelő demó mentők megkapják a kérést, ajánlatot adnak és chaten válaszolnak. Célt és szolgáltatót választasz, majd követheted a mentés állapotát.",
      features: en
        ? [
            "Vehicle profiles and location on Google Maps",
            "Home, workshop or parking destination",
            "Itemised estimates and provider quotes",
            "Private chat and a separate provider workspace",
          ]
        : [
            "Járműadatlapok és helyszín a Google-térképen",
            "Hazaszállítás, műhely vagy parkoló választása",
            "Tételes becslések és szolgáltatói ajánlatok",
            "Privát chat és külön autómentős munkafelület",
          ],
      reminder: en
        ? "A request reaches eligible providers, not every account. The demo opens the notified provider by name, so the quote and chat stay attached to the right rescue."
        : "A riasztást az alkalmas mentők kapják, nem minden fiók. A demó név szerint nyitja meg az értesített szolgáltatót, így az ajánlat és a chat is a megfelelő mentéshez kapcsolódik.",
      accent: "#367665",
    },
    {
      id: "warehouse-desktop",
      previewImage: "/images/demos/molnar-inventory-stock.jpg",
      name: "Molnár Inventory",
      coverImage: "/images/demos/molnar-inventory-landing.jpg",
      imagePrefix: "molnar-inventory",
      sector: en ? "Windows inventory application" : "Windows raktárkezelő",
      headline: en
        ? "Know what is on the shelf."
        : "Tudd, mi van ténylegesen a polcon.",
      description: en
        ? "A native Windows application for stock records, barcode scanning and stocktakes. Physical, reserved and available quantities are shown separately, with an audit trail for receipts and issues."
        : "Natív Windows-alkalmazás készletnyilvántartáshoz, vonalkódos beolvasáshoz és leltárhoz. A fizikai, foglalt és szabad mennyiség külön látszik, a bevételezés és kiadás naplózott.",
      problem: en
        ? "The spreadsheet says there are twelve items, but the shelf holds eight. Nobody can trace the difference, and stocktaking means starting another list."
        : "A táblázat szerint tizenkét darab van, a polcon csak nyolc. Az eltérés oka nem követhető, a leltár pedig megint egy külön listában készül.",
      solution: en
        ? "Identify items by barcode, record movements with a reason and save counts as you go. Closing a complete stocktake posts the explained differences to stock."
        : "Azonosítsd a terméket vonalkóddal, rögzítsd a készletmozgás indokát, és mentsd a számlálást menet közben. A teljes leltár lezárása az indokolt eltérésekkel korrigálja a készletet.",
      features: en
        ? [
            "Searchable products, storage locations and minimum stock",
            "USB/Bluetooth HID barcode readers and manual code entry",
            "Saved stocktakes with differences and counted quantities",
            "Movement statistics, stock value and reorder lists",
            "SQLite / SQL Server source previews, local import and CSV export",
          ]
        : [
            "Kereshető termékek, tárhelyek és minimumkészlet",
            "USB/Bluetooth HID vonalkódolvasó és kézi kódbeírás",
            "Menthető leltár, számolt mennyiségek és eltérésindoklás",
            "Mozgásstatisztika, készletérték és utánrendelési lista",
            "SQLite / SQL Server előnézet, helyi import és CSV-export",
          ],
      reminder: en
        ? "Eight sockets are available against a minimum of twelve. The reorder list flags the missing four. Scanning alone never changes stock."
        : "Nyolc dugalj érhető el a tizenkét darabos minimumhoz képest. Az utánrendelési lista jelzi a hiányzó négyet. A sima beolvasás önmagában nem módosít készletet.",
      accent: "#cb693b",
    },
  ];
}
