import { Container } from "@/components/ui/Container";
import { site, flags } from "@/components/lib/site";

const everyday = [
  "Eltűnt fájlok / véletlen törlés / sérült rendszer",
  "Nem indul el a laptop (fekete képernyő, boot hiba)",
  "Új laptopot vettél, de nincs rendesen beállítva",
  "Nincs biztonsági mentés – adatvesztés megelőzés",
];

export function PcServiceSection() {
  // Ha nem akarod, hogy egyáltalán megjelenjen: flags-szel is kapcsolhatod később
  return (
    <section className="border-t border-slate-200 bg-white">
      <Container className="py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            <div className="lg:col-span-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Kiegészítő szolgáltatás
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                Eseti PC szerviz és IT támogatás
              </h2>
              <p className="mt-3 text-slate-600">
                Magánszemélyeknek és vállalkozásoknak Somogy megyében.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-semibold text-slate-900">Elérhetőség</div>
                <div className="mt-2">
                  <a
                    className="font-semibold hover:underline"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </div>
                {flags.showPhone && site.phone ? (
                  <div className="mt-1">{site.phone}</div>
                ) : null}
                <div className="mt-3 text-slate-600">
                  📍 Gépleadás: <span className="font-semibold">Siófok</span>{" "}
                  vagy <span className="font-semibold">környéke</span>
                  <br />
                  🚗 Igény esetén kiszállás a környéken
                  <br />
                  💻 Távoli segítség (remote) is elérhető
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Tipikus problémák
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      <li>• Windows újratelepítés, adatmentés</li>
                      <li>• Lassú gép gyorsítása, vírusirtás</li>
                      <li>• Indulási / lefagyási problémák feltárása</li>
                      <li>• SSD / RAM és egyéb alkatrész bővítés</li>
                      <li>• Laptop tisztítás, hűtés karbantartás</li>
                      <li>• Új eszköz beüzemelése</li>
                      <li>• Céges gépek karbantartása</li>
                      <li>• Egyedi PC összerakás és tanácsadás</li>
                    </ul>
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Mindennapi “fájdalompontok”
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      {everyday.map((x) => (
                        <li key={x}>• {x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-semibold text-slate-900">
                  A lassú gép nem mindig „öreg gép”.
                </div>
                <div className="mt-1">
                  Sok esetben egy SSD csere vagy rendszerkarbantartás töredék
                  áron jelentős gyorsulást hoz egy új gép vásárlásához képest.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
