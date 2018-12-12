import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import ambassador from '@/pages/ambassador/Index'
import event from '@/pages/event/Index'
import policy from '@/pages/policy/Index'
import terms from '@/pages/terms/Index'
import faq from '@/pages/faq/Index'
import pdf from 'components/pdf/pdf'
// import faq from 'components/faq/faq'
// import redeem from 'components/redeem/redeem'
import redeem from '@/pages/redeem/Index'
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
    path: '/event',
    name: 'event',
    component: event
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
  },
  {
    path: '/policy',
    name: 'policy',
    component: policy
  },
  {
    path: '/terms',
    name: 'terms',
    component: terms
  }
  ]
})
