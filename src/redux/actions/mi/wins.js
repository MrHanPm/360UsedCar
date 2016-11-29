import truckService from 'SERVICE/truckService'



const MY_WINS = 'MY_WINS'




/** 我的获拍 */
const ismyWins = (sessionId) => dispatch =>
  truckService
    .intWins(sessionId)
    .then(msg => {
      let res = JSON.parse(msg)
      dispatch({
        type: MY_WINS,
        payload: res.data
      })
      return res.data
    })



export default {
   ismyWins
}


export const ACTION_HANDLERS = {
  
  [MY_WINS]: (myWins, { payload }) => payload
}



