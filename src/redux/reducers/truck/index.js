import { combineReducers } from 'redux'
import dataDB from './msgs'
import mode from './mode'

export default combineReducers({
  dataDB,
  mode
})
