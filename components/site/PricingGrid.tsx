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

function PlanCard({
  plan,
  lang,
  hardware = false,
  showDetails = true,
}: {
  plan: Plan;
  lang: Lang;
  hardware?: boolean;
  showDetails?: boolean;
}) {
  const t = getDictionary(lang);

  return (
    <Card
      className={`relative flex h-full flex-col p-6 ${plan.popular ? "border-blue-300 ring-2 ring-blue-100 dark:border-blue-700 dark:ring-blue-950" : ""}`}
    >
      <div className="flex items-center justify-between">
        <div className="text-base font-extrabold text-slate-900">
          {plan.name}
        </div>
        {plan.popular && (
          <div className="ml-2 rounded-full bg-blue-700 px-3 py-1 text-xs font-bold text-white">
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
          <li key={f} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
            <span className="leading-6">{f}</span>
          </li>
        ))}
      </ul>

      {showDetails && (
        <details className="group mt-5 border-t border-slate-200 pt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-blue-700 marker:hidden dark:text-blue-300">
            <span>{lang === "en" ? "More details" : "Bővebben"}</span>
            <span className="text-lg leading-none transition group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            {hardware
              ? lang === "en"
                ? "The listed price is the service fee. Parts are quoted separately after compatibility checks and a short assessment; no component is purchased without approval."
                : "A feltüntetett összeg munkadíj. Az alkatrészekre kompatibilitás-ellenőrzés és rövid felmérés után külön ajánlat készül; jóváhagyás nélkül nem történik beszerzés. Nyomtató, szkenner, hálózati és egyéb elektronikai eszköznél a beállítás és hibafeltárás után egyeztetjük, ha szakszervizes alkatrészjavítás szükséges."
              : lang === "en"
                ? "The starting price covers the listed baseline scope. Data sources, users, integrations, delivery criteria and any external subscription fees are confirmed before work begins."
                : "A kezdőár a felsorolt alaptartalomra vonatkozik. Indulás előtt rögzítjük az adatforrásokat, a felhasználókat, az integrációkat, az átadás feltételeit és az esetleges külső előfizetések díját."}
          </div>
        </details>
      )}

      <div className="mt-auto pt-6">
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
    ? [t.pricingGrid.plans[5], t.pricingGrid.plans[1], t.pricingGrid.plans[3]]
    : t.pricingGrid.plans.slice(0, 8);
  const pc = isTeaser ? [] : t.pricingGrid.pcPlans;
  const recurring = t.pricingGrid.plans.filter((p) => /hó|month/.test(p.price));
  const additional = t.pricingGrid.plans
    .slice(12)
    .filter((p) => !/hó|month/.test(p.price));
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
      {!isTeaser && (
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/40">
          <h2 className="text-lg font-bold text-slate-900">
            {lang === "en"
              ? "What do these prices mean?"
              : "Hogyan olvasd az árakat?"}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            {lang === "en"
              ? "Project packages are one-time fees for the listed baseline scope. Monthly packages are recurring services; hourly work is billed by the agreed time allowance. Hosting, domains, licences, advertising budgets and hardware are quoted separately where needed."
              : "A fejlesztési csomagok egyszeri díjak a felsorolt alaptartalomra. A havi csomagok rendszeres szolgáltatások, az óradíjas feladatoknál egyeztetett időkerettel dolgozunk. A tárhely, domain, licencek, hirdetési keret és alkatrészek szükség esetén külön tételként szerepelnek az ajánlatban."}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {t.pricingGrid.labels.noteText}
          </p>
        </div>
      )}

      <div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-lg font-extrabold text-slate-900">
              {t.pricingGrid.labels.development}
            </div>
            <p className="mt-1 text-sm text-slate-600">
              {lang === "en"
                ? "Choose by outcome; the exact scope is finalized together."
                : "Eredmény alapján válassz; a pontos tartalmat közösen véglegesítjük."}
            </p>
          </div>
          <span className="w-fit rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200">
            {lang === "en" ? "One-time projects" : "Egyszeri fejlesztés"}
          </span>
        </div>
        <div
          className={
            isTeaser
              ? "mt-4 grid gap-5 lg:grid-cols-3"
              : "mt-4 grid gap-5 md:grid-cols-2"
          }
        >
          {plans.map((p) => (
            <PlanCard
              key={p.name}
              plan={p}
              lang={lang}
              showDetails={!isTeaser}
            />
          ))}
        </div>
      </div>

      {!isTeaser && (
        <div className="space-y-5">
          {[
            {
              title:
                lang === "en"
                  ? "Monthly support and visibility"
                  : "Havi támogatás és láthatóság",
              items: recurring,
            },
            {
              title:
                lang === "en"
                  ? "Consulting and development hours"
                  : "Tanácsadás és fejlesztési órakeretek",
              items: additional,
            },
          ].map((group) => (
            <details
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <summary className="cursor-pointer text-lg font-bold text-slate-900">
                {group.title}{" "}
                <span className="ml-2 text-sm font-normal text-slate-500">
                  ({group.items.length})
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {lang === "en"
                  ? "Monthly allowances, response times and external costs are agreed in the quote."
                  : "A havi keretet, a vállalt válaszidőt és a külső költségeket az ajánlatban rögzítjük."}
              </p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {group.items.map((plan) => (
                  <PlanCard key={plan.name} plan={plan} lang={lang} />
                ))}
              </div>
            </details>
          ))}
        </div>
      )}

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
      {!isTeaser && (
        <div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-lg font-extrabold text-slate-900">
                {lang === "en"
                  ? "Additional PC and device support"
                  : "Kiegészítő PC-s és műszaki segítség"}
              </div>
              <p className="mt-1 text-sm text-slate-600">
                {lang === "en"
                  ? "Remote help, device setup, upgrades or a complete custom-built computer."
                  : "Távsegítség, eszközbeállítás, célzott bővítés vagy teljes, egyedi számítógép."}
              </p>
            </div>
            <span className="w-fit rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-800 dark:border-cyan-900 dark:bg-cyan-950 dark:text-cyan-200">
              {lang === "en"
                ? "Parts quoted separately"
                : "Alkatrész külön árajánlat"}
            </span>
          </div>
          <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pc.map((p) => (
              <PlanCard
                key={p.name}
                plan={p}
                lang={lang}
                hardware
                showDetails={!isTeaser}
              />
            ))}
          </div>
          {!isTeaser && (
            <div className="mt-5 rounded-2xl border border-cyan-200 bg-cyan-50 p-5 dark:border-cyan-900 dark:bg-cyan-950/50">
              <div className="font-bold text-slate-900">
                {lang === "en" ? "On-site visit" : "Kiszállás"}
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {lang === "en"
                  ? "Visits are primarily available in the Siófok area and Somogy county; locations further afield and timing can be arranged in advance. Siófok and the surrounding 10 km: fixed 4,900 HUF. Beyond that: +180 HUF/km, calculated for the return journey. Parking or toll fees are agreed in advance. The travel fee does not include labour."
                  : "Elsősorban Siófokon és környékén, valamint Somogy megyében vállalok kiszállást; távolabbi helyszín és időpont is egyeztethető. Siófok és 10 km-es körzete: fix 4 900 Ft. Ezen túl +180 Ft/km, az oda-vissza útra számolva. A parkolási vagy útdíjat előre egyeztetjük. A kiszállási díj a munkadíjat nem tartalmazza."}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
