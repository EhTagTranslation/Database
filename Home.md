# 协议
**Wiki数据库内容归全体编辑者共同所有，在Wiki里发布内容即表示您允许将您编辑的内容无偿且自由的使用到EhTagTranslator中。**

**允许第三方项目使用本项目Wiki数据库，但请使用的项目提交一份附上项目的简介或地址的Issues。**

# 规则
**请自觉遵守规则添加翻译**

以下EhTagBuilder简称为ETB，EhTagTranslator简称为ETT

## 表格格式规则
* 英文名请按照TAG搜索时搜索框内显示的文字来填写，因为画廊页面显示名称可能不是真正的TAG名，见下方“[特殊类型Tag](#特殊类型tag)”。
* 表格行书写格式为`| 英文名 | 中文名 | 简介 |`。
* 表格第一行前与最后一行要有空行（该格式已做好，勿修改即可），**表格内每一行需紧挨上一行不能分开**，一旦分开后面的数据ETB无法识别。
* 单元格内需要换行请输入`<br>`，需要输入`|`字符时请用`\|`，需要输入`\`字符时请用`\\`。
* 保留第一格为空即作为注释行(ETB v1.0.4 以上)。第一个格子为空，后两个可以任意写。<br>
 示例：`| | ▼东方Project 人物 | 请参照[THBWiki](http://thwiki.cc/)官方角色列表填写 |`
* 图片书写格式为`![替换文字](图片网址)`，不按此格式书写的会被当作文字处理。<br>替换文字为图片加载失败时显示，不输出到CSS代码。

## 翻译/简介书写规则
* EhWiki上Tag规定有对应日文汉字的，优先作为中文名(转成简体汉字)，除非中文里有精确对应的大家熟知的词汇。
* 女性、男性、杂项等的Tag请尽量使用有逻辑的语言解释Tag的意义，翻译EhWiki解释是不错的选择，最好将完整的提示都翻译了方便大家理解后精确查找。
* 中文名和简介可以用文字和图片混写(ETB v1.1.1 以上)。建议一定要为Tag搞一张图，特别是那些不容易理解的。
* 为了维护本项目的和谐，在本项目任何GitHub页面图中**禁止直接显示限制级画面**，包含色情、暴力血腥等。目前关于H的评定，搞基需要比百合更严格，即便是穿着衣服的耽美也算限制级画面。
* 任何编辑者发现有直接显示的H图，或文字简介中出现侮辱他人，以及过于丑恶的词汇请修改掉或删除该简介。
* 中文名推荐使用Emoji作为图标，推荐使用[Emoji键盘](https://emojikeyboard.org/)，也可参考[Unicode官方列表](http://www.unicode.org/Public/emoji/5.0/emoji-test.txt)。<br>使用图片时，为避免影响排版，高度禁止超过16px，推荐12px以下。如下图为16px<br>
 ![图文混编](http://ww3.sinaimg.cn/large/6c84b2d6gw1f3tviu3ys8j20cl084dh8.jpg)
* 引用其他Tag的翻译时，使用`中文名(英文名)`的书写方式，如`萝莉(lolicon)`，方便查找其他Tag。

## 推荐性建议
* 有大量新内容添加时，为了避免和其他编辑者冲突丢失编辑数据，可以在Issues或其他支持Markdown书写语言的地方新建一个页面编辑，因为是自己的帖子随时都可以保存修改，最后再合并到对应的Tag页面中去。<br>![Issues位置](http://ww2.sinaimg.cn/large/6c84b2d6gw1f3ybs82f0yj20es057jrv.jpg)
* 自己也可为喜爱的Tag制作图片简介，建议传新浪微博等能方便外链图片的地方。图片不要太大，会显示不全。<br>
 例如这是我做的一张Tag解释图<br>
 ![修正解析图](http://ww4.sinaimg.cn/large/6c84b2d6jw1f3yuc3f7r7j205k0b43zr.jpg)
* 绅士里站域名图片无法直接外链，哪怕有H也不会显示在本页面，但是在使用脚本时可以显示。可以在里站上找代表性的作品的缩略图拿来做介绍（见本页面 相关工具 > 图床 > 里站缩略图用法）。视觉类Tag在[图片集](http://exhentai.org/imageset/)里面搜索Tag比较容易找到合适的图。
* 如果实在是有其他会直接显示又有H的图可以用以下格式书写(ETB v2.2.0 以上)，此类写法可将任意图片在本页面不显示，ETB会自动处理成图片地址。
  1. `![替换文字](# "图片网址")`，例：`![图片](# "http://ehgt.org/c/botm5.jpg")`
  2. 推荐上一种方法，但是如果觉得向更简单一点可以选择在图片网址扩展名后加h，例：`![图片](http://ehgt.org/c/botm5.jpgh)`、`![图片](http://www.mapaler.com/MusicList/mysign.phph?name=classic)`。需要注意动态网址需加在问号左边。此格式现已不推荐。

# 编辑Wiki
## 进入页面
通过Wiki页面右方的英文或中文链接访问Tag数据页面，请选择需要编辑Tag所在行名添加。

![页面位置](http://ww3.sinaimg.cn/large/6c84b2d6gw1f3tu4ax50ej20ah0mswfy.jpg)

## 编辑
进入了Tag页面后，点击右上方的编辑按钮进行编辑

![编辑按钮](http://ww3.sinaimg.cn/large/6c84b2d6gw1f3sog6ublej20jr0dktbc.jpg)

请参照已有格式添加或者修改内容。

## 预览结果
更改后可切换到预览状态查看结果。

![预览按钮](http://ww4.sinaimg.cn/large/6c84b2d6gw1f3tidpoaykj20rn0jpagb.jpg)

## 保存更改
确定格式无误后点击页面下方的保存

![保存按钮](http://ww3.sinaimg.cn/large/6c84b2d6gw1f3ttx1xaeuj20bc085glm.jpg)

# 翻译Tag
## 查看原始意义
遇到看不懂的Tag时，点击Tag，然后选择“Show Tag Definition”

![未知Tag](http://ww1.sinaimg.cn/large/6c84b2d6gw1f3sq8m9qngj20fn0agwgb.jpg)

之后在弹出的ehwiki中能看到英文解释，将这段拿去翻译来理解。

![ehwiki](http://ww2.sinaimg.cn/large/6c84b2d6gw1f3sqabsm7aj20pu0amwi8.jpg)

## 特殊类型Tag
对于这种有两部分的Tag

![双语Tag](http://ww3.sinaimg.cn/large/6c84b2d6gw1f3srn3ur2ej207w02mjrk.jpg)

打开Tag相关作品可看到，竖杠前的才是真实Tag（也可查看ehwiki Tag定义）

![真实Tag](http://ww1.sinaimg.cn/large/6c84b2d6gw1f3srnuxz1uj205901v0sn.jpg)

Wiki中英文名只能填写真实Tag部分

![填写方法](http://ww4.sinaimg.cn/large/6c84b2d6gw1f3srphp9gaj20kl05w75e.jpg)

# 相关工具
## 常用翻译站点
* [谷歌翻译](http://translate.google.cn/)
* [必应翻译](http://www.bing.com/translator/)
* [百度翻译](http://fanyi.baidu.com/#auto/zh/)
* [爱词霸（金山词霸）](http://www.iciba.com/)

## 图床
### 微博图床
* [围脖图床修复计划](http://weibotuchuang.sinaapp.com/)
* [微博相册图片地址批量获取工具](https://greasyfork.org/scripts/18036)

### 里站缩略图用法
去到处找无H的图还是很困难的一件工作。绅士里站域名exhentai.org限制了Cookies，不会显示在GitHub页面，因此可以用这个域名来访问一些有H的缩略图。

绅士站封面图就是使用的exhentai.org域名，因此之前我们发现可以用绅士站封面图来作为介绍。但是仅限于封面还是限制太多，而我今天恰巧发现，表站、里站、手机站的缩略图格式都非常相似，格式大约为`xx/xx/xxxxxx-xxx-xxx-xxx-jpg_l.jpg`

尝试将里站的缩略图（域名都是ip），变为手机站缩略图的域名，发现依然可以访问，并且没有了Cookies限制。反之，表站的封面改为里站的域名也会出现Cookies限制。再之后进一步研究发现，封面其实就是第一张图的缩略图，只不过改了域名，限制了访问。

说了这么多发现的过程，下面直接讲怎么做吧。

1. 可以从画廊列表上或画廊内复制得到封面的图片地址。

 ![封面地址1](http://ww1.sinaimg.cn/large/6c84b2d6gw1f48lg80kxbj20fm099act.jpg)
 
 ![封面地址2](http://ww4.sinaimg.cn/large/6c84b2d6gw1f48luwghfdj20a6061753.jpg)
 
 本例为<br>
 里站：`http://exhentai.org/t/31/7a/317a1a254cd9c3269e71b2aa2671fe8d28c91097-260198-640-480-png_l.jpg`（一般普通大小）<br>
 表站：`http://ehgt.org/t/31/7a/317a1a254cd9c3269e71b2aa2671fe8d28c91097-260198-640-480-png_250.jpg`（封面专用大小）<br>
 可以看出仅仅是域名部分有所不同，因此将表站域名`ehgt.org`更换为里站域名`exhentai.org`便可以阻止GitHub的直接显示。<br>
 但是注意画廊内复制得到的是结尾为`_250.jpg`的封面专用大小，比`_l.jpg`大一点，**除了封面，其他图片是没有250这个大小的**。<br>
 ![不同显示](http://ww4.sinaimg.cn/large/6c84b2d6gw1f48m1r1nixj20pc0astcq.jpg)
 
2. 下面说说其他图片的缩略图地址怎么获取。
 
 首先点击缩略图右上方的“Large”<br>
 ![Large](http://ww2.sinaimg.cn/large/6c84b2d6gw1f48m342f17j204403sdfs.jpg)
 
 之后显示模式便会变为单张缩略图模式（Normal模式下每20张图的缩略图放在同一张长条图上），有可能因为墙的原因无法显示，但是并不用怕，直接右键复制图片地址即可<br>
 ![复制缩略图地址](http://ww4.sinaimg.cn/large/6c84b2d6gw1f48mlurjwqj20f70di40w.jpg)
 
 得到的图片格式为`http://85.17.73.31/31/7a/317a1a254cd9c3269e71b2aa2671fe8d28c91097-260198-640-480-png_l.jpg`<br>
 然后我们将IP更改为手机版预览图的域名`ul.ehgt.org`，可以看到图片显示出来了。<br>
 ![更改域名后](http://ww3.sinaimg.cn/large/6c84b2d6gw1f48mn09si8j20co0asq4r.jpg)
 
3. 那么怎么让其他图的缩略图能用`exhentai.org`隐藏起来呢，按照下表更改域名即可，封面图需要增加一层t。
 
 | 地址类别 | 域名/前缀 | 最终地址路径 |
 | --- | --- | --- |
 | 原始缩略图 | `http://IP地址/` | `http://85.17.73.31/ab/a2/aba248f3e0293fdc86e908e41fec8a2fc53ec390-236374-640-480-png_l.jpg` |
 | 手机站缩略图 | `http://ul.ehgt.org/` | `http://ul.ehgt.org/ab/a2/aba248f3e0293fdc86e908e41fec8a2fc53ec390-236374-640-480-png_l.jpg` |
 | 表站封面图 | `http://ehgt.org/t/` | `http://ehgt.org/t/ab/a2/aba248f3e0293fdc86e908e41fec8a2fc53ec390-236374-640-480-png_l.jpg` |
 | 里站封面图 | `http://exhentai.org/t/` | `http://exhentai.org/t/ab/a2/aba248f3e0293fdc86e908e41fec8a2fc53ec390-236374-640-480-png_l.jpg` |
 
 将普通缩略图更改为里站封面图的路径格式后就能不被GitHub显示了，并且在绅士上仍然能显示<br>
 ![缩略图不同显示](http://ww3.sinaimg.cn/large/6c84b2d6gw1f48n0d45jxj20pc0as0wg.jpg)
 
4. 于是现在有了大量的图像缩略图作为可用的图片素材，完全不用担心了。<br>
 找到了合适的图像后，如果有H，就使用里站封面图格式隐藏起来，如果没H就使用手机站缩略图或表站封面图格式显示出来。
 
5. 因为手动改域名太麻烦，干脆直接写了个脚本工具。[安装脚本](https://github.com/Mapaler/EhTagTranslator/raw/master/ETTWikiHelper-Thumbnail.user.js)因为怕麻烦，就没传Greasy Fork了，直接在项目里安装吧。<br>
 会自动将本来域名是ip的缩略图自动改为手机版域名，这样不用翻墙也能加载缩略图了。点击按钮自动将对应的格式复制到剪贴板。<br>
 1.60开始，按住Ctrl再点击，即可直接复制得`![图](图片网址)`<br>
 1.70开始，按住Alt再点击，即可直接复制得`![图](# "图片网址")`<br>
 ![使用效果](http://ww2.sinaimg.cn/large/6c84b2d6gw1f49x7pxka3j20ql0l90zw.jpg)
 注：可能有些人还不知道可以将画廊列表从文字列表模式改为缩略图模式，表站“My Home > My Settings > Front Page Settings > Thumbnail View”，里站站“Settings > Front Page Settings > Thumbnail View”。