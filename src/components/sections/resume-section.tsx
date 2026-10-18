"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, GraduationCap, Briefcase, Wrench, Trophy } from "lucide-react";

const blocks = [
  {
    icon: GraduationCap,
    eyebrow: "education",
    title: "上海中侨职业技术大学",
    meta: "人工智能 · 本科 · 2024 — 至今",
    items: ["主修 机器学习 / 深度学习 / 计算机视觉 / NLP"],
  },
  {
    icon: Briefcase,
    eyebrow: "experience",
    title: "具身智能实验室 · 终端服务部",
    meta: "2024 — 至今",
    items: [
      "管 4×A10 GPU 推理集群（Ollama / vLLM / ComfyUI）",
      "规划「终端基础 + 现代 Web 全栈」培训课程",
      "把部门经验沉淀成可交付的知识库",
    ],
  },
  {
    icon: Wrench,
    eyebrow: "stack",
    title: "AI 工具链 / 全栈 / 运维",
    meta: "日常工具箱",
    items: [
      "Hermes Agent · OpenClaw · ComfyUI · Ollama · vLLM",
      "TypeScript · React · Vue · Tailwind · Next.js",
      "Docker · Linux · WSL · Notion API",
    ],
  },
  {
    icon: Trophy,
    eyebrow: "awards",
    title: "数学建模 · 金融科技",
    meta: "4 项 · 2024 — 2025",
    items: ["中青杯二等 · 五一建模二等", "数维杯三等 · 工行杯三等"],
  },
];

export function ResumeSection() {
  return (
    <section
      id="resume"
      data-od-id="resume"
      className="snap-screen relative flex flex-col justify-center px-6 py-24 md:py-0"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary/80 mb-4">
            /resume
          </p>
          <h2 className="text-3xl sm:text-4xl font-[300] tracking-[-0.02em] mb-3 text-foreground">
            简历
          </h2>
          <p className="text-sm font-[300] text-muted-foreground/60 max-w-md mx-auto">
            教育背景、工作经历、技术栈与竞赛获奖。
          </p>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {blocks.map((block, i) => (
            <motion.div
              key={block.eyebrow}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-xl border border-border bg-card/60 p-5 transition-colors duration-300 hover:border-primary/30"
            >
              <div className="flex items-center gap-2.5">
                <block.icon className="size-4 text-primary/70" />
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground/50">
                  {block.eyebrow}
                </span>
              </div>
              <h3 className="mt-3 text-sm font-[400] text-foreground">{block.title}</h3>
              <p className="mt-1 font-mono text-[10px] tracking-[0.06em] text-muted-foreground/50">
                {block.meta}
              </p>
              <ul className="mt-3 space-y-1.5">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-xs font-[300] leading-relaxed text-muted-foreground/70"
                  >
                    <span className="mt-[7px] size-1 shrink-0 rounded-full bg-primary/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg">
            <Link href="/resume">
              <FileText className="size-4 mr-2" />
              查看完整简历
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://visiky.github.io/resume?user=publieople"
              target="_blank"
              rel="noreferrer"
            >
              经典版
              <ExternalLink className="size-3 ml-2 opacity-60" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
