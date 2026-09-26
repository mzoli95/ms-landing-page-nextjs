import Link from "next/link";
import {
  ArrowUpRight,
  Globe,
  Workflow,
  Code2,
  ChartNoAxesCombined,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { Lang } from "@/components/lib/i18n";
export function Hero({ lang = "hu" }: { lang?: Lang }) {
  const en = lang === "en";
  const paths = [
    {
      icon: Code2,
      href: "/services/egyedi-fejlesztes",
      title: en ? "Custom software" : "Egyedi szoftver",
      text: en
        ? "A small tool, a personal project or a system built around your workflow."
        : "Kis segédprogram, saját projekt vagy a folyamataidhoz illő rendszer.",
      note: en
        ? "From an idea to a working application"
        : "Az ötlettől a működő alkalmazásig",
    },
    {
      icon: Globe,
      href: "/services/webfejlesztes",
      title: en ? "Websites and web applications" : "Weboldal és webalkalmazás",
      text: en
        ? "A personal website, portfolio, webshop or an interactive online service."
        : "Bemutatkozó oldal, portfólió, webshop vagy interaktív online szolgáltatás.",
      note: en
        ? "For individuals and businesses"
        : "Magánszemélyeknek és vállalkozásoknak",
    },
    {
      icon: Workflow,
      href: "/services/excel-automatizalas",
      title: en ? "Excel automation" : "Excel-automatizálás",
      text: en
        ? "Combine files, clean data and generate recurring summaries."
        : "Fájlok összefésülése, adattisztítás és ismétlődő összesítések.",
      note: en
        ? "Start with one well-defined task"
        : "Egy jól körülhatárolt feladattal is indulhatunk",
    },
    {
      icon: ChartNoAxesCombined,
      href: "/services/statisztikak-kimutatasok",
      title: en ? "Statistics and reports" : "Statisztikák és kimutatások",
      text: en
        ? "Revenue, costs, stock or interest, with charts and comparisons."
        : "Bevétel, költségek, készlet vagy érdeklődés: grafikonokkal és összehasonlításokkal.",
      note: en
        ? "Excel reports and custom dashboards"
        : "Excel-kimutatások és egyedi áttekintő felületek",
    },
  ];
  return (
    <section className="portfolio-hero relative isolate overflow-hidden">
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <Container className="py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-[#a9b5cd] uppercase">
              {en
                ? "Individuals & businesses · Siófok"
                : "Magánszemélyeknek és vállalkozásoknak · Siófok"}
            </p>
            <h1 className="mt-7 text-[clamp(2.6rem,4.7vw,4.5rem)] leading-[1.08] font-semibold tracking-[-0.055em] text-[#f6f8fd]">
              {en ? "Custom software." : "Egyedi szoftver."}
              <br />
              <span className="text-[#bcd9f5]">
                {en ? "Clearer data." : "Átlátható adatok."}
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#cbd5e1]">
              {en
                ? "Custom software, websites and automation. Tell me what you want to build or simplify, and we will work out the next step."
                : "Egyedi szoftver, weboldal és automatizálás. Írd le, mit szeretnél megvalósítani vagy egyszerűbbé tenni, és közösen kitaláljuk a következő lépést."}
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#a9b5cd]">
              {en
                ? "You do not need a company or a finished specification. Personal ideas, hobby projects and small custom requests are welcome too."
                : "Nem kell hozzá cég vagy kész műszaki terv. Magáncélú ötlettel, hobbiprojekttel és kisebb egyedi kéréssel is megkereshetsz."}
            </p>
            <p className="mt-4 text-sm leading-7 text-[#a9b5cd]">
              {en
                ? "PC building, upgrades and diagnostics are also available. "
                : "PC-építésben, bővítésben és diagnosztikában is segítek. "}
              <Link
                href="/services/pc-hardver"
                className="text-[#bcd9f5] underline underline-offset-4"
              >
                {en ? "Hardware services" : "Hardveres szolgáltatások"}
              </Link>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center gap-4 rounded-xl bg-[#dbeafe] px-6 py-3 text-sm font-bold text-[#142432] hover:bg-[#eff6ff]"
              >
                {en
                  ? "Describe your request"
                  : "Leírom, miben kérek segítséget"}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex min-h-12 items-center rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-[#f6f8fd] hover:bg-white/10"
              >
                {en ? "Prices" : "Megnézem az árakat"}
              </Link>
            </div>
            <p className="mt-6 text-xs leading-6 text-[#a9b5cd]">
              {en
                ? "In-person help is primarily available in Siófok and the surrounding area, and across Somogy county. Visits further afield can be arranged in advance. Remote help and development are available across Hungary."
                : "Személyesen elsősorban Siófokon és környékén, valamint Somogy megyében segítek. Távolabbi kiszállás is kérhető előzetes egyeztetéssel. Távsegítség és fejlesztés országosan elérhető."}
            </p>
          </div>
          <div className="space-y-3">
            {paths.map(({ icon: Icon, ...p }) => (
              <Link
                key={p.title}
                href={p.href}
                className="group block rounded-2xl border border-white/15 bg-white/[0.04] p-6 transition hover:border-[#bcd9f5]/50 hover:bg-white/[0.07]"
              >
                <div className="flex items-center gap-4">
                  <Icon className="h-6 w-6 shrink-0 text-[#bcd9f5]" />
                  <h2 className="flex-1 text-lg font-semibold text-[#f6f8fd]">
                    {p.title}
                  </h2>
                  <ArrowUpRight className="h-5 w-5 text-[#a9b5cd]" />
                </div>
                <p className="mt-3 text-sm leading-6 text-[#cbd5e1]">
                  {p.text}
                </p>
                <p className="mt-3 text-xs font-semibold text-[#bcd9f5]">
                  {p.note}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
