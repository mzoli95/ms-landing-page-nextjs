import { localizedMetadata } from "@/components/lib/localized-metadata";
import { pageMetadata } from "@/components/lib/metadata";
import { Section } from "@/components/ui/Section";
import { AboutSection } from "@/components/site/AboutSection";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

const hungarianMetadata = {
  ...pageMetadata(
    "Rólam",
    "Ismerd meg Zolit, a Molnár Systems mögött álló fejlesztőt. Egyedi belső rendszerek, automatizálás, adatkezelés és egyszerű, stabil digitális megoldások magánszemélyeknek és vállalkozásoknak.",
    "/about",
  ),
  alternates: { canonical: "/about" },
  title: "Rólam",
  description:
    "Ismerd meg Zolit, a Molnár Systems mögött álló fejlesztőt. Egyedi belső rendszerek, automatizálás, adatkezelés és egyszerű, stabil digitális megoldások magánszemélyeknek és vállalkozásoknak.",
};

export default async function AboutPage() {
  const lang = await getLangFromCookies();
  const t = getDictionary(lang);

  return (
    <Section
      heading="h1"
      eyebrow={t.aboutPage.eyebrow}
      title={t.aboutPage.title}
      description={t.aboutPage.description}
    >
      <p className="mb-8 text-sm font-medium text-slate-500">
        {t.aboutPage.locationLine}
      </p>

      <AboutSection lang={lang} />
    </Section>
  );
}

export async function generateMetadata() {
  return localizedMetadata(hungarianMetadata, "/about");
}
