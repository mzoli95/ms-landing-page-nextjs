"use client";

import dynamic from "next/dynamic";
import type { Lang } from "@/components/lib/i18n";
import { InViewMount } from "@/components/ui/InViewMount";

const FeatureGrid = dynamic(
  () => import("@/components/site/FeatureGrid").then((m) => m.FeatureGrid),
  { ssr: false },
);

const UseCases = dynamic(
  () => import("@/components/site/UseCases").then((m) => m.UseCases),
  { ssr: false },
);

const ServicesPreview = dynamic(
  () =>
    import("@/components/site/ServicesPreview").then((m) => m.ServicesPreview),
  { ssr: false },
);

const Steps = dynamic(
  () => import("@/components/site/Steps").then((m) => m.Steps),
  { ssr: false },
);

const PricingGrid = dynamic(
  () => import("@/components/site/PricingGrid").then((m) => m.PricingGrid),
  { ssr: false },
);

const PcServiceSection = dynamic(
  () =>
    import("@/components/site/PcServiceSection").then(
      (m) => m.PcServiceSection,
    ),
  { ssr: false },
);

function SkeletonBlock({ className }: { className: string }) {
  return (
    <div
      className={`w-full rounded-2xl border border-slate-200 bg-slate-50/80 ${className}`}
      aria-hidden="true"
    />
  );
}

export function LazyFeatureGrid({ lang }: { lang: Lang }) {
  return (
    <InViewMount
      fallback={<SkeletonBlock className="h-80" />}
      rootMargin="280px 0px"
    >
      <FeatureGrid lang={lang} />
    </InViewMount>
  );
}

export function LazyUseCases({ lang }: { lang: Lang }) {
  return (
    <InViewMount
      fallback={<SkeletonBlock className="h-[820px] lg:h-[460px]" />}
      rootMargin="280px 0px"
    >
      <UseCases lang={lang} />
    </InViewMount>
  );
}

export function LazyServicesPreview({ lang }: { lang: Lang }) {
  return (
    <InViewMount
      fallback={<SkeletonBlock className="h-[540px]" />}
      rootMargin="280px 0px"
    >
      <ServicesPreview lang={lang} />
    </InViewMount>
  );
}

export function LazySteps({ lang }: { lang: Lang }) {
  return (
    <InViewMount
      fallback={<SkeletonBlock className="h-[380px] lg:h-[210px]" />}
      rootMargin="260px 0px"
    >
      <Steps lang={lang} />
    </InViewMount>
  );
}

export function LazyPcServiceSection({ lang }: { lang: Lang }) {
  return (
    <InViewMount
      fallback={<SkeletonBlock className="h-[620px]" />}
      rootMargin="300px 0px"
    >
      <PcServiceSection lang={lang} />
    </InViewMount>
  );
}

export function LazyPricingGrid({ lang }: { lang: Lang }) {
  return (
    <InViewMount
      fallback={<SkeletonBlock className="h-[920px] lg:h-[720px]" />}
      rootMargin="300px 0px"
    >
      <PricingGrid lang={lang} />
    </InViewMount>
  );
}
