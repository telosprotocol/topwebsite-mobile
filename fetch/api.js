import KJUR from 'jsrsasign'
import axios from 'axios'
import md5 from 'md5'
axios.defaults.timeout = 100000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
axios.defaults.baseURL = '/api/'

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function getToken () {
  
}

function sign (content) {
  var md5data = md5(content)
  var oHeader = {}
  var oPayload = {}
  var tEnd = KJUR.jws.IntDate.get('now + 5')
  oPayload.iss = 'TopWebsite'
  oPayload.exp = tEnd
  oPayload.data = md5data
  var sHeader = JSON.stringify(oHeader)
  var sPayload = JSON.stringify(oPayload)
  var token = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, { utf8: 'xxxx'})
  return token
}

export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function getCookie (name) {
  return window.localStorage.getItem(name)
}

export function addCookie (name, val) {
  window.localStorage.setItem(name, val)
}
