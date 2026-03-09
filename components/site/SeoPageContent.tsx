import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { SeoPageEntry } from "@/components/lib/seo-content";

export function SeoPageContent({
  page,
  relatedLinks,
}: {
  page: SeoPageEntry;
  relatedLinks?: { href: string; label: string }[];
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            {page.eyebrow}
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{page.intro}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="space-y-6">
            {page.serviceList && page.serviceList.length > 0 && (
              <Card className="border-slate-300 bg-slate-50 p-6 sm:p-8">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Fő szolgáltatások
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Az alábbi területeken lehet a leggyorsabban rendet és
                  átláthatóságot teremteni a napi működésben.
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {page.serviceList.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {page.sections.map((section) => (
              <Card key={section.title} className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>

          <div className="space-y-5 lg:sticky lg:top-24">
            <Card className="p-6">
              <div className="text-sm font-extrabold text-slate-900">Röviden</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{page.summary}</p>
              <div className="mt-5 text-sm font-extrabold text-slate-900">
                Kapcsolódó kulcsszavak
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {page.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </Card>

            {relatedLinks && relatedLinks.length > 0 && (
              <Card className="p-6">
                <div className="text-sm font-extrabold text-slate-900">
                  Kapcsolódó oldalak
                </div>
                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  {relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-xl border border-slate-200 px-4 py-3 transition hover:border-slate-300 hover:bg-slate-50"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </Card>
            )}

          </div>
        </div>

        <Card className="mt-8 bg-slate-900 p-8 text-white sm:p-10">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.18em] text-slate-300 uppercase">
              Kapcsolatfelvétel
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              {page.ctaTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              {page.ctaText}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" className="bg-white text-slate-900 hover:bg-slate-100">
                Kapcsolatfelvétel
              </Button>
              <Button href="/pricing" variant="secondary">
                Árak megtekintése
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}