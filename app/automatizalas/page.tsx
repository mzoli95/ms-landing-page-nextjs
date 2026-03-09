// import type { Metadata } from "next";
// import {
//   articlePages,
//   getServiceLandingPage,
//   serviceLandingPages,
// } from "@/components/lib/seo-content";
// import { SeoPageContent } from "@/components/site/SeoPageContent";

// const page = getServiceLandingPage("automatizalas");

// if (!page) {
//   throw new Error("Missing SEO landing page content for automatizalas");
// }

// export const metadata: Metadata = {
//   title: page.title,
//   description: page.description,
//   keywords: page.keywords,
//   alternates: {
//     canonical: "/automatizalas",
//   },
// };

// export default function AutomatizalasPage() {
//   const relatedLinks = [
//     ...serviceLandingPages
//       .filter((entry) => entry.slug !== page.slug)
//       .slice(0, 2)
//       .map((entry) => ({ href: `/${entry.slug}`, label: entry.title })),
//     ...articlePages
//       .slice(0, 2)
//       .map((entry) => ({ href: `/blog/${entry.slug}`, label: entry.title })),
//   ];

//   return <SeoPageContent page={page} relatedLinks={relatedLinks} />;
// }
