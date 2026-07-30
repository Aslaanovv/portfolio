import { motion } from "framer-motion";
import { useEffect } from "react";
import { NextProject } from "@/components/case-study/NextProject";

interface LaCamilleCaseStudyProps {
  work: any;
  nextWork: any;
  gallery: string[];
}

export function LaCamilleCaseStudy({ work, nextWork, gallery }: LaCamilleCaseStudyProps) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="w-full">

      {/* HERO TEXT SECTION - BEFORE VIDEO */}
      <div className="w-full min-h-[50vh] flex flex-col items-center justify-center px-4 text-center bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="text-sm md:text-base font-semibold uppercase tracking-widest mb-6 text-muted-foreground">
            WEB DESIGN & DEVELOPMENT
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8 text-balance text-foreground">
            La Camille
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-muted-foreground leading-relaxed">
            Designing and developing a premium Shopify experience for a luxury lingerie brand.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base text-muted-foreground">
            <span>February – April 2026</span>
            <span>2 Months</span>
            <span>Shopify</span>
            <span>UX/UI + Development</span>
          </div>
        </motion.div>
      </div>

      {/* HERO VIDEO SECTION */}
      <div className="relative w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover"
        >
          <source src="/la-camille-hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl py-20">

        {/* SECTION 01: PROJECT SNAPSHOT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Role", value: "Designer + Developer" },
              { label: "Timeline", value: "Feb – Apr 2026" },
              { label: "Industry", value: "Fashion & E-commerce" },
              { label: "Platform", value: "Shopify" },
              { label: "Tech Stack", value: "Liquid, CSS, JavaScript" },
              { label: "Status", value: "Launched" }
            ].map((item) => (
              <div key={item.label} className="bg-card border border-border p-6 rounded-2xl">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-2">{item.label}</span>
                <span className="font-display font-bold text-base">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 02: OVERVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Overview</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            La Camille is a luxury lingerie brand that needed an online presence matching their premium positioning.
            I designed and built their Shopify store from the ground up, focusing on creating an elegant shopping experience
            that feels intimate and sophisticated.
          </p>
        </motion.div>

        {/* SECTION 03: CHALLENGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-display font-bold">Challenge</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Luxury brands face a specific tension online: they need to feel exclusive while remaining accessible.
                La Camille had no digital presence, only offline sales through select boutiques.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The challenge was translating that intimate, high-end in-store experience to a screen.
                Every design decision needed to reinforce the luxury feeling while making the shopping process effortless.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SECTION 04: HOMEPAGE EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold mb-4">Homepage Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              The homepage sets the tone immediately. Large imagery, generous whitespace, and minimal navigation
              create that luxury feeling from the first scroll.
            </p>
          </div>

          <div className="w-full rounded-[2rem] overflow-hidden border border-border">
            <img src={gallery[0]} alt="Homepage showcase" className="w-full h-auto" />
          </div>
        </motion.div>

        {/* SECTION 05: COLLECTION EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <h2 className="text-3xl font-display font-bold mb-6">Collection Experience</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Browsing collections should feel like flipping through a lookbook, not scanning a spreadsheet.
                I used larger product cards with more whitespace to let the photography breathe.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Filters are tucked away until needed. The focus remains on the products themselves,
                with category navigation that feels natural rather than mechanical.
              </p>
            </div>

            <div className="md:col-span-7 order-1 md:order-2">
              <div className="rounded-[2rem] overflow-hidden border border-border">
                <img src={gallery[1]} alt="Collection page showcase" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 06: PRODUCT EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold mb-4">Product Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mb-6">
              The product page is where the purchase decision happens. Three elements mattered most:
            </p>
            <ul className="text-muted-foreground text-lg space-y-2 max-w-2xl">
              <li>• <strong className="text-foreground">Product gallery</strong> — Large, zoomable images with multiple angles</li>
              <li>• <strong className="text-foreground">Product information</strong> — Concise details without overwhelming</li>
              <li>• <strong className="text-foreground">Purchase experience</strong> — Clear CTA, minimal friction</li>
            </ul>
          </div>

          <div className="w-full rounded-[2rem] overflow-hidden border border-border">
            <img src={gallery[2]} alt="Product page showcase" className="w-full h-auto" />
          </div>
        </motion.div>

        {/* SECTION 07: RESPONSIVE EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold mb-4">Responsive Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Most luxury fashion browsing happens on mobile. The experience had to feel just as premium
              on a phone as on desktop — same elegance, same ease, different proportions.
            </p>
          </div>

          <div className="w-full rounded-[2rem] overflow-hidden border border-border">
            <img src={gallery[3]} alt="Responsive design showcase" className="w-full h-auto" />
          </div>
        </motion.div>

        {/* SECTION 08: BUILDING WITH SHOPIFY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-5">
              <h2 className="text-3xl font-display font-bold mb-6">Building with Shopify</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I started with Dawn, Shopify's free theme, as the foundation. It was the right choice
                — well-structured, performant, and regularly updated.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The customization happened in the templates. I modified the Liquid files to create
                unique layouts for the homepage, collection, and product pages while keeping the
                core functionality intact.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                CSS handled the visual layer. Custom fonts, refined spacing, and the color system
                that matches La Camille's brand identity.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                JavaScript additions were minimal — just enough for the interactive elements that
                Shopify doesn't provide out of the box.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="rounded-[2rem] overflow-hidden border border-border">
                <img src={gallery[4]} alt="Shopify development" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 09: REFLECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border p-8 md:p-16 rounded-[2rem] mb-24"
        >
          <h2 className="text-3xl font-display font-bold mb-6">Reflection</h2>

          <div className="prose prose-lg dark:prose-invert max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">What worked well:</strong> Starting with a proven theme saved weeks of development.
              Dawn provided solid foundations — responsive grids, cart functionality, performance optimizations.
              I could focus on the custom layers instead of rebuilding basics.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">What I learned:</strong> Luxury e-commerce is about restraint as much as
              presentation. Every element earns its place. I learned to say no to features that didn't
              serve the core shopping experience.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">What I'd improve today:</strong> I'd spend more time on the mobile gallery
              experience. Pinch-to-zoom and smoother image transitions would elevate the mobile feel.
              Also, product filtering could be more sophisticated without adding complexity.
            </p>
          </div>
        </motion.div>

        {/* SECTION 10: NEXT PROJECT */}
        <NextProject
          slug={nextWork.slug}
          title={nextWork.title}
          category={nextWork.category}
          image={nextWork.image}
        />

      </div>
    </div>
  );
}
