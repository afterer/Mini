
var app = getApp();

Page({
  data:{
     
     pay: true,
     len: 0,
     focus: true,
     passwd:''
  },
  onLoad:function(options){
    
  },
  onReady:function(){
    
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindHideKeyboard: function (e) {
    var lens = e.detail.value.length;
  
    this.setData({
      len: lens,
      passwd:e.detail.value
    })
    if (e.detail.cursor == 6) {
      wx.hideKeyboard();
      this.setData({
        focus: false,
        pay: false
      })
    }

  },
  

})
