import payService from 'SERVICE/payService'

const BID_RECOR = 'BID_RECOR'

const getBid = (sessionId, roomId, truId, page, numb) => dispatch =>
  payService
    .bidRec(sessionId, roomId, truId, page, numb)
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: BID_RECOR,
        payload: res.data
      })
      return res.data
    })

export default {
  getBid
}

export const ACTION_HANDLERS = {
  [BID_RECOR]: (bidRecord, { payload }) => [...payload]
}
