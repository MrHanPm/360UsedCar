import userService from 'SERVICE/homeService'
// ================================
// Action Type
// ================================
const LOD_HM = 'LOD_HM'

// ================================
// Action Creator
// ================================
const loadHome = (homeToday) => ({
  type: LOD_HM,
  payload: homeToday
})


const checkHome = () => {
  return dispatch => {
    userService
      .checkHome()
      .then((re) => {
        if (!re) return
        let res = JSON.parse(re)
        dispatch(loadHome(res.data))
      })
  }
}

/* default 导出所有 Actions Creator */
export default {
  checkHome
}

/* =======直接处理======= */

export const ACTION_HOME = {
  [LOD_HM]: (homeToday, { payload }) => [...payload]
}
// payload is userData
