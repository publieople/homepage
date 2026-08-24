"use client";

import { useState, useEffect, useRef } from "react";

const sections = [
  { id: "hero", label: "首页" },
  { id: "about", label: "关于" },
  { id: "projects", label: "项目" },
  { id: "blog", label: "文章" },
  { id: "resume", label: "简历" },
  { id: "contact", label: "联系" },
];

/** Maps the ScrollStack's covering-screen index (1-based) to its section id. */
const STACK_ORDER = ["hero", "about", "projects"];
const FLOW_IDS = ["blog", "resume", "contact"];

/**
 * Right-side section nav.
 *
 * The first three sections (hero/about/projects) live inside ScrollStack, which
 * pins each full-screen layer with sticky + escalating z-index. In that geometry
 * every pinned layer still *occupies* the viewport geometrically, so a plain
 * IntersectionObserver reports them all as "visible" and the nav never advances
 * past the first one. Instead we read the stack's own computed covering-screen
 * index (exposed as data-active on the stack element) for those three, and use
 * getBoundingClientRect() for the trailing flow sections.
 */
export function SectionNav() {
  const [active, setActive] = useState("hero");
  const prevActiveRef = useRef("hero");

  const vhMiddle = () => window.innerHeight * 0.4;

  const set = (id: string) => {
    if (prevActiveRef.current !== id) {
      prevActiveRef.current = id;
      setActive(id);
    }
  };

  useEffect(() => {
    const stack = document.querySelector('[data-od-id="stack"]');

    const getStackActive = () => {
      const idx = stack ? Number(stack.getAttribute("data-active") ?? "1") : 1;
      return STACK_ORDER[Math.min(STACK_ORDER.length - 1, Math.max(0, idx - 1))];
    };

    const update = () => {
      if (stack) {
        const r = stack.getBoundingClientRect();
        const stackEnd = r.top + window.scrollY + r.height;
        const y = window.scrollY;
        // While the sticky stack still covers the upper viewport, follow it.
        if (y + vhMiddle() < stackEnd) {
          set(getStackActive());
          return;
        }
      }

      // Trailing flow sections — pick the last one whose top crossed the line.
      let chosen: string | null = null;
      for (const id of FLOW_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rr = el.getBoundingClientRect();
        if (rr.top <= vhMiddle()) chosen = id;
      }
      if (chosen) set(chosen);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    // When the stack recomputes its covering screen it writes data-active;
    // reflect that into the nav without waiting for a scroll event.
    const mo = stack
      ? new MutationObserver(update)
      : null;
    if (stack) mo!.observe(stack, { attributes: true, attributeFilter: ["data-active"] });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      mo?.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex-col items-center gap-3 md:flex">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="group relative flex items-center justify-center"
          aria-label={`跳转到 ${label}`}
        >
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-muted/90 backdrop-blur px-2 py-1 text-[10px] font-[400] text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
            {label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === id
                ? "h-2.5 w-2.5 bg-primary shadow-[0_0_8px] shadow-primary/50"
                : "h-1.5 w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        </button>
      ))}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-border/30 to-transparent -z-10" />
    </nav>
  );
}
