# Add Section Skill

按项目规范快速添加新的页面板块。

## 触发方式

```
/add-section <板块名称>
```

支持的内置板块模板：`hero`, `about`, `skills`, `projects`, `experience`, `contact`

自定义板块直接传名称即可。

## 执行步骤

### 1. 确定板块信息

- 如果用户传入的是内置模板名，使用对应模板
- 如果是自定义名称，询问用户板块的核心内容和展示方式

### 2. 生成 HTML

在 `index.html` 中按板块顺序插入 `<section>` 标签，遵循：
- 语义化标签
- `id` 属性用于导航锚点
- `class` 命名与 BEM 一致
- `data-section` 属性标识板块类型

默认模板：

```html
<!-- [板块中文名] -->
<section id="[section-id]" class="section section--[name]" data-section="[name]">
  <div class="section__container">
    <h2 class="section__title">[板块标题]</h2>
    <!-- 板块具体内容 -->
  </div>
</section>
```

### 3. 添加 CSS

- 在 `assets/css/components.css` 中添加板块专属样式
- 所有颜色/间距通过 CSS 变量引用
- 遵循 BEM 命名

### 4. 添加导航项

- 在 `index.html` 的导航栏中添加对应链接
- 在 `assets/js/navigation.js` 的滚动监听配置中添加该板块

### 5. 添加 JS 交互（如需要）

- 在 `assets/js/main.js` 中初始化
- 新建独立 JS 文件（如果逻辑复杂）

## 注意事项

- 严格遵循 `CLAUDE.md` 中的编码规范和设计 Token
- 新增板块不要在 CSS/JS 中引入第三方依赖
- 添加后提醒用户运行 `/preview` 查看效果
