import { Card } from "@/components/ui/Card";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

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

export function UseCases({ lang = "hu" }: { lang?: Lang }) {
  const t = getDictionary(lang);
  const useCases = t.useCases.cards;

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
              {t.useCases.labels.problem}
            </div>
            <BulletList items={u.problem} />
          </div>

          <div className="mt-5">
            <div className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              {t.useCases.labels.solution}
            </div>
            <BulletList items={u.solution} />
          </div>

          <div className="mt-5">
            <div className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              {t.useCases.labels.why}
            </div>
            <BulletList items={u.why} />
          </div>
        </Card>
      ))}
    </div>
  );
}
