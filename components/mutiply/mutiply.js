// components/Single.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    question: Object,
    index:Number,
    answer:Object
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
    checkboxChange:function(e){
      var c = e.detail.value;
 
      
      this.triggerEvent('change', { index: this.data.index, value: { indexs: c } }) // 只会触发 pageEventListener2
    }
  }
})
