import userService from 'SERVICE/homeService'
// ================================
// Action Type
// ================================
const LOD_HM = 'LOD_HM'
// const MY_DATA = 'MY_DATA'
// ================================
// Action Creator
// ================================
const loadHome = (homeToday) => ({
  type: LOD_HM,
  payload: homeToday
})


const checkHome = (sessionId) => {
  return dispatch => {
    userService
      .checkHome(sessionId)
      .then((re) => {
        if (!re) return
        let res = JSON.parse(re)
        dispatch(loadHome(res.data))
      })
  }
}




/** 我的 */
// const getUserInfo = (sessionId) => dispatch => 
//     userService
//       .getUserInfo(sessionId)
//       .then((re) => {
//         if (!re) return
//         let res = JSON.parse(re)
//         dispatch({
//           type: MY_DATA,
//           payload: res.data
//         })
//         return res.data
//       })

/* default 导出所有 Actions Creator */
export default {
  checkHome
}

/* =======直接处理======= */

export const ACTION_HANDLERS = {
  [LOD_HM]: (homeToday, { payload }) => [...payload]
  // [MY_DATA]: (userData, { payload }) => payload
}
// payload is userData
