"use client";
import Image from "next/image";
import Link from "next/link";
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
  const [logoLoaded, setLogoLoaded] = useState(false);
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

  // useEffect(() => {
  //   if (pathname !== "/") return;

  //   const sectionIds = [
  //     "home",
  //     "why-section",
  //     "usecases-section",
  //     "process-section",
  //     "pc-service-section",
  //     "pricing-section",
  //   ];

  //   const sections = sectionIds
  //     .map((id) => document.getElementById(id))
  //     .filter((el): el is HTMLElement => Boolean(el));

  //   if (!sections.length) return;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const topEntry = entries
  //         .filter((entry) => entry.isIntersecting)
  //         .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  //       if (topEntry?.target?.id) {
  //         setActiveSection(topEntry.target.id);
  //       }
  //     },
  //     {
  //       root: null,
  //       threshold: [0.2, 0.35, 0.5, 0.7],
  //       rootMargin: "-30% 0px -45% 0px",
  //     },
  //   );

  //   sections.forEach((section) => observer.observe(section));
  //   return () => observer.disconnect();
  // }, [pathname]);

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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-24 items-center justify-start overflow-hidden rounded-2xl border border-slate-200 bg-white px-2 shadow-sm">
              {!logoLoaded && (
                <div className="absolute inset-1 animate-pulse rounded-xl bg-slate-200/80" />
              )}
              <Image
                src="/ms_logo.png.png"
                alt="MS logo"
                width={255}
                height={114}
                sizes="98px"
                className={cn(
                  "relative h-auto w-full object-contain transition duration-300",
                  logoLoaded ? "opacity-100" : "opacity-0",
                )}
                onLoad={() => setLogoLoaded(true)}
                priority
              />
            </div>
            <div className="min-w-0 leading-tight">
              <div className="whitespace-nowrap text-sm font-extrabold tracking-[0.02em] text-slate-900 transition-colors group-hover:text-slate-700 sm:text-[0.95rem]">
                {site.name}
              </div>
              <div className="whitespace-nowrap text-xs text-amber-600">
                {t.nav.subtitle}
              </div>
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
                    "rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200",
                    i.href === activeHref
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-900/5 hover:text-slate-900",
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
                  "rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors",
                  i.href === activeHref
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900",
                )}
              >
                {i.label}
              </Link>
            ),
          )}
        </nav>
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
