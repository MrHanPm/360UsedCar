import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/mi/depos'
import initState from 'STORE/initState'

export default createReducer(initState.myMsg.myDepos, ACTION_HANDLERS)
