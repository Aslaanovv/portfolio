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
      className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 my-8 sm:my-10 md:my-12"
      data-testid="section-heading"
    >
      <img src={iconUrl} alt="" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(99%) saturate(2476%) hue-rotate(359deg) brightness(97%) contrast(105%)' }} />
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight text-foreground text-center">
        {title}
      </h2>
      <img src={iconUrl} alt="" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(99%) saturate(2476%) hue-rotate(359deg) brightness(97%) contrast(105%)' }} />
    </motion.div>
  );
}
