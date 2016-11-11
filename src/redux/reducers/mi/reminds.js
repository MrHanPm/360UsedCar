import createReducer from 'UTIL/createReducer'
import { ACTION_MYDATA } from 'ACTION/mi'
import initState from 'STORE/initState'
import { combineReducers } from 'redux'

const myReminds = createReducer(initState.myReminds, ACTION_MYDATA)

export default combineReducers({ DATA: myReminds })
