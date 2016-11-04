import { combineReducers } from 'redux'
import msgsReducer from './msgs'
import truckImages from './imgs'

export default combineReducers({
  trucks: msgsReducer,
  truckImg: truckImages
})
