//index.js
//获取应用实例
const app = getApp()
const http = require('../../utils/http.js')

Page({
  data: {
    motto: '陈芳颐',
    isRegister:true,
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
    wx.login({
      success: res => {
        http.postReq("/wx/FyUserSvc/wxcode",
          {
            code: res.code
          }, res => {
           
            if (res.id == null) {
              this.setData({ isRegister: false })
            }
            
          })

        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  }
})
