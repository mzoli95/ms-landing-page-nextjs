// import type { Metadata } from "next";
// import {
//   articlePages,
//   getArticlePage,
//   serviceLandingPages,
// } from "@/components/lib/seo-content";
// import { SeoPageContent } from "@/components/site/SeoPageContent";

// const page = getArticlePage("excel-helyett-belso-rendszer");

// if (!page) {
//   throw new Error("Missing blog content for excel-helyett-belso-rendszer");
// }

// export const metadata: Metadata = {
//   title: page.title,
//   description: page.description,
//   keywords: page.keywords,
//   alternates: {
//     canonical: "/blog/excel-helyett-belso-rendszer",
//   },
// };

// export default function ExcelHelyettBelsoRendszerArticlePage() {
//   const relatedLinks = [
//     ...serviceLandingPages
//       .filter(
//         (entry) =>
//           entry.slug === "belso-rendszerek" || entry.slug === "automatizalas",
//       )
//       .map((entry) => ({ href: `/${entry.slug}`, label: entry.title })),
//     ...articlePages
//       .filter((entry) => entry.slug !== page.slug)
//       .slice(0, 2)
//       .map((entry) => ({ href: `/blog/${entry.slug}`, label: entry.title })),
//   ];

//   return <SeoPageContent page={page} relatedLinks={relatedLinks} />;
// }
