译文数据库介绍 
==================

[![Build status](https://ci.appveyor.com/api/projects/status/pv3klmx1u7qu4woa?svg=true)](https://ci.appveyor.com/project/EhTagApi-Bot/database)
[![LICENSE](https://img.shields.io/badge/license-by--nc--sa-orange.svg?logo=creative-commons)](LICENSE.md)

## 协议

数据库文本内容除另有声明外，均在[知识共享(Creative Commons) 署名-非商业性使用-相同方式共享 3.0 协议](LICENSE.md)下提供，附加条款亦可能应用。

数据库内容归全体编辑者共同所有，在本项目里发布内容即表示您允许将您编辑的内容无偿且自由地使用到 EhTagTranslation 的各下游项目中。

## 参与翻译

请使用 [EhTag Editor](https://EhTagTranslation.github.io/Editor)（[使用说明](https://github.com/EhTagTranslation/Editor/wiki)），在编辑前请先查阅[参与翻译](https://github.com/EhTagTranslation/Database/wiki/参与翻译)指南。

## 使用翻译

一般用户可通过以下项目使用本数据库的翻译，也可以通过这些项目向本数据库贡献翻译内容。

* [EhTagBuilder](https://github.com/Mapaler/EhTagTranslator/wiki/EhTagBuilder)  
  ![][plat-web]  
  EhTagBuilder 简称 "ETB"。

  翻译实现方式：ETB 先获取 Wiki 数据库网页，获得翻译数据，生成对应格式的 CSS 代码，再由 Stylus 扩展附加到 E 绅士网页上。

* [EhTagSyringe](https://github.com/Mapaler/EhTagTranslator/wiki/EhTagSyringe)  
  ![][plat-web]  
  将 E 绅士标签翻译成中文，并注入到E站体内

  EhTagSyringe 是 EhTagTranslator 主项目下走功能全面、开箱即用路线的子项目。

  按照 EhTagTranslator 思路，重新编写并内置样式注入器，并增加一些方便的功能。

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
  
## 开发指南

下游项目使用本项目数据库前，请在本项目提交一份附上项目的简介或地址的 Issue。

更多细节请参照 [Wiki](https://github.com/EhTagTranslation/Database/wiki/开发指南)。

[plat-web]: https://img.shields.io/badge/platform-web-red.svg?logo=javascript
[plat-ios]: https://img.shields.io/badge/platform-iOS-lightgrey.svg?logo=apple
[plat-uwp]: https://img.shields.io/badge/platform-UWP-blue.svg?logo=windows
[plat-android]: https://img.shields.io/badge/platform-Android-brightgreen.svg?logo=android
