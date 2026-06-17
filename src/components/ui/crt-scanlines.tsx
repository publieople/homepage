"use client";

import { cn } from "@/lib/utils";

interface CrtScanlinesProps {
  className?: string;
  /** Scanline spacing in px (default 4) */
  spacing?: number;
  /** Opacity of scanlines (default 0.03) */
  opacity?: number;
  /** Whether to add a subtle screen flicker (default true) */
  flicker?: boolean;
}

/**
 * CRT scanline overlay — subtle repeating horizontal lines
 * with optional screen flicker for a retro-tech aesthetic.
 * Place as a fixed full-screen overlay with pointer-events-none.
 */
export function CrtScanlines({
  className,
  spacing = 4,
  opacity = 0.03,
  flicker = true,
}: CrtScanlinesProps) {
  return (
    <div
      className={cn("fixed inset-0 z-50 pointer-events-none", className)}
      aria-hidden="true"
    >
      {/* Scanlines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent ${spacing - 1}px, rgba(0,0,0,${opacity}) ${spacing - 1}px, rgba(0,0,0,${opacity}) ${spacing}px)`,
        }}
      />

      {/* Screen edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* Flicker animation */}
      {flicker && (
        <div
          className="absolute inset-0"
          style={{
            animation: "crt-flicker 0.15s infinite",
            opacity: 0.02,
            background: "white",
          }}
        />
      )}
    </div>
  );
}
