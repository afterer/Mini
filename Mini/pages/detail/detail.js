var app =getApp();  
Page({  
    data: {  
       id:'',
       remark:''
    },
    remarksInput:function(e){
      this.setData({
        remark:e.detail.value
      })
    },
    onLoad:function(options){
      var that = this;
      wx.showToast({
        title:'加载中',
        icon:'loading',
        duration:2000
      });
      //为id 赋值 options.id，然后获取数据渲染
      //从app中获取 number
    },
    onShow:function(){
      
    },
    agree:function(){
       this.check(1);
    },
    disagree:function(){
      this.check(0);
    },
    check:function(flag){
      wx.request({
        url:'...',
        data:{
          id:'',
          flag:flag,
          remark:'',
          number:'',
        },
        method:'POST',
        header:{
           'content-type': 'application/json' // 默认值
        },
        success:function(res){
          if(res.code>0){
            wx.showToast({
              title:'审批完成',
              icon:'success',
              duration:2000
            });
            //发送通知 给学生和被请假 课程的老师
          }else{
            wx.showToast({
              title:'审批出错',
              icon:'loading',
              duration:2000
            });
          }
        },
        fail:function(){
            wx.showToast({
              title:'系统出错',
              icon:'loading',
              duration:2000
            });
        }
      });
    }
}) 
/*
 flag 是判断同意与否
 id   是判断哪一个请假对象
 */