"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/components/lib/utils";
import { flags, site } from "../lib/site";
import type { Lang } from "@/components/lib/i18n";
import type { Theme } from "@/components/lib/theme.shared";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { getDictionary } from "@/components/lib/dictionary";

type NavItem = {
  href: string;
  label: string;
};

function isDarkFromDom(fallback: Theme) {
  if (typeof document === "undefined") {
    return fallback === "dark";
  }

  return document.documentElement.classList.contains("dark");
}

function getNextScrolledState(scrollY: number, current: boolean) {
  const enterThreshold = 16;
  const exitThreshold = 6;

  if (!current && scrollY > enterThreshold) {
    return true;
  }

  if (current && scrollY < exitThreshold) {
    return false;
  }

  return current;
}

export function Navbar({
  lang,
  initialTheme,
}: {
  lang: Lang;
  initialTheme: Theme;
}) {
  const disabled = flags.comingSoon;
  const t = getDictionary(lang);
  const nav = t.nav.items as NavItem[];
  const pathname = usePathname();

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCompactMobile, setIsCompactMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkVisualTheme, setIsDarkVisualTheme] = useState(() =>
    isDarkFromDom(initialTheme),
  );

  const targetProgressRef = useRef(0);
  const animatedProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const scrolledRef = useRef(false);

  useEffect(() => {
    const updateTheme = () => {
      setIsDarkVisualTheme(isDarkFromDom(initialTheme));
    };

    updateTheme();

    const root = document.documentElement;
    const observer = new MutationObserver(updateTheme);

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [initialTheme]);

  useEffect(() => {
    const getScrollProgress = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;

      if (scrollable <= 0) {
        return 0;
      }

      return Math.min(1, Math.max(0, window.scrollY / scrollable));
    };

    const animate = () => {
      const target = targetProgressRef.current;
      const current = animatedProgressRef.current;
      const delta = target - current;

      if (Math.abs(delta) < 0.001) {
        animatedProgressRef.current = target;
        setScrollProgress(target);
        rafRef.current = null;
        return;
      }

      const next = current + delta * 0.18;
      animatedProgressRef.current = next;
      setScrollProgress(next);
      rafRef.current = window.requestAnimationFrame(animate);
    };

    const requestAnimate = () => {
      targetProgressRef.current = getScrollProgress();

      const nextScrolled = getNextScrolledState(
        window.scrollY,
        scrolledRef.current,
      );

      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setIsScrolled(nextScrolled);
      }

      if (rafRef.current == null) {
        rafRef.current = window.requestAnimationFrame(animate);
      }
    };

    requestAnimate();

    window.addEventListener("scroll", requestAnimate, { passive: true });
    window.addEventListener("resize", requestAnimate);

    return () => {
      window.removeEventListener("scroll", requestAnimate);
      window.removeEventListener("resize", requestAnimate);

      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 370px)");

    const updateCompact = () => {
      setIsCompactMobile(media.matches);
    };

    updateCompact();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", updateCompact);
      return () => media.removeEventListener("change", updateCompact);
    }

    media.addListener(updateCompact);
    return () => media.removeListener(updateCompact);
  }, []);

  const activeHref = useMemo(() => pathname || "/", [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSamePageNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href !== pathname) return;

    e.preventDefault();
    scrollToTop();
  };

  const getNavLinkClass = ({
    active,
    mobile = false,
  }: {
    active: boolean;
    mobile?: boolean;
  }) => {
    const sizeClass = mobile
      ? isCompactMobile
        ? isScrolled
          ? "px-1.5 py-1 text-[10px]"
          : "px-2 py-1.5 text-[10px]"
        : isScrolled
          ? "px-2 py-1 text-[10px]"
          : "px-2.5 py-1.5 text-[11px]"
      : isScrolled
        ? "px-3 py-1.5 text-[13px]"
        : "px-3.5 py-2 text-sm";

    const shapeClass = mobile ? "rounded-lg" : "rounded-xl";

    const baseClass =
      "inline-flex items-center justify-center whitespace-nowrap border font-semibold transition-all duration-200 ease-out";

    const darkActiveClass =
      "border-slate-700 bg-slate-800 text-blue-300 shadow-sm";

    const darkInactiveClass =
      "border-transparent text-slate-300 hover:bg-slate-800 hover:text-blue-200";

    const lightActiveClass = "border-blue-200 bg-white text-blue-700 shadow-sm";

    const lightInactiveClass =
      "border-transparent text-slate-700 hover:bg-white hover:text-blue-700";

    return cn(
      sizeClass,
      shapeClass,
      baseClass,
      isDarkVisualTheme
        ? active
          ? darkActiveClass
          : darkInactiveClass
        : active
          ? lightActiveClass
          : lightInactiveClass,
    );
  };

  const renderNavItem = (item: NavItem, mobile = false) => {
    if (disabled) {
      return (
        <span
          key={item.href}
          className={cn(
            mobile ? "rounded-lg" : "rounded-xl",
            mobile
              ? isCompactMobile
                ? isScrolled
                  ? "px-1.5 py-1 text-[10px]"
                  : "px-2 py-1.5 text-[10px]"
                : isScrolled
                  ? "px-2 py-1 text-[10px]"
                  : "px-2.5 py-1.5 text-[11px]"
              : isScrolled
                ? "px-3 py-1.5 text-[13px]"
                : "px-3.5 py-2 text-sm",
            "cursor-not-allowed whitespace-nowrap border border-transparent font-semibold opacity-60 transition-all duration-200 ease-out",
            isDarkVisualTheme ? "text-slate-500" : "text-slate-400",
          )}
        >
          {item.label}
        </span>
      );
    }

    const active = item.href === activeHref;

    return (
      <Link
        key={item.href}
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={getNavLinkClass({ active, mobile })}
        onClick={(e) => handleSamePageNavigation(e, item.href)}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 relative border-b backdrop-blur-xl transition-all duration-200",
        isDarkVisualTheme
          ? "border-slate-800 bg-slate-950/90"
          : "border-slate-200 bg-[#f1f5f9]/95",
        isScrolled &&
          (isDarkVisualTheme ? "shadow-lg shadow-black/10" : "shadow-sm"),
      )}
    >
      <Container>
        <div
          className={cn(
            "grid h-auto grid-cols-[minmax(0,1fr)_auto] items-center gap-3 transition-all duration-200 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]",
            isScrolled
              ? "min-h-12 py-1.5 sm:min-h-14"
              : "min-h-14 py-2 sm:min-h-16",
          )}
        >
          <Link
            href="/"
            onClick={(e) => handleSamePageNavigation(e, "/")}
            className="flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <div
              className={cn(
                "shrink-0 overflow-hidden rounded-xl transition-all duration-200",
                isScrolled
                  ? "h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12"
                  : "h-10 w-10 sm:h-11 sm:w-11 md:h-14 md:w-14",
              )}
            >
              <img
                src="/ms_logo.png"
                alt="MS logo"
                width="56"
                height="56"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="block h-full w-full object-contain"
                draggable={false}
              />
            </div>

            <div className="min-w-0 flex-1 leading-tight">
              <div
                className={cn(
                  "truncate font-bold leading-tight transition-all duration-200 lg:whitespace-nowrap",
                  isScrolled
                    ? "text-[11px] min-[371px]:text-[13px]"
                    : "text-[12px] min-[371px]:text-sm",
                  isDarkVisualTheme ? "text-slate-100" : "text-slate-900",
                )}
              >
                {site.name}
              </div>

              <div
                className={cn(
                  "truncate leading-tight transition-all duration-200 lg:whitespace-nowrap",
                  isScrolled
                    ? "text-[9px] sm:text-[11px]"
                    : "text-[10px] sm:text-xs",
                  isDarkVisualTheme ? "text-blue-400" : "text-blue-600",
                )}
              >
                {t.nav.subtitle}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center justify-center gap-2 lg:flex lg:justify-self-center">
            {nav.map((item) => renderNavItem(item, false))}
          </nav>

          <div
            className={cn(
              "flex items-center justify-end gap-2 transition-all duration-200",
              isScrolled && "scale-[0.97]",
            )}
          >
            <LanguageSwitcher lang={lang} />
            <ThemeToggle lang={lang} initialTheme={initialTheme} />
          </div>
        </div>

        <div
          className={cn(
            "transition-all duration-200 lg:hidden",
            isDarkVisualTheme
              ? "border-t border-slate-800/70"
              : "border-t border-slate-200/80",
            isScrolled ? "pb-1.5 pt-1.5" : "pb-2 pt-2",
          )}
        >
          <div className="overflow-hidden">
            <div className="flex justify-center">
              <div
                className={cn(
                  "flex w-max min-w-max items-center justify-center whitespace-nowrap origin-center transition-all duration-200",
                  isScrolled ? "gap-1" : "gap-1.5",
                  isCompactMobile
                    ? isScrolled
                      ? "scale-[0.9]"
                      : "scale-[0.94]"
                    : isScrolled
                      ? "scale-[0.97]"
                      : "scale-100",
                )}
              >
                {nav.map((item) => renderNavItem(item, true))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden",
          isDarkVisualTheme ? "bg-slate-800/60" : "bg-slate-200/90",
        )}
      >
        <div
          className="h-full origin-left bg-blue-500 will-change-transform"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>
    </header>
  );
}
