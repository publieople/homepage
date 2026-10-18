import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { GithubIcon } from "@/components/sections/github-icon";

export const metadata: Metadata = {
  title: "简历 | 人民公仆",
  description:
    "冯周杰（人民公仆 / Publieople）的在线简历：人工智能本科在读，具身智能实验室终端服务部，AI 工具链与智能体应用方向。",
  alternates: { canonical: "https://www.for-people.cn/resume/" },
};

const profile = {
  name: "冯周杰",
  alias: "人民公仆 · Publieople",
  position: "AI 工具链开发与智能体应用 · 自动化效率工程师",
  summary:
    "具备 AI Agent 框架与大模型部署的完整闭环经验（从 GPU 集群管理到前端应用交付）。擅长把复杂技术问题拆解为可执行方案并推动落地，也习惯用技术写作和开源分享把经验留下来。",
  email: "publieople@outlook.com",
  github: "https://github.com/publieople",
};

const education = [
  {
    school: "上海中侨职业技术大学",
    degree: "本科 · 人工智能",
    time: "2024 — 至今",
    detail: "主修机器学习、深度学习、计算机视觉、自然语言处理、数据结构与算法。",
  },
];

const experience = [
  {
    org: "具身智能实验室 · 终端服务部",
    role: "部门管理 / 技术负责人",
    time: "2024 — 至今",
    points: [
      "管理 4×A10 GPU 集群，部署 Ollama / vLLM / ComfyUI 推理框架，支撑 LLM + TTS + ASR 多模态推理与前端交互的全链路交付。",
      "整合 Coze Studio、Fay 数字人、DeepSeek 等工具链，搭建端到端 AI 服务栈。",
      "规划并讲授「终端基础 + 现代 Web 全栈」技术培训课程，编写运维文档与最佳实践指南。",
      "推动实验室技术知识传承与人才梯队建设。",
    ],
  },
];

const skills = [
  { name: "AI 全栈", detail: "Hermes Agent · OpenClaw · ComfyUI / SD WebUI · Ollama · vLLM · Coze · n8n" },
  { name: "编程与前端", detail: "TypeScript · React（Shadcn / MagicUI）· Vue · Tailwind CSS · Python" },
  { name: "工具与运维", detail: "Git · Docker / Podman · Linux（Ubuntu / Arch）· WSL · Notion API" },
  { name: "知识管理", detail: "Notion 体系化知识库 · 技术博客（NotionNext + Vercel）· 技术写作" },
];

const projects = [
  {
    name: "个人 AI Agent 生态",
    meta: "2025 — 至今 · 独立搭建与运维",
    desc: "以 Hermes Agent 与 OpenClaw 为核心的个人 AI 助手系统，跨 CLI / 飞书 / Telegram，沉淀 100+ Skills 模块、cron 调度与跨会话记忆。",
  },
  {
    name: "DeepSeek Harness 插件",
    meta: "2026 · 开源",
    desc: "dsh-plugin-autoupdate（供应链感知的插件更新器）、dustshot（Wayland 截图标注）、awesome-dsh-plugins（去噪注册表）等。",
  },
  {
    name: "产研社技术分享",
    meta: "2024 — 至今 · 基准部部长",
    desc: "组织 20+ 场内部培训，覆盖 AI 工具链、前端开发与效率方法论；对外开展技术讲座。",
  },
  {
    name: "个人技术博客",
    meta: "2025 — 至今 · 独立运营",
    desc: "NotionNext（Next.js + Notion API）搭建、Vercel 部署，持续输出 AI、效率工具与生产力教程。",
  },
];

const awards = [
  { name: "中青杯全国大学生数学建模", level: "二等奖", year: "2025" },
  { name: "五一数学建模竞赛", level: "二等奖", year: "2025" },
  { name: "数维杯数学建模竞赛", level: "三等奖", year: "2025" },
  { name: "工行杯金融科技创新大赛", level: "三等奖", year: "2024" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary/70 mb-3">
      {children}
    </p>
  );
}

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-[300] text-muted-foreground/60 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            返回主页
          </Link>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40">
            /resume
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <section>
          <h1 className="text-4xl sm:text-5xl font-[300] tracking-[-0.02em] text-foreground">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-xs tracking-[0.14em] uppercase text-primary/80">
            {profile.position}
          </p>
          <p className="mt-6 text-sm font-[300] leading-[1.85] text-muted-foreground">
            {profile.summary}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-[300] text-muted-foreground/60">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Mail className="size-3.5" />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-3.5" />
              github.com/publieople
            </a>
          </div>
        </section>

        <hr className="my-12 border-border/40" />

        <section>
          <Eyebrow>/ education</Eyebrow>
          {education.map((item) => (
            <div key={item.school} className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <div>
                <h2 className="text-base font-[400] text-foreground">{item.school}</h2>
                <p className="mt-1 text-sm font-[300] text-muted-foreground/70">{item.degree}</p>
              </div>
              <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/40 sm:pt-1">
                {item.time}
              </span>
            </div>
          ))}
          <p className="mt-3 text-xs font-[300] leading-relaxed text-muted-foreground/50">
            {education[0].detail}
          </p>
        </section>

        <hr className="my-12 border-border/40" />

        <section>
          <Eyebrow>/ experience</Eyebrow>
          {experience.map((item) => (
            <div key={item.org}>
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                <div>
                  <h2 className="text-base font-[400] text-foreground">{item.org}</h2>
                  <p className="mt-1 text-sm font-[300] text-muted-foreground/70">{item.role}</p>
                </div>
                <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/40 sm:pt-1">
                  {item.time}
                </span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm font-[300] leading-[1.8] text-muted-foreground/80">
                    <span className="mt-[9px] size-1 shrink-0 rounded-full bg-primary/40" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <hr className="my-12 border-border/40" />

        <section>
          <Eyebrow>/ projects</Eyebrow>
          <div className="grid gap-3 sm:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-primary/30"
              >
                <h3 className="text-sm font-[400] text-foreground">{p.name}</h3>
                <p className="mt-1 font-mono text-[10px] tracking-[0.06em] text-muted-foreground/40">
                  {p.meta}
                </p>
                <p className="mt-2.5 text-xs font-[300] leading-relaxed text-muted-foreground/60">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-12 border-border/40" />

        <section>
          <Eyebrow>/ stack</Eyebrow>
          <dl className="space-y-3">
            {skills.map((s) => (
              <div key={s.name} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                <dt className="shrink-0 text-sm font-[400] text-foreground sm:w-24">{s.name}</dt>
                <dd className="text-xs font-[300] leading-relaxed text-muted-foreground/60">
                  {s.detail}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <hr className="my-12 border-border/40" />

        <section>
          <Eyebrow>/ awards</Eyebrow>
          <ul className="space-y-2.5">
            {awards.map((a) => (
              <li key={a.name} className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-[300] text-muted-foreground/80">{a.name}</span>
                <span className="shrink-0 font-mono text-[10px] tracking-[0.08em] text-muted-foreground/45">
                  {a.level} · {a.year}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 flex flex-wrap items-center gap-3">
          <a
            href="https://visiky.github.io/resume?user=publieople"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-xs font-[300] text-muted-foreground/70 transition-colors hover:border-primary/30 hover:text-foreground"
          >
            经典版在线简历
            <ExternalLink className="size-3 opacity-50" />
          </a>
          <a
            href="mailto:publieople@outlook.com"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-xs font-[300] text-muted-foreground/70 transition-colors hover:border-primary/30 hover:text-foreground"
          >
            <Mail className="size-3 opacity-50" />
            联系我
          </a>
        </div>
      </main>

      <footer className="border-t border-border/40 px-6 py-8">
        <p className="mx-auto max-w-3xl text-[10px] font-[300] text-muted-foreground/30">
          © {new Date().getFullYear()} 人民公仆 / Publieople
        </p>
      </footer>
    </div>
  );
}
