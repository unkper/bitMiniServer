Page(
  {
    loginFunc:function(event){
      console.log("success");
      wx.switchTab({
        url: "../activity/activity",
      });
    },

    registerFunc:function(event){
      wx.redirectTo({
        url: '../register/register',
      })
    }
  }
)