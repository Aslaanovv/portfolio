/**
 * Single source of truth for contact details, social profiles and site-wide links.
 * Update a value here once and it propagates to the footer, contact page,
 * credentials page, error screens and structured data.
 */

/**
 * WhatsApp number in international format, digits only (e.g. "201234567890").
 *
 * Set it here, or provide VITE_WHATSAPP_NUMBER in .env / Vercel env vars.
 * Leave it empty ("") to hide the WhatsApp buttons everywhere.
 */
const WHATSAPP_NUMBER = (
  import.meta.env.VITE_WHATSAPP_NUMBER || ""
).replace(/\D/g, "");

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Aslaan, I found your portfolio and I'd like to talk about a project.";

export const site = {
  name: "Muhammad Aslaan",
  shortName: "Aslaan",
  role: "Product Designer & Frontend Engineer",
  tagline: "Turning complex ideas into products people use.",
  email: "mohamedaslaangit@gmail.com",
  location: "Giza, Egypt",
  availability: "Available for freelance work",
  availabilityNote: "Remote & Worldwide",
  url: "https://aslaansportfolio.vercel.app",
  githubRepo: "https://github.com/Aslaanovv/portfolio",
  githubIssues: "https://github.com/Aslaanovv/portfolio/issues/new",
  /** Static file served from /public. Replace the PDF and this keeps working. */
  cvUrl: "/muhammad-aslaan-cv.pdf",
  linkedin: "https://www.linkedin.com/in/muhammad-aslaan-a00015333",
  github: "https://github.com/Aslaanovv",
} as const;

export type SocialId = "linkedin" | "github" | "whatsapp" | "email";

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
}

/** Build a wa.me deep link, or null when no number is configured. */
export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string | null {
  if (!WHATSAPP_NUMBER) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappLink = whatsappUrl();

/**
 * Primary profiles, in display order. WhatsApp and email are included
 * automatically when they are available.
 */
export const socialLinks: SocialLink[] = [
  { id: "linkedin", label: "LinkedIn", href: site.linkedin },
  { id: "github", label: "GitHub", href: site.github },
  ...(whatsappLink
    ? [{ id: "whatsapp" as const, label: "WhatsApp", href: whatsappLink }]
    : []),
  { id: "email", label: "Email", href: `mailto:${site.email}` },
];
