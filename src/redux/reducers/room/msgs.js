import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/room/msg'
import initState from 'STORE/initState'


export default createReducer(initState.room.trucks, ACTION_HANDLERS)
