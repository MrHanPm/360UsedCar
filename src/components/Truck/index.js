import React, { Component } from 'react'
// import { Link } from 'react-router'

// import { connect } from 'react-redux'
import Navbar from 'COMPONENT/Navbar/roomfot'
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
    <div style={{height: '100%'}}>
        <div className="BoxBt55">
            <div className="diagram swiper-container clear-float" id="diagram">
                <ul className="swiper-wrapper">
                    <li className="swiper-slide">
                        <figure><img src="http://usr.im/375x200" alt="" /></figure>
                    </li>
                </ul>
                <var className="underway">正在进行</var>
                <span className="share"></span>
                <em className="location">上海</em>
                <em className="enshrine">收藏</em>
                <div className="swiper-pagination">
                  <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
            </div>
            <div className="introduce">
                <p>一汽解放  解放J6P  牵引车（10辆）</p>
                <div className="car-price">
                    当前价
                    <em> 29.58 </em><i>万元</i>
                    <span><var>124</var>人竞拍</span>
                </div>
                <div className="time">
                    距离结束:
                    <span className="hour">12时</span>
                    <span className="minute">12分</span>
                    <span className="second">49秒</span>
                </div>
                <a href="#" className="remind">设置提醒</a>
            </div>
            <ul className="condition-list">
                <li>
                    <span>起拍价<i>29.00万</i></span>
                    <span>评估价<i>32.88万</i></span>
                    <span>保留价<i>有</i></span>
                </li>
                <li>
                    <span>加价幅度<i>1000元</i></span>
                    <span>延时周期<i>5分钟/1次</i></span>
                    <span>拍卖佣金<i>0元</i></span>
                </li>
            </ul>
            <div className="bidden">
                出价记录 (6)
                <span>我的出价 : <em>29.88</em> 万</span>
            </div>


            <div className="flow-path">
                <p>拍卖流程</p>
                <ul className="process-list">
                    <li>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </li>
                    <li>
                        <em>实地看车</em>
                        <em>交保证金报名</em>
                        <em>出价竞拍</em>
                        <em>竞拍成功</em>
                    </li>
                </ul>
                <a href="#" className="deposit">保证金规则<em>未拍到全额退款</em></a>
                <a href="#" className="regular">交易规则</a>
            </div>


            <a href="#" className="special">德邦拍卖专场（15）</a>


            <div className="car-configure">
                <h3>车辆配置<a href="#" className="examine">查看详情</a></h3>
                <ul className="configure-list">
                    <li>
                        <span>驱动形式<i>6X4</i></span>
                        <span>排放标准<i>国四</i></span>
                        <span>发动机<i>福田康明斯</i></span>
                    </li>
                    <li>
                        <span>马力<i>430马力</i></span>
                        <span>档位<i>16档</i></span>
                        <span>后桥速比<i>3.083</i></span>
                    </li>
                </ul>
            </div>


            <div className="gauging">
                <h3>车辆检测报告<a href="#" className="examine">查看详情</a></h3>
                <div className="post">
                    <figure><img src="http://usr.im/44x44" alt="" /></figure>
                    <figcaption>评估师: 黄蓉</figcaption>
                    <em>易卡车高级评估车</em>
                    <span className="pic"><img src="http://usr.im/103x103" alt="" /></span>
                </div>
                <i>共105项检测, 100项通过检测</i>
                <p className="critique">点评：该车整体车况良好。经严格检测，绝非事故车辆。车辆外观无明显色差，车身骨架可见部位无结构性损伤，发动机运转良好无抖动，变速箱工作平稳无异响，内饰干净整洁，各功能按键完好无损坏。</p>
                <ul className="capability-list">
                    <li>
                        <a href="#">
                            可交易性查验
                            <em>5项</em>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            事故故障车排查
                            <i>3项</i>
                            <em>5项</em>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            骨架检测
                            <em>5项</em>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            驾驶室检测
                            <i>3项</i>
                            <em>5项</em>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            发动机和底盘检测
                            <em>5项</em>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            启动和路试检测
                            <i>3项</i>
                            <em>5项</em>
                        </a>
                    </li>
                </ul>
                <ul className="deadline-list">
                    <li>
                        <span>2015年11月上牌</span>
                        <span>2015年11月年检到期</span>
                    </li>
                    <li>
                        <span>2015年11月交强险到期</span>
                        <span>2015年11月商业险到期</span>
                    </li>
                </ul>
            </div>
            <div className="place">
                <h3>看车地点</h3>
            </div>  


            <div className="situation-modul">
                <h3>易卡通说<a href="#" className="consult">咨询车况</a></h3>
                <div className="situation">
                    <p>2014年12月上牌准新车，只跑8000公里，单位一手车，车况极品！上海牌照 国四车， 2014年12月上牌准新车，只跑8000公里，单位一手车，车况极品！上海牌照 国四车</p>
                </div>
            </div>


            <div className="comments">
                <h3>网友点评<a href="#" className="examine">查看更多</a></h3>
                <div className="comments-list">
                    <figure><img src="http://usr.im/32x32" alt="" /></figure>
                    <span className="score"></span>
                    <h4 className="caption">打的去唐朝</h4>
                    <em className="date">2016-08-29</em>
                </div>
                <div className="comments-msg">说到底，始终是垃圾，就是某些停留在10年前对国产卡车印象！</div>
                <a href="#" className="know">我看过车，我来点评</a>
            </div>


            <div className="same">
                <div className="title">
                    <span className="change">
                        <em className="selected">同场车辆</em>
                        <em className="other">其他专场</em>
                    </span>
                </div>
                <ul className="car-list">
                    <li>
                        <figure><img src="http://usr.im/80x80" alt="" /></figure>
                        <figcaption>卡友们赶紧帮转发！！！寻找被盗东风寻找被盗东风寻找被盗东风</figcaption>
                        <em>国四/福田康明斯430马力/55吨</em>
                        <em>出价6次/4人竞拍</em>
                        <div className="price">
                            <span>评估价:30.88万</span>
                            <span>当前价:<var>24.88</var>万</span>
                        </div>
                    </li>
                    <li>
                        <figure><img src="http://usr.im/80x80" alt="" /></figure>
                        <figcaption>卡友们赶紧帮转发！！！寻找被盗东风寻找被盗东风寻找被盗东风</figcaption>
                        <em>国四/福田康明斯430马力/55吨</em>
                        <em>出价6次/4人竞拍</em>
                        <div className="price">
                            <span>评估价:30.88万</span>
                            <span>当前价:<var>24.88</var>万</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <Navbar style={{top: '-60px'}}/>
    </div>
    )
  }
}
