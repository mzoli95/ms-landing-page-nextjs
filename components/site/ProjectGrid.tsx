import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProjects } from "@/components/lib/projects";
import { getLocalDemos } from "@/components/lib/local-demos";
import { getProjectExample } from "@/components/lib/project-examples";
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
    .filter((p) => includeToyzumi || p.slug !== "toyzumi")
    .map((p) => ({
      id: p.slug,
      name: p.name,
      category: p.category,
      status: p.status,
      href: `/portfolio/${p.slug}`,
      image:
        p.slug === "menutivo"
          ? "/portfolio/menutivo/01-discover-v2.png"
          : p.slug === "molnar-diagnostic"
            ? "/portfolio/molnar-diagnostic/01-assessment.png"
            : "/portfolio/toyzumi/00-portfolio-cover.png",
      featured: false,
    }));
  const demos = includeDemos
    ? getLocalDemos(lang).map((d) => ({
        id: d.id,
        name: d.name,
        category: d.sector,
        status: en ? "Working local demo" : "Kipróbálható helyi demó",
        href: `/portfolio/demok#${d.id}`,
        image: d.coverImage ?? `/images/demos/${d.id}-landing.jpg`,
        featured: ["roadside-rescue", "document-management"].includes(d.id),
      }))
    : [];
  const featured = [...demos.filter((p) => p.featured)].reverse();
  const entries = [
    ...featured,
    ...projects,
    ...demos.filter((p) => !p.featured),
  ];
  return (
    <div
      className="project-showcase grid gap-6 md:grid-cols-2"
      data-project-grid
    >
      {entries.map((project) => {
        const example = getProjectExample(project.id, lang);
        return (
          <article
            key={project.id}
            className={`project-example overflow-hidden rounded-2xl border border-slate-200 bg-white ${project.featured ? "md:col-span-2 lg:grid lg:grid-cols-[1.2fr_1fr]" : "flex flex-col"}`}
          >
            <Link
              href={project.href}
              tabIndex={-1}
              aria-hidden="true"
              className={`project-image relative block overflow-hidden border-b border-slate-200 bg-slate-50 ${project.featured ? "aspect-[16/10] lg:aspect-auto lg:border-r lg:border-b-0" : "aspect-[16/10]"}`}
            >
              <Image
                src={project.image}
                alt=""
                fill
                sizes={
                  project.featured
                    ? "(min-width: 1024px) 620px, 90vw"
                    : "(min-width: 768px) 550px, 90vw"
                }
                className={`${project.featured ? "object-contain" : "object-cover"} object-top transition duration-300 hover:scale-[1.02]`}
              />
            </Link>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                  {project.category}
                </p>
                <span className="project-status">{project.status}</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                <Link href={project.href} className="hover:underline">
                  {project.name}
                </Link>
              </h3>
              <dl className="mt-6 flex-1 space-y-5">
                <div>
                  <dt className="project-step-label">
                    {en ? "The problem" : "A probléma"}
                  </dt>
                  <dd className="mt-1.5 text-base font-semibold leading-7 text-slate-900">
                    {example.problem}
                  </dd>
                </div>
                <div>
                  <dt className="project-step-label project-solution-label">
                    {en ? "The solution" : "A megoldás"}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-7 text-slate-600">
                    {example.solution}
                  </dd>
                </div>
              </dl>
              <Link
                href={project.href}
                className="mt-7 inline-flex min-h-11 items-center justify-between gap-3 border-t border-slate-200 pt-4 text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300"
              >
                {en ? "See how it works" : "Megnézem, hogyan működik"}
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
