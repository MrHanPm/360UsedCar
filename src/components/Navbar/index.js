import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'


export default class Navbar extends Component {

  render () {
    return (
      <div className={`home-foot ${this.props.className}`} style={this.props.style}>
        <span className="return" onClick ={() => {window.history.back()}}></span>
        <IndexLink to='/index' className="home" activeClassName="selected">拍卖首页</IndexLink>
        <Link to='#' className="preview">拍卖预览</Link>
        <Link to='/auction' className="mine" activeClassName="selected">我的拍卖</Link>
        <span className="menu"></span>
      </div>
    )
  }
}
