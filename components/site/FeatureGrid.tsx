import { Card } from "@/components/ui/Card";

const features = [
  {
    title: "Határidők és automatikus emlékeztetők",
    desc: "Email értesítések, feladatlista és követés, hogy semmi ne csússzon el (szerviz, garancia, projekt).",
  },
  {
    title: "Átlátható kimutatások és felületek",
    desc: "Bevétel, kiadás, trendek egy közös nézetben, hogy gyorsabb döntéseket hozhass.",
  },
  {
    title: "Készlet és erőforrás követés",
    desc: "Minimum készlet riasztás, mozgások nyomon követése, rendelési javaslatok.",
  },
  {
    title: "Tiszta, stabil adatbázis alap",
    desc: "Rendbetett adatok, duplikációk nélkül. Gyors lekérdezések és növekedésre kész rendszer.",
  },
  {
    title: "Jogosultság és adatvédelem",
    desc: "Szerepkörök, naplózás és alap védelem, hogy mindenki csak azt lássa, amit kell.",
  },
  {
    title: "Folyamatos működés és támogatás",
    desc: "Karbantartás, mentések és kisebb fejlesztések, kiszámítható, stabil rendszer.",
  },
];

export function FeatureGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <Card key={f.title} className="p-6">
          <div className="text-base font-bold text-slate-900">{f.title}</div>
          <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
        </Card>
      ))}
    </div>
  );
}
