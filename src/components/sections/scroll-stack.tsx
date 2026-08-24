"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { StackIndexContext } from "@/components/sections/stack-screen";

export interface ScrollStackProps extends React.HTMLAttributes<HTMLElement> {
  /** Total viewport height (in dvh) for the stack. */
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
 * The current covering screen index is derived from each child's document
 * offsetTop vs. window scrollY (a child is "active" once its top edge has
 * sticky-pinned at the viewport top), and is provided to every StackScreen
 * through StackIndexContext. This is robust even when a covered page still
 * occupies the viewport geometrically.
 */
export function ScrollStack({
  height = 300,
  className,
  children,
}: ScrollStackProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const compute = () => {
      // NOTE: do NOT use each section's offsetTop here — sticky elements report
      // their *rendered* position in Chrome (e.g. hero's offsetTop jumps 0→900
      // once it pins), which corrupts the comparison. Instead derive the active
      // screen purely from scroll geometry: every screen is a full viewport
      // (100dvh), so the covering screen index is floor((scrollY - stackTop) /
      // sectionHeight) + 1, clamped between 1 and the number of screens.
      const kids = Array.from(el.children) as HTMLElement[];
      const stackDocTop = el.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = kids[0]?.offsetHeight || window.innerHeight;
      const y = window.scrollY;
      const raw = Math.floor((y - stackDocTop) / sectionHeight) + 1;
      const active = Math.min(kids.length, Math.max(1, raw));
      setCurrent(active);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    const t = window.setTimeout(compute, 250);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
      window.clearTimeout(t);
    };
  }, [children]);

  return (
    <section
      ref={sectionRef}
      data-od-id="stack"
      data-active={current}
      className={cn("relative snap-y snap-mandatory", className)}
      style={{ height: `${height}dvh` }}
      aria-label="Sections"
    >
      <StackIndexContext.Provider value={current}>
        {children}
      </StackIndexContext.Provider>
    </section>
  );
}

export default ScrollStack;
