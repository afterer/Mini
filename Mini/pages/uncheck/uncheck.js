var app = getApp();
Page({
	data:{
	  number:'',
      list:[],
	},
    onLoad:function(){
    	// this.setData({
        // openid:app.getNumber
    	// });    
    },
    onShow:function(){
       var that = this;
       wx.request({
		  url: '...', //仅为示例，并非真实的接口地址
		  data: {
		     number:'',
		     flag:0
		  },
		  method:'POST',
		  header: {
		      'content-type': 'application/json' // 默认值
		  },
		  success: function(res) {
		    if(res.code>0){
               //that.setData({});
		    }else{

		    }
		  },
		  fail:function(){
		  	wx.showToast({
		  		title:'系统出错',
		  		icon:'loading',
		  		duration: 2000
		  	});
		  }
		})
    }
})
