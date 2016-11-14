import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/mi/remindsMsg'
import initState from 'STORE/initState'

export default createReducer(initState.myMsg.remindsMsg, ACTION_HANDLERS)
