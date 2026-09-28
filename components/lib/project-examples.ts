import type { Lang } from "./i18n";
const examples: Record<string, { hu: [string, string]; en: [string, string] }> =
  {
    toyzumi: {
      hu: [
        "Keresik a terméket, de nincs készleten.",
        "A keresleti jelzések a következő beszerzést is segítik.",
      ],
      en: [
        "People want an item that is out of stock.",
        "Demand signals inform the next purchase order.",
      ],
    },
    menutivo: {
      hu: [
        "Egy asztal, több telefon. Ki mit rendelt?",
        "Közös asztali rendelés, külön vendég-, pincér- és konyhai nézettel.",
      ],
      en: [
        "One table, several phones. Who ordered what?",
        "A shared table order with guest, waiter and kitchen views.",
      ],
    },
    "molnar-diagnostic": {
      hu: [
        "Lassú a gép. De mit érdemes javítani?",
        "Célzott mérések és előtte–utána összehasonlítás segítik a döntést.",
      ],
      en: [
        "The computer is slow. What needs fixing?",
        "Targeted checks and before-and-after comparisons support the decision.",
      ],
    },
    "pet-grooming": {
      hu: [
        "A gazdi telefonál, az előzmény egy füzetben marad.",
        "Foglalás, gazdi és több kedvenc adatlapja egy felületen.",
      ],
      en: [
        "The owner calls; the pet’s history is in a notebook.",
        "Bookings, owners and several pet profiles share one workspace.",
      ],
    },
    "hair-studio": {
      hu: [
        "Üzenetek között vész el a következő időpont.",
        "Közös naptár, vendégelőzmények és kérhető emlékeztetők.",
      ],
      en: [
        "The next appointment gets lost among messages.",
        "A shared calendar, guest history and optional reminders.",
      ],
    },
    "beauty-studio": {
      hu: [
        "Köröm és pilla: két szolgáltatás, sok egyeztetés.",
        "Kezeléshez igazodó foglalás és visszatérési emlékeztetők.",
      ],
      en: [
        "Nails and lashes mean two services and lots of messages.",
        "Treatment-based booking and return-visit reminders.",
      ],
    },
    "auto-workshop": {
      hu: [
        "Az ügyfél csak akkor jelentkezik, amikor már baj van.",
        "Járműelőzmények és esedékes karbantartási emlékeztetők.",
      ],
      en: [
        "Customers return only after something goes wrong.",
        "Vehicle history and reminders for upcoming maintenance.",
      ],
    },
    "trade-estimator": {
      hu: [
        "A felmérés kész, az árajánlat még estére marad.",
        "Saját anyagárakból és munkadíjból helyben összeállítható ajánlat.",
      ],
      en: [
        "The survey is done; the quote still takes the evening.",
        "Build an estimate on site from your material prices and labour rates.",
      ],
    },
    "document-management": {
      hu: [
        "Melyik a legfrissebb irat, és ki hagyta jóvá?",
        "Telefonos digitalizálás, verziók és követhető jóváhagyás egy helyen.",
      ],
      en: [
        "Which document is current, and who approved it?",
        "Phone capture, document versions and traceable approvals in one place.",
      ],
    },
    "roadside-rescue": {
      hu: [
        "Lerobbant az autó. Kit hívj, és mennyibe kerül?",
        "Helyszínmegosztás, összevethető ajánlatok és közvetlen chat a mentővel.",
      ],
      en: [
        "The car broke down. Who can help, and what will it cost?",
        "Share the location, compare quotes and chat directly with a rescue provider.",
      ],
    },
  };
export function getProjectExample(id: string, lang: Lang) {
  const [problem, solution] = examples[id][lang];
  return { problem, solution };
}
