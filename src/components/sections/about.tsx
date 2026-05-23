"use client";

import { motion } from "framer-motion";
import { MagicCard } from "@/components/ui/magic-card";

const facts = [
  { emoji: "🎂", label: "19岁" },
  { emoji: "📍", label: "中国" },
  { emoji: "🎓", label: "大学生" },
  { emoji: "📝", label: "20+篇文章" },
  { emoji: "👥", label: "8人团队" },
];

const highlights = [
  {
    emoji: "🚀",
    label: "通识分享企划",
    desc: "非盈利内容企划，8人团队，每两周一篇深度文章",
    href: "https://blog.for-people.cn/",
  },
  {
    emoji: "🧰",
    label: "电脑高手速成班",
    desc: "结构化技术教程，让新手也能成为高手",
    href: "https://www.notion.so/1a966ad7c9c483cf839081223d50a9fd",
  },
  {
    emoji: "🤖",
    label: "Vibe Coding",
    desc: "用 AI 辅助开发的实践者，追求效率与实用",
    href: "https://github.com/publieople",
  },
];

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-[300] tracking-tight mb-8 text-foreground">
            关于
            <span className="block text-sm font-[400] text-muted-foreground mt-2 tracking-normal">
              About
            </span>
          </h2>

          <div className="space-y-6 text-base font-[300] text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              你好，我是人民公仆（Publieople），一名大学生。我相信好的内容和技术应当是每个人都能
              触及的，这也是我做一切事情的出发点。
            </p>
          </div>

          {/* Quick facts bar */}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {facts.map((fact) => (
              <span
                key={fact.label}
                className="inline-flex items-center gap-1.5 text-xs font-[400] text-muted-foreground/70"
              >
                <span>{fact.emoji}</span>
                <span>{fact.label}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid sm:grid-cols-3 gap-4"
        >
          {highlights.map((item) => (
            <MagicCard
              key={item.label}
              className="rounded-2xl cursor-pointer"
              gradientColor="#262626"
              gradientFrom="#9E7AFF"
              gradientTo="#FE8BBB"
            >
              <a href={item.href} target="_blank" rel="noreferrer" className="block h-full">
                <div className="p-5">
                  <span className="text-xl mb-2 block leading-none">{item.emoji}</span>
                  <h3 className="text-sm font-[500] text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs font-[300] text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </a>
            </MagicCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
