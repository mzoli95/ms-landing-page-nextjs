import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export function ServicesPreview({ lang = "hu" }: { lang?: Lang }) {
  const t = getDictionary(lang);
  const services = t.servicesPreview.cards;

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {services.map((s) => (
        <Card key={s.title} className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="text-base font-bold text-slate-900">{s.title}</div>
          </div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {s.items.map((i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                <span className="leading-6">{i}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
      <div className="lg:col-span-2 flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <div className="text-base font-bold text-slate-900">
          {t.servicesPreview.ctaTitle}
        </div>
        <p className="text-sm text-slate-600">{t.servicesPreview.ctaDesc}</p>
        <Button href="/contact">{t.servicesPreview.ctaButton}</Button>
      </div>
    </div>
  );
}
