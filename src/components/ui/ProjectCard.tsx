import { Link } from "wouter";
import { motion } from "framer-motion";

interface ProjectCardProps {
  slug: string;
  category: string;
  title: string;
  image: string;
  index?: number;
}

export function ProjectCard({ slug, category, title, image, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      data-testid={`project-card-${slug}`}
    >
      <Link href={`/works/${slug}`} className="block group">
        <div className="bg-card p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border border-border shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary flex flex-col h-full">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 relative bg-muted">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="flex items-end justify-between mt-auto gap-3">
            <div className="flex-1 min-w-0">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 sm:mb-2 block">
                {category}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {title}
              </h3>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center text-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:rotate-45 shrink-0">
              <img
                src="https://framerusercontent.com/images/RNA8Jba4vAtFxrA1ensbbd4eT8.svg"
                alt="Go"
                className="w-4 h-4 sm:w-5 sm:h-5 filter invert-0 dark:invert group-hover:invert-0 group-hover:brightness-0 group-hover:invert transition-all"
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
