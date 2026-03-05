import { Card } from "@/components/ui/Card";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export function Steps({ lang = "hu" }: { lang?: Lang }) {
  const t = getDictionary(lang);
  const steps = t.steps;

  return (
    <div className="space-y-4">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((s, index) => (
          <Card key={s.title} className="p-6">
            <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              {lang === "en" ? `Step ${index + 1}` : `${index + 1}. lépés`}
            </div>
            <div className="mt-2 text-base font-bold text-slate-900">
              {s.title}
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
