import { useEffect, useRef, useState } from "react";

/**
 * Ambient mouse-following glow effect for hero sections.
 * Creates a subtle radial gradient that follows the cursor.
 */
export function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isInView) return;
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsInView(true);
    const handleMouseLeave = () => setIsInView(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl -z-10 transition-transform duration-500 ease-out"
      style={{
        transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
        opacity: isInView ? 1 : 0
      }}
    />
  );
}
