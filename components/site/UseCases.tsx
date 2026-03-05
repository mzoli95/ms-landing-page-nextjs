import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-sm text-slate-600">
      {items.map((text) => (
        <li
          key={text}
          className="grid grid-cols-[10px_1fr] items-baseline gap-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
          <span className="leading-6">{text}</span>
        </li>
      ))}
    </ul>
  );
}

export function UseCases({
  lang = "hu",
  mode = "full",
}: {
  lang?: Lang;
  mode?: "full" | "teaser";
}) {
  const t = getDictionary(lang);
  const isTeaser = mode === "teaser";

  if (isTeaser) {
    const teaserCards =
      lang === "en"
        ? [
            {
              title: "Internal systems and automation",
              intro:
                "Many business workflows still run in spreadsheets or manual steps.",
              points: [
                "Replace Excel-heavy processes",
                "Custom internal admin tools",
                "Automated workflows",
                "Notifications and reporting",
              ],
              outcome: "Less manual work and clearer operations.",
            },
            {
              title: "Databases and custom development",
              intro:
                "Not every challenge can be solved with off-the-shelf software.",
              points: [
                "Custom internal business systems",
                "Database-first operation",
                "Integration with existing tools",
                "Development for specific business needs",
              ],
              outcome: "Software aligned to your company workflow.",
            },
            {
              title: "PC service and computer help",
              intro: "Fast solutions for daily technical issues.",
              points: [
                "Slow or freezing computers",
                "Virus and system issue cleanup",
                "Data backup and reinstall",
                "New device setup",
                "RAM or SSD upgrades when needed",
              ],
              outcome: "Fast and stable daily operation.",
            },
          ]
        : [
            {
              title: "Belső rendszerek és automatizálás",
              intro:
                "A vállalkozásoknál sok folyamat még Excelben vagy manuálisan működik.",
              points: [
                "Excel kiváltása személyreszabott programokkal",
                "Egyedi admin rendszerek",
                "Automatizált folyamatok",
                "Értesítések és összefoglalók",
              ],
              outcome: "Kevesebb manuális munka, átláthatóbb működés.",
            },
            {
              title: "Adatkezelés és egyedi fejlesztések",
              intro: "Nem minden helyzetre jó egy kész, dobozos program.",
              points: [
                "Egyedi belső rendszerek",
                "Adatok biztonságos, rendezett kezelése",
                "Meglévő rendszerek összekötése",
                "Speciális üzleti igények fejlesztése",
              ],
              outcome: "A program a cég működéséhez igazodik, nem fordítva.",
            },
            {
              title: "PC szerviz és számítógépes segítség",
              intro: "Mindennapi technikai problémák gyors megoldása.",
              points: [
                "Lassú vagy lefagyó gépek",
                "Vírus és rendszerhibák",
                "Adatmentés és újratelepítés",
                "Új eszközök beállítása",
                "RAM vagy SSD bővítés, ha ez a szűk keresztmetszet",
              ],
              outcome: "Gyors és stabil működés.",
            },
          ];

    return (
      <div className="space-y-5">
        <div className="flex items-center justify-end">
          <Button href="/usecases">
            {lang === "en" ? "More Scenarios" : "További példák"}
          </Button>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {teaserCards.map((card) => (
            <Card key={card.title} className="p-6">
              <div className="text-base font-extrabold text-slate-900">
                {card.title}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {card.intro}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="grid grid-cols-[10px_1fr] items-baseline gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span className="leading-6">{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm font-semibold text-slate-900">{`> ${card.outcome}`}</p>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const useCases = t.useCases.cards;

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-3">
        {useCases.map((u) => (
          <Card key={u.id} className="p-6">
            <div>
              <div className="text-base font-extrabold text-slate-900 sm:min-h-[3rem] lg:min-h-[3.5rem]">
                {u.title}
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-500">
                {u.who}
              </div>
              <div className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:bg-slate-700/60 dark:text-slate-100">
                {u.timeframeLabel}
              </div>
            </div>

            <div className="mt-5">
              <div className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                {t.useCases.labels.problem}
              </div>
              <BulletList items={u.problem} />
            </div>

            <div className="mt-5">
              <div className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                {t.useCases.labels.solution}
              </div>
              <BulletList items={u.solution} />
            </div>

            <div className="mt-5">
              <div className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                {t.useCases.labels.why}
              </div>
              <BulletList items={u.why} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
