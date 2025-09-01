# my-nest-app - NestJS 全栈应用

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">基于 NestJS 框架构建的全栈 Web 应用，包含后端 API 服务和前端界面</p>

## 🚀 功能特性

- **后端 API**: 基于 NestJS 构建的 RESTful API
- **前端界面**: 响应式设计的现代化 Web 界面
- **静态文件服务**: 内置静态资源服务支持
- **API 版本控制**: 支持 URI 版本控制
- **错误处理**: 完善的错误处理机制

## 📦 技术栈

### 后端
- **NestJS** - 渐进式 Node.js 框架
- **TypeScript** - 类型安全的 JavaScript
- **Serve Static** - 静态文件服务模块

### 前端
- **HTML5** - 现代语义化标记
- **CSS3** - 响应式设计和动画效果
- **JavaScript ES6+** - 现代化前端逻辑
- **Fetch API** - 异步数据请求

## 📁 项目结构

```
my-nest-app/
├── src/                    # 后端源代码
│   ├── app.controller.ts   # 主控制器
│   ├── app.module.ts       # 主模块
│   ├── app.service.ts      # 业务服务
│   └── main.ts             # 应用入口
├── public/                 # 前端静态资源
│   ├── index.html          # 主页面
│   ├── styles.css          # 样式表
│   └── app.js              # 前端逻辑
├── dist/                   # 编译输出
└── test/                   # 测试文件
```

## 🛠️ 安装和运行

### 环境要求
- Node.js 16+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发模式运行
```bash
# 启动开发服务器（支持热重载）
npm run start:dev
```

### 生产模式运行
```bash
# 编译项目
npm run build

# 启动生产服务器
npm run start:prod
```

## 🌐 API 接口

### 版本 1 (v1)
- `GET /v1/api/hello` - 获取欢迎信息
- `GET /v1/api/users` - 获取用户列表
- `GET /v1/api/status` - 获取系统状态

### 响应示例
```json
// /v1/api/users
[
  {
    "name": "张三",
    "email": "zhangsan@example.com"
  },
  {
    "name": "李四", 
    "email": "lisi@example.com"
  }
]

// /v1/api/status
{
  "status": "运行中",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "version": "1.0.0"
}
```

## 🧪 测试

```bash
# 运行单元测试
npm run test

# 运行端到端测试
npm run test:e2e

# 生成测试覆盖率报告
npm run test:cov
```

## 📊 前端功能

### 页面布局
- **头部区域**: 应用标题和简介
- **内容区域**: 三栏式卡片布局
  - 欢迎信息卡片
  - 用户列表卡片
  - 系统状态卡片
- **页脚区域**: 版权信息

### 交互特性
- 异步数据加载
- 加载状态提示
- 错误处理显示
- 响应式设计
- 卡片悬停效果

## 🔧 配置说明

### 静态文件配置
在 app.module.ts 中配置静态文件服务路径：

```typescript
ServeStaticModule.forRoot({
  rootPath: join(__dirname, '..', 'public')
})
```

### 版本控制配置
在 main.ts 中启用 URI 版本控制：

```typescript
app.enableVersioning({
  type: VersioningType.URI
});
```
### 查看服务器终端输出
在 运行服务器的终端窗口 中，您会看到类似这样的日志：
```plaintext
[2024-01-15T10:30:45.123Z] GET / - 200 - 15ms
[2024-01-15T10:30:46.789Z] GET /api/users - 200 - 8ms
[2024-01-15T10:30:47.456Z] GET /api/status - 200 - 5ms
```

## 🚦 开发指南

### 添加新的 API 端点
1. 在 app.controller.ts 中添加新的控制器方法
2. 在 app.service.ts 中实现业务逻辑
3. 在前端 app.js 中添加对应的数据获取函数

### 修改前端样式
编辑 styles.css 文件来调整界面样式

## 📝 脚本命令

| 命令 | 描述 |
|------|------|
| `npm run start` | 启动生产服务器 |
| `npm run start:dev` | 启动开发服务器（热重载） |
| `npm run start:debug` | 启动调试模式 |
| `npm run start:prod` | 编译并启动生产服务器 |
| `npm run test` | 运行单元测试 |
| `npm run test:watch` | 监听模式运行测试 |
| `npm run test:cov` | 生成测试覆盖率报告 |
| `npm run test:e2e` | 运行端到端测试 |
| `npm run build` | 编译项目 |

## 📄 许可证

此项目基于 [MIT licensed](LICENSE)。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

<p align="center">使用 ❤️ 构建于 NestJS 框架</p>