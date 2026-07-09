import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { Seo } from "@/components/ui/Seo";
import { blogPosts } from "@/data/blog";
import { useEffect } from "react";

export default function BlogDetail() {
  const [, params] = useRoute("/blog/:slug");
  const currentSlug = params?.slug;
  
  const post = blogPosts.find(p => p.slug === currentSlug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlug]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <Link href="/blog" className="text-primary hover:underline">Back to Blog</Link>
      </div>
    );
  }

  const iconUrl = "https://framerusercontent.com/images/Jo0jOYulnS2p1qg37Yc6kaRGq6k.png";

  return (
    <>
      <Seo title={`${post.title} | Blog`} description={post.excerpt} />
      
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        <div className="flex justify-center items-center gap-4 mb-16">
          <img src={iconUrl} alt="" className="w-6 h-6 object-contain" />
          <h2 className="text-xl md:text-2xl font-display font-bold uppercase tracking-widest text-foreground">
            BLOG DETAILS
          </h2>
          <img src={iconUrl} alt="" className="w-6 h-6 object-contain" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="w-full aspect-[2/1] rounded-[2rem] overflow-hidden mb-12 shadow-md border border-border"
        >
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>

        <div className="flex flex-col gap-8 bg-card border border-border p-8 md:p-12 rounded-[2rem] shadow-sm mb-20">
          
          <div className="border-b border-border pb-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground block mb-4">
              {post.date}
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight text-balance">
              {post.title}
            </h1>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display">
            {post.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
            ))}

            <ul className="list-disc pl-6 my-8 text-foreground font-medium space-y-3">
              {post.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-4">
              {post.closing}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-8 border-t border-border">
            {post.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-muted text-foreground text-sm font-semibold uppercase tracking-wider rounded-full">
                {tag}
              </span>
            ))}
          </div>

        </div>

        <div className="text-center mb-24">
          <Link href="/blog" className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-colors">
            Back to Blog
          </Link>
        </div>

      </div>
    </>
  );
}