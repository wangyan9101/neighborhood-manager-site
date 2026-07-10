# 《小区经理》官方网站

《小区经理》是一款聚焦中国现代住宅社区的运维模拟经营游戏。玩家需要管理电梯、停车场、快递柜等设施，在有限预算、设备健康度与居民满意度之间作出选择。

本仓库只包含官方网站，不包含 Unity 游戏、FastAPI 后端、智慧运营 Chat 或运营管理平台。

## 技术栈

- Next.js 16.2（App Router）
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- pnpm 11

页面默认使用 Server Component。当前移动导航、FAQ 等交互依赖原生 HTML 能力，没有引入客户端状态库或第三方 UI 组件库。

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
| `NEXT_PUBLIC_SITE_URL` | 官网公开地址，用于 Metadata、robots 和 sitemap | 使用 `http://localhost:3000` |
| `NEXT_PUBLIC_STEAM_URL` | Steam 商店页 | 按钮显示“敬请期待” |
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
| `/devlog` | 可确认的开发记录 |
| `/media` | 媒体资料状态、项目事实与使用说明 |
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
