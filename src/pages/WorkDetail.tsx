import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { Seo } from "@/components/ui/Seo";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { works, sharedGallery, laCamilleGallery, malmoumGallery } from "@/data/works";
import { useEffect } from "react";
import { RabtekCaseStudy } from "@/pages/works/RabtekCaseStudy";

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

  // Special case studies
  const isMalmoum = currentSlug === "malmoum-v1";
  const isLaCamille = currentSlug === "la-camille";
  const isRabtek = currentSlug === "rabtek-website";

  let gallery;
  if (isMalmoum) gallery = malmoumGallery;
  else if (isLaCamille) gallery = laCamilleGallery;
  else gallery = sharedGallery;

  return (
    <>
      <Seo title={`${work.title} | Works`} description={work.description1} />

      {isMalmoum ? (
        <MalmoumV1CaseStudy work={work} nextWork={nextWork} gallery={gallery} />
      ) : isLaCamille ? (
        <LaCamilleCaseStudy work={work} nextWork={nextWork} gallery={gallery} dividerIcon={dividerIcon} lineIcon={lineIcon} />
      ) : isRabtek ? (
        <RabtekCaseStudy work={work} nextWork={nextWork} />
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

// Malmoum V1 Case Study - Independent Product
function MalmoumV1CaseStudy({ work, nextWork, gallery }: any) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="w-full">

      {/* SECTION 01: HERO - Full-bleed video with overlay */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Hero Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/projects/malmoum/thumbnail.png"
        >
          <source src="/projects/malmoum/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

        {/* Hero Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center"
        >
          <p className="text-sm md:text-base font-semibold uppercase tracking-widest mb-6 text-muted-foreground">
            Product Design • UX/UI • Frontend Development
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-tight mb-8 text-balance text-foreground">
            Malmoum V1
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Building a smarter home services marketplace for Egypt.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Product Mockup Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full bg-background py-20 md:py-32"
      >
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border shadow-lg">
            <img src={gallery[0]} alt="Malmoum Product Experience" className="w-full h-auto" />
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl py-24">

        {/* SECTION 02: THE PROBLEM - Split layout (image left, text right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-32 md:mb-40"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Image Left - 66% */}
            <div className="md:col-span-8 order-1">
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border">
                <img src={gallery[1]} alt="Finding trusted technicians is difficult" className="w-full h-auto" />
              </div>
            </div>

            {/* Text Right - 33% */}
            <div className="md:col-span-4 order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                The Problem
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
                Why is finding a plumber still so difficult in 2024?
              </h2>
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Homeowners struggle to find trustworthy technicians. Pricing lacks transparency. Communication is fragmented.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The experience depends entirely on personal recommendations.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I wanted to solve this by bringing <strong className="text-foreground">trust</strong>, <strong className="text-foreground">transparency</strong>, and <strong className="text-foreground">communication</strong> to home services.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 03: BRAND STORY - Full-width cinematic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-32 md:mb-40"
        >
          <div className="w-full">
            <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border">
              <img src={gallery[2]} alt="Malmoum Brand Identity" className="w-full h-auto" />
            </div>
            <div className="flex justify-center gap-12 md:gap-20 mt-12 text-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Meaning</p>
                <p className="text-lg md:text-xl font-display font-semibold">Bringing it all together</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Approach</p>
                <p className="text-lg md:text-xl font-display font-semibold">One ecosystem</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 04: ECOSYSTEM - Full-width diagram hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-32 md:mb-40"
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              The Ecosystem
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              All connected. One platform.
            </h2>
          </div>

          <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border">
            <img src={gallery[3]} alt="Malmoum Ecosystem - Connecting homeowners, technicians, and stores" className="w-full h-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
            <div>
              <p className="text-foreground font-semibold mb-1">Homeowners</p>
              <p className="text-sm text-muted-foreground">Find services</p>
            </div>
            <div>
              <p className="text-foreground font-semibold mb-1">Technicians</p>
              <p className="text-sm text-muted-foreground">Grow business</p>
            </div>
            <div>
              <p className="text-foreground font-semibold mb-1">Hardware Stores</p>
              <p className="text-sm text-muted-foreground">Sell materials</p>
            </div>
            <div>
              <p className="text-foreground font-semibold mb-1">Delivery</p>
              <p className="text-sm text-muted-foreground">Complete workflow</p>
            </div>
          </div>
        </motion.div>

        {/* SECTION 05: HOW IT WORKS - Full-width journey + 3 steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-32 md:mb-40"
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Three steps to a repaired home
            </h2>
          </div>

          {/* Full-width user journey image */}
          <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border mb-12">
            <img src={gallery[4]} alt="User journey from discovery to completed service" className="w-full h-auto" />
          </div>

          {/* Three core steps */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto">
            {[
              { number: "01", title: "Find", desc: "See nearby technicians on the map" },
              { number: "02", title: "Diagnose", desc: "Video call before booking" },
              { number: "03", title: "Book", desc: "Schedule with confidence" }
            ].map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: parseInt(step.number) * 0.1 }}
                className="text-center"
              >
                <span className="text-4xl md:text-5xl font-display font-bold text-primary/80 mb-3 block">
                  {step.number}
                </span>
                <p className="text-lg font-semibold text-foreground mb-2">{step.title}</p>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 06: INTERACTIVE MAP - Split layout (image 60%, text 40%) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-32 md:mb-40"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Image Left - 60% */}
            <div className="md:col-span-7 order-1">
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border">
                <img src={gallery[5]} alt="Interactive map showing nearby technicians" className="w-full h-auto" />
              </div>
            </div>

            {/* Text Right - 40% */}
            <div className="md:col-span-5 order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                Interactive Map
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
                See who's nearby
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Uber-inspired interface showing available technicians in real-time. No more calling multiple providers — just open the map and choose.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Location-based discovery with instant availability.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SECTION 07: REMOTE DIAGNOSIS - Full-width special treatment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-32 md:mb-40"
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Key Differentiator
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Video diagnosis before booking
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Share the problem. Get an estimate. Book with confidence.
            </p>
          </div>

          <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border">
            <img src={gallery[6]} alt="Chat and video diagnosis feature" className="w-full h-auto" />
          </div>
        </motion.div>

        {/* SECTION 08: MARKETPLACE - Single image layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-32 md:mb-40"
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Integrated Marketplace
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Materials delivered. Repairs completed.
            </h2>
          </div>

          {/* Single Full-Width Image */}
          <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border">
            <img src={gallery[7]} alt="Marketplace connecting homeowners with hardware stores" className="w-full h-auto" />
          </div>

          <p className="text-center text-lg text-muted-foreground mt-8 max-w-xl mx-auto">
            Connects homeowners with nearby hardware stores. Integrated delivery completes the workflow.
          </p>
        </motion.div>

        {/* SECTION 09: CORE EXPERIENCE - Split layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-32 md:mb-40"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Text Left - 40% */}
            <div className="md:col-span-5 order-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                Core Experience
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
                Fast decisions. Simple navigation.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The design philosophy centers on minimal friction — every tap moves the user forward.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Clear visual hierarchy. Intuitive information architecture. Seamless interaction patterns.
              </p>
            </div>

            {/* Image Right - 60% */}
            <div className="md:col-span-7 order-2">
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border">
                <img src={gallery[8]} alt="Core app screens showing navigation and categories" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 10: DESIGN SYSTEM - Full-width board */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-32 md:mb-40"
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Design System
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Consistency across the ecosystem
            </h2>
          </div>

          <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border">
            <img src={gallery[9]} alt="Design system board showing typography, colors, and components" className="w-full h-auto" />
          </div>

          <div className="flex justify-center gap-12 md:gap-20 mt-12 text-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Typography</p>
              <p className="text-sm md:text-base font-display font-semibold">Clear hierarchy</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Colors</p>
              <p className="text-sm md:text-base font-display font-semibold">Warm palette</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Components</p>
              <p className="text-sm md:text-base font-display font-semibold">Reusable library</p>
            </div>
          </div>
        </motion.div>

        {/* SECTION 11: BUILDING V1 - Split layout with light background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-32 md:mb-40 bg-muted/30 py-16 md:py-24 -mx-4 md:-mx-8 px-4 md:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Text Left - 40% */}
              <div className="md:col-span-5 order-1">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                  Frontend Development
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
                  Built with React + Vite
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  MVP developed to validate the core concept. Component library created in Figma then translated to code.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Fast iteration. Clean architecture. Production-ready foundation.
                </p>
              </div>

              {/* Image Right - 60% */}
              <div className="md:col-span-7 order-2">
                <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border bg-background">
                  <img src={gallery[10]} alt="Development screenshot showing React and code structure" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 12: AI VISION - Split layout (light theme) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-32 md:mb-40"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Image Left - 60% */}
            <div className="md:col-span-7 order-1">
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border">
                <img src={gallery[11]} alt="AI concept illustration showing smart diagnosis and matching" className="w-full h-auto" />
              </div>
            </div>

            {/* Text Right - 40% */}
            <div className="md:col-span-5 order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
                Coming in V2
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
                AI-assisted home services
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Smart problem identification. Optimal technician matching. Dynamic pricing estimation.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The next evolution of Malmoum brings intelligence to every step of the service journey.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SECTION 13: REFLECTION - Card with 3-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-32 md:mb-40"
        >
          <div className="bg-card border border-border p-8 md:p-16 lg:p-24 rounded-[2rem] md:rounded-[3rem]">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 md:mb-16">
              Reflection
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  What I Learned
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ecosystem design is about cohesion, not features. Making marketplace, messaging, and booking feel like one product was the biggest challenge.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Core Principle
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Trust drove every decision — from video diagnosis to verified profiles. The product exists to solve the confidence problem.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  V2 Focus
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Deeper marketplace integration. Smarter AI matching. Enhanced hardware store partnerships.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* SECTION 14: NEXT PROJECT */}
        <NextProjectLink nextWork={nextWork} />

      </div>
    </div>
  );
}

// Reusable next project link
function NextProjectLink({ nextWork }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mb-24 md:mb-32"
    >
      <Link href={`/works/${nextWork.slug}`} className="block group">
        <div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary">
          {/* Project Thumbnail */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img
              src={nextWork.image}
              alt={nextWork.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-base font-semibold uppercase tracking-widest text-white/90 mb-4 backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full"
            >
              Next Project
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 drop-shadow-lg"
            >
              {nextWork.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-white/80 mb-6 max-w-2xl drop-shadow"
            >
              {nextWork.category}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 text-white group-hover:gap-6 transition-all duration-300"
            >
              <span className="text-sm font-semibold uppercase tracking-wider">View Project</span>
              <div className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                <img
                  src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg"
                  alt="View"
                  className="w-5 h-5 transition-transform group-hover:translate-x-1 filter brightness-0 invert"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}