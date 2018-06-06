// pages/do/do.js
const FyTestSvc = require('../../services/FyTestSvc')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:{},
    testRecords: [],
    isAllow:false,
    isMore:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    FyTestSvc.findTest(options,(data)=>{
      this.setData({...data});
    })
  },

  doTest:function(e) {
    wx.navigateTo({
      url: 'question?code=' + this.data.test.code,
    })
  }
})