import { Card } from "@/components/ui/Card";
import type { Lang } from "@/components/lib/i18n";

export function FAQ({ lang = "hu" }: { lang?: Lang }) {
  const faqs =
    lang === "en"
      ? [
          {
            q: "How long does a custom internal system take?",
            a: "Quick wins usually arrive in 1–2 weeks, while a compact internal app typically takes 3–6 weeks.",
          },
          {
            q: "How much of my time is needed?",
            a: "A short weekly sync is enough. The process is built to reduce your overhead.",
          },
          {
            q: "Can we extend it later?",
            a: "Yes, the architecture is modular and ready for future features.",
          },
          {
            q: "Will there be hidden costs?",
            a: "No. Scope and pricing are clear before development starts.",
          },
          {
            q: "Do you provide support after launch?",
            a: "Yes, ongoing support and maintenance are available.",
          },
        ]
      : [
          {
            q: "Mennyi idő alatt készül el egy belső rendszer?",
            a: "Az első kézzelfogható eredmények általában 1–2 héten belül látszanak, egy mini belső webapp pedig tipikusan 3–6 hét. A pontos idő a funkcióktól függ.",
          },
          {
            q: "Hogy néz ki a közös munka, ha nincs sok időm?",
            a: "Rövid heti egyeztetés elég. A cél: minél kevesebb terhelés neked, mégis gyors haladás.",
          },
          {
            q: "Lehet később bővíteni?",
            a: "Igen – úgy építem, hogy legyen adatbázis alap, jogosultság, és bővíthető modulok.",
          },
          {
            q: "Lesznek rejtett költségek?",
            a: "Nem. A scope és az árképzés fejlesztés előtt tisztán rögzítve van.",
          },
          {
            q: "Van támogatás átadás után is?",
            a: "Igen, folyamatos támogatás és karbantartás is kérhető.",
          },
        ];

  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <Card key={f.q} className="p-6">
          <details className="group">
            <summary className="cursor-pointer list-none text-sm font-extrabold text-slate-900 sm:text-base">
              {f.q}
            </summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">{f.a}</p>
          </details>
        </Card>
      ))}
    </div>
  );
}
