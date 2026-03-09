import type { Metadata } from "next";
import { articlePages, getArticlePage, serviceLandingPages } from "@/components/lib/seo-content";
import { SeoPageContent } from "@/components/site/SeoPageContent";

const page = getArticlePage("hogyan-automatizalhato-az-adminisztracio");

if (!page) {
  throw new Error(
    "Missing blog content for hogyan-automatizalhato-az-adminisztracio",
  );
}

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  alternates: {
    canonical: "/blog/hogyan-automatizalhato-az-adminisztracio",
  },
};

export default function AdminAutomationArticlePage() {
  const relatedLinks = [
    ...serviceLandingPages
      .filter((entry) => entry.slug === "automatizalas" || entry.slug === "dashboardok")
      .map((entry) => ({ href: `/${entry.slug}`, label: entry.title })),
    ...articlePages
      .filter((entry) => entry.slug !== page.slug)
      .slice(0, 2)
      .map((entry) => ({ href: `/blog/${entry.slug}`, label: entry.title })),
  ];

  return <SeoPageContent page={page} relatedLinks={relatedLinks} />;
}