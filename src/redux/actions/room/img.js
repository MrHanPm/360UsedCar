import roomService from 'SERVICE/roomService'
// ================================
// Action Type
// ================================
const GET_IMG = 'GET_IMG'

// ================================
// Action Creator
// ================================

const getImg = (sessionId, Id) => dispatch =>
  roomService
    .getImage(sessionId, Id)
    .then(img => {
      let res = JSON.parse(img)
      dispatch({
        type: GET_IMG,
        payload: res.data
      })
      return res.data
    })

export default {
   getImg
}


export const ACTION_HANDLERS = {
  [GET_IMG]: (truckImg, { payload }) => payload
}
