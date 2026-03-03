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

export function ThemeToggle({
  lang,
  initialTheme,
}: {
  lang: Lang;
  initialTheme: Theme;
}) {
  const t = getDictionary(lang);
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    setTheme(initialTheme);
  }, [initialTheme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem(themeCookieName) as Theme | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      return;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(themeCookieName, theme);
    document.cookie = `${themeCookieName}=${theme}; path=/; max-age=31536000; samesite=lax`;
  }, [theme]);

  function onToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 sm:h-8 sm:w-8"
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
