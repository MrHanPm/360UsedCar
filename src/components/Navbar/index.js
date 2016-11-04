import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'

/* 导航栏全局显示，控制着用户的登录注销 */

// @connect( // 功能同 UTIL/createContainer
//   ({ userData }) => ({ userData }),
//   require('ACTION/user').default
// )
export default class Navbar extends Component {
  // componentWillMount () {
  //   this.props.checkLogin()
  // }

  render () {

    return (
      <div className="home-foot">
        <span className="return"></span>
        <IndexLink to='/' className="home selected">拍卖首页</IndexLink>
        <Link to='/' className="preview">拍卖预览</Link>
        <Link to='/' className="mine">我的拍卖</Link>
        <span className="menu"></span>
      </div>
    )
  }
}

    // let {
    //   userData, login, logout, // 通过 connect 获取
    //   location: { pathname }   // 通过 App 传入
    // } = this.props
