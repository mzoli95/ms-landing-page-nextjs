import { Card } from "@/components/ui/Card";

type UseCase = {
  id: string;
  title: string;
  who: string;
  timeframeLabel: string;
  problem: string[];
  solution: string[];
  why: string[];
};

const useCases: UseCase[] = [
  {
    id: "reminders",
    title: "Határidők és ügyfél-emlékeztetés rendbetétele",
    who: "Szervizek / rendszeres karbantartást végző cégek",
    timeframeLabel: "Gyors indulás • igény alapján ütemezve",
    problem: [
      "Az ügyféladatok több helyen vannak (Excel, jegyzet, email).",
      "A visszahívások és esedékességek manuálisak, könnyű elfelejteni.",
      "A visszatérő ügyfelek kezelése esetleges.",
    ],
    solution: [
      "Egységes ügyfél- és eszköznyilvántartás.",
      "Automatikus emlékeztetők előre beállított szabályok alapján.",
      "Átlátható felület a státuszok és határidők követéséhez.",
    ],
    why: [
      "Kevesebb elmaradt utánkövetés.",
      "Több visszatérő ügyfél.",
      "A határidők nem fejben vagy külön fájlokban élnek.",
    ],
  },
  {
    id: "dashboard",
    title: "Vezetői rálátás egy helyen",
    who: "Adminisztrációval terhelt KKV-k / kisebb irodák",
    timeframeLabel: "Első működő verzió • lépésenként bővíthető",
    problem: [
      "A pénzügyi és működési adatok szétszórtan vannak.",
      "Nincs napi szintű, gyors áttekintés.",
      "A havi riport manuális gyűjtést igényel.",
    ],
    solution: [
      "Egységes adatkezelés a fő mutatókhoz.",
      "Letisztult dashboard a legfontosabb számokkal.",
      "Exportálható riport nézetek.",
    ],
    why: [
      "Gyorsabb, megalapozottabb döntések.",
      "Kevesebb manuális adminisztráció.",
      "Átláthatóbb működés.",
    ],
  },
  {
    id: "inventory",
    title: "Készletfigyelés, hogy ne álljon meg a munka",
    who: "Anyaggal dolgozó vállalkozások / kisebb kereskedések",
    timeframeLabel: "Stabil alap • később bővíthető",
    problem: [
      "A készlet nem mindig naprakész.",
      "Hiányzó tételek munka- vagy bevételkiesést okoznak.",
      "A beszerzés inkább reakció, mint tervezés.",
    ],
    solution: [
      "Egyszerű készletmozgás-kezelés.",
      "Minimum készletszint figyelés és jelzés.",
      "Automatikus rendelési javaslat.",
    ],
    why: [
      "Kevesebb leállás alapanyaghiány miatt.",
      "Tervezhetőbb beszerzés.",
      "Kiszámíthatóbb működés.",
    ],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-sm text-slate-600">
      {items.map((text) => (
        <li key={text} className="flex gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

export function UseCases() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {useCases.map((u) => (
        <Card key={u.id} className="p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-base font-extrabold text-slate-900">
                {u.title}
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-500">
                {u.who}
              </div>
            </div>
            <div className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700">
              {u.timeframeLabel}
            </div>
          </div>

          <div className="mt-5">
            <div className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              Probléma
            </div>
            <BulletList items={u.problem} />
          </div>

          <div className="mt-5">
            <div className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              Megoldás koncepció
            </div>
            <BulletList items={u.solution} />
          </div>

          <div className="mt-5">
            <div className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              Miért jó
            </div>
            <BulletList items={u.why} />
          </div>
        </Card>
      ))}
    </div>
  );
}
