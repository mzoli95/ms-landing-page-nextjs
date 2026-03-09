import { site } from "../lib/site";

export function JsonLd() {
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
        telephone: site.phone,
        areaServed: [
          "Siófok",
          "Ságvár",
          "Balaton környéke",
          "Somogy megye",
          "Magyarország",
          "Remote",
          "Hungary",
        ],
        keywords:
          "siófok fejlesztés, siófok webfejlesztés, siófoki programozó, ságvár programozó, balaton környéke fejlesztés, somogy megye webfejlesztő, siófok gépszerelő, pc szerviz siófok",
        disambiguatingDescription:
          "Molnár Systems egy független magyar digitális szolgáltatói márka belső rendszerekhez és automatizáláshoz. Nem azonos más hasonló nevű vállalkozásokkal.",
        knowsAbout: [
          "Egyedi belső rendszerek",
          "Munkafolyamatok automatizálása",
          "Összefoglalók és áttekintő felületek",
          "Excel kiváltása",
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
        inLanguage: "hu-HU",
        publisher: {
          "@id": `${site.url}#org`,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}#service`,
        name: site.name,
        provider: {
          "@id": `${site.url}#org`,
        },
        areaServed: [
          "Siófok",
          "Ságvár",
          "Balaton környéke",
          "Somogy megye",
          "Hungary",
        ],
        serviceType: [
          "Egyedi webes belső rendszerek",
          "Automatizálás",
          "Összefoglalók és adatmegjelenítés",
          "Webfejlesztés",
          "Programozás",
          "PC karbantartás és számítógépes segítség",
          "PC szerviz Siófok",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
