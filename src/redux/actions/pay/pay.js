import payService from 'SERVICE/payService'

const PAY_BIDRECOR = 'PAY_BIDRECOR'

const payBid = (roomId, truId, pay) => dispatch =>
  payService
    .payRecs(roomId, truId, pay)
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: PAY_BIDRECOR,
        payload: res.data
      })
      return res.data
    })

export default {
  payBid
}

export const ACTION_HANDLERS = {
  [PAY_BIDRECOR]: (pay, { payload }) => payload
}
