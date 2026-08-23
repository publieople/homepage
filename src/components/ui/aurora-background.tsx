"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface AuroraSpot {
  color: string;
  size: number;
  base: [number, number];
  drift?: number;
  stiffness?: number;
  damping?: number;
  idle?: number;
}

export interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  spots?: AuroraSpot[];
  blur?: number;
  bindMouse?: boolean;
  className?: string;
}

export const DEFAULT_AURORA_SPOTS: AuroraSpot[] = [
  { color: "#7170ff", size: 440, base: [18, 22], drift: 0.9, stiffness: 55, damping: 24, idle: 11 },
  { color: "#38bdf8", size: 400, base: [80, 30], drift: 1.3, stiffness: 42, damping: 26, idle: 13 },
  { color: "#f472b6", size: 380, base: [54, 76], drift: 1.7, stiffness: 34, damping: 28, idle: 15 },
  { color: "#828fff", size: 320, base: [28, 80], drift: 0.6, stiffness: 72, damping: 20, idle: 9 },
];

/**
 * Aurora / Liquid Aurora background.
 * Several large heavily-blurred colored blobs that follow the pointer at
 * different speeds (each has its own spring). In dark mode they use
 * mix-blend-screen so overlaps brighten into a swirling mix; in light mode
 * they fall back to normal blending at lower opacity.
 * Respects prefers-reduced-motion (static slow drift, no pointer tracking).
 */
export function AuroraBackground({
  spots = DEFAULT_AURORA_SPOTS,
  blur = 96,
  bindMouse = true,
  className,
}: AuroraBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion() ?? false;

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const [active, setActive] = useState(false);

  const interactive = bindMouse && !prefersReduced;

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
    setActive(true);
  };

  const handlePointerLeave = () => {
    mx.set(0.5);
    my.set(0.5);
    setActive(false);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={interactive ? handlePointerMove : undefined}
      onPointerLeave={interactive ? handlePointerLeave : undefined}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none opacity-100 data-[mode=light]:opacity-50", className)}
      aria-hidden="true"
    >
      {spots.map((spot, i) => (
        <Blob
          key={i}
          spot={spot}
          blur={blur}
          mx={mx}
          my={my}
          active={active}
          interactive={interactive}
          prefersReduced={prefersReduced}
        />
      ))}
    </div>
  );
}

function Blob({
  spot,
  blur,
  mx,
  my,
  active,
  interactive,
  prefersReduced,
}: {
  spot: AuroraSpot;
  blur: number;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  active: boolean;
  interactive: boolean;
  prefersReduced: boolean;
}) {
  const [baseX, baseY] = spot.base;
  const drift = spot.drift ?? 1;

  const springX = useSpring(mx, { stiffness: spot.stiffness ?? 45, damping: spot.damping ?? 26 });
  const springY = useSpring(my, { stiffness: spot.stiffness ?? 45, damping: spot.damping ?? 26 });

  const opacity = prefersReduced ? 0.3 : active ? 0.82 : 0.5;
  const size = spot.size;

  if (!interactive) {
    return (
      <motion.div
        className="absolute mix-blend-normal data-[mode=dark]:mix-blend-screen"
        style={{
          width: size,
          height: size,
          filter: `blur(${blur}px)`,
          background: `radial-gradient(circle at 50% 50%, ${spot.color} 0%, transparent 70%)`,
          willChange: "transform",
          opacity,
        }}
        animate={{
          x: [0, 20 * drift, -14 * drift, 0],
          y: [0, -16 * drift, 10 * drift, 0],
        }}
        transition={{ duration: spot.idle ?? 12, repeat: Infinity, ease: "easeInOut" }}
      />
    );
  }

  const x = useTransform(springX, (v) => (v - 0.5) * 90 * drift + baseX - 50);
  const y = useTransform(springY, (v) => (v - 0.5) * 90 * drift + baseY - 50);

  return (
    <motion.div
      className="absolute mix-blend-normal data-[mode=dark]:mix-blend-screen"
      style={{
        width: size,
        height: size,
        left: baseX + "%",
        top: baseY + "%",
        marginLeft: -size / 2,
        marginTop: -size / 2,
        filter: `blur(${blur}px)`,
        background: `radial-gradient(circle at 50% 50%, ${spot.color} 0%, transparent 70%)`,
        willChange: "transform",
        opacity,
        x,
        y,
      }}
    />
  );
}

export default AuroraBackground;