"use client";

import { useCallback, useRef } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { mode, setMode } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMode = useCallback(() => {
    const newMode = mode === "light" ? "dark" : "light";
    const button = buttonRef.current;
    if (!button) {
      setMode(newMode);
      return;
    }

    // Get position for clip-path origin
    const { top, left, width, height } = button.getBoundingClientRect();
    const cx = left + width / 2;
    const cy = top + height / 2;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const maxRadius = Math.hypot(
      Math.max(cx, viewportWidth - cx),
      Math.max(cy, viewportHeight - cy)
    );

    // Clip-path: start from button center, expand as a circle
    const clipFrom = `circle(0px at ${cx}px ${cy}px)`;
    const clipTo = `circle(${maxRadius}px at ${cx}px ${cy}px)`;

    if (typeof document.startViewTransition !== "function") {
      // Fallback for browsers without View Transitions API
      setMode(newMode);
      return;
    }

    // Set up CSS custom properties for the animation
    const root = document.documentElement;
    root.style.setProperty("--mode-vt-clip-from", clipFrom);
    root.style.setProperty("--mode-vt-duration", "500ms");

    const transition = document.startViewTransition(() => {
      flushSync(() => setMode(newMode));
    });

    // Cleanup after transition
    transition.finished.finally(() => {
      root.style.removeProperty("--mode-vt-clip-from");
      root.style.removeProperty("--mode-vt-duration");
    });

    // Animate the clip-path on the new root pseudo-element
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [clipFrom, clipTo],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          fill: "forwards",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  }, [mode, setMode]);

  return (
    <Button
      ref={buttonRef}
      variant="ghost"
      size="icon"
      onClick={toggleMode}
      className="size-8 rounded-md"
      aria-label={mode === "light" ? "切换到暗色模式" : "切换到亮色模式"}
    >
      {mode === "light" ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </Button>
  );
}
