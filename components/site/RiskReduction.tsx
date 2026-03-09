import { Card } from "@/components/ui/Card";
import type { Lang } from "@/components/lib/i18n";

export function RiskReduction({ lang = "hu" }: { lang?: Lang }) {
  const content =
    lang === "en"
      ? {
          eyebrow: "Clarity first",
          title: "Clear terms from the beginning",
          points: [
            "No hidden costs. We agree scope and pricing before work starts.",
            "Fast reply on business days, without long silence.",
            "Step-by-step delivery, so you always know what comes next.",
          ],
        }
      : {
          eyebrow: "Tiszta helyzet",
          title: "Átlátható feltételek már az elején",
          points: [
            "Nincs rejtett költség. Indulás előtt tisztázzuk a keretet és az árat.",
            "Munkanapokon gyors válasz, hosszú eltűnések nélkül.",
            "Lépésenkénti haladás, hogy mindig tudd, mi jön most.",
          ],
        };

  return (
    <Card className="p-6 sm:p-8">
      <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
        {content.eyebrow}
      </div>
      <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
        {content.title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm text-slate-600 sm:text-base">
        {content.points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
