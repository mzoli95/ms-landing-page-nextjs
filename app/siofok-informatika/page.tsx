import { pageMetadata } from "@/components/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { site } from "@/components/lib/site";

export const metadata: Metadata = {
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

const groups = [
  {
    title: "Egyedi fejlesztés és programozás",
    text: "Belső adminrendszerek, kisebb webalkalmazások, Excel-folyamatok kiváltása, ajánlat- és munkanyilvántartás, automatizált értesítések.",
  },
  {
    title: "Weboldal és online láthatóság",
    text: "Gyors, mobilbarát weboldal, technikai SEO, helyi keresési alapok és AI-keresők számára is világos, strukturált tartalom.",
  },
  {
    title: "Adatbázis és adatrendezés",
    text: "SQL vagy NoSQL adatmodell, Excel- és CSV-import, adattisztítás, migráció, keresés, jogosultságok és biztonsági mentés.",
  },
  {
    title: "PC, nyomtató és hálózat",
    text: "Hibafeltárás, gépgyorsítás, alkatrészbővítés, Windows-beállítás, nyomtató és szkenner telepítése, Wi-Fi és alap hálózati segítség.",
  },
];

const faqs = [
  [
    "Hol érhető el helyszíni segítség?",
    "Személyesen elsősorban Siófokon és környékén, valamint Somogy megyében segítek. Távolabbi kiszállás is kérhető előzetes egyeztetéssel. Távsegítség és fejlesztés országosan elérhető.",
  ],
  [
    "Vállalsz kisebb fejlesztési feladatot is?",
    "Igen. Egy jól körülhatárolt Excel-rendbetétel, automatizálás, űrlap, riport vagy kisebb belső program is lehet önálló projekt.",
  ],
  [
    "SQL és NoSQL adatbázissal is dolgozol?",
    "Igen, de nem technológia alapján választok: az adatok szerkezete, a keresések, a terhelés és a későbbi bővíthetőség dönti el a megfelelő megoldást.",
  ],
  [
    "Hardveres és szoftveres hibával is lehet keresni?",
    "Igen. PC, laptop, nyomtató, szkenner és alap hálózati probléma mellett webes és egyedi szoftveres feladatokkal is foglalkozom.",
  ],
];

export default function LocalItPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${site.url}/siofok-informatika#page`,
        url: `${site.url}/siofok-informatika`,
        name: "Informatikai segítség és programozó Siófok környékén",
        about: { "@id": `${site.url}#service` },
        inLanguage: "hu-HU",
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
        eyebrow="Siófok és környéke • Somogy megye"
        title="Informatikai segítség és egyedi fejlesztés a közelből"
        description="Hardveres segítség helyszínen, szoftveres támogatás és egyedi fejlesztés személyesen vagy távolról — érthetően, a tényleges problémához igazítva."
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
            Helyi segítség Siófok környékén
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Eszközbeállításnál és hardverhibánál gyakran a helyszíni segítség
            célszerű. Beállítási, webes, adatkezelési és programozási feladatok
            nagy része távolról is hatékonyan elvégezhető. Személyesen
            elsősorban Siófokon és környékén, valamint Somogy megyében segítek.
            Ha távolabb van szükséged segítségre, keress bátran: a helyszínt,
            időpontot és kiszállási díjat előre egyeztetjük. Siófok 10 km-es
            körzetében fix kiszállási díjjal, azon kívül előre egyeztetett
            kilométerdíjjal dolgozom.
          </p>
          <Link
            href="/pricing"
            className="mt-4 inline-flex text-sm font-bold text-blue-700 dark:text-blue-300"
          >
            Árak és kiszállási feltételek →
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black text-slate-950 dark:text-white">
            Gyakori kérdések
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
            Leírom a problémát
          </Link>
          <Link
            href="/portfolio"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            Munkáim megtekintése
          </Link>
        </div>
      </Section>
    </>
  );
}
