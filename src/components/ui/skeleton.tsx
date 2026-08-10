import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-primary/10', className)}
      {...props}
    />
  );
}

// Image skeleton with shimmer effect for better loading UX
export function ImageSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn('relative overflow-hidden bg-primary/10 rounded-xl', className)}>
      <div className="absolute inset-0 animate-shimmer">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full" />
      </div>
    </div>
  );
}

export { Skeleton };
