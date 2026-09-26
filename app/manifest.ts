import type { MetadataRoute } from "next";
import { getLangFromCookies } from "@/components/lib/i18n";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const lang = await getLangFromCookies();
  return {
    name: "Molnár Systems",
    short_name: "Molnár Systems",
    lang,
    description:
      lang === "en"
        ? "Custom software, automation and PC support for individuals and businesses."
        : "Egyedi szoftver, automatizálás és PC-s segítség magánszemélyeknek és vállalkozásoknak.",
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
