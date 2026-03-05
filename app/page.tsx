import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/ui/Section";
import { ComingSoon } from "@/components/site/ComingSoon";
import { flags } from "@/components/lib/site";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  LazyFeatureGrid,
  LazyPcServiceSection,
  LazyPricingGrid,
  LazyServicesPreview,
  LazySteps,
  LazyUseCases,
} from "@/components/site/LazySections";

export default async function HomePage() {
  const lang = await getLangFromCookies();
  const t = getDictionary(lang);

  if (flags.comingSoon) return <ComingSoon lang={lang} />;

  return (
    <>
      <ScrollReveal id="home" yOffset="sm" className="scroll-mt-28">
        <Hero lang={lang} />
      </ScrollReveal>

      <ScrollReveal id="why-section" delayMs={40} className="scroll-mt-28">
        <Section
          eyebrow={t.home.why.eyebrow}
          title={t.home.why.title}
          description={t.home.why.description}
        >
          <LazyFeatureGrid lang={lang} />
        </Section>
      </ScrollReveal>

      <ScrollReveal id="usecases-section" delayMs={60} className="scroll-mt-28">
        <Section
          eyebrow={t.home.useCases.eyebrow}
          title={t.home.useCases.title}
          description={t.home.useCases.description}
          className="bg-slate-50"
        >
          <LazyUseCases lang={lang} />
        </Section>
      </ScrollReveal>

      <ScrollReveal id="services-section" delayMs={80} className="scroll-mt-28">
        <Section
          eyebrow={t.home.services.eyebrow}
          title={t.home.services.title}
          description={t.home.services.description}
          className="bg-slate-50"
        >
          <LazyServicesPreview lang={lang} />
        </Section>
      </ScrollReveal>

      <ScrollReveal id="process-section" delayMs={100} className="scroll-mt-28">
        <Section
          eyebrow={t.home.process.eyebrow}
          title={t.home.process.title}
          description={t.home.process.description}
        >
          <LazySteps lang={lang} />
        </Section>
      </ScrollReveal>

      <ScrollReveal
        id="pc-service-section"
        delayMs={120}
        className="scroll-mt-28"
      >
        <LazyPcServiceSection lang={lang} />
      </ScrollReveal>

      <ScrollReveal id="pricing-section" delayMs={140} className="scroll-mt-28">
        <Section
          eyebrow={t.home.pricing.eyebrow}
          title={t.home.pricing.title}
          description={t.home.pricing.description}
          className="bg-slate-50"
        >
          <LazyPricingGrid lang={lang} />
        </Section>
      </ScrollReveal>

      {/* <Section
        eyebrow="GYIK"
        title="Gyakori kérdések"
        description="Ha maradt kérdésed, írj – gyorsan válaszolok."
      >
        <FAQ />
      </Section> */}
    </>
  );
}
