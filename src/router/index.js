import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import ambassador from '@/pages/ambassador/Index'
import pdf from 'components/pdf/pdf'
import faq from 'components/faq/faq'
import redeem from 'components/redeem/redeem'
import submitemail from 'components/whitepaper/SubmitEmail'
import whitepdf from 'components/pdf/whitepdf'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/pdf',
    name: 'pdf',
    component: pdf
  },
  {
    path: '/faq',
    name: 'faq',
    component: faq
  },
  {
    path: '/redeem',
    name: 'redeem',
    component: redeem
  },
  {
    path: '/submitemail',
    name: 'submitemail',
    component: submitemail
  },
  {
    path: '/whitepaper',
    name: 'whitepaper',
    component: whitepdf
  },
  {
    path: '/ambassador',
    name: 'ambassador',
    component: ambassador
  }
  ]
})
