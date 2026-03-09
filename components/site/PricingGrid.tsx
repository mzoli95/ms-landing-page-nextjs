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

function FeatureList({
  items,
  popular = false,
}: {
  items: string[];
  popular?: boolean;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={[
            "grid grid-cols-[10px_1fr] items-start gap-3 text-sm leading-6",
            popular ? "text-slate-700" : "text-slate-600",
          ].join(" ")}
        >
          <span
            className={[
              "mt-2 h-1.5 w-1.5 rounded-full",
              popular ? "bg-cyan-600" : "bg-slate-900",
            ].join(" ")}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PlanCard({ plan, lang }: { plan: Plan; lang: Lang }) {
  const t = getDictionary(lang);

  return (
    <Card className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex h-full flex-col">
        {/* title */}
        <div>
          <h3 className="text-lg font-extrabold leading-7 tracking-tight text-slate-900 dark:text-slate-100">
            {plan.name}
          </h3>

          {plan.popular && (
            <div className="mt-3">
              <span className="inline-flex rounded-full bg-orange-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                {t.pricingGrid.labels.mostPopular}
              </span>
            </div>
          )}
        </div>

        {/* price */}
        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-800/60">
          <div className="text-3xl font-extrabold leading-none tracking-tight text-slate-900 dark:text-slate-100">
            {plan.price}
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            {plan.hint}
          </p>
        </div>

        {/* features */}
        <div className="mt-6 flex-1">
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
            {lang === "en" ? "Included" : "Mit tartalmaz"}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <ul className="space-y-3">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="grid grid-cols-[10px_1fr] items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-slate-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* button */}
        <div className="mt-6 pt-2">
          <Button href="/contact" className="w-full">
            {t.pricingGrid.labels.requestOffer}
          </Button>
        </div>
      </div>
    </Card>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="text-sm font-bold uppercase tracking-[0.12em] text-slate-500">
        {title}
      </div>
      {subtitle ? (
        <p className="mt-2 text-sm leading-7 text-slate-600">{subtitle}</p>
      ) : null}
    </div>
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
    lang === "en" ? "See full pricing" : "Teljes árlista";

  const customQuoteLabel =
    lang === "en" ? "Ask for a custom quote" : "Egyedi ajánlatot kérek";

  if (isLinkOnly) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            {lang === "en"
              ? "You can start with a package, or ask for a custom quote if your situation is different. Full details are on the Pricing page."
              : "Indulhatsz csomaggal, de ha a helyzeted ettől eltér, egyedi ajánlatot is kérhetsz. A részletes csomagok az Ár oldalon vannak."}
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            <Button href="/pricing">{fullPricingLabel}</Button>
            <Button href="/contact" variant="ghost">
              {customQuoteLabel}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div>
        <SectionTitle
          title={t.pricingGrid.labels.development}
          subtitle={
            lang === "en"
              ? "Packages for internal tools, automation, reporting and company-specific development."
              : "Csomagok belső rendszerekhez, automatizáláshoz, riportokhoz és egyedi üzleti fejlesztésekhez."
          }
        />

        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} lang={lang} />
          ))}
        </div>
      </div>

      <div>
        <SectionTitle
          title={t.pricingGrid.labels.pcAddon}
          subtitle={
            lang === "en"
              ? "Support, maintenance and one-off computer help as an additional service."
              : "Kiegészítő szolgáltatásként elérhető PC-s segítség, karbantartás és hibamegoldás."
          }
        />

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {pc.map((p) => (
            <PlanCard key={p.name} plan={p} lang={lang} />
          ))}
        </div>
      </div>

      {isTeaser && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm leading-7 text-slate-600">
            {lang === "en"
              ? "The dedicated pricing page shows all packages, add-ons and notes in one place."
              : "A külön Ár oldalon egy helyen látod az összes csomagot, kiegészítőt és megjegyzést."}
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
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-600 sm:p-8">
            <span className="font-semibold text-slate-900">
              {t.pricingGrid.labels.noteTitle}
            </span>{" "}
            {t.pricingGrid.labels.noteText}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-slate-600">
                {lang === "en"
                  ? "If none of the packages fit exactly, send a short summary and I will prepare a quote tailored to your situation."
                  : "Ha egyik csomag sem illik pontosan a helyzetedre, írj pár sort róla, és küldök hozzá egyedi ajánlatot."}
              </p>
              <Button href="/contact">{customQuoteLabel}</Button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-slate-500">
              {lang === "en" ? "Next step" : "Ajánlatkérés után"}
            </div>

            <div className="mt-3 text-lg font-extrabold tracking-tight text-slate-900">
              {lang === "en"
                ? "What happens after you send a request?"
                : "Mi történik az ajánlatkérés után?"}
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {(lang === "en"
                ? [
                    "I reply and clarify the key points with you.",
                    "You get a simple proposal with scope and price.",
                    "If it makes sense, we start with the smallest useful step.",
                  ]
                : [
                    "Visszajelzek, és letisztázzuk a fontos részleteket.",
                    "Kapsz egy egyszerű javaslatot árral és tartalommal.",
                    "Ha van értelme, a legkisebb hasznos lépéssel indulunk.",
                  ]
              ).map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
