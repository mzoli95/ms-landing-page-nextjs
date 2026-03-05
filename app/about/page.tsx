import { Section } from "@/components/ui/Section";
import { LazyAboutSection } from "@/components/site/LazyPageSections";
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
      <LazyAboutSection lang={lang} />
    </Section>
  );
}
