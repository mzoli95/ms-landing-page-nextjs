import { Section } from "@/components/ui/Section";
import { LazyAboutSection } from "@/components/site/LazyPageSections";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export const metadata = {
  title: "Rólam | Molnár Systems",
  description:
    "Ismerd meg Zolit, a Molnár Systems mögött álló fejlesztőt. Egyedi belső rendszerek, automatizálás, adatkezelés és egyszerű, stabil digitális megoldások vállalkozásoknak.",
};

export default async function AboutPage() {
  const lang = await getLangFromCookies();
  const t = getDictionary(lang);

  return (
    <Section
      eyebrow={t.aboutPage.eyebrow}
      title={t.aboutPage.title}
      description={t.aboutPage.description}
    >
      <p className="mb-8 text-sm font-medium text-slate-500">
        {t.aboutPage.locationLine}
      </p>

      <LazyAboutSection lang={lang} />
    </Section>
  );
}
