"use client";

import { useEffect } from "react";

/**
 * Keeps full-page snapping honest.
 *
 * CSS turns snapping on with `html[data-snap="on"]` (desktop, motion allowed).
 * Mandatory snapping is great until a screen's content is taller than the
 * viewport — then it traps the user at the section's top edge and the rest is
 * unreachable. So every .snap-screen is measured: if one does not fit, the page
 * switches to normal scrolling (html[data-snap="off"]), which also un-pins the
 * sticky stack and lets sections grow to their content height.
 */
export function SnapGuard() {
  useEffect(() => {
    const root = document.documentElement;

    const verify = () => {
      const vh = window.innerHeight;
      const tooShort = window.innerWidth < 768;
      const screens = Array.from(
        document.querySelectorAll<HTMLElement>(".snap-screen")
      );
      const overflows = screens.some((el) => el.scrollHeight > vh + 2);
      const next = tooShort || overflows ? "off" : "on";
      if (root.dataset.snap !== next) {
        root.dataset.snap = next;
        window.dispatchEvent(new CustomEvent("snapguard:change", { detail: next }));
      }
    };

    verify();

    // Content reflow (fonts, images, framer-motion reveals) can change heights.
    const observer = new ResizeObserver(verify);
    document.querySelectorAll<HTMLElement>(".snap-screen").forEach((el) => observer.observe(el));
    observer.observe(document.body);

    window.addEventListener("resize", verify, { passive: true });
    window.addEventListener("load", verify);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", verify);
      window.removeEventListener("load", verify);
    };
  }, []);

  return null;
}

export default SnapGuard;
