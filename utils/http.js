var stringify = require('../libs/qs/stringify.js');
var rootDocment = 'https://fang.zymoocs.com';
var header = {
  'Accept': 'application/json',
  'content-type': 'application/x-www-form-urlencoded',
  'Authorization': null,
}
function request(url,data,cb){
  var token = wx.getStorageSync('token') 
  if(token){
    data={...data,token:token}
  }
  if (data.method==null){
    
    getReq(url,data, cb)
  }else{
    postReq(url, data, cb)
  }
}
function getReq(url, data, cb) {
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: rootDocment + url + '?' + stringify(data),
    method: 'get',
    header: header,
    success: function (res) {
      if (res.statusCode == 401) {
        doLogin((token) => {
          data = { ...data, token: token }
          getReq(url,data, cb)
        })
        return
      }
      wx.hideLoading();
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      wx.hideLoading();
      wx.showModal({
        title: '网络错误',
        content: '网络出错，请刷新重试',
        showCancel: false
      })
      return typeof cb == "function" && cb(false)
    }
  })
}
function doLogin(back){
  wx.login({
    success: res => {
      postReq("/wx/FyUserSvc/wxcode",
        {
          code: res.code
        }, res => {

          wx.setStorageSync('token', res.token);
          back(res.token)
        
        })

      // /this.setData({ isRegister: false })
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
    }
  })
}
function postReq(url, data, cb) {
  wx.showLoading({
    title: '加载中',
  })
  
    wx.request({
      url: rootDocment + url,
      header: header,
      data: data,
      method: 'post',
      success: function (res) {
        if (res.statusCode == 401) {
          doLogin(()=>{
            data = { ...data, token: token }
            postReq(url, data, cb)
          })
          return
        }
        wx.hideLoading();
        return typeof cb == "function" && cb(res.data)
      },
      fail: function () {
        wx.hideLoading();
        wx.showModal({
          title: '网络错误',
          content: '网络出错，请刷新重试',
          showCancel: false
        })
        return typeof cb == "function" && cb(false)
      }
    })

}
module.exports = {
  getReq: getReq,
  postReq: postReq,
  request: request
}  