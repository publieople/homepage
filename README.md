# Publieople Homepage 🌐

个人主页 — [www.for-people.cn](https://www.for-people.cn)

> 实用 > 纯粹 · 效率 > 完美 · 分享 > 私藏

## 关于

人民公仆（Publieople）的个人网站，包含：
- **关于** — 个人简介、数据看板与三个在做的方向
- **项目** — 通识分享企划 + DSH 插件 / 开源工具精选
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
| 部署 | GitHub Pages（push main → Actions 自动构建发布） |

## 内容维护

改内容基本只动这几个文件，改完 push 到 `main` 即可自动发布：

| 想改什么 | 改哪里 |
|---|---|
| 首页大字 / 头衔（打字机词条） | `src/components/sections/hero.tsx` |
| 关于我 / 数据看板 / 三个方向卡片 | `src/components/sections/about.tsx` |
| 项目卡片（标题、描述、标签、链接） | `src/components/sections/projects.tsx` |
| 精选文章（3 篇 + 阅读时长） | `src/components/sections/blog.tsx` |
| 联系方式 / 社交链接 | `src/components/sections/contact.tsx` |
| 页面标题、SEO 描述、OG 信息 | `src/app/layout.tsx` |
| 头像 | `public/avatar.jpg` |
| robots / sitemap | `public/robots.txt`、`public/sitemap.xml` |

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
