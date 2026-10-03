import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ToyzumiCover } from "./ToyzumiCover";
import type { Lang } from "@/components/lib/i18n";

export function Hero({ lang = "hu" }: { lang?: Lang }) {
  const en = lang === "en";
  return (
    <section className="portfolio-hero relative isolate overflow-hidden">
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <Container className="py-12 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-[#a9b5cd] uppercase">
              {en
                ? "Individuals & businesses · Siófok"
                : "Magánszemélyeknek és vállalkozásoknak · Siófok"}
            </p>
            <h1 className="mt-6 text-[clamp(2.6rem,4.7vw,4.5rem)] leading-[1.08] font-semibold tracking-[-0.055em] text-[#f6f8fd]">
              {en ? "Custom software." : "Egyedi szoftver."}
              <br />
              <span className="text-[#bcd9f5]">
                {en ? "Clearer data." : "Átlátható adatok."}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#cbd5e1]">
              {en
                ? "I build websites, webshops and custom applications. Explore my work, from the ToyZumi commerce platform to Windows inventory software."
                : "Weboldalakat, webshopokat és egyedi alkalmazásokat készítek. Nézd meg a munkáimat a ToyZumi kereskedelmi rendszertől a Windows-raktárkezelőig."}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#dbeafe] px-5 py-3 text-sm font-bold text-[#142432] hover:bg-[#eff6ff]"
              >
                {en ? "View projects" : "Projektek megtekintése"}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="/contact?topic=development"
                className="inline-flex min-h-12 items-center rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-[#f6f8fd] hover:bg-white/10"
              >
                {en ? "Discuss an idea" : "Egyeztessünk az ötletedről"}
              </Link>
            </div>
            <p className="mt-5 text-sm leading-7 text-[#a9b5cd]">
              {en
                ? "Personal ideas and smaller projects are welcome too."
                : "Magáncélú ötlettel és kisebb projekttel is megkereshetsz."}
            </p>
            <Link
              href="/services/pc-hardver"
              className="mt-2 inline-flex min-h-11 items-center text-sm text-[#bcd9f5] underline underline-offset-4"
            >
              {en
                ? "PC builds, upgrades and diagnostics →"
                : "PC-építés, bővítés és diagnosztika →"}
            </Link>
          </div>
          <ToyzumiCover lang={lang} />
        </div>
      </Container>
    </section>
  );
}
