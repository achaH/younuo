// app.js
App({
  /* 小程序初始化完成，会触发onLaunch(全局只触发一次) */
  onLaunch (options) {
    // Do something initial when launch.
  },
  /* 当小程序启动，或从后台进入前台显示，会触发onShow */
  onShow (options) {
    // Do something when show.
  },
  /* 当小程序从后台进入前台，会触发onHide */
  onHide () {
    // Do something when hide.
  },
  /* 错误监听函数：小程序发生脚本错误或 API 调用报错时触发。 */
  onError (msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})