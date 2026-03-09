import { Card } from "@/components/ui/Card";
import type { Lang } from "@/components/lib/i18n";

export function FAQ({ lang = "hu" }: { lang?: Lang }) {
  const faqs =
    lang === "en"
      ? [
          {
            q: "How long does it take to get something useful?",
            a: "A first useful result often appears within 1–2 weeks. A small internal tool usually takes around 3–6 weeks, depending on what it needs to do.",
          },
          {
            q: "How much of my time will this need?",
            a: "Usually a short weekly check-in is enough. The aim is to reduce your load, not create extra meetings.",
          },
          {
            q: "Can we start small and extend it later?",
            a: "Yes. In most cases that is the best approach: start with one important problem, then build further only if it proves useful.",
          },
          {
            q: "Will there be hidden costs?",
            a: "No. Scope and pricing are discussed clearly before implementation starts.",
          },
          {
            q: "Do you help after handover too?",
            a: "Yes. Support, maintenance and smaller follow-up improvements are available if needed.",
          },
        ]
      : [
          {
            q: "Mennyi idő alatt lesz valami használható?",
            a: "Az első hasznos eredmény sokszor már 1–2 héten belül látszik. Egy kisebb belső rendszer általában 3–6 hét, attól függően, mire van szükség.",
          },
          {
            q: "Mi van, ha nincs sok időm a projektre?",
            a: "Általában elég egy rövid heti egyeztetés. A cél az, hogy ez tehermentesítsen, ne még több plusz feladatot hozzon.",
          },
          {
            q: "Lehet először kicsiben kezdeni, és később bővíteni?",
            a: "Igen, sőt sokszor ez a legjobb út. Először rendbe tesszük a legfontosabb részt, és utána csak azt bővítjük, ami tényleg hasznos.",
          },
          {
            q: "Lesznek rejtett költségek?",
            a: "Nem. Indulás előtt tisztán átbeszéljük, mi fér bele, mennyibe kerül, és mi lesz a következő lépés.",
          },
          {
            q: "Átadás után is tudsz segíteni?",
            a: "Igen. Ha kell, utána is maradok supporttal, karbantartással és kisebb továbbfejlesztésekkel.",
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
