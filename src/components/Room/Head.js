import React, { Component } from 'react'
import { dataTimeCountdown} from 'UTIL/dateTimeFormatter'
export default class Heads extends Component {
  constructor (props) {
    super(props)
    this.state = {
      salesroom: {
        'begin_date': '',
        'cover': '',
        'finish_date': '',
        'id': '',
        'name': '',
        'status': '',
        'trucks': ''
      }
    }
  }
  componentDidMount() {

  }
  componentWillUnmount () {
      // dataTimeCountdown = () => {}
  }
  render () {
    let db = this.props.DATA || this.state.salesroom
    return (
      <ul className="auction-pic-list">
          <li>
            <figure><img src={`http://face.360che.com${db.cover}`} alt="" /></figure>
            <div className="content">
              <div className="time" id={`Cod${db.id}`} data-st={db.begin_date * 1000} data-et={db.finish_date * 1000}>
                {dataTimeCountdown(db.begin_date * 1000, db.finish_date * 1000, db.id)}
              </div>
              <h2>{ db.name }</h2>
              <var>共{ db.trucks }辆车</var>
            </div>
            <var className="underway" id={`Und${db.id}`}
              style={{display: db.status == 3 ? '' : 'none'}}>正在进行</var>
            <var className="begin" 
              style={{display: db.status == 2 ? '' : 'none'}}>即将开始</var>
            <var className="finish" id={`Feg${db.id}`}
              style={{display: db.status == 4 ? '' : 'none'}}>已经结束</var>
            <em className="collect" style={{display: 'none'}}>已收藏</em>
          </li>
      </ul>
    )
  }
}

