import Link from "next/link";
import { getDictionary } from "@/components/lib/dictionary";
import type { Lang } from "@/components/lib/i18n";

export function StarterRates({ lang }: { lang: Lang }) {
  const { plans } = getDictionary(lang).pricingGrid;
  const selected = [plans[15], plans[5], plans[4], plans[1]];
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {selected.map((service) => (
          <Link
            key={service.name}
            href="/pricing"
            className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-400"
          >
            <h3 className="min-h-12 text-sm font-bold text-slate-900">
              {service.name}
            </h3>
            <p className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
              {service.price}
            </p>
            <p className="mt-4 text-xs leading-6 text-slate-600">
              {service.hint}
            </p>
            <p className="mt-4 text-xs font-bold text-blue-700 dark:text-blue-300">
              {lang === "en" ? "What's included →" : "Mit tartalmaz? →"}
            </p>
          </Link>
        ))}
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-600">
        {lang === "en"
          ? "The task determines the final price. Scope, tax treatment and travel are agreed in advance."
          : "A végső ár a feladattól függ. A tartalmat, adótartalmat és az esetleges kiszállást előre egyeztetjük."}{" "}
        <Link
          href="/pricing"
          className="font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
        >
          {lang === "en" ? "Full price list" : "Teljes árlista"}
        </Link>
      </p>
    </>
  );
}
