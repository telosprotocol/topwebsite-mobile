<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { getuserinfo } from '@/api/fetch'
export default {
  name: 'App',
  created() {
    this.setUserInfo()
    this.initCode()
  },
  methods: {
    setUserInfo() {
      let userInfo = localStorage.getItem('userInfoV1')
      if (userInfo) {
        this.$store.commit('SET_USERDATA', JSON.parse(userInfo))
        getuserinfo().then(res => {
          this.$store.commit('SET_USERDATA', res.data)
        }).catch(err => {
          console.log(err)
        })
      }
    },
    getUrlKey(name) {
      try {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [''])[1].replace(/\+/g, '%20')) || null
      } catch (err) {
        return
      }
    },
    initCode() {
      let code = this.getUrlKey('code')
      if (code) {
        this.$store.commit('setCode', code)
      }
    }
  }
}
</script>

<style>
</style>
