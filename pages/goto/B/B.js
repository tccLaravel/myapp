var stack = require('../../../utils/pageStack.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    where: 'B'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.where + " onLoad");
    stack.getPageStack();
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
    console.log(this.data.where + " onShow");
    stack.getPageStack();
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
    console.log(this.data.where + " onUnload")
    stack.getPageStack();
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

  gotoA: function (e) {
    wx.navigateTo({
      url: '../A/A',
    })
  },
  gotoB: function (e) {
    wx.navigateTo({
      url: 'B/B',
    })
  },
  gotoC: function (e) {
    wx.navigateTo({
      url: '../C/C',
    })
  },
  gotoD: function (e) {
    wx.navigateTo({
      url: '../D/D',
    })
  },
})