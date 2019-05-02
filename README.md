# Spoof-QRcode ![](https://img.shields.io/badge/license-Apache 2.0-0a7bbd.svg?longCache=true&style=flat-square)

------

## 说明

这个微信小程序的具体功能是做一个假的微信群聊二维码来恶搞好友，起因是我在 4 月 1 号被一个好友以类似这样的图片愚弄了，4 月 2 号琢磨了一下思路，找了一些好友来测试，4 月 5 号上线。

五一假期有点空闲时间，于是完善了一下，然后开源。

![页面截图](https://upload-images.jianshu.io/upload_images/2989110-3e896190752cf209.png?)

下面是有意思的例子，扫描看一下

![有趣的例子](https://upload-images.jianshu.io/upload_images/2989110-558973f9de573ae8.png)

## 已知问题

1. 内容不能有 emoji，否则 ios 扫描二维码会乱码

2. 部分手机生成的二维码和一般的二维码有区别，具体表现为有小白边。如下图所示：

   ![生成的图片](https://upload-images.jianshu.io/upload_images/2989110-fa97ca5d59cce967.png?)

3. 引导层对不齐。模拟器上稳稳妥妥没毛病，真机上各种不齐。

   ![截图](https://upload-images.jianshu.io/upload_images/2989110-34997f3b23dd4284.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## Thanks

这个小程序，绘图用的是 Painter ，没有这个库，这个小程序可能只是一个想法。

> [https://github.com/Kujiale-Mobile/Painter ](<https://github.com/Kujiale-Mobile/Painter> )

还要感谢帮我测试、给我提建议的各位小伙伴，一起完善了这个小程序。

## TODO

- [ ] 修正引导层
- [ ] 完善敏感词
- [ ] 生成的图片加上带壳截图
- [ ] 完善 README

如果有什么问题或者是建议，可以提 issue，当然，也可以直接微信联系我。

![个人微信](https://upload-images.jianshu.io/upload_images/2989110-265c9bdc39f38a77.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)