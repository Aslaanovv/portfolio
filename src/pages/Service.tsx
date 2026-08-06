import { motion } from "framer-motion";
import { Link } from "wouter";
import { Seo } from "@/components/ui/Seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PenTool, Code, Sparkles, Building2 } from "lucide-react";

export default function Service() {
  const services = [
    {
      title: "UX/UI Design",
      icon: PenTool,
      desc: "Creating intuitive and beautiful user experiences that delight users and drive engagement. From wireframes to high-fidelity prototypes, I design interfaces that are both visually stunning and highly functional."
    },
    {
      title: "Web Development",
      icon: Code,
      desc: "Building modern, responsive web applications using cutting-edge technologies. Specializing in React, TypeScript, and modern frameworks to create fast, secure, and scalable websites."
    },
    {
      title: "Branding",
      icon: Sparkles,
      desc: "Crafting memorable brand identities that resonate. From logo design to comprehensive brand guidelines, I create cohesive visual systems that tell your story across all touchpoints."
    },
    {
      title: "Odoo ERP",
      icon: Building2,
      desc: "Enterprise solutions and Odoo ERP implementations. From needs assessment to module configuration and staff training, I help businesses streamline operations with powerful ERP systems."
    }
  ];

  const tools = [
    { name: "Figma", category: "Design" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Tailwind", category: "Styling" },
    { name: "Cursor", category: "AI" },
    { name: "Claude", category: "AI" },
    { name: "Vite", category: "Build" },
    { name: "Framer Motion", category: "Animation" }
  ];

  return (
    <>
      <Seo title="Service" />
      <div className="container mx-auto px-4 md:px-8">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6">
            Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Design, development, and branding — from idea to finished product.
          </p>
        </motion.div>

        {/* Top Chips Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-8 mb-12 md:mb-16"
        >
          {services.map((s, i) => (
            <div key={i} className="bg-card border border-border px-5 md:px-8 py-2.5 md:py-4 rounded-full shadow-sm flex items-center gap-2 md:gap-4 hover:border-primary transition-colors">
              <s.icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
              <span className="font-semibold uppercase tracking-wider text-[10px] sm:text-xs md:text-sm">{s.title}</span>
            </div>
          ))}
        </motion.div>

        <SectionHeading title="MY OFFERING" />

        {/* Services List */}
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-5 md:gap-8 mb-16 md:mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl md:rounded-[2rem] border border-border p-5 md:p-8 lg:p-12 shadow-sm flex flex-col md:flex-row gap-5 md:gap-8 items-start hover:shadow-xl hover:border-primary transition-all duration-300 group"
            >
              <div className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 shrink-0 bg-background border border-border rounded-xl md:rounded-[1.5rem] flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                <service.icon className="w-7 h-7 md:w-10 md:h-10 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 md:mb-6 text-center">How I Work</h2>
          <p className="text-muted-foreground text-center mb-10 md:mb-16 max-w-2xl mx-auto">
            A clear process from our first conversation to final delivery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                desc: "Understanding your needs, goals, and constraints"
              },
              {
                number: "02",
                title: "Design",
                desc: "Creating the solution — from concepts to polished designs"
              },
              {
                number: "03",
                title: "Build",
                desc: "Bringing it to life with clean, scalable code"
              },
              {
                number: "04",
                title: "Deliver",
                desc: "Launch, support, and ensuring everything works perfectly"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="text-5xl md:text-6xl font-display font-bold text-primary/80 block mb-4">
                  {step.number}
                </span>
                <h3 className="text-lg md:text-xl font-display font-bold mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4 md:mb-6 text-center">Tools & Technologies</h2>
          <p className="text-muted-foreground text-center mb-10 md:mb-12 max-w-2xl mx-auto">
            The modern stack I use to ship products.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary/10 transition-colors">
                  <span className="text-xl md:text-2xl font-display font-bold text-primary">{tool.name.charAt(0)}</span>
                </div>
                <span className="text-sm md:text-base font-semibold text-foreground block">{tool.name}</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{tool.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BOTTOM WIDGETS */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
             <Link href="/contact" className="block group h-full">
              <div className="bg-card p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-border hover:shadow-xl hover:border-primary transition-all duration-300 h-full flex flex-col justify-between text-center items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center mb-4 md:mb-6">
                   <img src="https://framerusercontent.com/images/RgFXT0TeujqnaEgLpH61bQqgovM.svg" alt="" className="w-5 h-5 md:w-6 md:h-6 rotate-180 opacity-50 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <div className="mt-auto">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-primary mb-1.5 md:mb-2 block">Stay with me</span>
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
                  <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-primary mb-1.5 md:mb-2 block">More About Me</span>
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
