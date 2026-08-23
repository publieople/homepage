"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    title: "操作系统安装",
    desc: "从零开始安装操作系统的完整指南，适合新手入门。",
    href: "https://www.notion.so/1a966ad7c9c4818f9093f020bee982de",
    meta: "教程",
    readTime: "~15 分钟",
  },
  {
    title: "Notion — 最好的笔记(?)软件",
    desc: "为什么 Notion 可能是最适合你的笔记工具，以及如何用好它。",
    href: "https://www.notion.so/Notion-13c66ad7c9c481a0a126de7b5136f0fa",
    meta: "工具推荐",
    readTime: "~10 分钟",
  },
  {
    title: "电脑高手速成班",
    desc: "结构化技术教程，带你从零开始成为电脑高手。",
    href: "https://www.notion.so/9ed66ad7c9c483cf839081223d50a9fd",
    meta: "系列教程",
    readTime: "持续更新",
  },
];

function BlogCard({
  post,
  index,
}: {
  post: (typeof blogPosts)[0];
  index: number;
}) {
  return (
    <motion.a
      href={post.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex-shrink-0 w-[280px] sm:w-[320px] snap-start"
    >
      <div className="relative h-full rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_0_1px] hover:shadow-primary/10">
        {/* Mono eyebrow header area — Linear style */}
        <div className="h-24 border-b border-border/40 bg-muted/40 flex items-start justify-between p-5">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary/80 mt-1">
            {post.meta}
          </span>
          <ArrowUpRight className="size-4 text-muted-foreground/30 transition-all duration-300 group-hover:text-primary/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        {/* Content area */}
        <div className="p-5 transition-all duration-300">
          <h3 className="text-sm font-[400] text-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h3>

          <div className="mt-2 space-y-2 overflow-hidden">
            <p className="text-xs font-[300] text-muted-foreground leading-relaxed transition-all duration-300 group-hover:translate-y-[-2px]">
              {post.desc}
            </p>
          </div>

          {/* Bottom row: read time */}
          <div className="mt-4 flex items-center justify-between border-t border-border/30 pt-3">
            <span className="font-mono text-[10px] font-[300] text-muted-foreground/60">
              {post.readTime}
            </span>
          </div>

          {/* Reading-time progress bar (decorative) */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted/50">
            <div className="h-full w-0 bg-primary/40 transition-all duration-700 group-hover:w-full" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function AllPostsCard() {
  return (
    <motion.a
      href="https://blog.for-people.cn/"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="group flex-shrink-0 w-[280px] sm:w-[200px] snap-start"
    >
      <div className="relative h-full rounded-xl border border-dashed border-border/50 bg-card/50 flex flex-col items-center justify-center gap-3 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-[0_0_0_1px] hover:shadow-primary/10">
        <div className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
          <ChevronRight className="size-5" />
        </div>
        <span className="text-xs font-[400] text-muted-foreground/60 group-hover:text-foreground transition-colors">
          查看全部文章
        </span>
      </div>
    </motion.a>
  );
}

export function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="blog" data-od-id="blog" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary/80 mb-4">
            /blog
          </p>
          <h2 className="text-3xl sm:text-4xl font-[300] tracking-[-0.02em] mb-2 text-foreground">
            精选文章
          </h2>
          <p className="text-sm font-[300] text-muted-foreground/60 mb-8">
            更多文章请访问{" "}
            <a
              href="https://blog.for-people.cn/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              blog.for-people.cn
            </a>
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll container — bleeds outside the max-w boundary */}
      <div className="relative px-6">
        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="ml-auto mr-10 mb-3 hidden sm:flex items-center justify-end gap-1.5 text-[10px] font-[300] text-muted-foreground/30"
        >
          <span>滚动浏览</span>
          <ChevronRight className="size-3 animate-pulse" />
        </motion.div>

        <div
          ref={sectionRef}
          className="flex gap-4 pb-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="shrink-0 w-[calc((100vw-48px-80px-16px)/2)] sm:w-[calc((100vw-48px-560px)/12)] hidden sm:block" />
          {blogPosts.map((post, i) => (
            <BlogCard key={post.title} post={post} index={i} />
          ))}
          <AllPostsCard />
          <div className="shrink-0 w-[calc((100vw-48px-80px-16px)/2)] sm:w-[calc((100vw-48px-560px)/12)] hidden sm:block" />
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

