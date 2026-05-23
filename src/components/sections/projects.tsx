"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

const projects = [
  {
    title: "通识分享企划",
    desc: "非盈利内容企划，致力于让通用知识触手可及。团队 8 人，保持每两周一篇的深度输出。",
    tags: ["内容创作", "团队管理"],
    href: "https://blog.for-people.cn/",
    span: "md:col-span-2 md:row-span-2",
    gradient: true,
  },
  {
    title: "电脑高手速成班",
    desc: "面向新手的结构化技术教程系列。从工具使用到编程思维，帮助零基础学习者建立技术自信。",
    tags: ["教程", "技术写作"],
    href: "https://www.notion.so/1a966ad7c9c483cf839081223d50a9fd",
    span: "md:col-span-1",
  },
  {
    title: "Publieople's Blog",
    desc: "个人博客，记录技术探索、工具推荐和项目心得。Notion 驱动，分享即收藏。",
    tags: ["博客", "Notion"],
    href: "https://blog.for-people.cn/",
    span: "md:col-span-1",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-[300] tracking-tight mb-12 text-foreground">
            项目
            <span className="block text-sm font-[400] text-muted-foreground mt-2 tracking-normal">
              Projects
            </span>
          </h2>
        </motion.div>

        <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-auto gap-4 md:gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={project.span}
            >
              <MagicCard
                className="h-full rounded-2xl cursor-pointer"
                gradientColor="#262626"
                gradientFrom="#9E7AFF"
                gradientTo="#FE8BBB"
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full"
                >
                  <div className="relative flex flex-col h-full">
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-base font-[500] text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="size-4 text-muted-foreground/40 group-hover:text-primary/60 transition-colors shrink-0 mt-0.5" />
                      </div>
                      <p className="text-sm font-[300] text-muted-foreground leading-relaxed flex-1">
                        {project.desc}
                      </p>

                      {/* Inline stats for the big card */}
                      {project.gradient && (
                        <div className="flex gap-4 mt-3 mb-3">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-[500] text-primary">8人</span>
                            <span className="text-[10px] font-[300] text-muted-foreground/60">团队</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-[500] text-primary">14天/篇</span>
                            <span className="text-[10px] font-[300] text-muted-foreground/60">频率</span>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mt-auto pt-3">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-[10px] font-[300] px-2 py-0.5"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </MagicCard>
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
