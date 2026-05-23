"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { CardContainer, CardBody } from "@/components/ui/3d-card";

const blogPosts = [
  {
    title: "操作系统安装",
    desc: "从零开始安装操作系统的完整指南，适合新手入门。",
    href: "https://www.notion.so/1a966ad7c9c4818f9093f020bee982de",
  },
  {
    title: "Notion~最好的笔记(?)软件",
    desc: "为什么 Notion 可能是最适合你的笔记工具，以及如何用好它。",
    href: "https://www.notion.so/Notion-13c66ad7c9c481a0a126de7b5136f0fa",
  },
  {
    title: "电脑高手速成班",
    desc: "结构化技术教程，带你从零开始成为电脑高手。",
    href: "https://www.notion.so/9ed66ad7c9c483cf839081223d50a9fd",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-28 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-[300] tracking-tight mb-2 text-foreground">
            精选文章
            <span className="block text-sm font-[400] text-muted-foreground mt-2 tracking-normal">
              Blog
            </span>
          </h2>
          <p className="text-sm font-[300] text-muted-foreground/60 mb-10">
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

        <div className="space-y-3">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <CardContainer containerClassName="!p-0 w-full" className="w-full">
                <CardBody className="w-full p-0">
                  <a href={post.href} target="_blank" rel="noreferrer">
                    <Card className="group border-border/60 hover:border-primary/30 transition-all duration-300 cursor-pointer relative overflow-hidden">
                      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay pointer-events-none" />
                      <CardContent className="p-5 flex items-center justify-between relative">
                        <div className="min-w-0">
                          <h3 className="text-sm font-[400] text-foreground group-hover:text-primary transition-colors truncate">
                            {post.title}
                          </h3>
                          <p className="text-xs font-[300] text-muted-foreground mt-1 line-clamp-1">
                            {post.desc}
                          </p>
                        </div>
                        <ArrowUpRight className="size-4 text-muted-foreground/40 group-hover:text-primary/60 transition-colors shrink-0 ml-4" />
                      </CardContent>
                    </Card>
                  </a>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
