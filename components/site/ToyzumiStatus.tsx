import type { Lang } from "@/components/lib/i18n";
import { Section } from "@/components/ui/Section";

export function ToyzumiStatus({ lang }: { lang: Lang }) {
  const en = lang === "en";
  const links = [
    [
      "/products",
      en ? "Browse the product catalogue" : "Termékkatalógus böngészése",
    ],
    [
      "/loyalty",
      en ? "Explore the loyalty programme" : "Hűségprogram bemutatója",
    ],
    [
      "/blog",
      en
        ? "Read collector guides and posts"
        : "Gyűjtői útmutatók és bejegyzések",
    ],
  ];
  return (
    <Section
      eyebrow={
        en
          ? "Independent project · development status"
          : "Saját fejlesztés · projektállapot"
      }
      title={en ? "What can you explore today?" : "Mit nézhetsz meg most?"}
    >
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-2xl border border-emerald-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">
            {en ? "Try it now" : "Most kipróbálható"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {en
              ? "These public staging pages can be explored without an admin account. They contain demonstration data."
              : "Ezek a nyilvános staging oldalak adminfiók nélkül is megnyithatók. Bemutatóadatokat tartalmaznak."}
          </p>
          <ul className="mt-4 space-y-3">
            {links.map(([path, label]) => (
              <li key={path}>
                <a
                  href={`https://staging.toyzumi.hu${path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
                >
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">
            {en
              ? "Documented in the case study"
              : "Az esettanulmányban bemutatva"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {en
              ? "Inventory, procurement suggestions, order handling, support and campaigns are documented in the version 1.1.5 screenshots and technical review. Admin and personal account workflows require the appropriate access; they are not all part of the public demo."
              : "A készletkezelést, beszerzési javaslatokat, rendeléskezelést, ügyfélszolgálatot és kampányokat az 1.1.5-ös képernyőképek és a technikai áttekintés dokumentálja. Az admin- és személyes fiókfolyamatok megfelelő hozzáférést igényelnek; nem mind részei a nyilvános demónak."}
          </p>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">
            {en ? "In development" : "Fejlesztés alatt"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {en
              ? "ToyZumi is an actively developed project. The documented release review includes further security and infrastructure work before production. The staging demo demonstrates the interface and workflows, not a live retail operation or measured business results."
              : "A ToyZumi aktívan fejlesztett projekt. A dokumentált kiadási felülvizsgálat további biztonsági és infrastruktúra-feladatokat jelöl az éles indulás előtt. A staging demó a felületet és a folyamatokat szemlélteti, nem éles kereskedelmi üzemet vagy mért üzleti eredményeket."}
          </p>
        </div>
      </div>
    </Section>
  );
}
