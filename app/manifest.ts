import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Molnár Systems",
    short_name: "Molnár Systems",
    description:
      "Egyedi belső rendszerek és üzleti automatizálás KKV-knak.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fbff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
