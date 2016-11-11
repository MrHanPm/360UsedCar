import createReducer from 'UTIL/createReducer'
import { ACTION_MYDATA } from 'ACTION/mi'
import initState from 'STORE/initState'
import { combineReducers } from 'redux'

const myWins = createReducer(initState.myWins, ACTION_MYDATA)

export default combineReducers({ DATA: myWins })
