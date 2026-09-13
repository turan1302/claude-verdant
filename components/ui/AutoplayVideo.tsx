"use client";

import { useEffect, useRef } from "react";

type AutoplayVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

// Plays only while near the viewport; with preload="none" the file isn't
// downloaded until then. React doesn't always serialize `muted` to HTML, which
// blocks autoplay on iOS, so the property is set explicitly before play().
export default function AutoplayVideo({ src, poster, label, className }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
