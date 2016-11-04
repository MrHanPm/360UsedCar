import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from 'COMPONENT/Navbar/'
import { dataTimeCountdown} from 'UTIL/dateTimeFormatter'
import { Link } from 'react-router'


@connect( // 功能同 UTIL/createContainer
  ({ homeToday }) => ({ homeToday }),
  require('ACTION/home').default
)
export default class Welcomes extends Component {
  componentWillMount () {
    this.props.checkHome()
  }
  componentWillUnmount () {
    // dataTimeCountdown = () => {}
  }
  render () {
    let {
      homeToday
    } = this.props
    return (
      <div style={{height: '100%'}}>
        <div className="container">
          <ul className="auction-pic-list">
          { homeToday.map(db =>
            <li>
              <figure><img src={`http://face.360che.com${db.cover}`} alt="" /></figure>
              <Link className="content" to={`/room/${db.id}`}>
                <div className="time" id={`Cod${db.id}`} data-st={db.begin_date * 1000} data-et={db.finish_date * 1000}>
                  {dataTimeCountdown(db.begin_date * 1000, db.finish_date * 1000, db.id)}
                </div>
                <h2>{ db.name }</h2>
                <var>共{ db.trucks }辆车</var>
              </Link>
              <var className="underway" id={`Und${db.id}`}
                style={{display: db.status == 3 ? '' : 'none'}}>正在进行</var>
              <var className="begin" 
                style={{display: db.status == 2 ? '' : 'none'}}>即将开始</var>
              <var className="finish" id={`Feg${db.id}`}
                style={{display: db.status == 4 ? '' : 'none'}}>已经结束</var>
              <em className="collect" style={{display: 'none'}}>已收藏</em>
            </li>
          )}
          </ul>
        </div>
        <Navbar />
      </div>
    )
  }
}

