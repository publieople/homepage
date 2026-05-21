# Publieople 个人主页 — 规格说明

## 1. 项目定位

个人品牌名片页。访客（技术爱好者、学生、潜在读者）能在 30 秒内了解 "人民公仆" 是谁、在做什么、输出什么内容，并找到对应的内容入口。

## 2. 用户故事

| 优先级 | 用户故事 |
|--------|---------|
| P0 | 作为访客，我想看到你是谁、做什么，决定是否值得关注 |
| P0 | 作为读者，我想找到你的博客和文章入口 |
| P1 | 作为潜在合作者，我想查看简历和联系方式 |
| P1 | 作为技术爱好者，我想看看你的项目和 GitHub |
| P2 | 作为回头客，我想切换不同的视觉主题体验 |

## 3. 功能范围

### P0（必须）
- Hero 区：名字 + 定位 + 头像 + 导航锚点
- About 区：个人简介 + 核心理念
- Projects 区：3 个项目卡片（通识分享企划 / 电脑高手速成班 / Publieople's Blog）
- Blog 区：3 篇精选文章入口（跳转 Notion）
- Resume 区：链接到 GitHub resume 项目
- Contact 区：GitHub / B站 / Email
- 响应式布局（移动端 + 桌面端）

### P1（应有）
- Stripe 设计系统主题
- 主题切换器（预留扩展接口）
- 平滑滚动导航
- GitHub Actions 自动部署到 GitHub Pages

### P2（后续）
- 更多主题（Linear / Vercel / Notion...）
- 博客文章自动同步
- 访问统计
- Vercel 部署迁移

## 4. 非功能需求

| 维度 | 要求 |
|------|------|
| 性能 | Lighthouse Performance ≥ 90 |
| 可访问性 | 语义化 HTML，键盘可导航 |
| 兼容性 | 现代浏览器（Chrome/Firefox/Safari/Edge 近 2 个主版本） |
| 主题 | 零 FOUC，切换流畅无闪烁 |
| 部署 | GitHub Actions CI 自动构建 + 部署 |

## 5. 外部接口

- GitHub API：`https://github.com/publieople`
- 博客：`https://blog.for-people.cn/`
- 简历：`https://github.com/publieople/resume`
- B站：`https://space.bilibili.com/324858924`
- Email：`publieople@outlook.com`
- Notion 文章链接（3篇精选）

## 6. 约束

- 项目路径必须放在 WSL 原生文件系统（`~/projects/`），不能放在 `/mnt/`（EPERM）
- 代理设置：`http://127.0.0.1:7890`
- 头像路径：`/mnt/e/Pictures/Saved Pictures/2631792752F139A8AECF95A02DBCF0081E5142EB69.png`

## 7. 验收标准

- [ ] `npm run dev` 能在本地运行
- [ ] 所有内容区块均有真实内容，无 Lorem Ipsum
- [ ] Stripe 主题视觉风格一致（紫色渐变、正文 300 weight、干净优雅）
- [ ] 移动端布局正常，无溢出、错位
- [ ] 主题切换器可正常工作，刷新后保持选择
- [ ] 所有外链在新标签页打开
- [ ] GitHub Actions 部署到 Pages 成功
- [ ] 浏览器控制台无错误
