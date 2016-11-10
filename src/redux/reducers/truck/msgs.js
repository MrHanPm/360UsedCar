import createReducer from 'UTIL/createReducer'
import { ACTION_TRUCKMSG } from 'ACTION/truck/msg'
import initState from 'STORE/initState'

export default createReducer(initState.truckMsg.dataDB, ACTION_TRUCKMSG)
