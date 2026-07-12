import { Link } from "wouter";
import { motion } from "framer-motion";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  index?: number;
}

export function BlogCard({ slug, title, excerpt, date, image, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      data-testid={`blog-card-${slug}`}
    >
      <Link href={`/blog/${slug}`} className="block group h-full">
        <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary flex flex-col md:flex-row gap-8 h-full items-center">
          
          <div className="w-full md:w-2/5 aspect-[4/3] rounded-2xl overflow-hidden relative shrink-0 bg-muted">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <div className="w-full md:w-3/5 flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
              {date}
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-4 line-clamp-2">
              {title}
            </h3>
            <p className="text-muted-foreground line-clamp-3 mb-6">
              {excerpt}
            </p>
            <div className="mt-auto flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
              <span>Read More</span>
              <img
                src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg"
                alt="Read more"
                className="w-4 h-4 transition-transform group-hover:translate-x-1 filter brightness-0 invert"
              />
            </div>
          </div>
          
        </div>
      </Link>
    </motion.div>
  );
}