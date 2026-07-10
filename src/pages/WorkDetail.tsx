import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { Seo } from "@/components/ui/Seo";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { works, sharedGallery, laCamilleGallery } from "@/data/works";
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

  // La Camille gets special treatment
  const isLaCamille = currentSlug === "la-camille";
  const gallery = isLaCamille ? laCamilleGallery : sharedGallery;

  return (
    <>
      <Seo title={`${work.title} | Works`} description={work.description1} />

      {isLaCamille ? (
        <LaCamilleCaseStudy work={work} nextWork={nextWork} gallery={gallery} dividerIcon={dividerIcon} lineIcon={lineIcon} />
      ) : (
        <StandardCaseStudy work={work} nextWork={nextWork} gallery={gallery} dividerIcon={dividerIcon} lineIcon={lineIcon} />
      )}

      <CtaBanner />
    </>
  );
}

// Standard case study (existing projects)
function StandardCaseStudy({ work, nextWork, gallery, dividerIcon, lineIcon }: any) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
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
        {gallery.map((img: string, idx: number) => (
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

      <NextProjectLink nextWork={nextWork} />
    </div>
  );
}

// Premium La Camille case study with hero video
function LaCamilleCaseStudy({ work, nextWork, gallery }: any) {
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
        <NextProjectLink nextWork={nextWork} />

      </div>
    </div>
  );
}

// Reusable next project link
function NextProjectLink({ nextWork }: any) {
  return (
    <div className="text-center mb-24">
      <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4 block">Next Project</span>
      <Link href={`/works/${nextWork.slug}`} className="inline-block group">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-6">
          {nextWork.title}
          <img src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg" alt="" className="w-10 h-10 group-hover:translate-x-2 transition-transform filter invert-0 dark:invert group-hover:invert-[0.4] sepia-[1] saturate-[100] hue-rotate-[0deg] brightness-[1]" style={{ filter: "brightness(0) saturate(100%) invert(49%) sepia(87%) saturate(3065%) hue-rotate(18deg) brightness(101%) contrast(106%)" }} />
        </h2>
      </Link>
    </div>
  );
}