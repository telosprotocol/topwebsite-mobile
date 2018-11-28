<template>
  <div>
    <navbar/>
    <div class="wrapper">
      <div class="warn">Please submit your email address here. We will send the link to our white paper to your email address. </div>
      <input type="email" name="useremail" placeholder="Email" class="email-input" v-model="email">
      <!-- <div class="warn">*A link to our Whitepaper will be sent to submitted email</div> -->
      <div class="submit" @click="submitEmail">Submit</div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
// import Navbar from '@/components/whitepaper/Navbar'
import {getWhitepaper} from '../../../fetch/api'
export default {
  name: 'WhitePaper',
  components: {
    Navbar
  },
  data () {
    return {
      email: ''
    }
  },
  methods: {
    submitEmail () {
      var status = this.checkEmail(this.email)
      let vm = this
      if (status) {
        getWhitepaper(this.email).then(res => {
          this.$layer.dialog({
            content: 'Your email address is successfully submitted. Please check your inbox now.',
            contentClass: 'className',
            btn: ['OK']
          }).then(() => {
            vm.$layer.close()
            vm.$router.push('/')
          })
          this.email = ''
          setTimeout(() => {
            this.$layer.close()
            this.$router.push('/')
          }, 5000)
        }).catch(err => {
          console.log(err)
        })
      }
    },
    checkEmail (s) {
      var regu = /^[A-Za-z0-9]+([._\\-]*[A-Za-z0-9])*@([A-Za-z0-9]+[-A-Za-z0-9]*[A-Za-z0-9]+.){1,63}[A-Za-z0-9]+$/
      var re = new RegExp(regu)
      if (re.test(s)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang='scss' type="text/css" scoped>
// 公共样式
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  a:hover{
    opacity: 0.8;
  }
// 容器内容
  .wrapper{
    .title{
      width: 39%;
      margin:1.38rem auto 0.69rem auto;
      text-align: center;
      height: 0.69rem;
      font-family: Helvetica Neue LT Pro;
      font-size: 0.468rem;
      font-weight: 550;
      font-stretch: normal;
      line-height: 0.69rem;
      letter-spacing: 0rem;
      color: #1f233a;
    }
    .email-input{
      width: 82%;
      margin:0 auto;
      height: 1.04rem;
      padding-left: .34rem;
      font-size: .34rem;
      background-color: #fcfdfe;
      border-radius: 2px;
      border: solid 1px #c7d9e6;
      opacity: .5;
    }
    .warn{
      width: 82%;
      height: 1.04rem;
      margin:2.08rem auto 2.08rem auto;
      text-align: left;
      font-family: Helvetica Neue LT Pro;
      font-size: 0.38rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.48rem;
      letter-spacing: 0rem;
      color: #94b3c4;
    }
    .submit{
      width: 6.58rem;
      height: 1.04rem;
      margin:0 auto;
      color:#fff;
      line-height: 1.04rem;
      text-align:center;
      font-size: .4784rem;
      font-weight: 500;
      background-color: #0c489e;
      border-radius: 4px;
      margin-top: 2.08rem;
    }
  }
</style>
