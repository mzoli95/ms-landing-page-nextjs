import type { Metadata } from "next";
import { getLangFromCookies } from "./i18n";
import { pageMetadata } from "./metadata";

const english: Record<string, [string, string]> = {
  "/": [
    "Websites, custom apps, PC repairs",
    "Desktop apps and simpler Excel tasks. PC repairs, speed-ups and builds. For businesses and individuals, around Siófok and online.",
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
    "Portfolio – ToyZumi and custom applications",
    "ToyZumi, Inventory, Documents, Menutivo and Mancs Műhely: independent projects with screenshots, technologies, development contributions and technical challenges.",
  ],
  "/portfolio/demok": [
    "Demo apps – bookings, documents and inventory",
    "Eight customisable demos: bookings, estimates, document approvals, roadside assistance and Windows inventory management. Problems, solutions and screenshots.",
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
    "Explore demand planning, restaurant ordering, computer troubleshooting and appointment booking, with practical steps and links to the projects behind them.",
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
      : undefined;
  return {
    ...original,
    ...pageMetadata(entry[0], entry[1], path, image, "en"),
    keywords: undefined,
  };
}
