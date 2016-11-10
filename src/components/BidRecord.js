import React, { Component } from 'react'
// import { Link } from 'react-router'
import { dataTimeFormatter} from 'UTIL/dateTimeFormatter'
import { connect } from 'react-redux'
import { injectReducer } from 'REDUCER'
injectReducer('bidRecord', require('REDUCER/bid').default)
@connect(
  ({ bidRecord }) => ({ bidRecord }),
  require('ACTION/bid').default
)

export default class BidREC extends Component {
  constructor (props) {
    super(props)
    this.state = {
        BID: []
    }
  }
  componentWillMount () {
    let { params: { roomId, truId } } = this.props
    this.props.getBid(roomId, truId, 1, 10)
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.bidRecord.DATA.length > 0) {
        this.setState({
            BID: nextProps.bidRecord.DATA
        })
    }
  }
  render () {
    let { BID } = this.state
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
                <span>
                    <img src="http://usr.im/40x40" alt="" />
                    <i className="myself">我</i>
                </span>
                <span>30.12万</span>
                <span>08-12 08:40</span>
                <em className="eliminated">出局</em>
            </li>
            { BID.map(db =>
            <li>
                <span><img src={`http://face.360che.com${db.member.avatar}`} alt="" /></span>
                <span>{db.amount}万</span>
                <span>{dataTimeFormatter(db.create_at * 1000, 10)}</span>
                <em className="eliminated" style={{display: db.out ? 'none' : ''}}>出局</em>
                <em className="ahead" style={{display: db.out ? '' : 'none'}}>领先</em>
            </li>
            )}
        </ul>
        <span className="go-back" onClick ={() => {window.history.back()}}>返回</span>
      </div>
    )
  }
}
