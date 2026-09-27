import type { Metadata } from "next";
import { localizedMetadata } from "@/components/lib/localized-metadata";
import "./styles/globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { GoogleAnalytics } from "@/components/site/GoogleAnalytics";
import { ScrollDepthTracker } from "@/components/site/ScrollDepthTracker";
import { site } from "@/components/lib/site";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getThemeFromCookies } from "@/components/lib/theme.server";

const baseMetadata: Metadata = {
  title: {
    default: `${site.name} – Fejlesztés és műszaki segítség`,
    template: `%s – ${site.name}`,
  },
  description:
    "Webfejlesztés és PC-segítség magánszemélyeknek és cégeknek. Személyesen Siófok és környéke, Somogy megye; távolabbi kiszállás egyeztetéssel, online országosan.",
  metadataBase: new URL(`${site.url}`),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-256.png", type: "image/png", sizes: "256x256" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "belső rendszer fejlesztés",
    "siófok fejlesztés",
    "siófok webfejlesztés",
    "siófoki programozó",
    "somogy megye webfejlesztő",
    "somogy megye programozó",
    "siófok pc szerviz",
    "siófok gépszerelő",
    "somogy megye gépszerelő",
    "excel automatizálás",
    "kkv digitalizálás",
    "riport dashboard",
    "egyedi rendszer fejlesztés",
    "szoftverfejlesztő Siófok",
  ],
  openGraph: {
    title: `${site.name} – Egyedi fejlesztés és számítógépes segítség`,
    description:
      "Siófok és környéke, Somogy megye; távolabbi kiszállás egyeztetéssel: webfejlesztés, programozás, automatizálás és számítógépes/PC segítség magánszemélyeknek és cégeknek.",
    url: site.url,
    siteName: site.name,
    locale: "hu_HU",
    type: "website",
    images: [
      {
        url: "/social/share-hu-v2.png",
        width: 1200,
        height: 630,
        alt: "Molnár Systems – Szoftverfejlesztés, automatizálás és PC-segítség",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – Egyedi fejlesztés és műszaki segítség`,
    description:
      "Siófoki webfejlesztés és programozás magánszemélyeknek és cégeknek, automatizálással és riportokkal.",
    images: ["/social/share-hu-v2.png"],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          other: {
            "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
          },
        }
      : {}),
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const localized = await localizedMetadata(baseMetadata, "/");
  const en = (await getLangFromCookies()) === "en";
  return {
    ...localized,
    title: {
      default: `${site.name} – ${en ? "Software development and PC support" : "Fejlesztés és műszaki segítség"}`,
      template: `%s – ${site.name}`,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const lang = await getLangFromCookies();
  const theme = await getThemeFromCookies();

  return (
    <html lang={lang} className={theme === "dark" ? "dark" : ""}>
      <body className="flex min-h-dvh flex-col bg-(--app-bg) text-(--text-1) antialiased">
        <JsonLd lang={lang} />
        <a href="#main-content" className="skip-link">
          {lang === "en" ? "Skip to content" : "Ugrás a tartalomra"}
        </a>
        <Navbar lang={lang} initialTheme={theme} />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer lang={lang} />
        <GoogleAnalytics gaId={gaId} />
        <ScrollDepthTracker />
      </body>
    </html>
  );
}
