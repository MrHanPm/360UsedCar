import React, { Component } from 'react'
// import { Link } from 'react-router'

// import { connect } from 'react-redux'
import Navbar from 'COMPONENT/Navbar/comment'
// import { injectReducer } from 'REDUCER'
// injectReducer('room', require('REDUCER/room/').default)

// @connect(
//   ({ room }) => ({ room }),
//   require('ACTION/room').default
// )

export default class TruckList extends Component {
  componentWillMount () {
    // let { params: { truckId } } = this.props
    // this.props.getImg(truckId)
  }
  componentDidMount() {

  }

  render () {
    return (
    <div style={{height: '100%'}}>
        <div className="BoxBt55">
            <div className="review-head">
                <p>一汽解放 解放J6P牵引车</p>
                <div className="keep">
                    <span>车况很好</span>
                    <span className="select">保养的不错</span>
                    <span>动力强劲</span>
                    <span>外观有轻微损伤</span>
                    <span>磨损严重</span>
                    <span>有严重撞伤</span>
                </div>
            </div>
            <div className="write">
                <textarea className="weui-textarea" placeholder="写点什么..." rows="3"></textarea>
                <div className="uploader-files">
                    <ul className="uploader">
                        <li>
                            <img src="http://usr.im/80x80" alt="" />
                            <i className="icon"></i>
                        </li>
                        <li>
                            <img src="http://usr.im/80x80" alt="" />
                            <i className="progress">50%</i>
                        </li>
                    </ul>
                    <div className="add-box">
                        <span className="add-pic"></span>
                    </div>
                </div>
            </div>
            <div className="entiretyspan">
                <em>总体评价</em>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="select"></span>
            </div>
        </div>
        <Navbar style={{top: '-60px'}} text="发表评论" />
    </div>
    )
  }
}
