//index.js
//获取应用实例
const app = getApp()  
Page({  
    data: {  
        routers: [  
            {  
                name: '未批',  
                 url: '/pages/uncheck/uncheck',  
                icon: '/images/edit.png',  
                code: '1',
                flag:'0'
            },  
            {  
                name: '已批',  
                 url: '/pages/checked/checked',  
                icon: '/images/checked.png',   
                code: '2',
                flag:'0'
            },  
            {  
                name: '消息',  
                 url: '/pages/info/info',  
                icon: '/images/info.png',    
                code: '3',
                flag:'1'  
            },  
            {  
                name: '设置',  
                 url: '/pages/set/set',  
                icon: '/images/set.png',   
                code: '4',
                flag:'0'  
            },  
            {  
                name: '搜索',  
                 url: '/pages/index/index',  
                icon: '/images/search.png',    
                code: '5',
                flag:'0'  
            },  
            {  
                name: '等待',  
                 url: '/pages/index/index',  
                icon: '/images/wait.png',   
                code: '6',
                flag:'0'
            },  
        ],
         movies:[    
            {url:'/images/3.jpg'} ,    
            {url:'/images/2.jpg'} ,    
            {url:'/images/3.jpg'} ,    
            {url:'/images/2.jpg'}     
        ]    
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