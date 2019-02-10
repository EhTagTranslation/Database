﻿Wiki 数据库结构版本信息  
=================
## 版本说明

Wiki 数据库结构版本存储于 [`version.md`](version) 中，可以使用筛选器 `a[title='database-structure-version']` 查找。

数据库结构版本指数据库目录结构、内容格式等的定义版本，与 Wiki 数据库的数据本身无关。

该版本号供数据库使用方识别用，**除管理员外请勿修改**。
此数字如无意外情况，应该只会使用整数。

ℹ 第三方使用本数据库，建议获取记录该数字，如果发现版本变高，可能涉及数据库结构变化，需要修改获取程序。

## 变更记录

### version 4 @ [2017/09/15](_compare/b1dde8e8064247ceb283a1f47fa358240d385967)
1.  `tags` 文件夹重命名为 `database`
1.  版本信息链接从 `a[href='wiki-version-number']` @ `tags/wiki-version.md` 迁移至 `a[title='database-structure-version']` @ `version.md`，并删除`tags/wiki-version.md` ([讨论](../issues/30))     
1.  `wiki-changelog.md` 重命名为 `wiki-version-info.md`  
1.  数据库增加外部链接字段([讨论](../issues/29))

### version 3 @ [2017/09/13](_compare/f22d6e7138b948d5226b579579881bd67f1a36eb)
1.  移动版本信息至独立文件 `tags/wiki-version.md`  
1.  移动 `rows.md` 到 `tags/rows.md`  
1.  废弃在图片扩展名后添加 `h` 将其隐藏的方法

### version 2 @ [2016/06/06](_compare/533d5e20bece0c3bc84e1987994fe6ade030f2f9)
1.  新增隐藏图片格式  

### version 1 @ [2016/05/25](_compare/18b79c1314f53315e96793834550af9692f346c6)
1.  首次记录版本  
1.  新增注释格式
