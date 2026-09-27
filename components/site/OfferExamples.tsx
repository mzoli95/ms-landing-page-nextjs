import type { Lang } from "@/components/lib/i18n";
import type { OfferExample } from "@/components/lib/focused-offers";

export function OfferExamples({
  examples,
  lang,
}: {
  examples?: OfferExample[];
  lang: Lang;
}) {
  if (!examples?.length) return null;
  const en = lang === "en";
  return (
    <details className="mt-5 border-t border-slate-200 pt-4">
      <summary className="cursor-pointer text-sm font-bold leading-7 text-blue-700 dark:text-blue-300">
        {en
          ? "Small-task examples and prices"
          : "Kisebb feladatok, konkrét példákkal és árakkal"}{" "}
        ({examples.length})
      </summary>
      <dl className="mt-4 space-y-5">
        {examples.map((example) => (
          <div key={example.name}>
            <dt className="text-sm font-bold leading-6 text-slate-900">
              {example.name}
            </dt>
            <dd className="mt-1 text-xs leading-6 text-slate-500">
              {example.audience}
            </dd>
            <dd className="mt-1 text-sm leading-6 text-slate-600">
              {example.deliverable}
            </dd>
            <dd className="mt-2 text-sm font-semibold leading-6 text-slate-900">
              {example.price} · {example.time}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 text-xs leading-6 text-slate-500">
        {en
          ? "Indicative fixed project fees and estimated working hours for agreed formats and accessible code. Hours are not a delivery deadline or an hourly-rate calculation. We confirm scope, tax treatment and timing after reviewing a sample or the issue; same-day delivery depends on availability."
          : "Irányadó fix projektdíjak és becsült munkaidők, egyeztetett formátumokra és hozzáférhető kódra. Az óraszám nem vállalási határidő és nem óradíjas elszámolás. Mintafájl vagy a hiba áttekintése után rögzítjük a tartalmat, adótartalmat és határidőt; az aznapi elkészítés kapacitásfüggő."}
      </p>
    </details>
  );
}
