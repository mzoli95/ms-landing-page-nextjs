import Link from "next/link";
import { site } from "@/components/lib/site";

export function Breadcrumbs({
  items,
  label,
}: {
  items: { name: string; href: string }[];
  label: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <nav aria-label={label}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-6 text-slate-600">
          {items.map((item, i) => (
            <li key={item.href} className="inline-flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === items.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="rounded underline underline-offset-4"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
