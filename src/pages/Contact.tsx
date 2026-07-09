import { motion } from "framer-motion";
import { Seo } from "@/components/ui/Seo";
import { Instagram, Twitter, Linkedin, Dribbble, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message is too short")
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <>
      <Seo title="Contact" />
      <div className="container mx-auto px-4 md:px-8">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">

          {/* Left Info Column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <h2 className="text-2xl font-display font-bold uppercase tracking-wide mb-2">CONTACT INFO</h2>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card p-8 rounded-[2rem] border border-border shadow-sm flex items-start gap-6">
              <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center shrink-0 border border-border">
                <Mail size={24} />
              </div>
              <div>
                <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase block mb-2">EMAIL ME</span>
                <a href="mailto:contact@aslaan.dev" className="block text-foreground hover:text-primary transition-colors font-medium mb-1">contact@aslaan.dev</a>
                <a href="mailto:work@aslaan.dev" className="block text-foreground hover:text-primary transition-colors font-medium">work@aslaan.dev</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card p-8 rounded-[2rem] border border-border shadow-sm flex items-start gap-6">
              <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center shrink-0 border border-border">
                <img src="https://framerusercontent.com/images/9ZjCoYcH3ts7daLKd9fzU7RVMc.svg" alt="" className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase block mb-2">AVAILABILITY</span>
                <p className="text-foreground font-medium">Available for freelance work</p>
                <p className="text-sm text-muted-foreground mt-1">Remote & Worldwide</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card p-8 rounded-[2rem] border border-border shadow-sm flex items-start gap-6">
              <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center shrink-0 border border-border">
                <img src="https://framerusercontent.com/images/coRpTYVFeOA1mIZHD0xCPWVMOo.png" alt="" className="w-6 h-6 opacity-50" />
              </div>
              <div>
                <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase block mb-2">LOCATION</span>
                <p className="text-foreground font-medium">Egypt</p>
                <p className="text-sm text-muted-foreground mt-1">Remote Worldwide</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card p-10 rounded-[2rem] border border-border shadow-sm flex flex-col items-center justify-center mt-2 relative overflow-hidden group">
              <img src="https://framerusercontent.com/images/YUVK5MuHxZmdnMGc0QiIuvnJ2j0.svg" alt="*" className="w-16 h-16 absolute top-0 -translate-y-1/2 group-hover:rotate-45 transition-transform duration-700" />
              <h3 className="text-3xl font-display font-bold mt-4 mb-8 text-center group-hover:text-primary transition-colors">Let's work together.</h3>
              <div className="flex justify-center gap-4">
                <a href="https://instagram.com/aslaan" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Instagram size={20} /></a>
                <a href="https://twitter.com/aslaan" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Twitter size={20} /></a>
                <a href="https://linkedin.com/in/aslaan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Linkedin size={20} /></a>
                <a href="https://dribbble.com/aslaan" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Dribbble size={20} /></a>
              </div>
            </motion.div>
          </div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-card p-8 md:p-12 rounded-[2rem] border border-border shadow-sm relative overflow-hidden"
          >
            <img src="https://framerusercontent.com/images/LWhMQrXMaimdeTept19k0hVARY.svg" alt="*" className="absolute top-12 right-12 w-12 h-12 opacity-20" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
              Let's work <span className="text-primary">together.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Name</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            placeholder="Name *"
                            className="w-full bg-background border border-border rounded-xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Email</FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            type="email"
                            placeholder="Email *"
                            className="w-full bg-background border border-border rounded-xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Subject</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          placeholder="Your Subject *"
                          className="w-full bg-background border border-border rounded-xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Message</FormLabel>
                      <FormControl>
                        <textarea
                          {...field}
                          placeholder="Your Message *"
                          rows={6}
                          className="w-full bg-background border border-border rounded-xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  className="w-full bg-foreground text-background py-5 rounded-xl font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </>
  );
}
