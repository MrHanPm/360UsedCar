import xhr from './xhr/'

/**
 * 对应后端涉及到用户认证的 API
 */
class UserService {

  checkLogin (sessionId) {
    return xhr({ 
      url: '/salesroom/today',
      type: 'get', 
      body: {
          'session_id': sessionId
      }
    })
  }

  /**
   * @param  {Object} userData
   * @return {Promise}
   */
  login (userData) {
    return xhr({
      method: 'post',
      url: '/login',
      body: userData
    })
  }

  logout () {
    return xhr({ url: '/logout' })
  }

}

// 实例化后再导出
export default new UserService()
