import type { MetadataRoute } from "next";
import { site } from "@/components/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `${site.url}`;

  // Ide listázod a publikus oldalaidat (amiket indexelhet a Google)
  const routes = [
    "",
    "/portfolio",
    "/portfolio/demok",
    "/portfolio/toyzumi",
    "/portfolio/menutivo",
    "/portfolio/molnar-diagnostic",
    "/usecases",
    "/usecases/kereslet-es-keszlet",
    "/usecases/ettermi-rendeles",
    "/usecases/lassu-szamitogep",
    "/usecases/idopontfoglalas",
    "/usecases/helyszini-arkalkulacio",
    "/services",
    "/services/pc-hardver",
    "/services/webfejlesztes",
    "/services/pc-epites",
    "/services/pc-bovites",
    "/services/diagnosztika-tavsegitseg",
    "/services/elektronikai-eszkozok",
    "/services/egyedi-fejlesztes",
    "/services/excel-automatizalas",
    "/services/statisztikak-kimutatasok",
    "/siofok-informatika",
    "/pricing",
    "/about",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.6,
  }));
}
