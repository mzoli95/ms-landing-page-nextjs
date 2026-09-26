import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/og-image.png",
  lang: "hu" | "en" = "hu",
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: lang === "en" ? "en_GB" : "hu_HU",
      type: "website",
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
