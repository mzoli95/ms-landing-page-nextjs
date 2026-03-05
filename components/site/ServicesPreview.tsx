import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export function ServicesPreview({
  lang = "hu",
  mode = "full",
}: {
  lang?: Lang;
  mode?: "full" | "teaser";
}) {
  const t = getDictionary(lang);
  const services = t.servicesPreview.cards;
  const isTeaser = mode === "teaser";
  const visibleServices = isTeaser ? services.slice(0, 4) : services;
  const topBrowseLabel =
    lang === "en" ? "More Services" : "További szolgáltatások";

  return (
    <div className="space-y-5">
      {isTeaser && (
        <div className="flex items-center justify-end">
          <Button href="/services">{topBrowseLabel}</Button>
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        {visibleServices.map((s) => (
          <Card key={s.title} className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="text-base font-bold text-slate-900">
                {s.title}
              </div>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {(isTeaser ? s.items.slice(0, 2) : s.items).map((item) => {
                const normalized =
                  typeof item === "string" ? { text: item } : item;

                return (
                  <li
                    key={normalized.text}
                    className="grid grid-cols-[10px_1fr] items-baseline gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <div>
                      <span className="leading-6">{normalized.text}</span>
                      {!isTeaser && normalized.benefit && (
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {normalized.benefit}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
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
    </div>
  );
}
