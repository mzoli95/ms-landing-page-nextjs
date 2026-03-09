import {
  BarChart3,
  BellRing,
  Boxes,
  BriefcaseBusiness,
  LockKeyhole,
  ShieldCheck,
  SquareActivity,
  WalletCards,
  Waypoints,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Lang } from "@/components/lib/i18n";
import { getDictionary } from "@/components/lib/dictionary";

export function FeatureGrid({ lang = "hu" }: { lang?: Lang }) {
  const t = getDictionary(lang);
  const features = t.featureGrid;
  const icons = [
    BellRing,
    WalletCards,
    Boxes,
    ShieldCheck,
    LockKeyhole,
    SquareActivity,
    BriefcaseBusiness,
    Waypoints,
    BarChart3,
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {features.map((f, index) => {
        const Icon = icons[index % icons.length];

        return (
          <Card key={f.title} className="group p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-slate-100 p-3 text-slate-900 transition group-hover:bg-slate-900 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-900">
                  {f.title}
                </div>
              </div>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
          </Card>
        );
      })}
    </div>
  );
}
