import { localizedMetadata } from "@/components/lib/localized-metadata";
import { Section } from "@/components/ui/Section";
import { CaseLinks } from "@/components/site/CaseLinks";
import { getLangFromCookies } from "@/components/lib/i18n";
import { pageMetadata } from "@/components/lib/metadata";
const hungarianMetadata = pageMetadata(
  "Tipikus hibák és megoldási útmutatók",
  "Készlettervezés, éttermi működés, számítógépes hibakeresés, időpontfoglalás és árkalkuláció: gyakori problémák, javasolt lépések és kapcsolódó projektek.",
  "/usecases",
);
export default async function UseCasesPage() {
  const lang = await getLangFromCookies();
  const en = lang === "en";
  return (
    <Section
      heading="h1"
      eyebrow={en ? "Problems & solutions" : "Hibák és megoldások"}
      title={
        en
          ? "First understand it. Then solve it."
          : "Előbb értsük meg. Aztán oldjuk meg."
      }
      description={
        en
          ? "Practical guides: the underlying issue, common mistakes, suggested steps and ways to verify the result. Based on my own projects, with their current limits."
          : "Gyakorlati útmutatók: a valódi probléma, a tipikus tévutak, a javasolt lépések és az eredmény ellenőrzése. Saját projektekhez kapcsolva, a jelenlegi korlátokkal együtt."
      }
    >
      <CaseLinks lang={lang} />
    </Section>
  );
}

export async function generateMetadata() {
  return localizedMetadata(hungarianMetadata, "/usecases");
}
