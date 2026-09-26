import Link from "next/link";
import { notFound } from "next/navigation";
import { getCases } from "@/components/lib/cases";
import { getLangFromCookies } from "@/components/lib/i18n";
import { pageMetadata } from "@/components/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { site } from "@/components/lib/site";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const lang = await getLangFromCookies();
  const item = getCases(lang).find((item) => item.slug === slug);
  return item
    ? pageMetadata(
        item.title,
        item.summary,
        `/usecases/${slug}`,
        undefined,
        lang,
      )
    : {};
}
export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const lang = await getLangFromCookies();
  const en = lang === "en";
  const item = getCases(lang).find((item) => item.slug === slug);
  if (!item) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.summary,
    inLanguage: lang,
    author: { "@id": `${site.url}#org` },
    mainEntityOfPage: `${site.url}/usecases/${slug}`,
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <Container className="pt-10">
        <Link
          href="/usecases"
          className="text-sm font-semibold text-blue-700 dark:text-blue-300"
        >
          ←{" "}
          {en
            ? "All problem guides"
            : "Összes hibakeresési és megoldási útmutató"}
        </Link>
      </Container>
      <Section
        heading="h1"
        eyebrow={item.category}
        title={item.title}
        description={item.summary}
      >
        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <article className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {en ? "The underlying problem" : "Mi a valódi probléma?"}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {item.problem}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {en ? "Common mistakes" : "Tipikus hibák"}
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
                {item.mistakes.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {en ? "A practical approach" : "Javasolt megoldási menet"}
              </h2>
              <ol className="mt-6 space-y-4">
                {item.steps.map((text, i) => (
                  <li
                    key={text}
                    className="flex gap-4 rounded-xl border border-slate-200 p-5"
                  >
                    <span className="font-mono text-sm text-blue-600">
                      0{i + 1}
                    </span>
                    <span className="text-sm leading-7 text-slate-600">
                      {text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {en
                  ? "How to check the result"
                  : "Hogyan ellenőrizd az eredményt?"}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {item.check}
              </p>
            </div>
          </article>
          <aside className="rounded-3xl bg-[#10192b] p-7 sm:p-9">
            <p className="text-[10px] font-bold tracking-widest text-[#c6f36b] uppercase">
              {en ? "Connected project" : "Kapcsolódó saját projekt"}
            </p>
            <h2 className="mt-5 text-3xl font-semibold text-white">
              {item.project}
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#bec9dd]">
              {item.evidence}
            </p>
            <Link
              href={item.href}
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#c6f36b] px-5 py-3 text-sm font-bold text-[#111827]"
            >
              {en ? "Explore the project →" : "Megnézem a projektet →"}
            </Link>
            <p className="mt-6 text-xs leading-6 text-[#94a3b8]">
              {en
                ? "A practical guide based on project capabilities, not a measured customer success story."
                : "Gyakorlati útmutató a projekt képességei alapján, nem mért ügyféleredményeket közlő esettanulmány."}
            </p>
          </aside>
        </div>
        <div className="mt-14 rounded-2xl border border-slate-200 p-7">
          <h2 className="text-xl font-bold text-slate-900">
            {en ? "Does this sound familiar?" : "Ismerős a helyzet?"}
          </h2>
          <Link
            href="/contact"
            className="mt-4 inline-flex min-h-11 items-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white"
          >
            {en ? "Let's discuss your situation" : "Nézzük meg a te esetedet"}
          </Link>
        </div>
      </Section>
    </>
  );
}
