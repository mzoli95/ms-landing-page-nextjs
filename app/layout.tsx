import type { Metadata } from "next";
import "./styles/globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { site } from "@/components/lib/site";
import { getLangFromCookies } from "@/components/lib/i18n";
import { getThemeFromCookies } from "@/components/lib/theme.server";

export const metadata: Metadata = {
  title: {
    default: `${site.name} – Belső rendszerek, automatizálás, riportok`,
    template: `%s – ${site.name}`,
  },
  description:
    "Egyedi belső rendszerek és üzleti automatizálás KKV-knak: kevesebb admin, tisztább folyamatok, gyorsabb döntések.",
  metadataBase: new URL(`${site.url}`),
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/ms_logo.png.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: "/ms_logo.png.png",
  },
  keywords: [
    "belső rendszer fejlesztés",
    "excel automatizálás",
    "kkv digitalizálás",
    "riport dashboard",
    "egyedi rendszer fejlesztés",
    "szoftverfejlesztő Siófok",
  ],
  openGraph: {
    title: `${site.name} – Egyedi rendszerek, kevesebb admin, jobb átláthatóság`,
    description:
      "Átlátható belső appok, automatizált riportok és workflow-k KKV-knak. Excel helyett stabil, modern működés.",
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
      "Egyedi belső rendszerek, workflow automatizálás és riportok KKV-knak.",
    images: ["/twitter-image.png"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = await getLangFromCookies();
  const theme = await getThemeFromCookies();

  return (
    <html lang={lang} className={theme === "dark" ? "dark" : ""}>
      <body className="flex min-h-dvh flex-col bg-(--app-bg) text-(--text-1) antialiased">
        <JsonLd />
        <Navbar lang={lang} initialTheme={theme} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
