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
  topic = "development",
  showDetails = true,
}: {
  plan: Plan;
  lang: Lang;
  hardware?: boolean;
  topic?: string;
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
                ? "The listed price is the service fee. Parts are quoted separately after compatibility checks and a short assessment; no component is purchased without approval. For printers, scanners, network and other electronic devices, we agree whether a specialist repair is needed after setup and diagnosis."
                : "A feltüntetett összeg munkadíj. Az alkatrészekre kompatibilitás-ellenőrzés és rövid felmérés után külön ajánlat készül; jóváhagyás nélkül nem történik beszerzés. Nyomtató, szkenner, hálózati és egyéb elektronikai eszköznél a beállítás és hibafeltárás után egyeztetjük, ha szakszervizes alkatrészjavítás szükséges."
              : lang === "en"
                ? "The starting price covers the listed baseline scope. Data sources, users, integrations, delivery criteria and any external subscription fees are confirmed before work begins."
                : "A kezdőár a felsorolt alaptartalomra vonatkozik. Indulás előtt rögzítjük az adatforrásokat, a felhasználókat, az integrációkat, az átadás feltételeit és az esetleges külső előfizetések díját."}
          </div>
        </details>
      )}

      <div className="mt-auto pt-6">
        <Button href={`/contact?topic=${topic}`} className="w-full">
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
  const en = lang === "en";
  const { plans, pcPlans } = t.pricingGrid;
  const topicFor = (plan: Plan) => {
    const index = plans.indexOf(plan);
    if ([4, 5, 6, 8, 10, 11].includes(index)) return "web";
    if (index === 1) return "excel";
    if (index === 7) return "reports";
    return "development";
  };
  const featured = [
    { plan: plans[15], topic: "development", hardware: false },
    { plan: plans[5], topic: "web", hardware: false },
    { plan: plans[1], topic: "excel", hardware: false },
    { plan: pcPlans[6], topic: "hardware", hardware: true },
  ];
  const groups = [
    {
      id: "development",
      title: en
        ? "Software, websites and automation"
        : "Szoftver, weboldal és automatizálás",
      items: plans.slice(0, 8),
      hardware: false,
    },
    {
      id: "hardware",
      title: en
        ? "PC service, device setup and remote help"
        : "PC-szerviz, eszközbeállítás és távsegítség",
      items: pcPlans,
      hardware: true,
    },
    {
      id: "support",
      title: en
        ? "Monthly maintenance and visibility"
        : "Havi karbantartás és láthatóság",
      items: plans.filter((p) => /hó|month/.test(p.price)),
      hardware: false,
    },
    {
      id: "consulting",
      title: en
        ? "Consulting and development hours"
        : "Tanácsadás és fejlesztési órakeretek",
      items: plans.slice(12).filter((p) => !/hó|month/.test(p.price)),
      hardware: false,
    },
  ];
  if (mode === "link-only")
    return (
      <Button href="/pricing">
        {en ? "View all prices" : "Teljes árlista"}
      </Button>
    );
  return (
    <div className="space-y-10">
      <section aria-labelledby="starting-options">
        <h2 id="starting-options" className="text-xl font-bold text-slate-900">
          {en ? "Four ways to get started" : "Négy lehetőség az induláshoz"}
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {en
            ? "Choose a starting point. You do not need to know the technical solution yet."
            : "Válassz kiindulópontot. A műszaki megoldást még nem kell tudnod."}
        </p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {featured.map(({ plan, topic, hardware }) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              lang={lang}
              topic={topic}
              hardware={hardware}
              showDetails={false}
            />
          ))}
        </div>
      </section>
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/40">
        <h2 className="text-lg font-bold text-slate-900">
          {en ? "What the prices cover" : "Mit tartalmaznak az árak?"}
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {en
            ? "Project fees cover the listed scope. Monthly services recur; hourly work uses an agreed time allowance. Hosting, domains, licences, advertising budgets, parts and travel are separate where applicable. We agree the scope and total fee before work begins."
            : "A projektdíj a felsorolt tartalmat fedezi. A havi szolgáltatások ismétlődő díjak, az óradíjas munkákhoz időkeretet egyeztetünk. A tárhely, domain, licencek, hirdetési keret, alkatrészek és kiszállás szükség esetén külön tételek. A tartalmat és a végösszeget a munka előtt rögzítjük."}
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {t.pricingGrid.labels.noteText}
        </p>
      </div>
      {mode === "full" ? (
        <section aria-labelledby="all-prices" className="space-y-4">
          <h2 id="all-prices" className="text-xl font-bold text-slate-900">
            {en
              ? "Full price list by service"
              : "Teljes árlista, szolgáltatásonként"}
          </h2>
          {groups.map((group) => (
            <details
              key={group.id}
              id={`pricing-${group.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
            >
              <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 text-lg font-bold text-slate-900">
                <span>
                  {group.title}{" "}
                  <span className="text-sm font-normal text-slate-500">
                    ({group.items.length})
                  </span>
                </span>
                <span aria-hidden="true" className="group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {group.items.map((plan) => (
                  <PlanCard
                    key={plan.name}
                    plan={plan}
                    lang={lang}
                    hardware={group.hardware}
                    topic={group.hardware ? "hardware" : topicFor(plan)}
                  />
                ))}
              </div>
              {group.hardware && (
                <p className="mt-5 rounded-xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">
                  {en
                    ? "Visits: primarily Siófok and Somogy county, further afield by arrangement. Siófok and the surrounding 10 km: HUF 4,900. Beyond that: an additional HUF 180/km for the return journey. Parking and tolls are agreed in advance. Travel does not include labour."
                    : "Kiszállás: elsősorban Siófok és Somogy megye, távolabb egyeztetéssel. Siófok és 10 km-es körzete: 4 900 Ft. Ezen túl +180 Ft/km az oda-vissza útra. A parkolást és útdíjat előre egyeztetjük. A kiszállás a munkadíjat nem tartalmazza."}
                </p>
              )}
            </details>
          ))}
        </section>
      ) : (
        <Button href="/pricing" variant="ghost">
          {en ? "View all prices" : "Teljes árlista"}
        </Button>
      )}
      <div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6">
        <p className="max-w-2xl text-sm leading-7 text-slate-600">
          {en
            ? "Does your request fall outside these packages? Describe the task or the issue with your device, and we will work out a suitable scope."
            : "Nem illik rád egyik csomag sem? Írd le a feladatot vagy az eszközöd hibáját, és közösen meghatározzuk a szükséges munkát."}
        </p>
        <Button href="/contact?topic=other">
          {en ? "Request a custom quote" : "Egyedi ajánlatot kérek"}
        </Button>
      </div>
    </div>
  );
}
