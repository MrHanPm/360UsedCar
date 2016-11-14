import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/mi/deposMsg'
import initState from 'STORE/initState'

export default createReducer(initState.myMsg.deposMsg, ACTION_HANDLERS)
