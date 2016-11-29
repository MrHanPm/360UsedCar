import truckService from 'SERVICE/truckService'
// import initState from 'STORE/initState'
// ================================
// Action Type
// ================================
const CRT_CLICK = 'CRT_CLICK'

// ================================
// Action Creator
// ================================

const crtClick = (sessionId, roomId, truId, mode, point, times, pcode) => dispatch =>
  truckService
    .crtReminds(sessionId, roomId, truId, mode, point, times, pcode)
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: CRT_CLICK,
        text: res
      })
      return res
    })


export default {
  crtClick
}


export const ACTION_HANDLERS = {
  [CRT_CLICK]: (dataDB, { text }) => text
}
