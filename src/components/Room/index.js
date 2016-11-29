import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Tool } from 'UTIL/errMsg'
import Heads from './Head'
import { injectReducer } from 'REDUCER'
injectReducer('room', require('REDUCER/room/').default)

@connect(
  ({ room }) => ({ room }),
  require('ACTION/room/').default
)
export default class TruckList extends Component {
  constructor (props) {
    super(props)
    this.state = {
        trucks: {}
    }
  }
  componentWillMount () {
    let sessionId = Tool.localItem('sessionId')
    let { params: { id } } = this.props
    this.props.inGet(sessionId, id)
  }
  componentDidMount() {
    // state = this.props || {}
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.room.trucks) {
        this.setState({ 
            trucks: nextProps.room.trucks
        })
    }
  }
  render () {
    let { trucks } = this.state
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
        { DBS.map((db, index) =>
          <li key={index}>
            <Link to={`/truck/${this.props.params.id}/${db.truck_id}`}>
            <figure>
              <img src={`http://face.360che.com${db.src}`} alt="" />
            </figure>
            <figcaption>{db.fullname}</figcaption>
            <em>{db.explain}</em>
            <em>出价{db.bid_count}次/{db.bid_persons}人竞拍</em>
            <div className="price">
              <span>评估价:{db.sale_price}万</span>
              <span>当前价:<var>{db.cur_price}</var>万</span>
            </div>
            </Link>
          </li>
        )}
        </ul>
      </div>
    )
  }
}
