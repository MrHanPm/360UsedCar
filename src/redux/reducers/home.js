import createReducer from 'UTIL/createReducer'
import { ACTION_HOME } from 'ACTION/home'
import initState from 'STORE/initState'

export default createReducer(initState.homeToday, ACTION_HOME)
