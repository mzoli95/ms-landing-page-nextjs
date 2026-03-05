import type { Metadata } from "next";
import "./styles/globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { GoogleAnalytics } from "@/components/site/GoogleAnalytics";
import { ScrollDepthTracker } from "@/components/site/ScrollDepthTracker";
import { site } from "@/components/lib/site";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getThemeFromCookies } from "@/components/lib/theme.server";

export const metadata: Metadata = {
  title: {
    default: `${site.name} – Belső rendszerek, automatizálás, riportok`,
    template: `%s – ${site.name}`,
  },
  description:
    "Siófoki és Somogy megyei webfejlesztés, programozás, automatizálás és PC karbantartás: egyedi belső rendszerek KKV-knak, országos online együttműködéssel.",
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
    "ságvár programozó",
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
    title: `${site.name} – Egyedi rendszerek, kevesebb admin, jobb átláthatóság`,
    description:
      "Siófok, Ságvár és Somogy megye: webfejlesztés, programozás, automatizálás és számítógépes/PC segítség KKV-knak.",
    url: site.url,
    siteName: site.name,
    locale: "hu_HU",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Molnár Systems – Egyedi rendszerek és automatizálás",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – Egyedi rendszerek, kevesebb admin`,
    description:
      "Siófoki webfejlesztés és programozás KKV-knak, automatizálással és riportokkal.",
    images: ["/twitter-image.png"],
  },
  manifest: "/manifest.webmanifest",
};

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
        <JsonLd />
        <Navbar lang={lang} initialTheme={theme} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
        <GoogleAnalytics gaId={gaId} />
        <ScrollDepthTracker />
      </body>
    </html>
  );
}
