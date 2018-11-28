// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'vue-layer-mobile/need/layer.css'
import layer from 'vue-layer-mobile'
import VueAnalytics from 'vue-analytics'
import router from './router/index.js'
import '@/assets/icon/iconfont.css'
import '@/assets/css/border.css'
import '@/assets/css/reset.css'
Vue.use(layer)

Vue.config.productionTip = false
Vue.use(VueAnalytics, {
    id: 'UA-122476824-1'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
})