import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import { dataTimeCountdown} from 'UTIL/dateTimeFormatter'
import Heads from './Head'
import { injectReducer } from 'REDUCER'
injectReducer('room', require('REDUCER/room/').default)

@connect(
  ({ room }) => ({ room }),
  require('ACTION/room').default
)
export default class TruckList extends Component {
  componentWillMount () {
    let { params: { id } } = this.props
    this.props.inGet(id)
  }
  componentDidMount() {
    // state = this.props || {}
  }

  render () {
    let { room: { trucks } } = this.props
    let DBS = []
    if (typeof (trucks.trucks) == 'object') {
      DBS = trucks.trucks
    }
    return (
      <div className="TrLiBox">
        <Heads DATA={trucks.salesroom}/>
        <div className="set-up">
          <div className="time">
            距离结束:
            <span className="hour">12时</span>
            <span className="minute">12分</span>
            <span className="second">49秒</span>
          </div>
          <a href="#" className="remind">设置提醒</a>
        </div>
        <ul className="car-list">
        { DBS.map(db =>
          <li>
            <figure>
            <Link to={`/room/truck/${db.truck_id}`}>
              <img src={`http://face.360che.com${db.src}`} alt="" />
            </Link>
            </figure>
            <figcaption>{db.fullname}</figcaption>
            <em>国四/福田康明斯430马力/55吨</em>
            <em>出价{db.bid_count}次/{db.bid_persons}人竞拍</em>
            <div className="price">
              <span>评估价:{db.sale_price}万</span>
              <span>当前价:<var>{db.cur_price}</var>万</span>
            </div>
          </li>
        )}
        </ul>
      </div>
    )
  }
}
