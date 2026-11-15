import { useEffect } from 'react';

export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

let capturedSeo: SeoProps | null = null;

export function getCapturedSeo(): SeoProps | null {
  return capturedSeo;
}

export function resetCapturedSeo(): void {
  capturedSeo = null;
}

export function useSeo({ title, description, canonical, ogImage }: SeoProps) {
  // Capture synchronously during render so prerenderer can read it
  // oxlint-disable-next-line react/globals
  capturedSeo = { title, description, canonical, ogImage };

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const image = ogImage || 'https://arixpro.com/og-image.png';

    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', 'ArixPro', 'property');
    setMeta('og:locale', 'en_US', 'property');
    setMeta('og:image', image, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);

    if (canonical) {
      setMeta('og:url', canonical, 'property');
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, canonical, ogImage]);
}
