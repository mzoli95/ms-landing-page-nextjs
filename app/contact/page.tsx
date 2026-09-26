import { localizedMetadata } from "@/components/lib/localized-metadata";
import { contactTopics } from "@/components/lib/contact-topics";
import { pageMetadata } from "@/components/lib/metadata";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { Card } from "@/components/ui/Card";
import { flags, site } from "@/components/lib/site";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

const hungarianMetadata = {
  ...pageMetadata(
    "Kapcsolat",
    "Írj egyedi szoftver, weboldal, Excel-automatizálás, kimutatás vagy PC-s segítség kapcsán. KKV-knak és magánszemélyeknek; díjmentes első egyeztetés.",
    "/contact",
  ),
  alternates: { canonical: "/contact" },
  title: "Kapcsolat",
  description:
    "Írj egyedi szoftver, weboldal, Excel-automatizálás, kimutatás vagy PC-s segítség kapcsán. KKV-knak és magánszemélyeknek; díjmentes első egyeztetés.",
  keywords: [
    "kapcsolat molnár systems",
    "egyedi rendszer kapcsolat",
    "automatizálás kapcsolat",
    "webfejlesztés kapcsolat",
  ],
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const requestedTopic = (await searchParams).topic;
  const initialTopic = contactTopics.some((item) => item.id === requestedTopic)
    ? requestedTopic
    : "";
  const lang = await getLangFromCookies();
  const t = getDictionary(lang);

  return (
    <Section
      heading="h1"
      eyebrow={t.contactPage.eyebrow}
      title={t.contactPage.title}
      description={t.contactPage.description}
    >
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          <ContactForm lang={lang} initialTopic={initialTopic} />
        </div>

        <div className="space-y-5">
          <Card className="p-6">
            <div className="text-sm font-extrabold text-slate-900">
              {t.contactPage.helpTitle}
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {t.contactPage.helpItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-extrabold text-slate-900">
              {t.contactPage.contactDetails}
            </div>
            <div className="mt-3 space-y-3 text-sm text-slate-600">
              <div>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
                >
                  {site.email}
                </a>{" "}
              </div>

              {flags.showPhone && (
                <div>
                  <span className="font-semibold text-slate-900">
                    <a
                      href={`tel:${site.phone.replace(/\s+/g, "")}`}
                      className="underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
                    >
                      {site.phone}
                    </a>{" "}
                  </span>{" "}
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

          <Card className="p-6">
            <div className="text-sm font-extrabold text-slate-900">
              {t.contactPage.responseTitle}
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {t.contactPage.responseText}
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}

export async function generateMetadata() {
  return localizedMetadata(hungarianMetadata, "/contact");
}
