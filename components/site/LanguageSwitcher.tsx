"use client";

import { useRouter } from "next/navigation";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export function LanguageSwitcher({ lang }: { lang: Lang }) {
  const router = useRouter();
  const t = getDictionary(lang);

  function setLang(nextLang: Lang) {
    document.cookie = `site_lang=${nextLang}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }

  return (
    <div className="inline-flex items-center rounded-lg border border-slate-200 bg-white p-1">
      <button
        type="button"
        onClick={() => setLang("hu")}
        className={`rounded-md px-2 py-1 text-xs font-bold transition ${
          lang === "hu"
            ? "bg-slate-900 text-white"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-label={t.nav.languageSwitcher.hu}
      >
        HU
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-md px-2 py-1 text-xs font-bold transition ${
          lang !== "hu"
            ? "bg-slate-900 text-white"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-label={t.nav.languageSwitcher.en}
      >
        EN
      </button>
    </div>
  );
}
