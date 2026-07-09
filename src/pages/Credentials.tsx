import { motion } from "framer-motion";
import { Link } from "wouter";
import { Seo } from "@/components/ui/Seo";
import { Instagram, Twitter, Linkedin, Dribbble } from "lucide-react";

export default function Credentials() {
  return (
    <>
      <Seo title="Credentials" />
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">

        <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 mb-20">

          {/* Left Profile Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 space-y-6"
          >
            <div className="bg-card p-6 rounded-[2rem] border border-border shadow-sm text-center sticky top-32">
              <div className="w-full aspect-square rounded-[1.5rem] overflow-hidden mb-8 border-4 border-background bg-muted">
                <img
                  src="https://muhammadaslaanportfolio.vercel.app/assets/profile-cDg9_8PP.jpg"
                  alt="Muhammad Aslaan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-display font-bold mb-2">Muhammad Aslaan</h2>
              <p className="text-muted-foreground mb-8">@aslaan</p>

              <div className="flex justify-center gap-3 mb-8">
                <a href="https://instagram.com/aslaan" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Instagram size={16} /></a>
                <a href="https://twitter.com/aslaan" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Twitter size={16} /></a>
                <a href="https://linkedin.com/in/aslaan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Linkedin size={16} /></a>
                <a href="https://dribbble.com/aslaan" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Dribbble size={16} /></a>
              </div>

              <Link href="/contact" className="block w-full py-4 rounded-full bg-foreground text-background font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                Let's Talk
              </Link>
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-12">

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2 className="text-3xl font-display font-bold uppercase mb-6">About Me</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  I'm a Technical Sales professional turned full-time creative freelancer with 7+ years of experience. I bridge the gap between design and technology, creating solutions that not only look amazing but also drive real business results.
                </p>
                <p>
                  My unique background in sales gives me deep insight into client needs and business objectives, while my technical skills in design and development allow me to deliver exceptional digital products. From UX/UI design to web development and Odoo ERP implementations, I bring a comprehensive approach to every project.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-display font-bold uppercase mb-6">Experience</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-1">Jan 2025 – Jan 2026 — Senior Sales</h3>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Shourbagy Oasis for Agricultural Investments</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Negotiated and completed deals with clients. Planned social media campaigns to increase brand visibility and drive sales.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">June 2024 – May 2025 — Senior Direct Sales</h3>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Carprogini Autoprotection</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Managed client relationships and negotiated deals. Developed sales strategies and exceeded targets consistently.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">April 2024 – Nov 2024 — Senior Sales & Graphic Designer</h3>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Abdo El Amir Auto Protection</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Negotiated deals and created marketing materials including brochure designs. Combined sales expertise with creative design skills.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">2022 – March 2024 — Technical Sales Representative, Web Developer & Implementor</h3>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Rabtek Integrated Solutions</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Negotiated Odoo ERP, website design & development, and SEO projects. Implemented Odoo modules and delivered complete web solutions for clients.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">2021 – 2022 — Senior Sales</h3>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">4 Gates Real Estate</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Managed client deals and planned social media campaigns. Designed and developed the company website to establish digital presence.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">2019 – 2021 — Team Leader</h3>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">QUE Real Estate</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Led sales team, negotiated deals, and planned marketing campaigns. Mentored team members to achieve targets.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">2016 – 2019 — Senior Sales & Team Leader</h3>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">El Tayeb Real Estate</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Started my professional journey in sales, developing the skills that now inform my user-centered design approach and client communication.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-display font-bold uppercase mb-6">Education</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-1">Multi-media Programming & Graphic Design</h3>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">International Academy for Engineering & Media Science (IAEMS)</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Developed foundational skills in multimedia programming and graphic design. GPA: 3.5
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Secondary Education</h3>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Nile Garden Language School</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Completed secondary education with focus on languages and sciences.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-display font-bold uppercase mb-6">Courses & Certifications</h2>
              <div className="flex flex-wrap gap-3">
                {['Python (Udemy)', 'Kali Linux (Codezilla)', 'HTML5 (W3Schools)', 'JavaScript (W3Schools)', 'Odoo ERP (Odoo.com)', 'Odoo 17 Implementation', 'Digital Photography'].map((cert) => (
                  <span key={cert} className="bg-background border border-border px-4 py-2 rounded-full text-sm font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-display font-bold uppercase mb-6">Testimonials</h2>
              <div className="space-y-6">
                <div className="bg-background border border-border rounded-2xl p-6">
                  <p className="text-muted-foreground italic mb-4">"Muhammad delivered an exceptional portfolio website that perfectly captures our brand. His attention to detail and creative approach exceeded our expectations. Highly recommended!"</p>
                  <p className="font-bold">Haytham Moawad</p>
                  <p className="text-sm text-primary">CEO, Tech Planet</p>
                </div>
                <div className="bg-background border border-border rounded-2xl p-6">
                  <p className="text-muted-foreground italic mb-4">"Muhammad's expertise in web design and development helped us establish a strong online presence. The website he created effectively showcases our IT solutions and services."</p>
                  <p className="font-bold">Rabea Hosny</p>
                  <p className="text-sm text-primary">CEO & Founder, Rabtek</p>
                </div>
                <div className="bg-background border border-border rounded-2xl p-6">
                  <p className="text-muted-foreground italic mb-4">"Incredible design work! Muhammad created a striking black neon aesthetic that makes our agency stand out. The branding and website perfectly represent our innovative approach."</p>
                  <p className="font-bold">Layla Mahmoud</p>
                  <p className="text-sm text-primary">Marketing Director, Poole Digital</p>
                </div>
                <div className="bg-background border border-border rounded-2xl p-6">
                  <p className="text-muted-foreground italic mb-4">"The UX/UI design for our home services app is fantastic. Muhammad understood our vision and created an intuitive, beautiful interface that our users love."</p>
                  <p className="font-bold">Nadia Fathy</p>
                  <p className="text-sm text-primary">Product Manager, Malmoum App</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}
