import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/pay/pay'
import initState from 'STORE/initState'

export default createReducer(initState.pays.pay, ACTION_HANDLERS)
