import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { trackPageView, trackEvent, trackOutboundLink, trackFormSubmission, trackProjectView, trackCtaClick } from '@/lib/analytics';

/**
 * React Hook for Analytics
 *
 * Automatically tracks page views on route changes.
 * Provides convenient methods for tracking custom events.
 */
export function useAnalytics() {
  const [location] = useLocation();

  // Track page views on route changes
  useEffect(() => {
    trackPageView(location);
  }, [location]);

  return {
    trackEvent,
    trackOutboundLink,
    trackFormSubmission,
    trackProjectView,
    trackCtaClick,
  };
}
