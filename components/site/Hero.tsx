import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { site } from "../lib/site";

const bullets = [
  "Belső webappok és automatizálás (határidők, értesítések, workflow)",
  "Adatbázis építés, normalizálás, riportok és dashboardok",
  "PC karbantartás, bővítés, újratelepítés (kiegészítő szolgáltatás)",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900" />
      <div className="absolute -top-24 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <Container className="relative py-16 sm:py-24">
        <Badge>Gyors szállítás • Átlátható csomagok • Mérhető eredmény</Badge>

        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {site.tagline}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">
          Ha eleged van a kézi adminból és az elfelejtett határidőkből: építek
          egy rendszert, ami{" "}
          <span className="font-semibold text-white">időt spórol</span>,{" "}
          <span className="font-semibold text-white">hibát csökkent</span>, és{" "}
          <span className="font-semibold text-white">láthatóvá teszi</span> a
          céged működését.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact">Kérek ingyenes konzultációt</Button>
          <Button href="/pricing" variant="secondary">
            Árak és csomagok
          </Button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {bullets.map((b) => (
            <div
              key={b}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/85"
            >
              {b}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
