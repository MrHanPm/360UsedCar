import { combineReducers } from 'redux'
import bidRecord from './bid'
import pay from './pay'

export default combineReducers({
  bidRecord,
  pay
})
