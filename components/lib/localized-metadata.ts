import type { Metadata } from "next";
import { getLangFromCookies } from "./i18n";
import { pageMetadata } from "./metadata";

const english: Record<string, [string, string]> = {
  "/": [
    "Custom software, automation and PC support",
    "Custom software, websites, Excel automation and PC support for individuals and businesses. Online across Hungary; on-site around Siófok and in Somogy county, further afield by arrangement.",
  ],
  "/about": [
    "About me",
    "Meet Zoli, the developer behind Molnár Systems. Custom software, systems integration, automation and practical PC support for businesses and individuals.",
  ],
  "/contact": [
    "Contact",
    "Get in touch about custom software, websites, Excel automation, reports or PC support. For individuals and businesses, with a free initial discussion.",
  ],
  "/pricing": [
    "Prices",
    "Starting fees for custom development, websites, automation and PC services. Remote help and basic diagnostics from HUF 5,000, with the scope agreed in advance.",
  ],
  "/portfolio": [
    "Projects – ToyZumi, Menutivo and Molnár Diagnostic",
    "Explore independently developed software: a collector webshop, restaurant QR ordering and Windows diagnostics. Screenshots, project decisions and clear development status.",
  ],
  "/portfolio/toyzumi": [
    "ToyZumi – custom commerce and operations platform",
    "ToyZumi case study: a collector webshop with inventory, order processing, support, loyalty, CMS and marketing automation. Explore the staging demo and documented development snapshot.",
  ],
  "/services": [
    "Software development and PC services",
    "Custom software, websites, Excel automation, reports, PC builds, upgrades and diagnostics for individuals and businesses. Find the service that fits your needs.",
  ],
  "/services/pc-hardver": [
    "PC builds, upgrades and diagnostics around Siófok",
    "PC building, RAM and SSD upgrades, diagnostics and remote support. On-site around Siófok and in Somogy county; further afield by arrangement. Basic checks from HUF 5,000.",
  ],
  "/siofok-informatika": [
    "IT support and software development around Siófok",
    "Local custom development, websites, automation, databases and PC, printer and network support. Siófok area and Somogy county; remote help across Hungary.",
  ],
  "/usecases": [
    "Common problems and practical solutions",
    "Explore practical examples of demand planning, restaurant ordering and computer troubleshooting, with clear next steps and links to the projects behind them.",
  ],
};

/** Preserve the default Hungarian metadata; localise the selected English view. */
export async function localizedMetadata(
  original: Metadata,
  path: string,
): Promise<Metadata> {
  if ((await getLangFromCookies()) !== "en") return original;
  const entry = english[path];
  if (!entry) throw new Error(`Missing English metadata: ${path}`);
  const image =
    path === "/portfolio/toyzumi"
      ? "/portfolio/toyzumi/00-portfolio-cover.png"
      : "/og-image.png";
  return {
    ...original,
    ...pageMetadata(entry[0], entry[1], path, image, "en"),
    keywords: undefined,
  };
}
