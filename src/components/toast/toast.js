import Vue from 'vue'
import {
  isObject,
  hasOwnProperty
} from '@/utils/mixin'
const ToastConstructor = Vue.extend((require('./toast.vue').default))
let instance

const Toast = (options = {}) => {
  if (Vue.prototype.$isServer) {
    return
  }
  if (!isObject(options)) {
    return
  }

  const requiredProps = ['toastMsg']

  for (let i = 0, j = requiredProps.length; i < j; i++) {
    if (!hasOwnProperty(options, requiredProps[i])) {
      throw Error(`Missed required prop:${requiredProps[i]}`)
    }
  }
  instance = new ToastConstructor({
    data: options
  })
  instance = instance.$mount()
  document.body.appendChild(instance.$el)

  return instance
}

Vue.prototype.$toast = (options) => {
  return Toast(options)
}

export default Toast
