# Publieople 个人主页 — 第二阶段规格更新

## 现状分析

### 行业最佳实践来源

| 来源 | 特点 | 链接 |
|------|------|------|
| **Awwwards** | 全球顶尖网页设计评选，SOTD 级别 | awwwards.com/websites/portfolio |
| **Bestfolios / Muz.li** | 精选设计师个人主页合集 | muz.li/blog |
| **GitHub Trending** | bentofolio (Next.js 15 + Tailwind v4 + Motion) 等开源模板 | github.com/mkhoirulwafa18/bentofolio |
| **Figma Community** | Bento Grid 个人主页模板 | figma.com/community |

### 当前页面短板

1. **纯白背景无节奏** — 缺少 Stripe 本身有的"白段↔深色段"交替
2. **动画级别不够** — framer-motion scroll reveal 有但只是淡入，没有吸引力
3. **Projects 区布局平淡** — 三列等大卡片，没有主次
4. **缺少亮暗模式** — 现在只有 light，没有 dark 选项
5. **Hero 缺少记忆点** — 没有背景动效，没有视觉钩子

---

## 更新规格

### 1. 亮暗模式

**架构：独立维度，与设计系统主题正交**

```
data-theme="stripe" + data-mode="light"  → Stripe 亮色（当前）
data-theme="stripe" + data-mode="dark"   → Stripe 暗色
data-theme="linear" + data-mode="dark"   → Linear 暗色（后续）
```

CSS 变量方案：
```css
:root[data-theme="stripe"],
:root[data-theme="stripe"][data-mode="light"] {
  --background: oklch(1 0 0);
  /* Stripe light tokens */
}

:root[data-theme="stripe"][data-mode="dark"] {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* Stripe dark: deep navy backgrounds, adjusted contrasts */
}
```

Dark mode 的 Stripe 调色方案：
- 背景：深海军蓝 `#0d253d`（Stripe 的 `--hds-color-core-neutral-975`）
- 文字：白色/浅灰
- 紫色点缀保持，但饱和度微调
- 卡片背景：半透明 `rgba(255,255,255,0.05)` + backdrop blur

### 2. 动画增强清单

| 区域 | 效果 | 实现 |
|------|------|------|
| **Hero** | 背景微动粒子（magicui Particles） | magicui Particles 组件 |
| **Hero** | 标题文字渐变色流动（magicui Animated Gradient Text） | magicui |
| **Hero** | 头像悬浮微动 + 光晕 | framer-motion rotate/Y |
| **Hero** | 向下滚动指示改为动态闪烁 | CSS animation |
| **About** | 3 张卡片 staggered 入场（间隔 100ms 依次出现） | framer-motion staggerChildren |
| **About** | 卡片 hover 上浮 + 紫色 border glow | framer-motion + CSS |
| **Projects** | **Bento Grid 替换三列卡片**（一大两小/两大一小的不规则网格） | magicui BentoGrid |
| **Projects** | 卡片 hover 时背景色渐变 + 图标图标飞入 | framer-motion |
| **Blog** | 文章列表 hover 时左侧紫色竖线条出现 | CSS transition |
| **Contact** | 图标 hover 放大 + 紫色光晕 | framer-motion scale |
| **全页** | Section 间滚动分隔动画（clip-path 或 gradient reveal） | framer-motion |
| **全页** | 亮暗切换过渡（CSS `transition` 全局） | CSS `transition: background-color, color` |

### 3. 布局提升

Projects 区改为 **Bento Grid**（magicui）：

```
┌──────────────────┬──────────────┐
│                  │  电脑高手     │
│   通识分享企划    │  速成班       │
│   (大)           │  (小)         │
│                  ├──────────────┤
│                  │  Blog        │
│                  │  (小)         │
├──────────────────┴──────────────┤
│  Stripe 风格深色区（#1c1e54）    │
│  → Resume 移到这里，白色文字      │
└─────────────────────────────────┘
```

### 4. 主题切换器升级

现在的 `theme-switcher` 从 `<Select>` 改为更美观的方案：
- 亮暗切换用 magicui **Animated Theme Toggler**（太阳/月亮图标动画切换）
- 设计系统主题切换用一个小型色板选择器

---

## 实施计划

### Phase 2.1 — 亮暗模式

- [ ] 更新 CSS 变量：`data-mode` 维度 + Stripe dark 色板
- [ ] ModeProvider（读取 system preference + localStorage）
- [ ] ModeToggle 组件（Animated Theme Toggler 或简单 switch）
- [ ] 全局 CSS transition 让切换有平滑过渡
- [ ] Header 的 theme-switcher 中集成亮暗切换
- 验证：打开页面 → 切换亮暗 → 所有组件自动适配

### Phase 2.2 — Hero 动效增强

- [ ] 复制 magicui Particles 组件 → Hero 背景
- [ ] Hero 标题加 Animated Gradient Text（Stripe 紫→粉）
- [ ] 头像加悬浮 hover 效果
- [ ] 向下滚动指示器加 pulse 动画
- 验证：Hero 区视觉效果有明显提升

### Phase 2.3 — Bento Grid + 交互升级

- [ ] 复制 magicui BentoGrid 组件
- [ ] Projects 区改为 Bento Grid 布局（一大两小）
- [ ] 所有卡片加 hover 动画（上浮 + glow）
- [ ] Section enter/exit 动画（clip-path 或 gradient snap）
- 验证：Projects 区视觉效果丰富，交互手感好

### Phase 2.4 — 细节打磨 + 部署

- [ ] 调整深色区段落（About 或 Resume 用深色背景）
- [ ] 全局动画性能检查（确保 60fps）
- [ ] 构建 + 部署
- 验证：线上效果满意
