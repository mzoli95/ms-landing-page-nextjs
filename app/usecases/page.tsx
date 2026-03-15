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

  //TODO: impresszum, adatkezelés, cookie/analytics, opengraph social preview, pagespeed.web.dev, sitemap.xml, robots.txt, favicon, loading skeletons, error handling, accessibility audit, performance optimization, security headers, SEO optimization, analytics integration, contact form validation and spam protection, multilingual support, content management system (CMS) integration, user authentication and authorization, database integration for dynamic content, server-side rendering (SSR) or static site generation (SSG) for improved performance and SEO.
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
