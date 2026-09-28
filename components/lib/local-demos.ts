import type { Lang } from "./i18n";

export type LocalDemo = {
  id:
    | "pet-grooming"
    | "hair-studio"
    | "beauty-studio"
    | "auto-workshop"
    | "trade-estimator";
  name: string;
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
  ];
}
