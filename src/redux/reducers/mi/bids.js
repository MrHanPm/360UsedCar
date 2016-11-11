import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/mi/bids'
import initState from 'STORE/initState'

export default createReducer(initState.myMsg.myBids, ACTION_HANDLERS)
