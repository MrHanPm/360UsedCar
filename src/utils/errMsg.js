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

export { ErrMsg }
