var FyTestRecordSvc = require('../../services/FyTestRecordSvc')
var util = require('../../utils/util')

Page({
  // 页面初始数据
  data: {
    // nav 初始化
    // cas picker
    sercherStorage: [],

    inputValue: "",             //搜索框输入的值  

    StorageFlag: true,         //显示搜索记录标志位
    casArray: ['美发', '美容', '美甲', '美睫'],
    casIndex: 0,
    // addr picker
    addrArray: util.replacePhone([], false),
    addrIndex: 0,
    skillData: [],
    curNavId: 1,
    curIndex: 0
  },

  onLoad: function () {

    var that = this
    FyTestRecordSvc.queryTestRecord({ start: 0, count: 10 }, (data) => {
      that.setData({
        list: data
      })
    })

  },
  
  // 跳转至详情页
  navigateDetail: function (e) {
    wx.navigateTo({
      url: '../technicain_detail/technicain_detail?artype=' + e.currentTarget.dataset.arid
    })
  },
  // 加载更多
  loadMore: function (e) {
    console.log('加载更多')
    if (this.data.skillData.length === 0) return
    var that = this
    // 由于是模拟数据，加载更多时候，数据重复加载
    // that.data.skillData = that.data.skillData.concat(that.data.skillData)
    FyTestSvc.queryTest({ start: 0, count: 10, userId: 1 }, (data) => {
      that.setData({
        list: data
      })
    })
  },
  // 类别选择
  bindCasPickerChange: function (e) {
    console.log('Category picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      casIndex: e.detail.value
    })
  },
  // 地址选择
  bindAddrPickerChange: function (e) {
    console.log('Category picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      addrIndex: e.detail.value
    })
  },
  wxSearchTab: function () {

    wx.redirectTo({
      url: '../record/search'
    })
  }

})
