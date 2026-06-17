"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  /** Magnetic pull strength (default 0.4) */
  strength?: number;
}

/**
 * Magnetic hover button.
 * The button gently follows the cursor when hovered,
 * creating a subtle magnetic pull effect.
 * Uses motion values outside React render cycle (Section 3.B compliant).
 */
export function MagneticButton({
  children,
  className,
  strength = 0.4,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const translateX = useTransform(springX, [-1, 1], [-strength * 12, strength * 12]);
  const translateY = useTransform(springY, [-1, 1], [-strength * 8, strength * 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(cx * 2);
    y.set(cy * 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: translateX, y: translateY }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
