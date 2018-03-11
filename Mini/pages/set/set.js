var app = getApp();
Page({
	data: {
       passwd:'',
       repasswd:'',
       openid:''
  },  
  onload:function(){
  	//通过app获取 openid
  },
  passwdInput:function(e){
  	this.setData({  
      passwd:e.detail.value  
    })  
  },
  repasswdInput:function(e){
  	this.setData({  
      repasswd:e.detail.value  
    })  
  },
  setBtnClick:function(){
  	if(this.data.passwd != this.data.repasswd||this.data.passwd==''||this.data.repasswd==''){  
      wx.showToast({    
        title: '密码不一致或空',    
        icon: 'loading',    
        duration: 2000    
      });    
    }else{
    	var passwd = this.data.passwd;
    	wx.request({
	        url: '',
	        data: {
	          'passwd':passwd,
              'openid':openid
	        },
	        method: 'POST',
	        header: {          
	             "Content-Type": "application/x-www-form-urlencoded"        
	        }, 
	        success: function (res) {
	           if(res.code>0){
	              wx.showToast({    
	                title: res.message,    
	                icon: 'success',    
	                duration: 2000    
	              }); 
	              wx.redirectTo({url:res.url});
	           }else{
	              wx.showToast({    
	                title: res.message,    
	                icon: 'loading',    
	                duration: 2000    
	              }); 
	           }
	        },
	        fail: function (res) {
	           wx.showToast({    
	              title: '系统出错',    
	              icon: 'loading',    
	              duration: 2000    
	            }); 
	        }
      });
    }
  }
})
//通过openid 到数据库中判断是学生或学工，然后进行 密码设置