// pages/do/do.js
const FyTestRecordSvc = require('../../services/FyTestRecordSvc')
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testRecord:{},
    answers:[],
    current:0,
    btn:"下一题",
   btn2: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var that = this;
    FyTestRecordSvc.addTestRecord(options, (data) => {
      if (data.status =="create"){
       
        var a = wx.getStorageSync(data.code);
        if(a){
       
          this.setData({ testRecord: data, answers:a });
        } else{
          var b = util.changeToAnswer(data)
          wx.setStorageSync(data.code, b);
          this.setData({ testRecord: data ,answers: b });
        }
      }else{
      this.setData({ testRecord: data });
      }
      wx.setNavigationBarTitle({
        title:(that.data.current+1) + "/" + data.questions.length 
      })
    })

  },
  
  pre: function () {
    var length = this.data.testRecord.questions.length
    if (this.data.current == 0) {

      return
    }


    var current = this.data.current - 1
    this.setData({
      current: current, btn: current + 1 == length ? "提交" : "下一题", btn2: current == 0 ? "" : "上一题"
    });

    wx.setNavigationBarTitle({
      title: (current + 1) + "/" + length
    })
  },
  next:function(){
    var length = this.data.testRecord.questions.length
    if (this.data.current + 1 >= length){
     console.log(this.data.answers)
      return
    }
  
   
    var current=this.data.current+1
    this.setData({
      current: current, btn: current + 1 == length ? "提交" : "下一题", btn2: current == 0 ? "" : "上一题"});
      
    wx.setNavigationBarTitle({
      title: (current + 1) + "/" + length
    })
  },

  change:function(e){
   console.log(e.detail)
    var a = this.data.answers
    a[e.detail.index] = e.detail.value
    this.setData({ answers:a})
    wx.setStorageSync(this.data.testRecord.code, a);
  }
 
})