// pages/commodity/commodity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndexNav:0,
    navList: [],
    firstList: [],
    secondList: [],
    thirdList: []
  },

  getNavLit() {
    let that = this
    wx.request({
      url: 'http://127.0.0.1:3002/data',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
        if(res.statusCode==200){
          that.setData({
            navList:res.data.brotherCategory
          })
        }
      }
    })
  },
  getFirstLit() {
    let that = this
    wx.request({
      url: 'http://127.0.0.1:3002/first',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log('first',res)
        if(res.statusCode==200){
          that.setData({
            firstList: res.data.data,
          })
        }      
      }
    })
  },
  getsecondLit() {
    let that = this
    wx.request({
      url: 'http://127.0.0.1:3002/second',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log('second',res)
        if(res.statusCode==200){
          that.setData({
            secondList: res.data.data,
          })
        } 
      }
    })
  },
  getthirdLit() {
    let that = this
    wx.request({
      url: 'http://127.0.0.1:3002/third',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log('third',res)
        if(res.statusCode==200){
          that.setData({
            thirdList: res.data.data,
          })
        } 
      }
    })
  },

  //点击商品详情页导航按钮
  activeNav(e) {
    console.log(e.target);
    this.setData({     
      currentIndexNav: e.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavLit();
    this.getFirstLit();
    this.getsecondLit();
    this.getthirdLit();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})