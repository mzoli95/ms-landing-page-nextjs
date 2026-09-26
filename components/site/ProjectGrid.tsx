import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MonitorCog, ShoppingBag, Utensils } from "lucide-react";
import { getProjects } from "@/components/lib/projects";
import type { Lang } from "@/components/lib/i18n";

export function ProjectGrid({
  lang,
  includeToyzumi = true,
}: {
  lang: Lang;
  includeToyzumi?: boolean;
}) {
  const icons = {
    toyzumi: ShoppingBag,
    menutivo: Utensils,
    "molnar-diagnostic": MonitorCog,
  };
  const projects = getProjects(lang).filter(
    (p) => includeToyzumi || p.slug !== "toyzumi",
  );
  return (
    <div
      className={`grid gap-5 ${includeToyzumi ? "lg:grid-cols-3" : "md:grid-cols-2"}`}
    >
      {projects.map((project, index) => {
        const Icon = icons[project.slug as keyof typeof icons];
        return (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-400 hover:shadow-lg dark:hover:border-blue-500"
          >
            <div className="flex items-center justify-between">
              <Icon className="h-7 w-7 text-blue-700 dark:text-blue-400" />
              <span className="text-xs font-mono text-slate-500">
                0{index + (includeToyzumi ? 1 : 2)}
              </span>
            </div>
            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <Image
                src={
                  project.slug === "menutivo"
                    ? "/portfolio/menutivo/01-discover-v2.png"
                    : project.slug === "molnar-diagnostic"
                      ? "/portfolio/molnar-diagnostic/01-assessment.png"
                      : "/portfolio/toyzumi/00-portfolio-cover.png"
                }
                alt={
                  project.name +
                  (lang === "en"
                    ? " development screenshot"
                    : " fejlesztői képernyőkép")
                }
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-top transition group-hover:scale-[1.02]"
              />
            </div>
            <p className="mt-8 text-xs font-bold tracking-wider text-slate-500 uppercase">
              {project.category}
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              {project.name}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
              {project.summary}
            </p>
            <div className="mt-7 flex items-center justify-between gap-3 border-t border-slate-200 pt-5">
              <span className="text-xs text-slate-500">{project.status}</span>
              <ArrowUpRight className="h-5 w-5 text-blue-700 transition group-hover:translate-x-1 dark:text-blue-400" />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
