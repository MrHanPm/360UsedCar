import React from 'react'
import { history } from 'STORE'
import { Router, Route, IndexRoute } from 'react-router'

import App from 'COMPONENT/App'
import Welcome from 'COMPONENT/Welcome'
import TruckList from 'COMPONENT/Room/TruckList'


import Err from 'COMPONENT/404'


const RouteConfig = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
      <Route path="room/:id" component={TruckList}/>
      <Route path="*" component={Err}/>
    </Route>
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
