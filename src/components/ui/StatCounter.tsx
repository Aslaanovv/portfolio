import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export function StatCounter({ value, prefix = "", suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / value));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === value) clearInterval(timer);
      }, stepTime);
      
      return () => clearInterval(timer);
    }
    return undefined;
  }, [isInView, value]);

  return (
    <div 
      ref={ref} 
      className="bg-card border border-border p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-sm"
      data-testid={`stat-counter-${label.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
        {prefix}{count < 10 && count > 0 && prefix === "" ? `0${count}` : count === 0 && prefix === "" && value < 10 ? "00" : count}{suffix}
      </div>
      <div className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
        {label}
      </div>
    </div>
  );
}