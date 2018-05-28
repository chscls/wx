//index.js
//获取应用实例
const app = getApp()

Page({
  
  data: {
    motto: '陈芳颐',

  },
  print:function(text){
  console.log(text)
  },
  setDisabled: function (e) {
   this.print("xxxxxxxxxxxxx")
    this.setData({ motto: '陈欢',})
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  }
})
