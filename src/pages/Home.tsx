import { Link } from "wouter";
import { motion } from "framer-motion";
import { Seo } from "@/components/ui/Seo";
import { Marquee } from "@/components/ui/Marquee";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { StatCounter } from "@/components/ui/StatCounter";
import { ArrowUpRight } from "lucide-react";
import { works } from "@/data/works";

export default function Home() {
  const latestWork = works[0];

  return (
    <>
      <Seo title="Home" description="Product Designer & Frontend Engineer crafting products from strategy to shipped code. Turning complex problems into products people love to use." />

      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl mx-auto mb-20"
        >
          <Link href="/credentials" className="block group">
            <div className="bg-card rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16 border border-border shadow-sm flex flex-col-reverse sm:flex-row items-center gap-8 md:gap-12 lg:gap-16 hover:shadow-xl hover:border-primary transition-all duration-500 relative overflow-hidden">
              <div className="flex-1 text-center sm:text-left relative z-10 order-2 sm:order-1 min-w-0">
                <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3 sm:mb-4 block">
                  Product Thinking <span className="text-primary">×</span> Design <span className="text-primary">×</span> Code
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-foreground mb-4 sm:mb-6 tracking-tight leading-[0.9]">
                  Muhammad <br /> Aslaan.
                </h1>
                <p className="text-foreground font-semibold text-sm sm:text-base md:text-lg max-w-md mx-auto sm:mx-0 mb-2">
                  Turning complex ideas into products people use.
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-md mx-auto sm:mx-0">
                  Product Designer & Frontend Engineer crafting products from strategy to shipped code.
                </p>
              </div>

              <div className="relative shrink-0 order-1 sm:order-2 flex items-center justify-center sm:justify-end ml-0 sm:ml-4">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-muted border-[3px] sm:border-4 border-background group-hover:scale-105 transition-transform duration-500 relative z-10 shadow-lg ml-0 sm:ml-8">
                  <img
                    src="/profile.webp"
                    alt="Muhammad Aslaan - Product Designer"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-border flex items-center justify-center bg-background group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
                <img
                  src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg"
                  alt="Arrow"
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-45 brightness-0 saturate-100"
                />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* MARQUEE */}
        <div className="w-full -mx-4 md:-mx-8 mb-20">
          <Marquee />
        </div>

        {/* One featured slot, driven by the latest case study in works. */}
        <section className="w-full max-w-7xl mx-auto mb-16 md:mb-20" aria-labelledby="featured-project-title">
          <Link
            href={`/projects/${latestWork.slug}`}
            className="group block rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-card border border-border hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background transition-colors duration-300"
          >
            <div className="relative bg-[#e8e3dc] overflow-hidden">
              <img
                src={latestWork.image}
                alt={`${latestWork.title} desktop and mobile project presentation`}
                width={1600}
                height={1000}
                loading="lazy"
                className="w-full h-auto motion-safe:group-hover:scale-[1.02] motion-safe:transition-transform motion-safe:duration-700"
              />
            </div>
            <div className="flex items-end justify-between gap-5 p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="min-w-0 max-w-2xl">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">Latest case study <span aria-hidden="true" className="mx-2">/</span> {latestWork.year}</p>
                <h2 id="featured-project-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 md:mb-4">{latestWork.title}</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{latestWork.category.split(' • ').join(' · ')}</p>
                <span className="inline-block text-sm font-semibold mt-5 md:mt-6 group-hover:text-primary transition-colors">View case study</span>
              </div>
              <span className="shrink-0 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-colors" aria-hidden="true">
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
              </span>
            </div>
          </Link>
        </section>

        {/* 3 FEATURE CARDS */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Link href="/credentials" className="block group h-full">
              <div className="bg-card p-6 md:p-8 rounded-3xl border border-border hover:shadow-xl hover:border-primary transition-all duration-300 h-full flex flex-col">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 relative">
                  <img src="https://framerusercontent.com/images/ZqqIwsfFcCxP6L8U27dQgW3XwVc.png" alt="Muhammad Aslaan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 block">More About Me</span>
                    <h3 className="text-2xl font-display font-bold">Who's Aslaan?</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                     <img src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg" alt="" className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link href="/projects" className="block group h-full">
              <div className="bg-card p-6 md:p-8 rounded-3xl border border-border hover:shadow-xl hover:border-primary transition-all duration-300 h-full flex flex-col">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 relative">
                  <img src="https://framerusercontent.com/images/DarH9E4Ou5gzGBivriCWY2Oc8.png" alt="Works Portfolio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 block">Showcase</span>
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
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 block">What I Do</span>
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

        {/* STATS */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-3 gap-4 md:gap-6">
          <StatCounter value={7} prefix="+" label="Years Experience" />
          <StatCounter value={25} prefix="+" label="Projects Completed" />
          <StatCounter value={98} suffix="%" label="Happy Clients" />
        </div>

        <CtaBanner />

      </div>
    </>
  );
}
