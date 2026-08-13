/**
 * Cloudflare Worker —— GitHub Actions 触发代理
 *
 * 作用：前端不再持有任何 GitHub Token。
 * 前端调用本 Worker 的 /hide 接口，Worker 用服务端保存的 PAT
 * 去触发仓库里的 hide-item.yml workflow，实现「不感兴趣」跨设备同步。
 *
 * 需要在 Worker 环境变量（Secrets）中配置：
 *   GITHUB_TOKEN   —— Fine-grained PAT，仅授权本仓库、Actions: Read and write
 *   GITHUB_REPO    —— 形如 "zmperfect/ClaudeDemoWeb"
 *   ALLOW_ORIGIN   —— 允许的前端来源，形如 "https://zmperfect.github.io"（可选，默认 *）
 */

export default {
  async fetch(request, env) {
    const origin = env.ALLOW_ORIGIN || '*';

    const corsHeaders = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    };

    // 预检请求
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const url = new URL(request.url);

    if (request.method !== 'POST' || url.pathname !== '/hide') {
      return json({ error: 'Not found' }, 404, corsHeaders);
    }

    if (!env.GITHUB_TOKEN || !env.GITHUB_REPO) {
      return json({ error: 'Server not configured' }, 500, corsHeaders);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Invalid JSON body' }, 400, corsHeaders);
    }

    const { date, item_id } = body || {};

    // 基本校验，避免被拿去当作任意 workflow 触发器
    if (!isValidDate(date) || item_id === undefined || item_id === null) {
      return json({ error: 'Invalid date or item_id' }, 400, corsHeaders);
    }

    const dispatchUrl =
      `https://api.github.com/repos/${env.GITHUB_REPO}/actions/workflows/hide-item.yml/dispatches`;

    const ghResp = await fetch(dispatchUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'User-Agent': 'ClaudeDemoWeb-Proxy',
      },
      body: JSON.stringify({
        ref: 'master',
        inputs: { date: String(date), item_id: String(item_id) },
      }),
    });

    // GitHub dispatch 成功返回 204 No Content
    if (ghResp.status === 204) {
      return json({ ok: true }, 200, corsHeaders);
    }

    const detail = await ghResp.text();
    return json({ error: 'GitHub dispatch failed', status: ghResp.status, detail }, 502, corsHeaders);
  },
};

function isValidDate(d) {
  return typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d);
}

function json(obj, status, headers) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { ...headers, 'Content-Type': 'application/json' },
  });
}
