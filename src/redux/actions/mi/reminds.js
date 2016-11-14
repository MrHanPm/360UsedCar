import truckService from 'SERVICE/truckService'

const MY_REMINDS = 'MY_REMINDS'
const DEL_REMINDS = 'DEL_REMINDS'


/** 我的提醒 */
const ismyReminds = () => dispatch =>
  truckService
    .intReminds()
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: MY_REMINDS,
        payload: res.data
      })
      return res.data
    })

/** 删除提醒 */
const delsReminds = (remindId) => dispatch =>
  truckService
    .delReminds(remindId)
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: DEL_REMINDS,
        payload: res
      })
      return res
    })

export default {
   ismyReminds, delsReminds
}


export const ACTION_HANDLERS = {
  [MY_REMINDS]: (myReminds, { payload }) => payload,
  [DEL_REMINDS]: (myReminds, { payload }) => {
    console.log(payload)
  }
}
