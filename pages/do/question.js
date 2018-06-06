// pages/do/do.js
const FyTestRecordSvc = require('../../services/FyTestRecordSvc')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testRecord:{},
    current:0,
    btn:"下一题"
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var that = this;
    FyTestRecordSvc.addTestRecord(options, (data) => {
     
      this.setData({ testRecord: data, });
      wx.setNavigationBarTitle({
        title:(that.data.current+1) + "/" + data.questions.length 
      })
    })

  },
  next:function(){
    var length = this.data.testRecord.questions.length
    if (this.data.current + 1 >= length){
     
      return
    }
  
   
    var current=this.data.current+1
    this.setData({
      current: current, btn: current + 1 == length?"提交":"下一题" });
      
    wx.setNavigationBarTitle({
      title: (current + 1) + "/" + length
    })
  }
 
})