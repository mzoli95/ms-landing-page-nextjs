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
  description: site.metaDescription,
  metadataBase: new URL(`${site.url}`),
  keywords: [
    "belső rendszer fejlesztés",
    "excel automatizálás",
    "kkv digitalizálás",
    "riport dashboard",
    "egyedi rendszer fejlesztés",
    "szoftverfejlesztő Siófok",
  ],
  openGraph: {
    title: `${site.name} – Átlátható működés, kevesebb adminisztráció`,
    description:
      "Egyedi webes rendszerek, automatizált riportok és workflow cégeknek és magánszemélyeknek. Excel helyett modern megoldások.",
    url: site.url,
    siteName: site.name,
    locale: "hu_HU",
    type: "website",
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
