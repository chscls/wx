// components/TestRecord.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigateDetail:function(e){
      this.triggerEvent('navigateDetail', {item:this.data.item}) // 只会触发 pageEventListener2
    }
  }
})
