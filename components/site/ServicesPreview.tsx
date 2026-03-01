import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Belső rendszerek és webappok",
    items: [
      "Ügyfél/munka nyilvántartás (CRM light)",
      "Workflow: beérkezett → folyamatban → kész → számlázva",
      "Ügyfélportál, dokumentumok, státuszok",
    ],
  },
  {
    title: "Automatizálás és értesítések",
    items: [
      "Határidő riasztó emailben",
      "Készlet minimum figyelés",
      "Emlékeztetők: szerviz, lejáratok, kontrollok",
    ],
  },
  {
    title: "Adatbázis, riportok, döntéstámogatás",
    items: [
      "Bevétel–kiadás, kintlévőség, eredmény",
      "KPI dashboardok chartokkal",
      "Adatbázis normalizálás, rendbetétel",
    ],
  },
  {
    title: "PC karbantartás (kiegészítő)",
    items: [
      "SSD/RAM bővítés, gyorsítás",
      "Újratelepítés + adatmentés",
      "Vírusirtás, alap biztonsági beállítások",
    ],
  },
];

export function ServicesPreview() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {services.map((s) => (
        <Card key={s.title} className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="text-base font-bold text-slate-900">{s.title}</div>
          </div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {s.items.map((i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
      <div className="lg:col-span-2 flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <div className="text-base font-bold text-slate-900">
          Nem tudod pontosan, mi kell?
        </div>
        <p className="text-sm text-slate-600">
          Írj 3 mondatot a problémáról, és javaslok egy gyors, költséghatékony
          megoldást.
        </p>
        <Button href="/contact">Kérek javaslatot</Button>
      </div>
    </div>
  );
}
