import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServices } from "@/components/lib/services";
import { getLangFromCookies } from "@/components/lib/i18n";
import { pageMetadata } from "@/components/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { site } from "@/components/lib/site";
import { getServiceSearch } from "@/components/lib/service-search";
import { getFocusedOffers } from "@/components/lib/focused-offers";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const lang = await getLangFromCookies();
  const service = getServices(lang).find((s) => s.slug === slug);
  const search = getServiceSearch(slug, lang);
  return service
    ? pageMetadata(
        search?.title ?? service.title,
        search?.description ?? service.summary,
        `/services/${slug}`,
        undefined,
        lang,
      )
    : {};
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const lang = await getLangFromCookies();
  const en = lang === "en";
  const service = getServices(lang).find((s) => s.slug === slug);
  if (!service) notFound();
  const search = getServiceSearch(slug, lang);
  const url = `${site.url}/services/${slug}`;
  const focusedOffer = getFocusedOffers(lang).find((offer) =>
    offer.services.includes(slug),
  );
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/${slug}#service`,
    name: service.title,
    serviceType: service.title,
    areaServed: [
      { "@type": "City", name: "Siófok" },
      {
        "@type": "AdministrativeArea",
        name: en ? "Somogy county" : "Somogy megye",
      },
      { "@type": "Country", name: en ? "Hungary" : "Magyarország" },
    ],
    mainEntityOfPage: `${site.url}/services/${slug}`,
    description: service.summary,
    url: `${site.url}/services/${slug}`,
    provider: { "@id": `${site.url}#org` },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              schema,
              {
                "@type": "WebPage",
                "@id": `${url}#page`,
                url,
                name: search?.title ?? service.title,
                description: search?.description ?? service.summary,
                inLanguage: lang,
                mainEntity: { "@id": `${url}#service` },
                isPartOf: { "@id": `${site.url}#website` },
              },
              ...(search
                ? [
                    {
                      "@type": "FAQPage",
                      "@id": `${url}#questions`,
                      inLanguage: lang,
                      isPartOf: { "@id": `${url}#page` },
                      mainEntity: search.faq.map(([name, text]) => ({
                        "@type": "Question",
                        name,
                        acceptedAnswer: { "@type": "Answer", text },
                      })),
                    },
                  ]
                : []),
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
      <Container className="pt-8">
        <Breadcrumbs
          label={en ? "Breadcrumb" : "Oldal útvonala"}
          items={[
            { name: en ? "Home" : "Főoldal", href: "/" },
            { name: en ? "Services" : "Szolgáltatások", href: "/services" },
            { name: service.title, href: `/services/${slug}` },
          ]}
        />
      </Container>
      <Section
        heading="h1"
        eyebrow={
          en
            ? "For individuals and businesses"
            : "Magánszemélyeknek és vállalkozásoknak"
        }
        title={service.title}
        description={service.summary}
      >
        <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_0.85fr]">
          <article className="space-y-9">
            <p className="text-lg leading-8 text-slate-600">{service.intro}</p>
            {focusedOffer && (
              <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/40">
                <h2 className="text-xl font-bold text-slate-900">
                  {focusedOffer.name}
                </h2>
                <p className="mt-3 text-2xl font-bold text-slate-900">
                  {focusedOffer.price}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {focusedOffer.hint}
                </p>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
                  {focusedOffer.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link
                  href={`/contact?topic=${focusedOffer.topic}`}
                  className="mt-5 inline-flex min-h-11 items-center text-sm font-bold text-blue-700 dark:text-blue-300"
                >
                  {en ? "Ask about this task" : "Ilyen feladattal kereslek"} →
                </Link>
              </section>
            )}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {en ? "When can I help?" : "Mivel kereshetsz meg?"}
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
                {service.examples.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {en ? "How it works" : "Így haladunk"}
              </h2>
              <ol className="mt-5 space-y-4">
                {service.steps.map((text, i) => (
                  <li
                    key={text}
                    className="flex gap-4 rounded-xl border border-slate-200 p-5"
                  >
                    <span className="font-mono text-blue-600">0{i + 1}</span>
                    <span className="text-sm leading-7 text-slate-600">
                      {text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </article>
          <aside className="rounded-3xl border border-slate-200 bg-white p-7">
            <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              {en ? "Starting fee" : "Induló díj"}
            </p>
            <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              {service.price}
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              {service.scope}
            </p>
            <p className="mt-4 text-xs leading-6 text-slate-500">
              {en
                ? "Exact scope, tax treatment and any external costs are confirmed in the quote. In-person help is primarily available in Siófok and the surrounding area, and across Somogy county. Visits further afield can be arranged in advance. Remote help and development are available across Hungary."
                : "A pontos tartalmat, adótartalmat és külső költségeket az ajánlat rögzíti. Személyesen elsősorban Siófokon és környékén, valamint Somogy megyében segítek. Távolabbi kiszállás is kérhető előzetes egyeztetéssel. Távsegítség és fejlesztés országosan elérhető."}
            </p>
            <Link
              href={`/contact?topic=${({ "pc-epites": "hardware", "pc-bovites": "hardware", "diagnosztika-tavsegitseg": "hardware", "elektronikai-eszkozok": "hardware", "excel-automatizalas": "excel", "statisztikak-kimutatasok": "reports", webfejlesztes: "web" } as Record<string, string>)[slug] ?? "development"}`}
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white"
            >
              {en ? "Ask about your task" : "Egyeztessünk a feladatról"}
            </Link>
            <h2 className="mt-8 text-lg font-bold text-slate-900">
              {en ? "What to include in your message" : "Mit írj meg elsőre?"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {service.prepare}
            </p>
          </aside>
        </div>
        {search && (
          <section
            id="questions"
            aria-labelledby="service-questions-title"
            className="case-anchor mt-12 border-t border-slate-200 pt-10"
          >
            <h2
              id="service-questions-title"
              className="text-2xl font-bold text-slate-900"
            >
              {en
                ? "Before you get in touch"
                : "Gyakori kérdések a szolgáltatásról"}
            </h2>
            <div className="mt-5 grid items-start gap-4 md:grid-cols-2">
              {search.faq.map(([question, answer]) => (
                <details
                  key={question}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <summary className="cursor-pointer font-semibold leading-7 text-slate-900">
                    {question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}
        <div className="mt-10 flex flex-wrap gap-5 border-t border-slate-200 pt-6">
          <Link
            href={service.related}
            className="text-sm font-bold text-blue-700 dark:text-blue-300"
          >
            {service.relatedLabel} →
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-bold text-blue-700 dark:text-blue-300"
          >
            {en ? "Full price list" : "Teljes árlista"} →
          </Link>
          <Link
            href="/siofok-informatika"
            className="text-sm font-bold text-blue-700 dark:text-blue-300"
          >
            {en
              ? "On-site help around Siófok"
              : "Személyes segítség Siófok környékén"}{" "}
            →
          </Link>
        </div>
      </Section>
    </>
  );
}
