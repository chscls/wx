//index.js
//获取应用实例
const app = getApp()
const http = require('../../utils/http.js')

Page({
  data: {
    motto: '陈芳颐',
    isRegister:true,
    userInfo:{},
    openid:''
  },
  getRegisterCode: function () {
   console.log("xxxxxxxxx")
  },
  formSubmit: function (e) {
    if (e.detail.value.realname== ""){
      wx.showModal({
        title: '表单错误',
        content: '请输入真实姓名或者选择跳过，以后再输入',
        showCancel: false
      })
      return
    }
    http.postReq("/wx/FyUserSvc/register",
      {
        ...e.detail.value,
        openid: this.data.openid,
        ...this.data.userInfo
      
      }, res => {

          this.setData({ isRegister: true })
      

      })
  },
  formJump: function () {
    http.postReq("/wx/FyUserSvc/register",
      {
        openid: this.data.openid,
        ...this.data.userInfo
      }, res => {

        this.setData({ isRegister: true})
        

      })
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
    wx.getUserInfo({
      success: res=> {
        console.log(res.userInfo)
        this.setData({"userInfo": res.userInfo})
  
        wx.login({
          success: res => {
            http.postReq("/wx/FyUserSvc/wxcode",
              {
                code: res.code
              }, res => {

                if (res.id == null) {
                  this.setData({ isRegister: false, openid: res.openid  })
                }

              })

            // /this.setData({ isRegister: false })
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
          }
        })
      }
    })
    
  }
})
