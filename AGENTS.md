# Publieople Homepage

Personal homepage for 人民公仆 (Publieople).
**URL:** [www.for-people.cn](https://www.for-people.cn)
**Repo:** github.com/publieople/homepage
**Deploy:** GitHub Pages (push to main → Actions → gh-pages)

## Tech Stack
- Next.js 16 (App Router, TypeScript), `output: "export"` (static)
- Tailwind CSS v4
- shadcn/ui (new-york style) + magicui
- framer-motion
- **Fonts:** Archivo (heading), Space Grotesk (body) — via next/font/google
- **Icons:** @lobehub/icons (brand), @icons-pack/react-simple-icons, lucide-react

## Project Structure
```
src/
├── app/                     # Next.js App Router
│   └── globals.css          # Theme CSS variables + Tailwind config
├── components/
│   ├── sections/            # Page sections (hero, about, projects, blog, etc.)
│   └── ui/                  # shadcn/ui + magicui components
├── hooks/                   # Custom hooks (use-theme, etc.)
└── ...
```

## Section Status

| Section | Status | Key Features |
|---------|--------|-------------|
| **Hero** | ✅ Done | Particles, OrbitingCircles (x2 rings), TypingAnimation, parallax fade-out on scroll, 3D orbit mouse tilt |
| **About** | ✅ Done | Lucide icons, 3D Tilt cards, animated counters (20+ 文章 / 8 人团队 / 49 仓库) |
| **Projects** | ✅ Done | BentoGrid layout, hover effects |
| **Blog** | ✅ Done | Horizontal scroll-snap cards, reading time indicators |
| **Resume** | ✅ Done | 4-card summary + in-site page `/resume/`, external classic resume link |
| **Contact** | ✅ Done | Big cards, icon bouncing, brand color bleed, SiBilibili, SiGithub |
| **SectionNav** | ✅ Done | Right-side nav with IntersectionObserver active tracking |
| **Scroll snap** | ✅ Done | Six screens, CSS-only `scroll-snap-type: y mandatory` on `html[data-snap=on]`; `SnapGuard` turns it off when content overflows or viewport < 768px |
| **Favicon / OG** | ✅ Done | `logo.svg` + generated png/ico set, `public/og.png` 1200×630 |
| **Theme Toggle** | ✅ Done | Dark/light mode, view-transition clip animation |

## Deployment
- Workflow: `.github/workflows/deploy.yml` — runs on push to main
- `next.config.ts`: `output: "export"`, images unoptimized
- Pushes to GitHub Pages automatically
- Domain: www.for-people.cn (Cloudflare DNS, proxied=off)

## Design Conventions
- **Always use these font weights:** 300 (light) as signature weight
- **No purple gradient titles** (user dislikes)
- **Prioritize motion/interaction** over static decoration (user values: MagicCard tilt, TypingAnimation, 打字机, scroll-parallax = 惊艳; static visual tweaks = 看不出什么)
- **Prefer magicui components** over custom CSS for effects
- Section transitions: About (fade-up), Projects (slide-left), Blog (slide-right), Contact (scale-in)
- Snapping: each section is `.snap-screen` (100dvh, `scroll-snap-align: start`); the hero/about/projects stack is `.snap-stack` with height = 3 × 100dvh. Never add snapping to a `div` — the scroll container is `documentElement`
- SnapGuard (mounted in `page.tsx`) switches snapping off automatically when any `.snap-screen` overflows its viewport, so short screens never clip content
- Inside `.snap-stack` the snap points come from invisible `.snap-marker` spans (one per screen, parked at `i / height`%), **not** from the screens themselves: the three screens are `position: sticky`, and once pinned they all report the same visual position, so their snap areas collapse into one and scrolling up cannot return through them. Do not re-add `scroll-snap-align` to stack screens.
- Each section uses `#<section-id>` anchors for SectionNav
- Contact icon sourcing priority: (1) @lobehub/icons, (2) @icons-pack/react-simple-icons, (3) official SVG, (4) lucide

## Pending / Roadmap
- **apex 域名**：`https://for-people.cn` 无证书（Pages 证书只签 `www`）；要么在 Cloudflare 做 301 → www，要么把 apex 加到 Pages 自定义域名
- Projects: add image preview hover on cards
- Live data integration (GitHub stars, blog count)
- Notion → Blog sync pipeline
- Additional theme (Linear?)

## Maintenance Map
内容改哪里见 `README.md` 的「内容维护」表。改完 `git push` 到 `main` 即触发 Actions 自动发布（约 1–2 分钟）。

## Commands
- `npm run dev` — Development server (localhost:3000)
- `npm run build` — Production build (outputs to ./out/)
- `npx shadcn@latest add <component>` — Add shadcn component
- `git add -A && git commit -m "..." && git push` — Deploy (triggers Actions)

## WSL Dev Environment
- Filesystem: ~/projects/homepage (WSL native)
- HTTP proxy: http://127.0.0.1:7890
- curl localhost: `--noproxy '*'`
- HF mirror: `HF_ENDPOINT=https://hf-mirror.com`
- Windows host: /mnt/c/Users/publieople/

## Related Documents
- `README.md` — Project overview
- `LICENSE` — MIT

## Relevant Skills (load with skill_view)

### Frontend / UI
| Skill | 用途 |
|-------|------|
| `shadcn-magicui-development` | shadcn/ui + magicui 组件组装与配置 |
| `shadcn-homepage-effects` | 3D tilt, typing animation, noise texture 等交互特效 |
| `homepage-design` | 个人主页重设计（参考模板与模式） |
| `popular-web-designs` | Stripe/Linear/Vercel 等 54 个设计系统参考 |
| `claude-design` | 一次性 HTML 设计原型 |

### 工作流 (已安装)
| Skill | 用途 |
|-------|------|
| `comet` + `comet-*` | 5 阶段状态机管线（open→design→build→verify→archive） |
| `openspec-*` | OpenSpec 变更管理（propose/explore/apply-change/archive） |
| `superpowers/brainstorming` | 创意构思阶段必用 |
| `superpowers/executing-plans` | 有计划时按步骤执行 |
| `superpowers/verification-before-completion` | 交付前验证清单 |
| `superpowers/writing-skills` | 创建/更新 skill 时用 |
