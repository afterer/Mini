
var app = getApp();

Page({
  data:{
     name:'',
     number:'',
     phone:'',
     sponsor:'',
     sphone:'',
     applydate:'',
     applytime:'',
     length:'',
     apply:'',
     pay: false,
     len: 0,
     focus: false,
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
  applyBtnClick:function (){
     this.setData({
        focus: true,
        pay: true
      }) 
    
    
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
      wx.request({
        url:'http://localhost/ask_leave/index.php/index/user/getPasswd',
        data:{
          passwd:this.data.passwd
        },
        method:'POST',
        header:{
            'content-type':'application/json'
        },
        success:function(res){
          if(res.code>0){
            console.log(res.message);
          }else{
            console.log(res.message);
          }
        },
        fail:function(){
          wx.showToast({
            title:'error',
            icon:'loading',
            duration:2000
          })
        }
    })
    }
  },
  usernameInput:function (e){
     this.setData({
        name:e.detail.value
     })
  },
  numberInput:function (e){
     this.setData({
        number:e.detail.value
     })
  },
  phoneInput:function(e){
     this.setData({
        phone:e.detail.value
     })
  },
  sponsorInput:function(e){
     this.setData({
        sponsor:e.detail.value
     })
  },
  sphoneInput:function(e){
     this.setData({
        sphone:e.detail.value
     })
  },
  lengthInput:function(e){
     this.setData({
        length:e.detail.value
     })
  },
  applyInput:function(e){
      this.setData({
        apply:e.detail.value
     })
  },
  bindDateChange:function(e){
     this.setData({
        applydate:e.detail.value
     })
  },
  bindTimeChange:function(e){
    this.setData({
        applytime:e.detail.value
     })
  }


})
