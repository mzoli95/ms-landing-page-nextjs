import { PortfolioPreview } from "@/components/site/PortfolioPreview";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/ui/Section";
import { ServicePaths } from "@/components/site/ServicePaths";
import { StarterRates } from "@/components/site/StarterRates";
import { Steps } from "@/components/site/Steps";
import { FAQ } from "@/components/site/FAQ";
import { ComingSoon } from "@/components/site/ComingSoon";
import { flags } from "@/components/lib/site";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";
import { pageMetadata } from "@/components/lib/metadata";

export const metadata = pageMetadata(
  "Egyedi szoftver és webfejlesztés",
  "Egyedi szoftver, weboldal, webalkalmazás és automatizálás magánszemélyeknek és cégeknek, országosan online. Személyesen Siófok és Somogy megye, távolabb egyeztetéssel.",
  "/",
);

export default async function HomePage() {
  const lang = await getLangFromCookies();
  const en = lang === "en";
  const t = getDictionary(lang);
  if (flags.comingSoon) return <ComingSoon lang={lang} />;
  return (
    <>
      <Hero lang={lang} />
      <Section
        eyebrow={en ? "What can I help with?" : "Miben tudok segíteni?"}
        title={
          en
            ? "From a small question to a custom project."
            : "Egy apró kérdéstől a saját projektedig."
        }
        description={
          en
            ? "Help for home, hobbies and work, with the process and starting fees explained on each page."
            : "Otthonra, hobbihoz és munkához. Minden témánál megtalálod a menetet és az induló díj tartalmát."
        }
      >
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">
              {en
                ? "For small businesses"
                : "KKV-knak és egyéni vállalkozóknak"}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {en
                ? "Merge monthly Excel exports, follow up quotes, see stock and costs in one report, or build an online service. We can start with a single recurring task."
                : "Havi Excel-exportok összefésülése, ajánlatok követése, készlet és költségek egy kimutatásban, vagy saját online szolgáltatás. Egyetlen visszatérő feladattal is elindulhatunk."}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">
              {en
                ? "For individuals and personal projects"
                : "Magánszemélyeknek és saját ötletekhez"}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {en
                ? "A portfolio, a hobby tracker, an expense summary or a small custom application. You do not need a business or a finished specification to get started."
                : "Portfólió, hobbigyűjtemény nyilvántartása, költségösszesítő vagy egy kis egyedi alkalmazás. Nem kell hozzá vállalkozás vagy kész műszaki terv."}
            </p>
          </div>
        </div>
        <ServicePaths lang={lang} />
      </Section>
      <Section
        eyebrow={t.home.pricing.eyebrow}
        title={
          en
            ? "Starting fees for development."
            : "Fejlesztési díjak, induláshoz"
        }
        description={
          en
            ? "Starting prices for a focused scope. Exact deliverables and external costs are agreed in writing."
            : "Induló árak, körülhatárolt feladatra. A pontos tartalmat és a külső költségeket írásban egyeztetjük."
        }
      >
        <StarterRates lang={lang} />
      </Section>
      <Section
        eyebrow={t.home.process.eyebrow}
        title={
          en
            ? "What happens after you get in touch?"
            : "Mi történik a megkeresés után?"
        }
        description={
          en
            ? "We agree the next step before starting work."
            : "A munka megkezdése előtt egyeztetjük a következő lépést."
        }
        className="bg-slate-50"
      >
        <Steps lang={lang} />
      </Section>
      <PortfolioPreview lang={lang} />
      <Section
        eyebrow={en ? "Before we start" : "Mielőtt belevágunk"}
        title={en ? "Your questions, answered." : "Gyakori kérdések."}
        description={
          en
            ? "Scope, timing and support, in plain language."
            : "Tartalom, határidők és támogatás, érthetően."
        }
      >
        <FAQ lang={lang} />
      </Section>
    </>
  );
}
