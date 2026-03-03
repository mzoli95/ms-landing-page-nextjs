import { Card } from "@/components/ui/Card";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export function AboutSection({ lang = "hu" }: { lang?: Lang }) {
  const t = getDictionary(lang);
  const values = t.aboutSection.values;

  return (
    <div className="space-y-12">
      <div className="max-w-2xl space-y-4 text-base leading-7 text-slate-600">
        {t.aboutSection.intro.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div>
        <h3 className="mb-6 text-lg font-bold text-slate-900">
          {t.aboutSection.valuesTitle}
        </h3>
        <div className="grid gap-5 md:grid-cols-2">
          {values.map((v) => (
            <Card key={v.title} className="p-6">
              <div className="text-base font-bold text-slate-900">
                {v.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{v.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-8 py-7">
        <p className="text-base font-semibold text-slate-900">
          {t.aboutSection.ctaTitle}
        </p>
        <p className="mt-1 text-sm text-slate-600">{t.aboutSection.ctaDesc}</p>
        <a
          href="/contact"
          className="mt-4 inline-flex items-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
        >
          {t.aboutSection.ctaButton}
        </a>
      </div>
    </div>
  );
}
