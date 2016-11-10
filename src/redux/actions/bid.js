import payService from 'SERVICE/payService'

const BID_RECOR = 'BID_RECOR'

const getBid = (roomId, truId, page, numb) => dispatch =>
  payService
    .bidRec(roomId, truId, page, numb)
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

export const ACTION_BIDRECORD = {
  [BID_RECOR]: (bidRecord, { payload }) => [...payload]
}
