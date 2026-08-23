"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Users,
  GraduationCap,
  MapPin,
  Heart,
  Terminal,
  Rocket,
} from "lucide-react";

/* ---- Animated counter ---- */
function CountUp({
  to,
  suffix = "",
  label,
  icon: Icon,
}: {
  to: number;
  suffix?: string;
  label: string;
  icon: React.ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1000;
    const step = Math.max(1, Math.ceil(to / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, to]);

  return (
    <div
      ref={ref}
      className="flex items-center gap-2 text-xs text-muted-foreground/70"
    >
      <Icon className="size-3.5 text-primary/70 shrink-0" />
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="font-[400] text-foreground/80 tabular-nums"
      >
        {count}
        {suffix}
      </motion.span>
      <span className="font-[300]">{label}</span>
    </div>
  );
}

/* ---- Facts with animated counters ---- */
const facts = [
  { icon: Sparkles, value: 19, suffix: "岁", label: "" },
  { icon: MapPin, value: 0, suffix: "", label: "中国", static: true },
  { icon: GraduationCap, value: 0, suffix: "", label: "大学生", static: true },
  { icon: BookOpen, value: 20, suffix: "+", label: "文章" },
  { icon: Users, value: 8, suffix: "人", label: "团队" },
];

/* ---- Highlights with Tilt ---- */
const highlights = [
  {
    icon: Rocket,
    label: "通识分享企划",
    desc: "非盈利内容企划，8人团队，每两周一篇深度文章",
    href: "https://blog.for-people.cn/",
  },
  {
    icon: Terminal,
    label: "电脑高手速成班",
    desc: "结构化技术教程，让新手也能成为高手",
    href: "https://www.notion.so/1a966ad7c9c483cf839081223d50a9fd",
  },
  {
    icon: Heart,
    label: "Vibe Coding",
    desc: "用 AI 辅助开发的实践者，追求效率与实用",
    href: "https://github.com/publieople",
  },
];

function TiltCard({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    cardRef.current.style.transform = `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    cardRef.current.style.transition = "transform 0.08s ease-out";
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(400px) rotateX(0deg) rotateY(0deg)";
    cardRef.current.style.transition = "transform 0.4s ease-out";
  };

  return (
    <a href={href} target="_blank" rel="noreferrer" className="block h-full">
      <div className="group/card relative h-full">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative h-full rounded-xl border border-border bg-card p-5 cursor-pointer transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_0_1px] hover:shadow-primary/10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </a>
  );
}

export function About() {
  return (
    <section id="about" data-od-id="about" className="sticky top-0 z-20 flex h-[100dvh] items-center overflow-hidden bg-background px-6 snap-start snap-always">
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-primary/80 mb-4">
            /about
          </p>
          <h2 className="text-3xl sm:text-4xl font-[300] tracking-[-0.02em] mb-8 text-foreground">
            关于
          </h2>

          <div className="space-y-6 text-base font-[300] text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              你好，我是人民公仆（Publieople），一名大学生。我相信好的内容和技术应当是每个人都能
              触及的，这也是我做一切事情的出发点。
            </p>
          </div>

          {/* Animated facts bar — no emoji */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {facts.map((fact) => {
              if (fact.static) {
                return (
                  <div
                    key={fact.label}
                    className="flex items-center gap-2 text-xs text-muted-foreground/70"
                  >
                    <fact.icon className="size-3.5 text-primary/70 shrink-0" />
                    <span className="font-[300]">{fact.label}</span>
                  </div>
                );
              }
              return (
                <CountUp
                  key={fact.label}
                  to={fact.value}
                  suffix={fact.suffix}
                  label={fact.label}
                  icon={fact.icon}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Highlights with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid sm:grid-cols-3 gap-4"
        >
          {highlights.map((item) => (
            <TiltCard key={item.label} href={item.href}>
              <div className="flex flex-col gap-3">
                <div className="inline-flex size-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-[400] text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs font-[300] text-muted-foreground leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
