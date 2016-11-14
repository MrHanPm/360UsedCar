import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/truck/msg'
import initState from 'STORE/initState'

export default createReducer(initState.truckMsg.dataDB, ACTION_HANDLERS)
