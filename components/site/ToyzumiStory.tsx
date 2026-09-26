import { ArrowRight, Search, Users, PackageCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ToyzumiDemo } from "./ToyzumiDemo";
import type { Lang } from "@/components/lib/i18n";

export function ToyzumiStory({ lang }: { lang: Lang }) {
  const en = lang === "en";
  const stories = en
    ? [
        {
          icon: Search,
          title: "Buying stock on a hunch?",
          problem:
            "Sales only show what people could already buy. Missing products leave demand invisible.",
          solution:
            "Searches, zero-result queries, clicks, wishlists and preorders become demand signals. The system suggests procurement priorities and quantities.",
          value: "A better basis for deciding what to source.",
        },
        {
          icon: Users,
          title: "One purchase, then silence?",
          problem:
            "A catalogue alone gives collectors little reason to build a relationship with a store.",
          solution:
            "A shared collecting interest is supported by loyalty levels, rewards, wishlists, content and event-related communication.",
          value: "Tools for building a returning collector community.",
        },
        {
          icon: PackageCheck,
          title: "Orders scattered across tools?",
          problem:
            "Inventory, payments, fulfilment and support become disconnected as order volume grows.",
          solution:
            "Orders and stock share one operational system, with fulfilment queues and customer support context.",
          value: "A clearer view of the next task and its owner.",
        },
      ]
    : [
        {
          icon: Search,
          title: "Megérzésből rendelsz készletet?",
          problem:
            "Az eladás csak azt mutatja, amit már meg lehetett venni. A hiányzó termékek iránti kereslet könnyen láthatatlan marad.",
          solution:
            "A keresések, nulla találatos kifejezések, kattintások, kívánságlisták és előrendelések keresleti jelzésekké állnak össze. Ezekből beszerzési prioritás és mennyiségi javaslat készül.",
          value: "Jobb támpont ahhoz, miből és mennyit érdemes beszerezni.",
        },
        {
          icon: Users,
          title: "Egyszer vásárol, aztán eltűnik?",
          problem:
            "Egy termékkatalógus önmagában kevés okot ad arra, hogy a gyűjtő hosszú távon kötődjön a bolthoz.",
          solution:
            "A közös gyűjtői érdeklődéshez hűségszintek, jutalmak, kívánságlisták, tartalmak és eseményekhez kapcsolódó kommunikáció társul.",
          value: "Eszközök egy visszatérő gyűjtői közösség felépítéséhez.",
        },
        {
          icon: PackageCheck,
          title: "Szétesik a rendeléskezelés?",
          problem:
            "A készlet, a fizetés, a csomagolás és az ügyfélszolgálat külön felületeken könnyen elszakad egymástól.",
          solution:
            "A rendelések és a készlet közös működtetési rendszerben jelennek meg, teljesítési munkasorral és visszakereshető ügyfélkommunikációval.",
          value:
            "Követhetőbb napi munka: mi a következő feladat, és kinél van?",
        },
      ];
  return (
    <div id="uzleti-ertek" className="case-anchor">
      <Section
        eyebrow={en ? "Why this system exists" : "Miért készült ez a rendszer?"}
        title={
          en ? "A webshop is only the beginning." : "A webshop csak a kezdet."
        }
        description={
          en
            ? "ToyZumi connects the experience of collecting with the decisions behind running a store."
            : "A ToyZumi összeköti a gyűjtés élményét a kereskedés mögött álló döntésekkel. Így lesz egy szép felületből üzletileg is átgondolt rendszer."
        }
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {stories.map(({ icon: Icon, title, problem, solution, value }, i) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-blue-600" />
                <span className="font-mono text-xs text-slate-500">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{problem}</p>
              <p className="mt-5 text-[10px] font-bold tracking-widest text-blue-700 uppercase dark:text-blue-300">
                {en ? "The response" : "A megoldás"}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {solution}
              </p>
              <p className="mt-6 flex gap-3 border-t border-slate-200 pt-5 text-sm font-semibold text-slate-900">
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                {value}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-5 max-w-4xl text-xs leading-6 text-slate-500">
          {en
            ? "Procurement suggestions support decisions; they do not guarantee demand or eliminate overstock. Community features are capabilities, not a claim about an existing active user base."
            : "A beszerzési javaslat döntést támogat: nem garantál keresletet és nem zárja ki a túlkészletet. A közösségi funkciók lehetőséget teremtenek a kapcsolatépítésre; nem állítanak már elért felhasználószámot vagy üzleti eredményt."}
        </p>
      </Section>
      <Section
        eyebrow={en ? "Explore the product" : "Nézz bele a működésébe"}
        title={
          en
            ? "Three views. One connected system."
            : "Három nézőpont. Egy összefüggő rendszer."
        }
      >
        <ToyzumiDemo lang={lang} />
      </Section>
    </div>
  );
}
