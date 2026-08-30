"use client";

import { createContext, useContext } from "react";
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
  /** Optional mono label (e.g. "/about"); kept for caller compatibility. */
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

export function StackScreen({ veil = false, className, children }: StackScreenProps) {
  return (
    <div className={cn("relative z-10 h-full w-full", className)}>
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

      {/* ── Content layer ── */}
      <div className="relative z-10 flex h-full w-full items-center px-6">{children}</div>
    </div>
  );
}

export default StackScreen;
