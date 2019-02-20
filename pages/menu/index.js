// pages/index/index.js
const util = require('../../utils/util.js')
const app =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plain:true,
    modal:true,
    modalContent:'',
    key:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  GOTO:function(){
    wx.navigateTo({
      url: '../goto/goto',
    })
  },
  bind_component:function(){
    wx.navigateTo({
      url: '../component/component',
    })
  },
  bindModal:function(){
    this.setData({
      modal:false,
    })
  },
  bindModalInput:function(e){
    this.setData({
      modalContent: e.detail.value,
    });
  },
  bindConfirm:function(e){
    console.log(this.data.modalContent);
    if (this.data.modalContent == ''){
      wx.showToast({
        title: '请输入内容',
        duration:2000,
        icon:"none",
      })
    }else{
      this.setData({
        modal: true,
      })
    }
    
  },
  bindCancel:function(){
    this.setData({
      modal: true,
    })
  },

  bindAuth:function(){
    wx.navigateTo({
      url: '../auth/auth',
    })
  },

  bindThrottle: util.throttle(function (e) {
    console.log(this)
    console.log(e)
    console.log((new Date()).getSeconds())
    wx.showToast({
      title: '第 ' + new Date().getSeconds() + ' S 点击的, 2s后的点击才有效',
      duration:500
    })
    this.setData({
      key: e.currentTarget.dataset.key
    })
  }, 2000),

  bindMock: function () {
    wx.navigateTo({
      url: '../mock/mock',
    })
  },

  bindFlex:function(){
    wx.navigateTo({
      url: '../flex/flex',
    })
  },

  bindScanCode:function(){
    wx.scanCode({
      success:(res)=>{
        console.log("success")
        console.log(res)
      },
      fail:(res)=>{
        console.log('failed')
        console.log(res)
      },
      complete:(res)=>{
        console.log('complete')
        console.log(res)
      }
    })
  },

  bindSocketA:function(){
    var socketOpen = false
    var socketMsgQueue = []
    
    wx.connectSocket({
      url: 'ws://localhost:12345'
    })
    wx.onSocketOpen(function (res) {
      console.log('WebSocket A连接已打开！')
      socketOpen = true
      for (var i = 0; i < socketMsgQueue.length; i++) {
        sendSocketMessage(socketMsgQueue[i])
      }
      socketMsgQueue = []
    })
    wx.onSocketError(function (res) {
      console.log('WebSocket A 连接打开失败，请检查！')
    })

    function sendSocketMessage(msg) {
      if (socketOpen) {
        wx.sendSocketMessage({
          data: msg
        })
      } else {
        socketMsgQueue.push(msg)
      }
    }

  },

  bindSocketB: function () {
    wx.connectSocket({
      url: 'ws://localhost:12345'
    })
    wx.onSocketOpen(function (res) {
      console.log('WebSocket B连接已打开！')
    })
  },
  bindScrollView:function(){
    wx.navigateTo({
      url: '../scroll/scroll',
    })
  },
  bindPop:function(){
    wx.navigateTo({
      url: '../pop/pop',
    })
  },
  bindTab:function(){
    wx.navigateTo({
      url: '../tab/tab',
    })
  },
  bindTpl:function(e){
    wx.navigateTo({
      url: '../tpl/tpl',
    })
  },
  bindWeb:function(e){
    wx.navigateTo({
      url: '../web/web',
    })
  },
  bindMap: function (e) {
    wx.navigateTo({
      url: '../map/map',
    })
  },
  bindSwiper:function(e){
    wx.navigateTo({
      url: '../swiper/swiper',
    })
  }
})