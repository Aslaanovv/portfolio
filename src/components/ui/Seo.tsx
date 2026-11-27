import { useEffect } from 'react';
import { site } from '@/data/site';

interface SeoProps {
  title: string;
  description?: string;
  /** Optional image for social sharing. Defaults to the site OG image. */
  image?: string;
  /** Override the canonical path. Defaults to the current location. */
  path?: string;
}

const DEFAULT_DESCRIPTION =
  "Product Designer & Frontend Engineer with 7+ years of experience crafting digital experiences.";

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}

export function Seo({ title, description = DEFAULT_DESCRIPTION, image, path }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${site.name}`;
    const url = `${site.url}${path ?? window.location.pathname}`;
    const ogImage = image ?? `${site.url}/og-image.png`;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', ogImage);

    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:url', url);
    upsertMeta('name', 'twitter:image', ogImage);

    upsertCanonical(url);
  }, [title, description, image, path]);

  return null;
}
