import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";

interface BreadcrumbItem {
  name: string;
  url?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: `https://morusulifesciences.com${item.url}` }),
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbData} />
      <nav aria-label="Breadcrumb" className="mb-8 hidden sm:block">
        <ol className="flex items-center space-x-2 text-sm text-forest-900/60">
          <li>
            <Link href="/" className="hover:text-forest-900 transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4" />
              {item.url ? (
                <Link href={item.url} className="hover:text-forest-900 transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-forest-900">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
