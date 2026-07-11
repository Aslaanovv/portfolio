import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface SectionTheme {
  id: string;
  theme: 'light' | 'dark';
}

export function useScrollTheme(sections: SectionTheme[]) {
  const { setTheme } = useTheme();
  const observerRefs = useRef<Map<Element, string>>(new Map());

  useEffect(() => {
    const createObserver = () => {
      const options = {
        root: null,
        rootMargin: '-40% 0px -40% 0px', // Trigger when section reaches center area
        threshold: 0
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = observerRefs.current.get(entry.target);
            const section = sections.find(s => s.id === sectionId);

            if (section) {
              // Apply theme using next-themes
              setTheme(section.theme);
            }
          }
        });
      }, options);

      // Small delay to ensure DOM is ready
      const timeoutId = setTimeout(() => {
        // Observe all sections
        sections.forEach((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            observerRefs.current.set(element, section.id);
            observer.observe(element);
          }
        });
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        observer?.disconnect();
        observerRefs.current.clear();
      };
    };

    const cleanup = createObserver();

    return () => {
      if (cleanup) cleanup();
    };
  }, [sections, setTheme]);

  return { observerRefs };
}
