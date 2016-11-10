import createReducer from 'UTIL/createReducer'
import { ACTION_BIDRECORD } from 'ACTION/bid'
import initState from 'STORE/initState'
import { combineReducers } from 'redux'

const bidRecord = createReducer(initState.bidRecord, ACTION_BIDRECORD)

export default combineReducers({ DATA: bidRecord })
