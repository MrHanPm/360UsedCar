import truckService from 'SERVICE/truckService'


const MY_DEPOSMSG = 'MY_DEPOSMSG'


/** 我的保证金 */
const ismyDeposMsg = (depositeId) => dispatch =>
  truckService
    .intDeposMsg(depositeId)
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: MY_DEPOSMSG,
        payload: res.data
      })
      return res.data
    })

export default {
  ismyDeposMsg
}


export const ACTION_HANDLERS = {
  [MY_DEPOSMSG]: (deposMsg, { payload }) => payload
}
