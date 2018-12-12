import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import top from './modules/top'
import modal from './modules/modal'
// import getters from './getters'
import metrics from './modules/metrics'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    top,
    modal,
    metrics
  }
  // getters: getters
})

export default store
