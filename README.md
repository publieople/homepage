# Publieople Homepage 🌐

个人主页 — [www.for-people.cn](https://www.for-people.cn)

> 实用 > 纯粹 · 效率 > 完美 · 分享 > 私藏

## 关于

人民公仆（Publieople）的个人网站，包含：
- **关于** — 个人简介与项目展示
- **项目** — 通识分享企划、电脑高手速成班、Blog
- **博客** — 精选文章预览
- **简历** — 技能与经历
- **联系** — GitHub / B站 / Email

## 技术栈

| 层 | 选择 |
|---|---|
| 框架 | Next.js 16 (App Router, TypeScript) |
| 样式 | Tailwind CSS v4 |
| UI 组件 | shadcn/ui (new-york style) |
| 动画 | magicui + framer-motion |
| 字体 | Archivo (标题) + Space Grotesk (正文) |
| 图标 | @lobehub/icons + @icons-pack/react-simple-icons + Lucide |
| 部署 | GitHub Pages → Vercel (规划中) |

## 快速开始

```bash
npm install
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 构建

```bash
npm run build
```

## 项目结构

```
src/
├── app/            # Next.js App Router 页面
├── components/
│   ├── sections/   # 页面区块 (Hero, About, Projects, Blog, etc.)
│   └── ui/         # shadcn/ui + magicui 组件
└── hooks/          # 自定义 Hooks
```

## 开发环境

- WSL (Arch Linux) + Windows 11
- Node.js (via nvm)
- HTTP 代理: `http://127.0.0.1:7890`

## 许可证

MIT © 2026 人民公仆 / Publieople
