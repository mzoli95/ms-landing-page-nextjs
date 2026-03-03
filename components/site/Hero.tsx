import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export function Hero({ lang = "hu" }: { lang?: Lang }) {
  const t = getDictionary(lang);
  const badges = t.hero.badges;
  const bullets = t.hero.bullets;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-900" />
      <div className="absolute -top-24 left-1/2 h-120 w-120 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <Container className="relative py-16 sm:py-24">
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {t.hero.title}
        </h1>

        <p className="mt-3 text-sm text-white/60">{t.hero.locationLine}</p>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80">
          {t.hero.intro}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact">{t.hero.ctaPrimary}</Button>
          <Button href="/pricing" variant="secondary">
            {t.hero.ctaSecondary}
          </Button>
        </div>

        <p className="mt-3 text-xs text-white/60">{t.hero.note}</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bullets.map((bullet) => (
            <div
              key={bullet}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/85"
            >
              {bullet}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
