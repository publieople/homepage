"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDown, BookOpen, FileText, Terminal, Globe } from "lucide-react";
import { GithubIcon } from "@/components/sections/github-icon";
import {
  HermesAgent,
  Notion,
  OpenClaw,
  Github,
  ComfyUI,
} from "@lobehub/icons";
import { SiArchlinux, SiDocker } from "@icons-pack/react-simple-icons";
import { QuickerIcon } from "@/components/sections/quicker-icon";
import { AdobePhotoshopIcon } from "@/components/sections/adobe-photoshop-icon";
import { DotGrid } from "@/components/ui/dot-grid";
import { CrtScanlines } from "@/components/ui/crt-scanlines";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // ── Scroll parallax ──────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7],
    [1, 1, 0]
  );
  const contentY = useTransform(scrollYProgress, [0, 0.7], [0, -60]);

  // ── Mouse parallax for orbiting circles ───────────────
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    },
    []
  );
  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-6"
    >
      {/* ── Dynamic dot grid background ── */}
      <DotGrid spacing={28} dotSize={1.8} baseOpacity={0.15} />

      {/* ── CRT scanline overlay ── */}
      <CrtScanlines spacing={3} opacity={0.04} flicker />

      {/* ── Ambient glow behind avatar ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 rounded-full animate-glow-pulse"
          style={
            {
              background:
                "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
              opacity: 0.08,
              filter: "blur(60px)",
              "--glow-color": "var(--primary)",
            } as React.CSSProperties
          }
        />
      </div>

      {/* ── Gradient fade for content readability ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background pointer-events-none" />

      {/* ── Scroll-parallax content container ── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 text-center mx-auto max-w-2xl pt-20 pb-16"
      >
        {/* ─── Avatar + Orbiting Circles ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative size-24 flex items-center justify-center mx-auto">
            {/* Orbiting tech stack with subtle mouse parallax */}
            <div
              className="absolute pointer-events-none"
              style={{
                left: "calc(50% - 16px)",
                top: "calc(50% - 16px)",
              }}
            >
              {/* Outer layer: very gentle mouse-driven wobble */}
              <motion.div
                className="relative w-0 h-0"
                animate={{
                  rotateX: mousePos.y * -3,
                  rotateY: mousePos.x * 3,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Inner layer: base 3D perspective tilt (always on) */}
                <div
                  style={{
                    transform: "rotate3d(1, 1, 0, 55deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Inner orbit ring glow */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      width: 280,
                      height: 280,
                      borderRadius: "50%",
                      border: "1px solid",
                      borderColor: "var(--primary)",
                      opacity: 0.06,
                      filter: "blur(1px)",
                    }}
                  />

                  <OrbitingCircles
                    radius={140}
                    duration={20}
                    speed={1.2}
                    path={false}
                    iconSize={32}
                    ring
                  >
                    <HermesAgent size={32} className="text-primary/60" />
                    <Notion size={32} className="text-primary/60" />
                    <OpenClaw size={32} className="text-primary/60" />
                    <Github size={32} className="text-primary/60" />
                    <SiArchlinux
                      size={32}
                      color="currentColor"
                      className="text-primary/60"
                    />
                  </OrbitingCircles>

                  {/* Outer orbit ring glow */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      width: 440,
                      height: 440,
                      borderRadius: "50%",
                      border: "1px solid",
                      borderColor: "var(--muted-foreground)",
                      opacity: 0.04,
                      filter: "blur(1px)",
                    }}
                  />

                  <OrbitingCircles
                    radius={220}
                    duration={28}
                    reverse
                    speed={0.8}
                    path={false}
                    iconSize={32}
                    ring
                  >
                    <ComfyUI size={32} className="text-muted-foreground/30" />
                    <SiDocker
                      size={32}
                      color="currentColor"
                      className="text-muted-foreground/30"
                    />
                    <AdobePhotoshopIcon className="size-8 text-muted-foreground/30" />
                    <QuickerIcon className="size-8 text-muted-foreground/30" />
                    <Terminal className="size-8 text-muted-foreground/30" />
                    <Globe className="size-8 text-muted-foreground/30" />
                  </OrbitingCircles>
                </div>
              </motion.div>
            </div>

            {/* Avatar — hover spring + glow ring */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
              className="relative"
            >
              {/* Glow ring behind avatar */}
              <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Avatar className="size-24 ring-2 ring-primary/20 ring-offset-4 ring-offset-background transition-shadow duration-300 hover:ring-primary/50 hover:shadow-[0_0_40px_-5px] hover:shadow-primary/40">
                <AvatarImage src="/avatar.jpg" alt="人民公仆" />
                <AvatarFallback>PP</AvatarFallback>
              </Avatar>
            </motion.div>
          </div>
        </motion.div>

        {/* ─── Title with glow pulse ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-[300] tracking-tight leading-[1.1] text-foreground animate-glow-pulse"
            style={
              {
                letterSpacing: "-0.03em",
                "--glow-color": "var(--primary)",
              } as React.CSSProperties
            }
          >
            人民公仆
          </h1>
        </motion.div>

        {/* ─── Subtitle ─── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="text-lg sm:text-xl font-[300] text-muted-foreground mt-2"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          /publieople/
        </motion.p>

        {/* ─── Tagline typewriter ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <TypingAnimation
            className="mt-6 text-base sm:text-lg font-[300] text-muted-foreground leading-relaxed mx-auto block text-center"
            words={["大学生", "内容创作者", "Vibe Coder"]}
            duration={120}
            pauseDelay={2000}
            loop={true}
            startOnView={false}
            showCursor={true}
            cursorStyle="line"
          />
        </motion.div>

        {/* ─── Motto ─── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-2 text-sm font-[300] text-muted-foreground/60"
        >
          实用 &gt; 纯粹 · 效率 &gt; 完美 · 分享 &gt; 私藏
        </motion.p>

        {/* ─── CTA Buttons with magnetic hover ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton>
            <Button asChild>
              <a href="#about">
                <BookOpen className="size-4 mr-2" />
                关于我
              </a>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/publieople"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon className="size-4 mr-2" />
                GitHub
              </a>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button variant="ghost" asChild>
              <a
                href="https://blog.for-people.cn/"
                target="_blank"
                rel="noreferrer"
              >
                <FileText className="size-4 mr-2" />
                博客
              </a>
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
