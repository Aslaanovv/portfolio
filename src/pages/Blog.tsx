import { Seo } from "@/components/ui/Seo";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/blog";
import { motion } from "framer-motion";

export default function Blog() {
  const iconUrl = "https://framerusercontent.com/images/Jo0jOYulnS2p1qg37Yc6kaRGq6k.png";

  return (
    <>
      <Seo title="Blog" />
      <div className="container mx-auto px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center justify-center gap-4 my-12 mb-20"
        >
          <img src={iconUrl} alt="" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-foreground">
            OUR BLOGS
          </h2>
          <img src={iconUrl} alt="" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col gap-8 mb-24">
          {blogPosts.map((post, idx) => (
            <BlogCard key={post.slug} {...post} index={idx} />
          ))}
        </div>

      </div>
    </>
  );
}