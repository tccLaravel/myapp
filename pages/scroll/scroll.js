
var order = ['red', 'yellow', 'blue', 'green', 'red']
var page = 1;
Page({
  data: {
    toView: 'red',
    scrollTop: 0,
    list:[
      { id: page+'1', name:'bc_green'},
      { id: page + '2', name: 'bc_red' },
      { id: page + '3', name: 'bc_yellow' },
      { id: page + '4', name: 'bc_blue' },
      { id: page + '6', name: 'bc_green' },
      { id: page + '7', name: 'bc_red' },
      { id: page + '8', name: 'bc_yellow' },
      { id: page + '9', name: 'bc_blue' },
    ],
    load:0,
  },


  onLoad: function (e) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight);
        that.setData({
          height: res.windowHeight / 2.6
        })
        console.log(that.data.height);

      },
    })
    },


  upper: function (e) {
    //console.log(e)
  },

  lower: function (e) {
    console.log(e)
    this.setData({
      load: 1
    })
    let that = this;
    setTimeout(function(){
      let list = that.data.list;
      page++;
      let pre_list = that.data.list;

      for (var i = 0; i <= 7; i++) {
        list.push(pre_list[i]);
      }
      that.setData({
        list: list
      })
    },3000);
  },
  scroll: function (e) {
    //console.log(e)
  },
  tap: function (e) {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      showCancel:false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    console.log(this.data.toView)
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
    console.log(this.data.toView)
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop
    })
  }
});