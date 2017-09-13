# EhTagTranslator
将E绅士tag翻译成中文。
**This is a project for adult website, and the content of this item may include "sexual expression" and "restricted images" show.View at your own risk.**

前身为JS写的[Etag](https://greasyfork.org/scripts/17966)，因为当时只是简单制作，每次数据库需要重新更新上传。

这次决定采用开放式编辑的新方法，数据库用本项目的wiki攥写，然后由JS生成CSS，由CSS来完成翻译显示。支持显示Tag简介。

![新版功能](http://ww4.sinaimg.cn/large/6c84b2d6gw1f48jt1uj2hj20xw0f4acx.jpg)

## 软件需求
1. 用户脚本扩展，用于安装EhTagBuilder从翻译数据库生成用户样式版EhTagTranslator。
   * [![](https://www.mozilla.org/media/img/firefox/favicon.dc6635050bf5.ico)FireFox](http://www.firefox.com)安装[![](https://github.com/greasemonkey/greasemonkey/raw/master/skin/icon32.png)GreaseMonkey](http://www.greasespot.net/)扩展。
   * ![](http://www.chromium.org/_/rsrc/1438879449147/config/customLogo.gif)Chromium系安装[![](https://addons.cdn.mozilla.net/user-media/addon_icons/683/683490-64.png?modified=1463757971)Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh-CN)扩展。
2. 用户样式扩展，用于安装用户样式版EhTagTranslator（就是上面生成的CSS）。
   * 安装[![](https://addons.cdn.mozilla.net/user-media/addon_icons/2/2108-64.png?modified=1453837884)Stylish](https://userstyles.org/)扩展（两浏览器都有）。

无法访问GitHub的网友，可以在别人能访问的电脑上使用EhTagBuilder生成用户样式版EhTagTranslator安装到自己电脑。

## 用户样式版EhTagTranslator使用方法
### CSS生成方法
先到Sleazy Fork[安装“EhTagBuilder”脚本](https://sleazyfork.org/scripts/19619)，油猴可以自动更新脚本。<br>当然也可以直接在本项目直接访问源码安装。

之后本项目页面下即会显示操作菜单（没有就刷新）。

![操作菜单](http://ww1.sinaimg.cn/large/6c84b2d6gw1f48kh9gm0aj20mn0aaacv.jpg)

点击“生成CSS”，程序运行后会生成窗口显示输出的用户样式。

![输出窗口](http://ww4.sinaimg.cn/large/6c84b2d6gw1f3slcidjl1j20a20aijsn.jpg)

### CSS安装方法
火狐有如下三种安装方式。 ***Chrome需要新建一个样式，然后选择导入 Mozilla 格式。***

1. 点击“直接下载CSS文件”，然后在Stylish菜单中选择“安装文件”。之后将样式命名为“EhTagTranslator”（或者你自己喜爱的其他名字）即可。
  
  ![从文件安装](http://ww4.sinaimg.cn/large/6c84b2d6gw1f3sm9sinwlj20ow0bqq77.jpg)
2. 复制“直接下载CSS文件”的链接地址，然后在附加组件管理器中选择“从 URL 安装...”。之后将样式命名为“EhTagTranslator”（或者你自己喜爱的其他名字）即可。
  
  ![从URL安装](http://ww4.sinaimg.cn/large/6c84b2d6gw1f3sme5420dj20pb0f8tdz.jpg)
3. 在Stylish菜单中选择“编写新样式”-“空白样式...”。

  ![新建空白](http://ww2.sinaimg.cn/large/6c84b2d6gw1f3smf9bgt9j20tt0fbgr4.jpg)
  
  然后复制生成的CSS文本，粘贴到编辑框中。之后将样式命名为“EhTagTranslator”（或者你自己喜爱的其他名字）即可。
  
  ![粘贴代码](http://ww3.sinaimg.cn/large/6c84b2d6gw1f3sn1uyx5tj20io0dtq6z.jpg)


### 使用效果
由于CSS选择器技术限制，CSS版默认情况下将无法更换tag左方的类别名。（有网友研究出可更换的办法，详见[网友分享的样式](https://github.com/Mapaler/EhTagTranslator/issues/10)）

![CSS使用效果](http://ww3.sinaimg.cn/large/6c84b2d6gw1f3smnu3k49j20jo0c4422.jpg)

### 更新数据库
在本项目页面重新获取数据库生成CSS

在“工具栏按钮”上或者“附加组件管理器”中，点击右键选择编辑，然后替换新的代码保存即可。

![按钮上](http://ww1.sinaimg.cn/large/6c84b2d6gw1f3smv77s1hj207k078gmn.jpg)

![附加组件管理器上](http://ww2.sinaimg.cn/large/6c84b2d6gw1f3smvltaadj20dv05bwex.jpg)

为方便修改设置后快速重新生成，目前版本在同一页面上不会重复获取数据库，需要重新获取数据库先刷新页面再获取。Wiki编辑者在保存Wiki页面的时候就刷新了，不需重复刷新。若不确定，观察运行程序是否会出现获取进度窗口即可。

## 编辑Wiki添加翻译
EhTagTranslator是一个免费开源项目，Tag翻译数据库由各位网友自行编辑。

希望您在享受他人成果的同时，在本项目Wiki中添加翻译，贡献你的一份力量。[链接地址](https://github.com/Mapaler/EhTagTranslator/wiki)

![Wiki地址](http://ww1.sinaimg.cn/large/6c84b2d6gw1f3sontcz4ej20e005aq3g.jpg)

请先阅读主页的说明

## License|许可协议
### EhTagTranslator Copyright(C) 2016 by Mapaler

此程序是免费软件。你可以将它根据“GNU通用公共许可证第三版(GPLv3)”重新分发和/或修改。[LICENSE](https://github.com/Mapaler/EhTagTranslator/blob/master/LICENSE)

如果你想分发你修改后的程序，但是你不想要公布修改后的源代码，请与我联系。

### EhTagTranslator项目 Wiki数据库
Wiki数据库内容归全体编辑者共同所有，但在Wiki里发布内容即表示您允许将您编辑的内容无偿且自由的使用到EhTagTranslator中。

允许第三方程序使用本项目Wiki数据库，但请使用的项目提交一份Issues，附上项目的简介地址。
