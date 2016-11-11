import roomService from 'SERVICE/roomService'
// ================================
// Action Type
// ================================
const GET_LIST = 'GET_LIST'

// ================================
// Action Creator
// ================================
const loadData = (obj) => ({
  type: GET_LIST,
  payload: obj
})

const inGet = Id => dispatch =>
  roomService
    .inget(Id)
    .then((re) => {
      if (!re) return
      let res = JSON.parse(re)
      dispatch(loadData(res.data))
    })

export default {
  inGet
}


export const ACTION_HANDLERS = {
  [GET_LIST]: (trucks, { payload }) => payload
  
}
