import React, { Component } from 'react'
// import { Link } from 'react-router'
import { dataTimeFormatter} from 'UTIL/dateTimeFormatter'
import { connect } from 'react-redux'
import Navbar from 'COMPONENT/Navbar/count'
import { injectReducer } from 'REDUCER'
import { Link } from 'react-router'
import { ErrMsg } from 'UTIL/errMsg'
import payService from 'SERVICE/payService'

injectReducer('truckMsg', require('REDUCER/truck/').default)

@connect(
  ({ truckMsg }) => ({ truckMsg }),
  require('ACTION/truck/').default
)
export default class TruckMsg extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {
        data: {
            salesroom: {},
            truck: {
                pictures: [],
                recondition: [],
                'on_sale': {}
            }
        },
        increase: 0,
        pay: 0
    }
    this.OnSale = this.OnSale.bind(this)
    this.goPay = this.goPay.bind(this)
  }
  componentWillMount () {
    let { params: { roomId, truId } } = this.props
    this.props.initMsg(roomId, truId)
  } 
  componentDidMount() {

  }
  OnSale (nu) {
    if (nu) {
        let newP = this.state.pay + this.state.increase
        this.setState({pay: newP})
    } else {
        let newP = this.state.pay - this.state.increase
        if (newP <= this.state.increase) {
            ErrMsg.to('不能低于起拍价')
        } else {
            this.setState({pay: newP})
        }
    }
  }
  goPay () {
    let { params: { roomId, truId } } = this.props
    let url = `/pay/${roomId}/${truId}/${this.state.pay}`
    payService
    .bidPay(roomId, truId, this.state.pay)
    .then(msg => {
      if (msg) return this.context.router.replace(url)
    })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.truckMsg.dataDB) {
        this.setState({ 
            data: nextProps.truckMsg.dataDB,
            increase: parseFloat(nextProps.truckMsg.dataDB.truck.on_sale.increase),
            pay: parseFloat(nextProps.truckMsg.dataDB.truck.on_sale.init_price)
        })
    }
  }
  render () {
    let { params: { roomId, truId } } = this.props
    // let { data: { salesroom, truck: { on_sale, other_salesroom, other_trucks, pictures, recondition} } } = this.props.truckMsg
    let { salesroom, truck, truck: { pictures, recondition } } = this.state.data
    let Widths = window.screen.width
    return (
    <div style={{height: '100%'}}>
        <div className="BoxBt55">
            <div className="diagram swiper-container clear-float" id="diagram">
                <div className="swiperBox">
                <ul className="swiper-wrapper" style={{width: `${Widths * pictures.length}px`}}>
                    { pictures.map((db, index) =>
                    <li className="swiper-slide" style={{width: `${Widths}px`}}>
                        <Link to={`/room/truck/${truck.id}`}>
                        <figure><img src={`http://face.360che.com${db.src}`} alt="" /></figure>
                        <span className="swiper-pagination">{`${index + 1}/${pictures.length}`}</span>
                        </Link>
                    </li>
                    )}
                </ul>
                </div>
                <var className="underway"
                    style={{display: salesroom.status == 3 ? '' : 'none'}}>正在进行</var>
                <var className="begin" 
                    style={{display: salesroom.status == 2 ? '' : 'none'}}>即将开始</var>
                <var className="finish"
                    style={{display: salesroom.status == 4 ? '' : 'none'}}>已经结束</var>
                <span className="share"></span>
                <em className="location">{ truck.address }</em>
                <em className="enshrine" style={{display: 'none'}}>收藏</em>
            </div>
            <div className="introduce">
                <p>{truck.fullname}（{salesroom.trucks}辆）</p>
                <div className="car-price">
                    当前价
                    <em> {truck.current_price} </em><i>万元</i>
                    <span><var>{truck.on_sale.bid_persons}</var>人竞拍</span>
                </div>
                <div className="time">
                    距离结束:
                    <span className="hour">12时</span>
                    <span className="minute">12分</span>
                    <span className="second">49秒</span>
                </div>
                <a href={`/clock/${roomId}/${truId}`} className="remind">设置提醒</a>
            </div>
            <ul className="condition-list">
                <li>
                    <span>起拍价<i>{truck.on_sale.init_price}万</i></span>
                    <span>评估价<i>{truck.sale_price}万</i></span>
                    <span>保留价<i>{truck.on_sale.reserve_price}</i></span>
                </li>
                <li>
                    <span>加价幅度<i>{truck.on_sale.increase}元</i></span>
                    <span>延时周期<i>{truck.on_sale.interval}分钟/1次</i></span>
                    <span>拍卖佣金<i>{truck.on_sale.commission}元</i></span>
                </li>
            </ul>
            <div className="bidden ABlock">
                <Link to={`/bidRecord/${roomId}/${truId}`}>
                出价记录 ({truck.on_sale.bid_count})
                <span>我的出价 : <em>{truck.my_bid}</em> 万</span>
                </Link>
            </div>


            <div className="flow-path">
                <p>拍卖流程</p>
                <ul className="process-list">
                    <li>
                        <span>车</span>
                        <em>实地看车</em>
                        <i>1</i>
                    </li>
                    <li>
                    <span>交</span>
                    <em>交保证金报名</em>
                    <i>2</i>
                    </li>
                    <li>
                        <span>拍</span>
                        <em>出价竞拍</em>
                        <i>3</i>
                    </li>
                    <li>
                        <span>竞</span>
                        <em>竞拍成功</em>
                        <i>4</i>
                    </li>
                    <li>
                        <span>支</span>
                        <em>线下支付车款</em>
                        <i>5</i>
                    </li>
                    <li>
                        <span>办</span>
                        <em>办理过户手续</em>
                        <i>6</i>
                    </li>
                    <li>
                        <span>易</span>
                        <em>提车完成交易</em>
                        <i>7</i>
                    </li>
                </ul>
                <a href="#" className="deposit">保证金规则<em>未拍到全额退款</em></a>
                <a href="#" className="regular">交易规则</a>
            </div>


            <a href="#" className="special">德邦拍卖专场（15）</a>


            <div className="car-configure">
                <h3>车辆配置<Link href={`/detail/${truck.model_id}`} className="examine">查看详情</Link></h3>
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
                <h3>车辆检测报告<a href="/report/11" className="examine">查看详情</a></h3>
                <div className="post">
                    <figure><img src="http://usr.im/44x44" alt="" /></figure>
                    <figcaption>评估师: {truck.recondition_operator}</figcaption>
                    <em>易卡车高级评估车</em>
                    <span className="pic"><img src="http://usr.im/103x103" alt="" /></span>
                </div>
                <i>共105项检测, 100项通过检测</i>
                <p className="critique">点评：该车整体车况良好。经严格检测，绝非事故车辆。车辆外观无明显色差，车身骨架可见部位无结构性损伤，发动机运转良好无抖动，变速箱工作平稳无异响，内饰干净整洁，各功能按键完好无损坏。</p>
                <ul className="capability-list">
                    { recondition.map(db =>
                    <li>
                        <a href="#">
                            {db.position}
                            <i>3项
                                <span className="weui-icon-warn"></span>
                            </i>
                            <em>5项
                                <span className="weui-icon-success"></span>
                            </em>
                        </a>
                    </li>
                    )}
                </ul>
                <ul className="deadline-list">
                    <li>
                        <span>{dataTimeFormatter(truck.on_licence * 1000, 9)}上牌</span>
                        <span>{dataTimeFormatter(truck.inspection * 1000, 9)}年检到期</span>
                    </li>
                    <li>
                        <span>{dataTimeFormatter(truck.compulsory * 1000, 9)}交强险到期</span>
                        <span>{dataTimeFormatter(truck.commercial * 1000, 9)}商业险到期</span>
                    </li>
                </ul>
            </div>
            <div className="place">
                <h3>看车地点</h3>
            </div>  
            <div className="locale">
                <span>{truck.license_city}</span>
            </div>

            <div className="situation-modul">
                <h3>易卡通说<a href={`tel:${truck.custom_service}`} className="consult">咨询车况</a></h3>
                <div className="situation">
                    <p>2014年12月上牌准新车，只跑8000公里，单位一手车，车况极品！上海牌照 国四车， 2014年12月上牌准新车，只跑8000公里，单位一手车，车况极品！上海牌照 国四车</p>
                </div>
            </div>


            <div className="comments">
                <h3>网友点评<a href={`/comment/${roomId}/${truId}`} className="examine">查看更多</a></h3>
                <div className="comments-list">
                    <span className="good current"></span>
                    <span className="good"></span>
                    <span className="good"></span>
                    <span className="good"></span>
                    <span className="good"></span>
                    <figure><img src="http://usr.im/32x32" alt="" /></figure>
                    <h4 className="caption">打的去唐朝</h4>
                    <em className="date">2016-08-29</em>
                </div>
                <div className="comments-msg">说到底，始终是垃圾，就是某些停留在10年前对国产卡车印象！</div>
                <a href={`/review/${roomId}/${truId}`} className="know">我看过车，我来点评</a>
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
        <Navbar style={{top: '-60px'}}
            nowPrice={truck.current_price}
            OnSale = {this.OnSale}
            goPay = {this.goPay}
            pay = {this.state.pay}/>
    </div>
    )
  }
}
