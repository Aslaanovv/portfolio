import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import emailjs from "@emailjs/browser";
import { Seo } from "@/components/ui/Seo";
import { Instagram, Twitter, Linkedin, Dribbble, Mail, Loader2, AlertCircle, Clock, ShieldCheck, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters"),
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  subject: z.string()
    .min(1, "Please select a subject"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string()
    .max(2000, "Message is too long (max 2000 characters)")
    .optional()
});

const SUBJECT_OPTIONS = [
  "Project Inquiry",
  "Freelance Opportunity",
  "Job Opportunity",
  "Collaboration",
  "General Question",
  "Feedback",
  "Other"
] as const;

const PROJECT_SUBJECTS: string[] = ["Project Inquiry", "Freelance Opportunity"];

const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet"
] as const;

const TIMELINE_OPTIONS = [
  "ASAP",
  "1–2 weeks",
  "1–3 months",
  "Flexible"
] as const;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [shakeCount, setShakeCount] = useState(0);
  const [honeypot, setHoneypot] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // Only validate on submit — no premature errors from tabbing through fields.
    // After a failed submit, fields re-validate live as the user fixes them.
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      budget: "",
      timeline: "",
      message: ""
    }
  });

  const subjectValue = form.watch("subject");
  const showProjectFields = PROJECT_SUBJECTS.includes(subjectValue);

  // Watch message length for character counter
  const messageValue = form.watch('message') || '';
  const messageLength = messageValue.length;
  const isApproachingLimit = messageLength > 1500;
  const isAtLimit = messageLength >= 2000;

  async function onSubmit(data: z.infer<typeof formSchema>) {
    // Honeypot filled → almost certainly a bot. Fake success silently, drop the message.
    if (honeypot) {
      setIsSent(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("EmailJS is not configured. Add your credentials to .env");
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          budget: data.budget || "Not specified",
          timeline: data.timeline || "Not specified",
          message: data.message || "Not specified"
        },
        { publicKey: PUBLIC_KEY }
      );

      setIsSent(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setShakeCount((count) => count + 1);
      toast({
        title: "Something went wrong",
        description: "Please try again or email me directly at mohamedaslaangit@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Seo title="Contact" />
      <div className="container mx-auto px-4 md:px-8">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">

          {/* Left Info Column */}
          <div className="lg:col-span-1 flex flex-col gap-4 md:gap-6">
            <h2 className="text-xl md:text-2xl font-display font-bold uppercase tracking-wide mb-2">CONTACT INFO</h2>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card p-5 md:p-8 rounded-xl md:rounded-[2rem] border border-border shadow-sm flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-muted rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 border border-border">
                <Mail size={20} className="md:w-6 md:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] md:text-xs font-semibold tracking-widest text-muted-foreground uppercase block mb-1.5 md:mb-2">EMAIL ME</span>
                <a href="mailto:mohamedaslaangit@gmail.com" className="block text-foreground hover:text-primary transition-colors font-medium text-sm sm:text-base truncate">mohamedaslaangit@gmail.com</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card p-5 md:p-8 rounded-xl md:rounded-[2rem] border border-border shadow-sm flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-muted rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 border border-border">
                <img src="https://framerusercontent.com/images/9ZjCoYcH3ts7daLKd9fzU7RVMc.svg" alt="" className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <span className="text-[10px] md:text-xs font-semibold tracking-widest text-muted-foreground uppercase block mb-1.5 md:mb-2">AVAILABILITY</span>
                <p className="text-foreground font-medium text-sm sm:text-base">Available for freelance work</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Remote & Worldwide</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card p-5 md:p-8 rounded-xl md:rounded-[2rem] border border-border shadow-sm flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-muted rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 border border-border">
                <img src="https://framerusercontent.com/images/coRpTYVFeOA1mIZHD0xCPWVMOo.png" alt="" className="w-5 h-5 md:w-6 md:h-6 opacity-50" />
              </div>
              <div>
                <span className="text-[10px] md:text-xs font-semibold tracking-widest text-muted-foreground uppercase block mb-1.5 md:mb-2">LOCATION</span>
                <p className="text-foreground font-medium text-sm sm:text-base">Egypt</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-card p-6 md:p-10 rounded-xl md:rounded-[2rem] border border-border shadow-sm flex flex-col items-center justify-center mt-2 relative overflow-hidden group">
              <img src="https://framerusercontent.com/images/YUVK5MuHxZmdnMGc0QiIuvnJ2j0.svg" alt="*" className="w-12 h-12 md:w-16 md:h-16 absolute top-0 -translate-y-1/2 group-hover:rotate-45 transition-transform duration-700" />
              <span className="text-[10px] md:text-xs font-semibold tracking-widest text-muted-foreground uppercase block text-center mt-3 md:mt-4 mb-6 md:mb-8">Find me on</span>
              <div className="flex justify-center gap-3 md:gap-4">
                <a href="https://instagram.com/aslaan" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Instagram size={18} className="md:w-5 md:h-5" /></a>
                <a href="https://twitter.com/aslaan" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Twitter size={18} className="md:w-5 md:h-5" /></a>
                <a href="https://linkedin.com/in/aslaan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Linkedin size={18} className="md:w-5 md:h-5" /></a>
                <a href="https://dribbble.com/aslaan" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Dribbble size={18} className="md:w-5 md:h-5" /></a>
              </div>
            </motion.div>
          </div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-card p-5 md:p-8 lg:p-12 rounded-xl md:rounded-[2rem] border border-border shadow-sm relative overflow-hidden"
          >
            <img src="https://framerusercontent.com/images/LWhMQrXMaimdeTept19k0hVARY.svg" alt="*" className="absolute top-8 md:top-12 right-8 md:right-12 w-10 h-10 md:w-12 md:h-12 opacity-20" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4 md:mb-10 text-balance">
              Let's work <span className="text-primary">together.</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 md:mb-10">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
            </p>

            <AnimatePresence mode="wait">
              {isSent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-12 md:py-20 flex flex-col items-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 20 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center mb-6 md:mb-8"
                  >
                    <Check className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={2.5} />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">Message sent.</h3>
                  <p className="text-muted-foreground text-sm sm:text-base max-w-md mb-8 md:mb-10">
                    Thanks for reaching out — I'll get back to you within 24–48 hours. Meanwhile, feel free to check out my latest work.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                    <Link
                      href="/projects"
                      className="bg-foreground text-background px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      Show projects
                    </Link>
                    <button
                      type="button"
                      onClick={() => setIsSent(false)}
                      className="border border-border text-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300"
                    >
                      Send another message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.25 }}>
                  <motion.div
                    key={shakeCount}
                    animate={shakeCount > 0 ? { x: [0, -10, 10, -6, 6, -2, 0] } : undefined}
                    transition={{ duration: 0.4 }}
                  >
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                        {/* Honeypot — invisible to humans, catches spam bots */}
                        <div className="absolute -left-[9999px]" aria-hidden="true">
                          <label htmlFor="company_website">Company website</label>
                          <input
                            id="company_website"
                            type="text"
                            name="company_website"
                            tabIndex={-1}
                            autoComplete="off"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                                    className="w-full bg-background border border-border rounded-lg md:rounded-xl px-4 md:px-6 py-3 md:py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
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
                                    className="w-full bg-background border border-border rounded-lg md:rounded-xl px-4 md:px-6 py-3 md:py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
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
                                <div role="radiogroup" aria-label="What is this about?" className="flex flex-wrap gap-2 md:gap-2.5">
                                  {SUBJECT_OPTIONS.map((option) => {
                                    const selected = field.value === option;
                                    return (
                                      <button
                                        key={option}
                                        type="button"
                                        role="radio"
                                        aria-checked={selected}
                                        onClick={() => {
                                          field.onChange(option);
                                          if (!PROJECT_SUBJECTS.includes(option)) {
                                            form.setValue("budget", "");
                                            form.setValue("timeline", "");
                                          }
                                        }}
                                        className={`cursor-pointer rounded-full border px-4 md:px-5 py-2 md:py-2.5 text-sm sm:text-base transition-colors duration-200 ${
                                          selected
                                            ? "border-transparent bg-foreground text-background font-semibold"
                                            : "border-border bg-background text-muted-foreground hover:text-foreground hover:border-foreground/40"
                                        }`}
                                      >
                                        {option}
                                      </button>
                                    );
                                  })}
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <AnimatePresence initial={false}>
                          {showProjectFields && (
                            <motion.div
                              key="project-fields"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <FormField
                                  control={form.control}
                                  name="budget"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="sr-only">Budget range</FormLabel>
                                      <Select value={field.value || undefined} onValueChange={field.onChange}>
                                        <FormControl>
                                          <SelectTrigger className="h-auto w-full rounded-lg md:rounded-xl border-border bg-background px-4 md:px-6 py-3 md:py-4 text-sm sm:text-base focus:ring-2 focus:ring-primary focus:ring-offset-0">
                                            <SelectValue placeholder="Budget range" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          {BUDGET_OPTIONS.map((option) => (
                                            <SelectItem key={option} value={option} className="rounded-lg text-sm sm:text-base">
                                              {option}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                    </FormItem>
                                  )}
                                />

                                <FormField
                                  control={form.control}
                                  name="timeline"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel className="sr-only">Timeline</FormLabel>
                                      <Select value={field.value || undefined} onValueChange={field.onChange}>
                                        <FormControl>
                                          <SelectTrigger className="h-auto w-full rounded-lg md:rounded-xl border-border bg-background px-4 md:px-6 py-3 md:py-4 text-sm sm:text-base focus:ring-2 focus:ring-primary focus:ring-offset-0">
                                            <SelectValue placeholder="Timeline" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          {TIMELINE_OPTIONS.map((option) => (
                                            <SelectItem key={option} value={option} className="rounded-lg text-sm sm:text-base">
                                              {option}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                    </FormItem>
                                  )}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="sr-only">Message</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <textarea
                                    {...field}
                                    placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                                    rows={6}
                                    className={`w-full bg-background border rounded-lg md:rounded-xl px-4 md:px-6 py-3 md:py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all resize-none text-sm sm:text-base ${
                                      form.formState.errors.message
                                        ? 'border-destructive focus:ring-destructive'
                                        : 'border-border focus:ring-primary focus:border-transparent'
                                    }`}
                                  />
                                  {/* Character counter */}
                                  <div className={`absolute bottom-3 right-4 text-xs flex items-center gap-1.5 ${
                                    isAtLimit
                                      ? 'text-destructive'
                                      : isApproachingLimit
                                      ? 'text-amber-500'
                                      : 'text-muted-foreground'
                                  }`}>
                                    {isAtLimit && <AlertCircle className="w-3 h-3" />}
                                    {messageLength} / 2000
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-foreground text-background py-4 md:py-5 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-foreground disabled:hover:text-background flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </button>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 pt-1">
                          <span className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                            <Clock className="w-3.5 h-3.5 text-primary" />
                            Replies within 24–48 hours
                          </span>
                          <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/40" aria-hidden="true" />
                          <span className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                            No spam — straight to my inbox
                          </span>
                        </div>
                      </form>
                    </Form>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </>
  );
}
