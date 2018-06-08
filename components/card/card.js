Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:Array
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
      close:function(e){
        this.triggerEvent('close', {}) // 只会触发 pageEventListener2
      },
      click:function (e) {
       
        this.triggerEvent('click', { index: e.target.id }) 
      }
  }
})
