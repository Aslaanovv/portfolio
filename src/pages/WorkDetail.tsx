import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { Seo } from "@/components/ui/Seo";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ImageWithLoading } from "@/components/ui/ImageWithLoading";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { NextProject } from "@/components/case-study/NextProject";
import { works, sharedGallery, laCamilleGallery, malmoumGallery, ehtwaaGallery } from "@/data/works";
import { useEffect } from "react";
import { RabtekCaseStudy } from "@/pages/works/RabtekCaseStudy";
import { ExternalLink } from "lucide-react";

export default function WorkDetail() {
  const [, params] = useRoute("/projects/:slug");
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
        <Link href="/projects" className="text-primary hover:underline">Back to Projects</Link>
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
  const isEhtwaa = currentSlug === "ehtwaa";

  let gallery;
  if (isMalmoum) gallery = malmoumGallery;
  else if (isLaCamille) gallery = laCamilleGallery;
  else if (isEhtwaa) gallery = ehtwaaGallery;
  else gallery = sharedGallery;

  return (
    <>
      <Seo title={`${work.title} | Projects`} description={work.description1} />

      {isMalmoum ? (
        <MalmoumV1CaseStudy work={work} nextWork={nextWork} gallery={gallery} />
      ) : isLaCamille ? (
        <LaCamilleCaseStudy work={work} nextWork={nextWork} gallery={gallery} dividerIcon={dividerIcon} lineIcon={lineIcon} />
      ) : isRabtek ? (
        <RabtekCaseStudy work={work} nextWork={nextWork} />
      ) : isEhtwaa ? (
        <EhtwaaCaseStudy work={work} nextWork={nextWork} gallery={gallery} />
      ) : (
        <StandardCaseStudy work={work} nextWork={nextWork} gallery={gallery} dividerIcon={dividerIcon} lineIcon={lineIcon} />
      )}

      <CtaBanner />
    </>
  );
}

// Ehtwaa Mental Health Case Study
function EhtwaaCaseStudy({ work, nextWork, gallery }: any) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="w-full bg-background">

      {/* ==================================== */}
      {/* HERO - Cinematic Full-Screen */}
      {/* ==================================== */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-pink/5" />

        {/* Floating decorative orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink/8 rounded-full blur-3xl"
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-12 text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs md:text-sm font-mono text-pink/80 mb-6 tracking-[0.3em] uppercase">
              2025 — Web Design & Development
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-tight mb-8 text-balance">
              <span className="text-foreground">Ehtwaa</span>
              <span className="block text-pink/70">Mental Health</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              A bilingual platform for therapy centers in Egypt — designed and developed from concept to deployment.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
              {[
                { label: "Languages", value: "2" },
                { label: "Services", value: "4+" },
                { label: "Team", value: "7" },
                { label: "Pages", value: "10+" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="text-center"
                >
                  <span className="block text-3xl md:text-4xl font-display font-bold text-pink">{stat.value}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* VIEW LIVE BUTTON */}
            {work.liveUrl && (
              <motion.a
                href={work.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="inline-flex items-center gap-3 bg-pink hover:bg-pink/90 text-pink-foreground font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-pink/20"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Project
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-pink/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-pink rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* ==================================== */}
      {/* HERO IMAGE SHOWCASE */}
      {/* ==================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full overflow-hidden border-y border-border"
      >
        <ImageWithFallback src={gallery[0]} alt="Ehtwaa Hero" className="w-full" aspectRatio="aspect-auto" loading="eager" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl py-24">

        {/* ==================================== */}
        {/* PROJECT SNAPSHOT - Minimal Cards */}
        {/* ==================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Role", value: "Designer + Developer" },
              { label: "Timeline", value: "2025" },
              { label: "Stack", value: "React + TypeScript" },
              { label: "Status", value: "Launched" }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/50 backdrop-blur border border-border/50 p-6 rounded-xl"
              >
                <span className="text-[10px] font-mono text-pink/70 uppercase tracking-widest block mb-2">{item.label}</span>
                <span className="font-display font-semibold text-base">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ==================================== */}
        {/* OVERVIEW - Large Typography */}
        {/* ==================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <p className="text-[10px] font-mono text-pink uppercase tracking-widest mb-6">
            01 — Overview
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
            A digital space for<br />
            <span className="text-pink/70">healing and support</span>
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed max-w-3xl">
            Ehtwaa (احتواء) means "embrace" in Arabic. I designed and built a complete bilingual website
            for this mental health therapy center, serving both Arabic and English speakers with seamless
            language switching and RTL support.
          </p>
        </motion.div>

        {/* ==================================== */}
        {/* CHALLENGE - Split Layout */}
        {/* ==================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-[10px] font-mono text-pink uppercase tracking-widest mb-6">
                02 — The Challenge
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Building for Two Languages</h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-muted-foreground text-xl leading-relaxed">
                Mental health services in Egypt needed a digital presence that could serve both Arabic and
                English speakers seamlessly. The challenge went beyond translation — it required proper
                RTL layout switching, culturally appropriate design, and accessible navigation.
              </p>
              <p className="text-muted-foreground text-xl leading-relaxed">
                I needed to create a calming, professional aesthetic while implementing complex bilingual
                functionality including contact forms, booking integration, and comprehensive service information.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ==================================== */}
        {/* SERVICES SHOWCASE - Full Image */}
        {/* ==================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="mb-8">
            <p className="text-[10px] font-mono text-pink uppercase tracking-widest mb-6">
              03 — Services
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Four Core Categories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Adult therapy, child services, assessments, and workshops — each with dedicated pages.
            </p>
          </div>

          <div className="w-full rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl">
            <ImageWithFallback src={gallery[1]} alt="Services" className="w-full" aspectRatio="aspect-auto" />
          </div>
        </motion.div>

        {/* ==================================== */}
        {/* LANGUAGE SYSTEM - Numbered Feature */}
        {/* ==================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-6xl md:text-8xl font-display font-bold text-pink/20">01</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold mt-4 mb-6">Seamless Bilingual System</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A custom context-based system managing all translations with smooth switching.
              </p>
              <ul className="space-y-3">
                {[
                  "Automatic browser language detection",
                  "Full RTL layout support for Arabic",
                  "LocalStorage persistence",
                  "JSON-based content structure"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-pink rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] overflow-hidden border border-border/50">
              <ImageWithFallback src={gallery[2]} alt="Language Switch" className="w-full" aspectRatio="aspect-auto" />
            </div>
          </div>
        </motion.div>

        {/* ==================================== */}
        {/* TEAM SECTION - Numbered Feature */}
        {/* ==================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-[2rem] overflow-hidden border border-border/50">
              <ImageWithFallback src={gallery[3]} alt="Team" className="w-full" aspectRatio="aspect-auto" />
            </div>

            <div className="order-1 md:order-2">
              <span className="text-6xl md:text-8xl font-display font-bold text-pink/20">02</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold mt-4 mb-6">Expert Team Showcase</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Seven therapists with detailed profiles, qualifications, and specializations.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Each team member has comprehensive credentials including degrees, certifications,
                and areas of expertise — building trust with potential clients.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ==================================== */}
        {/* CONTACT & BOOKING - Numbered Feature */}
        {/* ==================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-6xl md:text-8xl font-display font-bold text-pink/20">03</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold mt-4 mb-6">Multiple Pathways to Connect</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                EmailJS contact forms, WhatsApp widget, and Calendly integration for booking.
              </p>
              <div className="space-y-4">
                {[
                  { name: "EmailJS", desc: "Validated contact forms" },
                  { name: "WhatsApp", desc: "Instant chat support" },
                  { name: "Calendly", desc: "Online appointment scheduling" }
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-pink/10 flex items-center justify-center">
                      <span className="text-pink text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden border border-border/50">
              <ImageWithFallback src={gallery[4]} alt="Contact Form" className="w-full" aspectRatio="aspect-auto" />
            </div>
          </div>
        </motion.div>

        {/* ==================================== */}
        {/* TECH STACK - Grid Layout */}
        {/* ==================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <p className="text-[10px] font-mono text-pink uppercase tracking-widest mb-6">
              04 — Technical Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Built with Modern Stack</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Type-safe, performant, and production-ready.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "React 18", icon: "⚛️" },
              { name: "TypeScript", icon: "📘" },
              { name: "Tailwind CSS", icon: "🎨" },
              { name: "Framer Motion", icon: "🎭" },
              { name: "React Router", icon: "🧭" },
              { name: "React Hook Form", icon: "📝" },
              { name: "Zod", icon: "✅" },
              { name: "EmailJS", icon: "📧" },
              { name: "Vite", icon: "⚡" }
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card/50 border border-border/50 rounded-xl p-4 text-center hover:border-pink/30 transition-colors"
              >
                <span className="text-2xl mb-2 block">{tech.icon}</span>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ==================================== */}
        {/* RESPONSIVE - Full Image */}
        {/* ==================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-8">
            <p className="text-[10px] font-mono text-pink uppercase tracking-widest mb-6">
              05 — Responsive
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Every Screen, Every Device</h2>
          </div>

          <div className="w-full rounded-[2rem] overflow-hidden border border-border/50">
            <ImageWithFallback src={gallery[5]} alt="Responsive Design" className="w-full" aspectRatio="aspect-auto" />
          </div>
        </motion.div>

        {/* ==================================== */}
        {/* REFLECTION - Card */}
        {/* ==================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-card to-pink/5 border border-pink/10 p-8 md:p-16 rounded-[2rem] mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Reflection</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-xs">✓</span>
                What Worked
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The custom language context system made managing bilingual content straightforward.
                TypeScript caught numerous bugs during development.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-xs">→</span>
                What I Learned
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building for RTL requires careful attention. Testing with Arabic speakers revealed
                UX improvements. Mental health sites need particular accessibility care.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 text-xs">↑</span>
                What I'd Improve
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Add granular analytics tracking across languages. Multi-step contact form validation.
                SSR with Next.js for better SEO and performance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* NEXT PROJECT */}
        <NextProject
          slug={nextWork.slug}
          title={nextWork.title}
          image={nextWork.image}
        />

      </div>
    </div>
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
          {work.title}
        </h1>
        <img src={dividerIcon} alt="" className="h-6 mx-auto" />
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="w-full rounded-[2rem] overflow-hidden mb-16 shadow-lg border border-border"
      >
        <ImageWithLoading
          src={work.image}
          alt={work.title}
          className="w-full"
          aspectRatio="aspect-[16/9]"
          loading="eager"
        />
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
            <ImageWithLoading
              src={img}
              alt={`${work.title} gallery image ${idx + 1}`}
              className="hover:scale-105 transition-transform duration-700"
            />
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
        <ImageWithLoading
          src={work.image}
          alt={work.title}
          className="w-full"
          aspectRatio="aspect-[16/9]"
        />
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

      {/* HERO - Cinematic full-screen with video */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">

        {/* Hero Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          poster="/projects/la-camille/thumbnail.webp"
        >
          <source src="/la-camille-hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 flex flex-col items-center justify-center px-4 text-center"
        >
          <p className="text-sm md:text-base font-mono text-amber mb-6 tracking-widest uppercase">
            2026
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-tight mb-8 text-balance text-foreground">
            La Camille
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Premium Shopify experience for a luxury lingerie brand.
          </p>

          {/* VIEW LIVE BUTTON */}
          {work.liveUrl && (
            <motion.a
              href={work.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-full transition-colors mt-8"
            >
              <ExternalLink className="w-4 h-4" />
              View Live Project
            </motion.a>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-border/50 to-transparent mx-auto mb-4" />
          <p className="text-[10px] font-mono text-amber uppercase tracking-widest text-center">
            Scroll
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

        {/* SECTION 01: PROJECT SNAPSHOT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-amber uppercase tracking-widest">
            Project Snapshot
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight">
            La Camille
          </h2>
          <p className="text-lg md:text-xl text-amber/80 mt-3">
            Luxury E-commerce on Shopify
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground/80 max-w-3xl leading-relaxed mb-16 md:mb-24"
        >
          A premium e-commerce experience for La Camille, combining Shopify's power with bespoke design. Every touchpoint crafted to showcase products beautifully and convert visitors into customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs font-mono text-amber/70 uppercase tracking-wider mb-8">
            Executive Summary
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mb-16">
            {[
              { label: "Client", value: "La Camille" },
              { label: "Industry", value: "Fashion & E-commerce" },
              { label: "Project Type", value: "Shopify Store Design & Development" },
              { label: "Timeline", value: "2 Months" },
              { label: "Platform", value: "Shopify (Dawn Theme)" },
              { label: "Role", value: "UX/UI Designer • Frontend Developer • Liquid" },
              { label: "Deliverables", value: "Theme Customization • Responsive Design • Custom Templates" },
              { label: "Outcome", value: "Launched Premium E-commerce Store" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.05) }}
                className="flex justify-start items-baseline py-3 border-b border-border/10"
              >
                <span className="text-[10px] font-mono text-amber uppercase tracking-wider w-32 flex-shrink-0">
                  {item.label}
                </span>
                <span className="text-sm text-amber flex-1">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Subtle section divider */}
      <div className="w-full h-px bg-border/10 max-w-[1000px] mx-auto" />

      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

        {/* SECTION 02: INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-amber uppercase tracking-widest">
            Introduction
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight max-w-3xl">
            Building Digital Luxury
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 mb-16 md:mb-24"
        >
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-3xl leading-relaxed">
            La Camille is a luxury lingerie brand that needed an online presence matching their premium positioning. The challenge was translating the intimate, high-end in-store experience to a digital screen while maintaining the boutique's exclusive feel.
          </p>
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-3xl leading-relaxed">
            I designed and built their Shopify store from the ground up, focusing on creating an elegant shopping experience that feels intimate and sophisticated while ensuring seamless functionality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-[10px] font-mono text-amber uppercase tracking-wider mb-10">
            Supporting Facts
          </p>

          <div className="space-y-0">
            {[
              { label: "Business Focus", value: "Luxury Fashion & Lingerie" },
              { label: "Platform", value: "Shopify Ecosystem" },
              { label: "Project Goal", value: "Create a premium digital shopping experience matching boutique quality." }
            ].map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.08) }}
                className="py-5 border-b border-border/10 last:border-0"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6">
                  <span className="text-[10px] font-mono text-amber uppercase tracking-wider w-40 flex-shrink-0">
                    {fact.label}
                  </span>
                  <span className="text-sm text-amber/90">
                    {fact.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* SECTION 03: HOMEPAGE EXPERIENCE */}
      <div className="w-full bg-muted/20">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-32">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-[10px] font-mono text-amber uppercase tracking-widest">
              Homepage Experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 md:mb-20 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-amber leading-tight tracking-tight">
              Setting the Tone
            </h2>
            <p className="text-base md:text-lg text-muted-foreground/60 mt-6 max-w-2xl mx-auto">
              The homepage sets the tone immediately. Large imagery, generous whitespace, and minimal navigation create that luxury feeling from the first scroll.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border"
          >
            <img src={gallery[0]} alt="Homepage showcase" className="w-full h-auto" />
          </motion.div>

        </div>
      </div>

      {/* SECTION 04: COLLECTION EXPERIENCE */}
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-amber uppercase tracking-widest">
            Collection Experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight max-w-3xl">
            Browsing Like a Lookbook
          </h2>
          <p className="text-base md:text-lg text-muted-foreground/60 mt-6 max-w-2xl">
            Browsing collections should feel like flipping through a lookbook, not scanning a spreadsheet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center"
        >
          <div className="md:col-span-5 order-2 md:order-1">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I used larger product cards with more whitespace to let the photography breathe. Filters are tucked away until needed. The focus remains on the products themselves, with category navigation that feels natural rather than mechanical.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every design choice reinforces the luxury feeling while making the shopping process effortless.
            </p>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border">
              <img src={gallery[1]} alt="Collection page showcase" className="w-full h-auto" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* SECTION 05: PRODUCT EXPERIENCE */}
      <div className="w-full bg-muted/20">
        <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-[10px] font-mono text-amber uppercase tracking-widest">
              Product Experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight max-w-3xl">
              Where Decisions Happen
            </h2>
            <p className="text-base md:text-lg text-muted-foreground/60 mt-6 max-w-2xl">
              The product page is where the purchase decision happens. Three elements mattered most.
            </p>
          </motion.div>

          {/* Three key elements */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto mb-16">
            {[
              { number: "01", title: "Product Gallery", desc: "Large, zoomable images with multiple angles" },
              { number: "02", title: "Information", desc: "Concise details without overwhelming" },
              { number: "03", title: "Purchase Flow", desc: "Clear CTA, minimal friction" }
            ].map((element) => (
              <motion.div
                key={element.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: parseInt(element.number) * 0.1 }}
                className="text-center"
              >
                <span className="text-4xl md:text-5xl font-display font-bold text-amber/80 mb-3 block">
                  {element.number}
                </span>
                <p className="text-lg font-semibold text-foreground mb-2">{element.title}</p>
                <p className="text-sm text-muted-foreground">{element.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border"
          >
            <img src={gallery[2]} alt="Product page showcase" className="w-full h-auto" />
          </motion.div>

        </div>
      </div>

      {/* SECTION 06: RESPONSIVE EXPERIENCE */}
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-amber uppercase tracking-widest">
            Responsive Experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-amber leading-tight tracking-tight">
            Premium on Every Screen
          </h2>
          <p className="text-base md:text-lg text-muted-foreground/60 mt-6 max-w-2xl mx-auto">
            Most luxury fashion browsing happens on mobile. The experience had to feel just as premium on a phone as on desktop — same elegance, same ease, different proportions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border"
        >
          <img src={gallery[3]} alt="Responsive design showcase" className="w-full h-auto" />
        </motion.div>

      </div>

      {/* SECTION 07: BUILDING WITH SHOPIFY */}
      <div className="w-full bg-muted/30">
        <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-[10px] font-mono text-amber uppercase tracking-widest">
              Building with Shopify
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight max-w-3xl">
              Custom Within Constraints
            </h2>
            <p className="text-base md:text-lg text-muted-foreground/60 mt-6 max-w-2xl">
              Building on Shopify's Dawn theme while creating a unique brand experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center"
          >
            <div className="md:col-span-5">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I started with Dawn, Shopify's free theme, as the foundation — well-structured, performant, and regularly updated. The customization happened in the templates.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I modified the Liquid files to create unique layouts for the homepage, collection, and product pages while keeping the core functionality intact.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                CSS handled the visual layer — custom fonts, refined spacing, and the color system that matches La Camille's brand identity.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border bg-background">
                <img src={gallery[4]} alt="Shopify development" className="w-full h-auto" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* SECTION 08: REFLECTION */}
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-amber uppercase tracking-widest">
            Reflection
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card border border-border p-8 md:p-16 lg:p-24 rounded-[2rem] md:rounded-[3rem]"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 md:mb-16">
            What I Learned
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-[10px] font-mono text-amber uppercase tracking-widest mb-4">
                What Worked
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Starting with a proven theme saved weeks of development. Dawn provided solid foundations — responsive grids, cart functionality, performance optimizations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-[10px] font-mono text-amber uppercase tracking-widest mb-4">
                Core Lesson
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Luxury e-commerce is about restraint as much as presentation. Every element earns its place. I learned to say no to features that didn't serve the shopping experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-[10px] font-mono text-amber uppercase tracking-widest mb-4">
                Future Focus
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Enhanced mobile gallery with pinch-to-zoom, smoother image transitions, and more sophisticated product filtering without adding complexity.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* SECTION 09: NEXT PROJECT */}
      <NextProjectLink nextWork={nextWork} />

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

          {/* VIEW LIVE BUTTON - Malmoum doesn't have a live URL yet, so this is hidden */}
          {work.liveUrl && (
            <motion.a
              href={work.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-full transition-colors mt-8"
            >
              <ExternalLink className="w-4 h-4" />
              View Live Project
            </motion.a>
          )}
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
              <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-6">
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
                <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-2">Meaning</p>
                <p className="text-lg md:text-xl font-display font-semibold">Bringing it all together</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-2">Approach</p>
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
              <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-4">
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
            <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-4">
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
                <span className="text-4xl md:text-5xl font-display font-bold text-purple/80 mb-3 block">
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
              <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-6">
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
            <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-4">
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
            <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-4">
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
              <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-6">
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
            <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-4">
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
              <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-2">Typography</p>
              <p className="text-sm md:text-base font-display font-semibold">Clear hierarchy</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-2">Colors</p>
              <p className="text-sm md:text-base font-display font-semibold">Warm palette</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-2">Components</p>
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
                <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-6">
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
              <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-6">
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
                <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-4">
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
                <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-4">
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
                <p className="text-[10px] font-mono text-purple uppercase tracking-widest mb-4">
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
      <Link href={`/projects/${nextWork.slug}`} className="block group">
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