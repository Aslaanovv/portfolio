import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  label?: string;
  headline?: string;
  subhead?: string;
  children: ReactNode;
  className?: string;
  max?: "sm" | "md" | "lg";
}

/**
 * Standard case study section wrapper with optional label/headline.
 * Provides consistent animation and layout for all sections.
 *
 * @param max - Content width: "sm" (1000px), "md" (1200px), "lg" (full)
 */
export function SectionWrapper({
  label,
  headline,
  subhead,
  children,
  className = "",
  max = "lg"
}: SectionWrapperProps) {
  const maxWidth = {
    sm: "max-w-[1000px]",
    md: "max-w-[1200px]",
    lg: "max-w-6xl"
  }[max];

  return (
    <div className={`w-full bg-background ${className}`}>
      <div className={`w-full ${maxWidth} mx-auto px-4 md:px-8 py-24 md:py-32`}>
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
              {label}
            </p>
          </motion.div>
        )}

        {headline && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight">
              {headline}
            </h2>
            {subhead && (
              <p className="text-base md:text-lg text-muted-foreground/60 mt-6 max-w-2xl">
                {subhead}
              </p>
            )}
          </motion.div>
        )}

        {children}
      </div>
    </div>
  );
}

/**
 * Animated content block with fade-in effect.
 */
export function AnimatedBlock({
  children,
  delay = 0,
  className = ""
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
