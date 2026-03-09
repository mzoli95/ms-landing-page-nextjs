import Link from "next/link";
import type { Lang } from "@/components/lib/i18n";
import {
  serviceLandingPages,
  articlePages,
} from "@/components/lib/seo-content";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function SeoContentHub({ lang = "hu" }: { lang?: Lang }) {
  const content =
    lang === "en"
      ? {
          servicesTitle: "Dedicated service pages",
          servicesDesc:
            "These pages focus on specific problems like automation, internal tools, reporting and local PC support.",
          serviceLabel: "Service page",
          serviceCta: "Open page",
          articlesTitle: "Helpful articles and guides",
          articlesDesc:
            "These articles answer common questions around replacing Excel, simplifying admin work and digitalizing SME operations.",
          articleLabel: "Article",
          articleCta: "Read article",
        }
      : {
          servicesTitle: "Külön szolgáltatási oldalak",
          servicesDesc:
            "Ezek az oldalak külön-külön mutatják be az automatizálás, a belső rendszerek, a riportok és a helyi PC segítség témáit.",
          serviceLabel: "Szolgáltatás",
          serviceCta: "Oldal megnyitása",
          articlesTitle: "Hasznos cikkek és útmutatók",
          articlesDesc:
            "Ezek a cikkek azokra a gyakori kérdésekre válaszolnak, mint az Excel kiváltása, az admin egyszerűsítése és a KKV működés digitalizálása.",
          articleLabel: "Cikk",
          articleCta: "Cikk megnyitása",
        };

  return (
    <div className="space-y-12">
      <div>
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {content.servicesTitle}
          </h3>
          <p className="mt-3 text-base leading-7 text-slate-600">
            {content.servicesDesc}
          </p>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {serviceLandingPages.map((page) => (
            <Card key={page.slug} className="p-6">
              <div className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                {content.serviceLabel}
              </div>
              <h4 className="mt-3 text-xl font-bold text-slate-900">
                <Link href={`/${page.slug}`} className="hover:text-slate-700">
                  {page.title}
                </Link>
              </h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {page.description}
              </p>
              <div className="mt-5">
                <Button href={`/${page.slug}`} variant="ghost" className="px-0">
                  {content.serviceCta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {content.articlesTitle}
          </h3>
          <p className="mt-3 text-base leading-7 text-slate-600">
            {content.articlesDesc}
          </p>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articlePages.map((page) => (
            <Card key={page.slug} className="p-6">
              <div className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                {content.articleLabel}
              </div>
              <h4 className="mt-3 text-xl font-bold text-slate-900">
                <Link
                  href={`/blog/${page.slug}`}
                  className="hover:text-slate-700"
                >
                  {page.title}
                </Link>
              </h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {page.description}
              </p>
              <div className="mt-5">
                <Button
                  href={`/blog/${page.slug}`}
                  variant="ghost"
                  className="px-0"
                >
                  {content.articleCta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
