# vue个人博客

> 此项目基于`vue`全家桶, UI库`iview`，响应式布局，可适配多端。
> 博客内内容主要展示用。
主要功能：
● 登录/注册（含登录验证）；登出
● 音乐播放，音量控制，以及当前曲目名高亮滚动显示
● 日历及todo list
● 日志选项卡
● 归档内容搜索及结果高亮
● 瀑布流图片集

## 博客展示
### 登录/注册
![image](https://github.com/neko-kyuu/vue-public-blog/blob/master/screenshots/Snipaste_2020-10-13_14-22-59.png)
![image](https://github.com/neko-kyuu/vue-public-blog/blob/master/screenshots/Snipaste_2020-10-13_14-34-55.png)

包含表单验证功能
![image](https://github.com/neko-kyuu/vue-public-blog/blob/master/screenshots/Snipaste_2020-10-13_14-36-27.png)

这里登录验证我将用户名保存在了sessionStorage里。

> 试用登录名neko 密码123456

### 首页
![image](https://github.com/neko-kyuu/vue-public-blog/blob/master/screenshots/Snipaste_2020-10-13_15-55-18.png)
首页布局为顶部-侧边布局。顶部区包括菜单栏和装饰图，鼠标悬浮在头像logo处可以登出。侧边栏包括音乐盒、日历及归档。

![image](https://github.com/neko-kyuu/vue-public-blog/blob/master/screenshots/Snipaste_2020-10-13_15-55-52.png)
正在播放的音乐底色会标橙，并且曲名会滚动显示。音乐的播放/暂停及音量控制为HTML5 audio自带的control属性。

![image](https://github.com/neko-kyuu/vue-public-blog/blob/master/screenshots/Snipaste_2020-10-13_15-56-40.png)
今日日期会显示黄色底色，点击本月的任意日期会弹出可以拖动的todo list窗口。

### 日志
![image](https://github.com/neko-kyuu/vue-public-blog/blob/master/screenshots/Snipaste_2020-10-13_16-01-19.png)
日志页包含tabs选项卡功能。

### 归档
![image](https://github.com/neko-kyuu/vue-public-blog/blob/master/screenshots/Snipaste_2020-10-13_16-15-05.png)
归档页包含搜索功能，并且能够将搜索结果高亮特别显示。

### 画廊
![image](https://github.com/neko-kyuu/vue-public-blog/blob/master/screenshots/Snipaste_2020-10-13_16-16-45.png)
![image](https://github.com/neko-kyuu/vue-public-blog/blob/master/screenshots/Snipaste_2020-10-13_16-17-15.png)
瀑布流布局，图片支持懒加载。

### 其他功能
右侧边栏包含`︿`置顶功能。

readme存档（内容与上文一致）：
https://neko-kyuu.github.io/2020/10/13/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2readme/

## Setup

``` bash
# 安装依赖
npm install

# 开发模式 localhost:8080
npm run dev

# 打包
npm run build

```
