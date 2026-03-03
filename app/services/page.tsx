import { Section } from "@/components/ui/Section";
import { ServicesPreview } from "@/components/site/ServicesPreview";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export const metadata = {
  title: "Szolgáltatások",
};

export default async function ServicesPage() {
  const lang = await getLangFromCookies();
  const t = getDictionary(lang);

  return (
    <Section
      eyebrow={t.servicesPage.eyebrow}
      title={t.servicesPage.title}
      description={t.servicesPage.description}
    >
      <ServicesPreview lang={lang} />
    </Section>
  );
}
