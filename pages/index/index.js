//index.js
//获取应用实例
const app = getApp()
const http = require('../../utils/http.js')

Page({
  
  data: {
    menus: [{ name: '职场', ename: "Job" }, { name: '大学', ename: "Collage" }, { name: '高中', ename: "Senior High" }, { name: '初中', ename: "Junior High" }, { name: '小学', ename: "Junior" }, { name: '幼儿园', ename: "Kindergarten" } ],
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ],
    motto: '陈芳颐',
    isRegister:true,
  
    openid:'',
    qcode:'请扫描'
  },

  getRegisterCode: function () {
   console.log("xxxxxxxxx")
  },
  wxSearchTab: function () {

    wx.redirectTo({
      url: '../record/search'
    })
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
  doTest: function (e) {

    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
      },
      'fail': function (res) {
      }
    })
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
      
        wx.navigateTo({
          url: '../do/do?id=' + res.result,
        })
      }
    })
  },
  setDisabled: function (e) {
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        //console.log(this.data.openid)
        http.getReq("/wx/FyUserSvc/qcodeLogin?qcode=" + res.result+"&openid="+this.data.openid ,
           res => {

              console.log("网页端扫描登录成功")


          })
        this.setData({ qcode: res.result })
     
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

        var x = wx.getStorageSync("openid")
        if(x){
          this.setData({ isRegister: true, openid: x })
        }else{
        wx.login({
          success: res => {
          http.postReq("/wx/FyUserSvc/wxcode",
              {
                code: res.code
              }, res => {

                if (res.id == null) {
                  this.setData({ isRegister: false, openid: res.openid  })
                }else{
                  this.setData({ isRegister:true, openid: res.openid })
                }
                wx.setStorageSync('token', res.token);
                wx.setStorageSync('openid', res.openid);
              })

            // /this.setData({ isRegister: false })
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
          }
        })
      }
      }
 
    
  
})
