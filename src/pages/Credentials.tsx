import { motion } from "framer-motion";
import { Link } from "wouter";
import { Seo } from "@/components/ui/Seo";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Credentials() {
  return (
    <>
      <Seo title="Credentials" />
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
                  src="https://muhammadaslaanportfolio.vercel.app/assets/profile-cDg9_8PP.jpg"
                  alt="Muhammad Aslaan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-display font-bold mb-1">Muhammad Aslaan</h2>
              <p className="text-xs sm:text-sm font-medium text-foreground mb-1">Product Designer & Frontend Engineer</p>
              <p className="text-xs text-muted-foreground mb-6 md:mb-8 max-w-[200px] mx-auto">Building digital products from strategy to shipped code.</p>

              <div className="flex justify-center gap-3 mb-6 md:mb-8">
                <a href="https://instagram.com/aslaan" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Instagram size={16} /></a>
                <a href="https://twitter.com/aslaan" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Twitter size={16} /></a>
                <a href="https://linkedin.com/in/aslaan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Linkedin size={16} /></a>
                <a href="https://github.com/aslaan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Github size={16} /></a>
              </div>

              <Link href="/contact" className="block w-full py-3 md:py-4 rounded-full bg-foreground text-background font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                Let's Talk
              </Link>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8 md:gap-12">

            {/* About */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 text-primary">About</h2>
              <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p className="text-sm sm:text-base md:text-lg">
                  My background in sales taught me how to understand users, business goals, and decision-making before moving into product design and frontend engineering.
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  I enjoy solving complex product problems and turning ideas into products people use.
                </p>
              </div>
            </motion.div>

            {/* How I Work */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 text-primary">How I Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-card border border-border p-5 md:p-6 rounded-xl md:rounded-2xl">
                  <h3 className="text-lg font-display font-bold mb-2 text-primary">Product Thinking</h3>
                  <p className="text-sm text-muted-foreground">I start with the problem before proposing solutions.</p>
                </div>
                <div className="bg-card border border-border p-5 md:p-6 rounded-xl md:rounded-2xl">
                  <h3 className="text-lg font-display font-bold mb-2 text-primary">Design</h3>
                  <p className="text-sm text-muted-foreground">Every interface should reduce friction and support business goals.</p>
                </div>
                <div className="bg-card border border-border p-5 md:p-6 rounded-xl md:rounded-2xl">
                  <h3 className="text-lg font-display font-bold mb-2 text-primary">Build</h3>
                  <p className="text-sm text-muted-foreground">Ideas become valuable only when they are shipped.</p>
                </div>
              </div>
            </motion.div>

            {/* Tool Stack */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 text-primary">Tool Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 text-primary">Design</h4>
                  <p className="text-sm">Figma<br />FigJam<br />Framer</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 text-primary">Development</h4>
                  <p className="text-sm">React<br />Next.js<br />TypeScript</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 text-primary">Business</h4>
                  <p className="text-sm">Odoo<br />SEO<br />Analytics</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 text-primary">Research</h4>
                  <p className="text-sm">Notion<br />AI<br />GitHub</p>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 text-primary">Experience</h2>

              {/* Phase 1 */}
              <div className="mb-8 md:mb-12">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4 md:mb-6">Phase 1: Business & Sales Foundation</h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-2xl">These years developed communication, negotiation, business thinking, and customer understanding.</p>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold mb-1">April 2024 – Nov 2024 — Abdo El Amir Auto Protection</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Senior Sales & Graphic Designer</p>
                    <p className="text-sm text-muted-foreground">Combined sales expertise with creative design skills.</p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold mb-1">2019 – 2021 — QUE Real Estate</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Team Leader</p>
                    <p className="text-sm text-muted-foreground">Led sales team and developed skills that inform my user-centered design approach.</p>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4 md:mb-6">Phase 2: <span className="text-primary">Design & Product</span></h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-2xl">Transitioned into product design and frontend engineering, focusing on UX, web development, and digital products.</p>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold mb-1">2022 – March 2024 — Rabtek Integrated Solutions</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Technical Sales, Web Developer & Odoo Implementor</p>
                    <p className="text-sm text-muted-foreground">Negotiated and delivered web development, Odoo ERP, and SEO projects for clients.</p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold mb-1">2021 – 2022 — 4 Gates Real Estate</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Senior Sales</p>
                    <p className="text-sm text-muted-foreground">Designed and developed the company website to establish digital presence.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 text-primary">Education</h2>
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">Multi-media Programming & Graphic Design</h3>
                  <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 md:mb-3">International Academy for Engineering & Media Science (IAEMS)</p>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Developed foundational skills in multimedia programming and graphic design.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Continuous Learning */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 text-primary">Continuous Learning</h2>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Most frontend and product design skills were developed through self-learning, real client work, and continuous practice.
              </p>
            </motion.div>

            {/* Selected Learning */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 md:mb-6 text-primary">Selected Learning</h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['Product Design', 'Frontend Engineering', 'Odoo ERP', 'Python', 'UX', 'React', 'TypeScript'].map((item) => (
                  <span key={item} className="bg-background border border-border px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
                  <Link href="/works/malmoum-v1" className="text-xs text-primary hover:underline">View Case Study →</Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}
