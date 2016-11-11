import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/truck/mode'
import initState from 'STORE/initState'

export default createReducer(initState.truckMsg.mode, ACTION_HANDLERS)

