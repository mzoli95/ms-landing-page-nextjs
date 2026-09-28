"use client";

import { useState } from "react";
import {
  LayoutTemplate,
  CalendarDays,
  PanelsTopLeft,
  Calculator,
  Package,
  FileText,
} from "lucide-react";
import type { Lang } from "@/components/lib/i18n";
import { PortfolioScreenshotSlot } from "./PortfolioScreenshotSlot";

export function LocalDemoScreens({
  id,
  name,
  lang,
}: {
  id: string;
  name: string;
  lang: Lang;
}) {
  const en = lang === "en";
  const views =
    id === "roadside-rescue"
      ? [
          {
            id: "landing",
            label: en ? "Website" : "Weboldal",
            icon: LayoutTemplate,
            caption: en
              ? "A clear introduction to requesting and providing roadside assistance."
              : "Az autós és az autómentő közös folyamatának bemutatása.",
          },
          {
            id: "offers",
            label: en ? "Quotes & chat" : "Ajánlatok és chat",
            icon: FileText,
            caption: en
              ? "Comparable estimates, provider quotes and a private conversation on the same request."
              : "Összehasonlítható becslések, szolgáltatói ajánlatok és privát beszélgetés ugyanahhoz a kéréshez.",
          },
          {
            id: "provider",
            label: en ? "Provider" : "Autómentő",
            icon: PanelsTopLeft,
            caption: en
              ? "Incoming alerts with vehicle details, quote preparation and rescue status."
              : "Beérkezett riasztások, járműadatok, ajánlatadás és a mentés állapota.",
          },
        ]
      : id === "document-management"
        ? [
            {
              id: "landing",
              label: en ? "Website" : "Weboldal",
              icon: LayoutTemplate,
              caption: en
                ? "From incoming paperwork to a searchable, approved record."
                : "A beérkező papírtól a kereshető, jóváhagyott adatlapig.",
            },
            {
              id: "registry",
              label: en ? "Register" : "Nyilvántartás",
              icon: PanelsTopLeft,
              caption: en
                ? "Documents, partners, deadlines and current approval status in one table."
                : "Dokumentumok, partnerek, határidők és jóváhagyási állapot egy táblázatban.",
            },
            {
              id: "approval",
              label: en ? "Approval" : "Jóváhagyás",
              icon: FileText,
              caption: en
                ? "Separate review and approval steps with a traceable decision history."
                : "Külön ellenőrzési és jóváhagyási lépések, visszakereshető döntésekkel.",
            },
            {
              id: "versions",
              label: en ? "Versions" : "Verziók",
              icon: FileText,
              caption: en
                ? "Saved document versions preserve earlier data and decisions."
                : "Mentett dokumentumverziók a korábbi adatokkal és döntésekkel.",
            },
          ]
        : id === "trade-estimator"
          ? [
              {
                id: "landing",
                label: en ? "Website" : "Weboldal",
                icon: LayoutTemplate,
                caption: en
                  ? "A presentation page explains the problem, workflow and benefits."
                  : "Bemutatóoldal a problémáról, a folyamatról és a kalkulátor előnyeiről.",
              },
              {
                id: "calculator",
                label: en ? "Estimate" : "Kalkuláció",
                icon: Calculator,
                caption: en
                  ? "Material quantities and labour hours with a live cost breakdown."
                  : "Anyagmennyiségek és munkaórák, tételes árösszesítéssel.",
              },
              {
                id: "stock",
                label: en ? "Stock" : "Készlet",
                icon: Package,
                caption: en
                  ? "Editable prices, stock levels and recorded inventory movements."
                  : "Szerkeszthető árak, készletszintek és naplózott anyagmozgások.",
              },
              {
                id: "quote",
                label: en ? "Quote" : "Ajánlat",
                icon: FileText,
                caption: en
                  ? "A saved itemised estimate with its original prices, ready to print."
                  : "Mentett, nyomtatható tételes ajánlat, a mentéskori árak megőrzésével.",
              },
            ]
          : [
              {
                id: "landing",
                label: en ? "Website" : "Weboldal",
                icon: LayoutTemplate,
                caption: en
                  ? "Services, prices and a first impression of the business."
                  : "Szolgáltatások, árak és a vállalkozás első benyomása.",
              },
              {
                id: "booking",
                label: en ? "Booking" : "Foglalás",
                icon: CalendarDays,
                caption: en
                  ? "The guest chooses a service and an available appointment."
                  : "A vendég szolgáltatást és szabad időpontot választ.",
              },
              {
                id: "admin",
                label: en ? "Management" : "Kezelőfelület",
                icon: PanelsTopLeft,
                caption: en
                  ? "The business keeps track of bookings and customer records."
                  : "A vállalkozás egy helyen követheti a foglalásokat és ügyféladatokat.",
              },
            ];
  const [selected, setSelected] = useState("landing");
  const view = views.find((item) => item.id === selected)!;
  return (
    <div className="min-w-0">
      <div
        className="mb-3 flex flex-wrap gap-2"
        role="group"
        aria-label={en ? `${name} screenshots` : `${name} képernyőképei`}
      >
        {views.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={item.id === selected}
            onClick={() => setSelected(item.id)}
            className={`inline-flex min-h-11 items-center gap-2 rounded-lg border px-3 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:text-sm ${item.id === selected ? "border-blue-700 bg-blue-700 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-blue-400"}`}
          >
            <item.icon aria-hidden="true" className="h-4 w-4" />
            {item.label}
          </button>
        ))}
      </div>
      <PortfolioScreenshotSlot
        key={view.id}
        filename={`${id}-${view.id}.jpg`}
        imagePath={`/images/demos/${id}-${view.id}.jpg`}
        lang={lang}
        label={`${name} · ${view.label}`}
        description={view.caption}
        fit="contain"
        objectPosition="top"
        className="aspect-[16/10]"
      />
    </div>
  );
}
