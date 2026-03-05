"use client";

import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export function FeatureGrid({ lang = "hu" }: { lang?: Lang }) {
  const t = getDictionary(lang);
  const features = t.featureGrid;

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {features.map((f, index) => (
        <ScrollReveal key={f.title} delayMs={index * 70} yOffset="sm">
          <Card className="p-6">
            <div className="text-base font-bold text-slate-900">{f.title}</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  );
}
