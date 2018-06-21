// components/Single.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    question: Object,
    index:Number,
    answer:Array
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
      var b=[];
      for(var i=0;i<c.length;i++){
        b.push(parseInt(c[i]))
      }
      this.triggerEvent('change', { index: this.data.index, value: { indexs: b } }) // 只会触发 pageEventListener2
    }
  }
})
