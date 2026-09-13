"use client";

import type { ImageLoaderProps } from "next/image";

// Unsplash (imgix) resizes and picks AVIF/WebP on its own CDN, so images skip
// Vercel's optimizer (and its Hobby quota) and arrive at the exact srcset width.
export default function unsplashLoader({ src, width, quality }: ImageLoaderProps) {
  const url = new URL(src);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 70));
  return url.toString();
}
