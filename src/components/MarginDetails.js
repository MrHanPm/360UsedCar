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
      <div className="TrLiBox">
        <div className="cash">
            <p>保证金将在拍卖结束后，竞拍失败或竞拍成功后完成线下交易1-3个工作日内还返，竞拍成功后10天内未完成线下交易将扣除保证金！ </p>
        </div>
        <ul className="cash-list">
            <li>
                保证金编号
                <var>BZJ83942860654757</var>
            </li>
            <li>
                保证金金额
                <var>2000元</var>
            </li>
            <li>
                保证金状态
                <var>冻结中</var>
            </li>
            <li>
                支付方式
                <var>微信</var>
            </li>
            <li>
                支付时间
                <var>2016-09-12 19:00</var>
            </li>
            <li>
                返回时间
                <var>2016-09-20 19:00</var>
            </li>
        </ul>
        <h3>竞拍车</h3>
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
    )
  }
}
