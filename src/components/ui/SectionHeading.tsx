import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
}

export function SectionHeading({ title }: SectionHeadingProps) {
  const iconUrl = "https://framerusercontent.com/images/rTKxaj3MefuNs8YZuhW8LNHiVPM.svg";
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex items-center justify-center gap-4 my-12"
      data-testid="section-heading"
    >
      <img src={iconUrl} alt="" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
      <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-foreground">
        {title}
      </h2>
      <img src={iconUrl} alt="" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
    </motion.div>
  );
}