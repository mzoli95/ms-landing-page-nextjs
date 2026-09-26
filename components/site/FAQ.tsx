import { getDictionary } from "@/components/lib/dictionary";
import { Card } from "@/components/ui/Card";
import type { Lang } from "@/components/lib/i18n";

export function FAQ({ lang = "hu" }: { lang?: Lang }) {
  const faqs =
    lang === "en"
      ? [
          {
            q: "How long does a custom internal system take?",
            a: "Quick wins usually arrive in 1–2 weeks, while a compact internal app typically takes 3–6 weeks.",
          },
          {
            q: "How much of my time is needed?",
            a: "A short weekly sync is enough. The process is built to reduce your overhead.",
          },
          {
            q: "Can we extend it later?",
            a: "Yes, the architecture is modular and ready for future features.",
          },
          {
            q: "Will there be hidden costs?",
            a: "No. Scope and pricing are clear before development starts.",
          },
          {
            q: "Do you provide support after launch?",
            a: "Yes, ongoing support and maintenance are available.",
          },
        ]
      : [
          {
            q: "Mennyi idő alatt készül el egy belső rendszer?",
            a: "Az első kézzelfogható eredmények általában 1–2 héten belül látszanak, egy mini belső webapp pedig tipikusan 3–6 hét. A pontos idő a funkcióktól függ.",
          },
          {
            q: "Hogy néz ki a közös munka, ha nincs sok időm?",
            a: "Rövid heti egyeztetés elég. A cél: minél kevesebb terhelés neked, mégis gyors haladás.",
          },
          {
            q: "Lehet később bővíteni?",
            a: "Igen – úgy építem, hogy legyen adatbázis alap, jogosultság, és bővíthető modulok.",
          },
          {
            q: "Lesznek rejtett költségek?",
            a: "Nem. A scope és az árképzés fejlesztés előtt tisztán rögzítve van.",
          },
          {
            q: "Van támogatás átadás után is?",
            a: "Igen, folyamatos támogatás és karbantartás is kérhető.",
          },
        ];

  const firstPrice = getDictionary(lang).pricingGrid.plans[0].price;
  faqs.unshift(
    lang === "en"
      ? {
          q: "Where do you work?",
          a: "In-person help is primarily available in Siófok and the surrounding area, and across Somogy county. Visits further afield can be arranged in advance. Remote help and development are available across Hungary.",
        }
      : {
          q: "Hol érhetők el a szolgáltatások?",
          a: "Személyesen elsősorban Siófokon és környékén, valamint Somogy megyében segítek. Távolabbi kiszállás is kérhető előzetes egyeztetéssel. Távsegítség és fejlesztés országosan elérhető.",
        },
  );
  faqs.unshift(
    lang === "en"
      ? {
          q: "How much does a first project cost?",
          a:
            "Process assessment and a focused solution starts " +
            firstPrice +
            ". The pricing page lists separate website, automation and maintenance packages. Scope, taxes and external costs are set out in a written quote.",
        }
      : {
          q: "Mennyibe kerül egy első projekt?",
          a:
            "A folyamatfelmérés és célzott megoldás ára " +
            firstPrice +
            ". A weboldalak, automatizálás és karbantartás külön csomagjai az árlistában találhatók. A tartalmat, adótartalmat és külső költségeket írásos ajánlat rögzíti.",
        },
  );
  faqs.unshift(
    lang === "en"
      ? {
          q: "Can I contact you as an individual?",
          a: "Yes. Personal ideas, hobby projects, PC builds, upgrades and device issues are welcome. Describe your request in everyday language; I will let you know what I can take on.",
        }
      : {
          q: "Magánszemélyként is megkereshetlek?",
          a: "Igen. Saját ötlettel, hobbiprojekttel, PC-építéssel, bővítéssel és eszközhibával is. Írd le hétköznapi nyelven a kérésedet; visszajelzek, mit tudok vállalni.",
        },
  );
  faqs.unshift(
    lang === "en"
      ? {
          q: "What does 5,000 HUF include?",
          a: "The first 30 minutes of remote help or a basic device assessment. A simple issue may be fixed within the session, but longer repairs, parts and travel require a separate quote.",
        }
      : {
          q: "Mit tartalmaz az 5 000 Ft-os segítség?",
          a: "Az első, legfeljebb 30 perces távsegítséget vagy alapellenőrzést. Egy egyszerű hiba megoldása beleférhet, de hosszabb javítás, alkatrész és kiszállás külön egyeztetést igényel.",
        },
  );
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <Card key={f.q} className="p-6">
          <details className="group">
            <summary className="cursor-pointer list-none text-sm font-extrabold text-slate-900 sm:text-base">
              {f.q}
            </summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">{f.a}</p>
          </details>
        </Card>
      ))}
    </div>
  );
}
