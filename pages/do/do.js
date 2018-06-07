// pages/do/do.js
const FyTestSvc = require('../../services/FyTestSvc')
var optionsTemp;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:{},
    records: [],
    isAllow:false,
    isMore:false,
    isNew:true,
    total:0,
    options:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   optionsTemp=options;
  },
  onShow: function () {
    FyTestSvc.findTest(optionsTemp, (data) => {
      this.setData({ ...data });
    })


  },
  navigateDetail: function (e) {
    
    wx.navigateTo({
      url: 'question?recordId=' + e.detail.item.id,
    })
  },
  doTest:function(e) {
    wx.navigateTo({
      url: 'question?code=' + this.data.test.code,
    })
  }
})