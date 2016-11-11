import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/bid'
import initState from 'STORE/initState'
import { combineReducers } from 'redux'

const bidRecord = createReducer(initState.bidRecord, ACTION_HANDLERS)

export default combineReducers({ DATA: bidRecord })
