"use client";

import dynamic from "next/dynamic";
import type { Lang } from "@/components/lib/i18n";
import { InViewMount } from "@/components/ui/InViewMount";

const AboutSection = dynamic(
  () => import("@/components/site/AboutSection").then((m) => m.AboutSection),
  { ssr: false },
);

const ServicesPreview = dynamic(
  () =>
    import("@/components/site/ServicesPreview").then((m) => m.ServicesPreview),
  { ssr: false },
);

const PricingGrid = dynamic(
  () => import("@/components/site/PricingGrid").then((m) => m.PricingGrid),
  { ssr: false },
);

const ContactForm = dynamic(
  () => import("@/components/site/ContactForm").then((m) => m.ContactForm),
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

export function LazyAboutSection({ lang }: { lang: Lang }) {
  return (
    <InViewMount fallback={null} rootMargin="1200px 0px">
      <AboutSection lang={lang} />
    </InViewMount>
  );
}

export function LazyServicesPageSection({ lang }: { lang: Lang }) {
  return (
    <InViewMount
      fallback={<SkeletonBlock className="h-[560px]" />}
      rootMargin="220px 0px"
    >
      <ServicesPreview lang={lang} />
    </InViewMount>
  );
}

export function LazyPricingPageSection({ lang }: { lang: Lang }) {
  return (
    <InViewMount
      fallback={<SkeletonBlock className="h-[980px] lg:h-[760px]" />}
      rootMargin="240px 0px"
    >
      <PricingGrid lang={lang} />
    </InViewMount>
  );
}

export function LazyContactFormSection({ lang }: { lang: Lang }) {
  return (
    <InViewMount fallback={null} rootMargin="1200px 0px">
      <ContactForm lang={lang} />
    </InViewMount>
  );
}
