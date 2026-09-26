import { pageMetadata } from "@/components/lib/metadata";
import { Section } from "@/components/ui/Section";
import { PricingGrid } from "@/components/site/PricingGrid";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export const metadata = {
  ...pageMetadata(
    "Árak",
    "Egyedi szoftverfejlesztés, weboldalak és automatizálás induló díjai magánszemélyeknek és cégeknek. Kiegészítő távsegítség és alapellenőrzés 5 000 Ft-tól.",
    "/pricing",
  ),
  alternates: { canonical: "/pricing" },
  title: "Árak",
  description:
    "Egyedi szoftverfejlesztés, weboldalak és automatizálás induló díjai magánszemélyeknek és cégeknek. Kiegészítő távsegítség és alapellenőrzés 5 000 Ft-tól.",
};

export default async function PricingPage() {
  const lang = await getLangFromCookies();
  const t = getDictionary(lang);

  return (
    <Section
      heading="h1"
      eyebrow={t.pricingPage.eyebrow}
      title={
        lang === "en"
          ? "Starting fees, with a clear scope"
          : "Induló díjak, meghatározott tartalommal"
      }
      description={
        lang === "en"
          ? "Custom development, websites and automation, from small tasks to ongoing support. PC and device support fees are listed below."
          : "Egyedi fejlesztés, weboldalak és automatizálás, kisebb feladattól a folyamatos támogatásig. Lejjebb a kiegészítő PC-s és műszaki segítség díjait is megtalálod."
      }
    >
      <PricingGrid lang={lang} />
    </Section>
  );
}
