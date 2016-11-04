import roomService from 'SERVICE/roomService'
// ================================
// Action Type
// ================================
const GET_LIST = 'GET_LIST'
const GET_IMG = 'GET_IMG'

// ================================
// Action Creator
// ================================
const loadData = (trucks) => ({
  type: GET_LIST,
  payload: trucks
})

const inGet = Id => dispatch =>
  roomService
    .inget(Id)
    .then((re) => {
      if (!re) return
      let res = JSON.parse(re)
      dispatch(loadData(res.data))
    })

const getImg = Id => dispatch =>
  roomService
    .getImage(Id)
    .then(img => {
      let res = JSON.parse(img)
      dispatch({
        type: GET_IMG,
        payload: res.data
      })
      return res.data
    })

export default {
  inGet, getImg
}


export const ACTION_TRUCK = {
  [GET_LIST]: (trucks, { payload }) => payload,
  [GET_IMG]: (truckImg, { payload }) => [...payload]
}
