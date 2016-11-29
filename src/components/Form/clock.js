import React, { Component } from 'react'
// import { Link } from 'react-router'
import handleChange from 'MIXIN/handleChange'
import { ErrMsg, Tool } from 'UTIL/errMsg'
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
        'salesroom_id': props.params.roomId,
        'truck_id': props.params.truId,
         mode: 'sms',
         point: '',
         difference: '',
         captcha: ''
    }
    this.crtClick = this.crtClick.bind(this)
    this.handleChange = handleChange.bind(this)
    this.radios = this.radios.bind(this)
  }
  componentWillMount () {

  }
  componentDidMount() {

  }
  checkForm () {
    let txt = this.state.captcha
    if (this.state.difference == '' || this.state.difference < 0) {
        ErrMsg.to('请选择提醒时间')
        return false
    }
    if (txt.length === 0 || txt == '') {
        ErrMsg.to('请输入手机号')
        return false
    }
    if (/^1[3|4|5|7|8]\d{9}$/.test(txt)) {

    } else {
        ErrMsg.to('请输入正确手机号')
        return false
    }
    return true
  }
  radios (e) {
    let nub = e.target.value
    if (nub > 300) {
        this.setState({
            point: 'end',
            difference: nub
        })
    } else {
        this.setState({
            point: 'start',
            difference: nub
        })
    }
  }
  crtClick () {
    if (this.checkForm()) {
        let sessionId = Tool.localItem('sessionId')
        let db = this.state
        truckService
        .crtReminds(sessionId, db.salesroom_id, db.truck_id, db.mode, db.point, db.difference, db.captcha)
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
                            <input type="radio" name="checkbox" className="weui-check" id="s11" value="300" onChange={this.radios} />
                            <span className="choice"></span>
                        </label>
                    </li>
                    <li>
                        <label For="s12">
                            <i>结束前30分钟提醒</i>
                            <input type="radio" name="checkbox" className="weui-check" id="s12" value="1800" onChange={this.radios} />
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
                        <a href="javascript:;" className="install" style={{display: 'none'}}>设置</a>
                        <input type="tel" className="Phone" name="captcha" value={this.state.captcha}
                                maxLength="11" placeholder="请输入您的手机号" 
                                onChange={this.handleChange}/>
                    </li>
                    <li style={{display: 'none'}}>
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
