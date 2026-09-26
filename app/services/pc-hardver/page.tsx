import { localizedMetadata } from "@/components/lib/localized-metadata";
import Link from "next/link";
import { pageMetadata } from "@/components/lib/metadata";
import { getLangFromCookies } from "@/components/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ServicePaths } from "@/components/site/ServicePaths";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

const hungarianMetadata = pageMetadata(
  "PC-építés, bővítés és diagnosztika Siófok környékén",
  "PC-építés, RAM/SSD-bővítés, diagnosztika és távsegítség magánszemélyeknek és KKV-knak. Siófok és Somogy megye, távolabb egyeztetéssel. Alapellenőrzés 5 000 Ft-tól.",
  "/services/pc-hardver",
);

export default async function HardwarePage() {
  const lang = await getLangFromCookies();
  const en = lang === "en";
  return (
    <>
      <Container className="pt-8">
        <Breadcrumbs
          label={en ? "Breadcrumb" : "Oldal útvonala"}
          items={[
            { name: en ? "Home" : "Főoldal", href: "/" },
            { name: en ? "Services" : "Szolgáltatások", href: "/services" },
            {
              name: en ? "PC and hardware" : "PC és hardver",
              href: "/services/pc-hardver",
            },
          ]}
        />
      </Container>
      <Section
        heading="h1"
        eyebrow={
          en
            ? "For individuals and small businesses"
            : "Magánszemélyeknek és KKV-knak"
        }
        title={
          en
            ? "PC building, upgrades and diagnostics"
            : "PC-építés, bővítés és diagnosztika"
        }
        description={
          en
            ? "Help with a slow computer, a new PC or device setup. In-person support primarily in the Siófok area and Somogy county; visits further afield by arrangement, remote help across Hungary."
            : "Segítség lassú számítógéphez, új PC összeállításához és eszközbeállításhoz. Személyesen elsősorban Siófokon és környékén, valamint Somogy megyében; távolabb egyeztetéssel, távsegítséggel országosan."
        }
      >
        <ServicePaths lang={lang} hardware />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              {en
                ? "What does the starting fee cover?"
                : "Mit tartalmaz az induló díj?"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {en
                ? "Remote help or a basic assessment starts at 5,000 HUF for the first 30 minutes. PC assembly and basic testing starts at 12,000 HUF. Parts, longer repairs and travel are agreed separately."
                : "Távsegítség vagy alapellenőrzés 5 000 Ft-tól, az első legfeljebb 30 percre. PC-összeszerelés és alapellenőrzés 12 000 Ft-tól. Az alkatrész, hosszabb javítás és kiszállás díját külön egyeztetjük."}
            </p>
            <Link
              href="/pricing"
              className="mt-4 inline-block text-sm font-semibold text-blue-700 underline dark:text-blue-300"
            >
              {en
                ? "Full prices and travel fees"
                : "Teljes árlista és kiszállási díjak"}
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              {en ? "How do we start?" : "Hogyan indulunk?"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {en
                ? "Send the device model and a description of the issue. We agree whether remote help or an in-person visit is appropriate, and the expected fee before starting. Passwords and private files are not needed for the first message."
                : "Írd meg a készülék típusát és a tapasztalt hibát. Megbeszéljük, hogy távsegítség vagy személyes vizsgálat célszerű-e, és indulás előtt egyeztetjük a várható díjat. Az első üzenethez jelszóra vagy személyes fájlokra nincs szükség."}
            </p>
            <Link
              href="/contact?topic=hardware"
              className="mt-4 inline-block text-sm font-semibold text-blue-700 underline dark:text-blue-300"
            >
              {en ? "Ask for technical help" : "Műszaki segítséget kérek"}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

export async function generateMetadata() {
  return localizedMetadata(hungarianMetadata, "/services/pc-hardver");
}
