import { Section } from "@/components/ui/Section";
import { ServicesPreview } from "@/components/site/ServicesPreview";
import { SeoContentHub } from "@/components/site/SeoContentHub";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export const metadata = {
  title: "Szolgáltatások",
  description:
    "Automatizálás, belső rendszerek, webes eszközök, adat-összefoglalók és PC segítség Siófokon, Somogyban és országos online együttműködéssel.",
  keywords: [
    "siófok webfejlesztés",
    "siófoki programozó",
    "somogy megye fejlesztő",
    "siófok gépszerelő",
    "automatizálás kkv",
    "belső rendszer fejlesztés",
    "riport dashboard",
  ],
};

export default async function ServicesPage() {
  const lang = await getLangFromCookies();
  const t = getDictionary(lang);

  return (
    <>
      <Section
        eyebrow={t.servicesPage.eyebrow}
        title={t.servicesPage.title}
        description={t.servicesPage.description}
      >
        <div className="mb-8 grid gap-3 md:grid-cols-3">
          {t.servicesPage.quickPoints.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-600"
            >
              {item}
            </div>
          ))}
        </div>

        <ServicesPreview lang={lang} />
      </Section>

      {/* <Section
        eyebrow={lang === "en" ? "More detail" : "Részletes tartalom"}
        title={
          lang === "en"
            ? "Detailed service pages and useful articles"
            : "Részletes szolgáltatási oldalak és hasznos cikkek"
        }
        description={
          lang === "en"
            ? "The main topics have dedicated pages, so people can find the right entry point more easily from search or internal links."
            : "A fontos témák külön oldalt kaptak, így a látogatók és a keresőből érkezők is könnyebben megtalálják a nekik való irányt."
        }
        className="bg-slate-50"
      >
        <SeoContentHub lang={lang} />
      </Section> */}
    </>
  );
}
