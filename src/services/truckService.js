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

}

// 实例化后再导出
export default new TruckService()
