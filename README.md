译文数据库介绍 
==================

[![Build status](https://ci.appveyor.com/api/projects/status/wvvq1lfio5qo3ejo?svg=true)](https://ci.appveyor.com/project/EhTagApi-Bot/database)
[![LICENSE](https://img.shields.io/badge/license-by--nc--sa-orange.svg?logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI2ZmZiI+DQogICAgPHBhdGggZD0iTTMxLjk1Ny4zMTFjLTguNjgyIDAtMTYuMzIyIDMuMjEzLTIyLjIyNiA5LjIwM0MzLjY1MyAxNS42NzguMzU0IDIzLjY2Ni4zNTQgMzJjMCA4LjQyMiAzLjIxMiAxNi4yMzYgOS4yOSAyMi4zMTMgNi4wNzggNi4wNzggMTMuOTc4IDkuMzc3IDIyLjMxMyA5LjM3NyA4LjMzNCAwIDE2LjQwOS0zLjI5OSAyMi42Ni05LjQ2M0M2MC41MjEgNDguNDEgNjMuNjQ2IDQwLjY4MyA2My42NDYgMzJjMC04LjU5NS0zLjEyNS0xNi40MDgtOS4xMTYtMjIuMzk5QzQ4LjQ1MyAzLjUyMyA0MC42MzkuMzExIDMxLjk1Ny4zMTF6bS4wODYgNS43M2M3LjEyIDAgMTMuNDU4IDIuNjkxIDE4LjQwNiA3LjY0MSA0Ljg2MiA0Ljg2MSA3LjQ2NiAxMS4yODYgNy40NjYgMTguMzE4IDAgNy4xMTktMi41MTggMTMuMzcxLTcuMzc5IDE4LjE0Ni01LjEyMyA1LjAzNS0xMS43MjEgNy43MjctMTguNDkzIDcuNzI3LTYuODU4IDAtMTMuMjgzLTIuNjkxLTE4LjIzMi03LjY0MUM4Ljg2MiA0NS4yODMgNi4wODQgMzguNzcyIDYuMDg0IDMyYzAtNi44NTggMi43NzgtMTMuMzY5IDcuNzI3LTE4LjQwNiA0Ljg2Mi00Ljk0OCAxMS4xMTMtNy41NTMgMTguMjMyLTcuNTUzeiIvPg0KICAgIDxwYXRoIGlkPSJhIiBkPSJNMzEuNjM1IDI2LjczNGMtMS43OS0zLjI2NC00Ljg0NC00LjU2My04LjM4OS00LjU2My01LjE2IDAtOS4yNjcgMy42NS05LjI2NyA5LjgyOCAwIDYuMjgzIDMuODYxIDkuODI5IDkuNDQyIDkuODI5IDMuNTgxIDAgNi42MzUtMS45NjYgOC4zMTktNC45NDlsLTMuOTMxLTIuMDAxYy0uODc4IDIuMTA1LTIuMjEyIDIuNzM4LTMuODk2IDIuNzM4LTIuOTE0IDAtNC4yNDgtMi40MjItNC4yNDgtNS42MTcgMC0zLjE5MyAxLjEyNC01LjYxNiA0LjI0OC01LjYxNi44NDIgMCAyLjUyNy40NTYgMy41MSAyLjU2M2w0LjIxMi0yLjIxMnoiLz4NCiAgICA8dXNlIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4LjI4MSkiIHhsaW5rOmhyZWY9IiNhIi8+DQo8L3N2Zz4NCg==)](LICENSE.md)

## 协议

数据库文本内容除另有声明外，均在[知识共享(Creative Commons) 署名-非商业性使用-相同方式共享 3.0 协议](LICENSE.md)下提供，附加条款亦可能应用。

数据库内容归全体编辑者共同所有，在本项目里发布内容即表示您允许将您编辑的内容无偿且自由地使用到 EhTagTranslation 的各下游项目中。

## 参与翻译

请参考[参与翻译](CONTRIBUTING.md)指南。

## 使用翻译

### 一般用户

一般用户可通过以下项目使用本数据库的翻译，也可以通过这些项目向本数据库贡献翻译内容。

* [EhTagBuilder](https://github.com/Mapaler/EhTagTranslator/wiki/EhTagBuilder)  
  ![][plat-web]  
  EhTagBuilder 简称 "ETB"。

  翻译实现方式：ETB 先获取 Wiki 数据库网页，获得翻译数据，生成对应格式的 CSS 代码，再由 Stylus 扩展附加到 E 绅士网页上。

* [EhTagSyringe](https://github.com/Mapaler/EhTagTranslator/wiki/EhTagSyringe)  
  ![][plat-web]  
  将 E 绅士标签翻译成中文，并注入到E站体内

  EhTagSyringe 是 EhTagTranslator 主项目下走功能全面、开箱即用路线的子项目。

  按照 EhTagTranslator 思路，重新编写并内置样式注入器,并增加一些方便的功能

  >  H 是人类的第一生产力

* [E-Viewer](https://github.com/OpportunityLiu/E-Viewer)  
  ![][plat-uwp]  
  An UWP Client for <https://e-hentai.org>.

* [EhViewer](https://github.com/seven332/EhViewer)  
  ![][plat-android]  
  An Unofficial E-Hentai Application for Android.

* [Dai-Hentai](https://github.com/DaidoujiChen/Dai-Hentai)  
  ![][plat-ios]  
  一個普通的看漫畫 App。
  
* [E-HentaiViewer](https://github.com/kayanouriko/E-HentaiViewer)  
  ![][plat-ios]  
  一个 E-Hentai 的 iOS 端阅读器。
  
### 开发者

下游项目使用本项目数据库前，请在本项目提交一份附上项目的简介或地址的 Issue。

#### 获取数据库内容

推荐使用 [Github Release](https://github.com/ehtagtranslation/Database/releases)。

后缀：
- `*.json` 是 JSON 表示的数据库；
- `*.json.gz` 是其 gzip 压缩后的版本；
- `*.js` 是用于 JSONP 调用的脚本，回调函数名为 `load_ehtagtranslation_database`。

中缀：
- `*.raw.*` 包含了 MarkDown 版本的翻译、简介和外部链接；
- `*.html.*` 包含了渲染为 HTML 的翻译、简介和外部链接；
- `*.text.*` 包含了去除图片和链接的的翻译、简介和外部链接；
- `*.ast.*` 包含了 JSON 表示的 MarkDown 的语法树结构；
- `*.full.*` 包含了以上所有信息。

以下为 node 代码示例。
``` js
const fetch = require('node-fetch');
async function getDownloadLink(owner, repo, filename)
{
    const uri = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;
    const info = await (await fetch(uri)).json();
    const asset = info.assets.find(i => i.name === filename);
    return asset && asset.browser_download_url;
}
const resourceUrl = await getDownloadLink('ehtagtranslation', 'Database', 'db.html.json');
const db = await (await fetch(resourceUrl)).json();
```

也可以使用 git 或 Github API 直接获取 MarkDown 并自行解析，此时需要注意 [`version`](version) 文件表明的[数据库结构版本](database-version-info.md)。

#### 编辑数据库内容

请参考 [EhTagConnector](https://github.com/ehtagtranslation/EhTagConnector) 及本项目[参与翻译](CONTRIBUTING.md)指南。

[plat-web]: https://img.shields.io/badge/platform-web-red.svg
[plat-ios]: https://img.shields.io/badge/platform-iOS-lightgrey.svg
[plat-uwp]: https://img.shields.io/badge/platform-UWP-blue.svg
[plat-android]: https://img.shields.io/badge/platform-Android-brightgreen.svg
