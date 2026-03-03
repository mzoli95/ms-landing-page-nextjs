import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { flags, site } from "../lib/site";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export function ComingSoon({ lang = "hu" }: { lang?: Lang }) {
  const showPhone = flags.showPhone && !flags.comingSoon; // comingSoon alatt mindig off
  const t = getDictionary(lang);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-900" />
      <div className="absolute -top-24 left-1/2 h-130 w-130 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute top-44 -right-40 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <Container className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold text-white/85">
            {site.name} • {t.comingSoon.locationLine}
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {t.comingSoon.title}
          </h1>

          <p className="mt-6 text-base leading-7 text-white/80">
            {t.comingSoon.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href={`mailto:${site.email}`}>
              {t.comingSoon.sendEmail}
            </Button>

            {showPhone ? (
              <Button
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                variant="secondary"
              >
                {t.comingSoon.call}
              </Button>
            ) : null}
          </div>

          <div className="mt-12 grid gap-4 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/85">
              <div className="font-semibold text-white">
                {t.comingSoon.discoveryTitle}
              </div>
              <div className="mt-1 text-white/75">
                {t.comingSoon.discoveryText}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/85">
              <div className="font-semibold text-white">
                {t.comingSoon.fastStartTitle}
              </div>
              <div className="mt-1 text-white/75">
                {t.comingSoon.fastStartText}
              </div>
            </div>
          </div>

          <div className="mt-10 text-sm text-white/60">
            {t.comingSoon.emailLabel}{" "}
            <span className="font-semibold text-white/85">{site.email}</span>
            {showPhone ? (
              <>
                {" "}
                • {t.comingSoon.phoneLabel}{" "}
                <span className="font-semibold text-white/85">
                  {site.phone}
                </span>
              </>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
