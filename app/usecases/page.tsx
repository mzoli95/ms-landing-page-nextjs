import { Section } from "@/components/ui/Section";
import { UseCases } from "@/components/site/UseCases";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export const metadata = {
  title: "Gyakorlati példák",
  description:
    "Valós vállalkozói és magán felhasználói helyzetek, probléma-megoldás-eredmény bontásban.",
};

export default async function UseCasesPage() {
  const lang = await getLangFromCookies();
  const t = getDictionary(lang);

  return (
    <Section
      eyebrow={t.home.useCases.eyebrow}
      title={
        lang === "en"
          ? "Detailed practical scenarios"
          : "Részletes gyakorlati példák"
      }
      description={
        lang === "en"
          ? "Real business and private-user situations, shown in problem-solution-impact format."
          : "Valós vállalkozói és magán felhasználói helyzetek, probléma-megoldás-eredmény bontásban."
      }
    >
      <UseCases lang={lang} mode="full" />
    </Section>
  );
}
