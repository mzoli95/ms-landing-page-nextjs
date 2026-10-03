"use client";

import { useId, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Lang } from "@/components/lib/i18n";
import { PortfolioScreenshotSlot } from "./PortfolioScreenshotSlot";
import styles from "./ToyzumiDemo.module.css";

export function ToyzumiDemo({
  lang,
  featured = false,
}: {
  lang: Lang;
  featured?: boolean;
}) {
  const en = lang === "en";
  const demoId = useId();
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const scenes = [
    {
      label: en ? "Catalogue" : "Katalógus",
      image: "02-products.png",
      title: en ? "The customer experience." : "A vásárlói felület.",
      text: en
        ? "Searchable products, wishlists and preorder interest."
        : "Kereshető termékek, kívánságlisták és előrendelési érdeklődés.",
    },
    {
      label: en ? "Loyalty" : "Hűségprogram",
      image: "07-loyalty-account.png",
      title: en ? "A reason to return." : "Vásárlói fiók és jutalmak.",
      text: en
        ? "Customer accounts with levels, points and redeemable rewards."
        : "Vásárlói szintek, gyűjthető pontok és beváltható jutalmak.",
    },
    {
      label: "Admin",
      image: "09-statistics.png",
      title: en ? "A view of daily operations." : "Rálátás a napi működésre.",
      text: en
        ? "Sales, demand and stock information in the admin interface."
        : "Értékesítési, keresleti és készletinformációk az adminisztrációban.",
    },
  ];
  const scene = scenes[active];
  return (
    <div className={styles.showcase} data-toyzumi-showcase>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>
          <span>{featured ? "01" : "TZ"}</span>
          {en
            ? "Independent project / E-commerce"
            : "Saját fejlesztés / E-kereskedelem"}
        </p>
        {featured ? (
          <h2 id="toyzumi-feature-title" className={styles.title}>
            ToyZumi<span aria-hidden="true">.</span>
          </h2>
        ) : (
          <h3 className={styles.title}>
            ToyZumi<span aria-hidden="true">.</span>
          </h3>
        )}
        <p className={styles.lead}>
          {en
            ? "A collector's webshop. An entire system behind it."
            : "Gyűjtői webshop. Teljes háttérrendszerrel."}
        </p>
        <p className={styles.description}>
          {en
            ? "A custom storefront, admin workspace and .NET backend. Designed and built together, from the catalogue to order management."
            : "Egyedi vásárlói felület, adminisztráció és .NET backend. Együtt tervezve és megépítve, a katalógustól a rendeléskezelésig."}
        </p>
        <p className={styles.scope}>
          {en
            ? "Storefront · Admin · Integrations"
            : "Vásárlói felület · Admin · Integrációk"}
        </p>
      </div>

      <div className={styles.media}>
        <div className={styles.mediaHeader}>
          <div
            role="tablist"
            aria-label={en ? "Demo chapters" : "Bemutató fejezetei"}
            className={styles.tabs}
          >
            {scenes.map((item, i) => (
              <button
                key={item.label}
                ref={(el) => {
                  buttons.current[i] = el;
                }}
                id={`${demoId}-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={active === i}
                aria-controls={`${demoId}-panel`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(event) => {
                  let next = i;
                  if (event.key === "ArrowRight")
                    next = (i + 1) % scenes.length;
                  else if (event.key === "ArrowLeft")
                    next = (i + scenes.length - 1) % scenes.length;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = scenes.length - 1;
                  else return;
                  event.preventDefault();
                  setActive(next);
                  buttons.current[next]?.focus();
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <span className={styles.sceneNumber} aria-hidden="true">
            0{active + 1} / 03
          </span>
        </div>
        <div
          id={`${demoId}-panel`}
          role="tabpanel"
          aria-labelledby={`${demoId}-tab-${active}`}
          tabIndex={0}
          className={styles.panel}
        >
          <div className={styles.screen}>
            <PortfolioScreenshotSlot
              key={scene.image}
              lang={lang}
              filename={scene.image}
              label={`ToyZumi · ${scene.label}`}
              className="aspect-[16/10]"
              fit="cover"
              objectPosition="top"
              presentation="embedded"
              preload={featured && active === 0}
            />
          </div>
          <div className={styles.caption}>
            <p>{scene.title}</p>
            <span>{scene.text}</span>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <a
          href="https://staging.toyzumi.hu/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.demoLink}
        >
          {en ? "Try the demo" : "Demó kipróbálása"}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <Link
          href={
            featured
              ? "/portfolio/toyzumi"
              : "/portfolio/toyzumi#mernoki-hatter"
          }
          className={styles.projectLink}
        >
          {featured
            ? en
              ? "Explore the project"
              : "A projekt részletesen"
            : en
              ? "Engineering and testing"
              : "Fejlesztés és tesztelés"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <p className={styles.demoNote}>
          <span aria-hidden="true" />
          {en
            ? "Demo environment · sample data"
            : "Demókörnyezet · mintaadatok"}
        </p>
      </div>
    </div>
  );
}
