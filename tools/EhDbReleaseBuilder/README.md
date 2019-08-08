Release 生成工具
=========================
该工具用于生成本项目的 Releases，源码位于 <https://github.com/EhTagTranslation/EhTagConnector>。

依赖 `dotnet core 2.2`，运行时需要输入项目路径和输出路径。

``` powershell
Database> ./tools/EhDbReleaseBuilder/Download-Tool.ps1
Database> dotnet ./tools/EhDbReleaseBuilder/EhDbReleaseBuilder.dll . ./publish

EhDbReleaseBuilder started.
  Source: C:\projects\Database
  Target: C:\projects\Database\publish

Downloading old db.full.json.gz
Downloaded old db.full.json.gz
Created: db.full.json (6833675 bytes)
Created: db.full.json.gz (672884 bytes)
Created: db.full.js (6833707 bytes)
Created: diff.full.json (903 bytes)
Created: diff.full.json.gz (278 bytes)
Created: diff.full.js (937 bytes)
Downloading old db.html.json.gz
Downloaded old db.html.json.gz
Created: db.html.json (1665392 bytes)
Created: db.html.json.gz (404082 bytes)
Created: db.html.js (1665424 bytes)
Created: diff.html.json (903 bytes)
Created: diff.html.json.gz (278 bytes)
Created: diff.html.js (937 bytes)
Downloading old db.raw.json.gz
Downloaded old db.raw.json.gz
Created: db.raw.json (1517952 bytes)
Created: db.raw.json.gz (400422 bytes)
Created: db.raw.js (1517983 bytes)
Created: diff.raw.json (903 bytes)
Created: diff.raw.json.gz (278 bytes)
Created: diff.raw.js (936 bytes)
Downloading old db.text.json.gz
Downloaded old db.text.json.gz
Created: db.text.json (1197163 bytes)
Created: db.text.json.gz (264025 bytes)
Created: db.text.js (1197195 bytes)
Created: diff.text.json (903 bytes)
Created: diff.text.json.gz (278 bytes)
Created: diff.text.js (937 bytes)
Downloading old db.ast.json.gz
Downloaded old db.ast.json.gz
Created: db.ast.json (2442209 bytes)
Created: db.ast.json.gz (418202 bytes)
Created: db.ast.js (2442240 bytes)
Created: diff.ast.json (903 bytes)
Created: diff.ast.json.gz (278 bytes)
Created: diff.ast.js (936 bytes)
```
