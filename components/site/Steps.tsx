import { Card } from "@/components/ui/Card";

const steps = [
  {
    title: "1) Rövid felmérés",
    desc: "Mitől fáj most? Hol csúszik idő, hol van hiba? 15–30 perc, gyors kérdések.",
  },
  {
    title: "2) Javaslat + prototípus",
    desc: "Kapsz 1–2 opciót: gyorsnyereség vagy rendszerépítés. Lépésről lépésre.",
  },
  {
    title: "3) Építés & átadás",
    desc: "Heti egyeztetés, kis szállítások. Átadáskor betanítás + dokumentáció.",
  },
  {
    title: "4) Support",
    desc: "Havi csomagban karbantartás és kisebb fejlesztések. Stabil működés.",
  },
];

export function Steps() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s) => (
        <Card key={s.title} className="p-6">
          <div className="text-base font-bold text-slate-900">{s.title}</div>
          <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
        </Card>
      ))}
    </div>
  );
}
