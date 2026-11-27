import { Link } from "wouter";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/data/site";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Who's Aslaan?", href: "/credentials" },
  { label: "Service", href: "/service" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="w-full py-8 md:py-12 border-t border-border mt-12 md:mt-20" data-testid="footer">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="text-center md:text-left">
            <span className="text-sm font-medium text-foreground font-display tracking-wide uppercase">
              {site.shortName}.
            </span>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Made with care &copy; {new Date().getFullYear()}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-email"
            >
              {site.email}
            </a>
          </div>

          <nav className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
            {footerLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-foreground hover:text-primary transition-colors"
                data-testid={`footer-link-${href.replace("/", "")}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <SocialLinks size="sm" className="justify-center md:justify-end" />
        </div>
      </div>
    </footer>
  );
}
