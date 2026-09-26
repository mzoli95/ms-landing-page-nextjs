"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import type { Lang } from "@/components/lib/i18n";
import type { Theme } from "@/components/lib/theme.shared";
import { flags } from "@/components/lib/site";

export function Navbar({
  lang,
  initialTheme,
}: {
  lang: Lang;
  initialTheme: Theme;
}) {
  const en = lang === "en";
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/services", label: en ? "How I can help" : "Miben segítek?" },
    { href: "/portfolio", label: en ? "Projects" : "Projektek" },
    {
      href: "/usecases",
      label: en ? "Solutions" : "Megoldások",
    },

    { href: "/pricing", label: en ? "Pricing" : "Árak" },
    { href: "/about", label: en ? "About" : "Rólam" },
  ];
  const projectLinks = [
    { href: "/portfolio/toyzumi", label: "ToyZumi" },
    { href: "/portfolio/menutivo", label: "Menutivo" },
    { href: "/portfolio/molnar-diagnostic", label: "Molnár Diagnostic" },
  ];
  function navLink(item: { href: string; label: string }) {
    const active =
      pathname === item.href ||
      (item.href !== "/" && pathname.startsWith(item.href + "/"));
    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setOpen(false)}
        aria-current={active ? "page" : undefined}
        className={
          "rounded-lg px-3 py-3 text-sm font-semibold transition hover:bg-slate-50 " +
          (active ? "text-blue-700 dark:text-blue-300" : "text-slate-600")
        }
      >
        {item.label}
      </Link>
    );
  }
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl dark:bg-[#0b1020]/95">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-3">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center gap-2"
            aria-label={en ? "Molnár Systems home" : "Molnár Systems főoldal"}
          >
            <Image
              src="/ms_logo.png"
              alt=""
              width={46}
              height={46}
              className="h-8 w-8 object-contain sm:h-10 sm:w-10"
            />
            <span className="text-xs font-bold tracking-tight text-slate-900 sm:text-sm">
              Molnár Systems
              <span className="mt-0.5 hidden text-[10px] font-medium tracking-wider text-slate-500 sm:block">
                DESIGN · CODE · SYSTEMS
              </span>
            </span>
          </Link>
          {!flags.comingSoon && (
            <nav
              aria-label={en ? "Main navigation" : "Fő navigáció"}
              className="hidden items-center xl:flex"
            >
              {links.map(navLink)}
            </nav>
          )}
          <div className="flex items-center gap-1 sm:gap-2">
            <LanguageSwitcher lang={lang} />
            <ThemeToggle lang={lang} initialTheme={initialTheme} />
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={
                en ? "Toggle navigation" : "Menü nyitása vagy bezárása"
              }
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-900 xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Link
              href="/contact"
              className="ml-1 hidden items-center gap-2 rounded-full bg-blue-700 px-4 py-3 text-xs font-bold text-white xl:inline-flex"
            >
              {en ? "Contact" : "Kapcsolat"}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        {open && !flags.comingSoon && (
          <nav
            id="mobile-navigation"
            aria-label={en ? "Mobile navigation" : "Mobil navigáció"}
            className="max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-slate-200 py-4 xl:hidden"
          >
            <div className="grid grid-cols-2 gap-1">
              {links.map(navLink)}
              {navLink({
                href: "/contact",
                label: en ? "Contact" : "Kapcsolat",
              })}
            </div>
            <div className="mt-3 border-t border-slate-200 pt-3">
              <p className="px-3 py-2 text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                {en ? "Explore a project" : "Közvetlenül a projekthez"}
              </p>
              <div className="flex flex-wrap">{projectLinks.map(navLink)}</div>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
