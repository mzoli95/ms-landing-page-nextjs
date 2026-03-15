"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";
import { themeCookieName, type Theme } from "@/components/lib/theme.shared";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

function getThemeFromDom(fallback: Theme): Theme {
  if (typeof document === "undefined") {
    return fallback;
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeToggle({
  lang,
  initialTheme,
}: {
  lang: Lang;
  initialTheme: Theme;
}) {
  const t = getDictionary(lang);
  const [theme, setTheme] = useState<Theme>(() =>
    getThemeFromDom(initialTheme),
  );

  useEffect(() => {
    const domTheme = getThemeFromDom(initialTheme);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(domTheme);
  }, [initialTheme]);

  function onToggle() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    localStorage.setItem(themeCookieName, nextTheme);
    document.cookie = `${themeCookieName}=${nextTheme}; path=/; max-age=31536000; samesite=lax`;
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white sm:h-8 sm:w-8"
      aria-label={
        theme === "dark"
          ? t.nav.themeToggle.switchToLight
          : t.nav.themeToggle.switchToDark
      }
      title={
        theme === "dark" ? t.nav.themeToggle.light : t.nav.themeToggle.dark
      }
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
