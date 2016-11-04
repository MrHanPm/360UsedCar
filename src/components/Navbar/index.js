import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'


export default class Navbar extends Component {

  render () {
    return (
      <div className="home-foot" style={this.props.style}>
        <span className="return"></span>
        <IndexLink to='/' className="home selected">拍卖首页</IndexLink>
        <Link to='/' className="preview">拍卖预览</Link>
        <Link to='/' className="mine">我的拍卖</Link>
        <span className="menu"></span>
      </div>
    )
  }
}
