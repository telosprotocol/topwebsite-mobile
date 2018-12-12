import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Index'
import Testnet from '@/pages/testnet/Testnet'
import Wallet from '@/pages/wallet/Wallet'
import Send from '@/pages/wallet/components/Send'
// import activepage from '@/pages/activepage/activepage'
import activepage from '@/pages/activepage/activepage'

// import Invition from '@/pages/Invition/Invition'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: 'testnet',
  routes: [{
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Testnet',
    component: Testnet
  },
  {
    path: '/testnet/wallet',
    name: 'Wallet',
    component: Wallet

  },
  {
    path: '/testnet/wallet/send',
    name: 'Send',
    component: Send
  },
    // {
    //   path: '/activepage',
    //   component: activepage
    // },
    // {
    //   path: '/',
    //   name: 'activepage',
    //   component: activepage
    // },
  {
    path: '/activepage',
    name: 'activepage',
    component: activepage
  }
  ]
})
