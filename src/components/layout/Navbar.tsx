import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Service" },
  { href: "/works", label: "Works" },
  { href: "/credentials", label: "Credentials" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-4"
            : "bg-transparent py-6"
        )}
        data-testid="navbar"
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="group" data-testid="link-logo">
            <span className="font-display font-bold text-2xl tracking-tight text-foreground transition-colors group-hover:text-primary">
              Aslaan.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location === link.href || (link.href !== '/' && location.startsWith(link.href));
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-primary after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform",
                        isActive ? "text-primary" : "text-foreground"
                      )}
                      data-testid={`nav-link-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                data-testid="nav-cta"
              >
                Let's talk
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="btn-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center pt-20"
            data-testid="mobile-menu-overlay"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => {
                const isActive = location === link.href || (link.href !== '/' && location.startsWith(link.href));
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-3xl font-display font-bold uppercase tracking-wider transition-colors hover:text-primary",
                        isActive ? "text-primary" : "text-foreground"
                      )}
                      data-testid={`mobile-link-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-foreground transition-colors duration-300"
                data-testid="mobile-cta"
              >
                Let's talk
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
