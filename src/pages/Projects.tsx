import { useState } from "react";
import { Seo } from "@/components/ui/Seo";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectFilter, FilterType, matchesFilter } from "@/components/ui/ProjectFilter";
import { works } from "@/data/works";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Filter projects based on selected filter
  const filteredWorks = works.filter(work =>
    matchesFilter(work.category, activeFilter)
  );

  return (
    <>
      <Seo
        title="Selected Work | Muhammad Aslaan"
        description="Selected work featuring product design, frontend development, and branding projects. From independent products to enterprise implementations."
      />
      <div className="container mx-auto px-4 md:px-8">

        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 md:mb-8 tracking-tight">
            Selected Work
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects spanning product design, frontend development, and branding. From concept to shipped code.
          </p>
        </div>

        {/* Filter Bar */}
        <ProjectFilter
          currentFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Results count */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground">
            Showing {filteredWorks.length} project{filteredWorks.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* All projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto mb-16 md:mb-20">
          {filteredWorks.length > 0 ? (
            filteredWorks.map((work, idx) => (
              <ProjectCard key={work.slug} {...work} index={idx} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-muted-foreground">No projects found for this filter.</p>
            </div>
          )}
        </div>

      </div>
    </>
  );
}
