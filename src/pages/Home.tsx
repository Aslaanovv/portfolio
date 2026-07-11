import { Link } from "wouter";
import { motion } from "framer-motion";
import { Seo } from "@/components/ui/Seo";
import { Marquee } from "@/components/ui/Marquee";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { StatCounter } from "@/components/ui/StatCounter";

export default function Home() {
  const serviceIcons = [
    { name: "UX/UI Design", icon: "https://framerusercontent.com/images/K13RDSP01nuPzaFw396WcnQGqAQ.svg" },
    { name: "Web Development", icon: "https://framerusercontent.com/images/ztUMbbffxmRPIHucB8JDDw1MIs.svg" },
    { name: "Branding", icon: "https://framerusercontent.com/images/anlWrCCP00uS2seSO4dXnN9G9c.svg" },
    { name: "Odoo ERP", icon: "https://framerusercontent.com/images/Rstu8XY2NsBMaWhqZq67KuwJ0.svg" }
  ];

  return (
    <>
      <Seo title="Home" description="Product Designer & Web Developer with 7+ years of experience crafting digital experiences. Available for freelance work." />

      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl mx-auto mb-20"
        >
          <Link href="/about" className="block group">
            <div className="bg-card rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16 border border-border shadow-sm flex flex-col-reverse sm:flex-row items-center gap-8 md:gap-12 lg:gap-16 hover:shadow-xl hover:border-primary transition-all duration-500 relative overflow-hidden">
              <div className="flex-1 text-center sm:text-left relative z-10 order-2 sm:order-1 min-w-0">
                <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3 sm:mb-4 block">
                  Available for freelance work
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-foreground mb-4 sm:mb-6 tracking-tight leading-[0.9]">
                  Muhammad <br /> Aslaan.
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-md mx-auto sm:mx-0">
                  Product Designer & Web Developer with 7+ years of experience crafting digital experiences.
                </p>
              </div>

              <div className="relative shrink-0 order-1 sm:order-2 flex items-center justify-center sm:justify-end ml-0 sm:ml-4">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-muted border-[3px] sm:border-4 border-background group-hover:scale-105 transition-transform duration-500 relative z-10 shadow-lg ml-0 sm:ml-8">
                  <img
                    src="https://muhammadaslaanportfolio.vercel.app/assets/profile-cDg9_8PP.jpg"
                    alt="Muhammad Aslaan - Product Designer"
                    className="w-full h-full object-cover object-bottom"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-border flex items-center justify-center bg-background group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
                <img
                  src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg"
                  alt="Arrow"
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-45"
                  style={{ filter: "brightness(0) saturate(100%)" }}
                />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* MARQUEE */}
        <div className="w-full -mx-4 md:-mx-8 mb-20">
          <Marquee />
        </div>

        {/* FEATURED PROJECT - Full Width Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full -mx-4 md:-mx-8 mb-20"
        >
          <Link href="/works/malmoum-v1" className="block group">
            <div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border hover:border-primary transition-all duration-500">
              {/* Video Background */}
              <div className="relative aspect-[21/9] md:aspect-[16/7] overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  poster="/projects/malmoum/thumbnail.png"
                >
                  <source src="/projects/malmoum/hero-video.mp4" type="video/mp4" />
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-16 text-center">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-sm md:text-base font-semibold uppercase tracking-widest text-white/90 mb-4 backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full"
                  >
                    Featured Project
                  </motion.span>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 drop-shadow-lg"
                  >
                    Malmoum V1
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl drop-shadow"
                  >
                    Independent Product • UX/UI Design • Frontend Development
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-4 text-white group-hover:gap-6 transition-all duration-300"
                  >
                    <span className="text-sm font-semibold uppercase tracking-wider">View Case Study</span>
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
            </div>
          </Link>
        </motion.div>

        {/* 3 FEATURE CARDS */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Link href="/credentials" className="block group h-full">
              <div className="bg-card p-6 md:p-8 rounded-3xl border border-border hover:shadow-xl hover:border-primary transition-all duration-300 h-full flex flex-col">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 relative">
                  <img src="https://framerusercontent.com/images/ZqqIwsfFcCxP6L8U27dQgW3XwVc.png" alt="Credentials" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2 block">More About Me</span>
                    <h3 className="text-2xl font-display font-bold">Credentials</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                     <img src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg" alt="" className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link href="/works" className="block group h-full">
              <div className="bg-card p-6 md:p-8 rounded-3xl border border-border hover:shadow-xl hover:border-primary transition-all duration-300 h-full flex flex-col">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 relative">
                  <img src="https://framerusercontent.com/images/DarH9E4Ou5gzGBivriCWY2Oc8.png" alt="Works Portfolio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2 block">Showcase</span>
                    <h3 className="text-2xl font-display font-bold">Projects</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                     <img src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg" alt="" className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link href="/service" className="block group h-full">
              <div className="bg-card p-6 md:p-8 rounded-3xl border border-border hover:shadow-xl hover:border-primary transition-all duration-300 h-full flex flex-col">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 relative">
                  <img src="https://framerusercontent.com/images/F6zvHN84xgsMwNeNdcRXZmhxOU.png" alt="Services Offered" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2 block">What I Do</span>
                    <h3 className="text-2xl font-display font-bold">Services</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                     <img src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg" alt="" className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>

        {/* SERVICES AND PROFILES */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 mb-20">

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Link href="/service" className="block group h-full">
              <div className="bg-card p-6 sm:p-8 md:p-12 rounded-3xl border border-border hover:shadow-xl hover:border-primary transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="flex flex-wrap gap-8 md:gap-12 mb-10 md:mb-16 justify-center md:justify-start">
                  {serviceIcons.map((service) => (
                    <div key={service.name} className="flex flex-col items-center gap-4">
                      <img src={service.icon} alt={service.name + ' service icon'} className="w-10 h-10 md:w-12 md:h-12" loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2 block">Specialization</span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold">Services Offering</h3>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                     <img src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg" alt="Arrow" className="w-4 h-4 md:w-5 md:h-5 opacity-50 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link href="/contact" className="block group h-full">
              <div className="bg-card p-6 sm:p-8 md:p-12 rounded-3xl border border-border hover:shadow-xl hover:border-primary transition-all duration-300 h-full flex flex-col justify-between">
                <div className="bg-muted w-full aspect-square rounded-full flex items-center justify-center mb-6 md:mb-8 border border-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/LWhMQrXMaimdeTept19k0hVARY.svg')] bg-center bg-no-repeat bg-[length:40%] opacity-20 group-hover:rotate-45 group-hover:scale-110 transition-all duration-500"></div>
                </div>
                <div className="flex items-end justify-between mt-auto">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2 block">Stay with me</span>
                    <h3 className="text-xl md:text-2xl font-display font-bold">Profiles</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                     <img src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg" alt="Arrow" className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>

        {/* STATS */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatCounter value={7} prefix="0+" label="Years Experience" />
          <StatCounter value={25} prefix="+" label="Projects Completed" />
          <StatCounter value={15} prefix="+" label="Happy Clients" />
          <StatCounter value={100} prefix="+" label="Client Satisfaction" />
        </div>

        <CtaBanner />

      </div>
    </>
  );
}
