import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { Card } from "@/components/ui/Card";
import { site } from "@/components/lib/site";

export const metadata = {
  title: "Kapcsolat",
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Kapcsolat"
      title="Írj, és javaslok egy gyors megoldást"
      description="Ha leírod 3 mondatban a helyzetet, kapsz egy javaslatot: gyorsnyereség vagy rendszerépítés."
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
            <div>
              <span className="font-semibold text-slate-900">Telefon:</span>{" "}
              {site.phone}
            </div>
            <div>
              <span className="font-semibold text-slate-900">Terület:</span>{" "}
              {site.location}
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
            Tipp: írd le, hogy
            <ul className="mt-2 space-y-1">
              <li>• mi a probléma</li>
              <li>• mi lenne a cél</li>
              <li>• van-e határidő</li>
              <li>• kb. hány felhasználó</li>
            </ul>
          </div>
        </Card>
      </div>
    </Section>
  );
}
