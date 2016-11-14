import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/mi/bidsMsg'
import initState from 'STORE/initState'

export default createReducer(initState.myMsg.bidsMsg, ACTION_HANDLERS)
