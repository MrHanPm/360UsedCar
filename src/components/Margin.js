import React, { Component } from 'react'
// import { Link } from 'react-router'

// import { connect } from 'react-redux'
// import Navbar from 'COMPONENT/Navbar/roomfot'
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
      <div className="TrLiBox">
        <div className="information">
            <p>您在获拍后10天内完成线下交易，逾期未完成将视为违约，您的获拍资格将被取消，本次参拍的保证金将被扣除。</p>
        </div>
        <ul className="order-list">
            <li>
                订单状态
                <var>未提车</var>
            </li>
            <li>
                最终成交价
                <i>万</i>
                <var>29.80</var>
            </li>
            <li>
                保证金金额
                <var>2000(交易完退还)</var>
            </li>
            <li>
                获拍时间
                <var>2016-09-21 19:12</var>
            </li>
        </ul>
        <div className="business">
            <label>线下交易地址</label>   
            <span className="area">江苏 苏州市 吴江区花港路花园闸路3期C座9层</span>
        </div>
        <h3>获拍车</h3>
        <ul className="get-list">
            <li>
                <figure><img src="http://usr.im/80x80" alt="" /></figure>
                <figcaption>卡友们赶紧帮转发！！！寻找被盗东风寻找被盗东风寻找被盗东风</figcaption>
                <em>国四/福田康明斯430马力/55吨</em>
                <div className="price">
                    <span>起拍价:<var>29.00</var>万</span>
                </div>
            </li>
        </ul>
      </div>
      <span className="go-back" onClick ={() => {window.history.back()}}>返回</span>
      </div>
    )
  }
}
