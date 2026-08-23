"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/sections/github-icon";
import { SiBilibili } from "@icons-pack/react-simple-icons";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/publieople",
    icon: GithubIcon,
    desc: "开源项目与代码",
    color: "hover:bg-[#181717]/10 dark:hover:bg-[#181717]/20",
    iconColor: "group-hover:text-[#181717] dark:group-hover:text-white",
  },
  {
    label: "B站",
    href: "https://space.bilibili.com/324858924",
    icon: SiBilibili,
    desc: "视频与内容",
    color: "hover:bg-[#00A1D6]/10 dark:hover:bg-[#00A1D6]/20",
    iconColor: "group-hover:text-[#00A1D6]",
  },
  {
    label: "Email",
    href: "mailto:publieople@outlook.com",
    icon: Mail,
    desc: "publieople@outlook.com",
    color: "hover:bg-primary/10",
    iconColor: "group-hover:text-primary",
  },
];

export function Contact() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" data-od-id="contact" className="relative py-28 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary/80 mb-4">
            /contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-[300] tracking-[-0.02em] mb-2 text-foreground">
            联系
          </h2>
          <p className="text-sm font-[300] text-muted-foreground/60 mt-2 max-w-md mx-auto">
            如果有任何想法、问题或合作意向，欢迎联系
          </p>
        </motion.div>

        {/* Cards with stagger animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 flex flex-wrap items-stretch justify-center gap-6"
        >
          {links.map((link) => (
            <motion.div
              key={link.label}
              variants={cardVariants}
              className="group flex-1 min-w-[160px] max-w-[220px]"
            >
              <div className="relative h-full">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                className={`relative flex flex-col items-center gap-3 p-8 rounded-xl border border-border bg-card transition-all duration-300 ${link.color} hover:border-primary/30 hover:shadow-[0_0_0_1px] hover:shadow-primary/10`}
              >
                {/* Background color bleed on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none bg-gradient-to-b from-current/5 to-transparent" />

                {/* Icon with bounce */}
                <div className={`relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 ${link.iconColor}`}>
                  <link.icon className="size-7 text-muted-foreground/60 transition-colors duration-300" />
                </div>

                <div className="text-center relative z-10">
                  <span className="block text-sm font-[400] text-foreground transition-colors duration-300 group-hover:text-foreground">
                    {link.label}
                  </span>
                  <span className="block text-[11px] font-[300] text-muted-foreground/50 mt-1">
                    {link.desc}
                  </span>
                </div>

                {/* Arrow indicator */}
                <ExternalLink className="absolute top-3 right-3 size-3 text-muted-foreground/20 transition-all duration-300 group-hover:text-muted-foreground/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Signature with glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative mt-20 text-center"
        >
          <p className="text-[10px] font-[300] text-muted-foreground/30">
            基于 Next.js + Tailwind CSS 用心构建
          </p>
          <p className="text-sm font-[300] text-muted-foreground/50 mt-2 tracking-wider">
            © {new Date().getFullYear()} 人民公仆 / Publieople
          </p>
          {/* Glow line */}
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
