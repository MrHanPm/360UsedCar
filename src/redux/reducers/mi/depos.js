import createReducer from 'UTIL/createReducer'
import { ACTION_MYDATA } from 'ACTION/mi'
import initState from 'STORE/initState'
import { combineReducers } from 'redux'

const myDepos = createReducer(initState.myDepos, ACTION_MYDATA)

export default combineReducers({ DATA: myDepos })
