var stringify = require('../libs/stringify.js');
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
    
    getReq(url + '?' + stringify(data), cb)
  }else{
    postReq(url, data, cb)
  }
}
function getReq(url, cb) {
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: rootDocment + url,
    method: 'get',
    header: header,
    success: function (res) {
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