import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/bid'
import initState from 'STORE/initState'

export default createReducer(initState.bidRecord, ACTION_HANDLERS)
