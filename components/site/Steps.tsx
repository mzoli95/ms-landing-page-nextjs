"use client";

import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export function Steps({ lang = "hu" }: { lang?: Lang }) {
  const t = getDictionary(lang);
  const steps = t.steps;

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, index) => (
        <ScrollReveal key={s.title} delayMs={index * 70} yOffset="sm">
          <Card className="p-6">
            <div className="text-base font-bold text-slate-900">{s.title}</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  );
}
