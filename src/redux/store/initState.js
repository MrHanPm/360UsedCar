/**
 * 本文件的作用就是直观呈现 整个应用状态结构树 及其 初始值
 */

export default {
  
  /* 拍卖首页 */
  homeToday: [],
  /* 拍卖主场数据 */
  room: {
    trucks: {},    // 卡车信息
    truckImg: [],  // 卡车图片
    posts: []       // 评论列表
  },
  /* 卡车详情数据 */
  truckMsg: {
    mode: {},
    dataDB: {
      abc: ''
    }
  },
  pays: {
      /* 出价记录 */
      bidRecord: [],
      /* 出价 */
      pay: {}
  },
  myMsg: {
      /* 用户 session */
      userData: null,
      /* 我的竞拍 */
      myBids: [],
      /* 我的获拍 */
      myWins: [],
      /* 我的保证金 */
      myDepos: [],
      /* 我的提醒 */
      myReminds: [],

      /* 竞拍详情 */
      bidsMsg: {},
      /* 获拍详情 */
      winsMsg: {},
      /* 保证金详情 */
      deposMsg: {},
      /* 提醒详情 */
      remindsMsg: {}
  }
}
