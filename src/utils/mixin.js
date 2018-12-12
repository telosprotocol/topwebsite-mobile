export function isObject(x) {
  return x != null && typeof x === 'object'
}

export function hasOwnProperty(object, prop) {
  return Object.prototype.hasOwnProperty.call(object, prop)
}

export function device() {
  return navigator.userAgent.match('Android') ? 'android' : 'ios'
}

export function contains(object, title) {
  return typeof object === 'object' && object.hasOwnProperty(title)
}

export function getUrlParam() {
  var htmlHref = window.location.href
  htmlHref = htmlHref.replace(/^http:\/\/[^/]+/, '')
  var addr = htmlHref.substr(htmlHref.lastIndexOf('/', htmlHref.lastIndexOf('/') - 1) + 1)
  var index = addr.lastIndexOf('/')
  var addrLast = decodeURI(addr.substring(index + 1, addr.length))
  return addrLast
}
