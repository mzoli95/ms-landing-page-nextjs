import { site } from "@/components/lib/site";

export default function sitemap() {
  const base = `https://${site.domain}`;
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/services`, lastModified: now },
    { url: `${base}/pricing`, lastModified: now },
    { url: `${base}/contact`, lastModified: now },
  ];
}
