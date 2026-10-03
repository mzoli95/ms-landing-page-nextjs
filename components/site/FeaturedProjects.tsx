import Link from "next/link";
import { ArrowRight, PawPrint, Plus, Utensils } from "lucide-react";
import type { Lang } from "@/components/lib/i18n";
import { getLocalDemos } from "@/components/lib/local-demos";
import { getProjects } from "@/components/lib/projects";
import { Container } from "@/components/ui/Container";
import { ToyzumiDemo } from "./ToyzumiDemo";
import { PortfolioScreenshotSlot } from "./PortfolioScreenshotSlot";
import { getProjectExample } from "@/components/lib/project-examples";
import { ProjectEngineering } from "./ProjectEngineering";
import styles from "./PortfolioShowcase.module.css";

export function FeaturedProjects({ lang }: { lang: Lang }) {
  const en = lang === "en";
  const demos = getLocalDemos(lang);
  const grooming = demos.find((demo) => demo.id === "pet-grooming")!;
  const menutivo = getProjects(lang).find(
    (project) => project.slug === "menutivo",
  )!;
  const localStatus = en ? "Local demo" : "Helyi demó";
  const applications = [
    {
      id: menutivo.slug,
      name: menutivo.name,
      category: menutivo.category,
      status: menutivo.status,
      image: "/portfolio/menutivo/03-kitchen-board.png",
      screen: en ? "Kitchen order board" : "Konyhai rendeléskezelő",
      stack: menutivo.stack,
      href: "/portfolio/menutivo",
      Icon: Utensils,
      tone: styles.restaurant,
      fit: "cover" as const,
    },
    {
      id: grooming.id,
      name: grooming.name,
      category: grooming.sector,
      status: localStatus,
      image: grooming.previewImage,
      screen: en ? "Appointment booking" : "Időpontfoglalás",
      stack: ["React", "TypeScript", "Node.js", "SQLite"],
      href: `/portfolio/demok#${grooming.id}`,
      Icon: PawPrint,
      tone: styles.grooming,
      fit: "contain" as const,
    },
  ];
  return (
    <div id="kiemelt-projektek" className="case-anchor">
      <section
        className={styles.flagshipSection}
        aria-labelledby="toyzumi-feature-title"
      >
        <Container>
          <ToyzumiDemo lang={lang} featured />
          <div className={styles.engineeringStrip}>
            <ProjectEngineering
              id="toyzumi"
              lang={lang}
              presentation="inline"
            />
          </div>
        </Container>
      </section>
      <section className={styles.section} aria-labelledby="selected-apps-title">
        <Container>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>
                {en
                  ? "02–03 / Selected applications"
                  : "02–03 / Kiemelt alkalmazások"}
              </p>
              <h2 id="selected-apps-title" className={styles.heading}>
                {en ? "Built for everyday work." : "A mindennapi munkához."}
              </h2>
            </div>
            <p className={styles.sectionAside}>
              {en
                ? "Restaurant orders and appointment booking, with clear workflows."
                : "Éttermi rendelések és időpontfoglalások, átlátható folyamatokkal."}
            </p>
          </div>
          <div className={styles.pair} data-secondary-projects>
            {applications.map((project, index) => (
              <article
                key={project.id}
                id={`featured-${project.id}`}
                className={`case-anchor ${styles.projectCard} ${project.tone}`}
              >
                <div className={styles.cardTop}>
                  <span>
                    <b className={styles.projectNumber}>0{index + 2}</b>
                    <project.Icon size={15} aria-hidden="true" />
                    {project.category}
                  </span>
                  <span>
                    <i className={styles.statusDot} aria-hidden="true" />
                    {project.status}
                  </span>
                </div>
                <div className={styles.screenStage}>
                  <div className={styles.screenFrame}>
                    <PortfolioScreenshotSlot
                      lang={lang}
                      filename={project.id + "-preview.jpg"}
                      imagePath={project.image}
                      label={project.name + " · " + project.screen}
                      fit={project.fit}
                      objectPosition={
                        project.id === "menutivo" ? "center" : "top"
                      }
                      className="aspect-[16/10]"
                      presentation="embedded"
                    />
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{project.name}</h3>
                  <p className={styles.cardDescription}>
                    {getProjectExample(project.id, lang).solution}
                  </p>
                  <ul
                    className={styles.tags}
                    aria-label={en ? "Main technologies" : "Fő technológiák"}
                  >
                    {project.stack.map((tech) => (
                      <li key={tech} className={styles.tag}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <details className={styles.engineering}>
                  <summary>
                    {en
                      ? "Behind the implementation"
                      : "A megvalósítás részletei"}
                    <Plus size={16} aria-hidden="true" />
                  </summary>
                  <ProjectEngineering id={project.id} lang={lang} compact />
                </details>
                <Link href={project.href} className={styles.cardAction}>
                  {en
                    ? "Screenshots and project walkthrough"
                    : "Képek és projektbemutató"}
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <p className={styles.footnote}>
            {en
              ? "Independent projects with sample data. Click a screenshot to enlarge it."
              : "Saját fejlesztések, mintaadatokkal. A képernyőképek kattintással nagyíthatók."}
          </p>
        </Container>
      </section>
    </div>
  );
}
