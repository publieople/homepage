# Publieople Homepage Constitution

## Core Principles

### I. 内容驱动
页面结构由内容决定，而非相反。每个区块必须有真实内容支撑，不添加装饰性占位。

### II. 务实优先
实用 > 纯粹，效率 > 完美，分享 > 私藏。不做过度设计，不堆砌无意义的动效。

### III. 主题可扩展
主题架构从第一天起就是一等公民。所有视觉 token 通过 CSS 变量管理，加新主题不改组件。

### IV. 技术栈稳定
使用已发布 6+ 个月的稳定版本。选 Next.js 16 而不是 15 是因为 16 已是稳定主流版本。

### V. 内容即数据
博客文章、项目列表、联系方式等数据从集中管理，不散落在组件代码中。

## 技术栈锁定

| Layer | Choice | Constraint |
|-------|--------|------------|
| Framework | Next.js 16 (App Router, TypeScript) | 必须用 `npx create-next-app@latest` 初始化 |
| Styling | Tailwind CSS v4 | 使用 `@theme inline` 模式，无 `tailwind.config.ts` |
| UI | shadcn/ui (new-york style) | 使用 `npx shadcn@latest init` 安装 |
| Animation | magicui + framer-motion | magicui 组件 copy-paste 引入 |
| Animation CSS | tw-animate-css | Tailwind v4 默认 |
| Font | Source Sans 3 (Stripe substitute) + Geist Mono | 通过 next/font/google 加载 |
| Deploy | GitHub Actions → GitHub Pages (v1) → Vercel (v2) | |

## 多主题架构规范

1. 所有主题变量定义在 `app/globals.css` 中
2. 每个主题使用 `:root[data-theme="xxx"]` 选择器
3. 使用 `@theme inline` 注册变量为 Tailwind 工具类
4. 主题切换通过 JS 修改 `document.documentElement.dataset.theme`
5. 用户选择持久化到 localStorage

## Governance

- 所有内容变更（文字、链接、文章列表）修改数据文件，不碰组件代码
- 加新主题只需在 globals.css 加一组 CSS 变量
- 每个 Phase 交付前必须经过 browser_vision 截图验证
- 本宪法高于临时指示，矛盾时以宪法为准

**Version**: 1.0.0 | **Ratified**: 2026-05-22 | **Last Amended**: 2026-05-22
