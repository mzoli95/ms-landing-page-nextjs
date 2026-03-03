import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/ui/Section";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { ServicesPreview } from "@/components/site/ServicesPreview";
import { PricingGrid } from "@/components/site/PricingGrid";
import { Steps } from "@/components/site/Steps";
import { UseCases } from "@/components/site/UseCases";
import { ComingSoon } from "@/components/site/ComingSoon";
import { flags } from "@/components/lib/site";
import { PcServiceSection } from "@/components/site/PcServiceSection";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export default async function HomePage() {
  const lang = await getLangFromCookies();
  const t = getDictionary(lang);

  if (flags.comingSoon) return <ComingSoon lang={lang} />;

  return (
    <>
      <Hero lang={lang} />
      <Section
        eyebrow={t.home.why.eyebrow}
        title={t.home.why.title}
        description={t.home.why.description}
      >
        <FeatureGrid lang={lang} />
      </Section>
      <Section
        eyebrow={t.home.useCases.eyebrow}
        title={t.home.useCases.title}
        description={t.home.useCases.description}
        className="bg-slate-50"
      >
        <UseCases lang={lang} />
      </Section>
      <Section
        eyebrow={t.home.services.eyebrow}
        title={t.home.services.title}
        description={t.home.services.description}
        className="bg-slate-50"
      >
        <ServicesPreview lang={lang} />
      </Section>

      <Section
        eyebrow={t.home.process.eyebrow}
        title={t.home.process.title}
        description={t.home.process.description}
      >
        <Steps lang={lang} />
      </Section>
      <PcServiceSection lang={lang} />

      <Section
        eyebrow={t.home.pricing.eyebrow}
        title={t.home.pricing.title}
        description={t.home.pricing.description}
        className="bg-slate-50"
      >
        <PricingGrid lang={lang} />
      </Section>

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
