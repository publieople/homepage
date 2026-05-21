"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDown, BookOpen, FileText } from "lucide-react";
import { GithubIcon } from "@/components/sections/github-icon";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-6"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="relative text-center max-w-2xl mx-auto pt-20 pb-16">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Avatar className="size-24 mx-auto ring-2 ring-primary/20 ring-offset-4 ring-offset-background">
            <AvatarImage src="/avatar.jpg" alt="人民公仆" />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-[300] tracking-tight leading-[1.1] text-foreground"
          style={{ letterSpacing: "-0.03em" }}
        >
          人民公仆
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl font-[300] text-muted-foreground mt-2"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          /publieople/
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg font-[300] text-muted-foreground leading-relaxed max-w-lg mx-auto"
        >
          大学生 · 内容创作者 · Vibe Coder
        </motion.p>

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

        {/* Scroll indicator */}
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
            <ArrowDown className="size-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
