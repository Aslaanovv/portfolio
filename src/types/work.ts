/**
 * Work/Project type definitions
 */

export interface Work {
  slug: string;
  category: string;
  title: string;
  image: string;
  client: string;
  year: string;
  services: string;
  description1: string;
  description2: string;
  about: string;
  paragraph1: string;
  paragraph2: string;
  liveUrl?: string;
}
