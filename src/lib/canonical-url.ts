/**
 * Canonical URL configuration
 * This ensures the app works consistently across all URLs by:
 * 1. Preventing localStorage conflicts when switching URLs
 * 2. Optionally redirecting to the canonical URL
 */

export const CANONICAL_URL = 'https://aslaansportfolio.vercel.app';

/**
 * Get the current origin
 */
export function getCurrentOrigin(): string {
  return window.location.origin;
}

/**
 * Check if current URL matches the canonical URL
 */
export function isCanonicalURL(): boolean {
  return getCurrentOrigin() === CANONICAL_URL;
}

/**
 * Optionally redirect to canonical URL (useful for production)
 * Call this early in app initialization if you want automatic redirects
 */
export function maybeRedirectToCanonical(): void {
  if (import.meta.env.PROD && !isCanonicalURL()) {
    // Preserve the path and query params
    const currentPath = window.location.pathname + window.location.search;
    window.location.href = CANONICAL_URL + currentPath;
  }
}

/**
 * Clear potentially corrupted localStorage
 * Call this if you suspect localStorage conflicts between URLs
 */
export function clearThemeStorage(): void {
  const themeKey = 'theme'; // next-themes default key
  localStorage.removeItem(themeKey);
}
