// 删除免费领取test token交易记录
export function arrySplice(resultArray, prop) {
  var godAccount = 'T-Um45LZ8HZYUpm5jdWi6bh99mdNjEHkz6w'
  for (var i = 0; i < resultArray.length; i++) {
    if (resultArray[i][prop] === godAccount) {
      resultArray.splice(i, 1)
      i--
    }
  }
}

// 交易金额处理
export function handleAmount(arry, prop) {
  for (var i = 0; i < arry.length; i++) {
    arry[i][prop] = Number(arry[i][prop] / 1000000).toFixed(3)
  }
}

// 添加数据到折线图
export function createArray(tranDate, tranAmount, resArray) {
  for (var index in resArray) {
    tranDate.push(Number(index))
    tranAmount.push(resArray[index])
  }
}

// 判断转入还是转出
export function isOutIn(account, arry, typeprop, amountprop, destprop, souprop, soutagprop, destagprop) {
  arry.forEach(function(value, index) {
    if (value[typeprop] === 1) {
      value[amountprop] = '-' + Number(value[amountprop] / 1000000).toFixed(3)
      value[souprop] = value[destprop]
      value[soutagprop] = value[destagprop]
      if (!value[soutagprop]) {
        value[soutagprop] = '-'
      }
      return
    }
    if (value[typeprop] === 2) {
      value[amountprop] = '+' + value[amountprop]
      if (!value[soutagprop]) {
        value[soutagprop] = '-'
      }
    }
  })
}
