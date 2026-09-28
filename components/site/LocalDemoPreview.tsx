import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getLocalDemos } from "@/components/lib/local-demos";
import type { Lang } from "@/components/lib/i18n";

export function LocalDemoPreview({ lang }: { lang: Lang }) {
  const en = lang === "en";
  return (
    <section
      className="border-b border-slate-200 py-14 sm:py-20"
      aria-labelledby="local-demo-preview-title"
    >
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              {en ? "3 examples · 7 local demos" : "3 példa · 7 helyi demó"}
            </p>
            <h2
              id="local-demo-preview-title"
              className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              {en
                ? "What could this look like for you?"
                : "Nálad hogyan működhetne?"}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {en
                ? "A roadside breakdown, a document awaiting approval or a quote to prepare. Three examples from the seven-app collection, ready to be tailored to a business."
                : "Lerobbant autó, jóváhagyásra váró irat vagy elkészítendő árajánlat. Három példa a hét alkalmazásból álló gyűjteményből, cégenként alakítható megjelenéssel."}
            </p>
          </div>
          <Link
            href="/portfolio/demok"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300"
          >
            {en ? "Explore the demos" : "Megnézem a demókat"}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {getLocalDemos(lang)
            .filter((d) =>
              [
                "roadside-rescue",
                "document-management",
                "trade-estimator",
              ].includes(d.id),
            )
            .reverse()
            .map((demo) => (
              <Link
                key={demo.id}
                href={`/portfolio/demok#${demo.id}`}
                className="group min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-blue-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 bg-slate-100">
                  <Image
                    src={
                      demo.coverImage ?? `/images/demos/${demo.id}-landing.jpg`
                    }
                    alt={
                      en
                        ? `${demo.name} website preview`
                        : `${demo.name} weboldalának előnézete`
                    }
                    fill
                    sizes="(min-width: 1280px) 360px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover object-top transition duration-300 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold tracking-wide text-slate-500">
                    {demo.sector}
                  </p>
                  <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-900">
                    {demo.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {demo.headline}
                  </p>
                  <span className="mt-4 inline-flex min-h-7 items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
                    {en ? "View screenshots" : "Képes bemutató"}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
        </div>
        <p className="mt-5 text-xs leading-6 text-slate-500">
          {en
            ? "Independent demo projects with fictional businesses and sample data. Personal walkthroughs are available by arrangement."
            : "Saját demóprojektek kitalált vállalkozásokkal és mintaadatokkal. Működés közben egyeztetett bemutatón nézheted meg őket."}
        </p>
      </Container>
    </section>
  );
}
