import { useEffect } from 'react';

/**
 * Google Analytics 4 Integration
 *
 * Add your GA4 Measurement ID to .env file:
 * VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 *
 * This component loads the GA script and initializes tracking.
 */
export function GoogleAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!measurementId || import.meta.env.DEV) {
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize GA
    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(this: Window, ..._args: unknown[]) {
        (window as any).dataLayer.push(arguments);
      }
      (window as any).gtag = gtag;

      (window as any).gtag('js', new Date());
      (window as any).gtag('config', measurementId, {
        page_path: window.location.pathname,
      });
    };

    return () => {
      // Cleanup on unmount
      const existingScript = document.head.querySelector(
        `script[src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"]`
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [measurementId]);

  return null;
}

/**
 * Vercel Analytics Integration
 *
 * Automatically enabled when deployed on Vercel.
 */
export function VercelAnalytics() {
  useEffect(() => {
    if (import.meta.env.DEV) {
      return;
    }

    // Load Vercel Analytics script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@vercel/analytics/dist/analytics.umd.min.js';
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.head.querySelector(
        'script[src="https://cdn.jsdelivr.net/npm/@vercel/analytics/dist/analytics.umd.min.js"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null;
}
