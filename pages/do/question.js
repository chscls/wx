// pages/do/do.js
const FyTestRecordSvc = require('../../services/FyTestRecordSvc')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testRecord:{},
    current:1,
    total:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var that = this;
    FyTestRecordSvc.addTestRecord(options, (data) => {
     
      this.setData({ testRecord: data ,total:data.questions.length});
      wx.setNavigationBarTitle({
        title: that.data.current + "/" + that.data.total 
      })
    })

  },

 
})