"use client";

import { cn } from "@/lib/utils";

interface NoiseOverlayProps {
  className?: string;
  /** Noise opacity (default 0.015) */
  opacity?: number;
}

/**
 * Global noise/grain texture overlay.
 * Renders a subtle film-grain effect across the entire page
 * using an SVG feTurbulence filter for organic texture.
 * Fixed position, pointer-events-none, respects reduced motion.
 */
export function NoiseOverlay({ className, opacity = 0.015 }: NoiseOverlayProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] pointer-events-none motion-safe:opacity-100 motion-reduce:opacity-0",
        className
      )}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-filter)" />
      </svg>
    </div>
  );
}
