import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  Check,
  Monitor,
  Palette,
  Globe,
} from "lucide-react";
import { localizedMetadata } from "@/components/lib/localized-metadata";
import { pageMetadata } from "@/components/lib/metadata";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getLocalDemos } from "@/components/lib/local-demos";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LocalDemoScreens } from "@/components/site/LocalDemoScreens";

const hungarianMetadata = pageMetadata(
  "Demó webalkalmazások – foglalás és árkalkuláció",
  "Öt személyre szabható demó: időpontfoglalás, ügyfélnyilvántartás és SZIKRA szakipari árkalkulátor készletkezeléssel. Képes bemutatók és konkrét munkafolyamatok.",
  "/portfolio/demok",
);

export default async function LocalDemosPage() {
  const lang = await getLangFromCookies();
  const en = lang === "en";
  const demos = getLocalDemos(lang);
  return (
    <>
      <section className="portfolio-hero relative overflow-hidden">
        <div aria-hidden="true" className="hero-grid absolute inset-0" />
        <Container className="relative py-14 sm:py-20">
          <p className="text-xs font-bold tracking-[0.18em] text-[#c6f36b] uppercase">
            {en
              ? "Demo collection / local applications"
              : "Demóválogatás / helyi alkalmazások"}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-[#f6f8fd] sm:text-6xl">
            {en ? "Less scattered admin." : "Kevesebb szétszórt teendő."}
            <br />
            <span className="text-[#c6f36b]">
              {en ? "More time for your work." : "Több idő a munkádra."}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#bec9dd]">
            {en
              ? "A booking, a customer record or a site survey that becomes a quote. Five examples show how a web application can help with the day-to-day running of a business."
              : "Foglalás, ügyféladatlap vagy egy felmérésből készülő ajánlat. Öt példán mutatom meg, hogyan segíthet egy webalkalmazás a vállalkozás mindennapi működésében."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {demos.map((demo) => (
              <a
                key={demo.id}
                href={`#${demo.id}`}
                className="inline-flex min-h-11 items-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold text-[#f6f8fd] transition hover:bg-white/10"
              >
                {demo.sector}
                <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-sm leading-7 text-[#bec9dd]">
            {en
              ? "Screenshot walkthroughs of local demo apps, with fictional businesses, addresses and customers. These are not live customer websites. Request a walkthrough to see the full process in action."
              : "Helyben futó demóalkalmazások képes bemutatói, kitalált vállalkozásokkal, címekkel és ügyfelekkel. A teljes folyamatot egyeztetett bemutatón tudod kipróbálni; ezek még nem éles ügyféloldalak."}
          </p>
        </Container>
      </section>

      <Container>
        <div className="grid gap-5 border-b border-slate-200 py-9 md:grid-cols-3">
          {[
            {
              icon: Monitor,
              title: en ? "See the complete flow" : "Lásd a teljes folyamatot",
              text: en
                ? "Website and workflow screenshots for each demo: bookings, records, estimates and stock. Select a view below and click the image to enlarge it."
                : "Weboldal és munkafolyamatok képei: foglalás, nyilvántartás, kalkuláció és készlet. Válts az alábbi nézetek között, majd kattints a képre a nagyításhoz.",
            },
            {
              icon: Palette,
              title: en
                ? "Your brand, your structure"
                : "Saját arculat, saját felépítés",
              text: en
                ? "Colours, images, services and section order can change. A single landing page or a site with several pages can use the same core."
                : "Színek, képek, szolgáltatások és szekciósorrend is alakítható. Egyoldalas bemutatkozó és többoldalas webhely is épülhet az alapra.",
            },
            {
              icon: Globe,
              title: en
                ? "Local today, online when ready"
                : "Most helyben, később online",
              text: en
                ? "The core runs locally. A public launch needs hosting, a domain and production settings; email delivery needs a connected mail service."
                : "Az alap helyben működik. A nyilvános induláshoz tárhely, domain és éles beállítások kellenek; az e-mail-küldéshez levelezőszolgáltatás kapcsolható.",
            },
          ].map((item) => (
            <div key={item.title} className="min-w-0">
              <item.icon
                aria-hidden="true"
                className="h-5 w-5 text-blue-700 dark:text-blue-300"
              />
              <h2 className="mt-3 text-base font-bold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {demos.map((demo, index) => (
        <section
          key={demo.id}
          id={demo.id}
          aria-labelledby={`${demo.id}-title`}
          className={`case-anchor scroll-mt-28 border-b border-slate-200 py-12 sm:py-16 ${index % 2 ? "bg-slate-50" : ""}`}
        >
          <Container className="grid items-start gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div className="min-w-0 lg:pt-3">
              <p className="flex items-center gap-3 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: demo.accent }}
                />
                0{index + 1} / {demo.sector}
              </p>
              <h2
                id={`${demo.id}-title`}
                className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                {demo.name}
              </h2>
              <p className="mt-3 text-lg font-semibold leading-7 text-slate-900">
                {demo.headline}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {demo.description}
              </p>
              {demo.problem && demo.solution && (
                <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                  <p>
                    <strong className="text-slate-900">
                      {en ? "Problem: " : "Probléma: "}
                    </strong>
                    {demo.problem}
                  </p>
                  <p>
                    <strong className="text-slate-900">
                      {en ? "Solution: " : "Megoldás: "}
                    </strong>
                    {demo.solution}
                  </p>
                </div>
              )}
              <ul className="mt-5 space-y-3">
                {demo.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-blue-700 dark:text-blue-300"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                <p className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <BellRing
                    aria-hidden="true"
                    className="h-4 w-4 text-blue-700 dark:text-blue-300"
                  />
                  {en
                    ? "A useful nudge, at the right time"
                    : "Jelzés akkor, amikor számít"}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {demo.reminder}
                </p>
                {demo.id !== "pet-grooming" &&
                  demo.id !== "trade-estimator" && (
                    <p className="mt-3 text-xs leading-6 text-slate-500">
                      {en
                        ? "Emails are stored as local previews in this demo. Actual delivery can be enabled through SMTP; optional reminders require the guest's consent."
                        : "Az e-mailek ebben a demóban helyi előnézetként készülnek el. Valódi küldés SMTP-vel állítható be; a kérhető emlékeztetőkhöz a vendég hozzájárulása kell."}
                    </p>
                  )}
              </div>
              {demo.id === "trade-estimator" && (
                <p className="mt-4 text-xs leading-6 text-slate-500">
                  {en
                    ? "Fictional sample prices. Supplier links are references; prices are updated manually. PDF uses the browser print dialog. Estimates are not invoices. The app runs locally; this page presents its workflow."
                    : "Kitalált mintaárak. A beszállítói link referencia, az árak kézzel frissíthetők. PDF a böngésző nyomtatási ablakából készíthető. Az ajánlat nem számla. Az alkalmazás helyben fut; itt a munkafolyamatát mutatom be."}
                </p>
              )}
              <Link
                href="/contact?topic=development"
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300"
              >
                {en ? "Request a walkthrough" : "Bemutatót kérek"}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
            <LocalDemoScreens id={demo.id} name={demo.name} lang={lang} />
          </Container>
        </section>
      ))}

      <Section
        eyebrow={en ? "The next step" : "A következő lépés"}
        title={
          en
            ? "Start with your daily routine."
            : "Induljunk ki a te mindennapjaidból."
        }
        description={
          en
            ? "Tell me which example is closest to your business, what customers usually ask and what takes up time. We can use a demo as a starting point and agree the design, features and launch together."
            : "Írd meg, melyik példa áll közel hozzád, mit kérdeznek gyakran a vendégeid, és mi viszi el az idődet. A demóból kiindulva egyeztethetjük a megjelenést, a funkciókat és az indulást."
        }
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            {en
              ? "The demos use sample data and fictional test addresses. External maps need internet access. Screenshots keep the original Hungarian interface; captions follow your selected language."
              : "A demók mintaadatokat és kitalált tesztcímeket használnak. A külső térképhez internet kell. A képernyőképek magyar felületet mutatnak; a leírások a kiválasztott nyelven olvashatók."}
          </p>
          <Link
            href="/contact?topic=development"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            {en ? "Let's discuss my business" : "Beszéljünk a vállalkozásomról"}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}

export async function generateMetadata() {
  return localizedMetadata(hungarianMetadata, "/portfolio/demok");
}
