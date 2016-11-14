import roomService from 'SERVICE/roomService'
// ================================
// Action Type
// ================================
const GET_POSTS = 'GET_POSTS'

// ================================
// Action Creator
// ================================
const loadData = (obj) => ({
  type: GET_POSTS,
  payload: obj
})

const getPosts = (json) => dispatch =>
  roomService
    .getPostsList(json)
    .then((re) => {
      if (!re) return
      let res = JSON.parse(re)
      dispatch(loadData(res.data))
    })

export default {
  getPosts
}


export const ACTION_HANDLERS = {
  [GET_POSTS]: (posts, { payload }) => payload
  
}
