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
| **About** | ✅ Done | Lucide icons, 3D Tilt cards, animated counters (0→19, 0→20+, 0→8) |
| **Projects** | ✅ Done | BentoGrid layout, hover effects |
| **Blog** | ✅ Done | Horizontal scroll-snap cards, reading time indicators |
| **Resume** | ✅ Done | Link to external resume |
| **Contact** | ✅ Done | Big cards, icon bouncing, brand color bleed, SiBilibili, SiGithub |
| **SectionNav** | ✅ Done | Right-side nav with IntersectionObserver active tracking |
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
- Each section uses `#<section-id>` anchors for SectionNav
- Contact icon sourcing priority: (1) @lobehub/icons, (2) @icons-pack/react-simple-icons, (3) official SVG, (4) lucide

## Pending / Roadmap
- Projects: add image preview hover on cards
- Live data integration (GitHub stars, blog count)
- Notion → Blog sync pipeline
- Additional theme (Linear?)

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
