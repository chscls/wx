// components/Single.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    question: Object,
    index: Number,
    answer: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    value:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputChange:function(e){
      var id=parseInt(e.target.id)
        var value=this.data.value
        value[id]=e.detail.value
        this.setData({ value: value })
        this.triggerEvent('change', { index: this.data.index, value:{answers: value} }) // 只会触发 pageEventListener2
    }
  },
  attached: function () {
    var value=[]
    for (var i = 0; i < this.data.question.items.length;i++){
      value.push("")
    }
    this.setData({value:value})

   },
})
