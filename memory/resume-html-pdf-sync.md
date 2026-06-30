---
name: resume-html-pdf-sync
description: 修改简历时必须同时更新 HTML 和 PDF 两个文件
metadata:
  type: feedback
---

修改简历内容时，必须同时更新 `简历/简历.html` 和 `简历/简历.pdf`，保持两者内容一致。

**修改流程：**
1. 先改 `简历/简历.html`
2. 用 Playwright 重新生成 PDF：`python -c "from playwright.sync_api import sync_playwright; ..."`
3. 确认 PDF 仍为 1 页 A4

**How to apply:** 每次涉及简历内容变更时，在修改 HTML 后立即执行 PDF 重新生成步骤。[[website-content-sync]]
