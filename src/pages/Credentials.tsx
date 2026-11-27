import { motion } from "framer-motion";
import { Link } from "wouter";
import { Seo } from "@/components/ui/Seo";
import { Download, ArrowUpRight } from "lucide-react";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/data/site";
import { career } from "@/data/career";

export default function Credentials() {
  return (
    <>
      <Seo title="Who's Aslaan?" />
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">

        <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 mb-16 md:mb-20">

          {/* Left Profile Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 space-y-6"
          >
            <div className="bg-card p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-border shadow-sm text-center">
              <div className="w-full aspect-square rounded-xl md:rounded-[1.5rem] overflow-hidden mb-4 md:mb-6 border-4 border-background bg-muted">
                <img
                  src="/profile.webp"
                  alt="Muhammad Aslaan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-display font-bold mb-1">Muhammad Aslaan</h2>
              <p className="text-xs sm:text-sm font-medium text-foreground mb-1">Product Designer & Frontend Engineer</p>
              <p className="text-xs text-muted-foreground mb-6 md:mb-8 max-w-[200px] mx-auto">Building digital products from strategy to shipped code.</p>

              <SocialLinks size="sm" className="justify-center mb-6 md:mb-8" />

              <Link href="/contact" className="block w-full py-3 md:py-4 rounded-full bg-foreground text-background font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                Let's Talk
              </Link>

              <a
                href={site.cvUrl}
                download={`Muhammad-Aslaan-CV.pdf`}
                className="mt-3 flex items-center justify-center gap-2 w-full py-3 md:py-4 rounded-full border border-border text-foreground font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300"
                data-testid="download-cv"
              >
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>

              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                View LinkedIn profile
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8 md:gap-12">

            {/* About */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 text-primary">About</h2>
              <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-muted-foreground space-y-4">
                <p className="text-sm sm:text-base md:text-lg">
                  I didn't start in design. I started in business — watching how companies make decisions, how customers choose, and where value actually comes from.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  Those years taught me that good design isn't about aesthetics. It's about understanding what people need, what businesses can sustain, and how to communicate clearly with everyone involved.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  When I started designing and building products, that perspective stayed with me. I think about problems before pixels, about business goals alongside user needs, and about whether something can actually ship.
                </p>
              </div>
            </motion.div>

            {/* What I Bring to Product Teams */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 text-primary">What I Bring to Product Teams</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-card border border-border p-5 md:p-6 rounded-xl md:rounded-2xl">
                  <h3 className="text-base sm:text-lg font-display font-bold mb-2 text-primary">Business Thinking</h3>
                  <p className="text-sm text-muted-foreground">I understand stakeholder priorities, resource constraints, and how products need to serve business goals while solving user problems.</p>
                </div>
                <div className="bg-card border border-border p-5 md:p-6 rounded-xl md:rounded-2xl">
                  <h3 className="text-base sm:text-lg font-display font-bold mb-2 text-primary">Product Design</h3>
                  <p className="text-sm text-muted-foreground">I design systems that reduce friction, create consistency, and scale across features while maintaining quality.</p>
                </div>
                <div className="bg-card border border-border p-5 md:p-6 rounded-xl md:rounded-2xl">
                  <h3 className="text-base sm:text-lg font-display font-bold mb-2 text-primary">Frontend Engineering</h3>
                  <p className="text-sm text-muted-foreground">I build what I design in React and TypeScript, bridging the gap between prototype and production.</p>
                </div>
                <div className="bg-card border border-border p-5 md:p-6 rounded-xl md:rounded-2xl">
                  <h3 className="text-base sm:text-lg font-display font-bold mb-2 text-primary">Cross-functional Collaboration</h3>
                  <p className="text-sm text-muted-foreground">Years of client-facing work taught me to translate between technical, design, and business perspectives.</p>
                </div>
              </div>
            </motion.div>

            {/* Career Journey */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 text-primary">Career Journey</h2>

              {career.chapters.map((chapter) => (
                <div key={chapter.id} className="mb-8 md:mb-12 last:mb-0">
                  <h3 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-3 md:mb-4">{chapter.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-2xl">{chapter.intro}</p>
                  <div className="space-y-5 md:space-y-7">
                    {chapter.roles.map((role) => (
                      <div key={`${role.company}-${role.period}`}>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                          <h4 className="text-sm sm:text-base font-bold text-primary">
                            {role.company}
                            {role.current && (
                              <span className="ml-2 inline-flex items-center rounded-full border border-primary/40 bg-primary/15 px-2 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-wider text-primary">
                                Current
                              </span>
                            )}
                          </h4>
                          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">{role.period}</span>
                        </div>
                        <p className="text-xs text-foreground uppercase tracking-wider mb-2">{role.title}</p>
                        <p className="text-sm text-muted-foreground">{role.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Testimonials */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                <p className="text-sm text-muted-foreground mb-4 md:mb-6">Trusted by founders, business owners, and growing teams.</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 text-primary">Testimonials</h2>
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-background border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
                    <p className="text-muted-foreground italic mb-3 md:mb-4 text-sm sm:text-base">"Muhammad delivered our portfolio website that captures our brand. His attention to detail and creative approach met our expectations."</p>
                    <p className="font-bold text-sm sm:text-base">Haytham Moawad</p>
                    <p className="text-xs sm:text-sm text-primary">CEO, Tech Planet</p>
                  </div>
                  <div className="bg-background border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
                    <p className="text-muted-foreground italic mb-3 md:mb-4 text-sm sm:text-base">"Muhammad's expertise in web design and development helped us establish a strong online presence. The website he created effectively showcases our IT solutions."</p>
                    <p className="font-bold text-sm sm:text-base">Rabea Hosny</p>
                    <p className="text-xs sm:text-sm text-primary">CEO & Founder, Rabtek</p>
                  </div>
                  <div className="bg-background border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
                    <p className="text-muted-foreground italic mb-3 md:mb-4 text-sm sm:text-base">"Muhammad created a black neon aesthetic that makes our agency stand out. The branding and website represent our innovative approach."</p>
                    <p className="font-bold text-sm sm:text-base">Layla Mahmoud</p>
                    <p className="text-xs sm:text-sm text-primary">Marketing Director, Poole Digital</p>
                  </div>
                  <div className="bg-background border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
                    <p className="text-muted-foreground italic mb-3 md:mb-4 text-sm sm:text-base">"The UX/UI design for our home services app works well. Muhammad understood our vision and created an interface our users use."</p>
                    <p className="font-bold text-sm sm:text-base">Nadia Fathy</p>
                    <p className="text-xs sm:text-sm text-primary mb-2">Product Manager, Malmoum App</p>
                    <Link href="/projects/malmoum-v1" className="text-xs text-primary hover:underline">View Case Study →</Link>
                  </div>
                </div>
              </motion.div>

              {/* Reflection */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                  Looking back, every role taught me something different — from understanding customers and businesses to designing and building digital products. Today I bring those experiences together to create products that are grounded in business, shaped by users, and built with intention.
                </p>
              </motion.div>

              {/* Transition */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}>
                <p className="text-sm text-foreground max-w-2xl leading-relaxed mb-8">
                  Experience explains how I think. The work shows what I've built with that approach.
                </p>
              </motion.div>

              {/* Final CTA */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                <Link href="/projects" className="group inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-foreground hover:text-background transition-all duration-300">
                  <span>View Selected Case Studies</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            {/* Tool Stack */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 text-primary">Tool Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 text-primary">Product Design</h4>
                  <p className="text-sm">Figma<br />FigJam<br />Framer</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 text-primary">Frontend</h4>
                  <p className="text-sm">React<br />TypeScript<br />Tailwind CSS</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 text-primary">Development</h4>
                  <p className="text-sm">Next.js<br />Vite<br />Git</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 text-primary">Business</h4>
                  <p className="text-sm">Odoo ERP<br />SEO<br />Analytics</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 text-primary">AI Workflow</h4>
                  <p className="text-sm">Notion<br />Claude<br />GitHub Copilot</p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 text-primary">Education</h2>
              <div className="space-y-6 md:space-y-8">
                {career.education.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 md:mb-3">{item.school}</p>
                    {item.period && <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.period}</p>}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Continuous Learning */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 text-primary">Continuous Learning</h2>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Product design and frontend engineering skills were developed through self-directed learning, real client projects, and continuous practice. Most of what I ship today comes from building rather than studying.
              </p>
            </motion.div>

            {/* Selected Learning */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 text-primary">Selected Learning</h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['Product Design', 'UX Research', 'React', 'TypeScript', 'Odoo ERP', 'Digital Transformation', 'AI for Product Work'].map((item) => (
                  <span key={item} className="bg-background border border-border px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}
