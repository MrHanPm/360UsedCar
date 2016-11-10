import React, { Component } from 'react'
import handleChange from 'MIXIN/handleChange'
import { ErrMsg } from 'UTIL/errMsg'
// import { Link } from 'react-router'
import Navbar from 'COMPONENT/Navbar/pay'
import payService from 'SERVICE/payService'

// import { connect } from 'react-redux'
// import { injectReducer } from 'REDUCER'
// injectReducer('room', require('REDUCER/room/').default)
// @connect(
//   ({ room }) => ({ room }),
//   require('ACTION/room').default
// )

export default class TruckList extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {
        name: '',
        tel: '',
        'city_id': '232323',
        pay: ''
    }
    this.handleChange = handleChange.bind(this)
    this.createPay = this.createPay.bind(this)
  }

  componentWillMount () {
    let { params: { amount } } = this.props
    this.setState({
        pay: amount
    })
  }
  componentDidMount() {

  }
  createPay () {
    if (this.checkForm()) {
        let { params: { roomId, truId } } = this.props
        payService
        .createPay(roomId, truId, this.state.name, this.state.city_id)
        .then(msg => {
           return this.context.router.replace('/ok')
        })
    }
  }
  checkForm () {
    let nam = (this.state.name).replace(/\s+$|^\s+/g, '')
    let regHZ = /^[\u2E80-\u9FFF]+$/
    if (nam == '') {
        ErrMsg.to('姓名不能为空')
        return false
    }
    if (regHZ.test(nam)) {

    } else {
        ErrMsg.to('姓名必须是中文')
        return false
    }
    if (nam.length > 6) {
        ErrMsg.to('姓名过长')
        return false
    }
    if (this.state.city_id == '') {
        ErrMsg.to('地址不能为空')
        return false
    }
    return true
  }
  render () {
    return (
    <div style={{height: '100%'}}>
        <div className="BoxBt55">
            <ul className="sign-up-info">
                <li>
                    <label>姓名</label>
                    <input type="text"
                        name="name"
                        placeholder="请输入联系人姓名"
                        value={this.state.name}
                        maxLength="6"
                        onChange={this.handleChange} />
                </li>
                <li style={{display: 'none'}}>
                    <label>手机</label>
                    <input type="tel"
                        name="tel"
                        placeholder="请输入联系人手机"
                        value={this.state.tel}
                        maxLength="11"
                        onChange={this.handleChange} />
                </li>
                <li>
                    <label>所在地</label>
                    <input type="text" placeholder="请选择地点" />
                </li>
            </ul>
            <div className="sign-up-pay">
                <em className="back-pic"></em>
                微信支付
                <span className="check-mark"></span>
            </div>
            <div className="sign-up-introduce">
                <p>1、未成功竞拍商品，保证金将全额退还；</p>
                <p>2、竞拍成功后，在竞拍规则规定时间内完成交易，保证金将全额退还</p>
            </div>
            <div className="agree">
                <div className="agreement-module">
                    <input type="checkbox" />
                    <span className="agreement">同意<a href="/protocol">《用户竞拍服务协议》</a></span>
                </div>
                <div className="agree-module">
                    <input type="checkbox" />
                    <span className="agree-rule">同意<a href="/about">《保证金规则》</a></span>
                </div>
            </div>
            <div className="sign-module">
                <em>咨询电话</em>
                <a href="tel:400-0000-0000" className="phone">400-0000-0000</a>
            </div>
        </div>
        <Navbar style={{top: '-60px'}}
                createPay={this.createPay}
                pay={this.state.pay}/>
    </div>
    )
  }
}
