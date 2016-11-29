import xhr from './xhr/'
/**
 * 卡车详情
 */
class PayService {
/** 出价排行榜 */
  bidRec (sessionId, roomId, truId, page, numb) {
    return xhr({
      url: `/truck/bids/${roomId}/${truId}/${page}/${numb}`,
      type: 'get', 
      body: {
          'session_id': sessionId
      }
    })
  }

/** 出价 */
  bidPay (sessionId, roomId, truId, pay) {
    return xhr({
      url: '/truck/bid',
      type: 'post',
      body: {'session_id': sessionId, 'salesroom_id': roomId, 'truck_id': truId, increase: pay}
    })
  }


/** 缴纳保证金 */
  createPay (sessionId, roomId, truId, city, name) {
    return xhr({
      url: '/deposite/create',
      type: 'post',
      body: {
            'session_id': sessionId,
            'salesroom_id': roomId,
            'truck_id': truId,
            'city_id': city,
            name: name
        }
    })
  }

}

// 实例化后再导出
export default new PayService()
