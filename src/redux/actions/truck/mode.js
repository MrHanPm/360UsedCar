import truckService from 'SERVICE/truckService'
// import initState from 'STORE/initState'
// ================================
// Action Type
// ================================
const INT_TRUCKMODE = 'INT_TRUCKMODE'


// ================================
// Action Creator
// ================================

const modeMsg = (sessionId, modelId) => dispatch =>
  truckService
    .intsMsg(sessionId, modelId)
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: INT_TRUCKMODE,
        payload: res.data
      })
      return res.data
    })

export default {
  modeMsg
}


export const ACTION_HANDLERS = {
  [INT_TRUCKMODE]: (mode, { payload }) => payload
}
