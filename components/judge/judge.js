// components/Single.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    question: Object,
    index: Number,
    answer:Number
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
    radioChange: function (e) {
      this.triggerEvent('change', { index: this.data.index, value: parseInt(e.detail.value) }) // 只会触发 pageEventListener2
    }
  }
})
