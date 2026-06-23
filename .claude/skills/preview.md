# Preview Skill

启动本地静态服务器，在浏览器中预览网站。

## 触发方式

```
/preview
```

## 执行步骤

1. 在项目根目录 `d:\CodeStore\AI_Claude\website` 启动 Python HTTP 服务器：
   ```
   python -m http.server 8080 --directory d:/CodeStore/AI_Claude/website
   ```
2. 服务启动后，提示用户在浏览器中打开 `http://localhost:8080`
3. 如果端口 8080 被占用，尝试 8081、8082 等后续端口

## 注意事项

- 这是纯静态项目，直接 serve 文件即可，无需构建
- 修改文件后刷新浏览器即可看到效果
- 按 `Ctrl+C` 停止服务器
