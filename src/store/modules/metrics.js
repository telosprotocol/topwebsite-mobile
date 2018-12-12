import { getMetrics } from '@/api/fetch'
const metrics = {
  state: {
    serverCountData: {
      EDGE: 0,
      CONSENSUS: 0,
      ADVANCE: 0
    },
    servers: [],
    metrics: {
      suc: false,
      ACCOUNT_NUM: 1,
      SHARD_NUM: 0,
      NODES_NUM: 3,
      RECENT_TPS: 0,
      TX_TOTAL_NUM: 1,
      MAX_TPS: 0,
      TX_TIME_AVE: 0,
      TX_TIME_MIN: 0,
      SHARD_MAX_TPS: [],
      SHARD_TX: {}
    }
  },

  mutations: {
    SET_METRICS: (state, metrics) => {
      for (var prop in metrics) {
        state[prop] = metrics[prop]
      }
    }
  },

  actions: {
    // 登录
    GetMetrics({ commit }) {
      return new Promise((resolve, reject) => {
        getMetrics().then(response => {
          const data = response.data
          commit('SET_METRICS', data)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default metrics
