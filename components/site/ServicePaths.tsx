import Link from "next/link";
import {
  ArrowUpRight,
  Monitor,
  Wrench,
  CircuitBoard,
  Code2,
  SearchCheck,
  Globe,
  Workflow,
  ChartNoAxesCombined,
} from "lucide-react";
import { getServices } from "@/components/lib/services";
import type { Lang } from "@/components/lib/i18n";

export function ServicePaths({
  lang,
  hardware = false,
}: {
  lang: Lang;
  hardware?: boolean;
}) {
  const en = lang === "en";
  const all = getServices(lang);
  const icons = hardware
    ? [SearchCheck, Monitor, Wrench, CircuitBoard]
    : [Code2, Globe, Workflow, ChartNoAxesCombined];
  const services = hardware
    ? all.slice(0, 4)
    : [
        all[4],
        ...all.filter((service) => service.slug === "webfejlesztes"),
        ...all.filter((service) =>
          ["excel-automatizalas", "statisztikak-kimutatasok"].includes(
            service.slug,
          ),
        ),
      ];
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
      {services.map((service, i) => {
        const Icon = icons[i];
        return (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-400"
          >
            <Icon className="h-6 w-6 text-blue-600" />
            <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
              {service.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
              {service.summary}
            </p>
            <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-200 pt-4">
              <span className="text-sm font-bold text-slate-900">
                {service.price}
              </span>
              <ArrowUpRight className="h-5 w-5 text-blue-600" />
            </div>
          </Link>
        );
      })}
      {!hardware && (
        <p className="text-sm leading-7 text-slate-600 md:col-span-2 lg:col-span-2">
          {en
            ? "Need help with a computer or another device? "
            : "Számítógéppel vagy más eszközzel kapcsolatban kell segítség? "}
          <Link
            href="/services/pc-hardver"
            className="font-semibold text-blue-700 underline dark:text-blue-300"
          >
            {en ? "PC and device support →" : "PC-s és műszaki segítség →"}
          </Link>
        </p>
      )}
    </div>
  );
}
