import React, { Component } from 'react'
// import { Link } from 'react-router'


export default class Navbar extends Component {
  render () {
    return (
      <div className="detail-foot" style={this.props.style}>
        <span className="return"></span>
        <div className="sign-up">
          <h4>交保证金报名</h4>
          <em>保证金1000元，未排到全额退还</em>
        </div>
        <div className="sign-end" style={{display: 'none'}}>
          <h4>已经结束</h4>
        </div>
        <span className="menu"></span>
      </div>
    )
  }
}
