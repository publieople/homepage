"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

export function ResumeSection() {
  return (
    <section id="resume" className="py-28 px-6 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-[300] tracking-tight mb-4 text-foreground">
            简历
            <span className="block text-sm font-[400] text-muted-foreground mt-2 tracking-normal">
              Resume
            </span>
          </h2>
          <p className="text-sm font-[300] text-muted-foreground max-w-md mx-auto mb-8">
            在线简历，包含我的教育背景、项目经历和技术能力。
          </p>
          <Button asChild size="lg">
            <a
              href="https://visiky.github.io/resume?user=publieople"
              target="_blank"
              rel="noreferrer"
            >
              <FileText className="size-4 mr-2" />
              查看简历
              <ExternalLink className="size-3 ml-2 opacity-60" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
