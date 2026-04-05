自动执行每日AI信息搜索任务。请搜索今天最有价值的AI和Agent相关内容（新闻、GitHub仓库、论文、工具、教程），整理成约12-15条内容，写入 G:/AITest/TomTest/ClaudeDemoWeb/data/ 目录下以今天日期命名的JSON文件（格式：YYYY-MM-DD.json）。JSON格式参考已有的数据文件。每条内容需包含：id、category（news/repo/paper/tool/tutorial）、title、url、summary（中文2-3句）、source、highlight（中文推荐理由）、stars、tags。优先搜索：HuggingFace Papers、GitHub Trending、主流AI新闻源。

重要规则：
1. 所有URL必须经过验证，确认可以访问，绝不包含未验证的URL
2. 内容平衡：agent/LLM/应用各占一定比例，混合热点、实用和研究内容
3. summary和highlight用中文，tags用英文
4. 先读取 data/ 目录下已有的最新文件了解格式
5. 如果今天的文件已存在，在已有内容基础上补充（避免重复）
