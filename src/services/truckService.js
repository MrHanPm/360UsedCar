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

/** 竞拍详情 */
  intBidsMsg () {
    return xhr({
      url: '/member/bids/1'
    })
  }
/** 获拍详情 */
  intWinsMsg (bidId) {
    return xhr({
      url: `/member/bidview/${bidId}`
    })
  }
/** 保证金详情 */
  intDeposMsg (depositeId) {
    return xhr({
      url: `/member/depositeview/&{depositeId}`
    })
  }
/** 创建提醒 */
  crtReminds (roomId, truId, mode, point, times, pcode) {
    return xhr({
      url: '/member/remind',
      type: 'post',
      body: {
            'salesroom_id': roomId,
            'truck_id': truId,
            mode: mode,
            point: point,
            difference: times,
            captcha: pcode
        }
    })
  }

/** 删除提醒 */
  delReminds (remindId) {
    return xhr({
      url: `/member/reminddel/${remindId}`
    })
  }

    /** 发送验证码 */
  pcodes () {
    return xhr({
      url: '/member/remindcaptcha'
    })
  }
}

// 实例化后再导出
export default new TruckService()
