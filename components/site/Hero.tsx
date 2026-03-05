"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";
import { trackEvent } from "@/components/lib/analytics";

export function Hero({ lang = "hu" }: { lang?: Lang }) {
  const t = getDictionary(lang);
  const badges = t.hero.badges;
  const bullets = t.hero.bullets;
  const [offset, setOffset] = useState(0);
  const [variant, setVariant] = useState<"a" | "b">("a");

  const heroVariant =
    lang === "en"
      ? {
          a: {
            title: t.hero.title,
            ctaPrimary: t.hero.ctaPrimary,
            valueProp:
              "From chaos to clear internal operations with one tailored system.",
          },
          b: {
            title:
              "Stop juggling Excel and notes — run your business from one clear dashboard.",
            ctaPrimary: "Book a free 15-min call",
            valueProp:
              "Less manual admin, faster decisions, and a cleaner daily workflow.",
          },
        }
      : {
          a: {
            title: t.hero.title,
            ctaPrimary: t.hero.ctaPrimary,
            valueProp:
              "Káosz helyett átlátható működés egy testreszabott belső rendszerrel.",
          },
          b: {
            title:
              "Excel és jegyzetek helyett kezeld egyetlen tiszta dashboardon a folyamataid.",
            ctaPrimary: "Foglalj ingyenes 15 perces hívást",
            valueProp:
              "Kevesebb manuális admin, gyorsabb döntések, nyugodtabb napi működés.",
          },
        };

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

  useEffect(() => {
    const onScroll = () => {
      setOffset(Math.min(56, window.scrollY * 0.12));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-900" />
      <div
        className="absolute -top-24 left-1/2 h-120 w-120 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
        style={{ transform: `translate3d(-50%, ${offset}px, 0)` }}
      />
      <div
        className="absolute top-28 right-12 h-56 w-56 rounded-full bg-blue-300/10 blur-3xl"
        style={{ transform: `translate3d(0, ${offset * -0.45}px, 0)` }}
      />
      <Container className="relative py-16 sm:py-24">
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {heroVariant[variant].title}
        </h1>

        <p className="mt-3 text-sm text-white/60">{t.hero.locationLine}</p>

        <p className="mt-5 max-w-2xl text-base font-semibold text-white/95 sm:text-lg">
          {heroVariant[variant].valueProp}
        </p>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">
          {t.hero.intro}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button
            href="/contact"
            onClick={() =>
              trackEvent("cta_click", {
                location: "hero",
                cta: "primary",
                variant,
              })
            }
          >
            {heroVariant[variant].ctaPrimary}
          </Button>
          <Button
            href="/pricing"
            variant="secondary"
            onClick={() =>
              trackEvent("cta_click", {
                location: "hero",
                cta: "secondary",
                variant,
              })
            }
          >
            {t.hero.ctaSecondary}
          </Button>
        </div>

        <p className="mt-3 text-xs text-white/60">{t.hero.note}</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bullets.map((bullet) => (
            <div
              key={bullet}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/85"
            >
              {bullet}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
