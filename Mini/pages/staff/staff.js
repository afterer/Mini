Page({
	userdata:function(){
        wx.navigateTo({
	      url: '/pages/worker/worker'
	    });
	},
	timetable:function(){
		wx.navigateTo({
	      url: '/pages/staff/staff'
	    });
	},
	record:function(){
		wx.navigateTo({
	      url: '/pages/staff/staff'
	    });
	},
	toast:function(){
		wx.navigateTo({
	      url: '/pages/staff/staff'
	    });
	},
	//首页
    Home:function(){
        wx.navigateTo({
          url: '/pages/index/index'
        });
    },
    //个人
    User:function(){
        wx.navigateTo({
          url: '/pages/staff/staff'
        });
    },
})