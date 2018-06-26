// pages/do/do.js
const FyTestRecordSvc = require('../../services/FyTestRecordSvc')
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testRecord: {},
    answers: [],
    current: 0,
    btn: "下一题",
    btn2: "",
    isCard: false,
    defaultAnswer:{
      indexs:[],
      answers:[]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */


  onLoad: function(options) {
    var that = this;
    FyTestRecordSvc.addTestRecord(options, (data) => {
      if (data.status == "create") {
        var a = wx.getStorageSync(data.uuid);
        if (a) {
          
          this.setData({
            testRecord: data,
            answers: a
          });
        } else {
          var b = data.answers
          
          wx.setStorageSync(data.uuid, b);
          this.setData({
            testRecord: data,
            answers: b
          });
        }
      } else {
        var b = data.answers
        this.setData({
          testRecord: data,
          answers: b
        });
      }
      wx.setNavigationBarTitle({
        title: (that.data.current + 1) + "/" + data.questions.length
      })

    })

  },

  pre: function() {
    var length = this.data.testRecord.questions.length
    if (this.data.current == 0) {

      return
    }


    var current = this.data.current - 1
    this.setData({
      current: current,
      btn: current + 1 == length ? this.data.testRecord.status == "create" ? "提交" : "返回" : "下一题",
      btn2: current == 0 ? "" : "上一题"
    });

    wx.setNavigationBarTitle({
      title: (current + 1) + "/" + length
    })
  },
  next: function() {

    var length = this.data.testRecord.questions.length
    if (this.data.current + 1 >= length) {
      if (this.data.testRecord.status == "create") {
        FyTestRecordSvc.submit({
          answers: JSON.stringify(this.data.answers),
          id: this.data.testRecord.id
        }, (data) => {
          wx.removeStorageSync(data.uuid)
          wx.navigateBack({

          })
        });
      } else {
        wx.navigateBack({

        })
      }
      return
    }

    var current = this.data.current + 1
    this.setData({
      current: current,
      btn: current + 1 == length ? this.data.testRecord.status == "create" ? "提交" : "返回" : "下一题",
      btn2: current == 0 ? "" : "上一题"
    });

    wx.setNavigationBarTitle({
      title: (current + 1) + "/" + length
    })


  },

  change: function(e) {
    console.log(e.detail.value.answers)
    var a = this.data.answers
    a[e.detail.index].indexs = e.detail.value.indexs
    a[e.detail.index].answers= e.detail.value.answers
    this.setData({
      answers: a
    })
  
    wx.setStorageSync(this.data.testRecord.uuid, a);
  },

  card: function(e) {
    this.setData({
      isCard: true
    })
  },

  close: function(e) {
    this.setData({
      isCard: false
    })
  },

  click: function(e) {
    var length = this.data.testRecord.questions.length

    var current = parseInt(e.detail.index)
    this.setData({
      isCard: false,
      current: current,
      btn: current + 1 == length ? this.data.testRecord.status == "create" ? "提交" : "返回" : "下一题",
      btn2: current == 0 ? "" : "上一题"
    });

    wx.setNavigationBarTitle({
      title: (current + 1) + "/" + length
    })

  },
  print: function(e) {
    wx.showLoading({
      title: '加载中',
    })

    wx.downloadFile({
      url: 'https://www.zymoocs.com/services/FyTestRecordSvc/printRecord/' + this.data.testRecord.uuid + '.pdf',
      success: function(res) {
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function(res) {
            wx.hideLoading();
            console.log(res)

          }
        })
      }
    })
  },
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '我的试卷',
      path: '/pages/do/do?code=' + this.data.testRecord.code,
    }
  }
})