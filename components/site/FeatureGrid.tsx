import { Card } from "@/components/ui/Card";

const features = [
  {
    title: "Határidők & riasztások",
    desc: "Email értesítés, feladatlista, automatikus követés. Pl. szerviz esedékesség, garancia lejárat.",
  },
  {
    title: "Riportok & dashboard",
    desc: "Bevétel–kiadás, kintlévőség, trendek, top ügyfelek/szolgáltatások. Minden egy helyen.",
  },
  {
    title: "Raktár & készlet",
    desc: "Minimum készlet riasztás, kiadás/beérkezés, gyors leltár, rendelési lista.",
  },
  {
    title: "Adatbázis rendbetétel",
    desc: "Normalizálás, duplikációk megszüntetése, gyors lekérdezések, stabil alap a növekedéshez.",
  },
  {
    title: "Biztonság & jogosultság",
    desc: "Szerepkörök, naplózás, alap védelem – hogy ne lásson mindenki mindent.",
  },
  {
    title: "Üzemeltetés & support",
    desc: "Havi karbantartás, kisebb fejlesztések, mentések – kiszámítható működés.",
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
