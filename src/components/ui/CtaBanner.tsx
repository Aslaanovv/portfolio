import { Link } from "wouter";
import { motion } from "framer-motion";

export function CtaBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full mt-24"
      data-testid="cta-banner"
    >
      <Link href="/contact" className="block group">
        <div className="bg-card border border-border rounded-[2rem] p-12 md:p-20 text-center flex flex-col items-center justify-center transition-all duration-500 hover:shadow-xl hover:border-primary relative overflow-hidden group">
          
          <img 
            src="https://framerusercontent.com/images/LWhMQrXMaimdeTept19k0hVARY.svg" 
            alt="Star"
            className="w-16 h-16 md:w-24 md:h-24 mb-8 text-foreground group-hover:text-primary transition-colors group-hover:scale-110 duration-500 origin-center group-hover:rotate-12"
          />
          
          <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            Let's work <br /> together.
          </h2>
          
          <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-8 group-hover:translate-x-0 hidden md:block">
            <img src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg" alt="" className="w-12 h-12 rotate-180" />
          </div>
          
          <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-8 group-hover:translate-x-0 hidden md:block">
            <img src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg" alt="" className="w-12 h-12" />
          </div>
          
        </div>
      </Link>
    </motion.div>
  );
}