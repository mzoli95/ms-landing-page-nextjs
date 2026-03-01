import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type Plan = {
  name: string;
  price: string;
  hint: string;
  popular?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Audit + Gyorsnyereség",
    price: "149.000 Ft-tól",
    hint: "1–2 hét • 1 konkrét automatizálás / mini app",
    features: [
      "Folyamat felmérés és javaslat",
      "Gyors, mérhető javítás (pl. emlékeztető/riasztó)",
      "Átadás + rövid betanítás",
    ],
  },
  {
    name: "Belső rendszer",
    price: "450.000 Ft-tól",
    hint: "3–6 hét • webapp + adatbázis + alap riportok",
    popular: true,
    features: [
      "Ügyfél/munkafolyamat nyilvántartás",
      "Jogosultságok, naplózás (alapszint)",
      "Riportok és dashboard",
      "Átadás + dokumentáció",
    ],
  },
  {
    name: "Havi support",
    price: "49.000 Ft / hó-tól",
    hint: "Karbantartás • kisebb fejlesztések • nyugalom",
    features: [
      "Frissítések, mentés, alap monitor",
      "1–2 kisebb fejlesztés havonta",
      "Gyors hibajavítás",
    ],
  },
];

const pc = [
  {
    name: "PC Gyorsszerviz",
    price: "19.900 Ft",
    hint: "90 perc • diagnosztika + gyors optimalizálás",
    features: [
      "Lassulás okainak feltárása",
      "Takarítás, startup rend",
      "Alap javaslatok",
    ],
  },
  {
    name: "Újratelepítés + adatmentés",
    price: "29.900–59.900 Ft",
    hint: "típustól függ • tiszta, gyors rendszer",
    features: ["Adatmentés", "Telepítés, driverek", "Alap programcsomag"],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <Card className="relative p-6">
      {plan.popular && (
        <div className="absolute right-4 top-4 rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">
          Legnépszerűbb
        </div>
      )}
      <div className="text-base font-extrabold text-slate-900">{plan.name}</div>
      <div className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
        {plan.price}
      </div>
      <div className="mt-2 text-sm text-slate-600">{plan.hint}</div>
      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button href="/contact" className="w-full">
          Ajánlatkérés
        </Button>
      </div>
    </Card>
  );
}

export function PricingGrid() {
  return (
    <div className="space-y-10">
      <div>
        <div className="text-sm font-bold text-slate-900">Fejlesztés</div>
        <div className="mt-4 grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </div>

      <div>
        <div className="text-sm font-bold text-slate-900">
          PC / IT (kiegészítő)
        </div>
        <div className="mt-4 grid gap-5 lg:grid-cols-2">
          {pc.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">Megjegyzés:</span> a
        fenti árak irányárak. Pontos ajánlatot egy rövid felmérés után adok
        (általában 15–30 perc).
      </div>
    </div>
  );
}
