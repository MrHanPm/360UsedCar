import createReducer from 'UTIL/createReducer'
import { ACTION_MYDATA } from 'ACTION/mi'
import initState from 'STORE/initState'
import { combineReducers } from 'redux'

const myBids = createReducer(initState.myBids, ACTION_MYDATA)

export default combineReducers({ DATA: myBids })
