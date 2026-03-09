import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/ui/Section";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { ServicesPreview } from "@/components/site/ServicesPreview";
import { PricingGrid } from "@/components/site/PricingGrid";
import { Steps } from "@/components/site/Steps";
import { UseCases } from "@/components/site/UseCases";
import { MiniCaseStudies } from "@/components/site/MiniCaseStudies";
import { ComingSoon } from "@/components/site/ComingSoon";
import { flags } from "@/components/lib/site";
import { PcServiceSection } from "@/components/site/PcServiceSection";
import { FAQ } from "@/components/site/FAQ";
import { RiskReduction } from "@/components/site/RiskReduction";
import { SeoContentHub } from "@/components/site/SeoContentHub";
import { StickyMobileCta } from "@/components/site/StickyMobileCta";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function HomeContentSection({
  id,
  delayMs,
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  id: string;
  delayMs: number;
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollReveal id={id} delayMs={delayMs} className="scroll-mt-28">
      <Section
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={className}
      >
        {children}
      </Section>
    </ScrollReveal>
  );
}

export default async function HomePage() {
  const lang = await getLangFromCookies();
  const t = getDictionary(lang);

  if (flags.comingSoon) return <ComingSoon lang={lang} />;

  return (
    <>
      <ScrollReveal id="home" yOffset="sm" className="scroll-mt-28">
        <Hero lang={lang} />
      </ScrollReveal>

      {/* <ScrollReveal delayMs={24} className="scroll-mt-28">
        <Section
          eyebrow={lang === "en" ? "Before and After" : "Előtte és utána"}
          title={
            lang === "en"
              ? "Three quick examples of what gets better after digital cleanup"
              : "Három gyors példa arra, mi javul, ha rend kerül a működésbe"
          }
          description={
            lang === "en"
              ? "These are typical SME situations where manual admin and fragmented information start slowing the business down."
              : "Tipikus KKV-helyzetek, ahol a kézi adminisztráció és a szétszórt információ már konkrétan lassítja a céget."
          }
          className="bg-slate-50"
        >
          <MiniCaseStudies lang={lang} />
        </Section>
      </ScrollReveal> */}

      <HomeContentSection
        id="usecases-section"
        delayMs={40}
        eyebrow={t.home.useCases.eyebrow}
        title={t.home.useCases.title}
        description={t.home.useCases.description}
        className="bg-slate-50"
      >
        <UseCases lang={lang} mode="teaser" />
      </HomeContentSection>

      <HomeContentSection
        id="why-section"
        delayMs={60}
        eyebrow={t.home.why.eyebrow}
        title={t.home.why.title}
        description={t.home.why.description}
      >
        <FeatureGrid lang={lang} />
      </HomeContentSection>

      <HomeContentSection
        id="services-section"
        delayMs={80}
        eyebrow={t.home.services.eyebrow}
        title={t.home.services.title}
        description={t.home.services.description}
        className="bg-slate-50"
      >
        <ServicesPreview lang={lang} mode="teaser" />
      </HomeContentSection>

      <ScrollReveal
        id="pc-service-section"
        delayMs={120}
        className="scroll-mt-28"
      >
        <PcServiceSection lang={lang} />
      </ScrollReveal>

      <HomeContentSection
        id="process-section"
        delayMs={100}
        eyebrow={t.home.process.eyebrow}
        title={t.home.process.title}
        description={t.home.process.description}
      >
        <Steps lang={lang} />
      </HomeContentSection>

      {/* <HomeContentSection
        id="pricing-section"
        delayMs={140}
        eyebrow={t.home.pricing.eyebrow}
        title={t.home.pricing.title}
        description={t.home.pricing.description}
        className="bg-slate-50"
      >
        <PricingGrid lang={lang} mode="link-only" />
      </HomeContentSection> */}
      {/* 
      <ScrollReveal delayMs={150} className="scroll-mt-28">
        <Section
          eyebrow={
            lang === "en" ? "Knowledge base" : "Tudástár és külön oldalak"
          }
          title={
            lang === "en"
              ? "Detailed service pages and expert articles"
              : "Külön SEO-oldalak és szakmai tartalom"
          }
          description={
            lang === "en"
              ? "Dedicated landing pages and articles create more focused entry points for search and internal navigation."
              : "Az automatizálás, belső rendszerek, riportok és lokális PC szerviz témák külön oldalt kaptak, emellett szakmai cikkek is készültek a gyakori keresésekre."
          }
        >
          <SeoContentHub />
        </Section>
      </ScrollReveal> */}

      <ScrollReveal delayMs={160} className="scroll-mt-28">
        <Section
          eyebrow={lang === "en" ? "No Surprises" : "Nincs zsákbamacska"}
          title={
            lang === "en"
              ? "Clear commitments, clear delivery"
              : "Garancia, transzparens költségek, gyors reakció"
          }
          description={
            lang === "en"
              ? "No hidden costs and predictable delivery from the start."
              : "Előre tisztázott scope és árképzés, gyors válaszidővel."
          }
          className="bg-slate-50"
        >
          <RiskReduction lang={lang} />
        </Section>
      </ScrollReveal>

      <ScrollReveal delayMs={180} className="scroll-mt-28">
        <Section
          eyebrow={lang === "en" ? "FAQ" : "GYIK"}
          title={
            lang === "en" ? "Frequently asked questions" : "Gyakori kérdések"
          }
          description={
            lang === "en"
              ? "Quick answers before you decide."
              : "Gyors válaszok a döntés előtt."
          }
        >
          <FAQ lang={lang} />
        </Section>
      </ScrollReveal>

      <StickyMobileCta lang={lang} />
    </>
  );
}
