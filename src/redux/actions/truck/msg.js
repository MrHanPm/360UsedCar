import truckService from 'SERVICE/truckService'
// import initState from 'STORE/initState'
// ================================
// Action Type
// ================================
const GET_TRUCKMSG = 'GET_TRUCKMSG'
const INT_TRUCKMODE = 'INT_TRUCKMODE'


// ================================
// Action Creator
// ================================

const initMsg = (roomId, truId) => dispatch =>
  truckService
    .getMsg(roomId, truId)
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: GET_TRUCKMSG,
        text: res.data
      })
      return res.data
    })

const modeMsg = (modelId) => dispatch =>
  truckService
    .intsMsg(modelId)
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: INT_TRUCKMODE,
        payload: res.data
      })
      return res.data
    })

export default {
  initMsg, modeMsg
}


export const ACTION_TRUCKMSG = {
  [GET_TRUCKMSG]: (dataDB, { text }) => text,
  [INT_TRUCKMODE]: (mode, { payload }) => payload
}
