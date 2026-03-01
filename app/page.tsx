import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/ui/Section";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { ServicesPreview } from "@/components/site/ServicesPreview";
import { PricingGrid } from "@/components/site/PricingGrid";
import { Steps } from "@/components/site/Steps";
import { FAQ } from "@/components/site/FAQ";
import { UseCases } from "@/components/site/UseCases";
import { ComingSoon } from "@/components/site/ComingSoon";
import { flags } from "@/components/lib/site";

export default function HomePage() {
  if (flags.comingSoon) return <ComingSoon />;

  return (
    <>
      <Hero />
      <Section
        eyebrow="Miért működik?"
        title="Kevesebb kézi munka. Kevesebb hiba. Több átláthatóság."
        description="A cél nem az, hogy „készüljön valami”, hanem hogy a céged gyorsabban és nyugodtabban működjön."
      >
        <FeatureGrid />
      </Section>
      <Section
        eyebrow="Így néz ki a gyakorlatban"
        title="Tipikus problémák → gyors, működő megoldások"
        description="Név nélkül, de valós helyzetek alapján: rövid indulás, tiszta folyamat, mérhető eredmény."
        className="bg-slate-50"
      >
        <UseCases />
      </Section>
      <Section
        eyebrow="Szolgáltatások"
        title="Belső appok és automatizálás – a cégedre szabva"
        description="Nem kell mindent egyszerre. Kezdjük egy gyorsnyereséggel, és építjük tovább modulárisan."
        className="bg-slate-50"
      >
        <ServicesPreview />
      </Section>

      <Section
        eyebrow="Hogyan dolgozunk?"
        title="Átlátható folyamat, heti kis szállítások"
        description="Így tudsz heti 10–12 órával is szépen építkezni: rövid egyeztetés, gyors prototípus, stabil átadás."
      >
        <Steps />
      </Section>

      <Section
        eyebrow="Árak"
        title="Csomagok, hogy könnyű legyen dönteni"
        description="Fix keretek, tiszta elvárások. Irányárak: felmérés után pontosítjuk."
        className="bg-slate-50"
      >
        <PricingGrid />
      </Section>

      <Section
        eyebrow="GYIK"
        title="Gyakori kérdések"
        description="Ha maradt kérdésed, írj – gyorsan válaszolok."
      >
        <FAQ />
      </Section>
    </>
  );
}
