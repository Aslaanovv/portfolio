import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NextProject } from "@/components/case-study/NextProject";
import { ExternalLink, ChevronDown, Check } from "lucide-react";
import type { Work } from "@/types/work";

interface ZeroGuiltCaseStudyProps {
  work: Work;
  nextWork: Work;
  gallery: string[];
}

const FLAVOR_NAMES = [
  "Peanut Butter",
  "Cinnamon Swirl",
  "Salted Caramel",
  "Pistachios Cream",
  "Hazelnut Cream",
  "Coconut Cream"
];

// Live product handles on zeroguiltus.com — matches FLAVOR order in gallery[8..13]
const FLAVOR_HANDLES = [
  "peanut-butter",
  "cinnamon-swirl",
  "salted-caramel",
  "pistachio",
  "hazelnut-cream",
  "coconut-cream"
];

const STORE_URL = "https://www.zeroguiltus.com";

// Sliding text strips — recreations of the store's first two moving banners
function MovingBanners() {
  const benefits = ["No Added Sugar", "20g Protein", "Dessert Inspired", "Clean Source of Energy"];
  const offers = ["Free Shipping on All Orders", "15% Off on Orders Above $60", "20g Protein in Every Bar"];

  const strip = (items: string[]) => [...items, ...items, ...items, ...items]; // two identical halves for a seamless -50% loop

  return (
    <div aria-hidden="true">
      <div className="w-full bg-primary py-4 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 24, repeat: Infinity }}
            className="flex items-center"
            style={{ width: "200%" }}
          >
            {strip(benefits).map((item, i) => (
              <div key={i} className="flex items-center gap-8 pr-8 shrink-0">
                <span className="text-sm font-semibold tracking-[0.25em] uppercase text-primary-foreground">
                  {item}
                </span>
                <span className="w-2 h-2 rounded-full bg-primary-foreground/50" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-full bg-foreground py-3 overflow-hidden border-b border-border">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 28, repeat: Infinity }}
            className="flex items-center"
            style={{ width: "200%" }}
          >
            {strip(offers).map((item, i) => (
              <div key={i} className="flex items-center gap-8 pr-8 shrink-0">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-background/80">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rotate-45 bg-background/40" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Recreation of the custom flavor upsell block — links to the live product pages
function FlavorUpsell({ gallery }: { gallery: string[] }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
      {gallery.slice(8, 14).map((img, i) => (
        <a
          key={img}
          href={`${STORE_URL}/products/${FLAVOR_HANDLES[i]}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group/tile rounded-2xl border border-border bg-card overflow-hidden hover:border-primary transition-colors"
        >
          <div className="aspect-square overflow-hidden">
            <img
              src={img}
              alt={`Zero Guilt ${FLAVOR_NAMES[i]}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/tile:scale-105"
              loading="lazy"
            />
          </div>
          <span className="block px-2 py-2 text-[10px] md:text-xs font-semibold text-center text-foreground/80 group-hover/tile:text-primary transition-colors">
            {FLAVOR_NAMES[i]}
          </span>
        </a>
      ))}
    </div>
  );
}

// Recreation of the custom subscription picker
function SubscriptionPicker() {
  const [plan, setPlan] = useState<"one-time" | "subscribe">("subscribe");
  const [frequency, setFrequency] = useState("Deliver every 2 weeks");
  const frequencies = ["Deliver every week", "Deliver every 2 weeks", "Deliver every 3 weeks", "Deliver every 4 weeks"];

  return (
    <div className="rounded-2xl border border-border bg-card p-4 md:p-5 space-y-3">
      {/* One-time purchase */}
      <button
        onClick={() => setPlan("one-time")}
        aria-pressed={plan === "one-time"}
        className={`w-full flex items-center justify-between rounded-xl border px-4 py-3 transition-colors ${
          plan === "one-time" ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground/40"
        }`}
      >
        <span className="flex items-center gap-3">
          <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
            plan === "one-time" ? "border-primary" : "border-muted-foreground/40"
          }`}>
            {plan === "one-time" && <span className="w-2 h-2 rounded-full bg-primary" />}
          </span>
          <span className="text-sm font-medium text-foreground">One-time purchase</span>
        </span>
        <span className="text-sm font-semibold text-foreground">$29.92</span>
      </button>

      {/* Subscribe & save */}
      <div className={`rounded-xl border transition-colors ${
        plan === "subscribe" ? "border-primary bg-primary/5" : "border-border"
      }`}>
        <button
          onClick={() => setPlan("subscribe")}
          aria-pressed={plan === "subscribe"}
          className="w-full flex items-center justify-between px-4 py-3"
        >
          <span className="flex items-center gap-3">
            <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
              plan === "subscribe" ? "border-primary" : "border-muted-foreground/40"
            }`}>
              {plan === "subscribe" && <span className="w-2 h-2 rounded-full bg-primary" />}
            </span>
            <span className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium text-foreground">Subscribe &amp; Save</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-primary/15 text-primary px-2 py-0.5 rounded-full">
                Up to 15% off
              </span>
            </span>
          </span>
          <span className="text-sm font-semibold text-foreground">$25.43</span>
        </button>

        {plan === "subscribe" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4"
          >
            <div className="grid grid-cols-2 gap-2">
              {frequencies.map((f) => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  aria-pressed={frequency === f}
                  className={`flex items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-xs transition-colors ${
                    frequency === f
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:border-muted-foreground/40"
                  }`}
                >
                  {frequency === f && <Check className="w-3 h-3 text-primary" />}
                  {f}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// Recreation of the claims accordions
function ClaimsAccordion({ gallery }: { gallery: string[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const claims = [
    { title: "Shipping", content: <p className="text-sm text-muted-foreground">Free shipping on all orders</p> },
    {
      title: "Allergens",
      content: (
        <p className="text-sm text-muted-foreground uppercase tracking-wide">
          Contains: milk, soy, peanuts, coconut. Manufactured in a facility that also processes wheat, peanuts, sesame, tree nuts and eggs.
        </p>
      )
    },
    {
      title: "Nutrition Facts",
      content: (
        <div className="rounded-xl overflow-hidden border border-border max-w-[260px]">
          <img src={gallery[15]} alt="Peanut Butter nutrition facts label" className="w-full h-auto" loading="lazy" />
        </div>
      )
    }
  ];

  return (
    <div className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
      {claims.map((claim, i) => (
        <div key={claim.title}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full flex items-center justify-between px-4 md:px-5 py-3.5 text-left"
          >
            <span className="text-sm font-semibold text-foreground">{claim.title}</span>
            <ChevronDown
              className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.25 }}
              className="px-4 md:px-5 pb-4 overflow-hidden"
            >
              {claim.content}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

// Tiny animated banner strip for the device mockups
function MiniStrip({ items, reverse = false, tone = "orange" }: { items: string[]; reverse?: boolean; tone?: "orange" | "dark" }) {
  const strip = [...items, ...items, ...items, ...items];
  return (
    <div className={`${tone === "orange" ? "bg-primary" : "bg-foreground"} py-1 overflow-hidden`} aria-hidden="true">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 18, repeat: Infinity }}
          className="flex items-center"
          style={{ width: "200%" }}
        >
          {strip.map((item, i) => (
            <div key={i} className="flex items-center gap-3 pr-3 shrink-0">
              <span className={`text-[6px] font-semibold tracking-[0.2em] uppercase ${tone === "orange" ? "text-primary-foreground" : "text-background/80"}`}>
                {item}
              </span>
              <span className={`w-1 h-1 rounded-full ${tone === "orange" ? "bg-primary-foreground/50" : "bg-background/40"}`} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// Live mini-recreation of the store homepage for the desktop mockup
function DesktopStoreScreen({ gallery }: { gallery: string[] }) {
  return (
    <div className="bg-background text-left select-none pointer-events-none" aria-hidden="true">
      <MiniStrip items={["No Added Sugar", "20g Protein", "Dessert Inspired", "Clean Energy"]} />
      <MiniStrip items={["Free Shipping on All Orders", "15% Off Above $60", "20g Protein in Every Bar"]} reverse tone="dark" />

      {/* Store nav */}
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-border/60">
        <img src={gallery[7]} alt="" className="h-6 w-auto" />
        <div className="flex gap-4 text-[8px] font-semibold uppercase tracking-widest text-muted-foreground">
          <span className="text-foreground">Home</span>
          <span>Products</span>
          <span>About us</span>
        </div>
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
        </div>
      </div>

      {/* Hero */}
      <div className="relative">
        <img src={gallery[0]} alt="" className="w-full aspect-[21/8] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>

      {/* Flavor grid */}
      <div className="px-5 py-4">
        <div className="flex items-baseline justify-between mb-3">
          <p className="text-[9px] font-display font-bold uppercase tracking-wider text-foreground">Pick your favorite</p>
          <p className="text-[7px] font-mono uppercase tracking-widest text-muted-foreground">Six flavors, one choice</p>
        </div>
        <div className="grid grid-cols-4 gap-2.5">
          {gallery.slice(8, 12).map((img, i) => (
            <div key={img} className="rounded-lg border border-border overflow-hidden bg-card">
              <div className="relative">
                <img src={img} alt="" className="w-full aspect-square object-cover" />
                <span className="absolute top-1 left-1 text-[5px] font-bold uppercase bg-primary text-primary-foreground px-1 py-0.5 rounded-sm">Sale</span>
              </div>
              <div className="p-1.5">
                <p className="text-[6px] font-semibold text-foreground truncate">{FLAVOR_NAMES[i]} 12-pack</p>
                <p className="text-[6px] text-muted-foreground">
                  <span className="line-through">$34</span> <span className="text-primary font-semibold">$29.92</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Live mini-recreation of the mobile store for the phone mockup
function PhoneStoreScreen({ gallery }: { gallery: string[] }) {
  return (
    <div className="bg-background text-left select-none pointer-events-none" aria-hidden="true">
      <MiniStrip items={["No Added Sugar", "20g Protein", "Dessert Inspired"]} />

      <div className="flex items-center justify-center py-2 border-b border-border/60">
        <img src={gallery[7]} alt="" className="h-5 w-auto" />
      </div>

      <div className="relative">
        <img src={gallery[0]} alt="" className="w-full aspect-[4/5] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        <p className="absolute bottom-2.5 left-0 right-0 text-center text-[7px] font-display font-bold uppercase tracking-[0.2em] text-foreground drop-shadow">
          Satisfy your craving
        </p>
      </div>

      <div className="p-2.5 space-y-2">
        {[gallery[8], gallery[9]].map((img, i) => (
          <div key={img} className="flex items-center gap-2 rounded-lg border border-border bg-card p-1.5">
            <img src={img} alt="" className="w-9 h-9 rounded-md object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[7px] font-semibold text-foreground truncate">{FLAVOR_NAMES[i]} 12-pack</p>
              <p className="text-[6px] text-muted-foreground">
                <span className="line-through">$34</span> <span className="text-primary font-semibold">$29.92</span>
              </p>
            </div>
            <span className="text-[6px] font-bold uppercase bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 shrink-0">Shop</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ZeroGuiltCaseStudy({ work, nextWork, gallery }: ZeroGuiltCaseStudyProps) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="w-full bg-background">

      {/* ==================================== */}
      {/* HERO — Cinematic Full-Screen          */}
      {/* ==================================== */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

        {/* Stadium shot as moody backdrop */}
        <img
          src={gallery[1]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-12 text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs md:text-sm font-mono text-primary mb-6 tracking-[0.3em] uppercase">
              2026 — E-Commerce • Full Store Launch
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-tight mb-8 text-balance">
              <span className="text-foreground">Zero Guilt</span>
              <span className="block text-primary/80">Protein Bars</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              A US dessert-inspired protein bar brand — launched from empty store to live checkout.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
              {[
                { label: "Flavors", value: "6" },
                { label: "Protein", value: "20g" },
                { label: "Added Sugar", value: "0g" },
                { label: "Platform", value: "Shopify" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="text-center"
                >
                  <span className="block text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</span>
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
                transition={{ duration: 0.6, delay: 0.8 }}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Store
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-border/50 to-transparent mx-auto mb-4" />
          <p className="text-[10px] font-mono text-primary uppercase tracking-widest text-center">
            Scroll
          </p>
        </motion.div>
      </div>

      {/* The store's two moving banners, recreated */}
      <MovingBanners />

      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

        {/* ==================================== */}
        {/* SECTION 01 — PROJECT SNAPSHOT         */}
        {/* ==================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-primary uppercase tracking-widest">
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
            Zero Guilt Protein Bars
          </h2>
          <p className="text-lg md:text-xl text-primary/80 mt-3">
            Dessert-inspired DTC e-commerce on Shopify
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground/80 max-w-3xl leading-relaxed mb-16 md:mb-24"
        >
          A full store launch for a US protein bar brand that treats dessert as the product and protein as the bonus. I owned the launch end to end — positioning, Shopify build, and every word of copy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs font-mono text-primary/70 uppercase tracking-wider mb-8">
            Executive Summary
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mb-16">
            {[
              { label: "Client", value: "Zero Guilt" },
              { label: "Industry", value: "Food & Beverage — DTC" },
              { label: "Project Type", value: "Full Store Launch" },
              { label: "Platform", value: "Shopify" },
              { label: "Role", value: "Product Strategy • Store Setup • Copywriting" },
              { label: "Deliverables", value: "Theme Customization • Product Architecture • Promo Sections" },
              { label: "Catalog", value: "6 Flavors + Mixed Box Bundle" },
              { label: "Outcome", value: "Live US storefront with checkout" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.05) }}
                className="flex justify-start items-baseline py-3 border-b border-border/10"
              >
                <span className="text-[10px] font-mono text-primary uppercase tracking-wider w-32 flex-shrink-0">
                  {item.label}
                </span>
                <span className="text-sm text-foreground/90 flex-1">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="w-full h-px bg-border/10 max-w-[1000px] mx-auto" />

      {/* ==================================== */}
      {/* SECTION 02 — THE BRAND                */}
      {/* ==================================== */}
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-32 md:py-40">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-primary uppercase tracking-widest">
            The Brand
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
            Dessert First. Protein Second.
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
            Most protein bars apologize for themselves. Zero Guilt does the opposite — six dessert-inspired flavors, from Peanut Butter to Pistachios Cream, each packing 20g of protein with no added sugar. The positioning writes itself: this isn't a compromise, it's the dessert.
          </p>
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-3xl leading-relaxed">
            That framing drove every decision on the store — flavor-first imagery, indulgent language, and merchandising that sells the taste before the macros.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border"
        >
          <img src={gallery[0]} alt="Zero Guilt flavor lineup" className="w-full h-auto" />
        </motion.div>

      </div>

      {/* ==================================== */}
      {/* SECTION 03 — FLAVOR WALL              */}
      {/* ==================================== */}
      <div className="w-full bg-muted/20">
        <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 py-24 md:py-32">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-[10px] font-mono text-primary uppercase tracking-widest">
              The Lineup
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 md:mb-20 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight tracking-tight">
              Pick Your Favorite
            </h2>
            <p className="text-base md:text-lg text-muted-foreground/60 mt-6 max-w-2xl mx-auto">
              Six flavors, one guilt-free choice. Each product page leads with the dessert, then closes with the numbers — the same infographic system across the whole lineup.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {gallery.slice(8, 14).map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-border bg-background"
              >
                <img
                  src={img}
                  alt={`Zero Guilt ${FLAVOR_NAMES[i]} product page`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ==================================== */}
      {/* SECTION 04 — STORE EXPERIENCE         */}
      {/* ==================================== */}
      <div className="w-full bg-muted/20">
        <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 pb-32 md:pb-40">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-[10px] font-mono text-primary uppercase tracking-widest">
              Store Experience
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
              Craving to Checkout
            </h2>
            <p className="text-base md:text-lg text-muted-foreground/60 mt-6 max-w-2xl">
              The homepage moves fast — hero carousel, scrolling benefit marquees, then straight into the flavor grid. Free shipping and a 15%-off-$60 threshold are visible before you ever scroll past the fold.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border"
          >
            <img src={gallery[2]} alt="Zero Guilt six flavors color banner" className="w-full h-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-20"
          >
            {[
              {
                number: "01",
                title: "Benefit Marquees",
                desc: "No Added Sugar • 20g Protein • Dessert Inspired — the value prop scrolls before the visitor has to read."
              },
              {
                number: "02",
                title: "Bundle Pricing",
                desc: "12-packs per flavor plus a mixed box, with sale pricing anchored against the regular price."
              },
              {
                number: "03",
                title: "Conversion Levers",
                desc: "Free shipping banner, 15%-off threshold, and newsletter capture — layered, not loud."
              }
            ].map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-4xl md:text-5xl font-display font-bold text-primary/80 mb-3 block">
                  {item.number}
                </span>
                <p className="text-lg font-semibold text-foreground mb-2">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ==================================== */}
      {/* SECTION 05 — PRODUCT STORY            */}
      {/* ==================================== */}
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 pb-32 md:pb-40">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-primary uppercase tracking-widest">
            Product Story
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
            Selling the Taste, Backing It Up
          </h2>
          <p className="text-base md:text-lg text-muted-foreground/60 mt-6 max-w-2xl">
            Product pages lead with flavor, then close the deal with the numbers — 20g protein, 0g added sugar, low fat — presented as badges and infographics rather than a nutrition-label wall of text.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border"
        >
          <img src={gallery[3]} alt="Zero Guilt mixed box — protein packed dessert snack" className="w-full h-auto" />
        </motion.div>

      </div>

      {/* ==================================== */}
      {/* SECTION 06 — PRODUCT PAGE ENGINEERING */}
      {/* ==================================== */}
      <div className="w-full">
        <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-[10px] font-mono text-primary uppercase tracking-widest">
              Product Page Engineering
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
              The Buy Box, Rebuilt
            </h2>
            <p className="text-base md:text-lg text-muted-foreground/60 mt-6 max-w-2xl">
              The product page is where I pushed past theme settings into custom Liquid components — an interactive recreation of the live buy box, rebuilt below. Click around.
            </p>
          </motion.div>

          {/* Browser-frame recreation of the live PDP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] md:rounded-[3rem] border border-border bg-background overflow-hidden shadow-lg mb-12"
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-card">
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="ml-3 text-[10px] md:text-xs font-mono text-muted-foreground truncate">
                zeroguiltus.com/products/peanut-butter
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
              {/* Product visual */}
              <div>
                <div className="rounded-2xl overflow-hidden border border-border mb-5">
                  <img
                    src={gallery[14]}
                    alt="Zero Guilt Peanut Butter protein bar"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-primary mb-1">Sale</p>
                    <p className="font-display font-semibold text-foreground leading-snug">Peanut Butter 12-pack 20g Protein</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-muted-foreground line-through">$34.00</p>
                    <p className="text-lg font-display font-bold text-foreground">$29.92</p>
                  </div>
                </div>
              </div>

              {/* Interactive buy-box components */}
              <div className="space-y-4">
                <SubscriptionPicker />
                <ClaimsAccordion gallery={gallery} />
              </div>
            </div>
          </motion.div>

          {/* Flavor upsell block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-20"
          >
            <p className="text-xs font-mono uppercase tracking-wider text-primary mb-4">
              Flavors — the upsell block
            </p>
            <FlavorUpsell gallery={gallery} />
            <p className="text-sm text-muted-foreground mt-4 max-w-2xl">
              Every product is a hub. The upsell block turns each product page — and each product card — into a doorway to the other five flavors, so browsing never dead-ends.
            </p>
          </motion.div>

          {/* The four customizations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                number: "01",
                title: "Flavor Upsell",
                desc: "A custom block that cross-links all six products from every product surface — turning single-product traffic into catalog browsing."
              },
              {
                number: "02",
                title: "Subscription Picker",
                desc: "One-time vs. Subscribe & Save with four delivery frequencies, built as a custom component with live pricing at 15% off."
              },
              {
                number: "03",
                title: "Claims Accordions",
                desc: "Shipping, allergens, and nutrition facts answer purchase objections right inside the buy box — no hunting for fine print."
              },
              {
                number: "04",
                title: "Animated Banners",
                desc: "The first two moving banners — benefits strip and offers strip — are custom sliding-text sections that set the store's rhythm."
              }
            ].map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="bg-card border border-border rounded-2xl md:rounded-[2rem] p-6 md:p-8"
              >
                <span className="text-3xl md:text-4xl font-display font-bold text-primary/80 mb-3 block">
                  {item.number}
                </span>
                <p className="text-lg font-semibold text-foreground mb-2">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ==================================== */}
      {/* SECTION 07 — LIFESTYLE MERCHANDISING  */}
      {/* ==================================== */}
      <div className="w-full bg-muted/20">
        <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 pt-32 md:pt-40 pb-32 md:pb-40">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-[10px] font-mono text-primary uppercase tracking-widest">
              Lifestyle Merchandising
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 md:mb-20 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary leading-tight tracking-tight">
              Anytime, Anywhere
            </h2>
            <p className="text-base md:text-lg text-muted-foreground/60 mt-6 max-w-2xl mx-auto">
              The brand lives wherever the bar does — courtside, on the road, mid-workout. Lifestyle imagery keeps the store feeling like a snack brand, not a supplement warehouse.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[gallery[4], gallery[5], gallery[6]].map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border"
              >
                <img src={img} alt={`Zero Guilt lifestyle ${i + 1}`} className="w-full h-auto" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ==================================== */}
      {/* SECTION — ON EVERY SCREEN             */}
      {/* ==================================== */}
      <div className="w-full">
        <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 pb-32 md:pb-40">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-[10px] font-mono text-primary uppercase tracking-widest">
              Responsive Experience
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
              The Store, On Every Screen
            </h2>
            <p className="text-base md:text-lg text-muted-foreground/60 mt-6 max-w-2xl">
              Built mobile-first. The moving banners, hero carousel, and flavor grid scale down without losing the store's energy — same rhythm, smaller stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-end">
            {/* Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-8"
            >
              <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border bg-background overflow-hidden shadow-lg">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-card">
                  <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="ml-3 text-[10px] md:text-xs font-mono text-muted-foreground truncate">
                    zeroguiltus.com
                  </span>
                </div>
                <DesktopStoreScreen gallery={gallery} />
              </div>
            </motion.div>

            {/* Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:col-span-4 flex justify-center"
            >
              <div className="relative w-[220px] md:w-[250px] rounded-[2.2rem] border-[6px] border-border bg-card overflow-hidden shadow-xl">
                <PhoneStoreScreen gallery={gallery} />
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-20 rounded-full bg-black/80" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ==================================== */}
      {/* SECTION 08 — BUILDING ON SHOPIFY      */}
      {/* ==================================== */}
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 pb-32 md:pb-40">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-primary uppercase tracking-widest">
            Building on Shopify
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
            From Empty Store to Live Checkout
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center"
        >
          <div className="md:col-span-7">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I set up the full catalog architecture — six flavor variants, 12-pack sizing, and the mixed box bundle — with pricing structured around the launch promotion from day one.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Beyond theme customization, the deeper work was custom Liquid components: the flavor upsell block, the subscription picker, the claims accordions, and the animated sliding banners. Each one exists because the stock theme couldn't sell the way the brand needed to.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The store launched production-ready: checkout, payments, policy pages, and social channels wired in.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-border bg-card flex items-center justify-center p-12">
              <img src={gallery[7]} alt="Zero Guilt logo" className="w-full max-w-[240px] h-auto" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* ==================================== */}
      {/* SECTION 07 — REFLECTION               */}
      {/* ==================================== */}
      <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 pb-32 md:pb-40">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[10px] font-mono text-primary uppercase tracking-widest">
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
              <p className="text-[10px] font-mono text-primary uppercase tracking-widest mb-4">
                What Worked
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Leading with taste instead of nutrition made every section easier to write and design. When the positioning is sharp, the store builds itself.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-[10px] font-mono text-primary uppercase tracking-widest mb-4">
                Core Lesson
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A launch isn't a theme install. Catalog architecture, promo structure, and copy all have to ship together — or the store leaks conversions on day one.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-[10px] font-mono text-primary uppercase tracking-widest mb-4">
                Next Up
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Reviews and social proof, richer PDP media, and email flows tied to the flavor lineup — the levers that compound after launch.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* NEXT PROJECT */}
      <NextProject slug={nextWork.slug} title={nextWork.title} image={nextWork.image} />

    </div>
  );
}
