var  app = getApp()
Page({
  data:{
    grade:[]
  },
  onLoad:function(){
    this.setData({
      grade:getApp().globaldata.score
    })
  },
  changeStart: function () {
    wx.redirectTo({
      url: "../index/index"
    })
  },
  showLOG: function () {
    wx.redirectTo({
      url: "../logs/logs"
    })
  }
})