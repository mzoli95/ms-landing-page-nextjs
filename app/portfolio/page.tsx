import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { localizedMetadata } from "@/components/lib/localized-metadata";
import { pageMetadata } from "@/components/lib/metadata";
import { getLangFromCookies } from "@/components/lib/i18n";
import { Container } from "@/components/ui/Container";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { FeaturedProjects } from "@/components/site/FeaturedProjects";
import { featuredProjectIds } from "@/components/site/ProjectEngineering";
import styles from "@/components/site/PortfolioShowcase.module.css";

const hungarianMetadata = pageMetadata(
  "Portfólió – ToyZumi és saját fejlesztésű alkalmazások",
  "ToyZumi, Inventory, Documents, Menutivo és Mancs Műhely: saját fejlesztésű alkalmazások képernyőképekkel, technológiákkal és megoldott technikai feladatokkal.",
  "/portfolio",
);

export default async function PortfolioPage() {
  const lang = await getLangFromCookies();
  const en = lang === "en";
  return (
    <div className={styles.portfolio}>
      <section
        className={styles.introduction}
        aria-labelledby="portfolio-title"
      >
        <Container>
          <p className={styles.eyebrow}>
            {en
              ? "Developer portfolio / Molnár Systems"
              : "Fejlesztői portfólió / Molnár Systems"}
          </p>
          <div className={styles.introGrid}>
            <h1 id="portfolio-title" className={styles.heroTitle}>
              {en ? "Independent projects." : "Saját fejlesztések."}
              <span>
                {en ? "Thoughtful software." : "Átgondolt rendszerek."}
              </span>
            </h1>
            <div className={styles.heroAside}>
              <p>
                {en
                  ? ".NET-powered commerce, business web apps and Windows software. From the interface to the database."
                  : ".NET-alapú webshop, üzleti webalkalmazások és Windows-szoftverek. A felülettől az adatbázisig."}
              </p>
              <div className={styles.introLinks}>
                <Link href="#kiemelt-projektek">
                  <ArrowDown size={16} aria-hidden="true" />
                  {en ? "View projects" : "Projektek megtekintése"}
                </Link>
                <Link href="/about">
                  {en ? "About me" : "Rólam"}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FeaturedProjects lang={lang} />

      <section
        className={styles.archiveSection}
        aria-labelledby="more-projects-title"
      >
        <Container>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>
                {en ? "Project archive" : "További munkák"}
              </p>
              <h2 id="more-projects-title" className={styles.heading}>
                {en ? "More ideas, built." : "További ötletek, megvalósítva."}
              </h2>
            </div>
            <p className={styles.sectionAside}>
              {en
                ? "Diagnostics, roadside assistance and more business demos."
                : "Diagnosztika, autómentés és további üzleti demók."}
            </p>
          </div>
          <ProjectGrid
            lang={lang}
            includeDemos
            excludeIds={featuredProjectIds}
            compact
          />
          <p className={styles.footnote}>
            {en
              ? "Local demos use fictional businesses and sample data."
              : "A helyi demók kitalált vállalkozásokat és mintaadatokat használnak."}
          </p>
        </Container>
      </section>

      <section
        className={styles.contactSection}
        aria-labelledby="work-together-title"
      >
        <Container>
          <div className={styles.contactBanner}>
            <div>
              <p className={styles.eyebrow}>
                {en ? "The next project" : "A következő közös munka"}
              </p>
              <h2 id="work-together-title" className={styles.contactTitle}>
                {en ? "Let's build something together." : "Dolgozzunk együtt."}
              </h2>
              <p className={styles.intro}>
                {en
                  ? "Have a project in mind, or looking for a developer for your team? Let's talk."
                  : "Egyedi fejlesztést tervezel, vagy fejlesztőt keresel a csapatodba? Beszéljünk róla."}
              </p>
            </div>
            <div className={styles.contactActions}>
              <Link href="/contact?topic=development">
                <span>
                  <small>{en ? "For your business" : "Vállalkozásodnak"}</small>
                  {en
                    ? "Discuss a development project"
                    : "Fejlesztési megbízás"}
                </span>
                <ArrowRight size={21} aria-hidden="true" />
              </Link>
              <Link href="/contact?topic=career">
                <span>
                  <small>{en ? "For your team" : "Csapatodba"}</small>
                  {en
                    ? "Discuss a developer role"
                    : "Fejlesztői álláslehetőség"}
                </span>
                <ArrowRight size={21} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export async function generateMetadata() {
  return localizedMetadata(hungarianMetadata, "/portfolio");
}
