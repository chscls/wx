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

// components/Single.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    wxgrid
  },

  /**
   * 组件的方法列表
   */
  methods: {
      close:function(e){
        this.triggerEvent('close', {}) // 只会触发 pageEventListener2
      }
  }
})
