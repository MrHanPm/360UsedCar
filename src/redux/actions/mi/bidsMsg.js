import truckService from 'SERVICE/truckService'


const MY_BIDSMSG = 'MY_BIDSMSG'


/** 我的竞拍 */
const ismyBidsMsg = () => dispatch =>
  truckService
    .intBidsMsg()
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: MY_BIDSMSG,
        payload: res.data
      })
      return res.data
    })

export default {
  ismyBidsMsg
}

export const ACTION_HANDLERS = {
  [MY_BIDSMSG]: (bidsMsg, { payload }) => payload
}


