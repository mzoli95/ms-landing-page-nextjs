"use client";

import Link from "next/link";
import Image from "next/image";
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
  const [isDarkVisualTheme, setIsDarkVisualTheme] = useState(() =>
    isDarkFromDom(initialTheme),
  );

  const targetProgressRef = useRef(0);
  const animatedProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

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
        ? "px-2.5 py-1.5 text-[10px]"
        : "px-3 py-1.5 text-[11px]"
      : "px-3.5 py-2 text-sm";

    const shapeClass = mobile ? "rounded-lg" : "rounded-xl";

    const baseClass =
      "inline-flex items-center justify-center border font-semibold transition-all duration-200 ease-out";

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
                ? "px-2.5 py-1.5 text-[10px]"
                : "px-3 py-1.5 text-[11px]"
              : "px-3.5 py-2 text-sm",
            "cursor-not-allowed border border-transparent font-semibold opacity-60",
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
        "sticky top-0 z-50 border-b backdrop-blur-xl",
        isDarkVisualTheme
          ? "border-slate-800 bg-slate-950/90"
          : "border-slate-200 bg-[#f1f5f9]",
      )}
    >
      <Container>
        <div className="grid h-auto min-h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-2 sm:min-h-16 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <Link
            href="/"
            onClick={(e) => handleSamePageNavigation(e, "/")}
            className="flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl sm:h-11 sm:w-11 md:h-14 md:w-14">
              <Image
                src="/ms_logo.png"
                alt="MS logo"
                width={56}
                height={56}
                className="h-10 w-10 object-contain sm:h-11 sm:w-11 md:h-14 md:w-14"
                priority
              />
            </div>

            <div className="min-w-0 flex-1 leading-tight">
              <div
                className={cn(
                  "break-words text-[12px] font-bold leading-tight min-[371px]:text-sm lg:whitespace-nowrap",
                  isDarkVisualTheme ? "text-slate-100" : "text-slate-900",
                )}
              >
                {site.name}
              </div>

              <div
                className={cn(
                  "break-words text-[10px] leading-tight sm:text-xs lg:whitespace-nowrap",
                  isDarkVisualTheme ? "text-blue-400" : "text-blue-600",
                )}
              >
                {t.nav.subtitle}
              </div>
            </div>
          </Link>

          <nav
            className={cn(
              "hidden items-center justify-center gap-2 rounded-xl border px-2 py-1 shadow-sm lg:flex lg:justify-self-center",
              isDarkVisualTheme
                ? "border-slate-700 bg-slate-900"
                : "border-slate-200 bg-white",
            )}
          >
            {nav.map((item) => renderNavItem(item, false))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            {!isCompactMobile && (
              <>
                <LanguageSwitcher lang={lang} />
                <ThemeToggle lang={lang} initialTheme={initialTheme} />
              </>
            )}
          </div>
        </div>

        <div
          className={cn(
            "pb-2 pt-2 lg:hidden",
            isDarkVisualTheme
              ? "border-t border-slate-800/70"
              : "border-t border-slate-200/80",
          )}
        >
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {nav.map((item) => renderNavItem(item, true))}
          </div>

          {isCompactMobile && (
            <div className="mt-2 flex items-center justify-center gap-2">
              <LanguageSwitcher lang={lang} />
              <ThemeToggle lang={lang} initialTheme={initialTheme} />
            </div>
          )}
        </div>
      </Container>

      <div
        className={cn(
          "h-px w-full overflow-hidden",
          isDarkVisualTheme ? "bg-slate-800/60" : "bg-slate-200",
        )}
      >
        <div
          className="h-px origin-left bg-blue-500 will-change-transform"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>
    </header>
  );
}
