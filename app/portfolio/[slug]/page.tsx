import { ProjectScreens } from "@/components/site/ProjectScreens";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { getProjects } from "@/components/lib/projects";
import { getLangFromCookies } from "@/components/lib/i18n";
import { pageMetadata } from "@/components/lib/metadata";
import { site } from "@/components/lib/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjects("hu").find((p) => p.slug === slug);
  if (!project) return {};
  return pageMetadata(
    `${project.name} – ${project.category}`,
    project.summary,
    `/portfolio/${slug}`,
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const lang = await getLangFromCookies();
  const en = lang === "en";
  const project = getProjects(lang).find(
    (p) => p.slug === slug && p.slug !== "toyzumi",
  );
  if (!project) notFound();
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: `${site.url}/portfolio/${slug}`,
    inLanguage: lang,
    creator: { "@id": `${site.url}#org` },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data).replace(/</g, "\\u003c"),
        }}
      />
      <Container className="pt-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"
        >
          <ArrowLeft className="h-4 w-4" />
          {en ? "All projects" : "Összes projekt"}
        </Link>
      </Container>
      <Section
        heading="h1"
        eyebrow={project.category}
        title={project.name}
        description={project.summary}
      >
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl bg-[#101c32] p-7 sm:p-10">
            <p className="text-xs font-bold tracking-wider text-[#93c5fd] uppercase">
              {en ? "What the system does" : "A rendszer feladatai"}
            </p>
            <ul className="mt-6 divide-y divide-white/10">
              {project.features.map((feature, i) => (
                <li
                  key={feature}
                  className="flex items-center gap-4 py-5 text-lg font-medium text-white"
                >
                  <span className="text-xs font-mono text-[#94a3b8]">
                    0{i + 1}
                  </span>
                  {feature}
                  <Check className="ml-auto h-4 w-4 shrink-0 text-[#93c5fd]" />
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
            <h2 className="text-lg font-bold text-slate-900">
              {en ? "Project status" : "A projekt állapota"}
            </h2>
            <p className="mt-3 text-sm font-semibold text-blue-700 dark:text-blue-400">
              {project.status}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {project.scope}
            </p>
            <h2 className="mt-8 text-sm font-bold text-slate-900">
              {en ? "Technology" : "Technológia"}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
            {slug === "molnar-diagnostic" && (
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {en
                  ? "The desktop interface uses WPF and XAML, with application logic in C# on .NET 10. PowerShell and WMI support diagnostic data collection. HTML and JSON are report export formats."
                  : "Az asztali felület WPF-fel és XAML-lel készül, az alkalmazás logikája C# nyelven, .NET 10 alatt fut. A PowerShell és a WMI a diagnosztikai adatgyűjtést segíti. A HTML és a JSON a riportok exportformátuma."}
              </p>
            )}
          </aside>
        </div>
        <ProjectScreens slug={slug} lang={lang} />
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-slate-200 p-7">
          <p className="text-lg font-semibold text-slate-900">
            {en
              ? "Have a similar workflow to simplify?"
              : "Hasonló folyamatot egyszerűsítenél?"}
          </p>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center gap-3 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white"
          >
            {en ? "Let's discuss it" : "Beszéljünk róla"}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
