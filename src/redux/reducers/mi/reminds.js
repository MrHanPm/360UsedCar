import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/mi/reminds'
import initState from 'STORE/initState'

export default createReducer(initState.myMsg.myReminds, ACTION_HANDLERS)
