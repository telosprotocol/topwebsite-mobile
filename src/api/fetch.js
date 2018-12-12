import request from '@/utils/request'
// import config from '../config'
// const url = 'http://128.199.187.154:7772'
// console.log('process:', JSON.stringify(process))
// const url = process.env.rpcHost
// const serverurl = process.env.serverHost
var timestamp = new Date().getTime()
// const timestamp = new Date().valueOf()

/**
 *创建账号
 * @param {*} account
 * @param {*} signature
 */
export function accountCreate(account, signature) {
  return request({
    url: process.env.rpcHost,
    method: 'post',
    data: {
      'action': 'account_create',
      'account': account,
      'timestamp': timestamp,
      'signature': signature
    }
  })
}

/**
 * 查询账户余额
 * @param {*} account
 * @param {*} property_key
 */
export function accountBalance(account) {
  return request({
    url: process.env.rpcHost,
    method: 'post',
    data: {
      'action': 'account_balance',
      'account': account,
      'property_key': '$$'
    }
  })
}

/**
 * 查询账户基本信息
 * @param {*} account
 */
export function accountInfo(account) {
  return request({
    url: process.env.rpcHost,
    method: 'post',
    data: {
      'action': 'account_info',
      'account': account
    }
  })
}

/**
 * 转出交易
 * @param {*} source
 * @param {*} destination
 * @param {*} property_key
 * @param {*} last_digest
 * @param {*} signature
 * @param {*} amount
 */
export function transferOut(source, destination, property_key, last_digest, signature, amount) {
  return request({
    url: process.env.rpcHost,
    method: 'post',
    data: {
      'action': 'transfer_out',
      'source': source,
      'destination': destination,
      'property_key': property_key,
      'last_digest': last_digest,
      'signature': signature,
      'timestamp': timestamp,
      'amount': amount
    }
  })
}

/**
 *查询待接收交易
 * @param {*} userId
 * @param {*} accessToken
 */
export function accountPending(account, count) {
  return request({
    url: process.env.rpcHost,
    method: 'post',
    data: {
      'action': 'account_pending',
      'account': account,
      'count': count
    }
  })
}

/**
 *转入交易
 * @param {*} account
 * @param {*} tx_digest
 * @param {*} last_digest
 * @param {*} signature
 */
export function transferIn(account, tx_digest, last_digest, sender, amount, signature) {
  return request({
    url: process.env.rpcHost,
    method: 'post',
    data: {
      'action': 'transfer_in',
      'account': account,
      'tx_digest': tx_digest,
      'last_digest': last_digest,
      'timestamp': timestamp,
      'sender': sender,
      'amount': amount,
      'signature': signature
    }
  })
}

/**
 * 查询账户交易记录
 * @param {*} account
 * @param {*} account
 */
export function accountHistory(account, count, per_page) {
  return request({
    url: process.env.rpcHost,
    method: 'post',
    data: {
      'action': 'account_history',
      'account': account,
      'count': count,
      'per_page': per_page
    }
  })
}

/**
 * 查询最近交易记录
 * @param {*} account
 * @param {*} account
 */
export function latelyHistory(count, per_page) {
  return request({
    url: process.env.rpcHost,
    method: 'post',
    data: {
      'action': 'query_online_tx',
      'count': count,
      'per_page': per_page
    }
  })
}

/**
 *查询tps信息
 */
export function getMetrics() {
  return request({
    // url: '/top/v1/servers',
    url: process.env.serverHost + '/top/v1/servers',
    method: 'get'
  })
}

/**
 *设置属性
 */
export function setProperty(account, property_key, property_value, last_digest, signature) {
  return request({
    url: process.env.rpcHost,
    method: 'post',
    data: {
      'action': 'set_property',
      'account': account,
      'property_key': property_key,
      'property_value': property_value,
      'last_digest': last_digest,
      'timestamp': timestamp,
      'signature': signature
    }
  })
}

/**
 *查询属性
 * @param {*} account
 * @param {*} property_key
 */
export function queryProperty(account, property_key) {
  return request({
    url: process.env.rpcHost,
    method: 'post',
    data: {
      'action': 'query_property',
      'account': account,
      'property_key': property_key
    }
  })
}

/**
 *查询所有属性
 * @param {*} account
 */
export function queryAllProperty(account) {
  return request({
    url: process.env.rpcHost,
    method: 'post',
    data: {
      'action': 'query_all_property',
      'account': account
    }
  })
}

/**
 * 登录
 * @param {*} userInfo
 */
export function loginEx(userInfo) {
  return request({
    url: process.env.rpcHost + 'login',
    method: 'post',
    data: {
      'rawId': userInfo.uid,
      'displayName': userInfo.displayName,
      'photoURL': userInfo.photoURL,
      'email': userInfo.email,
      'providerId': userInfo.providerId,
      'accessToken': userInfo.accessToken,
      'federatedId': userInfo.federatedId,
      'code': userInfo.code
    }
  })
}

/**
 *登录
 * @param {*} account
 */
export function login(uid, displayName, photoURL, email, providerId, accessToken, federatedId) {
  return request({
    url: process.env.rpcHost + 'top/v2/login',
    method: 'post',
    data: {
      'rawId': uid,
      'displayName': displayName,
      'photoURL': photoURL,
      'email': email,
      'providerId': providerId,
      'accessToken': accessToken,
      'federatedId': federatedId
    }
  })
}

export function getuserinfo() {
  return request({
    url: process.env.rpcHost + '/getuserinfo',
    method: 'get'
  })
}

/**
 *检查历史上是否有转账记录
 */
export function checkIsTransferAddress(uid, toAddress) {
  return request({
    url: process.env.rpcHost + 'check/toAddress',
    method: 'get',
    params: { 'uid': uid, 'toAddress': toAddress }
  })
}

// 获取导航栏bounty
export function getEventBanner(type) {
  return request({
    url: '../api/boss/web/getConfig?name=testnet&type=' + type,
    method: 'get',
    data: {
      'type': type
    }
  })
}

// 获取本地banner的json数据
export function getLocalBannerData() {
  // return fetchGet('https://www.topnetwork.org/static/mock/banner-bounty.json')
  // return fetchGet('http://172.16.1.25:9995/static/mock/banner-bounty.json')
  return request({
    url: 'http://172.16.1.25:9995/#/static/mock/banner-bounty.json',
    method: 'get'
  })
}
