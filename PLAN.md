# Publieople 个人主页 — 技术实现计划

## 架构概览

```
┌──────────────────────────────────────────────────┐
│                 ThemeProvider                      │
│         data-theme → CSS Variables → Tailwind     │
├──────────────────────────────────────────────────┤
│  Hero → About → Projects → Blog → Resume → Contact│
│  ↓        ↓        ↓         ↓      ↓        ↓   │
│  shadcn  shadcn  magicui   shadcn  shadcn  shadcn │
│  (Button)(Card) (Bento)  (Card)  (Button)(Button) │
├──────────────────────────────────────────────────┤
│           next/font (Source Sans 3)               │
├──────────────────────────────────────────────────┤
│     framer-motion (scroll animations)             │
└──────────────────────────────────────────────────┘
```

## Phase 计划

### Phase 0: 项目脚手架

**交付：`npm run dev` 能跑的白页**

任务：
- [ ] Next.js 16 初始化（`npx create-next-app@latest`）
- [ ] shadcn/ui 初始化（`npx shadcn@latest init`）
- [ ] 添加 magicui 所需组件（Bento Grid, Number Ticker, Animated Gradient Text）
- [ ] 配置 next/font（Source Sans 3 + Geist Mono）
- [ ] globals.css 骨架 + Tailwind v4 配置
- [ ] .gitignore 更新（node_modules 等）
- [ ] 更新 AGENTS.md 项目上下文
- [ ] git commit & push
- 验证：`npm run dev` → localhost 能看到 Next.js 默认页面

### Phase 1: 主题系统 + 页面布局骨架

**交付：有 Stripe 风格的完整页面骨架，主题切换器可工作**

任务：
- [ ] Stripe 设计系统 CSS 变量全量（颜色、字体、圆角、阴影、间距）
- [ ] ThemeProvider 组件（读取 localStorage → 设置 data-theme → 防 FOUC）
- [ ] theme-switcher 组件（下拉选择器，支持 Stripe 首发）
- [ ] 页面布局骨架（Header 导航 + 各 Section 占位 + Footer）
- [ ] 平滑滚动导航（点击锚点 smooth scroll）
- [ ] 响应式布局（移动端汉堡菜单）
- [ ] framer-motion 滚动入场动画
- 验证：`browser_vision` 截图确认 Stripe 风格 + 主题切换正常

### Phase 2: 内容填充 + 部署

**交付：线上可访问的个人主页**

任务：
- [ ] Hero 组件（头像 + 名字 + 定位语 + 导航按钮）
- [ ] About 组件（简介 + 核心理念 + 项目简介）
- [ ] Projects 组件（3 张 magicui Bento Grid 卡片）
- [ ] Blog 组件（3 篇精选 + Notion 封面/摘要）
- [ ] Resume 区（链到 GitHub resume）
- [ ] Contact 区（GitHub/B站/Email 图标链接）
- [ ] Footer（版权 + 小彩蛋）
- [ ] 头像从 Windows 导入到 public/ 目录
- [ ] GitHub Actions deploy.yml（构建 → 部署到 pages）
- 验证：`browser_vision` 全页面截图确认 + GitHub Pages 可访问

## 关键技术决策

### 主题系统
使用 CSS 自定义属性 + `data-theme` 属性 + `@theme inline`。shadcn 原生支持这套体系，不需要额外库。

### 字体
Stripe 使用专有字体 sohne-var，Google Fonts 最佳替代是 Source Sans 3（保留 light weight 300 的优雅感）。

### 头像
从 Windows `E:\Pictures\Saved Pictures\` 复制到 `public/avatar.jpg`，通过 WSL 路径 `/mnt/e/...` 访问。

### 部署
GitHub Actions workflow：`npm run build` → `npm run export` (或 `next build` 的输出) → `peaceiris/actions-gh-pages@v3`。注意 Next.js 静态导出需要 `output: 'export'` 配置。

### 后续扩展
- 主题：在 globals.css 加 `:root[data-theme="linear"]` 一组变量
- 博客自动同步：通过 Notion API 或 RSS 定时抓取
- Vercel 部署：一键 import GitHub repo，无需 workflow
