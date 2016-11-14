import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/mi/winsMsg'
import initState from 'STORE/initState'

export default createReducer(initState.myMsg.winsMsg, ACTION_HANDLERS)


