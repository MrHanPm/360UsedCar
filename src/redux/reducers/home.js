import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/home'
import initState from 'STORE/initState'

export default createReducer(initState.homeToday, ACTION_HANDLERS)
