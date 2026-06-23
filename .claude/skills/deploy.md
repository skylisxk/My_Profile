# Deploy Skill

将网站部署到静态托管平台。

## 触发方式

```
/deploy
```

## 支持的平台

| 平台 | 方式 | 特点 |
|------|------|------|
| GitHub Pages | 推送到 `gh-pages` 分支 | 免费，需 GitHub 仓库 |
| Netlify | 拖拽部署 / CLI | 免费，自动 HTTPS |
| Vercel | CLI 部署 | 免费，全球 CDN |
| 手动 | 压缩打包下载 | 适用于任意托管 |

## 执行步骤

### 1. 确认部署平台

询问用户选择哪个平台。如果是首次部署，推荐 **Netlify**（拖拽即部署，最简单）。

### 2. 部署前检查

扫描项目，确认：
- `index.html` 存在且结构完整
- 所有资源路径使用相对路径（`./assets/...`）
- 图片已压缩（超过 500KB 的图片提醒压缩）
- 外部链接无死链

### 3. 执行部署

#### Netlify（推荐）
1. 确认项目目录为 `d:\CodeStore\AI_Claude\website`
2. 提示用户访问 `https://app.netlify.com/drop` 拖拽整个 `website` 文件夹上传
3. 或指导安装 `netlify-cli`，运行 `npx netlify deploy --prod --dir=.`

#### GitHub Pages
1. 确认项目已初始化为 git 仓库
2. 创建 `gh-pages` 分支并推送
3. 在 GitHub 仓库 Settings → Pages 中启用

#### Vercel
1. 安装 `vercel` CLI：`npm i -g vercel`
2. 运行 `vercel --prod`

### 4. 部署后

- 输出访问 URL
- 提醒用户配置自定义域名（如有）

## 注意事项

- 本项目无构建步骤，直接部署源文件即可
- 部署 URL 记录在响应中，方便后续引用
- 每次部署前自动做一次完整性检查
