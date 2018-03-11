var app = getApp();
Page({
	data:{
		list:[],
		number:''
	},
	onLoad:function(){
       wx.request({
       	  url:'...',
       	  data:{
       	  	number:'',
       	  },
       	  method:'POST',
       	  header:{
       	  	 'content-type': 'application/json' // 默认值
       	  },
       	  success:function(res){
       	  	if(res.code>0){
       	  		//为 list 赋值
       	  	}else{
       	  		wx.showToast({
       	  			title:'获取出错',
       	  			icon:'loading',
       	  			duration:2000
       	  		})
       	  	}
       	  },
       	  fail:function(){
       	  	  wx.showToast({
       	  			title:'系统出错',
       	  			icon:'loading',
       	  			duration:2000
       	  	  })
       	  }
       });
	},
})