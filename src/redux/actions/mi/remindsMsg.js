import truckService from 'SERVICE/truckService'

const MY_REMINDSMSG = 'MY_REMINDSMSG'


/** 创建提醒 */
const ismyRemindsMsg = (roomId, truId, mode, point, times, pcode) => dispatch =>
  truckService
    .crtReminds(roomId, truId, mode, point, times, pcode)
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: MY_REMINDSMSG,
        payload: res.data
      })
      return res.data
    })

export default {
   ismyRemindsMsg
}


export const ACTION_HANDLERS = {
  [MY_REMINDSMSG]: (remindsMsg, { payload }) => payload
}
