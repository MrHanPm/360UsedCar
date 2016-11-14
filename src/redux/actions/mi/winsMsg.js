import truckService from 'SERVICE/truckService'



const MY_WINSMSG = 'MY_WINSMSG'




/** 我的获拍 */
const ismyWinsMsg = (bidId) => dispatch =>
  truckService
    .intWinsMsg(bidId)
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: MY_WINSMSG,
        payload: res.data
      })
      return res.data
    })



export default {
   ismyWinsMsg
}


export const ACTION_HANDLERS = {
  
  [MY_WINSMSG]: (winsMsg, { payload }) => payload
}



