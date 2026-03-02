import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { Card } from "@/components/ui/Card";
import { flags, site } from "@/components/lib/site";

export const metadata = {
  title: "Kapcsolat",
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Kapcsolat"
      title="Van egy ötleted vagy problémád?"
      description="Írd meg, mit szeretnél megvalósítani, és megnézzük, hogyan lehet belőle működő rendszer. Nincs kötelezettség."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        <Card className="p-6">
          <div className="text-sm font-extrabold text-slate-900">
            Elérhetőségek
          </div>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <div>
              <span className="font-semibold text-slate-900">Email:</span>{" "}
              {site.email}
            </div>
            {flags.showPhone && (
              <div>
                <span className="font-semibold text-slate-900">Telefon:</span>{" "}
                {site.phone}
              </div>
            )}
            <div>
              <span className="font-semibold text-slate-900">Terület:</span>{" "}
              {site.location}
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
