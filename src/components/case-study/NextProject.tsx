import { motion } from "framer-motion";
import { Link } from "wouter";

interface NextProjectProps {
  slug: string;
  title: string;
  image: string;
}

/**
 * Reusable "Next Project" card for case study navigation.
 * Used at the end of each case study to guide to the next work.
 */
export function NextProject({ slug, title, image }: NextProjectProps) {
  return (
    <div className="w-full bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground/50">Continue exploring</p>
        </motion.div>

        <Link href={`/projects/${slug}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative w-full aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <div className="absolute inset-0">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white text-center">
                {title}
              </h3>
            </div>
          </motion.div>
        </Link>

      </div>
    </div>
  );
}
