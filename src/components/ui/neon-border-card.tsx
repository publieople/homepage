"use client";

import { cn } from "@/lib/utils";

interface NeonBorderCardProps {
  className?: string;
  children: React.ReactNode;
  /** Border glow color (default var(--primary)) */
  glowColor?: string;
  /** Whether to show glow on hover only (default true) */
  hoverOnly?: boolean;
}

/**
 * Neon gradient border card.
 * A subtle animated gradient border that intensifies on hover.
 * Uses conic-gradient for a rotating border effect.
 */
export function NeonBorderCard({
  className,
  children,
  glowColor,
  hoverOnly = true,
}: NeonBorderCardProps) {
  const color = glowColor ?? "var(--primary)";

  return (
    <div className={cn("group relative rounded-lg", className)}>
      {/* Animated border ring */}
      <div
        className={cn(
          "absolute -inset-[1px] rounded-lg opacity-0 transition-opacity duration-500",
          hoverOnly ? "group-hover:opacity-100" : "opacity-30 group-hover:opacity-70"
        )}
        style={{
          background: `conic-gradient(from 0deg, ${color}, transparent 40%, transparent 60%, ${color}, transparent)`,
          animation: "neon-spin 4s linear infinite",
          filter: "blur(6px)",
        }}
        aria-hidden="true"
      />

      {/* Sharp inner border */}
      <div
        className={cn(
          "absolute -inset-[1px] rounded-lg opacity-0 transition-opacity duration-500",
          hoverOnly ? "group-hover:opacity-60" : "opacity-40 group-hover:opacity-80"
        )}
        style={{
          background: `conic-gradient(from 0deg, ${color}, transparent 30%, transparent 70%, ${color})`,
          animation: "neon-spin 4s linear infinite",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 rounded-lg bg-card h-full">
        {children}
      </div>
    </div>
  );
}
