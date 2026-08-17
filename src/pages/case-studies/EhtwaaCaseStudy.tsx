import { motion } from "framer-motion";
import { useEffect } from "react";
import { NextProject } from "@/components/case-study/NextProject";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import type { Work } from "@/types/work";

interface EhtwaaCaseStudyProps {
  work: Work;
  nextWork: Work;
  gallery: string[];
}

export function EhtwaaCaseStudy({ work, nextWork, gallery }: EhtwaaCaseStudyProps) {
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
