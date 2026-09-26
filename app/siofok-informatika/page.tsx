import { localizedMetadata } from "@/components/lib/localized-metadata";
import { getLangFromCookies } from "@/components/lib/i18n";
import { pageMetadata } from "@/components/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { site } from "@/components/lib/site";

const hungarianMetadata: Metadata = {
  ...pageMetadata(
    "Informatikai segítség és programozó Siófok környékén",
    "Webfejlesztés, egyedi szoftver, adatbázis, automatizálás, PC-, nyomtató- és hálózati segítség elsősorban Siófokon és környékén, valamint Somogy megyében. Távolabbi kiszállás előzetes egyeztetéssel, online segítség országosan.",
    "/siofok-informatika",
  ),
  title: "Informatikai segítség és programozó Siófok környékén",
  description:
    "Webfejlesztés, egyedi szoftver, adatbázis, automatizálás, PC-, nyomtató- és hálózati segítség elsősorban Siófokon és környékén, valamint Somogy megyében. Távolabbi kiszállás előzetes egyeztetéssel, online segítség országosan.",
  alternates: { canonical: "/siofok-informatika" },
  keywords: [
    "programozó Siófok",
    "webfejlesztő Siófok",
    "informatikai segítség Siófok",
    "számítógép szerviz Siófok",
    "weboldal készítés Somogy megye",
    "egyedi szoftver fejlesztés Somogy",
    "adatbázis fejlesztés Siófok",
  ],
  openGraph: {
    title: "Informatikai és fejlesztési segítség Siófok környékén",
    description:
      "Személyes segítség Siófokon és környékén, Somogy megyében. Távolabbi kiszállás egyeztetéssel, távsegítség és fejlesztés országosan.",
    url: `${site.url}/siofok-informatika`,
    type: "website",
  },
};

const getGroups = (en: boolean) => [
  {
    title: en
      ? "Custom development and programming"
      : "Egyedi fejlesztés és programozás",
    text: en
      ? "Internal administration systems, small web applications, replacing manual Excel workflows, tracking quotes and jobs, and automated notifications."
      : "Belső adminrendszerek, kisebb webalkalmazások, Excel-folyamatok kiváltása, ajánlat- és munkanyilvántartás, automatizált értesítések.",
  },
  {
    title: en
      ? "Websites and online visibility"
      : "Weboldal és online láthatóság",
    text: en
      ? "Fast, mobile-friendly websites, technical SEO, local search foundations and clear, structured content for AI search engines too."
      : "Gyors, mobilbarát weboldal, technikai SEO, helyi keresési alapok és AI-keresők számára is világos, strukturált tartalom.",
  },
  {
    title: en ? "Databases and data organisation" : "Adatbázis és adatrendezés",
    text: en
      ? "SQL or NoSQL data models, Excel and CSV imports, data cleaning, migration, search, permissions and backups."
      : "SQL vagy NoSQL adatmodell, Excel- és CSV-import, adattisztítás, migráció, keresés, jogosultságok és biztonsági mentés.",
  },
  {
    title: en ? "PCs, printers and networks" : "PC, nyomtató és hálózat",
    text: en
      ? "Troubleshooting, performance improvements, hardware upgrades, Windows configuration, printer and scanner setup, Wi-Fi and basic network support."
      : "Hibafeltárás, gépgyorsítás, alkatrészbővítés, Windows-beállítás, nyomtató és szkenner telepítése, Wi-Fi és alap hálózati segítség.",
  },
];

const getFaqs = (en: boolean) => [
  [
    en
      ? "Where is on-site help available?"
      : "Hol érhető el helyszíni segítség?",
    en
      ? "In-person help is primarily available in Siófok and the surrounding area, and across Somogy county. Visits further afield can be arranged in advance. Remote help and development are available across Hungary."
      : "Személyesen elsősorban Siófokon és környékén, valamint Somogy megyében segítek. Távolabbi kiszállás is kérhető előzetes egyeztetéssel. Távsegítség és fejlesztés országosan elérhető.",
  ],
  [
    en
      ? "Do you take on small development tasks?"
      : "Vállalsz kisebb fejlesztési feladatot is?",
    en
      ? "Yes. A clearly defined Excel cleanup, automation, form, report or small internal application can be a project in its own right."
      : "Igen. Egy jól körülhatárolt Excel-rendbetétel, automatizálás, űrlap, riport vagy kisebb belső program is lehet önálló projekt.",
  ],
  [
    en
      ? "Do you work with both SQL and NoSQL databases?"
      : "SQL és NoSQL adatbázissal is dolgozol?",
    en
      ? "Yes. The choice depends on your data structure, queries, workload and future needs rather than a preference for a particular technology."
      : "Igen, de nem technológia alapján választok: az adatok szerkezete, a keresések, a terhelés és a későbbi bővíthetőség dönti el a megfelelő megoldást.",
  ],
  [
    en
      ? "Can I contact you about hardware and software issues?"
      : "Hardveres és szoftveres hibával is lehet keresni?",
    en
      ? "Yes. Alongside PC, laptop, printer, scanner and basic network issues, I also work on web and custom software projects."
      : "Igen. PC, laptop, nyomtató, szkenner és alap hálózati probléma mellett webes és egyedi szoftveres feladatokkal is foglalkozom.",
  ],
];

export default async function LocalItPage() {
  const lang = await getLangFromCookies();
  const en = lang === "en";
  const groups = getGroups(en);
  const faqs = getFaqs(en);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${site.url}/siofok-informatika#page`,
        url: `${site.url}/siofok-informatika`,
        name: en
          ? "IT support and software development around Siófok"
          : "Informatikai segítség és programozó Siófok környékén",
        about: { "@id": `${site.url}#service` },
        inLanguage: lang,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section
        heading="h1"
        eyebrow={
          en
            ? "Siófok area • Somogy county"
            : "Siófok és környéke • Somogy megye"
        }
        title={
          en
            ? "Local IT support and custom development"
            : "Informatikai segítség és egyedi fejlesztés a közelből"
        }
        description={
          en
            ? "On-site hardware help, software support and custom development in person or remotely, explained clearly and tailored to the actual problem."
            : "Hardveres segítség helyszínen, szoftveres támogatás és egyedi fejlesztés személyesen vagy távolról — érthetően, a tényleges problémához igazítva."
        }
      >
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <Card key={group.title} className="p-6">
              <h2 className="text-lg font-black text-slate-950 dark:text-white">
                {group.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {group.text}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-black text-slate-950 dark:text-white">
            {en
              ? "Local help around Siófok"
              : "Helyi segítség Siófok környékén"}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            {en
              ? "On-site help is often useful for device setup and hardware problems. Many configuration, web, data and programming tasks can be handled remotely. I primarily visit Siófok and the surrounding area, and Somogy county. For locations further afield, we agree the place, time and travel fee in advance. Visits within 10 km of Siófok have a fixed travel fee; beyond that, an agreed per-kilometre fee applies."
              : "Eszközbeállításnál és hardverhibánál gyakran a helyszíni segítség célszerű. Beállítási, webes, adatkezelési és programozási feladatok nagy része távolról is hatékonyan elvégezhető. Személyesen elsősorban Siófokon és környékén, valamint Somogy megyében segítek. Ha távolabb van szükséged segítségre, keress bátran: a helyszínt, időpontot és kiszállási díjat előre egyeztetjük. Siófok 10 km-es körzetében fix kiszállási díjjal, azon kívül előre egyeztetett kilométerdíjjal dolgozom."}
          </p>
          <Link
            href="/pricing"
            className="mt-4 inline-flex text-sm font-bold text-blue-700 dark:text-blue-300"
          >
            {en
              ? "Prices and travel terms →"
              : "Árak és kiszállási feltételek →"}
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black text-slate-950 dark:text-white">
            {en ? "Frequently asked questions" : "Gyakori kérdések"}
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <Card key={question} className="p-6">
                <h3 className="font-bold text-slate-950 dark:text-white">
                  {question}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {answer}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
          >
            {en ? "Describe my problem" : "Leírom a problémát"}
          </Link>
          <Link
            href="/portfolio"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            {en ? "Explore my work" : "Munkáim megtekintése"}
          </Link>
        </div>
      </Section>
    </>
  );
}

export async function generateMetadata() {
  return localizedMetadata(hungarianMetadata, "/siofok-informatika");
}
