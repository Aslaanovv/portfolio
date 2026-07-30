import { useEffect, useRef, useState } from "react";

/**
 * Ambient mouse-following glow effect for hero sections.
 * Creates a subtle radial gradient that follows the cursor.
 */
export function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Track mouse movement on window
    window.addEventListener('mousemove', handleMouseMove);
    // Track hover state on the document
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl -z-10 transition-transform duration-500 ease-out"
      style={{
        transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
        opacity: isVisible ? 1 : 0
      }}
    />
  );
}
