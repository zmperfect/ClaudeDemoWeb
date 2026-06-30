自动执行每日AI信息搜索任务。请搜索今天最有价值的AI和Agent相关内容（新闻、GitHub仓库、论文、工具、教程），整理成约15条内容，写入 G:/AITest/TomTest/ClaudeDemoWeb/data/ 目录下以今天日期命名的JSON文件（格式：YYYY-MM-DD.json）。JSON格式参考已有的数据文件。每条内容需包含：id、category（news/repo/paper/tool/tutorial）、title、url、summary（中文2-3句）、source、highlight（中文推荐理由）、stars、tags。优先搜索：HuggingFace Papers、GitHub Trending、主流AI新闻源。

搜索方向（除通用 AI 热点外，需覆盖以下专项，每日至少 3-4 条来自专项方向）：
- 大模型后训练：LoRA、QLoRA、SFT、RLHF、DPO、PPO、GRPO 相关论文/教程/工具
- RAG/检索增强：embedding 模型、reranking、chunking 策略、向量数据库、hybrid search
- 用户记忆/上下文：长期记忆、对话状态管理、context compression、personalization
- Agent/工具使用：tool-use、function calling、planning、multi-agent 协作

重要规则：
1. 所有URL必须经过验证，确认可以访问，绝不包含未验证的URL
2. 内容平衡：agent/LLM/应用各占一定比例，混合热点、实用和研究内容
3. summary和highlight用中文，tags用英文
4. 先读取 data/ 目录下已有的最新文件了解格式
5. 如果今天的文件已存在，在已有内容基础上补充（避免重复）
6. 对属于专项方向的条目，增加 "topic" 数组字段标记所属主题：
   - "post-training"（后训练：LoRA/SFT/RLHF/DPO/PPO等）
   - "rag"（检索增强：embedding/reranking/chunking/vector-db等）
   - "memory"（用户记忆：long-term memory/context management/personalization等）
   - "agent"（智能体：tool-use/planning/multi-agent等）
   一条内容可属于多个topic。不属于任何专项的条目可省略topic字段。
