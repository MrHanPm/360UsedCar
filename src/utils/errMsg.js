let AlertTimeOut

const ErrMsg = {}

ErrMsg.to = function(val) {
        let txt = ''
        if (val) { txt = val}
        clearTimeout(AlertTimeOut)
        let AlertCont = document.getElementById('AlertCont')
        let AlertTxt = document.getElementById('AlertTxt')
        if (AlertTxt) {
            AlertTxt.innerHTML = txt
            AlertCont.setAttribute('class', 'notification notification-in')
        }
        AlertTimeOut = setTimeout(() => ErrMsg.out(), 4000)
}

ErrMsg.out = function() {
    let AlertCont = document.getElementById('AlertCont')
    AlertCont.setAttribute('class', 'notification')
}

// const MsgToast = {}
// MsgToast.to = function(val) {
//         let AlertTxt = document.getElementById('AllMsg')
//         AlertTxt.innerHTML = val
//         AlertTxt.setAttribute('class','active')
//         let AllMsgToastOut = setTimeout(() => MsgToast.out(),2000)
// }
// MsgToast.out = function() {
//     let AlertCont = document.getElementById('AllMsg')
//     AlertCont.removeAttribute('class')
// }


const Tool = {}
/**
 * 本地数据存储或读取
 * @param {any} key
 * @param {any} value
 */
Tool.localItem = function (key, value) {
    if (arguments.length == 1) {
        return localStorage.getItem(key)
    } else {
        return localStorage.setItem(key, value)
    }
}
/**
 * 删除本地数据
 * @param {any} key
 */
Tool.removeLocalItem = function (key) {
    if (key) {
        return localStorage.removeItem(key)
    }
    return localStorage.removeItem()
}




export { ErrMsg, Tool }
