import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";
import { Database, HardDriveDownload, SearchCheck, ServerCog } from "lucide-react";

export function ServicesPreview({
  lang = "hu",
  mode = "full",
}: {
  lang?: Lang;
  mode?: "full" | "teaser";
}) {
  const t = getDictionary(lang);
  const services = t.servicesPreview.cards;
  const isTeaser = mode === "teaser";
  const visibleServices = isTeaser
    ? services.slice(0, 4)
    : [services[0], services[1], services[4], services[3]].filter(Boolean);
  const topBrowseLabel =
    lang === "en" ? "More Services" : "További szolgáltatások";
  const technicalFoundations = lang === "en" ? [
    { icon: HardDriveDownload, title: "Backup and recovery", text: "Scheduled local or cloud backups, retention, recovery checks and a clear restore plan." },
    { icon: ServerCog, title: "Infrastructure and operations", text: "Hosting, domains, deployment, containers, monitoring and practical production setup." },
    { icon: SearchCheck, title: "SEO and GEO visibility", text: "Technical SEO, structured content and clear answers that search engines and AI assistants can understand." },
    { icon: Database, title: "SQL and NoSQL databases", text: "Data modelling, migration, cleanup, indexing and backups with the database chosen for the actual use case." },
  ] : [
    { icon: HardDriveDownload, title: "Biztonsági mentés és visszaállítás", text: "Ütemezett helyi vagy felhős mentés, megőrzési rend, visszaállítási próba és érthető helyreállítási terv." },
    { icon: ServerCog, title: "Infrastruktúra és üzemeltetés", text: "Tárhely, domain, telepítés, konténerek, megfigyelés és a rendszer gyakorlati élesítése." },
    { icon: SearchCheck, title: "SEO és GEO láthatóság", text: "Technikai SEO, strukturált tartalom és egyértelmű válaszok, hogy a keresők és az AI-asszisztensek is megértsék az oldalt." },
    { icon: Database, title: "SQL és NoSQL adatbázisok", text: "Adatmodell, migráció, tisztítás, indexelés és mentés; mindig a valós feladathoz illő adatbázissal." },
  ];

  return (
    <div className="space-y-5">
      {isTeaser && (
        <div className="flex items-center justify-end">
          <Button href="/services">{topBrowseLabel}</Button>
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        {visibleServices.map((s) => (
          <Card key={s.title} className="flex h-full flex-col p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="text-base font-bold text-slate-900 dark:text-white">
                {s.title}
              </div>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {s.items.slice(0, isTeaser ? 2 : 3).map((item) => {
                const normalized =
                  typeof item === "string" ? { text: item } : item;

                return (
                  <li
                    key={normalized.text}
                    className="grid grid-cols-[10px_1fr] items-baseline gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-blue-300" />
                    <div>
                      <span className="leading-6">{normalized.text}</span>
                      {!isTeaser && normalized.benefit && (
                        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                          {normalized.benefit}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
            {!isTeaser && s.items.length > 3 && (
              <details className="group mt-5 border-t border-slate-200 pt-4 dark:border-slate-700">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-blue-700 marker:hidden dark:text-blue-300">
                  <span>{lang === "en" ? "More examples" : "Bővebben"}</span>
                  <span className="text-lg leading-none transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {s.items.slice(3).map((item) => {
                    const normalized =
                      typeof item === "string" ? { text: item } : item;

                    return (
                      <li
                        key={normalized.text}
                        className="border-l-2 border-blue-200 pl-3 dark:border-blue-800"
                      >
                        <div className="font-semibold text-slate-700 dark:text-slate-200">
                          {normalized.text}
                        </div>
                        {normalized.benefit && (
                          <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                            {normalized.benefit}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </details>
            )}
          </Card>
        ))}

        {!isTeaser && (
          <div className="mt-2 lg:col-span-2">
            <div className="mb-4">
              <div className="text-base font-black text-slate-900 dark:text-white">
                {lang === "en" ? "Technical foundations" : "Technikai alapok és láthatóság"}
              </div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {lang === "en"
                  ? "The less visible work that keeps a solution secure, recoverable and discoverable."
                  : "A kevésbé látványos munka, amitől egy megoldás biztonságos, helyreállítható és megtalálható marad."}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {technicalFoundations.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/50">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="lg:col-span-2 flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50">
          <div className="text-base font-bold text-slate-900 dark:text-white">
            {t.servicesPreview.ctaTitle}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">{t.servicesPreview.ctaDesc}</p>
          <Button href="/contact">{t.servicesPreview.ctaButton}</Button>
        </div>
      </div>
    </div>
  );
}
