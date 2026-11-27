import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { Mail } from "lucide-react";
import type { IconType } from "react-icons";
import { socialLinks, type SocialId } from "@/data/site";
import { cn } from "@/lib/utils";

const ICONS: Record<SocialId, IconType> = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  whatsapp: FaWhatsapp,
  email: Mail as IconType,
};

const SIZES = {
  sm: {
    box: "w-8 h-8 md:w-10 md:h-10",
    icon: "w-[13px] h-[13px] md:w-4 md:h-4",
  },
  md: {
    box: "w-10 h-10 md:w-12 md:h-12",
    icon: "w-[17px] h-[17px] md:w-5 md:h-5",
  },
  lg: {
    box: "w-12 h-12 md:w-14 md:h-14",
    icon: "w-5 h-5 md:w-6 md:h-6",
  },
} as const;

interface SocialLinksProps {
  size?: keyof typeof SIZES;
  /** Visual style: bordered circles (default) or filled chips with labels. */
  variant?: "circles" | "chips";
  /** Override the link set, e.g. to show WhatsApp first on the contact page. */
  links?: typeof socialLinks;
  className?: string;
}

export function SocialLinks({
  size = "md",
  variant = "circles",
  links = socialLinks,
  className,
}: SocialLinksProps) {
  const { box, icon } = SIZES[size];

  return (
    <ul className={cn("flex flex-wrap items-center gap-3 md:gap-4", className)}>
      {links.map(({ id, label, href }) => {
        const Icon = ICONS[id];
        const isExternal = href.startsWith("http");

        return (
          <li key={id}>
            <a
              href={href}
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={label}
              title={label}
              data-testid={`social-${id}`}
              className={cn(
                "flex items-center justify-center border border-border transition-all duration-300",
                variant === "circles"
                  ? "rounded-full bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  : "gap-2 rounded-full bg-card px-4 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground hover:border-primary",
                variant === "circles" && box
              )}
            >
              <Icon className={variant === "circles" ? icon : "w-4 h-4"} aria-hidden="true" />
              {variant === "chips" && <span>{label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
