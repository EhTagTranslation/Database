Release 生成工具
=========================
该工具用于生成本项目的 Releases，源码位于 <https://github.com/EhTagTranslation/EhTagConnector>。可以通过环境变量 `GitHub:Token` 提供一个 GitHub API 的 token，以避免请求受到限制。

依赖 `dotnet core 2.2`，运行时需要输入项目路径和输出路径。

``` powershell
Database> ${env:Github:Token} = 'xxx'
Database> ./tools/EhDbReleaseBuilder/Download-Tool.ps1
Database> dotnet ./tools/EhDbReleaseBuilder/EhDbReleaseBuilder.dll . ./publish
EhDbReleaseBuilder started.
  Source: .
  Target: ./publish

Created: db.full.json (4940493 bytes)
Created: db.full.json.gz (650276 bytes)
Created: db.full.js (889931 bytes)
Created: db.html.json (1276936 bytes)
Created: db.html.json.gz (400415 bytes)
Created: db.html.js (556783 bytes)
Created: db.raw.json (1113545 bytes)
Created: db.raw.json.gz (393719 bytes)
Created: db.raw.js (547854 bytes)
Created: db.text.json (791087 bytes)
Created: db.text.json.gz (257569 bytes)
Created: db.text.js (366323 bytes)
Created: db.ast.json (2060560 bytes)
Created: db.ast.json.gz (419996 bytes)
Created: db.ast.js (582890 bytes)
```
