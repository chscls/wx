Page({
  data: {
    navLeftItems: [{
      id: 1,
      tree: {

        desc: '幼教',
      },
    }, {
      id: 2,
      tree: {

        desc: '小学',
      }
      }, {
        id: 3,
        tree: {

          desc: '初中',
        }
    }, {
      id: 4,
      tree: {

        desc: '高中',
      }
    }, {
      id: 5,
      tree: {

        desc: '大学',
      }
    }, {
      id: 6,
      tree: {

        desc: '职场',
      }
    }],
    navRightItems: [{
      id: 1,
      tree: {
        nodes: [{
          id: 25,
          tree: {
           
            logo: "../../images/newmember.jpg",
            desc: 'xxxxxxx',
            desc2: 'CXXXXXX'
          },
        },{
          id: 26,
          tree: {
            
            logo: "../../images/newmember.jpg",
            desc: 'xxxxxxx',
            desc2: 'CXXXXXX'
          }
        }]
      }

    }, {
      id: 3,
      tree: {
        nodes: [{
          id: 33,
          tree: {

            logo: "../../images/newmember.jpg",
            desc: 'xxxxxxx',
            desc2: 'CXXXXXX'
          },
        }]
      }

    }],
    curNav: 1,
    curIndex: 0
  },
  onLoad: function() {
    // 加载的使用进行网络访问，把需要的数据设置到data数据对象  

  },

  //事件处理函数  
  switchRightTab: function(e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }

})