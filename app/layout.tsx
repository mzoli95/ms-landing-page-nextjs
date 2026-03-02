import type { Metadata } from "next";
import "./styles/globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { site } from "@/components/lib/site";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className="min-h-dvh bg-white text-slate-900 antialiased">
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
