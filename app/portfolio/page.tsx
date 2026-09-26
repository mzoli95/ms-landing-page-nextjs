import { localizedMetadata } from "@/components/lib/localized-metadata";
import { pageMetadata } from "@/components/lib/metadata";
import { getLangFromCookies } from "@/components/lib/i18n";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectGrid } from "@/components/site/ProjectGrid";
import { ToyzumiDemo } from "@/components/site/ToyzumiDemo";
import { CaseLinks } from "@/components/site/CaseLinks";
const hungarianMetadata = pageMetadata(
  "Portfólió – ToyZumi, Menutivo és Molnár Diagnostic",
  "Saját fejlesztésű rendszerek működés közben: keresletvezérelt webshop, éttermi QR-rendelés és Windows-diagnosztika. Problémák, megoldások és részletes projektbemutatók.",
  "/portfolio",
);
export default async function PortfolioPage() {
  const lang = await getLangFromCookies();
  const en = lang === "en";
  return (
    <>
      <section className="portfolio-hero relative overflow-hidden">
        <div aria-hidden="true" className="hero-grid absolute inset-0" />
        <Container className="relative py-16 sm:py-24">
          <p className="text-xs font-bold tracking-[0.2em] text-[#c6f36b] uppercase">
            {en
              ? "Selected work / independent development"
              : "Válogatott munkák / saját fejlesztés"}
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl leading-[1.05] font-semibold tracking-[-0.055em] text-[#f6f8fd] sm:text-7xl">
            {en ? "Every project starts" : "Minden projekt mögött"}
            <br />
            <span className="text-[#c6f36b]">
              {en ? "with a real question." : "egy valódi kérdés."}
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#bec9dd]">
            {en
              ? "What should we stock? How do we keep guests connected? Why is this computer slow? Explore the systems I build around these questions."
              : "Miből rendeljünk? Hogyan maradjon egyben az asztal rendelése? Mitől lassú a gép? Nézd meg, milyen rendszereket építek ezek köré."}
          </p>
        </Container>
      </section>
      <Section
        eyebrow={en ? "01 / Featured project" : "01 / Kiemelt projekt"}
        title={
          en ? "ToyZumi. More than a catalogue." : "ToyZumi. A katalóguson túl."
        }
        description={
          en
            ? "A collector-focused commerce platform with loyalty, demand signals and connected operations."
            : "Gyűjtőkre hangolt kereskedelmi platform, hűségprogrammal, keresleti jelzésekkel és összekapcsolt háttérfolyamatokkal."
        }
      >
        <ToyzumiDemo lang={lang} />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {(en
            ? [
                "Demand signals before procurement",
                "Loyalty tools for returning collectors",
                "Storefront and back office together",
              ]
            : [
                "Keresleti jelzések a beszerzés előtt",
                "Hűségprogram a visszatérő gyűjtőknek",
                "Vásárlói felület és back office együtt",
              ]
          ).map((text) => (
            <p
              key={text}
              className="rounded-xl border border-slate-200 p-5 text-sm font-semibold text-slate-900"
            >
              {text}
            </p>
          ))}
        </div>
      </Section>
      <Section
        eyebrow={en ? "02–03 / More projects" : "02–03 / További projektek"}
        title={
          en
            ? "Different worlds. The same curiosity."
            : "Más terület. Ugyanaz a kíváncsiság."
        }
        description={
          en
            ? "Restaurant operations and evidence-based diagnostics, with clearly stated development status."
            : "Éttermi működés és mérésre épülő diagnosztika, a jelenlegi fejlesztési állapot bemutatásával."
        }
        className="bg-slate-50"
      >
        <ProjectGrid lang={lang} includeToyzumi={false} />
      </Section>
      <Section
        eyebrow={en ? "How I think" : "Így gondolkodom"}
        title={
          en ? "From a symptom to a solution." : "A tünettől a megoldásig."
        }
      >
        <CaseLinks lang={lang} />
      </Section>
    </>
  );
}

export async function generateMetadata() {
  return localizedMetadata(hungarianMetadata, "/portfolio");
}
