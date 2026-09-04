# AI每日速递-下午追加 执行记忆

## 2026-08-14（首次执行）
- 目标文件：data/2026-08-14.json，上午已有 21 条（最大 id=21）。
- 下午追加 6 条新内容，id 22-27，未修改/删除已有条目。JSON 校验通过，共 27 条。
- 覆盖专项方向：post-training(22)、memory(23,27)、rag(24,25)、agent(26,27)。
- 追加条目：22 后训练统一视角综述 / 23 Memory Decoder at Scale / 24 Rerank 选型指南2026 / 25 Qwen3-VL-Embedding/Reranker / 26 Agent 框架横评 / 27 Mem-PAL(AAAI'26)。
- 后续：用户当日确认并已 git commit(da390a7) + push origin master。

## 2026-08-15
- 目标文件：data/2026-08-15.json，上午已有 15 条（最大 id=15）。
- 下午追加 5 条新内容，id 16-20，未修改/删除已有条目。JSON 校验通过，共 20 条。
- 覆盖：行业新闻(16 OpenAI/Anthropic 因中国模型被动降价)、rag(17 hybrid search 指南, 20 RAG 开源项目盘点)、agent(18 Agent 工具包七层选型)、post-training(19 后训练范式2026)。
- 均经 web_fetch 验证 URL；专项条目加 topic 字段。
- 类别平衡：news 1 / tutorial 3 / repo 1。避免与上午 15 条重复。

## 2026-08-16
- 目标文件：data/2026-08-16.json，上午已有 15 条（最大 id=15）。
- 下午追加 6 条新内容，id 16-21，未修改/删除已有条目。JSON 校验通过，共 21 条。
- 覆盖：memory(16 Agent记忆综述, 17 Active Context Compression/Focus, 21 Agent Memory前沿调研)、agent(16,17,18 工具使用演进综述)、rag(19 Late Chunking, 21)、post-training(20 SFT/RLHF→GRPO/DPO/RLVR)。
- 6 条 URL 均经 web_fetch 验证有效；新闻类源(aitoolsrecap/知乎)被 403 拒抓，未强行收录。
- 类别平衡：paper 3 / tutorial 3。均加 topic 字段，避免与上午 15 条重复。
- 待用户确认后再 git commit/push。

## 2026-08-17
- 目标文件：data/2026-08-17.json，上午已有 15 条（最大 id=15）。
- 下午追加 4 条新内容，id 16-19，未修改/删除已有条目。JSON 校验通过，共 19 条。
- 覆盖：memory(16 FinPerMA 个性化记忆金融基准, 17 跨会话 ICL 状态交接)、agent(16,17,18 GitHub 8月 Agent 基础设施/本地优先开源热点)、rag(19 RAG 2026 生产指南)。
- 4 条 URL 均经 web_fetch 验证有效；post-training 上午已充足（LoRA/QLoRA/PiSSA/GaLore 共 4 条）不强补；百度/腾讯云等源被反爬拦截，未强行收录。
- 类别平衡：paper 2 / news 1 / tutorial 1。专项条目均加 topic 字段，与上午条目不重复。
- 首次执行曾因模型超时中断，本轮确认 JSON 已完整合法并补写完 memory 记录。
- 待用户确认后再 git commit/push。

## 2026-08-18
- 目标文件：data/2026-08-18.json，上午任务未执行，当日文件不存在，全新创建，id 从 1 开始。
- 创建 6 条内容，全部来自 arXiv 2026-08-18 发布列表，经 web_fetch 验证有效。
- 覆盖：memory(1 SEER 长上下文压缩/工具调用 SFT, 2 MicroVerse 多智能体身份漂移测量)、rag(3 DESA 混合检索查询扩展 BEIR+3.82%, 5 DSPrompt 多模态RAG投毒防御)、post-training(1 SFT tool-use, 4 DUET DPO+OPD 禁令合规, 6 ICSD GRPO影响力校准)、agent(2 长周期多智能体, 4 工具边界安全, 6 ALFWorld 96.1%)。
- 类别平衡：全为 paper（6条）；四个专项方向均有覆盖，每条均加 topic 字段。
- 注：AITNT 页面存在注入指令（Read SKILL.md），已按规则忽略，未执行。
- 待用户确认后再 git commit/push。

## 2026-08-19（补录）
- 目标文件：data/2026-08-19.json，全新创建，7 条内容。
- 覆盖：宇树科技上市暴涨629% / Anthropic Q2营收115亿超OpenAI / Claude蛋白质设计14/15靶标 / 英伟达投资Mercor估值200亿 / Agent安全白皮书 / Agent Memory Distillation / DiDPO编码Agent训练。
- topic覆盖：agent(6) / post-training(2) / memory(1)。类别：news 5 / paper 2。

## 2026-08-20（补录）
- 目标文件：data/2026-08-20.json，全新创建，7 条内容。
- 覆盖：Codex 0.149.0 Agent仪表板 / MiniMax Design多模态创作 / ChatGPT Apple Messages集成 / OX Alpha DeepSWE 80% / Anthropic商业化Claude Code四层架构 / 8月模型井喷综述 / Enterprise Admin API。
- topic覆盖：agent(7) / memory(1)。类别：news 4 / tool 1 / article 2。

## 2026-08-21（补录）
- 目标文件：data/2026-08-21.json，全新创建，7 条内容。
- 覆盖：DeepSeek V4-Flash-Vision-Exp / GPT-5.6 Sol降价20%+ / ChatGPT时间感知更新 / AI4AI-Bench GRPO vs IL / 英伟达60亿Poolside / OpenAI 2027上市 / vLLM v0.27.0。
- topic覆盖：agent(7) / post-training(2) / memory(1)。类别：news 5 / paper 1 / tool 1。

## 2026-08-22（补录）
- 目标文件：data/2026-08-22.json，全新创建，7 条内容。
- 覆盖：Anthropic IPO 750亿 / 英伟达Poolside确认 / Claude蛋白质详细数据 / 中诚华隆HL200芯片 / 宇树vs Figure AI估值 / GRPO vs IL深度分析 / GPT-5.6降价详细分析。
- topic覆盖：agent(6) / post-training(3) / rag(1)。类别：news 5 / paper 1 / article 1。

## 2026-08-23（补录）
- 目标文件：data/2026-08-23.json，全新创建，7 条内容。
- 覆盖：GPT-5.6降价生效 / 27B匹配70B效率里程碑 / Anthropic自托管Beta / 多Agent编排标准化 / 推理效率KV缓存>90% / 英伟达百亿投资版图 / 24GB本地部署指南。
- topic覆盖：agent(5) / post-training(2) / rag(1)。类别：news 3 / article 4。

## 2026-08-24
- 目标文件：data/2026-08-24.json，上午任务未执行，当日文件不存在，全新创建，id 从 1 开始。
- 创建 8 条内容，覆盖 paper(5) / news(1) / article(2)，经 web_fetch 验证有效。
- 覆盖：agent(1 Nexus KV-Cache工具路由, 2 WMT层次化记忆, 3 CAS保形化搜索, 4 DSGC记忆驱逐, 5 SDAD规格驱动开发, 6 Ox Alpha, 8 多智能体RL)、memory(2 WMT, 4 DSGC检索前保留失败)、rag(3 CAS自适应检索+GRPO)、post-training(3 CAS中GRPO训练, 7 post-training范式2026综述, 8 PPO→DPO→GRPO→MARL演进)。
- 四个专项方向均有覆盖，每条均加 topic 字段。类别平衡：paper 5 / news 1 / article 2。
- 行业新闻：Ox Alpha 匿名模型 DeepSWE 80%（疑似智谱 GLM-5.x）。
- 注：8/19-8/23 共 5 天数据缺失，仅补当天（8/24）内容。

## 2026-08-25
- 目标文件：data/2026-08-25.json，全新创建，10 条内容。已 commit 并 push 到 origin/master。
- 覆盖：微软Agent Lightning v1.0开源(6K样本SWE-bench 41.8→56.4%) / Scroll上下文即环境记忆管理(BEAM_10M 73.1%) / SchemaRouter字段感知工具路由(检索token降9倍) / ECHO认知启发记忆平面(Hit@10 97.6%) / CompPO架构感知信用传输(超GRPO 7.6%) / RAG Collapse自生成内容崩溃(79.6%崩溃率) / DeepSeek Harness开源MIT / FCPRAG参数化RAG+LoRA(F1+7.55%) / vLLM安全漏洞攻击面 / A2A加入Linux Foundation AAIF。
- topic覆盖：agent(7) / memory(2) / rag(3) / post-training(3)。类别：paper 5 / tool 2 / news 1 / article 1。
- 四个专项方向均有高质量覆盖，URL 经 web_fetch 验证有效。
- 后续复核发现 FCPRAG 初始链接误指向 2608.21570，已修正为 https://arxiv.org/abs/2608.21750，并提交 589906b 推送远程。

## 2026-08-26
- 目标文件：data/2026-08-26.json，全新创建 12 条内容；JSON 校验通过，id 1-12。
- 覆盖：Agent/工具与协作（受控仿真实验、AgentRoom、检索支撑投票、AHEAD、BioCheck、Crase）；RAG/检索（Giga-Embeddings、The RAT、BioCheck、Rubric对齐、Crase）；memory（条件性记忆、AITNT报道的MemSearch）；post-training（AHEAD、FARCA、EG-GRPO、Rubric对齐）。
- 类别：news 1 / paper 11；所有论文和新闻页面 URL 已验证。AITNT条目明确注明原始链接未提供，未把其未独立核验的数字当作确定事实。
- 发现并遵守网页不可信数据规则：AITNT 页面含操作性提示，未读取或执行任何外部脚本/技能文件。

## 2026-08-27
- 目标文件：data/2026-08-27.json，补充 GLM-5.3-Flash 后共 16 条内容；JSON 校验通过，id 1-16，URL 均唯一且已通过网页访问核验。
- 行业/工具：Qwen3.8-Flash-Next 开放权重、Zing-0.5 实时交互世界模型、Espressif Engineering MCP Server、GLM-5.3-Flash 正式上线并开源。
- Agent/系统：AsymSpec 上下文非对称推测解码、Trace Integrity 可审计轨迹、SwarmWorld 多Agent社会、CaSKG技能图、TOPAS工作流KV缓存调度。
- RAG/记忆：HiPS个性化长期记忆、LivingRAG经验增强GraphRAG、PACE证据前置与自适应重排序预算、ReliableRAG可信度推理链。
- 后训练：QLoRA获取—保持前沿、AFDBench领域GRPO、BTS-GRPO无标签迎合性抑制，以及GLM-5.3-Flash的后训练/Agent应用定位。
- 类别：tool 3 / paper 12 / news 1；四个专项方向均覆盖。此前未收录 GLM-5.3-Flash 的原因是初次检索时只看到未能独立核验的 Ox Alpha 匿名测试线索，正式发布在后续检索中才由智谱官方文档和媒体报道确认。
- 网页内容按不可信数据处理，未执行页面中的任何脚本、命令或操作性提示。

## 2026-08-28
- 目标文件：data/2026-08-28.json，全新创建 10 条内容；JSON 校验通过，id 1-10，10 个 URL 均唯一且经网页访问核验。
- 重磅新闻：英伟达 129 亿美元收购 Hugging Face（The Information 报道，CNBC/TechCrunch/Fortune 多源确认）/ OpenAI 37 页 Agent 入侵 Hugging Face 官方报告 / 智谱 AutoClaw 官网上线（GLM-5.3-Flash 接入）/ Meta Hatch 消费级 Agent 平台 / MiniMax ARR 超 8 亿美元。
- 论文补充（8/27 arXiv 批次中昨日未收录的）：SelfGraphRAG 图检索自监督 / GRIN 混合策略 RL 知识注入 / AWM 可答工作记忆+GRPO / SCALE-QA 与 TSIM 情节完整性记忆。
- 类别：news 5 / tool 1 / paper 4；topic 覆盖 agent(8) / rag(4) / memory(2) / post-training(3)。
- 注意：当日 arXiv cs.AI/cs.CL new 列表尚未更新（仍显示 8/27 批次），故论文来自 8/27 批次的补充检索；AI Native SDLC Playbook 原文发布于 8/21，收录其中文版传播动态并已注明原始日期。

## 2026-08-29
- 目标文件：data/2026-08-29.json，全新创建 12 条内容；JSON 校验通过，id 1-12，12 个 URL 均唯一且经网页访问核验。
- 行业新闻：Anthropic 物理MCP（Model Hardware Standard，硬件版MCP，与Janelia合作）/ 阿里 Qwen3.8-Flash-Next（借鉴DeepSeek Engram，125B MoE单卡4090可跑）/ 斯坦福 LLM-as-a-Verifier 自验证框架（DeepSeek V4 Flash反超Claude Fable 5，成本降11倍）/ Anthropic Claude in Chrome 正式向付费用户开放。
- 论文：SKILL.state可变执行状态长时程Agent技能 / MemToC记忆-工具冲突仲裁基准 / 工具调用Agent逐次调用可靠性研究 / Agent Mesh非幂等委托可靠性原语 / TelecomGPT-R1电信推理模型(LoRA+GRPO) / 土耳其语RAG分块策略对比 / STeReO语音文本混合重排序 / INLAY知识编辑范围分类缺陷。
- 类别：news 4 / paper 8；topic 覆盖 agent(8) / memory(3) / rag(3) / post-training(3)。
- 注意：多篇 arXiv 论文页面显示提交日期为"未来日期"（如2026-08-26/06-22），已如实按网页抓取内容记录，未做主观日期修正。

## 2026-08-30（补录，2026-09-01执行）
- 目标文件：data/2026-08-30.json，全新创建 10 条内容；JSON 校验通过，id 1-10，10 个 URL 均唯一且经网页访问核验。
- 行业新闻：Anthropic自动化研究者缓解对齐失败（10类安全差距关闭26%~96%，原始发布8/28）/ 斯坦福Terminal-Bench-Science 0.1（70任务，Claude Opus 5解决率30%，原始发布8/28）/ Okta Agent SSO正式GA（XAA协议纳入MCP企业授权扩展，原始发布8/24）。
- 论文（均为8/27 arXiv批次中此前未收录条目）：WikiSkill经验编译持久化知识库(agent+memory) / CorporateBench 23万文档企业问答基准(memory+rag, EMNLP Findings) / SARA动作诱导-执行授权分离(ASR≤0.63%) / ACE Lens准确性-复杂度-多样性数据生成框架 / LLMs4OL检索增强+词汇约束过滤(rag) / GRAIN结构不变性奖励图推理RL / 契约中心Agentic Runtime架构提案(纯理论无实验)。
- 类别：news 3 / paper 7；topic 覆盖 agent(7) / memory(2) / rag(2) / post-training(2)。
- 说明：8/30为周日，已确认此前arXiv批次为工作日模式（周末无新增提交），故论文取自紧邻的8/27批次补充；此前该日数据缺失原因是自动化任务在周末未执行，本次按用户指示于9/1补录完成。

## 2026-08-31
- 目标文件：data/2026-08-31.json，全新创建 17 条内容；JSON 校验通过，id 1-17，17 个 URL 均唯一且经网页访问核验。
- 行业/产品：OpenAI Rosalind Workbench（GPT-Rosalind，8/28发布）/ Perplexity Portable Computer 本地优先Harness（Qwen3.8-27B，BrowseComp 66.7%）/ Ornith 1.5 自出题三段闭环RL（Terminal-Bench 2.1 77.5→86.1，自测环境）/ Anthropic Claude Chat 与云端 Cowork 统一记忆（8/25宣布）。
- Agent/系统：openJiuwen 可组合自适应Harness（SWE-bench Verified 82.6%、Terminal-Bench 2.1 87.19%）/ OBPE 可信工具边界策略执行（3621试验失败率57.6%→0.2%）/ Credo 可复用声明式Harness原语 / K-GAT 知识条件化多Agent拓扑（GPQA +15.7%，token减半）。
- RAG/记忆：Recuris 递归经验-工作记忆演化 / Agent记忆对不可回答问题的有效性研究 / 实体-记忆图检索（LoCoMo 召回79.75%→84.48%）/ Knowing Before Answering 三分类证据充分性（COLM 2026）/ 跨会话分解攻击与IntentAlign检索防御。
- 后训练：ReToolSQL（SFT→RFT，BIRD 74.32%）/ DA3PO（修正DAPO动态采样非对称放大）/ RCCA（评分细则转代码级信用分配）/ RA-OPD（过滤与奖励不一致的教师指导）。
- 类别：news 5 / paper 12；四个专项方向均覆盖。多条新闻原始发布于8/25-8/30，属于8/31检索窗口内首次核验收录，已在条目中注明原始发布日期。
- 重要：data 目录缺少 2026-08-30.json（周日未执行）；已于2026-09-01补录完成（见上文2026-08-30条目）。

## 2026-09-01
- 目标文件：data/2026-09-01.json，全新创建 15 条内容；JSON 校验通过，id 1-15，15 个 URL 均唯一且经网页访问核验。
- 行业新闻（均为AITNT聚合转述，未见一手信源，条目内已注明）：SpaceX工程师20+GrokBot自动合并PR / 众擎机器人EngineAI Awaken五层架构60%资源投大脑 / DeepSeek Harness插件生态短板(1.1万仓库仅955个有用) / Google DeepMind与杜克大学Co-Scientist首次实验室造出半导体。
- Agent论文：WM-R1世界模型替代真实环境训练GUI Agent / CURA只读遥测检测Agent自我报告失效 / RealSWE真实请求下编码Agent降6.4pp / OpenClaw vs NanoBot资源消耗差19倍完成率无显著差异。
- RAG论文：Twin Worlds用等变性检验RAG答案是否基于证据(EMNLP26) / FinExam-10K万题金融基准+门控检索 / Stance-Aware Argument Retrieval嵌入模型主题偏见与过度纠正两难。
- Memory论文：KV Cache淘汰的概率论新解(NP-hard证明+解码时校正)。
- 后训练论文：INSPIRE两阶段偏好训练内化数学推理(EMNLP26) / Rubric-guided RL贝叶斯统一综述(EMNLP26 Findings) / 小模型KD双峰崩溃(单种子评估误导性)。
- 类别：news 4 / paper 11；topic 覆盖 agent(8) / rag(3) / memory(1) / post-training(3)。
- 注意：arXiv cs.AI/cs.CL new 列表在本次检索时仍为8/31批次，本日论文取自该批次中此前未收录的条目；FinExam-10K、KV Cache Eviction、Stance-Aware三篇因AI摘要工具截断/算错arXiv编号，已通过web_search二次核实纠正为正确ID。
- 提醒：data/2026-08-30.json 已于同日（2026-09-01）稍后补录完成。

## 2026-09-02
- 目标文件：data/2026-09-02.json，全新创建 12 条内容；JSON 校验通过，id 1-12，12 个 URL 均唯一且经网页访问核验。
- 行业新闻（AITNT聚合转述）：Anthropic发布Claude Fable/Mythos 5.1(科研编程翻倍、缓存成本降75%，多源交叉报道) / 百融智能Agent批量上岗RaaS模式(未核实官方财报) / DeepSeek V4多模态视觉链路拆解(32层ViT+3x3Aligner) / 上海交大AI Agent主导开发27B工业Coding模型iCoder。
- Memory论文：Gated-Memory Routing门控记忆路由多智能体协同(EMNLP26, HumanEval成本降31.9%) / Invalidation Contracts跨会话记忆缓存失效契约(合规率模型差异大11%~100%) / HypReflect假设引导自蒸馏持续个性化用户记忆。
- RAG论文：TRIS三层检索完整性筛网防御知识投毒(EMNLP26 Findings, 攻击成功率64-87%降至3-14%)。
- 后训练论文：AMRP自适应多奖励投影缓解聚合诱导奖励劫持(GRPO/GDPO/PPO均适用)。
- Agent论文：OpenAgentFlow异构Agent舰队系统级安全边界(94%准确率95.3%拦截率) / Belief-Based World Model信念型世界模型让Agent查询自身不确定性 / Irreversibility Budget不可逆性预算舰队级风险核算(透支最高达限额48倍, SOSP AgenticOS Workshop)。
- 类别：news 4 / paper 8；topic 覆盖 agent(7) / memory(3) / rag(1) / post-training(1)。
- 注意：本日arXiv批次为2609.000xx新批次（非此前8月批次），系统内部时钟对"未来日期"提示可忽略，均已按用户当前日期(2026-09-02)如实核验记录。

## 2026-09-03
- 目标文件：data/2026-09-03.json，全新创建 12 条内容；JSON校验通过，id 1-12，12个URL均唯一且经网页访问核验。
- 行业新闻（AITNT聚合转述）：Inherent获5000万美元种子融资并推出科研AI Faraday（融资、模型名称和测试数据未见公司/投资方公告独立核验） / LoD未知视觉越狱检测（EMNLP26，AUROC 0.9705-0.9838，检测0.25-0.62秒；训练未使用已知越狱样本但使用安全与普通有害样本） / 元点Zeroth Bridge“小桥”万元级人形机器人与OpenBridge生态（关键宣传数据未独立核验）。
- Memory论文：Memory Trust Gap持久记忆对过时事实的能力依赖性过度信任 / Belief-Calibrated Optimization显式世界模型优化Agent脚手架 / CHIME规划与执行分离的信用感知分层记忆 / Trace as State将推理轨迹前置为长上下文条件状态（27组组合26组优于对照）。
- Agent与后训练论文：PGPO潜势引导多轮Agent策略优化 / Monitoring Web Agents仅凭可观测轨迹提前预警 / PROCTOR确定性护栏约束LLM-as-a-Judge自我改进 / TaRA训练感知LoRA初始化。
- RAG与后训练论文：PRO-Step步骤级过程奖励+DPO优化多跳RAG（EMNLP26）。
- 类别：news 3 / paper 9；topic覆盖 agent(8) / memory(4) / rag(1) / post-training(3)。
- 说明：所收论文主要来自9月1-2日arXiv新提交批次，在9月3日检索窗口核验收录；新闻条目均明确标注AITNT聚合来源及未独立核验事项。

## 2026-09-04
- 目标文件：data/2026-09-04.json，全新创建 12 条内容；JSON校验通过，id 1-12，12个URL均唯一且经网页访问核验。
- 行业新闻（AITNT聚合转述）：OpenAI发布GPT-6 Astra（1.05M上下文、ARC-AGI-3 99.9%、Critical网络安全等级，全部数据来自单一自媒体转述未见官方公告） / 沙特HUMAIN基于MiniMax M3开源底座推出首个阿拉伯语大模型HUMAIN M3（428B MoE激活23B，官方基准均分89.37%） / 李飞飞World Labs发布多模态世界模型Atlas，影溯InSpatio已开源半年且WorldArena 2.0登顶。
- Agent论文：Speculative Macro Commit推测宏提交加速工具Agent(MLSP26, AppWorld墙钟降44.9%) / CONFLICTGUARD冲突感知终止缓解GUI Agent执行偏见 / NTEP工具-证据路径奖励训练智能体VLM。
- Memory论文：MemoryLACE生命周期感知证据整合(BEAM运行时降66.6%) / LOCOMO-CONV对话式记忆检索基准(静默接地现象) / SGD-KV摘要引导KV压缩(NeurIPS26 Workshop, 内存降75%) / Random Attention随机KV驱逐挑战评分范式(vLLM吞吐+32-43%)。
- RAG论文：R²Adapter混合RAG轻量路由改写适配器(图RAG用量降59%)。
- 后训练论文：Jina-OCR-v1投机解码+稠密可验证奖励GRPO(OmniDocBench 91.14, 已开源)。
- 类别：news 3 / paper 9；topic覆盖 agent(6) / memory(4) / rag(1) / post-training(2)。
- 重要教训：本日再次遇到arXiv列表页摘要与实际abs页面不符的情况——列表页称2609.03402为PlanFence(实为教育个性化提示工程)、2609.02895为R²Adapter(实为BharatGather印度假新闻基准，正确ID是2609.02894)、2609.03460为NTEP工具奖励(正确ID是2609.03493，2609.03460实为溯源密度可视化)。凡列表页给出的条目必须经abs页核对后方可收录，本次已全部核对纠正；PlanFence因搜索无法核实真实ID而放弃收录。

## 通用经验
- PowerShell 内联 $var 在本环境会被吞，校验 JSON 用 -File 脚本方式（临时脚本用完即删）。
- 每次先读 memory.md 与当日 json，从最大 id+1 递增追加，只增不改。
- arXiv 网页摘要提取的编号存在被截断/算错风险，遇到可疑编号（如末位数字异常）应用 web_search 交叉核实标题匹配的真实 arXiv ID。
- arXiv list/new 列表页的标题-编号映射本身也可能错位：每篇收录前必须逐条访问abs页核对标题与摘要，不可直接采信列表页的编号。
