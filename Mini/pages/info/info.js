var app = getApp()
Page({
  data: {
     number:'',
     list:[]
  },
  onLoad: function () {
     //从 app获取学工号number
     wx.request({
        url:'...',
        data:{
          number:''
        },
        method:'POST',
        header:{
          'content-type': 'application/json' // 默认值
        },
        success:function(res){
           if(res.code>0){
              //为list赋值
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
  }

})
/*
  请假课程 是针对该老师的，不需要显示请假时段中的全部 课程
 */