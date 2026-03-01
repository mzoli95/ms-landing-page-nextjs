import { Section } from "@/components/ui/Section";
import { ServicesPreview } from "@/components/site/ServicesPreview";

export const metadata = {
  title: "Szolgáltatások",
};

export default function ServicesPage() {
  return (
    <Section
      eyebrow="Szolgáltatások"
      title="Amit a leggyakrabban építek KKV-knak"
      description="Belső rendszerek, automatizálás, adatbázis és riportok – plusz kiegészítő PC szerviz."
    >
      <ServicesPreview />
    </Section>
  );
}
