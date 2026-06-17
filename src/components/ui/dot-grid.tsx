"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface DotGridProps {
  className?: string;
  /** Grid spacing in px (default 32) */
  spacing?: number;
  /** Dot size in px (default 1.5) */
  dotSize?: number;
  /** Dot color (default var(--primary) / opacity) */
  color?: string;
  /** Base opacity of dots (default 0.15) */
  baseOpacity?: number;
}

/**
 * Dynamic dot grid background.
 * A subtle tech-grid pattern of dots at regular intervals,
 * with random per-dot opacity for a living, breathing feel.
 * Rendered via CSS background-image for zero JS overhead.
 */
export function DotGrid({
  className,
  spacing = 32,
  dotSize = 1.5,
  color = "var(--primary)",
  baseOpacity = 0.12,
}: DotGridProps) {
  const style = useMemo(() => {
    // Create a grid cell with one centered dot
    const dotColor = color.replace(")", ` / ${baseOpacity})`).replace("oklch(", "oklch(");
    // Use radial-gradient for a soft dot
    return {
      backgroundImage: `radial-gradient(circle, ${color} ${dotSize * 0.3}px, transparent ${dotSize * 0.3}px)`,
      backgroundSize: `${spacing}px ${spacing}px`,
      opacity: baseOpacity * 6, // compensate for tiny dots
      maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
    };
  }, [spacing, dotSize, color, baseOpacity]);

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={style}
      aria-hidden="true"
    />
  );
}
