import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
}

export function Seo({ title, description = "A Web Designer based in San Francisco." }: SeoProps) {
  useEffect(() => {
    document.title = `${title} | David Henderson`;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);
  }, [title, description]);

  return null;
}
