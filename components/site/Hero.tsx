"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Database,
  FileSpreadsheet,
  Monitor,
  Wrench,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";
import { trackEvent } from "@/components/lib/analytics";

function HeroVisual({ lang }: { lang: Lang }) {
  const benefits =
    lang === "en"
      ? [
          {
            icon: FileSpreadsheet,
            title: "Less spreadsheet chaos",
            text: "No more scattered files, notes and manual follow-up.",
          },
          {
            icon: Workflow,
            title: "Clearer workflows",
            text: "Tasks, statuses and responsibilities become easier to see.",
          },
          {
            icon: Database,
            title: "One place for data",
            text: "Important business information stays in one shared system.",
          },
          {
            icon: BarChart3,
            title: "Faster decisions",
            text: "Reports and overview help you react quicker day to day.",
          },
        ]
      : [
          {
            icon: FileSpreadsheet,
            title: "Kevesebb Excel-káosz",
            text: "Kevesebb szétszórt fájl, jegyzet és kézi utánkövetés.",
          },
          {
            icon: Workflow,
            title: "Átláthatóbb folyamatok",
            text: "Egyszerűbben követhető feladatok, státuszok és felelősök.",
          },
          {
            icon: Database,
            title: "Egy helyen az adatok",
            text: "A fontos üzleti információk közös, rendezett rendszerbe kerülnek.",
          },
          {
            icon: BarChart3,
            title: "Gyorsabb döntések",
            text: "Jobb rálátás a napi működésre és a következő lépésekre.",
          },
        ];

  return (
    <aside className="mx-auto w-full max-w-xl lg:max-w-none">
      <div className="relative">
        <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="rounded-[22px] border border-white/10 bg-slate-950/40 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/70">
                {lang === "en"
                  ? "Custom internal system"
                  : "Egyedi belső rendszer"}
              </p>
            </div>

            <div className="hidden rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-right sm:block">
              <div className="text-sm font-semibold text-white">
                {lang === "en" ? "Reliable operation" : "Kiszámítható működés"}
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-200 hover:bg-white/[0.06]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/14">
                    <Icon className="h-5 w-5 text-cyan-100" />
                  </div>

                  <h4 className="mt-4 text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-3">
                <Monitor className="h-5 w-5 text-cyan-100" />
                <p className="text-sm font-medium text-white">
                  {lang === "en" ? "What I build" : "Amit építek"}
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {lang === "en"
                  ? "Internal web apps, admin tools, reports and simpler business flows."
                  : "Belső webappok, admin felületek, riportok és egyszerűbb üzleti folyamatok."}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-3">
                <Wrench className="h-5 w-5 text-cyan-100" />
                <p className="text-sm font-medium text-white">
                  {lang === "en" ? "How I work" : "Hogyan dolgozom"}
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {lang === "en"
                  ? "I first review your current process, then suggest only what is actually worth building."
                  : "Először átnézem a jelenlegi működést, és csak azt javaslom, amit valóban érdemes bevezetni."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function Hero({ lang = "hu" }: { lang?: Lang }) {
  const t = getDictionary(lang);
  const badges = t.hero.badges;
  const [variant, setVariant] = useState<"a" | "b">("a");

  const heroVariant =
    lang === "en"
      ? {
          a: {
            title:
              "I help turn messy daily work into a system people can actually use.",
            ctaPrimary: "Let’s talk about your situation",
            valueProp:
              "Simple internal tools, automation and reports for SMEs still relying on spreadsheets and manual admin.",
          },
          b: {
            title:
              "Replace spreadsheet chaos with one clear system built around your real work.",
            ctaPrimary: "Book a free consultation",
            valueProp:
              "Less admin work, clearer overview, and faster everyday decisions.",
          },
        }
      : {
          a: {
            title: "Segítek rendet tenni a napi működésben.",
            ctaPrimary: "Beszéljük át a helyzeted",
            valueProp:
              "Egyszerűbb belső rendszerek, automatizálás és riportok azoknak a KKV-knak, ahol még túl sok minden megy Excelben és kézzel.",
          },
          b: {
            title:
              "Excel és jegyzetek helyett kezeld a folyamataid egyetlen átlátható felületen.",
            ctaPrimary: "Kérek ingyenes konzultációt",
            valueProp:
              "Kevesebb kézi munka, gyorsabb döntések és átláthatóbb napi működés.",
          },
        };

  const visualIntro =
    lang === "en"
      ? "Manage your processes in one clear interface instead of spreadsheets and notes."
      : "Ha eleged van abból, hogy Excelben és jegyzetekben kell keresgélned: készítek egy egyszerű, testre szabott rendszert, ami időt spórol, hibát csökkent, és láthatóvá teszi a céged működését.";

  const secondaryCta =
    lang === "en" ? "See what could help" : "Megnézem, mi segíthet";

  useEffect(() => {
    const stored = window.localStorage.getItem("hero_ab_v1");
    const selected =
      stored === "b"
        ? "b"
        : stored === "a"
          ? "a"
          : Math.random() < 0.5
            ? "a"
            : "b";

    window.localStorage.setItem("hero_ab_v1", selected);
    if (selected !== variant) {
      requestAnimationFrame(() => setVariant(selected));
    }

    trackEvent("ab_variant_assigned", {
      test: "hero_v1",
      variant: selected,
    });
  }, [variant]);

  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Container className="relative py-16 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
          <div>
            <div className="flex flex-wrap gap-1">
              {badges.map((badge) => (
                <Badge key={badge} className="bg-white/12 text-white/90">
                  {badge}
                </Badge>
              ))}
            </div>

            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {heroVariant[variant].title}
            </h1>

            <p className="mt-4 text-sm text-white/65">{t.hero.locationLine}</p>

            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/95">
              {heroVariant[variant].valueProp}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">
              {visualIntro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/services"
                variant="primary"
                className="px-5 py-3 bg-white text-slate-900 dark:bg-white dark:text-slate-900 shadow-sm"
                onClick={() =>
                  trackEvent("cta_click", {
                    location: "hero",
                    cta: "explore",
                    variant,
                  })
                }
              >
                <span className="inline-flex items-center gap-2">
                  {secondaryCta}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>

              <Button
                href="/contact"
                variant="primary"
                className="px-5 py-3 bg-white text-slate-900 dark:bg-white dark:text-slate-900 shadow-sm"
                onClick={() =>
                  trackEvent("cta_click", {
                    location: "hero",
                    cta: "contact",
                    variant,
                  })
                }
              >
                {t.nav.items.find((it) => it.href === "/contact")?.label ??
                  (lang === "en" ? "Contact" : "Kapcsolat")}
              </Button>
            </div>

            <p className="mt-3 text-xs text-white/60">{t.hero.note}</p>
          </div>

          <HeroVisual lang={lang} />
        </div>
      </Container>
    </section>
  );
}
