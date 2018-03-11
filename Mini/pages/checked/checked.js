var app = getApp();
Page({
	data:{
       number:'',
       list:[],
	},
	onLoad:function(){
       // 为 number 赋值，调用 app中的方法
	},
	onShow:function(){
      wx.request({
      	url:'...',
      	data:{
      		number:'',
      		flag:1
      	},
      	method:'POST',
      	header: {
	      'content-type': 'application/json' // 默认值
	    },
	    success:function(res){
          if(res.code>0){
             //为 list 赋值
          }else{
             wx.showToast({
             	title:'获取失败',
             	icon:'loading',
             	duration: 2000
             });
          }
	    },
	    fail:function(){
             wx.showToast({
             	title:'系统出错',
             	icon:'loading',
             	duration: 2000
             });
	    }
      });
	}
})