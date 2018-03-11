Page({  
  data: {   
   openid:'123',
   sex:'',
   wxdata:[],
   data:[],
  },   
  onShow: function () { 
    //获取openid 
	wx.login({
	    //获取code
	    success: function (res) {
	      var code = res.code; //返回code
	      var appId = '...';
	      var secret = '...';
	      wx.request({
	        url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
	        data: {},
	        header: {
	          'content-type': 'json'
	        },
	        success: function (res) {	          
	          	//var openid = res.data.openid //返回openid
	        }
	      })
	    }
	});
    //获取微信号信息 
    var that = this;    
    wx.getUserInfo({  
      success: function(res){  
        // success  
        that.setData({  
          wxdata:res.userInfo,
        }); 
        switch(res.userInfo.gender){  
          case 0:   
            that.setData({  
              sex:'未知'  
            })  
          break;  
          case 1:   
            that.setData({  
              sex:'男'  
            })  
          break;  
          case 2:   
            that.setData({  
              sex:'女'  
            })  
          break;  
        }  
      },  
      fail: function() {  
        // fail  
        console.log("获取失败！")  
      },  
      complete: function() {  
        // complete  
        console.log("获取用户信息完成！")  
      }  
    });
    //获取学生信息
    wx.request({
    	url: '...', //仅为示例，并非真实的接口地址
	    data: {
	      openid:this.data.openid
	    },
	    method:'POST',
	    header: {
	      'content-type': 'application/json' // 默认值
	    },
	    success: function(res) {
	      if(res.code>0){
	      	that.setData({
		    
	        });
	      }else{
	      	wx.showToast({
	      		title: '获取信息出错',
			    icon: 'loading',
			    duration: 2000
	      	});
	      }
	      
	    },
	    fail:function(){
           wx.showToast({
	      		title: '获取信息出错',
			    icon: 'loading',
			    duration: 2000
	       });
	    }
    });
  }  
})  