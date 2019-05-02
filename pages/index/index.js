var app = getApp();
Page({
  data: {
    imagePath: '',
    date: '',
    showIntroduce: '1',
    groupname: '这里填写群名', //默认提示的群名生成文本
    qrtext: '这里填写识别后的内容', //默认提示的二维码生成文本
    template: {},
    imgalist: ['https://upload-images.jianshu.io/upload_images/2989110-9ed50d1f90af6cdb.jpg'],
    TextArr: ["女装大佬交流群", "知乎大V交流群", "抖音十万加粉丝交流群", "富婆交流群", "女装debug群", "吃喝玩乐群", "码农交流群", "即刻大J交流群"],
  },

  tap_introduce_ok: function() {
    var t = this;
    t.setData({
      showIntroduce: 0
    });
    try {
      //设置 showFirst 为真，已经展示过引导
      wx.setStorageSync("showFirst", "1");
      console.log("第一次进入，已展示引导")
    } catch (t) {}
  },

  formSubmit: function(e) {

    function hasSensitiveWords(str) {
      if (str == '' || str == undefined) return false;
      // 常用敏感词
      var words = '中国猪,台湾猪,台独,藏独,疆独,共产党,共产党专制,阿共,中共,共产专制,毛泽东,毛泽東,文化大革命,文革,江泽民,胡锦涛,朱镕基,温家宝,习近平,金正日,金正恩,福音会,统一教,法轮功,法抡功,法伦功,发伦功,发抡功,步枪,枪支,海洛因,k粉,鸦片,毒品,大麻,自杀,炸弹,枪支,金麟岂是池中物,骚屄,肉逼,肉棒,援交,性交,换妻,挤乳汁,自慰,乱伦,乱奸,鸡巴,爱液,欲女,招鸡,招妓,操逼,肏死,浪逼,美逼,嫩穴,吸精,阳具,阴户,淫魔,淫母,淫女,淫妻,援交,3P,fuck,FUCK,傻逼,干你妈';
      var array = words.split(','),
        len = array.length;
      for (var i = 0; i < len; i++) {
        var item = array[i];
        if (str.indexOf(item) >= 0 && item != '') {
          return item;
        }
      }
      return false;
    }

    function replaceAll(oldStr, reStr) {
      var len = reStr.length,
        starStr = '';
      for (var i = 0; i < len; i++) {
        starStr += '*';
      }
      return oldStr.replace(new RegExp(reStr, "gm"), starStr);
    }

    var gnameStr = hasSensitiveWords(e.detail.value.gname);
    if (gnameStr) {
      wx.showToast({
        title: '包含敏感词，请重新编辑',
        icon: 'none',
        success(res) {
          console.log("惊现敏感词：" + e.detail.value.gname)
        }
      });

      this.setData({
        groupname: replaceAll(e.detail.value.gname, gnameStr),
        success(res) {
          console.log(replaceAll(e.detail.value.gname, gnameStr))
        }
      })

      return;
    }

    var urlStr = hasSensitiveWords(e.detail.value.url);
    if (urlStr) {
      wx.showToast({
        title: '包含敏感词，请重新编辑',
        icon: 'none',
        success(res) {
          console.log("惊现敏感词：" + e.detail.value.url)
        }
      });

      this.setData({
        qrtext: replaceAll(e.detail.value.url, urlStr),
        success(res) {
          console.log(replaceAll(e.detail.value.url, urlStr))
        }
      })

      return;
    }

    let that = this,
    TextArr = that.data.TextArr,
    TextArrLen = TextArr.length;
    //喷了,为什么小程序里 if 不能嵌套！！！！！！！！！！

    //群名为空，内容不为空
    if (e.detail.value.gname.length == 0 && e.detail.value.url.length != 0) {
      let random = TextArr[Math.floor(Math.random() * TextArrLen)];
      app.globalData.groupname = random; //群名
      app.globalData.qrtext = e.detail.value.url; //二维码生成文本
      console.log("群名为空，内容不为空")
    } 
    //群名和内容都为空
    else if (e.detail.value.gname.length == 0 && e.detail.value.url.length == 0){
      let random = TextArr[Math.floor(Math.random() * TextArrLen)];
      app.globalData.groupname = random; //群名
      app.globalData.qrtext = 'http://weixin.qq.com/r/cDhrc5DE8c2OrdQQ921i';//二维码生成文本
      console.log("群名和内容都为空")
    }

    //群名不为空，内容为空
    else if (e.detail.value.gname.length != 0 && e.detail.value.url.length == 0){
      app.globalData.groupname = e.detail.value.gname; //群名
      app.globalData.qrtext = 'http://weixin.qq.com/r/cDhrc5DE8c2OrdQQ921i';//二维码生成文本
      console.log("群名不为空，内容为空")
    }
    //群名和内容都不为空
    else {
      app.globalData.groupname = e.detail.value.gname; //群名
      app.globalData.qrtext = e.detail.value.url; //二维码生成文本
      console.log("群名和内容都不为空")
    }

    this.setData({
      qrtext: app.globalData.qrtext,
      groupname: app.globalData.groupname,
    })

    wx.navigateTo({
      url: '../../pages/example/example',
    })

    wx.showToast({
      title: '生成中...',
      icon: 'loading',
      success(res) {
        console.log(app.globalData.groupname)
        console.log(app.globalData.qrtext)
      }
    });

  },

  onTapAbout() {
    wx.navigateTo({
      url: '../../pages/about/about',
    })
  },

  previewImage: function(e) {
    wx.previewImage({
      urls: this.data.imgalist // 需要预览的图片http链接列表
    })
  },

  navigateToMiniProgram: function(e) {
    wx.navigateToMiniProgram({
      appId: 'wx9466ec1f37f1af95',
      envVersion: "release",
      success(res) {
        // 打开成功
      }
    })
  },

  onShareAppMessage() {
    return {
      title: `邀请你加入群聊${app.globalData.groupname}，进入可查看详情`,
      path: "/pages/index/index",
    }
  },

  
  /* 0为假，1为真 */
  /*如果想只有第一次进入才显示引导，那么把下面的代码取消注释*/
  onShow() {
    var value = wx.getStorageSync('showFirst')
    if (value == 1) { //如果已经展示过引导，那么不再展示引导
      this.setData({
        showIntroduce: 0
      });
    }
  },

  /*如果想每一次加载进入小程序都显示引导，那么把下面的代码取消注释*/
  /*onLoad() {
    var value = wx.getStorageSync('showFirst')
    if (value == 1) { //如果已经展示过引导，那么不再展示引导
      this.setData({
        showIntroduce: 1
      });
    }
  },*/
});