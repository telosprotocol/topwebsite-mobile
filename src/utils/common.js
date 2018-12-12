const Base64 = require('js-base64').Base64
import {
  queryAllProperty,
  accountInfo,
  accountHistory,
  latelyHistory
} from '@/api/fetch'
import {
  timeDecorate
} from '@/utils/date'
import {
  isOutIn
} from '@/utils/arry'
import {
  fromByteArray
} from 'base64-js'
import bitcoinjs from 'bitcoinjs-lib'
import {
  arrySplice,
  handleAmount
} from '@/utils/arry'
// import { Store } from 'vuex'
// 获取账户余额等信息
export function getInfo(pointer, account) {
  //   var account = Base64.decode(localStorage.getItem('account')
  accountInfo(account).then(res => {
    if (res.Result === 1) {
      pointer.$store.commit('SetBalance', res.balance)
      pointer.$store.commit('Setgive', res.give)
      // localStorage.lasthash = res.lasthash
    }
  })
}

// 获取账户属性信息
export function getProperty(pointer) {
  let accountBase64 = localStorage.getItem('account')
  if (!accountBase64) {
    return
  }
  let account = Base64.decode(accountBase64)
  let p_str = 'not created'
  queryAllProperty(account).then(res => {
    if (res.Result === 1) {
      if (Object.getOwnPropertyNames(res).length > 1) {
        p_str = ''
      }
      for (var index in res) {
        if (index !== 'Result') {
          p_str += res[index]
        }
      }
    }
    if (p_str !== 'not created') {
      let str = p_str.toString()
      str = str.substr(0, str.length)
      pointer.$store.commit('SetProperty', str)
    }
  })
}

// 获取用户信息判断用户是否存在
export function AddressIsExit(account, cb) {
  accountInfo(account).then(res => {
    cb && cb(res)
  })
}

// 请求我的交易记录
export function myHistory(pointer, account, currentpage, per_page) {
  accountHistory(account, currentpage, per_page).then(res => {
    if (res.Result === 1) {
      if (!res.blocks) {
        pointer.$store.commit('SetList', res.blocks)
        pointer.$store.commit('SetCount', Number(res.count))
        return
      }
      timeDecorate(res.blocks, 'rpc_time')
      isOutIn(account, res.blocks, 'transaction_type', 'amount', 'destination', 'source', 'source_tag', 'destination_tag')
      // arrySplice(res.blocks, 'source')
      pointer.$store.commit('SetList', res.blocks)
      pointer.$store.commit('SetCount', Number(res.count))
      if (res.count > 15) {
        pointer.moreshow = true
      } else {
        pointer.endshow = true
      }
    }
  }).catch(res => {})
}

// 请求最近的交易记录
export function getlatelyHistory(pointer, currentpage, per_page) {
  latelyHistory(currentpage, per_page).then(res => {
    timeDecorate(res.blocks, 'rpc_time')
    handleAmount(res.blocks, 'amount')
    arrySplice(res.blocks, 'sender')

    pointer.$store.commit('SetTransaction', res.blocks)
    pointer.$store.commit('SetLcount', Number(res.count))
    // this.transactionList = res.blocks
    // this.count = Number(res.count)
    // arrySplice(this.transactionList, 'sender')
  }).catch(res => {
    console.log('请求最近交易记录失败')
  })
}

// 判断是否登录
export function isLogin(pointer) {
  if (pointer.$store.state.user.uid === 0) {
    return false
  } else {
    return true
  }
}

// 获取tps数据
// export function gettps(pointer, number) {
//   tpsQuery().then(res => {
//     pointer.shardMaxTPS = ''
//     pointer.tranDate = []
//     pointer.tranAmount = []
//     pointer.show = true
//     if (!res.SHARD_MAX_TPS[number]) {
//       pointer.shardMaxTPS = 0
//       return
//     }
//     pointer.shardMaxTPS = res.SHARD_MAX_TPS[number][timeReversal()]
//     createArray(pointer.tranDate, pointer.tranAmount, res.SHARD_TX[number])
//     pointer.drawLine(pointer.tranDate, pointer.tranAmount)
//   }).catch(err => {
//     console.log(err)
//   })
// }

// 随机生成私钥
export function genKey(pointer) {
  // var exp = exp;
  // var secp256k1 = secp256k1;
  var bitjs = bitcoinjs
  var ecpair = bitjs.ECPair.makeRandom()
  var privateKey = ecpair.privateKey
  var publicKey = ecpair.publicKey
  var ribhash = bitjs.crypto.ripemd160(publicKey)
  var address = bitjs.address.toBase58Check(ribhash, 1)
  debugger
  pointer.privateKey = privateKey
  // var wif = bitjs.ECPair.fromWIF(ecpair.toWIF(), 0)
  // this.address = 'T-' + address
  var tx = {
    transaction_type: 0,
    sender_addr: 'T-' + address,
    receiver_addr: 'T-' + address,
    property_key: '$$',
    transaction_params: '',
    timestamp: '0',
    last_msg_digest: '0',
    random_nounce: '0',
    work_proof: '0'
  }

  var str =
    tx.sender_addr +
    tx.receiver_addr +
    tx.property_key +
    tx.transaction_params +
    tx.transaction_type +
    tx.timestamp +
    tx.random_nounce +
    tx.work_proof +
    tx.last_msg_digest
  // console.log('hash str:' + str)
  var digest = bitjs.crypto.sha256(str)
  pointer.digest = fromByteArray(digest)
  //   var digest1 = toByteArray(this.digest)
  // let signature = ecpair.sign(digest);
  // var tx = new bitjs.TransactionBuilder()
  // tx.addInput(this.address, 0)
  // tx.addOutput(this.address, 0)
  var txSign = ecpair.sign(digest)
  // let signature1 = new Uint8Array(signature,1,64)
  // signature1[0]=1
  pointer.sign = fromByteArray(txSign)
  // localStorage.sign = this.sign
}
