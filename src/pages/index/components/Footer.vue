<template>
  <div class="footer">
    <div class="email-input">
      <input type="e-mail" class="email" placeholder="Enter your email" v-model="email">
      <img src="@/assets/images/stayimage.png" class="stayimage" @click="addEmailInfo()">
    </div>
    <ul class="link-list">
      <li @click="show=!show">WeChat</li>
      <transition name="fade">
        <img src="@/assets/images/erweima.png" class="wechat" v-if="show">
      </transition>
      <li @click="openMedium">Medium</li>
      <li @click="openTwitter">Twitter</li>
      <li @click="openFace">Facebook</li>
      <li @click="openBlog">Blog</li>
      <li @click="openTelegram">Telegram</li>
    </ul>
    <div class="text">Copyright © 2018 Telos Foundation All rights reserved</div>
    <div class="terms-privacy">
      <span class="terms">Terms Of Service</span>
      <span>|</span>
      <span class="privacy">Privacy Policy</span>
    </div>
  </div>
</template>

<script>
import {addContactInfo} from '../../../../fetch/api'
export default {
  name: 'Footer',
  data () {
    return {
      show: false,
      email: '',
      message: '0',
      errEmail: ''
    }
  },
  methods: {
    openMedium () {
      window.open('https://medium.com/top-network', '_blank')
    },
    openFace () {
      window.open('https://www.facebook.com/topnetworktop/', '_blank')
    },
    openBlog () {
      window.open('https://www.topnetwork.org/blog', '_blank')
    },
    openTwitter () {
      window.open('https://twitter.com/topnetwork_top', '_blank')
    },
    openTelegram () {
      window.open('https://t.me/topnetwork_top', '_blank')
    },
    showpic () {
      this.show = true
    },
    hidepic () {
      this.show = false
    },
    addEmailInfo () {
      let isemail = this.checkEmail(this.email)
      if (!isemail) {
        this.errEmail = true
        this.$ga.event('sendBtn', 'click', 'Email_error')
        return false
      }
      // if (!this.message || this.message.trim() === '') {
      //   this.$layer.dialog({
      //     content: 'Please leave a message so we can better communicate with you.',
      //     contentClass: 'className',
      //     btn: ['OK']
      //   })
      //   this.errEmail = false
      //   return false
      // }
      this.$ga.event('sendBtn', 'click', 'SendMessageSuccess')
      this.$layer.loading()
      // let isUpdate = this.check ? 1 : 0
      const isUpdate = 1
      addContactInfo(this.email, this.message, isUpdate)
        .then(res => {
          this.$layer.close()
          if (res.data.Result === 1) {
            this.email = ''
            this.$layer.dialog({
              content: 'We’ll notify you with the latest news, recent bounties and other activities via this email. Stay tuned!',
              contentClass: 'className',
              btn: ['OK']
            })
          } else if (res.data.Result === 0 && res.data.errorCode === 10001) {
            this.$layer.dialog({
              content: 'Please leave a message so we can better communicate with you.',
              contentClass: 'className',
              btn: ['OK']
            })
            return false
          }
        })
        .catch(() => {
          this.$layer.close()
        })
    },
    checkEmail (s) {
      var regu =
                    /^[A-Za-z0-9]+([._\\-]*[A-Za-z0-9])*@([A-Za-z0-9]+[-A-Za-z0-9]*[A-Za-z0-9]+.){1,63}[A-Za-z0-9]+$/
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

<style lang="scss" scoped>
  .footer{
    width: 100%;
    background-color: #041126;
    padding-bottom: 1rem;
    position: relative;
    .email-input{
      width:8.6rem;
      margin: 0 auto;
      overflow: hidden;
      text-align: center;
      .email{
        width:5.03rem;
        height:0.5rem;
        border: 0;
        border-bottom:1px solid rgba(119,187,211,1);
        color:#415463;
        font-size:0.4rem;
        float: left;
        margin-right:.3rem;
        background: #041126;
        padding-bottom: .3rem;
        padding-left: .1rem;
      }
      .stayimage{
        width:3.15rem;
        height:0.93rem;
      }
    }
    .link-list{
      width:85%;
      margin: 1.8rem auto 0rem auto;
      overflow: hidden;
      li{
        float: left;
        width:33.3%;
        text-align: center;
        text-decoration: underline;
        margin-bottom: 1rem;
        font-size:0.4rem;
        font-family:Arial;
        font-weight:400;
        line-height:0.32rem;
        color:rgba(119,187,211,1);
      }
    .wechat{
        position: absolute;
        width:2rem;
        height: 2rem;
        z-index:1000;
        left:1.2rem;
        top:0.6rem;
      }
    }
    .text{
      width:100%;
      text-align: center;
      font-size:0.35rem;
      font-family:Arial;
      font-weight:400;
      color:rgba(65,84,99,1);
      margin-bottom:0.8rem;
    }
    .terms-privacy{
      width: 100%;
      text-align: center;
      span{
        font-size:0.4rem;
        font-family:Arial;
        font-weight:400;
        color:rgba(65,84,99,1);
        display: inline-block;
        margin-right:0.3rem;
      }
    }
  }
</style>
