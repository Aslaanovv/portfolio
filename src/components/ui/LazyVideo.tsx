import { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

/**
 * Lazy-loading video component that only loads the video source
 * when the element is in view, improving page load performance.
 */
export function LazyVideo({
  src,
  poster,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            setIsInView(true);
            setIsLoaded(true);
          }
        });
      },
      {
        // Start loading when video is 100px from viewport
        rootMargin: '100px',
        threshold: 0.1,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [isLoaded]);

  useEffect(() => {
    // Only start autoplay when video is loaded and in view
    const video = videoRef.current;
    if (video && isInView && isLoaded && autoPlay) {
      video.play().catch((err) => {
        // Auto-play was prevented, user interaction required
        console.debug('Video autoplay prevented:', err);
      });
    }
  }, [isInView, isLoaded, autoPlay]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      // Don't preload the video until we need it
      preload={isLoaded ? 'auto' : 'none'}
      // Only set src when in view
      src={isLoaded ? src : undefined}
    />
  );
}
