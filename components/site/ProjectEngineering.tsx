import type { Lang } from "@/components/lib/i18n";

export const featuredProjectIds = ["toyzumi", "menutivo", "pet-grooming"];

export function ProjectEngineering({
  id,
  lang,
  compact = false,
  presentation = "card",
}: {
  id: string;
  lang: Lang;
  compact?: boolean;
  presentation?: "card" | "inline";
}) {
  const en = lang === "en";
  const entries: Record<
    string,
    { scope: string; stack: string[]; challenge: string }
  > = {
    toyzumi: {
      scope: en
        ? "Design and implementation of the storefront, admin interface, backend API and integrations in an independent project."
        : "Saját projektként a vásárlói felület, az adminisztráció, a backend API és az integrációk tervezése és megvalósítása.",
      stack: [
        "Angular",
        "TypeScript",
        "ASP.NET Core",
        "SQL Server",
        "Keycloak",
        "Docker",
      ],
      challenge: en
        ? "Keeping payment and order states consistent when a notification arrives more than once. Idempotent operations, an outbox and reconciliation jobs handle retries and delayed events."
        : "A fizetés és a rendelés állapotának összehangolása ismétlődő értesítéseknél is. Idempotens műveletek, outbox és egyeztető háttérfolyamatok kezelik az újrapróbálkozásokat és a késve érkező eseményeket.",
    },
    "warehouse-desktop": {
      scope: en
        ? "Windows interface, inventory rules, local database, barcode workflows and data import."
        : "Windows-felület, készletkezelési szabályok, helyi adatbázis, vonalkódos folyamatok és adatimport megvalósítása.",
      stack: ["C#", ".NET 10", "WPF", "MVVM", "SQLite"],
      challenge: en
        ? "A stocktake must not overwrite stock movements made while counting. The app checks the starting snapshot before closing, then saves all adjustments and their audit entries in one transaction."
        : "A leltár ne írja felül a számlálás közben történt készletmozgásokat. Lezárás előtt a rendszer ellenőrzi a kiinduló állapotot, majd az eltéréseket és a naplót egy tranzakcióban menti.",
    },
    menutivo: {
      scope: en
        ? "Guest, waiter and kitchen interfaces, shared table sessions and the backend for ordering and staff workflows."
        : "Vendég-, pincér- és konyhai felületek, közös asztali munkamenetek, valamint a rendelési és személyzeti folyamatok backendjének megvalósítása.",
      stack: ["React", "TypeScript", ".NET 10", "SQL Server", "Keycloak"],
      challenge: en
        ? "A retried request must not create a second order, and prices must come from the server. Idempotency keys prevent duplicates; the backend calculates totals from menu prices. Tests cover retries and changed request data."
        : "Egy újraküldött kérés ne hozzon létre második rendelést, és az árakat a szerver határozza meg. Idempotenciakulcs védi a rendelésfeladást, a backend az étlap áraiból számol. Tesztek ellenőrzik az ismétlést és a módosított kérésadatokat.",
    },
    "pet-grooming": {
      scope: en
        ? "Booking interface, linked owner and pet profiles, appointment management and a local database."
        : "Foglalási felület, összekapcsolt gazdi- és állatadatlapok, időpontkezelés és helyi adatbázis megvalósítása.",
      stack: ["React", "TypeScript", "Node.js", "Express", "SQLite"],
      challenge: en
        ? "Bookings with different durations must not overlap. Availability is checked again inside a database transaction; a failed reschedule preserves the original appointment. Tests cover concurrent requests and rollback."
        : "Az eltérő hosszúságú foglalások ne ütközzenek. A rendszer adatbázis-tranzakción belül újra ellenőrzi a szabad időt; sikertelen módosításnál megmarad az eredeti időpont. Tesztek fedik a párhuzamos kéréseket és a visszaállítást.",
    },
    "document-management": {
      scope: en
        ? "Document registry, phone uploads, local text recognition and role-based approval workflow."
        : "Iratnyilvántartás, telefonos feltöltés, helyi szövegfelismerés és szerepkörökhöz kötött jóváhagyási folyamat kialakítása.",
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "SQLite",
        "Tesseract.js",
      ],
      challenge: en
        ? "Restoring an earlier version must preserve its files and history. Full snapshots retain document data and attachments, while approval steps are checked against the user's role."
        : "Egy korábbi iratverzió a hozzá tartozó fájlokkal és előzményekkel együtt legyen visszaállítható. Teljes pillanatképek őrzik az adatokat és mellékleteket, a jóváhagyási lépéseket szerepkör-ellenőrzés védi.",
    },
  };
  const entry = entries[id];
  if (!entry) return null;
  return (
    <dl
      className={
        compact
          ? "grid gap-5 pt-5"
          : presentation === "inline"
            ? "grid gap-7 py-7 sm:py-8 lg:grid-cols-[1fr_1fr_1.3fr] lg:gap-10"
            : "grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-[1fr_1fr_1.2fr]"
      }
    >
      <div>
        <dt className="project-step-label">
          {en ? "My contribution" : "Saját fejlesztői munka"}
        </dt>
        <dd className="mt-3 text-sm leading-7 text-slate-600">{entry.scope}</dd>
      </div>
      <div>
        <dt className="project-step-label">
          {en ? "Technologies" : "Technológiák"}
        </dt>
        <dd className="mt-3 flex flex-wrap gap-2">
          {entry.stack.map((tech) => (
            <span
              key={tech}
              className={
                presentation === "inline"
                  ? "rounded-md border border-slate-200 px-2.5 py-1.5 text-[11px] font-medium text-slate-700"
                  : "rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700"
              }
            >
              {tech}
            </span>
          ))}
        </dd>
      </div>
      <div>
        <dt className="project-step-label">
          {en ? "A technical challenge" : "Egy megoldott technikai kihívás"}
        </dt>
        <dd className="mt-3 text-sm leading-7 text-slate-600">
          {entry.challenge}
        </dd>
      </div>
    </dl>
  );
}
