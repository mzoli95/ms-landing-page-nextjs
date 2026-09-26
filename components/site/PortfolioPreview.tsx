import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { Lang } from "@/components/lib/i18n";
import { getProjects } from "@/components/lib/projects";

export function PortfolioPreview({ lang }: { lang: Lang }) {
  const en = lang === "en";
  const projects = getProjects(lang);
  const previews = [
    {
      slug: "toyzumi",
      image: "00-portfolio-cover.png",
      text: en ? "A webshop for collectors" : "Webshop gyűjtőknek",
    },
    {
      slug: "menutivo",
      image: "01-discover-v2.png",
      text: en
        ? "Ordering around a shared table"
        : "Rendelés egy közös asztalnál",
    },
    {
      slug: "molnar-diagnostic",
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
      className="case-anchor border-y border-slate-200 bg-slate-50 py-14 sm:py-20"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              {en
                ? "Independent projects · demos"
                : "Saját fejlesztések · demók"}
            </p>
            <h2
              id="portfolio-preview-title"
              className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              {en ? "See what I build." : "Nézd meg, mit készítek."}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {en
                ? "Explore ToyZumi live, or take a closer look at Menutivo and Molnár Diagnostic through their demo walkthroughs."
                : "Próbáld ki a ToyZumit élőben, vagy nézz bele a Menutivo és a Molnár Diagnostic működésébe a képes demókon keresztül."}
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex min-h-11 shrink-0 items-center gap-3 text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300"
          >
            {en ? "Full portfolio" : "Teljes portfólió"}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-9 grid gap-6 lg:grid-cols-3">
          {previews.map((preview) => {
            const project = projects.find((p) => p.slug === preview.slug)!;
            const live = project.slug === "toyzumi";
            const href = live
              ? "https://staging.toyzumi.hu/"
              : "/portfolio/" + project.slug;
            const label = live
              ? en
                ? "Open live demo"
                : "Élő demó megnyitása"
              : en
                ? "Explore the demo"
                : "Demó bemutatása";
            return (
              <article
                key={project.slug}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-blue-400 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
              >
                <a
                  href={href}
                  target={live ? "_blank" : undefined}
                  rel={live ? "noopener noreferrer" : undefined}
                  aria-label={
                    project.name +
                    " – " +
                    label +
                    (live ? (en ? " (new tab)" : " (új fül)") : "")
                  }
                  className="relative block aspect-[16/10] overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-950"
                >
                  <Image
                    src={"/portfolio/" + project.slug + "/" + preview.image}
                    alt={
                      en
                        ? project.name + " application preview"
                        : project.name + " alkalmazáselőnézet"
                    }
                    fill
                    sizes="(min-width: 1280px) 352px, (min-width: 1024px) 30vw, (min-width: 640px) 90vw, 100vw"
                    className={
                      "transition duration-300 group-hover:scale-[1.02] " +
                      (project.slug === "molnar-diagnostic"
                        ? "object-contain p-3"
                        : "object-cover object-top")
                    }
                  />
                </a>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-300">
                    {live
                      ? en
                        ? "Live demo · staging"
                        : "Élő demó · staging"
                      : en
                        ? "Screenshot demo"
                        : "Képes demó"}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {preview.text}
                  </p>
                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {en ? "Independent project" : "Saját fejlesztés"} ·{" "}
                    {project.status}
                  </p>
                  <div className="mt-auto flex flex-col pt-6">
                    <a
                      href={href}
                      target={live ? "_blank" : undefined}
                      rel={live ? "noopener noreferrer" : undefined}
                      className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      {label}
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      {live && (
                        <span className="sr-only">
                          {en ? "(new tab)" : "(új fül)"}
                        </span>
                      )}
                    </a>
                    {live && (
                      <Link
                        href="/portfolio/toyzumi"
                        className="order-first mb-3 inline-flex min-h-11 items-center text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300"
                      >
                        {en
                          ? "Read the case study →"
                          : "Az esettanulmányt olvasom →"}
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
