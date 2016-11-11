import truckService from 'SERVICE/truckService'
// import initState from 'STORE/initState'
// ================================
// Action Type
// ================================
const INT_TRUCKMODE = 'INT_TRUCKMODE'


// ================================
// Action Creator
// ================================

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
  modeMsg
}


export const ACTION_HANDLERS = {
  [INT_TRUCKMODE]: (mode, { payload }) => payload
}
