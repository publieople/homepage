"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { StackIndexContext } from "@/components/sections/stack-screen";

export interface ScrollStackProps extends React.HTMLAttributes<HTMLElement> {
  /** Number of full-viewport screens inside the stack. */
  height?: number;
  children: React.ReactNode;
}

/**
 * ScrollStack — the sticky "cover" group of the first screens.
 *
 * Height, sticky pinning and scroll-snap all live in globals.css under
 * `html[data-snap="on"]`, because the document is the real scroll container:
 * snap declared on this wrapper (overflow: visible) silently did nothing.
 *
 * The covering screen index is derived from scroll geometry and published on
 * the element as data-active; StackScreen and useActiveSection read it.
 */
export function ScrollStack({
  height = 3,
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
      // their *rendered* position in Chrome, which corrupts the comparison.
      // Every screen is one viewport tall (100dvh), so the covering screen is
      // floor(scrollY - stackTop) / screenHeight) + 1.
      const kids = Array.from(
        el.querySelectorAll<HTMLElement>(":scope > .snap-screen"),
      );
      if (window.innerWidth < 768) {
        const mid = window.innerHeight / 2;
        let active = 1;
        kids.forEach((kid, i) => {
          if (kid.getBoundingClientRect().top <= mid) active = i + 1;
        });
        setCurrent(Math.min(kids.length, active));
        return;
      }
      const stackDocTop = el.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = kids[0]?.offsetHeight || window.innerHeight;
      const y = window.scrollY;
      const raw = Math.floor((y - stackDocTop) / sectionHeight) + 1;
      setCurrent(Math.min(kids.length, Math.max(1, raw)));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    window.addEventListener("snapguard:change", compute);
    const t = window.setTimeout(compute, 250);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
      window.removeEventListener("snapguard:change", compute);
      window.clearTimeout(t);
    };
  }, [children]);

  return (
    <section
      ref={sectionRef}
      data-od-id="stack"
      data-active={current}
      className={cn("snap-stack relative", className)}
      style={{ "--snap-screens": height } as CSSProperties}
      aria-label="Sections"
    >
      {/* Invisible, non-sticky snap targets. Sticky screens all collapse onto
          the same visual position once pinned, and Chrome computes their snap
          areas from that position — scrolling back up then had nothing to
          catch (the three stack screens merged into one snap point). These
          1px markers sit in the stack's own layout flow instead. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: height }).map((_, i) => (
          <span
            key={i}
            className="snap-marker"
            style={{ top: `${(i * 100) / height}%` }}
          />
        ))}
      </div>
      <StackIndexContext.Provider value={current}>
        {children}
      </StackIndexContext.Provider>
    </section>
  );
}

export default ScrollStack;
