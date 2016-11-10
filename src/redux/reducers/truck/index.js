import { combineReducers } from 'redux'
import dataDBReducer from './msgs'
import truckMode from './mode'

export default combineReducers({
  dataDB: dataDBReducer,
  mode: truckMode
})
