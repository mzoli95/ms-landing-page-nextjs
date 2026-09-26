import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { Lang } from "@/components/lib/i18n";

export function PortfolioPreview({ lang }: { lang: Lang }) {
  const en = lang === "en";
  const projects = [
    {
      slug: "toyzumi",
      name: "ToyZumi",
      image: "00-portfolio-cover.png",
      text: en ? "A webshop for collectors" : "Webshop gyűjtőknek",
    },
    {
      slug: "menutivo",
      name: "Menutivo",
      image: "01-discover-v2.png",
      text: en
        ? "Ordering around a shared table"
        : "Rendelés egy közös asztalnál",
    },
    {
      slug: "molnar-diagnostic",
      name: "Molnár Diagnostic",
      image: "01-assessment.png",
      text: en
        ? "Understanding a computer's condition"
        : "Egy számítógép állapotának megértése",
    },
  ];
  return (
    <section
      id="selected-work"
      aria-labelledby="portfolio-preview-title"
      className="case-anchor border-y border-slate-200 py-12 sm:py-16"
    >
      <Container className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            {en ? "A look at my work" : "Egy pillantás a munkáimba"}
          </p>
          <h2
            id="portfolio-preview-title"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-900"
          >
            {en ? "What am I building?" : "Min dolgozom?"}
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
            {en
              ? "My own projects give you a feel for my work. Explore the screens, decisions and current development status in the portfolio."
              : "A saját projektjeimen keresztül is megismerheted a munkámat. A képernyőket, a megoldások hátterét és a fejlesztés állapotát a portfólióban mutatom be."}
          </p>
          <Link
            href="/portfolio"
            className="mt-6 inline-flex min-h-11 items-center gap-3 rounded-lg text-sm font-semibold text-blue-700 hover:underline dark:text-blue-400"
          >
            {en ? "Explore the portfolio" : "Megnézem a portfóliót"}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="divide-y divide-slate-200">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group flex min-w-0 items-center gap-4 rounded-lg py-4 transition hover:bg-slate-50 sm:gap-5"
            >
              <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-950 sm:w-24">
                <Image
                  src={`/portfolio/${project.slug}/${project.image}`}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-slate-900">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  {project.text}
                </p>
              </div>
              <ArrowUpRight className="mr-2 h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
