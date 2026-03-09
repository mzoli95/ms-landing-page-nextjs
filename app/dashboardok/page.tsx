import type { Metadata } from "next";
import {
  articlePages,
  getServiceLandingPage,
  serviceLandingPages,
} from "@/components/lib/seo-content";
import { SeoPageContent } from "@/components/site/SeoPageContent";

const page = getServiceLandingPage("dashboardok");

if (!page) {
  throw new Error("Missing SEO landing page content for dashboardok");
}

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  alternates: {
    canonical: "/dashboardok",
  },
};

export default function DashboardokPage() {
  const relatedLinks = [
    ...serviceLandingPages
      .filter((entry) => entry.slug !== page.slug)
      .slice(0, 2)
      .map((entry) => ({ href: `/${entry.slug}`, label: entry.title })),
    ...articlePages
      .filter((entry) => entry.slug === "hogyan-digitalizalj-egy-kkv-t")
      .map((entry) => ({ href: `/blog/${entry.slug}`, label: entry.title })),
  ];

  return <SeoPageContent page={page} relatedLinks={relatedLinks} />;
}