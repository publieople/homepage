"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "通识分享企划",
    desc: "非盈利内容企划，致力于让通用知识触手可及。团队 8 人，保持每两周一篇的深度输出。",
    tags: ["内容创作", "团队管理"],
    href: "https://blog.for-people.cn/",
  },
  {
    title: "电脑高手速成班",
    desc: "面向新手的结构化技术教程系列。从工具使用到编程思维，帮助零基础学习者建立技术自信。",
    tags: ["教程", "技术写作"],
    href: "https://www.notion.so/1a966ad7c9c483cf839081223d50a9fd",
  },
  {
    title: "Publieople's Blog",
    desc: "个人博客，记录技术探索、工具推荐和项目心得。Notion 驱动，分享即收藏。",
    tags: ["博客", "Notion"],
    href: "https://blog.for-people.cn/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-muted/30">
      <div className="mx-auto max-w-4xl">
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

        <div className="grid sm:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <a href={project.href} target="_blank" rel="noreferrer">
                <Card className="group border-border/60 hover:border-primary/30 transition-all h-full cursor-pointer hover:shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px]">
                  <CardContent className="p-6 flex flex-col h-full">
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
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
