# Wiki 数据库结构版本信息

## 版本说明

Wiki 数据库结构版本存储于 [`rows/wiki-version.md`](wiki-version) 中。

数据库结构版本指数据库目录结构、内容格式等的定义版本，与 Wiki 数据库的数据本身无关。

该版本号翻译程序识别用，**除管理员外请勿修改**。

**请注意** 第三方使用本数据库，建议获取记录本数字（应该只会使用整数），如果发现版本变高，可能涉及数据库结构变化，需要修改获取程序。

## 变更记录

### version 3 @ [2017/09/13](https://github.com/Mapaler/EhTagTranslator/wiki/_compare/f22d6e7138b948d5226b579579881bd67f1a36eb)
1.  移动版本信息至独立文件 wiki-version.md  
1.  移动 rows.md 到 tags/  
1.  废弃在图片扩展名后添加`h`将其隐藏的方法

### version 2 @ [2016/06/06](https://github.com/Mapaler/EhTagTranslator/wiki/_compare/533d5e20bece0c3bc84e1987994fe6ade030f2f9)
1.  新增隐藏图片格式  
1.  新增注释格式

### version 1 @ [2016/05/25](https://github.com/Mapaler/EhTagTranslator/wiki/_compare/18b79c1314f53315e96793834550af9692f346c6)
1.  首次记录版本  
