import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/mi/wins'
import initState from 'STORE/initState'

export default createReducer(initState.myMsg.myWins, ACTION_HANDLERS)


