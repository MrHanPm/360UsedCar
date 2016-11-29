import truckService from 'SERVICE/truckService'
// import initState from 'STORE/initState'
// ================================
// Action Type
// ================================
const GET_TRUCKMSG = 'GET_TRUCKMSG'

// ================================
// Action Creator
// ================================

const initMsg = (sessionId, roomId, truId) => dispatch =>
  truckService
    .getMsg(sessionId, roomId, truId)
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: GET_TRUCKMSG,
        text: res.data
      })
      return res.data
    })


export default {
  initMsg
}


export const ACTION_HANDLERS = {
  [GET_TRUCKMSG]: (dataDB, { text }) => text
}
