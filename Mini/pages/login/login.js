var app = getApp()
Page({  
  data: {
    number: '',  
    idcard:'', 
    type:'student', 
    items:[
      {name:'student',value:'学生',checked:'true'},
      {name:'worker',value:'学工'}
    ], 
  },  
  
// 获取输入学号  
  numberInput :function (e) {  
    this.setData({  
      number:e.detail.value  
    })  
  },  
  
// 获取输入身份证  
  idcardInput :function (e) {  
    this.setData({  
      idcard:e.detail.value  
    })  
  },  
//获取登录类型
  radioChange:function(e){
    this.setData({
      type:e.detail.value
    })
  },
  
// 登录  
  login:function () {  
    if(this.data.number.length == 0 || this.data.idcard.length ==0){  
      wx.showToast({    
        title: '内容不能为空',    
        icon: 'loading',    
        duration: 2000    
      });    
    }else{  
      // 这里修改成跳转的页面 
      var number = this.data.number;
      var idcard = this.data.idcard;
      var type   = this.data.type;
     
      // wx.request({
      //   url: '...',
      //   data: {
      //     'number':number,
      //     'idcard':idcard,
      //     'type':type
      //   },
      //   method: 'POST',
      //   header: {          
      //        "Content-Type": "application/x-www-form-urlencoded"        
      //   }, 
      //   success: function (res) {
      //      if(res.code>0){
      //         wx.showToast({    
      //           title: res.message,    
      //           icon: 'success',    
      //           duration: 2000    
      //         }); 
      //         wx.redirectTo({url:res.url});
      //      }else{
      //         wx.showToast({    
      //           title: res.message,    
      //           icon: 'loading',    
      //           duration: 2000    
      //         }); 
      //      }
      //   },
      //   fail: function (res) {
      //      wx.showToast({    
      //         title: '系统出错',    
      //         icon: 'loading',    
      //         duration: 2000    
      //       }); 
      //   }
      // });
    }    
  }  
})  