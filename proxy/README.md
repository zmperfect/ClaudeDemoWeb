# A2 方案部署说明：Serverless 代理（Cloudflare Worker）

目标：前端**不再持有任何 GitHub Token**。前端只调用你自己的 Worker 接口，
Worker 在服务端用 PAT 触发 `hide-item.yml`，改动仓库里的 JSON，从而实现
「不感兴趣」的**跨设备同步**。

```
浏览器（任意设备）
   │  POST /hide  { date, item_id }
   ▼
Cloudflare Worker（持有 PAT，存在服务端 Secret）
   │  触发 workflow_dispatch
   ▼
GitHub Actions: hide-item.yml → 修改 data/YYYY-MM-DD.json → push
   ▼
GitHub Pages 重新发布 → 所有设备下次加载即同步
```

---

## 第 0 步（最重要）：吊销旧 PAT

旧的 PAT 已经进了 git 历史和线上前端，**必须先吊销**，删代码不够。

1. 打开 https://github.com/settings/tokens
2. 找到之前那个 `github_pat_11AY...` 令牌，点 **Delete / Revoke**。

---

## 第 1 步：新建一个 Fine-grained PAT

1. https://github.com/settings/tokens?type=beta → **Generate new token**
2. **Repository access**：只选 `zmperfect/ClaudeDemoWeb` 这一个仓库
3. **Permissions → Repository permissions → Actions**：设为 **Read and write**
4. 生成后复制 token（形如 `github_pat_...`），只显示一次，先存好。

---

## 第 2 步：部署 Worker

需要安装 Node.js 和 Wrangler CLI（Cloudflare 官方工具）。

```bash
# 安装 wrangler
npm install -g wrangler

# 登录 Cloudflare（会打开浏览器授权）
wrangler login

# 进入 proxy 目录
cd proxy

# 把第 1 步的 PAT 存为 Secret（不会出现在代码/配置里）
wrangler secret put GITHUB_TOKEN
# 粘贴 token，回车

# 部署
wrangler deploy
```

部署成功后，wrangler 会输出你的 Worker 地址，形如：

```
https://claudedemoweb-proxy.<your-subdomain>.workers.dev
```

---

## 第 3 步：把 Worker 地址填回前端

编辑 `js/app.js` 顶部：

```js
const PROXY_URL = 'https://claudedemoweb-proxy.<your-subdomain>.workers.dev/hide';
```

把 `<your-subdomain>` 换成上一步实际输出的子域名，末尾保留 `/hide`。

---

## 第 4 步：确认 wrangler.toml 配置

`proxy/wrangler.toml` 里的两个非敏感变量按需修改：

```toml
[vars]
GITHUB_REPO  = "zmperfect/ClaudeDemoWeb"        # 目标仓库
ALLOW_ORIGIN = "https://zmperfect.github.io"    # 你的 GitHub Pages 站点来源
```

> `ALLOW_ORIGIN` 用来做 CORS 白名单，只允许你的站点调用。
> 本地调试时可临时改成 `*`，上线后建议锁定为具体域名。

---

## 第 5 步：提交并验证

```bash
git add js/app.js proxy/
git commit -m "A2: 用 Cloudflare Worker 代理触发 hide-item，移除前端硬编码 PAT"
git push
```

验证：
1. 打开线上站点，F12 → Network。
2. 点某张卡片的「×」（不感兴趣）。
3. 应看到一条发往 `.../hide` 的 POST，返回 `{ ok: true }`。
4. 稍等 Actions 跑完（GitHub 仓库 Actions 面板可查），换一台设备/浏览器打开，
   该条目应已消失 —— 说明跨设备同步生效。

---

## 安全说明

- 前端**零密钥**：F12 里再也看不到任何 token。
- token 只存在 Cloudflare Worker 的 Secret 中，前端拿不到。
- Worker 只开放 `POST /hide` 一个端点，并校验 `date` 格式，无法被拿去触发其它 workflow。
- CORS 限定到你的站点来源，降低被他人接口滥用的风险。

> 提示：如需进一步防刷，可在 Worker 里加简单频率限制（Cloudflare Rate Limiting）
> 或校验一个只有前端和 Worker 知道的轻量 header，本方案已满足个人站点需求。
