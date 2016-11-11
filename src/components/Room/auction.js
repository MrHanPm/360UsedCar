import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from 'COMPONENT/Navbar/'
import { Link } from 'react-router'
// import { LoadBox } from 'VIEW/more'
import { injectReducer } from 'REDUCER'

injectReducer('myBids', require('REDUCER/mi/bids').default)
injectReducer('myWins', require('REDUCER/mi/wins').default)
injectReducer('myDepos', require('REDUCER/mi/depos').default)
injectReducer('myReminds', require('REDUCER/mi/reminds').default)
@connect(
  ({ myBids, myWins, myDepos, myReminds }) => ({ myBids, myWins, myDepos, myReminds }),
  require('ACTION/mi/').default
)
export default class Welcomes extends Component {
  state = {

  }
  componentWillMount () {
    this.props.ismyBids()
    this.props.ismyWins()
    this.props.ismyDepos()
    this.props.ismyReminds()
  }
  componentWillUnmount () {
    // dataTimeCountdown = () => {}
  }
  render () {

    return (
      <div style={{height: '100%'}}>
        <div className="BoxBt55">
          <h3>我的竞拍</h3>
          <ul className="swiper">
            <li>
              <a href="/truck/26/26">
                <figure>
                  <img src="http://usr.im/80x80" alt="" />
                <figcaption>一汽解放 解放J6P 牵引车</figcaption>
                </figure>
                <var className="underway">正在进行</var>
              </a>
            </li>
            <li>
              <a href="/truck/26/26">
                <figure>
                  <img src="http://usr.im/80x80" alt="" />
                <figcaption>一汽解放 解放J6P 牵引车</figcaption>
                </figure>
                <var className="begin">即将开始</var>
              </a>
            </li>
            <li>
              <a href="/truck/26/26">
                <figure>
                  <img src="http://usr.im/80x80" alt="" />
                <figcaption>一汽解放 解放J6P 牵引车</figcaption>
                </figure>
                <var className="finish">已经结束</var>
              </a>
            </li>
            <li>
              <a href="/truck/26/26">
                <figure>
                  <img src="http://usr.im/80x80" alt="" />
                <figcaption>一汽解放 解放J6P 牵引车</figcaption>
                </figure> 
              </a>
            </li>
            <li>
              <a href="/truck/26/26">
                <figure>
                  <img src="http://usr.im/80x80" alt="" />
                <figcaption>一汽解放 解放J6P 牵引车</figcaption>
                </figure>
              </a>
            </li>
          </ul>

          <h3>我的获拍</h3>
          <ul className="acquire-list">
            <li>
              <Link to="/margin">
              <figure>
                <img src="http://usr.im/80x80" alt="" />
              </figure>
              <figcaption>一汽解放 解放J6P 牵引车</figcaption>
              <span>成交价: <em>34.5万</em></span>
              <span>2016年09月20日</span>
              </Link>
            </li>
            <li>
              <Link to="/margin">
              <figure>
                <img src="http://usr.im/80x80" alt="" />
              </figure>
              <figcaption>一汽解放 解放J6P 牵引车</figcaption>
              <span>成交价: <em>34.5万</em></span>
              <span>2016年09月20日</span>
              </Link>
            </li>
            <li>
              <Link to="/margin">
              <figure>
                <img src="http://usr.im/80x80" alt="" />
              </figure>
              <figcaption>一汽解放 解放J6P 牵引车</figcaption>
              <span>成交价: <em>34.5万</em></span>
              <span>2016年09月20日</span>
              </Link>
            </li>
            <li>
              <Link to="/margin">
              <figure>
                <img src="http://usr.im/80x80" alt="" />
              </figure>
              <figcaption>一汽解放 解放J6P 牵引车</figcaption>
              <span>成交价: <em>34.5万</em></span>
              <span>2016年09月20日</span>
              </Link>
            </li>
          </ul>

          <h3>我的保证金</h3>
          <ul className="bail-list">
            <li>
              <Link to="/marginDetails">
              <figure><img src="http://usr.im/80x80" alt="" /></figure>
              <figcaption>一汽解放 解放J6P 牵引车</figcaption>
              <span>支付时间: 2016年09月20日</span>
              <div className="bail">
                <span>保证金: <em>1000元</em></span>
                <i className="freeze">冻结中</i>
              </div>
              <var className="underway">正在进行</var>
              </Link>
            </li>
            <li>
              <Link to="/marginDetails">
              <figure><img src="http://usr.im/80x80" alt="" /></figure>
              <figcaption>一汽解放 解放J6P 牵引车</figcaption>
              <span>支付时间: 2016年09月20日</span>
              <div className="bail">
                <span>保证金: <em>1000元</em></span>
                <i className="restoration">已返还</i>
              </div>
              <var className="finish">已经结束</var>
              </Link>
            </li>
            <li>
              <Link to="/marginDetails">
              <figure><img src="http://usr.im/80x80" alt="" /></figure>
              <figcaption>一汽解放 解放J6P 牵引车</figcaption>
              <span>支付时间: 2016年09月20日</span>
              <div className="bail">
                <span>保证金: <em>1000元</em></span>
                <i className="deduct">已扣除</i>
              </div>
              <var className="finish">已经结束</var>
              </Link>
            </li>
          </ul>

          <h3>我的提醒</h3>
          <ul className="remind-list">
            <li>
              <Link to="/clock">
              <figure><img src="http://usr.im/80x80" alt="" /></figure>
              <figcaption>一汽解放 解放J6P 牵引车</figcaption>
              <span>支付时间: 2016年09月20日  14:00</span>
              <em>结束时间: 2016年09月21日  21:00</em>
              <i>删除提醒</i>
              <var className="underway">正在进行</var>
              </Link>
            </li>
            <li>
              <Link to="/clock">
              <figure><img src="http://usr.im/80x80" alt="" /></figure>
              <figcaption>一汽解放 解放J6P 牵引车</figcaption>
              <span>支付时间: 2016年09月20日  14:00</span>
              <em>结束时间: 2016年09月21日  21:00</em>
              <i>删除提醒</i>
              <var className="begin">即将开始</var>
              </Link>
            </li>
            <li>
              <Link to="/clock">
              <figure><img src="http://usr.im/80x80" alt="" /></figure>
              <figcaption>一汽解放 解放J6P 牵引车</figcaption>
              <span>支付时间: 2016年09月20日  14:00</span>
              <em>结束时间: 2016年09月21日  21:00</em>
              <i>删除提醒</i>
              <var className="finish">已经结束</var>
              </Link>
            </li>
          </ul>
        </div>
        <Navbar style={{top: '-60px'}}/>
      </div>
    )
  }
}

