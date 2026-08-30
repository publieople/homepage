"use client";

import { useState, useEffect, useRef } from "react";

/** Maps the ScrollStack's covering-screen index (1-based) to its section id. */
const STACK_ORDER = ["hero", "about", "projects"];
const FLOW_IDS = ["blog", "resume", "contact"];

/**
 * Returns the id of the currently-visible page section across the whole page.
 *
 * The first three sections (hero/about/projects) live inside a sticky ScrollStack
 * where every pinned layer still occupies the viewport, so a plain
 * IntersectionObserver reports them all as visible and never advances. Instead
 * we read the stack's own computed covering-screen index (exposed as
 * data-active) for those, and use getBoundingClientRect() for the trailing flow
 * sections.
 */
export function useActiveSection() {
  const [active, setActive] = useState("hero");
  const prev = useRef("hero");

  useEffect(() => {
    const stack = document.querySelector('[data-od-id="stack"]');
    const vhMiddle = () => window.innerHeight * 0.4;

    const getStackActive = () => {
      const idx = stack ? Number(stack.getAttribute("data-active") ?? "1") : 1;
      return STACK_ORDER[Math.min(STACK_ORDER.length - 1, Math.max(0, idx - 1))];
    };

    const getFlowActive = () => {
      let chosen: string | null = null;
      for (const id of FLOW_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= vhMiddle()) chosen = id;
      }
      return chosen ?? "hero";
    };

    const update = () => {
      let next = "hero";
      if (stack) {
        const r = stack.getBoundingClientRect();
        const stackEnd = r.top + window.scrollY + r.height;
        next =
          window.scrollY + vhMiddle() < stackEnd
            ? getStackActive()
            : getFlowActive();
      } else {
        next = getFlowActive();
      }
      if (prev.current !== next) {
        prev.current = next;
        setActive(next);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    // When the stack recomputes its covering screen it writes data-active;
    // reflect that into the label without waiting for a scroll event.
    const mo = stack ? new MutationObserver(update) : null;
    if (stack) {
      mo!.observe(stack, { attributes: true, attributeFilter: ["data-active"] });
    }

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      mo?.disconnect();
    };
  }, []);

  return active;
}
