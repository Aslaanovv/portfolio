/**
 * Simple Analytics System
 *
 * A lightweight analytics solution that tracks page views and events.
 * Data is stored locally and can be sent to external services like:
 * - Google Analytics 4
 * - Plausible (privacy-friendly)
 * - Vercel Analytics
 * - Custom endpoint
 */

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, string | number | boolean>;
  timestamp: number;
  page: string;
}

interface PageView {
  page: string;
  referrer: string;
  timestamp: number;
  userAgent: string;
}

/**
 * Track page views - call this on route changes
 */
export function trackPageView(page: string, referrer: string = ''): void {
  const pageView: PageView = {
    page,
    referrer: referrer || document.referrer,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
  };

  // Store locally for debugging
  storePageView(pageView);

  // Send to Google Analytics if configured
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
    });
  }

  // Send to Vercel Analytics if available
  if (typeof window !== 'undefined' && (window as any).va) {
    (window as any).va('pageview', page);
  }

  // Log in development
  if (import.meta.env.DEV) {
    console.log('[Analytics] Page View:', pageView);
  }
}

/**
 * Track custom events - button clicks, form submissions, etc.
 */
export function trackEvent(
  name: string,
  properties?: Record<string, string | number | boolean>
): void {
  const event: AnalyticsEvent = {
    name,
    properties,
    timestamp: Date.now(),
    page: window.location.pathname,
  };

  // Store locally
  storeEvent(event);

  // Send to Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', name, properties);
  }

  // Log in development
  if (import.meta.env.DEV) {
    console.log('[Analytics] Event:', event);
  }
}

/**
 * Track outbound link clicks
 */
export function trackOutboundLink(url: string, label?: string): void {
  trackEvent('outbound_link', {
    url,
    label: label || url,
  });
}

/**
 * Track contact form submissions
 */
export function trackFormSubmission(formType: string, success: boolean): void {
  trackEvent('form_submission', {
    form_type: formType,
    success,
  });
}

/**
 * Track project views/clicks
 */
export function trackProjectView(projectSlug: string, projectName: string): void {
  trackEvent('project_view', {
    project_slug: projectSlug,
    project_name: projectName,
  });
}

/**
 * Track CTA button clicks
 */
export function trackCtaClick(location: string, text: string): void {
  trackEvent('cta_click', {
    location,
    text,
  });
}

/**
 * Store analytics data locally (for debugging)
 */
function storePageView(pageView: PageView): void {
  try {
    const key = 'portfolio_page_views';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push(pageView);
    // Keep only last 100 entries
    if (existing.length > 100) {
      existing.splice(0, existing.length - 100);
    }
    localStorage.setItem(key, JSON.stringify(existing));
  } catch (e) {
    // Silent fail if localStorage is blocked
  }
}

function storeEvent(event: AnalyticsEvent): void {
  try {
    const key = 'portfolio_events';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push(event);
    // Keep only last 100 entries
    if (existing.length > 100) {
      existing.splice(0, existing.length - 100);
    }
    localStorage.setItem(key, JSON.stringify(existing));
  } catch (e) {
    // Silent fail if localStorage is blocked
  }
}

/**
 * Get analytics data (for debugging)
 */
export function getAnalyticsData() {
  try {
    return {
      pageViews: JSON.parse(localStorage.getItem('portfolio_page_views') || '[]'),
      events: JSON.parse(localStorage.getItem('portfolio_events') || '[]'),
    };
  } catch (e) {
    return { pageViews: [], events: [] };
  }
}

/**
 * Clear analytics data (for testing)
 */
export function clearAnalyticsData(): void {
  try {
    localStorage.removeItem('portfolio_page_views');
    localStorage.removeItem('portfolio_events');
  } catch (e) {
    // Silent fail
  }
}
