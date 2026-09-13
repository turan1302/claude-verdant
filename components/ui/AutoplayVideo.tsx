"use client";

import { useEffect, useRef } from "react";

type AutoplayVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

// React doesn't always serialize `muted` to HTML, which blocks autoplay on iOS,
// so the property is set explicitly before calling play().
export default function AutoplayVideo({ src, poster, label, className }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      aria-label={label}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
