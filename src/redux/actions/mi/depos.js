import truckService from 'SERVICE/truckService'


const MY_DEPOS = 'MY_DEPOS'


/** 我的保证金 */
const ismyDepos = (sessionId) => dispatch =>
  truckService
    .intDepos(sessionId)
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: MY_DEPOS,
        payload: res.data
      })
      return res.data
    })

export default {
  ismyDepos
}


export const ACTION_HANDLERS = {
  [MY_DEPOS]: (myDepos, { payload }) => payload
}
