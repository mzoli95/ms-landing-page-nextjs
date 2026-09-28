"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { Lang } from "@/components/lib/i18n";

export function ProjectNavigation({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const en = lang === "en";
  const projects = [
    { href: "/portfolio", name: en ? "All projects" : "Összes projekt" },
    { href: "/portfolio/toyzumi", name: "ToyZumi" },
    { href: "/portfolio/menutivo", name: "Menutivo" },
    { href: "/portfolio/molnar-diagnostic", name: "Molnár Diagnostic" },
    {
      href: "/portfolio/demok",
      name: en ? "Demo apps" : "Demóalkalmazások",
    },
  ];
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Container className="flex flex-wrap items-center justify-between gap-3 py-3">
        <nav
          aria-label={en ? "Project pages" : "Projektoldalak"}
          className="flex flex-wrap gap-1"
        >
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              aria-current={pathname === project.href ? "page" : undefined}
              className={`rounded-lg px-3 py-3 text-sm font-semibold ${pathname === project.href ? "bg-blue-700 text-white" : "text-slate-600 hover:bg-white"}`}
            >
              {project.name}
            </Link>
          ))}
        </nav>
        <a
          href="https://staging.toyzumi.hu/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-blue-700 dark:text-blue-300"
        >
          {en ? "ToyZumi demo · new tab" : "ToyZumi demó · új fül"}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Container>
    </div>
  );
}
