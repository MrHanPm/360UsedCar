import xhr from './xhr/'
/**
 * 对应后端的 /room/* 所有 API
 */
class RoomService {
/** 获取专场汽车列表 */
  inget (sessionId, Id) {
    return xhr({
      url: `/salesroom/trucks/${Id}/1/10`,
      type: 'get', 
        body: {
            'session_id': sessionId
        }
    })
  }
  
/** 获取汽车图片 */
  getImage (sessionId, Id) {
    return xhr({
      url: `/truck/pictures/${Id}`,
      type: 'get', 
      body: {
          'session_id': sessionId
      }
    })
  }


/** 获取评论列表 
* 入参是对象
*/

  getPostsList (json) {
    return xhr({
      url: '/interface/app/index.php',
      type: 'get',
      body: json
    })
  }

/** 发表评论
* 入参是对象
*/
  addPosts (json) {
    return xhr({
      url: '/interface/app/index.php',
      type: 'post',
      body: json
    })
  }
}

// 实例化后再导出
export default new RoomService()
