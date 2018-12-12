// 将时间转化为时间戳
function add0(m) { return m < 10 ? '0' + m : m }
// 时间戳转化成时间格式
export function timeFormat(timestamp) {
  // timestamp是整数，否则要parseInt转换,不会出现少个0的情况
  // var time = new Date(timestamp)
  var timestampnew = new Date().getTime()
  timestamp = timestampnew - 15 * 3600 * 1000
  var time = new Date(timestamp)
  var year = time.getFullYear()
  var month = time.getMonth() + 1
  var date = time.getDate()
  var hours = time.getHours()
  var minutes = time.getMinutes()
  var seconds = time.getSeconds()
  return year + '-' + add0(month) + '-' + add0(date) + ' ' + add0(hours) + ':' + add0(minutes) + ':' + add0(seconds)
}

// 时间戳转换为太平洋年月日格式
export function timeReversal() {
  var timestamp = new Date().getTime()
  timestamp = timestamp - 15 * 3600 * 1000
  var time = new Date(timestamp)
  var year = String(time.getFullYear())
  var month = String(time.getMonth() + 1)
  var date = String(time.getDate())
  return Number(year + add0(month) + add0(date))
}

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
  // time = +time * 1000
  const d = new Date(Number(time))
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return 'just now'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + ' minutes ago'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + ' hours ago'
  }
  // else if (diff < 3600 * 24 * 2) {
  //   return ' day ago'
  // }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
            1 +
            '/' +
            d.getDate() +
            '/' +
            d.getFullYear()
    )
  }
}

export function timeDecorate(array, prop) {
  array.forEach(function(value, index) {
    value[prop] = formatTime(value[prop])
  })
}
