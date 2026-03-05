"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/components/lib/utils";
import { flags, site } from "../lib/site";
import type { Lang } from "@/components/lib/i18n";
import type { Theme } from "@/components/lib/theme.shared";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { getDictionary } from "@/components/lib/dictionary";

export function Navbar({
  lang,
  initialTheme,
}: {
  lang: Lang;
  initialTheme: Theme;
}) {
  const disabled = flags.comingSoon;
  const t = getDictionary(lang);
  const nav = t.nav.items;
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        setScrollProgress(0);
        return;
      }
      setScrollProgress(Math.min(1, Math.max(0, window.scrollY / scrollable)));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = [
      "home",
      "why-section",
      "usecases-section",
      "services-section",
      "process-section",
      "pc-service-section",
      "pricing-section",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const topEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (topEntry?.target?.id) {
          setActiveSection(topEntry.target.id);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: "-30% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const activeHref = useMemo(() => {
    if (pathname !== "/") return pathname;

    if (
      activeSection === "services-section" ||
      activeSection === "pc-service-section"
    ) {
      return "/services";
    }

    if (activeSection === "pricing-section") {
      return "/pricing";
    }

    return "/";
  }, [pathname, activeSection]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="grid h-14 w-14 place-items-center overflow-hidden">
              <Image
                src="/ms_logo.png.png"
                alt="MS logo"
                width={64}
                height={64}
                className="h-11 w-11 object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold text-slate-900">
                {site.name}
              </div>
              <div className="text-xs text-slate-500">{t.nav.subtitle}</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((i) =>
              disabled ? (
                <span
                  key={i.href}
                  className="text-sm font-semibold text-slate-400 cursor-not-allowed opacity-50"
                >
                  {i.label}
                </span>
              ) : (
                <Link
                  key={i.href}
                  href={i.href}
                  className={cn(
                    "text-sm font-semibold transition-colors",
                    i.href === activeHref
                      ? "text-slate-900"
                      : "text-slate-700 hover:text-slate-900",
                  )}
                >
                  {i.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher lang={lang} />
            <ThemeToggle lang={lang} initialTheme={initialTheme} />
          </div>
        </div>
        <nav
          aria-label={t.nav.mobileMenuLabel}
          className="flex gap-3 pb-3 md:hidden"
        >
          {nav.map((i) =>
            disabled ? (
              <span
                key={i.href}
                className="text-xs font-semibold text-slate-400 cursor-not-allowed opacity-60"
              >
                {i.label}
              </span>
            ) : (
              <Link
                key={i.href}
                href={i.href}
                className={cn(
                  "text-xs font-semibold transition-colors",
                  i.href === activeHref
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900",
                )}
              >
                {i.label}
              </Link>
            ),
          )}
        </nav>

        {/* <div className="flex items-center gap-3">
          {disabled ? (
            <>
              <span className="hidden sm:inline-flex rounded-xl bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-400 cursor-not-allowed">
                Ajánlatkérés
              </span>
              <span className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-400 cursor-not-allowed">
                Ingyenes konzultáció
              </span>
            </>
          ) : (
            <>
              <Button
                href="/contact"
                variant="ghost"
                className="hidden sm:inline-flex"
              >
                Ajánlatkérés
              </Button>
              <Button href="/contact">Ingyenes konzultáció</Button>
            </>
          )}
        </div> */}
      </Container>
      <div className="h-px w-full bg-slate-200/60">
        <div
          className="h-px bg-slate-900 transition-transform duration-150 ease-out origin-left"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>
    </header>
  );
}
