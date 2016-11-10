import React, { Component } from 'react'
// import { Link } from 'react-router'


export default class Navbar extends Component {
  render () {
    return (
      <div className={`sure-btn ${this.props.className}`} style={this.props.style}>
        <span className="sure">确定</span>
        <span className="cancel">取消</span>
      </div>
    )
  }
}
