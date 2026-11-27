import raw from "./career.json";

export interface CareerRole {
  company: string;
  title: string;
  period: string;
  summary: string;
  /** Highlighted as the role currently held. */
  current?: boolean;
  /** Emphasised on the journey timeline (the studio). */
  highlight?: boolean;
}

export interface CareerChapter {
  id: string;
  title: string;
  intro: string;
  roles: CareerRole[];
}

export interface Education {
  title: string;
  school: string;
  period: string;
}

export interface Career {
  headline: string;
  yearsExperience: number;
  startYear: number;
  profile: string;
  chapters: CareerChapter[];
  education: Education[];
  languages: string;
}

/**
 * Canonical career data — mirrors the LinkedIn profile and feeds the
 * credentials page, the home stats and the generated CV PDF
 * (scripts/generate-cv.js reads the same JSON file).
 */
export const career = raw as Career;
