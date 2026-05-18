# PureWater - 定制矿泉水官方网站

一个精致大气的定制矿泉水官方网站，使用 React + TailwindCSS + Framer Motion 构建。

## 功能特性

- 🎨 精致大气的UI设计
- 📱 完全响应式布局
- ✨ 流畅的动画效果
- 🎯 产品展示系列
- 📝 定制服务表单
- 🔗 导航与页脚

## 技术栈

- **React 18** - 用户界面库
- **Vite** - 构建工具
- **TypeScript** - 类型安全
- **TailwindCSS v4** - 样式框架
- **Framer Motion** - 动画库
- **Lucide React** - 图标库

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## GitHub Pages 部署

项目已配置 GitHub Actions 自动部署到 GitHub Pages。

### 部署步骤

1. 在 GitHub 上创建新仓库（命名为 `personal-website`）
2. 添加远程仓库：
```bash
git remote add origin https://github.com/你的用户名/personal-website.git
```

3. 推送代码到 GitHub：
```bash
git branch -M main
git push -u origin main
```

4. 在 GitHub 仓库设置中启用 GitHub Pages：
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 保存设置

5. 每次推送到 `main` 分支会自动触发部署

## 项目结构

```
personal-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── public/                     # 静态资源
├── src/
│   ├── App.tsx                 # 主应用组件
│   ├── main.tsx                # 应用入口
│   ├── style.css               # 全局样式
│   └── assets/                 # 资源文件
├── index.html                  # HTML 模板
├── vite.config.ts              # Vite 配置
├── tailwind.config.js          # TailwindCSS 配置
├── tsconfig.json               # TypeScript 配置
└── package.json                # 项目依赖
```

## 自定义配置

### 修改部署路径

如果需要修改 GitHub Pages 部署路径，编辑 `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/你的仓库名/',  // 修改为你的仓库名
})
```

### 修改 GitHub Actions 工作流

编辑 `.github/workflows/deploy.yml` 来自定义部署流程。

## 许可证

MIT License
