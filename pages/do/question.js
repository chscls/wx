// pages/do/do.js
const FyTestRecordSvc = require('../../services/FyTestRecordSvc')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testRecord:{},
    current:0,
   
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
    if (this.data.current + 1 >this.data.questions.length){
      return
    }
    var current=this.data.current+1
    this.setData({ current: current});
  }
 
})