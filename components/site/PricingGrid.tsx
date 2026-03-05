import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

type Plan = {
  name: string;
  price: string;
  hint: string;
  popular?: boolean;
  features: string[];
};

function PlanCard({ plan, lang }: { plan: Plan; lang: Lang }) {
  const t = getDictionary(lang);

  return (
    <Card className="relative p-6">
      <div className="flex items-center justify-between">
        <div className="text-base font-extrabold text-slate-900">
          {plan.name}
        </div>
        {plan.popular && (
          <div className="ml-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">
            {t.pricingGrid.labels.mostPopular}
          </div>
        )}
      </div>

      <div className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
        {plan.price}
      </div>

      <div className="mt-2 text-sm text-slate-600">{plan.hint}</div>

      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
            <span className="leading-6">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Button href="/contact" className="w-full">
          {t.pricingGrid.labels.requestOffer}
        </Button>
      </div>
    </Card>
  );
}

export function PricingGrid({ lang = "hu" }: { lang?: Lang }) {
  const t = getDictionary(lang);
  const plans = t.pricingGrid.plans;
  const pc = t.pricingGrid.pcPlans;

  return (
    <div className="space-y-10">
      <div>
        <div className="text-sm font-bold text-slate-900">
          {t.pricingGrid.labels.development}
        </div>
        <div className="mt-4 grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} lang={lang} />
          ))}
        </div>
      </div>

      <div>
        <div className="text-sm font-bold text-slate-900">
          {t.pricingGrid.labels.pcAddon}
        </div>
        <div className="mt-4 grid gap-5 lg:grid-cols-2">
          {pc.map((p) => (
            <PlanCard key={p.name} plan={p} lang={lang} />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">
          {t.pricingGrid.labels.noteTitle}
        </span>{" "}
        {t.pricingGrid.labels.noteText}
      </div>
    </div>
  );
}
