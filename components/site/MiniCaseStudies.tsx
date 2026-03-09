import { ArrowRight, BarChart3, CheckCircle2, Monitor, Workflow } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

const icons = [Monitor, Workflow, BarChart3];

export function MiniCaseStudies({ lang = "hu" }: { lang?: Lang }) {
  const t = getDictionary(lang);
  const cards = t.useCases.cards.filter((entry) =>
    ["internal-dev", "admin-automation", "crm-sales"].includes(entry.id),
  );
  const visualContent =
    lang === "en"
      ? {
          label: "How the work becomes structured",
          caption: "A simple visual path from first conversation to usable delivery.",
          status: "Built from icons and shapes",
        }
      : {
          label: "Így lesz rendezettebb a munka",
          caption: "Egyszerű vizuális út az első egyeztetéstől a használható megoldásig.",
          status: "Ikonokból és formákból építve",
        };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
            {lang === "en" ? "Mini case studies" : "Mini esettanulmányok"}
          </div>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {lang === "en"
              ? "Typical situations where messy admin starts slowing growth"
              : "Tipikus helyzetek, amikor a szétesett admin már visszafogja a működést"}
          </h3>
          <p className="mt-3 text-base leading-7 text-slate-600">
            {lang === "en"
              ? "Short, realistic examples that show where a simple internal tool, automation or reporting view can save time."
              : "Rövid, valós példák arra, hol tud egy egyszerű rendszer, automatizálás vagy riport tényleg időt spórolni."}
          </p>
        </div>

        <Button href="/usecases" variant="ghost">
          <span className="inline-flex items-center gap-2">
            {lang === "en" ? "See more examples" : "További példák"}
            <ArrowRight className="h-4 w-4" />
          </span>
        </Button>
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-3 rounded-3xl bg-slate-50 px-4 py-3 text-xs text-slate-500">
        <span className="font-semibold uppercase tracking-[0.18em] text-slate-600">
          {visualContent.label}
        </span>
        <span className="rounded-full bg-white px-3 py-1 font-semibold text-slate-700">
          {visualContent.status}
        </span>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = icons[index % icons.length];

          return (
            <Card key={card.id} className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-slate-100 p-3 text-slate-900">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900">
                    {card.title}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-500">
                    {card.who}
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <div className="text-xs font-bold tracking-wider text-rose-700 uppercase">
                    {lang === "en" ? "Problem" : "Probléma"}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {card.problem[0]}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-bold tracking-wider text-cyan-700 uppercase">
                    {lang === "en" ? "Solution" : "Megoldás"}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {card.solution[0]}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs font-bold tracking-wider text-emerald-700 uppercase">
                    {lang === "en" ? "Outcome" : "Eredmény"}
                  </div>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
                    {card.why[0]}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}