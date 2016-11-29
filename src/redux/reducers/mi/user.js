import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/mi/user'
import initState from 'STORE/initState'

export default createReducer(initState.myMsg.userData, ACTION_HANDLERS)


