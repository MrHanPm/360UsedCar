import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/room/img'
import initState from 'STORE/initState'

export default createReducer(initState.room.truckImg, ACTION_HANDLERS)

