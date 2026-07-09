import { Link } from "wouter";
import { Instagram, Twitter, Linkedin, Dribbble } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-border mt-20" data-testid="footer">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-sm font-medium text-foreground font-display tracking-wide uppercase">
              Muhammad Aslaan.
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              Made with care &copy; {new Date().getFullYear()}
            </p>
          </div>

          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {["Home", "About", "Service", "Works", "Credentials", "Contact"].map((label) => (
              <Link
                key={label}
                href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                className="text-xs uppercase tracking-wider font-semibold text-foreground hover:text-primary transition-colors"
                data-testid={`footer-link-${label.toLowerCase()}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://instagram.com/aslaan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com/aslaan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="https://linkedin.com/in/aslaan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://dribbble.com/aslaan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" aria-label="Dribbble">
              <Dribbble size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
