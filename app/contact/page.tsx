import { Section } from "@/components/ui/Section";
import { LazyContactFormSection } from "@/components/site/LazyPageSections";
import { Card } from "@/components/ui/Card";
import { flags, site } from "@/components/lib/site";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export const metadata = {
  title: "Kapcsolat | Molnár Systems",
  description:
    "Vedd fel a kapcsolatot a Molnár Systems-szel. Egyedi belső rendszerek, automatizálás, webes megoldások és digitális egyszerűsítés vállalkozásoknak.",
  keywords: [
    "kapcsolat molnár systems",
    "egyedi rendszer kapcsolat",
    "automatizálás kapcsolat",
    "webfejlesztés kapcsolat",
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
        <div className="space-y-5 lg:col-span-2">
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

          <LazyContactFormSection lang={lang} />
        </div>

        <div className="space-y-5">
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
