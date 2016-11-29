import truckService from 'SERVICE/truckService'


const MY_BIDS = 'MY_BIDS'


/** 我的竞拍 */
const ismyBids = (sessionId) => dispatch =>
  truckService
    .intBids(sessionId)
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: MY_BIDS,
        payload: res.data
      })
      return res.data
    })

export default {
  ismyBids
}

export const ACTION_HANDLERS = {
  [MY_BIDS]: (myBids, { payload }) => payload
}


