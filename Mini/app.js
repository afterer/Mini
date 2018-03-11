//app.js
App({
  data:{
    appid:'wxf604abb81c88d69c',
    appsecret: 'b62e41a087d937148b3bedefd0ba61b2'
  },
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    number:null
  },
  getOpenid:function(){
      wx.login({  
          success: function (res) {  
            if(res.code){
               //调用request请求api转换登录凭证  
              wx.request({  
                url: 'https://api.weixin.qq.com/sns/jscode2session',
                data:{
                    appid:'wxf604abb81c88d69c',  
                    secret:'b62e41a087d937148b3bedefd0ba61b2',  
                    js_code:res.code,  
                    grant_type:'authorization_code' 
                },
                method:'GET',
                success: function(res) {  
                  console.log('openid:'+res.data.openid) //获取openid  
                },
                fail:function(){
                  console.info("获取用户openId失败");
                }
              })  
            }else{
              console.log('失败')
            }
        }  
      })  
  }
})
/*
  这里需要 一个函数：通过openid 获取学号或者学工号
 */






/*
onLoad: 页面加载
    一个页面只会调用一次。
    接收页面参数   可以获取wx.navigateTo和wx.redirectTo及<navigator/>中的 query。

onShow: 页面显示
    每次打开页面都会调用一次。

onReady: 页面初次渲染完成
    一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。


onHide: 页面隐藏
    当navigateTo或底部tab切换时调用。

onUnload: 页面卸载
    当redirectTo或navigateBack的时候调用。
 */
