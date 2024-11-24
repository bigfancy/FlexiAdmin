# env

loadEnv 的加载逻辑是基于 mode 参数来决定加载哪些环境变量文件的。它的加载顺序和优先级如下：
.env - 默认加载，始终加载
.env.local - 默认加载，但会被 git 忽略
.env.[mode] - 基于 mode 加载，如 .env.development
.env.[mode].local - 基于 mode 加载，但会被 git 忽略
例如，当运行以下命令时：

```bash
# 开发环境
npm run dev         # mode = development
# 或
vite --mode development

# 生产环境
npm run build       # mode = production
# 或
vite build --mode production

# 自定义环境
vite --mode staging # mode = staging
```

```
// 当 mode = 'development' 时的加载顺序：
1. .env
2. .env.local
3. .env.development
4. .env.development.local

// 当 mode = 'production' 时的加载顺序：
1. .env
2. .env.local
3. .env.production
4. .env.production.local
```

# mock
在使用 mock 的情况下，请求会被 mock 服务器拦截处理，不会走代理。

1.启用 Mock 时 (VITE_MOCK_DEV_SERVER=true)
```
// 请求处理优先级
前端请求 -> Mock 服务拦截 -> 返回 Mock 数据
```
2. 禁用 Mock 时 (VITE_MOCK_DEV_SERVER=false)

```
// 请求处理优先级
前端请求 -> 代理服务器 -> 真实后端接口
```
