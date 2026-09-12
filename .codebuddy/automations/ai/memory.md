# AI每日速递 - 执行记忆

## 2026-08-14（早间首次采集）
- 首次运行（此前无 memory 记录）。今天文件此前不存在，新建 `data/2026-08-14.json`，id 从 1 递增。
- 共写入 15 条，JSON 校验通过（顶层单一 items 数组）。
- 类别分布：paper x5、repo x5、tutorial x2、news x2、tool x1。
- 专项覆盖：post-training（verl、TRL、GRPO教程）、rag（RAGFlow、LightRAG、MemReranker）、memory（MemRefine、Active Context Compression、Mem0、Letta、MemReranker）、agent（Co-Evolution、Spark-to-Paper、function-calling教程等）。均已加 topic 字段。
- 主要来源：HF Papers 趋势榜（2608.10299、2608.11924、2605.06132）、arXiv、GitHub（verl/ragflow/mem0/letta/lightrag）、HF Cookbook/Docs、知乎/百家号/掘金新闻与教程。
- URL 均经搜索/抓取验证；arxiv 2606.13177 与 2601.07190 为环境内可检索到的条目，页面结构正常。
- 注意：晚间补充采集时需避免与以上条目重复，新 id 从 16 起。已有重复风险项（macro/semantica/ragflow 曾在 08-13 出现）本次已规避直接复用。
- index.json 当前最新只到 07-29，未随每日文件更新（如需可后续同步，本次未改动）。

## 2026-08-15（早间首次采集）
- 今天文件此前不存在，新建 `data/2026-08-15.json`，id 从 1 递增。共 15 条，JSON 校验通过（OK count=15，顶层单一 items 数组）。
- 类别分布：repo x4、paper x4、tutorial x4、news x2、tool x1。
- 专项覆盖：post-training（Unsloth、LoRAFusion、TRL GRPO文档、mmGRPO）、rag（Cognee、RAG Chunking 2026基准、Qwen3-Reranker）、memory（Cognee、Agent记忆四层架构横评）、agent（MCP路线图、Needle2、OUROBOROS、mmGRPO、function-calling到MCP教程）。均已加 topic 字段。
- 主要来源：Kimi K3（aireleasetracker）、MCP官方博客、GitHub（unsloth 71.5k/cognee 30k/needle 5.6k/bdh 3.5k/Qwen3-Embedding）、arXiv(2510.00206)、HF TRL Docs、HF Papers 趋势榜（OUROBOROS/BDH-CQ/mmGRPO）、premai/alignify/掘金教程。
- URL 均经搜索或 web_fetch 抓取验证可访问。HF 趋势论文（OUROBOROS/mmGRPO/BDH-CQ）未拿到稳定 arxiv 编号，故 url 指向 HF Papers 趋势榜页并在 highlight 注明从趋势榜进入查看。
- 已规避与 08-14 重复项（Mem0/Letta/RAGFlow/verl/TRL库/Co-Evolution/Spark-to-Paper 等），本次改用 Unsloth/Cognee/Needle/BDH/LoRAFusion 等新条目。
- 晚间补充采集时新 id 从 16 起，避免与以上条目重复。

## 2026-08-16（早间首次采集）
- 今天文件此前不存在，新建 `data/2026-08-16.json`，id 从 1 递增。共 15 条，JSON 校验通过（OK count=15，顶层单一 items 数组，id 连续 1-15）。
- 类别分布：tutorial x6、repo x4、paper x3、news x1、tool x1。
- 专项覆盖：post-training（soup低显存微调、后训练完整指南SFT/RLHF/DPO/GRPO、Axolotl SFT+DPO、LLM微调指南2026、微调技术全景、CompactionRL）、rag（MemOS、MTEB Leaderboard、ML-Embed、向量库混合检索、开源向量库全景对比）、memory（MemOS、LongHorizon-Harness、CompactionRL）、agent（spec-kit、ego-lite、LongHorizon-Harness、CompactionRL）。均已加 topic 字段。
- 主要来源：GitHub（spec-kit 129k/MemOS 10.7k/ego-lite 11k/soup 1.6k）、arXiv(2607.05378 CompactionRL)、HF Papers(2608.01964 LongHorizon-Harness)、MTEB Leaderboard、Sundeep Teki/Axolotl/QubitTool/Zylos 教程、知乎国产开源模型生态。
- URL 均经 web_search 或 web_fetch 抓取验证可访问。
- 已规避与 08-14（verl/TRL/RAGFlow/LightRAG/Mem0/Letta/Co-Evolution/Spark-to-Paper）和 08-15（Unsloth/Cognee/Needle/BDH/LoRAFusion/Kimi K3/MCP路线图/Qwen3-Reranker/OUROBOROS/mmGRPO）重复，本次改用 spec-kit/MemOS/ego-lite/soup/LongHorizon-Harness/CompactionRL/ML-Embed 等新条目。
- 晚间补充采集时新 id 从 16 起，避免与以上条目重复。

## 2026-08-17（早间首次采集）
- 今天文件此前不存在，新建 `data/2026-08-17.json`，id 从 1 递增。共 15 条，JSON 校验通过（OK count=15，顶层单一 items 数组，id 连续 1-15）。
- 类别分布：tutorial x8、repo x3、paper x2、news x1、tool x1。
- 专项覆盖：post-training（GLM-5.3纯后训练、needle端侧模型、LoRA/QLoRA/DoRA/PiSSA选型、RaLoRA梯度本征维度ICLR2026、微调全景GaLore）、rag（Personalized长期交互、Reranker全景、RAG技术综述、Qwen3-Embedding、RAG落地实践）、memory（Personalized长期交互2510.07925）、agent（cordis、Ouroboros、Tool Use设计模式FC→MCP、多Agent五层治理、MCP多智能体实战）。均已加 topic 字段。
- 主要来源：Pandaily(GLM-5.3新闻)、GitHub（needle 6.6k/cordis 4.7k/Qwen3-Embedding）、arXiv(2608.08311 Ouroboros Terminal-Bench 86.74% SOTA、2510.07925 personalization)、掘金/CSDN/腾讯云/知乎教程。
- URL 均经 web_search 或 web_fetch 抓取验证可访问。GLM-5.3 用 Pandaily 首页作可访问来源。
- 已规避与 08-14/08-15/08-16 重复：本次改用 GLM-5.3/needle/cordis/Ouroboros/personalization(2510.07925)/RaLoRA/Qwen3-Embedding/Tool Use设计模式 等新条目（needle 为 cactus-compute/needle 端侧模型 arxiv 2607.18363，与 08-15 的 Needle2 不同项目）。
- 晚间补充采集时新 id 从 16 起，避免与以上条目重复。

## 2026-09-11（早间首次采集）
- 说明：memory 文件此前缺失 08-18 ~ 09-10 的记录（期间 data/ 目录已生成对应日期文件），本次仅补记 09-11，未回填历史。
- 今天文件此前不存在，新建 `data/2026-09-11.json`，id 从 1 递增。共 16 条，JSON 校验通过（OK count=16，topkeys=items 单一顶层 items 数组，id 连续 1-16，字段完整性检查通过，url 去重 16/16）。
- 类别分布：news x4、paper x6、repo x4、tutorial x1、tool x1。
- 专项覆盖：agent x9、memory x5、post-training x4、rag x2（topic 字段按需叠加，一条可多主题）。
- 条目清单（供后续去重）：OpenAI Agents API 公测、DeepSeek-V4.1-Flash、英伟达 SoL-Pi Harness、陶哲轩开放科学长文；arXiv 2609.08183 NeoHorse-1、2609.08798 OPRD、2609.05760 RAGMark、2609.05339 记忆可移植性、2609.04875 执行态遗忘、2609.08977 Omni Interaction Agent；GitHub obra/superpowers、tt-a1i/archify、DietrichGebert/ponytail、THU-MAIC/OpenMAIC；datawhalechina/all-in-rag；OpenBMB UltraData-RL-2609。
- 主要来源：IT之家、DeepSeek 官方、AITNT 9.11 日报、arXiv、GitHub、5radar、CSDN/devpress 日报聚合。
- URL 均经 web_fetch 逐条抓取验证可访问（arxiv 摘要页、GitHub 仓库页、官方新闻页、AITNT newDetail 页均返回正常内容）。
- 字段说明：本条起按用户要求补齐 `highlight`（中文推荐理由）、`stars`（仅 repo 为数字，其余为 null）、`tags`（英文，含 TOPIC_TAG_MAP 关键词以支持前端 topic 过滤），并保留 `time` 与 `topic` 字段；前端 js/app.js 已支持这些字段渲染。
- 已规避与 09-08/09-09/09-10 文件重复：本次未复用 Harbor Adapters、MERIT、EdgeMem、SCAFFOLD、PARSER、PRAGMA、ROAM、RD-Forget、State-Path 工具菜单、RobustSGPO、SAGE-RT、Agent 内核共享记忆等条目。
- 晚间补充采集时新 id 从 17 起，避免与以上条目重复。
- 遗留：`_check.ps1`、`_validate.ps1`、`_vcheck.ps1` 为历史遗留的临时校验脚本（未跟踪），本次更新了 `_validate.ps1` 指向当日文件用于校验。

## 2026-09-12（早间首次采集）
- 今天文件此前不存在，新建 `data/2026-09-12.json`，id 从 1 递增。共 16 条，JSON 校验通过（OK count=16，topkeys=items 单一顶层 items 数组，id 连续 1-16，字段完整性检查通过，url 去重 16/16）。
- 类别分布：news x5、paper x8、repo x2、tutorial x1。
- 专项覆盖：agent x12、memory x5、rag x5、post-training x3（topic 字段按需叠加）。
- 条目清单（供后续去重）：news — RubyHack「OpenAI Agent 蜂群攻击 RubyGems」调查报告、Anthropic 2026-09 威胁情报报告（GTG/uplift 概念）、蚂蚁 APASS 智能体商业信任基础设施（KYA）、Mo Moustafa「同一开源模型 20 家供应商差异」实测、Quesma「RTK 省 token 不等于省钱」1500 美元实测；repo — volcengine/OpenViking（36.7k，viking:// 虚拟文件系统统一记忆/RAG/技能）、nashsu/llm_wiki（18.8k，持久化 Wiki 取代传统 RAG）；paper — 2609.11636 MAPLE、2609.11682 COBRA-Skills、2609.11768 逐 Token 门控统一参数化（EOPD/ToDi）、2609.11294 AgentZip 沙箱内存压缩、2609.11318 Mr.LHDR 长时程深度研究基准、2609.08887 Q2D-Web（Perplexity，1.9 亿文档）、2609.04647 CAGE 块间一致性重排序、2609.01244 SFT 的后训练科学；tutorial — didilili/ai-agents-from-zero（4.6k）。
- 主要来源：RubyHack、Anthropic 官网、AITNT 9.12 日报、博客园「AI 技术日报 2026-09-12」（源自 theaiera.cn）、aihotradar 9.12 日报、arXiv cs.AI recent 列表页（Fri, 11 Sep 2026）、GitHub、mmoustafa.com、quesma.com。
- URL 均经 web_fetch 逐条抓取验证可访问。注意：`github.com/minghaoguo20/Mr-LHDR-eval` 会重定向到 `Mr-LHDR`，故该条目改用 arXiv 摘要页作 url；`WJ-janken/ai-agents-from-zero-to-one` 是 1 star 的 fork，已改用上游原仓库 `didilili/ai-agents-from-zero`（4.6k）。
- 已规避与 09-11 文件重复：未复用 OpenAI Agents API、DeepSeek-V4.1-Flash、SoL-Pi、陶哲轩长文、NeoHorse-1、OPRD、RAGMark、记忆可移植性、执行态遗忘、Omni Interaction Agent、superpowers、archify、ponytail、OpenMAIC、all-in-rag、UltraData-RL-2609。
- 晚间补充采集时新 id 从 17 起，避免与以上条目重复。
