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
    name: "Felmérés + gyorsnyereség",
    price: "149 000 Ft-tól",
    hint: "Gyors indulás • 1 fókuszált automatizálás vagy mini megoldás",
    features: [
      "Rövid folyamatfelmérés + javaslatlista",
      "1 konkrét probléma gyors rendbetétele (pl. emlékeztető / státusz / riport)",
      "Átadás + rövid betanítás",
    ],
  },
  {
    name: "Belső rendszer (modulárisan)",
    price: "450 000 Ft-tól",
    hint: "Első verzió (MVP) • utána lépésenként bővíthető",
    popular: true,
    features: [
      "Ügyfél / munka / státusz követés egy helyen",
      "Jogosultságok és naplózás (alapszint)",
      "Riportok és dashboard (a döntéshez szükséges mutatókkal)",
      "Átadás + dokumentáció",
    ],
  },
  {
    name: "Havi support / üzemeltetés",
    price: "49 000 Ft / hó-tól",
    hint: "Karbantartás • kisebb fejlesztések • kiszámítható működés",
    features: [
      "Frissítések, mentések, alap ellenőrzések",
      "Havi keret kisebb módosításokra / fejlesztésekre",
      "Gyors hibajavítás és tanácsadás",
    ],
  },
];

const pc: Plan[] = [
  {
    name: "PC gyors átvizsgálás + optimalizálás",
    price: "9 900 Ft-tól",
    hint: "Állapottól függ • diagnosztika + gyors rendbetétel",
    features: [
      "Lassulás okainak feltárása (szoftver/hardver)",
      "Alap karbantartás (startup, takarítás, beállítások)",
      "Javaslat: mit érdemes javítani / bővíteni",
    ],
  },
  {
    name: "Windows újratelepítés + adatmentés",
    price: "24 900–59 900 Ft",
    hint: "Géptípustól és mentési igénytől függ",
    features: [
      "Adatmentés (megbeszélt mappák szerint)",
      "Tiszta telepítés + driverek + alap beállítás",
      "Alap programcsomag (böngésző, PDF, stb.)",
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <Card className="relative p-6">
      <div className="flex items-center justify-between">
        <div className="text-base font-extrabold text-slate-900">
          {plan.name}
        </div>
        {plan.popular && (
          <div className="ml-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">
            Legnépszerűbb
          </div>
        )}
      </div>

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
        fenti árak irányárak. A pontos ajánlatot egy rövid egyeztetés után adom,
        az igények és az összetettség alapján.
      </div>
    </div>
  );
}
