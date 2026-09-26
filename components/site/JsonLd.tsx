import type { Lang } from "../lib/i18n";
import { site, flags } from "../lib/site";

export function JsonLd({ lang }: { lang: Lang }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}#org`,
        name: site.name,
        url: `${site.url}`,
        logo: `${site.url}/icon-512.png`,
        image: `${site.url}/og-image.png`,
        email: site.email,
        ...(flags.showPhone ? { telephone: site.phone } : {}),
        areaServed: [
          "Siófok",
          "Somogy megye",
          "Magyarország",
          "Remote",
          "Hungary",
        ],
        keywords:
          "siófok fejlesztés, siófok webfejlesztés, siófoki programozó, somogy megye webfejlesztő, siófok gépszerelő",
        disambiguatingDescription:
          "Molnár Systems egy független magyar digitális szolgáltatói márka belső rendszerekhez és automatizáláshoz. Nem azonos más hasonló nevű vállalkozásokkal.",
        knowsAbout: [
          "Egyedi belső rendszerek",
          "Munkafolyamatok automatizálása",
          "Összefoglalók és áttekintő felületek",
          "Excel-automatizálás",
          "Statisztikák és kimutatások",
          "Webfejlesztés Siófok",
          "Programozás Somogy megye",
          "PC karbantartás",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}#website`,
        url: `${site.url}`,
        name: site.name,
        inLanguage: lang === "en" ? "en" : "hu-HU",
        publisher: {
          "@id": `${site.url}#org`,
        },
      },
      {
        "@type": "Service",
        "@id": `${site.url}#service`,
        name: site.name,
        url: site.url,
        image: `${site.url}/og-image.png`,
        email: site.email,
        ...(flags.showPhone ? { telephone: site.phone } : {}),
        description:
          "Egyedi szoftverfejlesztés, webfejlesztés, automatizálás, adatbázis-kezelés és számítógépes segítség elsősorban Siófokon és környékén, valamint Somogy megyében. Távolabbi kiszállás előzetes egyeztetéssel, online segítség országosan.",
        provider: {
          "@id": `${site.url}#org`,
        },
        areaServed: [
          { "@type": "City", name: "Siófok" },
          { "@type": "AdministrativeArea", name: "Somogy vármegye" },
          { "@type": "Country", name: "Magyarország" },
        ],
        serviceType: [
          "Egyedi webes belső rendszerek",
          "Automatizálás",
          "Összefoglalók és adatmegjelenítés",
          "Webfejlesztés",
          "Programozás",
          "PC karbantartás és számítógépes segítség",
          "Nyomtató és szkenner beállítás",
          "SQL és NoSQL adatbázis-kezelés",
          "Biztonsági mentés és visszaállítás",
          "Infrastruktúra és üzemeltetés",
          "Technikai SEO és GEO",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digitális és informatikai szolgáltatások",
          itemListElement: [
            "Egyedi szoftver és belső rendszer fejlesztés",
            "Weboldal és webalkalmazás fejlesztés",
            "Excel és adminisztráció automatizálása",
            "SQL és NoSQL adatbázisok",
            "PC, nyomtató és hálózati segítség",
            "Biztonsági mentés és infrastruktúra",
            "SEO és GEO láthatóság",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
