// import { login, logout, getInfo } from '@/api/login'
import { loginEx } from '@/api/fetch'
import _this from '../../main.js'
// import { getToken } from '@/utils/auth'

const user = {
  state: {
    balance: 0,
    uid: 0
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USERDATA: (stat, userData) => {
      for (var prop in userData) {
        stat[prop] = userData[prop]
      }
      for (var dataprop in userData.data) {
        stat[dataprop] = userData.data[dataprop]
      }
      stat.balance = (userData.data.balance / 1000000).toFixed(3)
      localStorage.setItem('userInfoV1', JSON.stringify(userData))
    },
    SET_USER_PROP: (stat, prop) => {
      stat.alias = prop
    },
    REMOVE_USERDATA: (stat, data) => {
      for (var prop in stat) {
        delete stat[prop]
      }
    },
    SETBALANCE: (state, status) => {
      state.balance = Number(status / 1000000).toFixed(3)
    },
    SETLASTHASH: (state, status) => {
      state.lasthash = status
    }
  },
  actions: {
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginEx(userInfo).then(response => {
          commit('SET_USERDATA', response.data)
          console.log(response.data)
          localStorage.setItem('userInfoV1', JSON.stringify(response.data))
          _this.$router.push('/testnet/wallet')
          localStorage.removeItem('code')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    Relogin({ commit }, userInfo) {
      commit('REMOVE_USERDATA', userInfo)
      _this.$router.push('/login')
    }
  }
}

export default user
