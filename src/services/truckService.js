import xhr from './xhr/'
/**
 * 卡车详情
 */
class TruckService {
/** 车详情 */
  getMsg (sessionId, roomId, truId) {
    return xhr({
      url: `/truck/detail/${roomId}/${truId}`,
      type: 'get', 
      body: {
          'session_id': sessionId
      }
    })
  }
/** 车配置信息 */
  intsMsg (sessionId, modelId) {
    return xhr({
      url: `/truck/configdetail/${modelId}`,
      type: 'get', 
      body: {
          'session_id': sessionId
      }
    })
  }

/** 我的竞拍 */
  intBids (sessionId) {
    return xhr({
      url: '/member/bids/1',
      type: 'get', 
      body: {
          'session_id': sessionId
      }
    })
  }
/** 我的获拍 */
  intWins (sessionId) {
    return xhr({
      url: '/member/wins/1',
      type: 'get', 
      body: {
          'session_id': sessionId
      }
    })
  }
/** 我的保证金 */
  intDepos (sessionId) {
    return xhr({
      url: '/member/deposite/1',
      type: 'get', 
      body: {
          'session_id': sessionId
      }
    })
  }
/** 我的提醒 */
  intReminds (sessionId) {
    return xhr({
      url: '/member/reminds/1',
      type: 'get', 
      body: {
          'session_id': sessionId
      }
    })
  }

/** 竞拍详情 */
  intBidsMsg (sessionId) {
    return xhr({
      url: '/member/bids/1',
      type: 'get', 
      body: {
          'session_id': sessionId
      }
    })
  }
/** 获拍详情 */
  intWinsMsg (sessionId, bidId) {
    return xhr({
      url: `/member/bidview/${bidId}`,
      type: 'get', 
      body: {
          'session_id': sessionId
      }
    })
  }
/** 保证金详情 */
  intDeposMsg (sessionId, depositeId) {
    return xhr({
      url: `/member/depositeview/&{depositeId}`,
      type: 'get', 
      body: {
          'session_id': sessionId
      }
    })
  }
/** 创建提醒 */
  crtReminds (sessionId, roomId, truId, mode, point, times, pcode) {
    return xhr({
      url: '/member/remind',
      type: 'post',
      body: {
            'session_id': sessionId,
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
  delReminds (sessionId, remindId) {
    return xhr({
      url: `/member/reminddel/${remindId}`,
      type: 'get', 
      body: {
          'session_id': sessionId
      } 
    })
  }

    /** 发送验证码 */
  pcodes (sessionId) {
    return xhr({
      url: '/member/remindcaptcha',
      type: 'get', 
        body: {
            'session_id': sessionId
        } 
    })
  }
}

// 实例化后再导出
export default new TruckService()
