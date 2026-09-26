import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCases } from "@/components/lib/cases";
import type { Lang } from "@/components/lib/i18n";

export function CaseLinks({ lang }: { lang: Lang }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {getCases(lang).map((item, i) => (
        <Link
          key={item.slug}
          href={`/usecases/${item.slug}`}
          className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-400"
        >
          <div className="flex items-center justify-between gap-3 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
            <span>{item.category}</span>
            <span>0{i + 1}</span>
          </div>
          <h3 className="mt-6 text-2xl leading-tight font-bold tracking-tight text-slate-900">
            {item.title}
          </h3>
          <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
            {item.summary}
          </p>
          <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5 text-sm font-semibold text-blue-700 dark:text-blue-300">
            <span>
              {lang === "en" ? "Problem → solution" : "Probléma → megoldás"}
            </span>
            <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </div>
        </Link>
      ))}
    </div>
  );
}
