import { Container } from "@/components/ui/Container";
import { site, flags } from "@/components/lib/site";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export function PcServiceSection({ lang = "hu" }: { lang?: Lang }) {
  const t = getDictionary(lang);

  // Ha nem akarod, hogy egyáltalán megjelenjen: flags-szel is kapcsolhatod később
  return (
    <section className="border-t border-slate-200 bg-white">
      <Container className="py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            <div className="lg:col-span-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {t.pcService.eyebrow}
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                {t.pcService.title}
              </h2>
              <p className="mt-3 text-slate-600">{t.pcService.description}</p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-semibold text-slate-900">
                  {t.pcService.availability}
                </div>
                <div className="mt-2">
                  <a
                    className="font-semibold hover:underline"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </div>
                {flags.showPhone && site.phone ? (
                  <div className="mt-1">{site.phone}</div>
                ) : null}
                <div className="mt-3 space-y-1 text-slate-600">
                  {t.pcService.area.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      {t.pcService.typicalIssues}
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      {t.pcService.typicalIssuesList.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      {t.pcService.dailyPainPoints}
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      {t.pcService.everyday.map((x) => (
                        <li key={x}>• {x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-semibold text-slate-900">
                  {t.pcService.tipTitle}
                </div>
                <div className="mt-1">{t.pcService.tipText}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
