import { Section } from "@/components/ui/Section";
import { AboutSection } from "@/components/site/AboutSection";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export const metadata = {
  title: "Rólam",
  description:
    "Mérnökinformatikus, aki szenvedélyesen oldja meg a vállalkozások digitális problémáit. Ismerj meg közelebbről.",
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
      <AboutSection lang={lang} />
    </Section>
  );
}
