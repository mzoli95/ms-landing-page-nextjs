import type { Metadata } from "next";
import { articlePages, getArticlePage, serviceLandingPages } from "@/components/lib/seo-content";
import { SeoPageContent } from "@/components/site/SeoPageContent";

const page = getArticlePage("hogyan-digitalizalj-egy-kkv-t");

if (!page) {
  throw new Error("Missing blog content for hogyan-digitalizalj-egy-kkv-t");
}

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  alternates: {
    canonical: "/blog/hogyan-digitalizalj-egy-kkv-t",
  },
};

export default function KkvDigitalizalasArticlePage() {
  const relatedLinks = [
    ...serviceLandingPages.slice(0, 3).map((entry) => ({ href: `/${entry.slug}`, label: entry.title })),
    ...articlePages
      .filter((entry) => entry.slug !== page.slug)
      .slice(0, 2)
      .map((entry) => ({ href: `/blog/${entry.slug}`, label: entry.title })),
  ];

  return <SeoPageContent page={page} relatedLinks={relatedLinks} />;
}