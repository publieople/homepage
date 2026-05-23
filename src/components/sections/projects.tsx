"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { CardContainer, CardBody } from "@/components/ui/3d-card";

const projects = [
  {
    title: "通识分享企划",
    desc: "非盈利内容企划，致力于让通用知识触手可及。团队 8 人，保持每两周一篇的深度输出。",
    tags: ["内容创作", "团队管理"],
    href: "https://blog.for-people.cn/",
    span: "md:col-span-2 md:row-span-2",
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
              <CardContainer
                containerClassName="!p-0 h-full w-full"
                className="h-full w-full"
              >
                <CardBody className="h-full w-full p-0">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block h-full"
                  >
                    <div
                      className={cn(
                        "relative flex flex-col h-full rounded-xl overflow-hidden",
                        "bg-card border border-border/60",
                        "transition-all duration-300",
                        "hover:shadow-[0_0_25px_-3px] hover:shadow-primary/20 hover:border-primary/30"
                      )}
                    >
                      {/* Noise texture overlay */}
                      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay pointer-events-none" />

                      <div className="relative p-6 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-base font-[400] text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <ArrowUpRight className="size-4 text-muted-foreground/40 group-hover:text-primary/60 transition-colors shrink-0 mt-0.5" />
                        </div>
                        <p className="text-sm font-[300] text-muted-foreground leading-relaxed flex-1">
                          {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
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
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
