import { Section } from "@/components/ui/Section";
import { PricingGrid } from "@/components/site/PricingGrid";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export const metadata = {
  title: "Árak",
};

export default async function PricingPage() {
  const lang = await getLangFromCookies();
  const t = getDictionary(lang);

  return (
    <Section
      eyebrow={t.pricingPage.eyebrow}
      title={t.pricingPage.title}
      description={t.pricingPage.description}
    >
      <PricingGrid lang={lang} />
    </Section>
  );
}
