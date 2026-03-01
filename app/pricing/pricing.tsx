import { Section } from "@/components/ui/Section";
import { PricingGrid } from "@/components/site/PricingGrid";

export const metadata = {
  title: "Árak",
};

export default function PricingPage() {
  return (
    <Section
      eyebrow="Árak"
      title="Átlátható csomagok"
      description="A cél: gyors döntés és gyors eredmény. Pár kérdés után pontos ajánlatot adok."
    >
      <PricingGrid />
    </Section>
  );
}
