import userService from 'SERVICE/homeService'


const MY_DATA = 'MY_DATA'




/** 我的 */
const getUserInfo = (sessionId) => dispatch => 
    userService
      .getUserInfo(sessionId)
      .then((re) => {
        if (!re) return
        let res = JSON.parse(re)
        let txt = JSON.stringify(res.data)
        localStorage.setItem('userData', txt)
        dispatch({
          type: MY_DATA,
          payload: res.data
        })
        return res.data
      })



export default {
   getUserInfo
}


export const ACTION_HANDLERS = {
  
  [MY_DATA]: (userData, { payload }) => payload

}



