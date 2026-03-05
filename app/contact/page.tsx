import { Section } from "@/components/ui/Section";
import { LazyContactFormSection } from "@/components/site/LazyPageSections";
import { Card } from "@/components/ui/Card";
import { flags, site } from "@/components/lib/site";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export const metadata = {
  title: "Kapcsolat",
  description:
    "Kapcsolatfelvétel Siófok, Ságvár és Somogy megye területéről: webfejlesztés, programozás, automatizálás és számítógépes segítség.",
  keywords: [
    "siófok programozó kapcsolat",
    "somogy webfejlesztő kapcsolat",
    "ságvár fejlesztés",
  ],
};

export default async function ContactPage() {
  const lang = await getLangFromCookies();
  const t = getDictionary(lang);

  return (
    <Section
      eyebrow={t.contactPage.eyebrow}
      title={t.contactPage.title}
      description={t.contactPage.description}
    >
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LazyContactFormSection lang={lang} />
        </div>

        <Card className="p-6">
          <div className="text-sm font-extrabold text-slate-900">
            {t.contactPage.contactDetails}
          </div>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <div>
              <span className="font-semibold text-slate-900">Email:</span>{" "}
              {site.email}
            </div>
            {flags.showPhone && (
              <div>
                <span className="font-semibold text-slate-900">
                  {t.contactPage.phone}
                </span>{" "}
                {site.phone}
              </div>
            )}
            <div>
              <span className="font-semibold text-slate-900">
                {t.contactPage.coverage}
              </span>{" "}
              {t.contactPage.coverageValue}
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
