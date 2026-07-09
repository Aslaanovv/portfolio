import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { Seo } from "@/components/ui/Seo";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { works, sharedGallery } from "@/data/works";
import { useEffect } from "react";

export default function WorkDetail() {
  const [, params] = useRoute("/works/:slug");
  const currentSlug = params?.slug;
  
  const currentIndex = works.findIndex(w => w.slug === currentSlug);
  const work = works[currentIndex];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlug]);

  if (!work) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Project not found</h1>
        <Link href="/works" className="text-primary hover:underline">Back to Works</Link>
      </div>
    );
  }

  const nextWork = works[(currentIndex + 1) % works.length];
  const dividerIcon = "https://framerusercontent.com/images/3YMJH9B5UJQjqCnjwcyMUADtIRU.svg";
  const lineIcon = "https://framerusercontent.com/images/SW5iChPwMKIDPmMbrOLp1fyww.svg";

  return (
    <>
      <Seo title={`${work.title} | Works`} description={work.description1} />
      
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
            {work.category} / {work.title}
          </span>
          <img src={dividerIcon} alt="" className="h-6 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight max-w-3xl mx-auto mb-8 text-balance">
            Aesthetic design for brand / new startup
          </h1>
          <img src={dividerIcon} alt="" className="h-6 mx-auto" />
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="w-full rounded-[2rem] overflow-hidden mb-16 shadow-lg border border-border"
        >
          <img src={work.image} alt={work.title} className="w-full h-auto" />
        </motion.div>

        <img src={lineIcon} alt="" className="w-full max-w-xs mx-auto mb-16" />

        {/* Content Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold uppercase tracking-wider text-muted-foreground">{work.client}</h3>
          </div>
          <div className="md:col-span-8 prose prose-lg dark:prose-invert">
            <p className="mb-6">{work.paragraph1}</p>
            {work.paragraph2 && <p>{work.paragraph2}</p>}
          </div>
        </div>

        {/* About Section */}
        <div className="bg-card border border-border p-8 md:p-16 rounded-[2rem] mb-20">
          <h2 className="text-3xl font-display font-bold mb-6">ABOUT</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{work.about}</p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {sharedGallery.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`rounded-[2rem] overflow-hidden border border-border ${idx === 2 ? 'md:col-span-2' : ''}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        <img src={lineIcon} alt="" className="w-full max-w-xs mx-auto mb-16" />

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-border pb-16">
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">Year</span>
            <span className="font-display font-bold text-xl">{work.year}</span>
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">Client</span>
            <span className="font-display font-bold text-xl">{work.client}</span>
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">Services</span>
            <span className="font-display font-bold text-xl">{work.services}</span>
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">Project</span>
            <span className="font-display font-bold text-xl">{work.title}</span>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold mb-8">DESCRIPTION</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-6">{work.description1}</p>
            <p>{work.description2}</p>
          </div>
        </div>

        {/* Bottom Hero Duplicate */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="w-full rounded-[2rem] overflow-hidden mb-24 shadow-lg border border-border"
        >
          <img src={work.image} alt={work.title} className="w-full h-auto" />
        </motion.div>

        {/* Next Project */}
        <div className="text-center mb-24">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4 block">Next Project</span>
          <Link href={`/works/${nextWork.slug}`} className="inline-block group">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-6">
              {nextWork.title}
              <img src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg" alt="" className="w-10 h-10 group-hover:translate-x-2 transition-transform filter invert-0 dark:invert group-hover:invert-[0.4] sepia-[1] saturate-[100] hue-rotate-[0deg] brightness-[1]" style={{ filter: "brightness(0) saturate(100%) invert(49%) sepia(87%) saturate(3065%) hue-rotate(18deg) brightness(101%) contrast(106%)" }} />
            </h2>
          </Link>
        </div>

        <CtaBanner />

      </div>
    </>
  );
}