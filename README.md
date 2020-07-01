译文数据库介绍 
==================

[![Build status](../../workflows/build/badge.svg)](../../actions)
[![LICENSE](https://img.shields.io/badge/license-by--nc--sa-orange.svg?logo=creative-commons&logoColor=white)](LICENSE.md)

<!-- [![Commit](https://img.shields.io/endpoint?color=blueviolet&url=https://ehtt.azurewebsites.net/database/~badge)](//github.com/EhTagTranslation/Database/tree/master)  -->
[![all](https://img.shields.io/endpoint?color=brightgreen&url=https://ehtt.azurewebsites.net/database/all/~badge)](https://editor.ehtt.now.sh/list/all)
[![reclass](https://img.shields.io/endpoint?color=tomato&url=https://ehtt.azurewebsites.net/database/reclass/~badge)](https://editor.ehtt.now.sh/list/reclass)
[![language](https://img.shields.io/endpoint?color=deepskyblue&url=https://ehtt.azurewebsites.net/database/language/~badge)](https://editor.ehtt.now.sh/list/language)
[![female](https://img.shields.io/endpoint?color=deeppink&url=https://ehtt.azurewebsites.net/database/female/~badge)](https://editor.ehtt.now.sh/list/female)
[![male](https://img.shields.io/endpoint?color=slateblue&url=https://ehtt.azurewebsites.net/database/male/~badge)](https://editor.ehtt.now.sh/list/male)
[![misc](https://img.shields.io/endpoint?color=lightgray&url=https://ehtt.azurewebsites.net/database/misc/~badge)](https://editor.ehtt.now.sh/list/misc)
[![parody](https://img.shields.io/endpoint?color=darkviolet&url=https://ehtt.azurewebsites.net/database/parody/~badge)](https://editor.ehtt.now.sh/list/parody)
[![character](https://img.shields.io/endpoint?color=cadetblue&url=https://ehtt.azurewebsites.net/database/character/~badge)](https://editor.ehtt.now.sh/list/character)
[![group](https://img.shields.io/endpoint?color=darkkhaki&url=https://ehtt.azurewebsites.net/database/group/~badge)](https://editor.ehtt.now.sh/list/group)
[![artist](https://img.shields.io/endpoint?color=chocolate&url=https://ehtt.azurewebsites.net/database/artist/~badge)](https://editor.ehtt.now.sh/list/artist)

## 协议

数据库文本内容除另有声明外，均在[知识共享(Creative Commons) 署名-非商业性使用-相同方式共享 3.0 协议](LICENSE.md)下提供，附加条款亦可能应用。

数据库内容归全体编辑者共同所有，在本项目里发布内容即表示您允许将您编辑的内容无偿且自由地使用到 EhTagTranslation 的各下游项目中。

## 参与翻译

请使用 [EhTag Editor](https://editor.ehtt.now.sh)（[使用说明](../../../Editor/wiki)），在编辑前请先查阅[参与翻译](../../wiki/参与翻译)指南。

## 使用翻译

一般用户可通过以下项目使用本数据库的翻译，也可以通过这些项目向本数据库贡献翻译内容。

* [EhSyringe](../../../EhSyringe)  
  ![][plat-web]  
  > 本项目的官方实现，提供 Chrome 和 Firefox 浏览器插件。
  
  E站注射器，将中文翻译注入到E站体内。
  
  这一针打下去你就会说中文了。

* [EhTagBuilder](//github.com/Mapaler/EhTagTranslator/wiki/EhTagBuilder)  
  ![][plat-web]  
  > 本项目的前身，使用 UserScript 实现，已被 EhSyringe 取代。

  EhTagBuilder 简称 "ETB"。

  翻译实现方式：ETB 先获取 Wiki 数据库网页，获得翻译数据，生成对应格式的 CSS 代码，再由 Stylus 扩展附加到 E 绅士网页上。

* [E-Viewer](//github.com/OpportunityLiu/E-Viewer)  
  ![][plat-uwp]  
  An UWP Client for <https://e-hentai.org>.

* [EhViewer](//github.com/Mapaler/EhViewer)  
  ![][plat-android]  
  An Unofficial E-Hentai Application for Android.
  
  [原项目](//github.com/seven332/EhViewer)已经停止维护，上述链接是由 [@Mapaler](//github.com/Mapaler)  维护数据库更新的修改版。

* [Dai-Hentai](//github.com/DaidoujiChen/Dai-Hentai)  
  ![][plat-ios]  
  一個普通的看漫畫 App。
  
* [E-HentaiViewer](//github.com/kayanouriko/E-HentaiViewer)  
  ![][plat-ios]  
  一个 E-Hentai 的 iOS 端阅读器。
  
## 开发指南

参见 [Wiki/开发指南](../../wiki/开发指南)。

下游项目使用本项目数据库前，请在本项目提交一份附上项目的简介或地址的 Issue。

[plat-web]: https://img.shields.io/badge/platform-web-red.svg?logo=javascript
[plat-ios]: https://img.shields.io/badge/platform-iOS-lightgrey.svg?logo=apple
[plat-uwp]: https://img.shields.io/badge/platform-UWP-blue.svg?logo=windows
[plat-android]: https://img.shields.io/badge/platform-Android-brightgreen.svg?logo=android
