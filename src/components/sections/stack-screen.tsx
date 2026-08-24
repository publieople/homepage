"use client";

import { createContext, useContext } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Context that carries the index (1-based) of the currently-covering top screen,
 * computed by ScrollStack from the sticky sections' scroll geometry. A page is
 * "active" when it has sticky-pinned to the viewport top and is the current
 * cover (the highest z-index screen that is occupied). This avoids the
 * IntersectionObserver pitfall where a covered page still reports as in-view
 * because its geometry never left the viewport.
 */
export const StackIndexContext = createContext<number>(1);

export function useStackIndex() {
  return useContext(StackIndexContext);
}

export interface StackScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 1-based page number, displayed as 01/02/03. */
  index: number;
  /** Optional mono label (e.g. "/about"). */
  label?: string;
  /**
   * Whether to render the full-screen liquid-glass cover layer.
   * The layer is semi-transparent + blurred at the top so the previous pinned
   * page bleeds through while this page slides up to cover it — the "liquid
   * glass" swell. It fades to an opaque canvas below, so once fully covered
   * the page reads as a solid surface. Never touches position: sticky.
   */
  veil?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function StackScreen({
  index,
  label,
  veil = false,
  className,
  children,
}: StackScreenProps) {
  const current = useStackIndex();
  const isActive = index === current;

  return (
    <div className={cn("relative z-10 h-full", className)}>
      {veil && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 16%, color-mix(in oklab, var(--background) 72%, transparent) 46%, var(--background) 74%)",
            backdropFilter: "blur(18px) saturate(150%)",
            WebkitBackdropFilter: "blur(18px) saturate(150%)",
          }}
        />
      )}

      {/* ── Top glass title bar + page number + scanning light ── */}
      <div className="absolute top-0 inset-x-0 z-20 pointer-events-none">
        <div className="flex items-center justify-between px-8 pt-5">
          <span
            className={cn(
              "font-mono text-[11px] tracking-[0.22em] uppercase transition-colors duration-500",
              isActive ? "text-foreground/80" : "text-muted-foreground/50"
            )}
          >
            {label}
          </span>
          <span
            className={cn(
              "font-mono text-[11px] tracking-[0.22em] tabular-nums transition-all duration-500",
              isActive
                ? "text-primary drop-shadow-[0_0_8px_rgba(113,112,255,0.55)]"
                : "text-muted-foreground/50"
            )}
          >
            {String(index).padStart(2, "0")}
          </span>
        </div>
        <div className="relative mt-3 mx-8 h-px overflow-hidden bg-border/40">
          <motion.span
            className="absolute inset-y-0 w-1/3"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--primary), transparent)",
            }}
            animate={isActive ? { x: ["-100%", "300%"] } : { x: "-100%" }}
            transition={
              isActive
                ? { x: { duration: 2.2, repeat: Infinity, ease: "easeInOut" } }
                : { duration: 0.3 }
            }
          />
        </div>
      </div>

      {/* ── Content layer ── */}
      <div className="relative z-10 flex h-full items-center">{children}</div>
    </div>
  );
}

export default StackScreen;
