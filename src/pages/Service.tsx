import { motion } from "framer-motion";
import { Link } from "wouter";
import { Seo } from "@/components/ui/Seo";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Service() {
  const services = [
    {
      title: "UX/UI Design",
      icon: "https://framerusercontent.com/images/K13RDSP01nuPzaFw396WcnQGqAQ.svg",
      desc: "Creating intuitive and beautiful user experiences that delight users and drive engagement. From wireframes to high-fidelity prototypes, I design interfaces that are both visually stunning and highly functional."
    },
    {
      title: "Web Development",
      icon: "https://framerusercontent.com/images/ztUMbbffxmRPIHucB8JDDw1MIs.svg",
      desc: "Building modern, responsive web applications using cutting-edge technologies. Specializing in React, TypeScript, and modern frameworks to create fast, secure, and scalable websites."
    },
    {
      title: "Branding",
      icon: "https://framerusercontent.com/images/anlWrCCP00uS2seSO4dXnN9G9c.svg",
      desc: "Crafting memorable brand identities that resonate. From logo design to comprehensive brand guidelines, I create cohesive visual systems that tell your story across all touchpoints."
    },
    {
      title: "Odoo ERP",
      icon: "https://framerusercontent.com/images/Rstu8XY2NsBMaWhqZq67KuwJ0.svg",
      desc: "Enterprise solutions and Odoo ERP implementations. From needs assessment to module configuration and staff training, I help businesses streamline operations with powerful ERP systems."
    }
  ];

  return (
    <>
      <Seo title="Service" />
      <div className="container mx-auto px-4 md:px-8">

        {/* Top Chips Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-8 mb-12 md:mb-16"
        >
          {services.map((s, i) => (
            <div key={i} className="bg-card border border-border px-5 md:px-8 py-2.5 md:py-4 rounded-full shadow-sm flex items-center gap-2 md:gap-4 hover:border-primary transition-colors">
              <img src={s.icon} alt="" className="w-4 h-4 md:w-6 md:h-6" />
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
                <img src={service.icon} alt="" className="w-7 h-7 md:w-10 md:h-10 dark:group-hover:brightness-0 dark:group-hover:invert transition-all" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 md:mb-8 text-center">Tools & Technologies</h2>
          <div className="bg-card rounded-xl md:rounded-[2rem] border border-border p-5 md:p-8 lg:p-12">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6 text-center">
              {['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'VS Code', 'GitHub', 'Odoo', 'WordPress'].map((tool) => (
                <div key={tool} className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-lg md:rounded-xl flex items-center justify-center">
                    <span className="text-xl md:text-2xl">⚡</span>
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-muted-foreground">{tool}</span>
                </div>
              ))}
            </div>
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
