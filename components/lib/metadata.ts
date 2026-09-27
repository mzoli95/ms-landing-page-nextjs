import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image?: string,
  lang: "hu" | "en" = "hu",
): Metadata {
  const shareImage = image ?? `/social/share-${lang}-v4.png`;
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
      images: [
        {
          url: shareImage,
          alt: title,
          ...(!image ? { width: 1200, height: 630, type: "image/png" } : {}),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage],
    },
  };
}
