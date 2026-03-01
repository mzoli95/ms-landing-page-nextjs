import { Card } from "@/components/ui/Card";

const faqs = [
  {
    q: "Mennyi idő alatt készül el egy belső rendszer?",
    a: "A gyorsnyereség 1–2 hét, egy mini belső webapp tipikusan 3–6 hét. A pontos idő a funkcióktól függ.",
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
    q: "Kell hozzá új hardver?",
    a: "Sokszor nem. Sok mindent webesen meg lehet oldani. PC oldalon SSD/RAM bővítés gyakran a legjobb ár/érték.",
  },
];

export function FAQ() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {faqs.map((f) => (
        <Card key={f.q} className="p-6">
          <div className="text-sm font-extrabold text-slate-900">{f.q}</div>
          <p className="mt-2 text-sm leading-6 text-slate-600">{f.a}</p>
        </Card>
      ))}
    </div>
  );
}
