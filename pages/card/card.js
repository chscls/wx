var WXGrid = require('../../libs/wxgrid/wxgrid.js')
var wxgrid = new WXGrid;
wxgrid.init(2, 4);
var img = "http://pic.qqtn.com/up/2016-9/20169281936395677.png";
var classifies = [
  { name: "领聘1", img },
  { name: "领聘2", img },
  { name: "领聘3", img },
  { name: "领聘4", img },
  { name: "领聘5", img },
  { name: "领聘6", img },
  { name: "领聘7", img },
  { name: "领聘8", img }]
wxgrid.data.add("classifies", classifies);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxgrid
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})