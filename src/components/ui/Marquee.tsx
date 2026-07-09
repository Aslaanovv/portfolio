import { motion } from "framer-motion";

export function Marquee() {
  return (
    <div className="w-full bg-card border-y border-border py-6 overflow-hidden relative" data-testid="marquee-banner">
      <div className="flex whitespace-nowrap group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="flex items-center gap-12 group-hover:pause"
          style={{ width: "200%" }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground">
                Latest Work And Featured
              </span>
              <img 
                src="https://framerusercontent.com/images/LWhMQrXMaimdeTept19k0hVARY.svg" 
                alt="*" 
                className="w-4 h-4"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}