import { Card } from "@/components/ui/Card";

type UseCase = {
  title: string;
  who: string;
  problem: string[];
  solution: string[];
  why: string[];
  timeframe: string;
};

const useCases: UseCase[] = [
  {
    title: "Határidők + ügyfél-emlékeztető rendszer",
    who: "Szervizek / rendszeres karbantartást végző cégek",
    timeframe: "Gyors induló csomag: kb. 1 hét",
    problem: [
      "Az ügyféladatok több helyen vannak (Excel, jegyzet, email).",
      "A rendszeres visszahívás vagy esedékesség követése manuális.",
      "A visszatérő ügyfelek kezelése nem tudatos, inkább alkalomszerű.",
    ],
    solution: [
      "Egységes ügyfél- és eszköznyilvántartás (időpontokkal, státuszokkal).",
      "Szabály-alapú emlékeztetők (idő / státusz / egyedi logika alapján).",
      "Átlátható admin felület: mikor ment ki értesítés, mi a következő lépés.",
    ],
    why: [
      "Kevesebb elfelejtett utánkövetés, több visszatérő ügyfél.",
      "A határidők nem fejben vagy külön fájlokban élnek.",
      "Később bővíthető további értesítési csatornákkal vagy riportokkal.",
    ],
  },
  {
    title: "Vezetői áttekintő (bevétel, költség, kintlévőség)",
    who: "Admin-heavy KKV-k / kisebb irodák",
    timeframe: "Első működő verzió: 1–2 hét",
    problem: [
      "A pénzügyi adatok több forrásból állnak össze.",
      "Nincs gyors, napi szintű rálátás a kintlévőségekre.",
      "A havi riport manuális összeszedést igényel.",
    ],
    solution: [
      "Egységes adatstruktúra a bevétel- és költségadatokhoz.",
      "Letisztult dashboard: trendek, kategóriák, státusz szerinti bontás.",
      "Testreszabott export / riport nézetek a könyvelés előkészítéséhez.",
    ],
    why: [
      "Gyorsabb döntéshozatal valós adatok alapján.",
      "Kevesebb manuális riportkészítés és hiba.",
      "Átláthatóbb működés a tulajdonos vagy vezető számára.",
    ],
  },
  {
    title: "Készletfigyelés + rendelési javaslat",
    who: "Anyaggal dolgozó vállalkozások / kisebb kereskedések",
    timeframe: "Stabil alap: 2–3 hét",
    problem: [
      "A készletinformáció nem mindig naprakész.",
      "Kritikus tételek hiánya munka- vagy bevételkiesést okoz.",
      "A beszerzés inkább reakció, mint tudatos tervezés.",
    ],
    solution: [
      "Egyszerű készletmozgás-kezelés (beérkezés, kiadás, állapot).",
      "Minimum szint figyelés + automatikus jelzés.",
      "Rendelési javaslat lista a tényleges igények alapján.",
    ],
    why: [
      "Kisebb eséllyel áll meg a munka alapanyaghiány miatt.",
      "Tervezhetőbb beszerzés és pénzmozgás.",
      "Később több felhasználós, jogosultsági rendszerrel bővíthető.",
    ],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-sm text-slate-600">
      {items.map((i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function UseCases() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {useCases.map((u) => (
        <Card key={u.title} className="p-6">
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
              {u.timeframe}
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
