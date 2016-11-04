import createReducer from 'UTIL/createReducer'
import { ACTION_TRUCK } from 'ACTION/room/msg'
import initState from 'STORE/initState'

export default createReducer(initState.room.truckImg, ACTION_TRUCK)
