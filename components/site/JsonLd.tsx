import type { Lang } from "../lib/i18n";
import { site, flags } from "../lib/site";
import { getServices } from "../lib/services";

export function JsonLd({ lang }: { lang: Lang }) {
  const en = lang === "en";
  const services = getServices(lang).map((service) => service.title);
  const areaServed = [
    { "@type": "City", name: "Siófok" },
    {
      "@type": "AdministrativeArea",
      name: en ? "Somogy county" : "Somogy vármegye",
    },
    { "@type": "Country", name: en ? "Hungary" : "Magyarország" },
  ];
  const description = en
    ? "Custom software, websites, automation, reports and PC support for individuals and businesses. On-site around Siófok and in Somogy county, further afield by arrangement; remote help across Hungary."
    : "Egyedi szoftver, weboldal, automatizálás, kimutatások és PC-s segítség magánszemélyeknek és vállalkozásoknak. Siófok és Somogy megye, távolabb egyeztetéssel; távsegítség országosan.";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": site.url + "#org",
        name: site.name,
        url: site.url,
        logo: site.url + "/icon-512.png",
        image: site.url + "/og-image.png",
        email: site.email,
        ...(flags.showPhone ? { telephone: site.phone } : {}),
        areaServed,
        description,
        knowsAbout: services,
      },
      {
        "@type": "WebSite",
        "@id": site.url + "#website",
        url: site.url,
        name: site.name,
        inLanguage: lang,
        publisher: { "@id": site.url + "#org" },
      },
      {
        "@type": "Service",
        "@id": site.url + "#service",
        name: site.name,
        url: site.url,
        image: site.url + "/og-image.png",
        email: site.email,
        ...(flags.showPhone ? { telephone: site.phone } : {}),
        description,
        provider: { "@id": site.url + "#org" },
        areaServed,
        serviceType: services,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: en
            ? "Software and PC services"
            : "Szoftveres és PC-s szolgáltatások",
          itemListElement: services.map((name) => ({
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
