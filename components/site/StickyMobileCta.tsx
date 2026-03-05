"use client";

import { Button } from "@/components/ui/Button";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";
import { trackEvent } from "@/components/lib/analytics";

export function StickyMobileCta({ lang = "hu" }: { lang?: Lang }) {
  const t = getDictionary(lang);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <Button
        href="/contact"
        className="w-full"
        onClick={() =>
          trackEvent("cta_click", {
            location: "sticky_mobile",
            cta: "primary",
          })
        }
      >
        {t.hero.ctaPrimary}
      </Button>
    </div>
  );
}
