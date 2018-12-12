<template>
  <div class="login">
    <navbar/>
    <div class="title">Please Login</div>
    <div class="login-item" @click="facebookLogin">
      <img src="@/assets/images/login/facebook.png" class="logoimage">
      <div class="loginapp">Facebook</div>
    </div>
    <div class="login-item google-item" @click="googleLogin">
      <img src="@/assets/images/login/google.png" class="logoimage googleimage">
      <div class="loginapp googleentry">Google</div>
    </div>
    <div v-if="show" class="login-loading">
      <img src="@/assets/images/loading.gif" class="loading-image">
      <div class="loading">loading...</div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/pages/common/Navbar'
import firebase from 'firebase'
export default {
  name: 'Login',
  components: {
    Navbar
  },
  data() {
    return {
      uid: '',
      displayName: '',
      photoURL: '',
      email: '',
      providerId: '',
      accessToken: '',
      show: false
    }
  },
  computed: {
    loginSuc() {
      return this.$store.state.user.uid !== 0
    }
  },
  created() {
    if (this.loginSuc) {
      this.$router.push('/testnet/wallet')
    }
    this.init()
  },
  methods: {
    init() {
      if (localStorage.getItem('show')) {
        this.show = localStorage.getItem('show')
      }
      firebase.auth().getRedirectResult()
        .then(result => {
          const data = result.user.providerData[0]
          this.displayName = data.displayName
          this.uid = data.uid
          this.photoURL = data.photoURL
          this.email = data.email
          this.providerId = data.providerId
          this.accessToken = result.credential.accessToken
          this.$store.dispatch('Login', this.getUserInfo())
          localStorage.removeItem('show')
          localStorage.removeItem('code')
        })
        .catch(error => {
          console.log(error)
          localStorage.removeItem('show')
        })
    },
    getUserInfo() {
      return {
        uid: this.uid,
        displayName: this.displayName,
        photoURL: this.photoURL,
        email: this.email,
        providerId: this.providerId,
        accessToken: this.accessToken,
        federatedId: '',
        code: localStorage.getItem('code')
      }
    },
    // Facebook登录
    facebookLogin() {
      if (this.loginSuc) {
        this.$router.push('/testnet/wallet')
      }
      // this.show = true
      localStorage.setItem('show', true)
      var provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    // google登录
    googleLogin() {
      if (this.loginSuc) {
        this.$router.push('/testnet/wallet')
      }
      // this.show = true
      localStorage.setItem('show', true)
      // this.$router.push('/loading')
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width:100%;
  padding-bottom:100%;
  background:#FBFBFB;
  position: relative;
  .title {
    width: 34%;
    font-family: Helvetica Neue LT Pro;
    font-size: 1rem;
    font-weight: 580;
    font-stretch: normal;
    letter-spacing: 0rem;
    color: #1f233a;
    margin: 4rem auto;
    text-align: center;
  }
  .login-item {
    width: 65%;
    margin: 0 auto;
    height: 3rem;
    background-color: #3b5998;
    border-radius: 4px;
    line-height: 3rem;
    text-align: center;
    .logoimage {
      float: left;
      width: 1rem;
      height: 2rem;
      display: block;
      line-height: 2rem;
      padding-top: 0.5rem;
      padding-left: 2rem;
    }
    .loginapp {
      width: 33%;
      float: left;
      margin-left: 20%;
      font-size: 1rem;
      font-weight: 580;
      font-stretch: normal;
      letter-spacing: 0rem;
      color: #ffffff;
    }
  }
  .google-item {
    margin-top: 2rem;
    background: #fff;
    border: 1px solid #c7d9e6;
    .googleimage {
      width: 2rem;
      height: 2rem;
      padding-left: 1.3rem;
    }
    .googleentry {
      color: #000;
    }
  }
  .login-loading{
    width:66%;
    position: absolute;
    left: 0;
    right: 0;
    top:7rem;
    background: #fff;
    margin-left: auto;
    margin-right: auto;
    .loading-image{
      width:100%;
      position :absolute;
      left: 0;
      right: 0;
      top:2rem;
      margin-left: auto;
      margin-right: auto;
    }
    .loading{
      position:absolute;
      font-size:.85rem;
      left:40%;
      top:8rem;
    }
  }
}
</style>
