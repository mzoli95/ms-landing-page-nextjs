"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Lang } from "@/components/lib/i18n";

export function ToyzumiDemo({ lang }: { lang: Lang }) {
  const en = lang === "en";
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const scenes = [
    {
      label: en ? "Discover" : "Felfedezés",
      image: "00-portfolio-cover.png",
      title: en
        ? "A place for the next collectible."
        : "A következő kedvencnek is legyen helye.",
      text: en
        ? "A browsable catalogue, wishlists and preorder interest connect discovery with purchase intent."
        : "Kereshető katalógus, kívánságlista és előrendelési érdeklődés kapcsolja össze a böngészést a vásárlási szándékkal.",
    },
    {
      label: en ? "Return" : "Visszatérés",
      image: "07-loyalty-account.png",
      title: en
        ? "Give collectors a reason to return."
        : "Legyen miért visszatérni.",
      text: en
        ? "Levels, XP, points and redeemable rewards support an ongoing relationship with collectors."
        : "Szintek, XP, pontok és beváltható jutalmak segítik a gyűjtőkkel kialakított hosszabb távú kapcsolatot.",
    },
    {
      label: en ? "Decide" : "Döntés",
      image: "09-statistics.png",
      title: en
        ? "See the signals behind demand."
        : "Lásd az érdeklődést a rendelések mögött.",
      text: en
        ? "The analytics screen provides operational context. The current code also evaluates searches, clicks and stock when preparing procurement suggestions."
        : "Az elemzési felület működési áttekintést ad. A jelenlegi kód a kereséseket, kattintásokat és készletet is értékeli a beszerzési javaslatokhoz.",
    },
  ];
  const scene = scenes[active];
  return (
    <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#10192b]">
      <div className="grid lg:grid-cols-[0.65fr_1.35fr]">
        <div className="flex flex-col p-6 sm:p-9">
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#c6f36b] uppercase">
            {en ? "A guided look at ToyZumi" : "ToyZumi · vezetett bemutató"}
          </p>
          <div
            role="tablist"
            aria-label={en ? "Demo chapters" : "Bemutató fejezetei"}
            className="mt-6 flex flex-wrap gap-2"
          >
            {scenes.map((item, i) => (
              <button
                key={item.label}
                ref={(el) => {
                  buttons.current[i] = el;
                }}
                id={`demo-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={active === i}
                aria-controls="demo-panel"
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(event) => {
                  let next = i;
                  if (event.key === "ArrowRight")
                    next = (i + 1) % scenes.length;
                  else if (event.key === "ArrowLeft")
                    next = (i + scenes.length - 1) % scenes.length;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = scenes.length - 1;
                  else return;
                  event.preventDefault();
                  setActive(next);
                  buttons.current[next]?.focus();
                }}
                className={`min-h-11 rounded-full border px-4 py-2 text-xs font-semibold ${active === i ? "border-[#c6f36b] bg-[#c6f36b] text-[#101827]" : "border-white/20 text-[#cbd5e1] hover:bg-white/10"}`}
              >
                {String(i + 1).padStart(2, "0")} / {item.label}
              </button>
            ))}
          </div>
          <div
            id="demo-panel"
            role="tabpanel"
            aria-labelledby={`demo-tab-${active}`}
            tabIndex={0}
            className="mt-8"
          >
            <h3 className="text-3xl leading-tight font-semibold tracking-tight text-[#f6f8fd]">
              {scene.title}
            </h3>
            <p className="mt-5 text-sm leading-7 text-[#bec9dd]">
              {scene.text}
            </p>
          </div>
          <a
            href="https://staging.toyzumi.hu/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-11 items-center justify-center gap-3 rounded-xl bg-[#c6f36b] px-4 py-3 text-sm font-bold text-[#101827] hover:bg-[#d8ff8a]"
          >
            {en ? "Open ToyZumi demo ↗" : "ToyZumi demó megnyitása ↗"}
          </a>
          <Link
            href="/portfolio/toyzumi#uzleti-ertek"
            className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#c6f36b]"
          >
            {en ? "Read the full story" : "A teljes történet"}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <p className="mt-auto pt-8 text-[11px] leading-5 text-[#94a3b8]">
            {en
              ? "Screenshot walkthrough · 1.1.5 staging · sample data. This is not a live checkout."
              : "Képernyőképes bemutató · 1.1.5 staging · mintaadatok. Nem élő vásárlási felület."}
          </p>
        </div>
        <div className="relative flex min-h-64 items-center border-t border-white/10 bg-[#080e1b] p-4 sm:p-6 lg:border-t-0 lg:border-l">
          <Image
            key={scene.image}
            src={`/portfolio/toyzumi/${scene.image}`}
            alt={scene.title}
            width={1552}
            height={1020}
            sizes="(min-width: 1024px) 65vw, 100vw"
            className="h-auto max-h-[560px] w-full rounded-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
}
