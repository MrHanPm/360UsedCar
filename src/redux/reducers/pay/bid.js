import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/pay/bid'
import initState from 'STORE/initState'

export default createReducer(initState.pays.bidRecord, ACTION_HANDLERS)
