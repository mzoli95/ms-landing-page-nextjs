import type { MetadataRoute } from "next";
import { site } from "@/components/lib/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `${site.url}`; // pl. "https://www.molnarsystems.hu"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Ha később lesz admin/app rész, itt tudod tiltani:
        // disallow: ["/admin", "/app"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
