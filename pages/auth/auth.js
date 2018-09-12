Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
  },

  onShow:function(){
    wx.showModal({
      title: '提示',
      content: '获取昵称、头像信息',
      success: function (e) {
        // 查看是否授权
        wx.getSetting({
          success: function (res) {
            console.log("getSetting success");
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              wx.getUserInfo({
                success: function (res) {
                  console.log("auth success")
                  console.log(res.userInfo)
                }
              })
            }
          },
        })
      },
      fail: function (e) {

      }
    })
  },

  bindGetUserInfo: function (e) {
    console.log("bind")
    console.log(e.detail.userInfo)
  }
})