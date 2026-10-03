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
    { href: "/portfolio#featured-pet-grooming", name: "Mancs Műhely" },
    {
      href: "/portfolio/demok",
      name: en ? "Demo apps" : "Demóalkalmazások",
    },
  ];
  return (
    <div className="border-b border-slate-200 bg-white">
      <Container className="flex min-w-0 items-center justify-between gap-3">
        <nav
          aria-label={en ? "Project pages" : "Projektoldalak"}
          className="flex min-w-0 gap-5 overflow-x-auto overscroll-x-contain sm:gap-6"
        >
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              aria-current={pathname === project.href ? "page" : undefined}
              className={`flex min-h-[52px] shrink-0 items-center border-b-2 px-1 text-xs font-medium ${pathname === project.href ? "border-[#4b75b3] text-slate-900 dark:border-[#9fc5ff]" : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900"}`}
            >
              {project.name}
            </Link>
          ))}
        </nav>
        <a
          href="https://staging.toyzumi.hu/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-11 shrink-0 items-center gap-2 px-1 text-xs font-medium text-slate-500 hover:underline lg:inline-flex"
        >
          {en ? "ToyZumi demo · new tab" : "ToyZumi demó · új fül"}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Container>
    </div>
  );
}
