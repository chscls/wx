// components/Single.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    question: Object,
    index: Number
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
    inputChange: function (e) {
      console.log(e)
    }
  }
})
