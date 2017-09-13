# EhTagBuilder | E绅士标签构建者
EhTagBuilder简称“ETB”。

翻译实现方式：ETB先获取Wiki数据库网页，获得翻译数据，生成对应格式的CSS代码，再由Stylish扩展附加到E绅士网页上。

![新版功能](http://ww4.sinaimg.cn/large/6c84b2d6gw1f48jt1uj2hj20xw0f4acx.jpg)

## 需要先准备的运行环境需求
1. 用户脚本扩展，用于安装EhTagBuilder，从翻译数据库生成CSS。
   * [![](https://www.mozilla.org/media/img/firefox/favicon.dc6635050bf5.ico)FireFox](http://www.firefox.com)安装[![](https://github.com/greasemonkey/greasemonkey/raw/master/skin/icon32.png)GreaseMonkey](http://www.greasespot.net/)扩展。
   * ![](http://www.chromium.org/_/rsrc/1438879449147/config/customLogo.gif)Chromium系安装[![](https://addons.cdn.mozilla.net/user-media/addon_icons/683/683490-64.png?modified=1463757971)Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh-CN)扩展。
2. 用户样式扩展，用于运行执行翻译的CSS。
   * 安装[![](https://addons.cdn.mozilla.net/user-media/addon_icons/2/2108-64.png?modified=1453837884)Stylish](https://userstyles.org/)扩展（两浏览器都有）。



## 使用方法
### 生成CSS
先到Sleazy Fork[安装“EhTagBuilder”脚本](https://sleazyfork.org/scripts/19619)，油猴可以自动更新脚本。<br>也可以直接在本项目直接访问源码安装。

之后本项目页面下即会显示操作菜单（没有就刷新）。

![操作菜单](https://raw.githubusercontent.com/wiki/Mapaler/EhTagTranslator/document/images/etb-menu.png)

点击“生成CSS”，程序运行后会生成窗口显示输出的用户样式。

![输出窗口](https://raw.githubusercontent.com/wiki/Mapaler/EhTagTranslator/document/images/etb-cssoutput.png)

保存CSS后，ETB脚本就不是必要的了，甚至可以卸载脚本与脚本扩展。（下次更新数据库则需要再重新安装）

你甚至还可以自己不安装，在别人安装了的电脑上生成CSS安装到自己的浏览器。

### 安装CSS

火狐安装方式如下 

* 在Stylish菜单中选择“编写新样式”-“空白样式...”。
  
  ![新建空白](http://ww2.sinaimg.cn/large/6c84b2d6gw1f3smf9bgt9j20tt0fbgr4.jpg)
  
  然后复制生成的CSS文本，粘贴到编辑框中。之后将样式命名为“EhTagTranslator”（或者你自己喜爱的其他名字）即可。
  
  ![粘贴代码](http://ww3.sinaimg.cn/large/6c84b2d6gw1f3sn1uyx5tj20io0dtq6z.jpg)
* 还有一种方法，复制“直接下载CSS文件”的链接地址，然后在附加组件管理器中选择“从 URL 安装...”。之后将样式命名为“EhTagTranslator”（或者你自己喜爱的其他名字）即可。
  
  ![从URL安装](http://ww4.sinaimg.cn/large/6c84b2d6gw1f3sme5420dj20pb0f8tdz.jpg)

Chrome需要新建一个样式，然后选择导入 Mozilla 格式。

  ![输出窗口](https://raw.githubusercontent.com/wiki/Mapaler/EhTagTranslator/document/images/etb-chrome.png)

### 更新数据库
在本项目页面重新获取数据库生成CSS

在“工具栏按钮”上或者“附加组件管理器”中，点击右键选择编辑，然后替换新的代码保存即可。

![按钮上](http://ww1.sinaimg.cn/large/6c84b2d6gw1f3smv77s1hj207k078gmn.jpg)

![附加组件管理器上](http://ww2.sinaimg.cn/large/6c84b2d6gw1f3smvltaadj20dv05bwex.jpg)

在同一页面上不会重复获取数据库，需要重新获取数据库先刷新页面再获取。  
Wiki编辑者在保存Wiki页面的时候就刷新了，不需重复刷新。若不确定，观察运行程序是否会出现获取进度窗口即可。

## 编辑Wiki添加翻译
详见[译文数据库介绍](Home)

## License|许可协议
### EhTagTranslator Copyright(C) 2016 by Mapaler

此程序是免费软件。你可以将它根据“GNU通用公共许可证第三版(GPLv3)”重新分发和/或修改。[LICENSE](https://github.com/Mapaler/EhTagTranslator/blob/master/LICENSE)

如果你想分发你修改后的程序，但是你不想要公布修改后的源代码，请与我联系。
