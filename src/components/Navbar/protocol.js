import React, { Component } from 'react'
// import { Link } from 'react-router'


export default class Navbar extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  render () {
    return (
      <div className={`agree-btn ${this.props.className}`} style={this.props.style}>
        <span className="agree" onClick={() => {
          let url = window.location.pathname + '/0'
          this.context.router.replace(url)
        }}>不同意</span>
        <span className="disagree" onClick={() => {
          let url = window.location.pathname + '/1'
          this.context.router.replace(url)
        }}>同意</span>
      </div>
    )
  }
}
