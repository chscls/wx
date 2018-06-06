// pages/do/do.js
const FyTestRecordSvc = require('../../services/FyTestRecordSvc')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testRecord:{},
    current:1,
    currentQuestion:{},
    total:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var that = this;
    FyTestRecordSvc.addTestRecord(options, (data) => {
     
      this.setData({ testRecord: data, total: data.questions.length, currentQuestion: data.questions[0]});
      wx.setNavigationBarTitle({
        title: that.data.current + "/" + that.data.total 
      })
    })

  },
  next:function(){
    if(current>=total){
      return
    }
    var current=this.data.current+1
    this.setData({ current: current, currentQuestion: data.questions[current] });
  }
 
})