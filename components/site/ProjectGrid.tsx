import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProjects } from "@/components/lib/projects";
import { getLocalDemos } from "@/components/lib/local-demos";
import type { Lang } from "@/components/lib/i18n";

export function ProjectGrid({
  lang,
  includeToyzumi = true,
  includeDemos = false,
}: {
  lang: Lang;
  includeToyzumi?: boolean;
  includeDemos?: boolean;
}) {
  const en = lang === "en";
  const projects = getProjects(lang)
    .filter((project) => includeToyzumi || project.slug !== "toyzumi")
    .map((project) => ({
      id: project.slug,
      name: project.name,
      category: project.category,
      summary: project.summary,
      status: project.status,
      href: `/portfolio/${project.slug}`,
      image:
        project.slug === "menutivo"
          ? "/portfolio/menutivo/01-discover-v2.png"
          : project.slug === "molnar-diagnostic"
            ? "/portfolio/molnar-diagnostic/01-assessment.png"
            : "/portfolio/toyzumi/00-portfolio-cover.png",
      linkLabel: en ? "Explore the project" : "Projekt bemutatása",
    }));
  const demos = includeDemos
    ? getLocalDemos(lang).map((demo) => ({
        id: demo.id,
        name: demo.name,
        category: demo.sector,
        summary: demo.description,
        status: en ? "Local demo" : "Helyi demó",
        href: `/portfolio/demok#${demo.id}`,
        image: `/images/demos/${demo.id}-landing.jpg`,
        linkLabel: en ? "View screenshots" : "Képes bemutató",
      }))
    : [];

  return (
    <div className="grid gap-6 md:grid-cols-2" data-project-grid>
      {[...projects, ...demos].map((project) => (
        <Link
          key={project.id}
          href={project.href}
          className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-blue-400 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:hover:border-blue-500"
        >
          <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200 bg-slate-50">
            <Image
              src={project.image}
              alt={`${project.name} ${en ? "project screenshot" : "képernyőképe"}`}
              fill
              sizes="(min-width: 1280px) 550px, (min-width: 768px) 45vw, 90vw"
              className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="flex flex-1 flex-col p-6 sm:p-7">
            <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              {project.category}
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-1">
                {en ? "Independent project" : "Saját fejlesztés"}
              </span>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 dark:text-blue-300">
                {project.status}
              </span>
            </div>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              {project.name}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
              {project.summary}
            </p>
            <div className="mt-7 flex items-center justify-between gap-3 border-t border-slate-200 pt-5">
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                {project.linkLabel}
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-5 w-5 text-blue-700 transition group-hover:translate-x-1 dark:text-blue-400"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
