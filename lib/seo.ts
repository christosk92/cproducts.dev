import type { Metadata } from "next";
import { site } from "./site";

type SeoArgs = {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage,
}: SeoArgs = {}): Metadata {
  const fullTitle = title ? `${title} — ${site.name}` : site.name;
  const desc = description ?? site.description;
  const url = `${site.url}${path}`;
  const image = ogImage ?? `${site.url}/og?title=${encodeURIComponent(title ?? site.name)}`;

  return {
    metadataBase: new URL(site.url),
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description: desc,
      siteName: site.name,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [image],
    },
  };
}
