App({
  onLaunch: function() {
    const res = wx.getStorageInfoSync()
    console.log(res)
    console.log(res.keys)
  },

  globalData: {
    groupname: '女装大佬集合群', //默认显示的群名生成文本
    qrtext: 'http://weixin.qq.com/r/cDhrc5DE8c2OrdQQ921i', //默认显示的二维码生成文本
  },

});