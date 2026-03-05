import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
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

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="grid h-16 w-16 place-items-center overflow-hidden">
              <Image
                src="/ms_logo.png.png"
                alt="MS logo"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
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
                  className="text-sm font-semibold text-slate-700 hover:text-slate-900"
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
                className="text-xs font-semibold text-slate-600 hover:text-slate-900"
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
    </header>
  );
}
