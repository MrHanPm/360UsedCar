/* 入口启动文件 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'STORE'
import route from 'ROUTE'

import 'ASSET/less/foot.less'
import 'ASSET/less/secondHandCar.less'
import 'ASSET/less/css.less'
import 'ASSET/less/loading.less'
/**
 * 下面这货用于检测不必要的重新渲染，详情请看其项目地址：
 * https://github.com/garbles/why-did-you-update
 */
if (__DEV__ && __WHY_DID_YOU_UPDATE__) {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}
if (__DEV__) {
  console.info('[当前环境] 开发环境')
}
if (__PROD__) {
  console.info('[当前环境] 生产环境')
}

// ================================
// 将根组件挂载到 DOM，启动！
// ================================
const MOUNT_NODE = document.getElementById('AppBody')

ReactDOM.render(
  <Provider store={store}>
    {route}
  </Provider>,
  MOUNT_NODE
)

// === Webpack 处理 assets，取消注释即可进行测试 === //


/* 处理 img，小于 10KB 的转为 base64，否则使用 URL */
// import base64 from 'ASSET/img/smaller.png'
// import url from 'ASSET/img/larger.png'

// function appendImgToBody(content) {
//   const img = document.createElement('img')
//   img.src = content
//   document.body.appendChild(img)
// }
// appendImgToBody(base64)
// appendImgToBody(url)

/**
 * 【拓展】
 *  react-redux 的 Provider 中传入的属性
 *  可以让全体组件轻松访问，避免繁琐累赘的层层下传。例子：
 *  
 *  class XXX extends Component {
 *    static contextTypes = {
 *      // 组件中需要这样子声明
 *      store: PropTypes.object.isRequired
 *    }
 *    componentDidMount () {
 *      // 之后就可以直接这样用
 *      this.context.store.getState()
 *    }
 *  }
 *  
 *  但上面这种官方的做法实在太麻烦，于是有更为直接的方式：
 *  import store from 'STORE'
 *  store.getState() // 只读，更改 state 只能通过 dispatch
*/
