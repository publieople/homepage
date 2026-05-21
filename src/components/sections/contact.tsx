"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/sections/github-icon";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/publieople",
    icon: GithubIcon,
    desc: "开源项目与代码",
  },
  {
    label: "B站",
    href: "https://space.bilibili.com/324858924",
    icon: () => (
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
        <path d="M17.813 4.653h.854c1.51.054 2.772.482 3.787 1.283.532.42.958.93 1.279 1.53.321.6.481 1.255.481 1.963v7.703c0 1.18-.418 2.188-1.256 3.028-.837.837-1.846 1.256-3.028 1.256h-14.86c-1.182 0-2.19-.42-3.027-1.256S0 18.132 0 16.951V9.248c0-1.182.418-2.191 1.256-3.028S3.103 5.09 4.285 5.09h.374l1.53-1.985a.895.895 0 01.715-.342.93.93 0 01.715.32l1.745 2.007h5.263l1.745-2.007a.93.93 0 01.715-.32.895.895 0 01.715.342l1.53 1.985h.481zM5.657 18.643h12.686c.588 0 1.09-.21 1.502-.628.416-.416.624-.917.624-1.502V9.303c0-.588-.208-1.09-.624-1.502a2.047 2.047 0 00-1.502-.624h-4.822l.855 1.066c.17.213.278.437.32.673.047.235.047.473 0 .715-.09.422-.335.768-.73 1.038-.395.27-.835.405-1.315.405H12c-.48 0-.92-.135-1.315-.405-.395-.27-.64-.616-.73-1.038a2.014 2.014 0 010-.715c.042-.236.15-.46.32-.673l.855-1.066H5.657c-.588 0-1.09.208-1.502.624-.416.412-.624.914-.624 1.502v7.21c0 .585.208 1.086.624 1.502.412.419.914.628 1.502.628zm4.38-10.188c0-.126-.045-.233-.139-.321a.44.44 0 00-.321-.139.44.44 0 00-.321.139.44.44 0 00-.139.321v1.817c0 .126.045.233.139.321a.44.44 0 00.321.139.44.44 0 00.321-.139.44.44 0 00.139-.321V8.455zm4.822 0c0-.126-.045-.233-.139-.321a.44.44 0 00-.321-.139.44.44 0 00-.321.139.44.44 0 00-.139.321v1.817c0 .126.045.233.139.321a.44.44 0 00.321.139.44.44 0 00.321-.139.44.44 0 00.139-.321V8.455z" />
      </svg>
    ),
    desc: "视频与内容",
  },
  {
    label: "Email",
    href: "mailto:publieople@outlook.com",
    icon: Mail,
    desc: "publieople@outlook.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-[300] tracking-tight mb-10 text-foreground">
            联系
            <span className="block text-sm font-[400] text-muted-foreground mt-2 tracking-normal">
              Contact
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 p-6 rounded-lg border border-border/60 hover:border-primary/30 transition-all hover:shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px] min-w-[140px]"
            >
              <link.icon className="size-6 text-muted-foreground/60 group-hover:text-primary transition-colors" />
              <span className="text-sm font-[400] text-foreground group-hover:text-primary transition-colors">
                {link.label}
              </span>
              <span className="text-[10px] font-[300] text-muted-foreground/50">
                {link.desc}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
