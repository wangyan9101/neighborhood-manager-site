# 《小区经理》官方网站

《小区经理》是一款聚焦中国现代住宅社区的运维模拟经营游戏。玩家需要管理电梯、停车场、快递柜等设施，在有限预算、设备健康度与居民满意度之间作出选择。

本仓库只包含官方网站，不包含 Unity 游戏、FastAPI 后端、智慧运营 Chat 或运营管理平台。

## 技术栈

- Next.js 16.2（App Router）
- React 19
- TypeScript
- Tailwind CSS 4
- Three.js / React Three Fiber / Drei
- Framer Motion
- Lucide React
- ESLint
- pnpm 11

页面默认使用 Server Component，Three.js、导航、页面过渡和 Steam 友好提示封装在小型 Client Component 边界内，没有引入大型 UI 框架。

## 环境要求

- Node.js 20.19 或更高版本，推荐 Node.js 24 LTS
- pnpm 11
- 可选：Docker 24 或更高版本

## 安装 pnpm

Node.js 自带 Corepack 时，可以执行：

```bash
corepack enable
corepack prepare pnpm@11.11.0 --activate
pnpm --version
```

```
pnpm.cmd --version
pnpm.cmd install
pnpm.cmd dev
```


如果系统没有 Corepack，可参考 [pnpm 官方安装说明](https://pnpm.io/installation)。

## 本地开发

安装依赖：

```bash
pnpm install
```

复制环境变量示例并按需修改。Windows PowerShell：

```powershell
Copy-Item env.example .env.local
```

启动开发服务器：

```bash
pnpm dev
```

访问 `http://localhost:3000`。

## 质量检查与生产构建

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

生产服务默认监听 `http://localhost:3000`。

## Docker 构建与运行

构建镜像：

```bash
docker build -t neighborhood-manager-site .
```

不配置外部服务时直接运行：

```bash
docker run --rm -p 3000:3000 neighborhood-manager-site
```

使用环境变量文件运行：

```bash
docker run --rm -p 3000:3000 --env-file .env.local neighborhood-manager-site
```

镜像使用 Next.js standalone 输出，不需要在运行阶段连接数据库、FastAPI 或 Unity 服务。

## 环境变量

| 变量 | 用途 | 未设置时的行为 |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 官网公开地址，用于 Metadata、robots 和 sitemap | 使用示例域名 `https://neighborhood-manager.example.com` |
| `NEXT_PUBLIC_STEAM_URL` | Steam 商店页 | 展示“商店页面正在准备中”的提示，不发生跳转 |
| `NEXT_PUBLIC_CHAT_URL` | 智慧运营 Chat | 按钮显示“敬请期待” |
| `NEXT_PUBLIC_WEBGL_URL` | Unity WebGL 试玩地址 | 引导至站内 `/play` 占位页 |
| `NEXT_PUBLIC_API_BASE_URL` | 未来 FastAPI 地址 | 当前不发起任何 API 请求 |

只有合法的 `http` 或 `https` 地址会被接受。空值或无效地址都会安全降级。

## 页面结构

| 路由 | 内容 |
| --- | --- |
| `/` | 首页：定位、卖点、玩法循环、设施、截图占位、进度、日志和入口 |
| `/game` | 游戏背景、核心循环、经营指标与多平台方向 |
| `/facilities` | 六类首批设施及示例事件 |
| `/devlog` | 三篇可确认的开发记录 |
| `/devlog/[slug]` | 日志正文、上一篇和下一篇导航 |
| `/press` | 游戏事实表、媒体资料与 Press Kit 占位 |
| `/media` | 兼容旧链接，重定向到 `/press` |
| `/play` | WebGL 试玩预留页 |
| `/about` | 作者、创作目标和开发边界 |
| `/faq` | 游戏状态、平台与项目定位的常见问题 |

同时提供自定义 404、`robots.txt`、`sitemap.xml`、全局 Metadata、Open Graph 信息和程序生成的 favicon。favicon 当前使用“区”字作为简洁占位标识，正式品牌标识确定后可替换 `src/app/icon.tsx`。

## 内容与代码位置

```text
src/
├── app/                 # 路由、Metadata、SEO 文件和全局样式
├── components/          # 布局、首页、游戏和通用 UI
├── content/             # 页面文案、设施与开发日志数据
├── lib/                 # 环境配置和工具函数
└── types/               # 共享类型
```

主题颜色、圆角、阴影和页面宽度统一定义在 `src/app/globals.css` 顶部的 CSS 变量中。主要文案与设施数据位于 `src/content`，便于后续维护。

## Steam、域名与素材替换

- Steam 商店链接：在 `.env.local` 设置 `NEXT_PUBLIC_STEAM_URL`，统一读取位置为 `src/lib/config.ts`。
- 正式域名：在 `.env.local` 设置 `NEXT_PUBLIC_SITE_URL`；SEO、robots 与 sitemap 会同步更新。
- 品牌资源：`src/assets/brand`。
- 设施图标：`src/assets/icons`（当前使用 Lucide React）。
- 游戏截图：`src/assets/screenshots`。
- Press Kit：`src/assets/press` 与 `public/downloads`。

## Three.js 性能与降级

首页微缩社区只使用基础几何体，无外部模型、纹理或后期处理。Canvas 采用正交相机、`dpr={[1, 1.35]}` 和 `performance={{ min: 0.5 }}`；页面失焦时暂停场景更新，`prefers-reduced-motion` 下停止自动旋转与视差。Canvas 设置 `pointer-events: none`，不会阻挡滚动和按钮。WebGL 初始化失败时由错误边界切换到 CSS 渐变占位。

## 部署

Vercel 为首选，仓库中的 `vercel.json` 使用 Next.js 原生路由，不需要 SPA rewrite。Cloudflare Pages 可使用 Next.js 适配器。GitHub Pages 设置 `DEPLOY_TARGET=github-pages` 后会启用 `basePath`、静态导出和资源前缀；该配置不会影响 Vercel 默认部署。

## 后续接入位置

### Unity WebGL

当前 `/play` 仅为占位页面，不包含 Unity 构建文件。后续建议：

1. 将轻量 WebGL 构建独立部署到对象存储或静态站点。
2. 把公开地址写入 `NEXT_PUBLIC_WEBGL_URL`。
3. 如需站内嵌入，再在 `src/app/play/page.tsx` 增加经过加载与移动端测试的容器。

不建议把体积较大的 Unity 构建直接提交到本官网仓库。

### FastAPI

当前官网完全静态，不依赖后端。未来如需读取公开开发进度或订阅信息，可在服务端数据访问层读取 `NEXT_PUBLIC_API_BASE_URL`，并为失败、超时和空数据保留当前静态内容作为降级。不要在组件中散落后端地址。

## 项目原则

- 不虚构上线日期、商店地址、完成度、媒体评价或玩家数据。
- 外部地址只有配置后才开放。
- 优先小而完整的 MVP，不引入数据库、登录、CMS 或复杂动画系统。
- 使用系统中文字体栈，不依赖远程字体。
