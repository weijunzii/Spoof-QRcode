var app = getApp();
Page({
  imagePath: '',

  data: {
    template: {},
  },

  onImgOK(e) {
    this.imagePath = e.detail.path;
    console.log(e);
    console.log(this.imagePath);
  },
  onImgErr(e) {
    console.log("图片出错了，麻烦大了，不会搞");
    console.log("把性能监控面板关掉就好，玄学，别问");
    console.log(e);
  },

  saveImage() {
    wx.saveImageToPhotosAlbum({
      filePath: this.imagePath,
      success: function(t) {
        wx.showToast({
          title: "保存到相册啦",
          icon: "success"
        });
      },
    });

  },

  previewImg: function(e) {
    var img = this.imagePath;
    console.log(img);
    wx.previewImage({
      current: img, // 当前显示图片的http链接
      urls: [img] // 需要预览的图片http链接列表
    })
  },

  onTapAgain() { //返回，再来一次
    wx.navigateBack()
  },

  onShareAppMessage() {
    return {
      title: `邀请你加入群聊${app.globalData.groupname}，进入可查看详情`,
      path: "/pages/index/index",

    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var groupname = app.globalData.groupname;
    var qrtext = app.globalData.qrtext;
    this.setData({
      template: {
        width: '750rpx',
        height: '850rpx',
        background: '#fff',
        views: [{
            type: 'image',
            url: '/image/GroupPhoto.jpg',
            css: {
              top: `${15}rpx`,
              width: '120rpx',
              height: '120rpx',
              left: '25rpx',
              borderRadius: '11rpx',
            },
          },

          {
            type: 'text',
            text: `${groupname}`,
            css: [{
              top: `${15 + 38}rpx`,
              width: '460rpx',
              maxLines: 2,
              left: '175rpx',
              align: 'left',
              fontSize: '33rpx',
            }],
          },
          {
            type: 'qrcode',
            content: `${qrtext}`,
            css: {
              bottom: '75rpx',
              background: 'white',
              color: 'black',
              left: '80rpx',
              width: '580rpx',
              height: '580rpx',
              align: 'left',
            },
          },
          {
            type: 'text',
            text: '二维码由小程序（恶搞二维码）生成',
            css: [{
              bottom: '5rpx',
              width: '600rpx',
              maxLines: 2,
              left: '370rpx',
              align: 'center',
              fontSize: '24rpx',
              color: '#999999',
            }],
          },
        ],
      }
    });
  },

});