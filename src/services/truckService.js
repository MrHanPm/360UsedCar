import xhr from './xhr/'
/**
 * 卡车详情
 */
class TruckService {
/** 车详情 */
  getMsg (roomId, truId) {
    return xhr({
      url: `/truck/detail/${roomId}/${truId}`
    })
  }
/** 车配置信息 */
  intsMsg (modelId) {
    return xhr({
      url: `/truck/configdetail/${modelId}`
    })
  }

/** 我的竞拍 */
  intBids () {
    return xhr({
      url: '/member/bids/1'
    })
  }
/** 我的获拍 */
  intWins () {
    return xhr({
      url: '/member/wins/1'
    })
  }
/** 我的保证金 */
  intDepos () {
    return xhr({
      url: '/member/deposite/1'
    })
  }
/** 我的提醒 */
  intReminds () {
    return xhr({
      url: '/member/reminds/1'
    })
  }

}

// 实例化后再导出
export default new TruckService()
