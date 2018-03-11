Page({
	userdata:function(){
        wx.navigateTo({
	      url: '/pages/userinfo/userinfo'
	    });
	},
	timetable:function(){
		wx.navigateTo({
	      url: '/pages/student/student'
	    });
	},
	record:function(){
		wx.navigateTo({
	      url: '/pages/record/record'
	    });
	},
	toset:function(){
        wx.navigateTo({
	      url: '/pages/set/set'
	    });
	},
	toast:function(){
		wx.navigateTo({
	      url: '/pages/apply/apply'
	    });
	},
	//首页
    Home:function(){
        wx.navigateTo({
          url: '/pages/indexs/indexs'
        });
    },
    //个人
    User:function(){
        wx.navigateTo({
          url: '/pages/student/student'
        });
    },
})