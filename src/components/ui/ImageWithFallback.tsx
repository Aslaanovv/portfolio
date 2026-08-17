import { useState } from 'react';
import { ImageWithLoading } from './ImageWithLoading';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  loading?: 'eager' | 'lazy';
}

/**
 * Image component that falls back to a placeholder if the source fails to load.
 * Useful for case studies where images may not be available yet.
 */
export function ImageWithFallback({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[16/9]',
  loading = 'lazy',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // Fallback placeholder
    return (
      <div
        className={`${aspectRatio} ${className} bg-muted/30 border border-border/50 flex items-center justify-center`}
      >
        <div className="text-center p-6">
          <p className="text-muted-foreground/50 text-sm">Image coming soon</p>
          <p className="text-muted-foreground/30 text-xs mt-1">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <ImageWithLoading
      src={src}
      alt={alt}
      className={className}
      aspectRatio={aspectRatio}
      loading={loading}
      onError={() => setHasError(true)}
    />
  );
}
