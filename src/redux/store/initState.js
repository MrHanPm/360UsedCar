/**
 * 本文件的作用就是直观呈现 整个应用状态结构树 及其 初始值
 */

export default {
  /* 用户 session */
  userData: null,
  /* 拍卖首页 */
  homeToday: [
    // {
    //   "id": "1",
    //   "cover": "month_1609/16092514397a7b827b50dd3555.jpg!700",
    //   "name": "首发拍卖会-轻卡",
    //   "begin_date": "1474883857",
    //   "finish_date": "1474552800",
    //   "trucks": "3"
    // }
  ],
  /* 拍卖主场数据 */
  room: {
    trucks: {},    // 请求的数据
    truckImg: []
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
      /* 我的竞拍 */
      myBids: [],
      /* 我的获拍 */
      myWins: [],
      /* 我的保证金 */
      myDepos: [],
      /* 我的提醒 */
      myReminds: []
  },
  /* 留言板模块（按需加载） */
  msg: {
    msgs: [],           // 当前显示的留言列表
    displayControl: {   // 查询条件
      pageIdx: 1     
    }
  }
}
