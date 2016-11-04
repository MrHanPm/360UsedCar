import xhr from './xhr/'
/**
 * 对应后端的 /room/* 所有 API
 */
class RoomService {

  inget (Id) {
    return xhr({
      url: `/salesroom/trucks/${Id}/1`
    })
  }

  getImage (Id) {
    return xhr({
      url: `/truck/pictures/${Id}`
    })
  }

}

// 实例化后再导出
export default new RoomService()
