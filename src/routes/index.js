import React from 'react'
import { history } from 'STORE'
import { Router, Route, IndexRoute } from 'react-router'

import App from 'COMPONENT/App'
import Welcome from 'COMPONENT/Welcome'
import TruckList from 'COMPONENT/Room/TruckList'
import TruckMsg from 'COMPONENT/Truck/'
import TruckImage from 'COMPONENT/Room/TruckList/image'

import BidRecord from 'COMPONENT/BidRecord'
import MarginDetails from 'COMPONENT/MarginDetails'
import Comment from 'COMPONENT/Comment'


import Err from 'COMPONENT/404'


const RouteConfig = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
      <Route path="room/:id" component={TruckList}/>
      <Route path="truck/:roomId/:truId" component={TruckMsg}/>
      <Route path="room/truck/:truckId" component={TruckImage}/> 
    </Route>
    <Route path="/bidRecord" component={BidRecord}/>
    <Route path="/marginDetails" component={MarginDetails}/>
    <Route path="/comment" component={Comment}/>
    <Route path="*" component={Err}/>
  </Router>
)

export default RouteConfig


/*
  当前路由树如下
  ├ /
  |
  ├ /room/:id
  ├ /room/:id/:msgId
  ├ 
  ├ 
  ├ 
  ├ 
  ├ 
  ├ 
*/
