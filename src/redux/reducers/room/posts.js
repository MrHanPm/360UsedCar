import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/room/posts'
import initState from 'STORE/initState'


export default createReducer(initState.room.posts, ACTION_HANDLERS)
