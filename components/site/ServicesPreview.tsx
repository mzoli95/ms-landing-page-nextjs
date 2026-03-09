import {
  BarChart3,
  FileText,
  FolderKanban,
  LayoutTemplate,
  LifeBuoy,
  Monitor,
  ReceiptText,
  ShieldEllipsis,
  Wrench,
  Workflow,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/components/lib/utils";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

function getServiceIcon(title: string) {
  const normalized = title.toLowerCase();

  if (normalized.includes("autom") || normalized.includes("notification")) {
    return Workflow;
  }

  if (
    normalized.includes("adat") ||
    normalized.includes("report") ||
    normalized.includes("dashboard") ||
    normalized.includes("összefoglal")
  ) {
    return BarChart3;
  }

  if (normalized.includes("pc") || normalized.includes("maintenance")) {
    return Wrench;
  }

  if (
    normalized.includes("website") ||
    normalized.includes("weboldal") ||
    normalized.includes("landing")
  ) {
    return LayoutTemplate;
  }

  if (
    normalized.includes("document") ||
    normalized.includes("dokument") ||
    normalized.includes("knowledge")
  ) {
    return FileText;
  }

  if (
    normalized.includes("contact") ||
    normalized.includes("kapcsolat") ||
    normalized.includes("quote-request")
  ) {
    return LifeBuoy;
  }

  if (
    normalized.includes("invoice") ||
    normalized.includes("száml") ||
    normalized.includes("admin")
  ) {
    return ReceiptText;
  }

  if (
    normalized.includes("commun") ||
    normalized.includes("kommunik") ||
    normalized.includes("handover")
  ) {
    return ShieldEllipsis;
  }

  if (normalized.includes("database") || normalized.includes("adatbázis")) {
    return FolderKanban;
  }

  if (normalized.includes("internal") || normalized.includes("belső")) {
    return Monitor;
  }

  return Monitor;
}

export function ServicesPreview({
  lang = "hu",
  mode = "full",
  className,
}: {
  lang?: Lang;
  mode?: "full" | "teaser";
  className?: string;
}) {
  const t = getDictionary(lang);
  const services = t.servicesPreview.cards;
  const isTeaser = mode === "teaser";
  const visibleServices = isTeaser ? services.slice(0, 4) : services;
  const topBrowseLabel =
    lang === "en" ? "See all services" : "Összes szolgáltatás";
  const ctaEyebrow =
    lang === "en"
      ? "Need something tailored?"
      : "Valami egyedibbre van szükséged?";

  return (
    <div className={cn("space-y-5", className)}>
      {isTeaser && (
        <div className="flex items-center justify-end">
          <Button href="/services">{topBrowseLabel}</Button>
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        {visibleServices.map((s) => {
          const Icon = getServiceIcon(s.title);

          return (
            <Card key={s.title} className="group p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-slate-100 p-3 text-slate-900 transition group-hover:bg-slate-900 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    {s.title}
                  </div>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {(isTeaser ? s.items.slice(0, 2) : s.items).map((item) => {
                  const normalized =
                    typeof item === "string" ? { text: item } : item;

                  return (
                    <li
                      key={normalized.text}
                      className="grid grid-cols-[10px_1fr] items-baseline gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <div>
                        <span className="leading-6">{normalized.text}</span>
                        {!isTeaser && normalized.benefit && (
                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {normalized.benefit}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Card>
          );
        })}

        <div className="lg:col-span-2 flex flex-col items-start gap-3 rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-700 dark:bg-slate-900">
          <div className="border border-slate-200 bg-slate-900 border-slate-700 text-white flex items-center gap-2 rounded-xl px-3 py-2 mb-2">
            <Workflow className="h-3.5 w-3.5" />
            {ctaEyebrow}
          </div>
          <div className="text-xl font-bold transition-colors duration-200 text-slate-900 dark:text-white">
            {t.servicesPreview.ctaTitle}
          </div>
          <p className="max-w-3xl text-sm leading-6 transition-colors duration-200 text-slate-600 dark:text-slate-300">
            {t.servicesPreview.ctaDesc}
          </p>
          <Button
            href="/contact"
            className="transition-colors duration-200 bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
          >
            {t.servicesPreview.ctaButton}
          </Button>
        </div>
      </div>
    </div>
  );
}
