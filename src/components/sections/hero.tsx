"use client";

import { motion } from "framer-motion";
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
import { Particles } from "@/components/ui/particles";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Particles background */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        color="#533afd"
        vx={0.1}
        vy={0.1}
      />

      {/* Gradient fade over particles for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background pointer-events-none" />

      <div className="relative z-10 text-center mx-auto max-w-2xl pt-20 pb-16">
        {/* Avatar + orbiting circles — always centered together */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative size-24 flex items-center justify-center mx-auto">
            {/* Orbiting tech stack — centered on this fixed-size container */}
            <div className="absolute pointer-events-none" style={{ left: 'calc(50% - 16px)', top: 'calc(50% - 16px)' }}>
              <div className="relative w-0 h-0">
                <OrbitingCircles
                  radius={140}
                  duration={20}
                  speed={1.2}
                  path={false}
                  iconSize={32}
                >
                  <HermesAgent size={32} className="text-primary/60" />
                  <Notion size={32} className="text-primary/60" />
                  <OpenClaw size={32} className="text-primary/60" />
                  <Github size={32} className="text-primary/60" />
                  <SiArchlinux size={32} color="currentColor" className="text-primary/60" />
                </OrbitingCircles>
                <OrbitingCircles
                  radius={220}
                  duration={28}
                  reverse
                  speed={0.8}
                  path={false}
                  iconSize={32}
                >
                  <ComfyUI size={32} className="text-muted-foreground/30" />
                  <SiDocker size={32} color="currentColor" className="text-muted-foreground/30" />
                  <AdobePhotoshopIcon className="size-8 text-muted-foreground/30" />
                  <QuickerIcon className="size-8 text-muted-foreground/30" />
                  <Terminal className="size-8 text-muted-foreground/30" />
                  <Globe className="size-8 text-muted-foreground/30" />
                </OrbitingCircles>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.08, rotate: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
            >
              <Avatar className="size-24 ring-2 ring-primary/20 ring-offset-4 ring-offset-background transition-shadow duration-300 hover:ring-primary/50 hover:shadow-[0_0_30px_-5px] hover:shadow-primary/30">
                <AvatarImage src="/avatar.jpg" alt="人民公仆" />
                <AvatarFallback>PP</AvatarFallback>
              </Avatar>
            </motion.div>
          </div>
        </motion.div>

        {/* Gradient Name Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-[300] tracking-tight leading-[1.1] text-foreground"
            style={{ letterSpacing: "-0.03em" }}
          >
            人民公仆
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl font-[300] text-muted-foreground mt-2"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          /publieople/
        </motion.p>

        {/* Tagline with typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-2 text-sm font-[300] text-muted-foreground/60"
        >
          实用 &gt; 纯粹 · 效率 &gt; 完美 · 分享 &gt; 私藏
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild>
            <a href="#about">
              <BookOpen className="size-4 mr-2" />
              关于我
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/publieople" target="_blank" rel="noreferrer">
              <GithubIcon className="size-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="https://blog.for-people.cn/" target="_blank" rel="noreferrer">
              <FileText className="size-4 mr-2" />
              博客
            </a>
          </Button>
        </motion.div>

        {/* Scroll indicator with pulse ring */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors"
          >
            <span className="text-xs font-[400] tracking-wider uppercase">
              向下滚动
            </span>
            <div className="relative">
              <div className="absolute inset-0 rounded-full animate-ping bg-primary/20" />
              <ArrowDown className="relative size-4 animate-bounce" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
