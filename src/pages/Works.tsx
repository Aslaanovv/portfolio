import { Seo } from "@/components/ui/Seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { works } from "@/data/works";

export default function Works() {
  const featured = works.slice(0, 2);

  return (
    <>
      <Seo title="Works" />
      <div className="container mx-auto px-4 md:px-8">

        {/* Featured Projects */}
        <SectionHeading title="FEATURED PROJECTS" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-24 max-w-7xl mx-auto">
          {featured.map((work, idx) => (
            <ProjectCard key={`featured-${work.slug}`} {...work} index={idx} />
          ))}
        </div>

        <SectionHeading title="ALL PROJECTS" />

        {/* All projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto mb-16 md:mb-20">
          {works.map((work, idx) => (
            <ProjectCard key={work.slug} {...work} index={idx} />
          ))}
        </div>

      </div>
    </>
  );
}
