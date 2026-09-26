import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServices } from "@/components/lib/services";
import { getLangFromCookies } from "@/components/lib/i18n";
import { pageMetadata } from "@/components/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { site } from "@/components/lib/site";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServices("hu").find((s) => s.slug === slug);
  return service
    ? pageMetadata(service.title, service.summary, `/services/${slug}`)
    : {};
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const lang = await getLangFromCookies();
  const en = lang === "en";
  const service = getServices(lang).find((s) => s.slug === slug);
  if (!service) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/${slug}#service`,
    name: service.title,
    serviceType: service.title,
    areaServed: { "@type": "Country", name: "Magyarország" },
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
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
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
        </div>
      </Section>
    </>
  );
}
