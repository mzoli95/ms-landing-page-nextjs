import {
  BarChart3,
  CheckCircle2,
  MessageSquareMore,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Workflow,
} from "lucide-react";
import type { Lang } from "@/components/lib/i18n";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const icons = [MessageSquareMore, Sparkles, TimerReset, ShieldCheck];

export function WhyChooseMe({ lang = "hu" }: { lang?: Lang }) {
  const content =
    lang === "en"
      ? {
          eyebrow: "Why clients choose this approach",
          title: "Easy to start, clear to understand",
          description:
            "The goal is not to push a big technical project on you, but to find the smallest useful step that already makes daily work easier.",
          items: [
            {
              title: "Plain language",
              desc: "You get clear answers without unnecessary jargon or overcomplicated explanations.",
            },
            {
              title: "No oversized system",
              desc: "I do not push features you do not need. We start with what actually helps now.",
            },
            {
              title: "Small start is fine",
              desc: "You can begin with one painful step, not with a large expensive project.",
            },
            {
              title: "Clear scope and reply time",
              desc: "You know what is included, what comes next, and when you can expect an answer.",
            },
          ],
          cta: "Let’s talk about your situation",
        }
      : {
          eyebrow: "Miért ezt az utat választják",
          title: "Könnyű elindulni, könnyű megérteni",
          description:
            "A cél nem az, hogy rád erőltessek egy nagy technikai projektet, hanem hogy megtaláljuk azt a legkisebb hasznos lépést, ami már most könnyebbé teszi a napi munkát.",
          items: [
            {
              title: "Érthető kommunikáció",
              desc: "Nem szakzsargonban beszélek, hanem világosan elmondom, mi mire jó és mi mennyit ér neked.",
            },
            {
              title: "Nincs rád erőltetett nagy rendszer",
              desc: "Nem olyan funkciókat építünk, amik csak jól hangzanak, de a valóságban nem kellenek.",
            },
            {
              title: "Kis lépésben is lehet kezdeni",
              desc: "Nem kell rögtön nagy projektben gondolkodni. Elég lehet egyetlen fájó ponttal indulni.",
            },
            {
              title: "Tiszta ajánlat és gyors válasz",
              desc: "Előre látod, mi fér bele, mi lesz a következő lépés, és mikor számíthatsz válaszra.",
            },
          ],
          cta: "Beszéljük át a helyzeted",
        };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
            {content.eyebrow}
          </div>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {content.title}
          </h3>
          <p className="mt-3 text-base leading-7 text-slate-600">
            {content.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {[Workflow, BarChart3, CheckCircle2].map((Icon, index) => (
            <div
              key={index}
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700"
            >
              <Icon className="h-4 w-4" />
            </div>
          ))}
          <div className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
            {lang === "en" ? "Clearer daily work" : "Átláthatóbb napi működés"}
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {content.items.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <Card key={item.title} className="p-6">
              <div className="w-fit rounded-2xl bg-slate-100 p-3 text-slate-900">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-base font-bold text-slate-900">
                {item.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.desc}
              </p>
            </Card>
          );
        })}
      </div>

      <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            {lang === "en"
              ? "If you tell me what feels messy today, I can usually tell quite quickly what is worth fixing first."
              : "Ha elmondod, most hol csúszik szét a munka, általában gyorsan meg tudom mondani, mi az első érdemes lépés."}
          </p>
          <Button href="/contact">{content.cta}</Button>
        </div>
      </div>
    </div>
  );
}
