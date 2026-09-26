import { Card } from "@/components/ui/Card";
import type { Lang } from "@/components/lib/i18n";

export function Steps({ lang = "hu" }: { lang?: Lang }) {
  const steps =
    lang === "en"
      ? [
          {
            title: "Describe the task",
            desc: "Tell me about your idea or the device and the problem you are experiencing.",
          },
          {
            title: "Agree the scope and fee",
            desc: "We clarify what I can help with, the expected cost and the next step.",
          },
          {
            title: "Work and check",
            desc: "I carry out the agreed task and check the result. Any extra work is discussed first.",
          },
          {
            title: "Explain and hand over",
            desc: "You get a clear explanation of what changed and what to look out for next.",
          },
        ]
      : [
          {
            title: "Leírod a feladatot",
            desc: "Mesélj az ötletedről, vagy írd meg, milyen eszközzel és milyen problémával keresel.",
          },
          {
            title: "Egyeztetjük a díjat",
            desc: "Tisztázzuk, miben tudok segíteni, mennyibe kerülhet, és mi legyen a következő lépés.",
          },
          {
            title: "Elvégzem és ellenőrzöm",
            desc: "Megcsinálom a megbeszélt feladatot, és ellenőrzöm az eredményt. A pluszmunkát előbb egyeztetjük.",
          },
          {
            title: "Átadom és elmagyarázom",
            desc: "Érthetően elmondom, mi változott, és mire érdemes figyelned a továbbiakban.",
          },
        ];

  return (
    <div className="space-y-4">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((s, index) => (
          <Card key={s.title} className="p-6">
            <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              {lang === "en" ? `Step ${index + 1}` : `${index + 1}. lépés`}
            </div>
            <div className="mt-2 text-base font-bold text-slate-900">
              {s.title}
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
