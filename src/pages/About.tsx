import { motion } from "framer-motion";
import { Link } from "wouter";
import { Seo } from "@/components/ui/Seo";

export default function About() {
  return (
    <>
      <Seo title="About" />
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">

        <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 mb-16 md:mb-20">
          {/* Big portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 bg-card rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 border border-border shadow-sm flex items-center justify-center relative overflow-hidden"
          >
            <img
              src="https://muhammadaslaanportfolio.vercel.app/assets/profile-cDg9_8PP.jpg"
              alt="Muhammad Aslaan"
              className="w-full h-auto max-h-[400px] object-cover rounded-xl md:rounded-2xl relative z-10 hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Self summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/3 bg-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 lg:p-12 border border-border shadow-sm flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <img src="https://framerusercontent.com/images/LWhMQrXMaimdeTept19k0hVARY.svg" alt="*" className="w-6 h-6 md:w-8 md:h-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-foreground">Self-summary</h2>
              <img src="https://framerusercontent.com/images/LWhMQrXMaimdeTept19k0hVARY.svg" alt="*" className="w-6 h-6 md:w-8 md:h-8" />
            </div>

            <div className="bg-background rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 border border-border">
              <img src="https://framerusercontent.com/images/rTKxaj3MefuNs8YZuhW8LNHiVPM.svg" alt="" className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-6" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
                Muhammad Aslaan
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                I'm a Product Designer & Full-Stack Developer with 7+ years of experience. I bridge the gap between design and technology, creating solutions that not only look amazing but also drive real business results. From Technical Sales to Creative Freelancing — I bring a unique perspective to every project.
              </p>
            </div>
          </motion.div>
        </div>

        {/* EXPERIENCE & EDUCATION TIMELINES */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-card p-6 md:p-8 lg:p-12 rounded-[1.5rem] md:rounded-[2rem] border border-border shadow-sm"
          >
            <h3 className="text-xl md:text-2xl font-display font-bold mb-6 md:mb-8 uppercase tracking-widest">Key Experience</h3>
            <div className="flex flex-col gap-5 md:gap-8">
              <div className="relative pl-5 md:pl-6 before:absolute before:left-0 before:top-1.5 md:before:top-2 before:w-1.5 md:before:w-2 before:h-1.5 md:before:h-2 before:bg-primary before:rounded-full before:ring-3 md:before:ring-4 before:ring-primary/20">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-muted-foreground mb-1.5 md:mb-2 block">2022 – 2024</span>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1">Technical Sales & Web Developer</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Rabtek Integrated Solutions</p>
              </div>
              <div className="relative pl-5 md:pl-6 before:absolute before:left-0 before:top-1.5 md:before:top-2 before:w-1.5 md:before:w-2 before:h-1.5 md:before:h-2 before:bg-primary before:rounded-full before:ring-3 md:before:ring-4 before:ring-primary/20">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-muted-foreground mb-1.5 md:mb-2 block">2021 – 2022</span>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1">Senior Sales & Web Designer</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">4 Gates Real Estate</p>
              </div>
              <div className="relative pl-5 md:pl-6 before:absolute before:left-0 before:top-1.5 md:before:top-2 before:w-1.5 md:before:w-2 before:h-1.5 md:before:h-2 before:bg-primary before:rounded-full before:ring-3 md:before:ring-4 before:ring-primary/20">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-muted-foreground mb-1.5 md:mb-2 block">2019 – 2021</span>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1">Team Leader</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">QUE Real Estate</p>
              </div>
              <div className="relative pl-5 md:pl-6 before:absolute before:left-0 before:top-1.5 md:before:top-2 before:w-1.5 md:before:w-2 before:h-1.5 md:before:h-2 before:bg-primary before:rounded-full before:ring-3 md:before:ring-4 before:ring-primary/20">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-muted-foreground mb-1.5 md:mb-2 block">2016 – 2019</span>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1">Senior Sales & Team Leader</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">El Tayeb Real Estate</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-card p-6 md:p-8 lg:p-12 rounded-[1.5rem] md:rounded-[2rem] border border-border shadow-sm"
          >
            <h3 className="text-xl md:text-2xl font-display font-bold mb-6 md:mb-8 uppercase tracking-widest">Education & Skills</h3>
            <div className="flex flex-col gap-5 md:gap-8">
              <div className="relative pl-5 md:pl-6 before:absolute before:left-0 before:top-1.5 md:before:top-2 before:w-1.5 md:before:w-2 before:h-1.5 md:before:h-2 before:bg-primary before:rounded-full before:ring-3 md:before:ring-4 before:ring-primary/20">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-muted-foreground mb-1.5 md:mb-2 block">Multi-media Programming</span>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1">International Academy (IAEMS)</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Graphic Design • GPA: 3.5</p>
              </div>
              <div className="relative pl-5 md:pl-6 before:absolute before:left-0 before:top-1.5 md:before:top-2 before:w-1.5 md:before:w-2 before:h-1.5 md:before:h-2 before:bg-primary before:rounded-full before:ring-3 md:before:ring-4 before:ring-primary/20">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-muted-foreground mb-1.5 md:mb-2 block">Certifications</span>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1">Technical Skills</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Python • HTML5 • JavaScript • Odoo ERP • Kali Linux</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM WIDGETS */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
             <Link href="/contact" className="block group h-full">
              <div className="bg-card p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-border hover:shadow-xl hover:border-primary transition-all duration-300 h-full flex flex-col justify-between text-center items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center mb-4 md:mb-6">
                   <img src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg" alt="" className="w-5 h-5 md:w-6 md:h-6 rotate-180 opacity-50 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <div className="mt-auto">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1.5 md:mb-2 block">Stay with me</span>
                  <h3 className="text-lg md:text-xl font-display font-bold">Profiles</h3>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="md:col-span-2">
            <Link href="/contact" className="block group h-full">
              <div className="bg-card p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-border hover:shadow-xl hover:border-primary transition-all duration-300 h-full flex flex-col justify-center items-center relative overflow-hidden">
                <img src="https://framerusercontent.com/images/LWhMQrXMaimdeTept19k0hVARY.svg" alt="*" className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 group-hover:text-primary transition-colors group-hover:scale-110 duration-500" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold group-hover:text-primary transition-colors text-center">Let's work together.</h3>
              </div>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
             <Link href="/credentials" className="block group h-full">
              <div className="bg-card p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-border hover:shadow-xl hover:border-primary transition-all duration-300 h-full flex flex-col justify-between text-center items-center">
                <div className="w-full aspect-[4/3] bg-muted rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6">
                   <img src="https://framerusercontent.com/images/ZqqIwsfFcCxP6L8U27dQgW3XwVc.png" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="mt-auto">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1.5 md:mb-2 block">More About Me</span>
                  <h3 className="text-lg md:text-xl font-display font-bold">Credentials</h3>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

      </div>
    </>
  );
}
