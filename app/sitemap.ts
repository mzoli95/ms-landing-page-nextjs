import type { MetadataRoute } from "next";
import { site } from "@/components/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `${site.url}`;

  // Ide listázod a publikus oldalaidat (amiket indexelhet a Google)
  const routes = [
    "",
    "/impresszum",
    "/adatkezeles",
    "/services",
    "/pricing",
    "/contact",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.6,
  }));
}
