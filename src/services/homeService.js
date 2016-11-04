import xhr from './xhr/'

/**
 * 对应后端涉及到用户认证的 API
 */
class HomeService {

  checkHome () {
    return xhr({ url: '/salesroom/today' })
  }
}

// 实例化后再导出
export default new HomeService()
