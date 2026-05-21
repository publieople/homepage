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

### Phase 0: 项目脚手架（已完成）
### Phase 1: 主题系统 + 页面布局（已完成）
### Phase 2: 内容组件 + 部署（已完成）

---

### Phase 2.1: 亮暗模式

**交付：亮/暗色可切换，切换平滑**

- [ ] Stripe dark 色板（深海军蓝背景，白色文字，紫色点缀微调）
- [ ] data-mode 维度 CSS 变量（与 data-theme 正交）
- [ ] ModeProvider（读取 system preference + localStorage 持久化）
- [ ] ModeToggle 组件（太阳/月亮图标按钮）
- [ ] 全局 CSS transition（background-color, color, border-color 等）
- [ ] Header 中集成切换按钮
- 验证：browser_vision 暗色截图确认

### Phase 2.2: Hero 动效增强

**交付：Hero 区有视觉冲击力**

- [ ] magicui Particles 组件 → Hero 背景
- [ ] 标题 Animated Gradient Text（紫→粉→蓝渐变）
- [ ] 头像悬浮微动（framer-motion hover rotate/Y）
- [ ] 向下滚动指示器 pulse 动画
- 验证：browser_vision 确认视觉效果

### Phase 2.3: Bento Grid + 交互升级

**交付：Projects 区焕然一新，全页交互提升**

- [ ] magicui BentoGrid 组件复制
- [ ] Projects 区改用 Bento Grid 布局（一大两小）
- [ ] 卡片 hover 动效（上浮 + 紫色 glow border）
- [ ] 全页 section enter/exit 动画增强
- 验证：browser_vision 截图确认

### Phase 2.4: 打磨 + 部署

**交付：线上效果满意**

- [ ] 深色背景段落（About 或 Resume 安排深色区）
- [ ] 动画性能检查（60fps 无卡顿）
- [ ] git push → Actions 自动部署
- 验证：www.for-people.cn 可访问，效果满意

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
