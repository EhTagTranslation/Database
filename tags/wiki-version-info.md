# Wiki 数据库结构版本信息

## 版本说明

Wiki 数据库结构版本存储于 [`tags/wiki-version.md`](wiki-version) 中。

数据库结构版本指数据库目录结构、内容格式等的定义版本，与 Wiki 数据库的数据本身无关。

该版本号供数据库使用方识别用，**除管理员外请勿修改**。

ℹ 第三方使用本数据库，建议获取记录本数字，如果发现版本变高，可能涉及数据库结构变化，需要修改获取程序。

此数字如无意外情况，应该只会使用整数，下方变更记录的带小数的仅用于记录版本微调日志，不调整版本主数字。

## 变更记录

### version 3.5 @ [2017/09/14](https://github.com/Mapaler/EhTagTranslator/wiki/wiki-version/fcb5a180e6a233efe5a475411ef915f4e06f0e85)
1.  版本信息准备迁移到新格式  
1.  `wiki-changelog.md` 改名为 `wiki-version-info.md`  

### version 3 @ [2017/09/13](https://github.com/Mapaler/EhTagTranslator/wiki/_compare/f22d6e7138b948d5226b579579881bd67f1a36eb)
1.  移动版本信息至独立文件 `wiki-version.md`  
1.  移动 `rows.md` 到 `tags/rows.md`  
1.  废弃在图片扩展名后添加 `h` 将其隐藏的方法

### version 2 @ [2016/06/06](https://github.com/Mapaler/EhTagTranslator/wiki/_compare/533d5e20bece0c3bc84e1987994fe6ade030f2f9)
1.  新增隐藏图片格式  

### version 1 @ [2016/05/25](https://github.com/Mapaler/EhTagTranslator/wiki/_compare/18b79c1314f53315e96793834550af9692f346c6)
1.  首次记录版本  
1.  新增注释格式
