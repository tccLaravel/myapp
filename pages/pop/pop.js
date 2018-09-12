// pages/goto/pop.js
Page({

  handleTap1: function (event) {  //点击输出outer view bindtap
    console.log("outer view bindtap")
  },
  handleTap2: function (event) {  //点击输出middle view
    console.log("middle view catchtap")
  },
  handleTap3: function (event) {  //点击输出inner view bindtap  middle view catchtap
    console.log("inner view bindtap")
  },
})