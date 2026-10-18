"use client";

import { motion } from "framer-motion";
import { StackScreen } from "@/components/sections/stack-screen";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { ShineBorder } from "@/components/ui/shine-border";

const projects = [
  {
    title: "通识分享企划",
    desc: "非盈利内容企划，致力于让通用知识触手可及。团队 8 人，保持每两周一篇的深度输出。",
    tags: ["内容创作", "团队管理", "NotionNext"],
    href: "https://blog.for-people.cn/",
    span: "md:col-span-2 md:row-span-2",
    gradient: true,
  },
  {
    title: "awesome-dsh-plugins",
    desc: "去噪的 DeepSeek Harness 插件注册表：开放数据、可筛选、持续同步。",
    tags: ["DSH 插件", "开放数据"],
    href: "https://dsh.works/awesome-dsh-plugins/",
    span: "md:col-span-1",
  },
  {
    title: "dsh-plugin-autoupdate",
    desc: "供应链感知的插件更新器：只升 release-age 放行的版本，apply 前自动快照、可回滚。",
    tags: ["DSH 插件", "TypeScript"],
    href: "https://github.com/publieople/dsh-plugin-autoupdate",
    span: "md:col-span-1",
  },
  {
    title: "dustshot",
    desc: "Wayland 原生截图、标注、OCR 与贴图工具，GTK 4 实现。",
    tags: ["Linux", "Python · GTK4"],
    href: "https://github.com/publieople/dustshot",
    span: "md:col-span-1",
  },
  {
    title: "design-museum",
    desc: "前端设计博物馆：30 条中英术语对照，参数可调，一键复制成给 AI 的设计需求。",
    tags: ["Next.js", "设计工具"],
    href: "https://publieople.github.io/design-museum/",
    span: "md:col-span-1",
  },
  {
    title: "终端服务部知识库",
    desc: "实验室部门站点：技术模块、项目实践与踩坑记录，持续更新。",
    tags: ["知识库", "技术写作"],
    href: "https://publieople.github.io/lab-terminal-service/",
    span: "md:col-span-1",
  },
];

export function Projects() {
  return (
    <section id="projects" data-od-index="3" data-od-id="projects" className="z-30 relative min-h-[100dvh] md:sticky md:top-0 md:h-[100dvh] md:overflow-hidden md:snap-start md:snap-always">
      <StackScreen index={3} label="/projects" veil>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary/80 mb-4">
            /projects
          </p>
          <div className="flex items-end justify-between gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-[300] tracking-[-0.02em] text-foreground">
              项目
            </h2>
            <a
              href="https://github.com/publieople?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-1.5 pb-1 font-mono text-[11px] tracking-[0.08em] text-muted-foreground/50 hover:text-primary transition-colors"
            >
              全部仓库
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          </div>
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
                className="h-full rounded-xl cursor-pointer border border-border bg-card"
                gradientColor="rgb(23 24 26)"
                gradientFrom="#7170ff"
                gradientTo="#5e6ad2"
              >
                <ShineBorder
                  shineColor="#7170ff"
                  borderWidth={1}
                  duration={10}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full"
                >
                  <div className="relative flex flex-col h-full">
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-base font-[400] text-foreground group-hover:text-primary transition-colors">
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
                            <span className="text-xs font-[400] text-primary">8人</span>
                            <span className="text-[10px] font-[300] text-muted-foreground/60">团队</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-[400] text-primary">14天/篇</span>
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
      </StackScreen>
    </section>
  );
}
