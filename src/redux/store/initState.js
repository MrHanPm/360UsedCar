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
    tools: {
      nowPage: 1
    },
    truckImg: []
  },

  /* 留言板模块（按需加载） */
  msg: {
    msgs: [],           // 当前显示的留言列表
    displayControl: {   // 查询条件
      pageIdx: 1,         // 默认是第 10 页
      quantity: 10,       // 默认每页显示 10 条记录
      authorSpecified: '' // 是否有指定发布者
    }
  },

  /* 待办事项模块（按需加载） */
  todos: [
    // {
    //   id: 123,
    //   content: '待办事项1',
    //   completed: false,
    //   createdAt: 1473499991348
    // }
  ]
}
