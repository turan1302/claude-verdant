"use client";

import { GlassCard as LiquidGlassCard } from "@developer-hub/liquid-glass";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  cornerRadius?: number;
};

// Thin wrapper around @developer-hub/liquid-glass with VERDANT defaults.
// The `.verdant-glass` rules in globals.css stretch the card and add the tint.
export default function GlassCard({ children, className = "", cornerRadius = 28 }: GlassCardProps) {
  return (
    <LiquidGlassCard
      cornerRadius={cornerRadius}
      displacementScale={60}
      blurAmount={0.35}
      className={`verdant-glass w-full transition-transform duration-500 ease-out hover:-translate-y-1.5 ${className}`}
    >
      {children}
    </LiquidGlassCard>
  );
}
