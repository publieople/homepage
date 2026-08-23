"use client";

import { cn } from "@/lib/utils";

export interface ScrollStackProps extends React.HTMLAttributes<HTMLElement> {
  /** Total viewport height (in dvh) for the stack, e.g. 300 for 3 pinned screens */
  height?: number;
  children: React.ReactNode;
}

/**
 * ScrollStack — full-page snap + sticky stacking.
 *
 * Wraps N full-screen children and makes each a sticky pinned layer that the
 * next one slides up to cover. The container uses CSS scroll-snap (y mandatory)
 * so each screen locks to the viewport; children carry their own
 * `sticky top-0 h-[100dvh] z-[i] snap-start` classes (set in each section).
 *
 * Zero new deps: Tailwind v4 provides snap-y / snap-mandatory / snap-start /
 * snap-stop-always utilities.
 */
export function ScrollStack({
  height = 300,
  className,
  children,
}: ScrollStackProps) {
  return (
    <section
      data-od-id="stack"
      className={cn(
        "relative snap-y snap-mandatory",
        className
      )}
      style={{ height: `${height}dvh` }}
      aria-label="Sections"
    >
      {children}
    </section>
  );
}

export default ScrollStack;
