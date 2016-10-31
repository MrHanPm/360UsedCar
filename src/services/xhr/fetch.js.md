import { rootPath, errHandler } from './config'

const xhr = ({ url, body = null, method = 'get' }) => {
  const defer = $.Deferred()

  $.ajax({
    type: method,
    url: rootPath + url,
    data: body
    // xhrFields: { // 跨域允许带上 cookie
    //   withCredentials: [域名]
    // },
    // crossDomain: true
  })
  .done(defer.resolve)
  .fail(errHandler)

  return defer.promise()
}

//fetch的方式。有未知坑，暂停使用。
// const xhr = ({ url, body = null, method = 'get' }) => {

//   fetch('/users.json')
//   .then(function(response) {
//     return response.json()
//   }).then(function(json) {
//     console.log('parsed json', json)
//   }).catch(function(ex) {
//     console.log('parsing failed', ex)
//   })

//   fetch('/users', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name: 'Hubot',
//       login: 'hubot',
//     })
//   })

//   return 
// }



export default xhr
