自动执行每日AI信息搜索任务（下午更新）。请搜索今天最新的AI和Agent相关内容，补充上午可能遗漏的重要信息。读取今天已有的 G:/AITest/TomTest/ClaudeDemoWeb/data/YYYY-MM-DD.json 文件，在现有items基础上追加新发现的内容（避免重复），更新后写回文件。搜索重点：下午发布的新论文、新开源项目、行业新闻动态。保持JSON格式一致。

搜索方向（除通用 AI 热点外，需覆盖以下专项）：
- 大模型后训练：LoRA、QLoRA、SFT、RLHF、DPO、PPO、GRPO 相关论文/教程/工具
- RAG/检索增强：embedding 模型、reranking、chunking 策略、向量数据库、hybrid search
- 用户记忆/上下文：长期记忆、对话状态管理、context compression、personalization
- Agent/工具使用：tool-use、function calling、planning、multi-agent 协作

重要规则：
1. 必须先读取今天已有的JSON文件，了解已收录的内容
2. 只追加新内容，不修改或删除已有条目
3. 新条目的id从已有最大id+1开始递增
4. 所有URL必须经过验证
5. 内容平衡：agent/LLM/应用各占一定比例
6. 对属于专项方向的条目，增加 "topic" 数组字段标记所属主题：
   - "post-training"（后训练：LoRA/SFT/RLHF/DPO/PPO等）
   - "rag"（检索增强：embedding/reranking/chunking/vector-db等）
   - "memory"（用户记忆：long-term memory/context management/personalization等）
   - "agent"（智能体：tool-use/planning/multi-agent等）
