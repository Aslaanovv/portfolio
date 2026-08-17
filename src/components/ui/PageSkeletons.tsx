import { Skeleton } from './skeleton';

/**
 * Skeleton for ProjectCard component - shows while lazy-loading project data
 */
export function ProjectCardSkeleton() {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden group">
      {/* Image skeleton */}
      <Skeleton className="aspect-[4/3] w-full" />

      {/* Content skeleton */}
      <div className="p-5 md:p-6 space-y-3">
        {/* Category badge */}
        <Skeleton className="h-3 w-24 rounded-full" />

        {/* Title */}
        <Skeleton className="h-6 w-3/4 rounded-lg" />

        {/* Description */}
        <Skeleton className="h-4 w-full rounded-lg" />
        <Skeleton className="h-4 w-2/3 rounded-lg" />

        {/* Meta row */}
        <div className="flex justify-between pt-2">
          <Skeleton className="h-4 w-16 rounded" />
          <Skeleton className="h-4 w-12 rounded" />
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton for a full page - shows while lazy-loading route components
 */
export function PageSkeleton() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      {/* Hero section skeleton */}
      <div className="max-w-3xl mx-auto mb-12 text-center space-y-4">
        <Skeleton className="h-8 w-48 mx-auto rounded-lg" />
        <Skeleton className="h-12 w-3/4 mx-auto rounded-lg" />
        <Skeleton className="h-6 w-full mx-auto rounded-lg" />
      </div>

      {/* Content grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} className="aspect-[4/3] rounded-2xl" />
        ))}
      </div>
    </div>
  );
}

/**
 * Skeleton for case study page - shows premium loading state
 */
export function CaseStudySkeleton() {
  return (
    <div className="w-full">
      {/* Hero skeleton */}
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <Skeleton className="h-6 w-64 mx-auto rounded-full" />
          <Skeleton className="h-24 w-96 mx-auto rounded-2xl" />
          <Skeleton className="h-6 w-48 mx-auto rounded-lg" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container mx-auto px-4 md:px-8 py-24 max-w-6xl space-y-16">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-8 w-32 rounded-lg" />
            <Skeleton className="h-12 w-3/4 rounded-xl" />
            <Skeleton className="h-6 w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Skeleton for credentials page - shows while loading profile info
 */
export function CredentialsSkeleton() {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
        {/* Profile sidebar skeleton */}
        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-2xl p-6 text-center space-y-4">
            <Skeleton className="w-32 h-32 mx-auto rounded-full" />
            <Skeleton className="h-6 w-32 mx-auto rounded-lg" />
            <Skeleton className="h-4 w-24 mx-auto rounded" />
            <div className="flex justify-center gap-3">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="w-10 h-10 rounded-full" />
              ))}
            </div>
          </div>
        </div>

        {/* Content skeleton */}
        <div className="lg:col-span-2 space-y-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-8 w-40 rounded-lg" />
              <Skeleton className="h-5 w-full rounded" />
              <Skeleton className="h-5 w-5/6 rounded" />
              <Skeleton className="h-5 w-4/5 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton for contact page - shows while loading form
 */
export function ContactSkeleton() {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
        {/* Info column skeleton */}
        <div className="lg:col-span-1 space-y-4">
          <Skeleton className="h-6 w-32 rounded-lg" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6 flex gap-4">
              <Skeleton className="w-12 h-12 rounded-xl shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-24 rounded" />
                <Skeleton className="h-3 w-full rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* Form skeleton */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <Skeleton className="h-10 w-2/3 rounded-lg" />
            <Skeleton className="h-6 w-full rounded" />
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-12 rounded-lg" />
              <Skeleton className="h-12 rounded-lg" />
            </div>
            <Skeleton className="h-12 rounded-lg" />
            <Skeleton className="h-32 rounded-lg" />
            <Skeleton className="h-14 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton for service page
 */
export function ServiceSkeleton() {
  return (
    <div className="container mx-auto px-4 md:px-8">
      {/* Hero skeleton */}
      <div className="text-center mb-12 space-y-4">
        <Skeleton className="h-16 w-64 mx-auto rounded-lg" />
        <Skeleton className="h-6 w-full max-w-2xl mx-auto rounded" />
      </div>

      {/* Service cards skeleton */}
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 mb-16">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-card border border-border rounded-2xl p-6 flex gap-6">
            <Skeleton className="w-16 h-16 rounded-xl shrink-0" />
            <div className="flex-1 space-y-3">
              <Skeleton className="h-7 w-48 rounded-lg" />
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-5/6 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
