// pages/do/do.js
const FyTestRecordSvc = require('../../services/FyTestRecordSvc')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testRecord:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    FyTestRecordSvc.addTestRecord(options, (data) => {
      this.setData({ testRecord: data });
    })

  },

 
})