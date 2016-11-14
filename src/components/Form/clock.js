import React, { Component } from 'react'
// import { Link } from 'react-router'
import { ErrMsg } from 'UTIL/errMsg'
// import { connect } from 'react-redux'
import Navbar from 'COMPONENT/Navbar/yesNo'
import truckService from 'SERVICE/truckService'
// import { injectReducer } from 'REDUCER'
// injectReducer('room', require('REDUCER/room/').default)

// @connect(
//   ({ room }) => ({ room }),
//   require('ACTION/room').default
// )

export default class TruckList extends Component {
  constructor (props) {
    super(props)
    this.state = {
        'salesroom_id': props.roomId,
        'truck_id': props.truId,
         mode: '',
         point: '',
         difference: 0,
         captcha: 0
    }
    this.crtClick = this.crtClick.bind(this)
  }
  componentWillMount () {

  }
  componentDidMount() {

  }
  checkForm () {
    
    if (this.state.captcha === 0) {
        ErrMsg.to('未填写6位手机验证码')
        return false
    }
    return true
  }
  crtClick () {
    if (this.checkForm()) {
        let db = this.state
        truckService
        .crtReminds(db.salesroom_id, db.truck_id, db.mode, db.point, db.difference, db.captcha)
        .then(msg => {
          
        })
    }
  }
  render () {
    return (
    <div style={{height: '100%'}}>
        <div className="BoxBt55">
            <div className="warn">
                <header>提醒时间</header>
                <ul>
                    <li>
                        <label For="s11">
                            <i>开拍前5分钟提醒</i>
                            <em>8月30日 9:55</em>
                            <input type="checkbox" name="checkbox" className="weui-check" id="s11" />
                            <span className="choice"></span>
                        </label>
                    </li>
                    <li>
                        <label For="s12">
                            <i>结束前30分钟提醒</i>
                            <em>8月30日 10:30</em>
                            <input type="checkbox" name="checkbox1" className="weui-check" id="s12" />
                            <span className="choice"></span>
                        </label>
                    </li>
                </ul>
            </div>
            <div className="way">
                <header>提醒方式</header>
                <ul>
                    <li>
                        手机短信提醒
                        <a href="javascript:;" className="install">设置</a>
                        <input type="number" className="Phone" placeholder="请输入您的手机号"/>
                    </li>
                    <li>
                        <label For="s13">
                            微信提醒
                            <input type="checkbox" name="checkbox2" className="weui-check" id="s13" />
                            <span className="choice"></span>
                        </label>
                    </li>
                </ul>
            </div>
            <footer><p>已设置的提醒可在“我的拍卖-我的提醒”中找到</p></footer>
        </div>
        <Navbar className="FotSty"
                addClock={this.crtClick}/>
    </div>
    )
  }
}
