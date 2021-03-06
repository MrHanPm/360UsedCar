import React from 'react'
import AlertBox from 'VIEW/errMsg'

let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  // 组件形式的 Redux DevTools
  DevTools = require('COMPONENT/DevTools').default
}

const App = ({ children, location }) => (
  <div style={{height: '100%'}}>
    { children }
    { DevTools && <DevTools /> }
    <AlertBox />
  </div>
)

export default App
