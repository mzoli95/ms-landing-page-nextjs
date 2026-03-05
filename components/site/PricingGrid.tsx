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

export function PricingGrid({
  lang = "hu",
  mode = "full",
}: {
  lang?: Lang;
  mode?: "full" | "teaser" | "link-only";
}) {
  const t = getDictionary(lang);
  const isTeaser = mode === "teaser";
  const isLinkOnly = mode === "link-only";
  const plans = isTeaser
    ? t.pricingGrid.plans.slice(0, 2)
    : t.pricingGrid.plans;
  const pc = isTeaser
    ? t.pricingGrid.pcPlans.slice(0, 1)
    : t.pricingGrid.pcPlans;
  const fullPricingLabel =
    lang === "en" ? "Go to pricing" : "Tovább az árakhoz";

  if (isLinkOnly) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            {lang === "en"
              ? "You can start with a package, or request a fully custom quote. Full details are on the Pricing page."
              : "Indulhatsz csomaggal, de teljesen egyedi ajánlatot is kérhetsz. A teljes részletek az Ár oldalon vannak."}
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            <Button href="/pricing">{fullPricingLabel}</Button>
            <Button href="/contact" variant="ghost">
              {lang === "en"
                ? "Request a custom quote"
                : "Egyedi ajánlatot kérek"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

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

      {isTeaser && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-600">
            {lang === "en"
              ? "You can find all package scopes, add-ons, and notes on the dedicated pricing page."
              : "Az összes csomag tartalma, kiegészítő opció és megjegyzés a külön Ár oldalra került."}
          </p>
          <div className="mt-4">
            <Button href="/pricing" variant="ghost">
              {fullPricingLabel}
            </Button>
          </div>
        </div>
      )}

      {!isTeaser && (
        <>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            <span className="font-semibold text-slate-900">
              {t.pricingGrid.labels.noteTitle}
            </span>{" "}
            {t.pricingGrid.labels.noteText}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-slate-600">
                {lang === "en"
                  ? "Need a custom scope? Send a short brief and I will prepare a tailored quote."
                  : "Nem illik rád egyik csomag sem? Írj pár sort az igényedről, és küldök egyedi ajánlatot."}
              </p>
              <Button href="/contact">
                {lang === "en"
                  ? "Request a custom quote"
                  : "Egyedi ajánlatot kérek"}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
