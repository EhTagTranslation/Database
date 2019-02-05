译文数据库介绍 
==================
## 协议
**Wiki 文本内容除另有声明外，均在[知识共享(Creative Commons) 署名-非商业性使用-相同方式共享 3.0 协议](https://creativecommons.org/licenses/by-nc-sa/3.0/cn/legalcode)下提供，附加条款亦可能应用。**

**Wiki 数据库内容归全体编辑者共同所有，在 Wiki 里发布内容即表示您允许将您编辑的内容无偿且自由地使用到 EhTagTranslator 中。**

**允许第三方项目使用本项目 Wiki 数据库，但请使用的项目提交一份附上项目的简介或地址的 Issue。**

## 规则
**请自觉遵守下方规则添加翻译**

### 表格格式规则
* 英文名请按照标签搜索时搜索框内显示的文字来填写，因为画廊页面显示名称可能不是真正的标签名，见[特殊类型标签](#特殊类型标签)。
* 表格行书写格式为 `| 英文名 | 中文名 | 简介 | 外部链接 |`。
* 表格第一行前与最后一行要有空行（该格式已做好，勿修改即可），**表格内每一行需紧挨上一行不能分开**，一旦分开后面的数据无法识别。
* 单元格内需要换行请输入 `<br>`，需要输入 `|` 字符时请用 `\|`，需要输入 `*` 字符时请用 `\*`，需要输入 `~` 字符时请用 `\~`，需要输入 `\` 字符时请用 `\\`。
* 保留第 1 格为空即作为注释行。第 1 格为空，第 2、3 格可以任意填写，第 4 格填写外部链接。  
  示例： 
  ```markdown
  | | ▼ 东方Project 人物 | 请参照THBWiki官方角色列表填写 | [官方角色列表](http://thwiki.cc/%E5%AE%98%E6%96%B9%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8) |
  ```  
* 链接书写格式为 `[链接文字](链接网址)`，不按此格式书写的会被当作文字处理。  
* 图片书写格式为 `![替换文字](图片网址)`，不按此格式书写的会被当作文字处理。  
  替换文字为图片加载失败时显示，不输出到 CSS 代码，可以留空但是括号必须有，如 `![](http://...)`。

### 翻译/简介书写规则
* [EHWiki](https://ehwiki.org/) 上标签规定有对应日文汉字的，优先作为中文名，除非中文圈里有大家更熟知的精确对应的词汇（不精确的请写在简介里）。并且转成简体汉字，日文汉字有特殊梗的除外。
* 女性、男性、杂项等的标签请尽量使用有逻辑的语言解释标签的意义，翻译 [EHWiki](https://ehwiki.org/) 解释是不错的选择，最好将完整的提示都翻译了方便大家理解后精确查找。
* 为了维护本项目的和谐，在本项目任何 GitHub 页面图中**禁止直接显示限制级画面**，包含色情、暴力血腥等。目前关于 H 的评定，搞基需要比百合更严格，即便是穿着衣服的耽美也算限制级画面。
* 任何编辑者发现有直接显示的 H 图，或文字简介中出现侮辱他人，以及过于丑恶的词汇，都有义务修改掉或删除该简介，大家共同监督维护才能延续项目的生命。
* 中文名图标，建议使用 Emoji，不会受到图片高度影响，推荐使用 [Emoji 键盘](https://emojikeyboard.org/)，也可参考 [Unicode 官方列表](http://www.unicode.org/Public/emoji/5.0/emoji-test.txt)。  
  使用图片时，为避免影响排版，高度禁止超过 16px，推荐 12px 以下。如下图为 16px，明显影响排版。  
  ![图文混编](http://ww3.sinaimg.cn/large/6c84b2d6gw1f3tviu3ys8j20cl084dh8.jpg)
* 引用其他标签的翻译时，使用 `中文名(英文名)` 的书写方式，如 `萝莉(lolicon)`，方便查找其他标签。
* 同一实质作品、人物不同翻译时，优先保留官方翻译，其他翻译可写在简介，如保留 `精灵宝可梦` 而不是 `宠物小精灵`、`神奇宝贝`、`口袋妖怪`。
* 同一实质作品、人物有官方别名时，或同一作者以多个名义活动时，优先保留最常用名称，其他别名（名义）写在括号内，如 `五更琉璃（黑猫）`、`甘诘留太（A・浪漫・我慢）`。
* 不同实质对象在同一分类下发生英文标签重名时，由于数据库有唯一性，不可添加两条，必须合并到一条，被合并处可以用注释行书写提示。  
  中文名翻译不同的不同人物，如果次要人物几乎见不到，可以选择保留使用率更高的那一个。  
  需要同时保留时可使用 `|` 符号(表格内容处输入 `\|`)来分隔同一英文标签的不同人物。其中更加经典，使用率更高的靠前，当季热门新番往往是一过性热度。  
  简介内容使用换行符 `<br>` 进行换行分别介绍不同名字。  
  相关讨论可见 [#16](../issues/16)、[#17](../pull/17)、[#18](../issues/18)。

### 外部链接书写规则
外部链接为可选字段，保存一个或多个 URL。可以有以下用途：
* 对于原作和角色，可以链接到对应的[维基百科](https://zh.wikipedia.org/)或[萌娘百科](https://zh.moegirl.org/)词条；
* 对于团队，可以链接到社团主页和公司页面；
* 对于艺术家，可以链接到对应的 [pixiv](https://www.pixiv.net/) 或[微博](http://weibo.com/)；
* 对于恋物标签，可以链接到 [EHWiki](https://ehwiki.org/wiki/Fetish_Listing) 对应页面。

多个链接之间无需分隔符，为了显示美观，也可以使用空格分隔。

示例： 
```markdown
| oyari ashito | 大枪苇人 | ![头像](http://tva1.sinaimg.cn/crop.1.0.945.945.180/006vdozLgw1f6k9m4eu8kj30qf0qgtem.jpg) | [个人主页](https://oyariashito.net) [微博](http://weibo.com/oyariashito) |
```

### 推荐性建议
* 有大量新内容添加时，为了避免和其他编辑者冲突丢失编辑数据，可以在 [Issues](../issues) 或其他支持 Markdown 书写语言的地方新建一个页面编辑，因为是自己的帖子随时都可以保存修改，最后再合并到对应的标签页面中去。  
  ![Issues 位置](http://ww2.sinaimg.cn/large/6c84b2d6gw1f3ybs82f0yj20es057jrv.jpg)
* 中文名和简介可以用文字和图片混写。建议为标签搞一张图，特别是那些不容易理解意思的。
* 自己也可为喜爱的标签制作图片简介，建议传新浪微博等能方便外链图片的地方。图片不要太大，会显示不全。  
  例如这是我做的一张标签解释图  
  ![修正解析图](http://ww4.sinaimg.cn/large/6c84b2d6jw1f3yuc3f7r7j205k0b43zr.jpg)
* 绅士里站域名图片无法直接外链，哪怕有H也不会显示在本页面，但是在使用脚本时可以显示。
  可以在里站上找代表性的作品的缩略图拿来做介绍（见下方[里站缩略图用法](#里站缩略图用法)）。
  视觉类标签在[图片集](http://exhentai.org/imageset/)里面搜索比较容易找到合适的图。
* 如果实在是有其他会直接显示又有 H 的图可以用以下格式书写，此类写法可将任意图片在本页面不显示，支持 [[database structure version 2|wiki-version-info#version-2--20160606]] 以上的程序会自动处理成图片地址。  
  `![替换文字](# "图片网址")`，例： `![图片](# "http://ehgt.org/c/botm5.jpg")`

## 编辑 Wiki
### 进入页面
通过[[数据库内容索引|rows]]页面访问标签数据页面，请选择需要编辑标签所在行名添加。  
![页面位置](https://raw.githubusercontent.com/wiki/Mapaler/EhTagTranslator/wiki-document/images/wiki-index.png)

### 编辑
进入了标签页面后，点击右上方的编辑按钮进行编辑。    
![编辑按钮](http://ww3.sinaimg.cn/large/6c84b2d6gw1f3sog6ublej20jr0dktbc.jpg)

请参照已有格式添加或者修改内容。

### 预览结果
更改后可切换到预览状态查看结果。    
![预览按钮](http://ww4.sinaimg.cn/large/6c84b2d6gw1f3tidpoaykj20rn0jpagb.jpg)

### 保存更改
确定格式无误后点击页面下方的保存。    
![保存按钮](http://ww3.sinaimg.cn/large/6c84b2d6gw1f3ttx1xaeuj20bc085glm.jpg)

## 翻译标签
### 查看原始意义
遇到看不懂的标签时，点击标签，然后选择 `Show Tag Definition`    
![未知标签](http://ww1.sinaimg.cn/large/6c84b2d6gw1f3sq8m9qngj20fn0agwgb.jpg)

之后在弹出的 [EHWiki](https://ehwiki.org/) 中能看到英文解释，将图中红色选中这段拿去翻译来理解。
![EHWiki](http://ww2.sinaimg.cn/large/6c84b2d6gw1f3sqabsm7aj20pu0amwi8.jpg)

### 特殊类型标签
对于这种有两部分的标签    
![双语标签](http://ww3.sinaimg.cn/large/6c84b2d6gw1f3srn3ur2ej207w02mjrk.jpg)

打开标签相关作品可看到，竖杠前的才是真实标签（也可查看 [EHWiki](https://ehwiki.org/) 标签定义）    
![真实标签](http://ww1.sinaimg.cn/large/6c84b2d6gw1f3srnuxz1uj205901v0sn.jpg)

Wiki 中英文名只能填写真实标签部分    
![填写方法](http://ww4.sinaimg.cn/large/6c84b2d6gw1f3srphp9gaj20kl05w75e.jpg)

## 相关工具
### 常用翻译站点
* [谷歌翻译](http://translate.google.cn/)
* [必应翻译](http://www.bing.com/translator/)
* [百度翻译](http://fanyi.baidu.com/#auto/zh/)
* [爱词霸（金山词霸）](http://www.iciba.com/)

### 图床
#### 微博图床
* [围脖图床修复计划](http://weibotuchuang.sinaapp.com/)
* [微博相册图片地址批量获取工具](https://greasyfork.org/scripts/18036)

#### 里站缩略图用法
去到处找无 H 的图还是很困难的一件工作。绅士里站域名 exhentai.org 限制了 Cookies，不会显示在 GitHub 页面，但我们在里站就可以看到，因此可以用这个域名来访问一些有 H 的缩略图。  

因为手动改域名太麻烦，干脆直接写了个脚本工具。[安装脚本](https://sleazyfork.org/scripts/31743)  

先将画廊列表从文字列表模式改为**缩略图模式**
* 表站 `My Home > My Settings > Front Page Settings > Thumbnail View`
* 里站 `Settings > Front Page Settings > Thumbnail View`

画廊内点击 `Large` 开启**大图模式**

点击按钮自动将对应的站点格式复制到剪贴板。（里站、表站、手机版）  
* 直接点击，即可直接复制得 `图片网址`
* 按住 Ctrl 再点击，即可直接复制得 `![图](图片网址)`
* 按住 Alt 再点击，即可直接复制得 `![图](# "图片网址")`
![使用效果](http://ww2.sinaimg.cn/large/6c84b2d6gw1f49x7pxka3j20ql0l90zw.jpg)  

### 本地编辑 Wiki 方法
会使用 [Git](https://git-scm.com) 的朋友可以选择本地编辑 Wiki。由于 GitHub 只允许有可写权限的账户编辑 Wiki，所以请向项目管理者寻求项目私钥（[Issue 水楼](../issues/3)发帖并留邮箱）。  
**默认仅允许修改 Wiki，禁止在未经允许的情况下修改项目主程序，禁止随意删除 Wiki 项目内的文件**。  
远端 URL 填写 `git@github.com:Mapaler/EhTagTranslator.wiki.git`。

可视化 Markdown 编辑器推荐使用 [CuteMarkEd](http://cloose.github.io/CuteMarkEd/)，首次打开需选择 `设置 > 样式 > Github`。  
纯文本 Markdown 编辑器推荐使用 [Visual Studio Code](https://code.visualstudio.com)，目前也已支持可视化，需要点一下右上角的侧边预览按钮。  
Git GUI 推荐使用 [TortoiseGit](https://tortoisegit.org/)。更多 Git GUI 请见 [Git - GUI Clients](https://git-scm.com/downloads/guis)。  
![TortoiseGit设置](http://ww2.sinaimg.cn/large/6c84b2d6gy1fg6nbvxqeij20kl0egwkh.jpg)   
 
