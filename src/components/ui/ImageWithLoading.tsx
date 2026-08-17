import { useState } from "react";
import { Skeleton } from "./skeleton";

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  loading?: "eager" | "lazy";
  onError?: () => void;
}

export function ImageWithLoading({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[4/3]",
  loading = "lazy",
  onError
}: ImageWithLoadingProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={onError}
      />
    </div>
  );
}
