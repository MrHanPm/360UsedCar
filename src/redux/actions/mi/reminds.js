import truckService from 'SERVICE/truckService'

const MY_REMINDS = 'MY_REMINDS'


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

export default {
   ismyReminds
}


export const ACTION_HANDLERS = {
  [MY_REMINDS]: (myReminds, { payload }) => payload
}
