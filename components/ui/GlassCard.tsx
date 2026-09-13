"use client";

import { GlassCard as LiquidGlassCard } from "@developer-hub/liquid-glass";
import { DESKTOP_QUERY, useMediaQuery } from "@/lib/useMediaQuery";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  cornerRadius?: number;
};

// The liquid effect is an SVG displacement filter plus a backdrop blur that is
// repainted on the CPU whenever anything behind it moves. Phones and tablets
// can't keep up, so they get the same tinted surface without the refraction.
const LIQUID_QUERY = `${DESKTOP_QUERY} and (prefers-reduced-motion: no-preference)`;

// Thin wrapper around @developer-hub/liquid-glass with VERDANT defaults.
// The `.verdant-glass` rules in globals.css stretch the card and add the tint.
export default function GlassCard({ children, className = "", cornerRadius = 28 }: GlassCardProps) {
  const liquid = useMediaQuery(LIQUID_QUERY);
  const classes = `verdant-glass w-full transition-transform duration-500 ease-out hover:-translate-y-1.5 ${className}`;

  if (!liquid) {
    return (
      <div className={classes} style={{ borderRadius: cornerRadius }}>
        {children}
      </div>
    );
  }

  return (
    <LiquidGlassCard
      cornerRadius={cornerRadius}
      displacementScale={60}
      blurAmount={0.35}
      className={classes}
    >
      {children}
    </LiquidGlassCard>
  );
}
