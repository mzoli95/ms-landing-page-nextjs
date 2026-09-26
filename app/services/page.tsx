import Link from "next/link";
import { pageMetadata } from "@/components/lib/metadata";
import { Section } from "@/components/ui/Section";
import { ServicePaths } from "@/components/site/ServicePaths";
import { ServicesPreview } from "@/components/site/ServicesPreview";
import { getLangFromCookies } from "@/components/lib/i18n";
export const metadata = pageMetadata(
  "Egyedi szoftver, webfejlesztés és automatizálás – szolgáltatások",
  "Egyedi szoftver, weboldal, webalkalmazás és automatizálás magánszemélyeknek és vállalkozásoknak. Kiegészítő PC-s és műszaki segítség is kérhető.",
  "/services",
);
export default async function ServicesPage() {
  const lang = await getLangFromCookies();
  const en = lang === "en";
  return (
    <>
      <Section
        heading="h1"
        eyebrow={
          en
            ? "For individuals and businesses"
            : "Magánszemélyeknek és vállalkozásoknak"
        }
        title={
          en
            ? "What do you need help with?"
            : "Miben lenne szükséged segítségre?"
        }
        description={
          en
            ? "Custom software, websites and automation for your own idea or business. Small, clearly defined tasks are welcome too."
            : "Egyedi szoftver, weboldal és automatizálás saját ötlethez vagy céges feladathoz. Kisebb, jól körülhatárolt kéréssel is megkereshetsz."
        }
      >
        <nav
          aria-label={en ? "Service areas" : "Szolgáltatási területek"}
          className="mb-8 flex flex-wrap gap-3"
        >
          <a
            href="#digital"
            className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white"
          >
            {en ? "Software and development" : "Szoftver és fejlesztés"}
          </a>
          <a
            href="#hardware"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900"
          >
            {en ? "PC and hardware help" : "PC-s és hardveres segítség"}
          </a>
        </nav>
        <ServicePaths lang={lang} />
      </Section>
      <div id="digital" className="case-anchor" />
      <Section
        eyebrow={
          en ? "Development and operations" : "Fejlesztés és üzemeltetés"
        }
        title={
          en
            ? "Websites, data and recurring tasks"
            : "Weboldalak, adatok és ismétlődő feladatok"
        }
        description={
          en
            ? "These services can also be useful for a personal project, association or small team."
            : "Ezekkel magáncélú projektnél, egyesületnél és kisebb csapatnál is megkereshetsz."
        }
        className="bg-slate-50"
      >
        <ServicesPreview lang={lang} />
      </Section>
      <div id="hardware" className="case-anchor" />
      <Section
        eyebrow={en ? "Additional help" : "Kiegészítő segítség"}
        title={en ? "PC and device support" : "PC-s és műszaki segítség"}
        description={
          en
            ? "Building, upgrading or checking a computer, remote help and device setup are also available."
            : "PC-építéssel, bővítéssel, diagnosztikával, távsegítséggel és eszközbeállítással is megkereshetsz."
        }
      >
        <ServicePaths lang={lang} hardware />
        <Link
          href="/services/pc-hardver"
          className="mt-6 inline-block text-sm font-semibold text-blue-700 underline dark:text-blue-300"
        >
          {en
            ? "Hardware services, fees and how to start →"
            : "Hardveres szolgáltatások, díjak és tudnivalók →"}
        </Link>
      </Section>
    </>
  );
}
