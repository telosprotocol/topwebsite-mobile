import axios from 'axios'
// import { Message } from 'element-ui'
import store from '../store'
// import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  // baseURL: 'http://10.88.0.55:9002', // api 的 base_url
  timeout: 60000 // 请求超时时间
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // }
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.state.user.accesstoken) {
      config.headers['token'] = store.state.user.accesstoken // 让每个请求携带自定义token 请根据实际情况自行修改
      config.headers['uid'] = store.state.user.uid
    }
    config.headers['Expires'] = '-1'
    config.headers['Cache-Control'] = 'no-cache,no-store,must-revalidate,max-age=-1,private'

    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)
// service.defaults.headers.post['Content-Type'] = 'application/json'
// response 拦截器
service.interceptors.response.use(
  response => {
    /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
    const res = response.data
    // return response.data
    if (res.ErrCode === 100002) {
      store.dispatch('Relogin').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
    return response.data

    //   // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     MessageBox.confirm(
    //       '你已被登出，可以取消继续留在该页面，或者重新登录',
    //       '确定登出',
    //       {
    //         confirmButtonText: '重新登录',
    //         cancelButtonText: '取消',
    //         type: 'warning'
    //       }
    //     ).then(() => {
    //       store.dispatch('FedLogOut').then(() => {
    //         location.reload() // 为了重新实例化vue-router对象 避免bug
    //       })
    //     })
    //   }
    //   return Promise.reject('error')
    // } else {
    //   return response.data
    // }
  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
