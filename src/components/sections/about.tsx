"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CardContainer, CardBody } from "@/components/ui/3d-card";

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
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid sm:grid-cols-3 gap-4"
        >
          {[
            {
              label: "通识分享企划",
              desc: "非盈利内容企划，8人团队，每两周一篇深度文章",
              href: "https://blog.for-people.cn/",
            },
            {
              label: "电脑高手速成班",
              desc: "结构化技术教程，让新手也能成为高手",
              href: "https://www.notion.so/1a966ad7c9c483cf839081223d50a9fd",
            },
            {
              label: "Vibe Coding",
              desc: "用 AI 辅助开发的实践者，追求效率与实用",
              href: "https://github.com/publieople",
            },
          ].map((item, i) => (
            <CardContainer key={item.label} containerClassName="!p-0 w-full" className="w-full">
              <CardBody className="h-full w-full p-0">
                <a href={item.href} target="_blank" rel="noreferrer">
                  <Card className="group border-border/60 hover:border-primary/30 transition-all duration-300 h-full cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay pointer-events-none" />
                    <CardContent className="p-6 relative">
                      <h3 className="text-sm font-[400] text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-xs font-[300] text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </CardBody>
            </CardContainer>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
