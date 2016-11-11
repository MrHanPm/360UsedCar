import truckService from 'SERVICE/truckService'
// import initState from 'STORE/initState'
// ================================
// Action Type
// ================================
const GET_TRUCKMSG = 'GET_TRUCKMSG'
const INT_TRUCKMODE = 'INT_TRUCKMODE'
const MY_BIDS = 'MY_BIDS'
const MY_WINS = 'MY_WINS'
const MY_DEPOS = 'MY_DEPOS'
const MY_REMINDS = 'MY_REMINDS'


// ================================
// Action Creator
// ================================

const initMsg = (roomId, truId) => dispatch =>
  truckService
    .getMsg(roomId, truId)
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: GET_TRUCKMSG,
        text: res.data
      })
      return res.data
    })

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




/** 我的竞拍 */
const ismyBids = () => dispatch =>
  truckService
    .intBids()
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: MY_BIDS,
        payload: res.data
      })
      return res.data
    })


/** 我的获拍 */
const ismyWins = () => dispatch =>
  truckService
    .intWins()
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: MY_WINS,
        payload: res.data
      })
      return res.data
    })

/** 我的保证金 */
const ismyDepos = () => dispatch =>
  truckService
    .intDepos()
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: MY_DEPOS,
        payload: res.data
      })
      return res.data
    })

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
  initMsg, modeMsg, ismyBids, ismyWins, ismyDepos, ismyReminds
}


export const ACTION_MYDATA = {
  [GET_TRUCKMSG]: (dataDB, { text }) => text,
  [INT_TRUCKMODE]: (mode, { payload }) => payload,
  [MY_BIDS]: (myBids, { payload }) => payload,
  [MY_WINS]: (myWins, { payload }) => payload,
  [MY_DEPOS]: (myDepos, { payload }) => payload,
  [MY_REMINDS]: (myReminds, { payload }) => payload
}
