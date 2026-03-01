import { site } from "@/components/lib/site";

export default function robots() {
  const base = `https://${site.domain}`;
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
