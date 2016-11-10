import React, { Component } from 'react'
// import { Link } from 'react-router'


export default class Navbar extends Component {
  render () {
    let text = '我来点评一下'
    if (this.props.text) {
        text = this.props.text
    }
    return (
      <div className={`comment ${this.props.className}`} style={this.props.style}>
        <span className="return" onClick ={() => {window.history.back()}}></span>
        <em className="comment-on">{text}</em>
        <span className="menu"></span>
      </div>
    )
  }
}
