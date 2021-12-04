译文数据库介绍 
==================

[![Build status](../../workflows/build/badge.svg)](../../actions)
[![LICENSE](https://img.shields.io/badge/license-by--nc--sa-orange.svg?logo=creative-commons&logoColor=white)](LICENSE.md)

<!-- [![Commit](https://img.shields.io/endpoint?color=blueviolet&url=https://ehtt.herokuapp.com/database/~badge)](//github.com/EhTagTranslation/Database/tree/master)  -->
[![all](https://img.shields.io/endpoint?color=brightgreen&url=https://ehtt.herokuapp.com/database/all/~badge)](https://ehtt.vercel.app/list/all)
[![reclass](https://img.shields.io/endpoint?color=tomato&url=https://ehtt.herokuapp.com/database/reclass/~badge)](https://ehtt.vercel.app/list/reclass)
[![female](https://img.shields.io/endpoint?color=deeppink&url=https://ehtt.herokuapp.com/database/female/~badge)](https://ehtt.vercel.app/list/female)
[![male](https://img.shields.io/endpoint?color=slateblue&url=https://ehtt.herokuapp.com/database/male/~badge)](https://ehtt.vercel.app/list/male)
[![mixed](https://img.shields.io/endpoint?color=lightgray&url=https://ehtt.herokuapp.com/database/mixed/~badge)](https://ehtt.vercel.app/list/mixed)
[![language](https://img.shields.io/endpoint?color=deepskyblue&url=https://ehtt.herokuapp.com/database/language/~badge)](https://ehtt.vercel.app/list/language)
[![other](https://img.shields.io/endpoint?color=deepskyblue&url=https://ehtt.herokuapp.com/database/other/~badge)](https://ehtt.vercel.app/list/other)
[![group](https://img.shields.io/endpoint?color=darkkhaki&url=https://ehtt.herokuapp.com/database/group/~badge)](https://ehtt.vercel.app/list/group)
[![artist](https://img.shields.io/endpoint?color=chocolate&url=https://ehtt.herokuapp.com/database/artist/~badge)](https://ehtt.vercel.app/list/artist)
[![cosplayer](https://img.shields.io/endpoint?color=chocolate&url=https://ehtt.herokuapp.com/database/cosplayer/~badge)](https://ehtt.vercel.app/list/cosplayer)
[![parody](https://img.shields.io/endpoint?color=darkviolet&url=https://ehtt.herokuapp.com/database/parody/~badge)](https://ehtt.vercel.app/list/parody)
[![character](https://img.shields.io/endpoint?color=cadetblue&url=https://ehtt.herokuapp.com/database/character/~badge)](https://ehtt.vercel.app/list/character)

## 协议

数据库文本内容除另有声明外，均在[知识共享(Creative Commons) 署名-非商业性使用-相同方式共享 3.0 协议](LICENSE.md)下提供，附加条款亦可能应用。

数据库内容归全体编辑者共同所有，在本项目里发布内容即表示您允许将您编辑的内容无偿且自由地使用到 EhTagTranslation 的各下游项目中。

## 参与翻译

请使用 [EhTag Editor](https://ehtt.vercel.app)（[使用说明](../../../Editor/wiki)），在编辑前请先查阅[参与翻译](../../wiki/参与翻译)指南。

## 使用翻译

一般用户可通过以下项目使用本数据库的翻译，也可以通过这些项目向本数据库贡献翻译内容。

* [EhSyringe](../../../EhSyringe)  
  ![WEB][plat-web]  
  > 本项目的官方实现，提供 UserScript 和浏览器插件。
  
  E站注射器，将中文翻译注入到E站体内。
  
  这一针打下去你就会说中文了。

* [EhTagBuilder](//github.com/Mapaler/EhTagTranslator/wiki/EhTagBuilder)  
  ![WEB][plat-web]  
  > 本项目的前身，使用 UserScript 实现，已被 EhSyringe 取代。

  EhTagBuilder 简称 "ETB"。

  翻译实现方式：ETB 先获取 Wiki 数据库网页，获得翻译数据，生成对应格式的 CSS 代码，再由 Stylus 扩展附加到 E 绅士网页上。

* [E-Viewer](//github.com/OpportunityLiu/E-Viewer)  
  ![UWP][plat-uwp]  
  An UWP Client for <https://e-hentai.org>.

* [EhViewer](//gitlab.com/NekoInverter/EhViewer)  
  ![Android][plat-android]  
  An Unofficial E-Hentai Application for Android.
  
  [原项目](//github.com/seven332/EhViewer)已经停止维护，上述链接是由 [@NekoInverter](//gitlab.com/NekoInverter) 维护的修改版。

* [Dai-Hentai](//github.com/DaidoujiChen/Dai-Hentai)  
  ![iOS][plat-ios]  
  一個普通的看漫畫 App。
  
* [E-HentaiViewer](//github.com/kayanouriko/E-HentaiViewer)  
  ![iOS][plat-ios]  
  一个 E-Hentai 的 iOS 端阅读器。
  
* [EhPanda](//ehpanda.app)  
  ![iOS][plat-ios]  
  一個用 SwiftUI 編寫的 iOS 非官方 E-Hentai 應用程式。支持直連。
  
* [FEhViewer](https://github.com/honjow/FEhViewer)  
  ![iOS][plat-ios]  ![Adnroid][plat-android]  
  一个由 Flutter 编写的阅读器，支持直连。
  
  
## 开发指南

参见 [Wiki/开发指南](../../wiki/开发指南)。

下游项目使用本项目数据库前，请在本项目提交一份附上项目的简介或地址的 Issue。

[plat-web]: https://img.shields.io/badge/platform-web-red.svg?logo=javascript
[plat-ios]: https://img.shields.io/badge/platform-iOS-lightgrey.svg?logo=apple
[plat-uwp]: https://img.shields.io/badge/platform-UWP-blue.svg?logo=windows
[plat-android]: https://img.shields.io/badge/platform-Android-brightgreen.svg?logo=android
