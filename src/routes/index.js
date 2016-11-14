import React from 'react'
import { history } from 'STORE'
import { Router, Route, IndexRoute } from 'react-router'

import App from 'COMPONENT/App'
import Welcome from 'COMPONENT/Welcome'
import TruckList from 'COMPONENT/Room/'
import TruckMsg from 'COMPONENT/Truck/'
import TruckReport from 'COMPONENT/Truck/report'
import TruckDetail from 'COMPONENT/Truck/detail'
import TruckImage from 'COMPONENT/Room/image'
import Auction from 'COMPONENT/Room/auction'

import BidRecord from 'COMPONENT/BidRecord'
import MarginDetails from 'COMPONENT/MarginDetails'
import Margin from 'COMPONENT/Margin'
import Comment from 'COMPONENT/Comment'
import Clock from 'COMPONENT/Form/clock'
import Pay from 'COMPONENT/Form/pay'
import Review from 'COMPONENT/Form/review'
import About from 'VIEW/about'
import Protocol from 'COMPONENT/Protocol'
import Url from 'COMPONENT/url'
import Ok from 'VIEW/ok'


import Err from 'COMPONENT/404'


const RouteConfig = (
<Router history={history}>
  <Route path="/" component={App}>
    <IndexRoute component={Welcome}/>
    <Route path="index" component={Welcome}/>
    <Route path="url" component={Url}/>
    <Route path="room/:id" component={TruckList}/>
    <Route path="truck/:roomId/:truId" component={TruckMsg}/>
    <Route path="report/:truId" component={TruckReport}/>
    <Route path="detail/:modelId" component={TruckDetail}/>
    <Route path="room/truck/:truckId" component={TruckImage}/>
    <Route path="auction" component={Auction}/>
    <Route path="bidRecord/:roomId/:truId" component={BidRecord}/>
    <Route path="marginDetails/:depositeId" component={MarginDetails}/>
    <Route path="margin/:bidId" component={Margin}/>
    <Route path="comment/:roomId/:truId" component={Comment}/>
    <Route path="clock/:roomId/:truId" component={Clock}/>
    <Route path="pay/:roomId/:truId/:amount(/:yn)" component={Pay}/>
    <Route path="review/:roomId/:truId" component={Review}/>
    <Route path="about" component={About}/>
    <Route path="protocol" component={Protocol}/>
    <Route path="ok" component={Ok}/>
    <Route path="*" component={Err}/>
  </Route>
</Router>
)

export default RouteConfig


/*
  <IndexRoute path="url" component={Url}/>
  当前路由树如下    
  ├ /                             // 动态／URL导航
  ├ /index                        // 首页专场列表
  ├ /room/:id                     // 专场
  ├ /room/truck/:truckId          // 卡车图片
  ├ /truck/:roomId/:truId         // 车信息
  ├ /report/:truId                // 车信息
  ├ /detail/:truId                // 车信息
  ├ 
  ├ /auction                      // 我的竞拍
  ├ /bidRecord                    // 竞拍排行榜
  ├ /marginDetails                // 保证金页
  ├ /margin                       // 订单状态
  ├ /comment                      // 评价列表
  ├ /clock                        // 时间提醒
  ├ /pay                          // 支付
  ├ /review                       // 发表评论
  ├ /about                        // 规则描述
  ├ /protocol                     // 服务协议
  ├ /ok                           // 支付成功
  ├
  ├ 
*/
