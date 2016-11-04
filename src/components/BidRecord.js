import React, { Component } from 'react'
import { Link } from 'react-router'

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
      <div className="container">
        <div className="head Ding">
            <span>竞拍人</span>
            <span>出价金额</span>
            <span>时间</span>
        </div>
        <ul className="bid-list DinHead">
            <li>
                <span><img src="http://usr.im/50x50" alt="" /></span>
                <span>30.12万</span>
                <span>08-12 08:40</span>
                <em className="ahead">领先</em>
            </li>
            <li>
                <span><img src="http://usr.im/40x40" alt="" /></span>
                <span>30.12万</span>
                <span>08-12 08:40</span>
                <em className="eliminated">领先</em>
                <i className="myself">我</i>
            </li>
            <li>
                <span><img src="http://usr.im/40x40" alt="" /></span>
                <span>30.12万</span>
                <span>08-12 08:40</span>
                <em className="eliminated">领先</em>
                <i className="myself">我</i>
            </li>
            <li>
                <span><img src="http://usr.im/40x40" alt="" /></span>
                <span>30.12万</span>
                <span>08-12 08:40</span>
                <em className="eliminated">领先</em>
                <i className="myself">我</i>
            </li>
            <li>
                <span><img src="http://usr.im/40x40" alt="" /></span>
                <span>30.12万</span>
                <span>08-12 08:40</span>
                <em className="eliminated">领先</em>
                <i className="myself">我</i>
            </li>
            <li>
                <span><img src="http://usr.im/40x40" alt="" /></span>
                <span>30.12万</span>
                <span>08-12 08:40</span>
                <em className="eliminated">领先</em>
                <i className="myself">我</i>
            </li>
            <li>
                <span><img src="http://usr.im/40x40" alt="" /></span>
                <span>30.12万</span>
                <span>08-12 08:40</span>
                <em className="eliminated">领先</em>
                <i className="myself">我</i>
            </li>
            <li>
                <span><img src="http://usr.im/40x40" alt="" /></span>
                <span>30.12万</span>
                <span>08-12 08:40</span>
                <em className="eliminated">领先</em>
                <i className="myself">我</i>
            </li>
            <li>
                <span><img src="http://usr.im/40x40" alt="" /></span>
                <span>30.12万</span>
                <span>08-12 08:40</span>
                <em className="eliminated">领先</em>
                <i className="myself">我</i>
            </li>
            <li>
                <span><img src="http://usr.im/40x40" alt="" /></span>
                <span>30.12万</span>
                <span>08-12 08:40</span>
                <em className="eliminated">领先</em>
                <i className="myself">我</i>
            </li>
            <li>
                <span><img src="http://usr.im/40x40" alt="" /></span>
                <span>30.12万</span>
                <span>08-12 08:40</span>
                <em className="eliminated">领先</em>
                <i className="myself">我</i>
            </li>
            <li>
                <span><img src="http://usr.im/40x40" alt="" /></span>
                <span>30.12万</span>
                <span>08-12 08:40</span>
                <em className="eliminated">领先</em>
                <i className="myself">我</i>
            </li>
            <li>
                <span><img src="http://usr.im/40x40" alt="" /></span>
                <span>30.12万</span>
                <span>08-12 08:40</span>
                <em className="eliminated">领先</em>
                <i className="myself">我</i>
            </li>
        </ul>
        <Link href="/" className="go-back">返回</Link>
      </div>
    )
  }
}
