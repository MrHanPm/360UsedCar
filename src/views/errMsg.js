import React, { Component } from 'react'
let AlertTimeOut

class Alert extends Component {
  componentDidMount() {
    [].forEach.call(document.querySelectorAll('#AlertCont'), function (el) {
      el.addEventListener('touchend', function(e) {
        clearTimeout(AlertTimeOut)
        this.setAttribute('class', 'notification')
        e.preventDefault()
      }, false)
    })
  }
  render() {
    return (
      <div className="notification" id="AlertCont">
          <div className="notification-inner">
              <div className="notification-content">
                  <div className="notification-title" id="AlertTxt"></div>
              </div>
              <div className="notification-handle-bar"></div>
          </div>
      </div>
    )
  }
}

export default Alert
