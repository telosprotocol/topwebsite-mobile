<template>
  <div class="p9">
    <div class="p9_main">
      <div class="title">Contact Us</div>
      <div class="area1">
        <input v-model="email" placeholder="Your Email" class="email_input" :class="{error:errEmail}" type="text" />
        <textarea v-model="message" placeholder="Your Message" class="message_text" ref="message_box"></textarea>
        <div class="btn" @click="addEmailInfo()">Send</div>
        <div class="update_area" @click="swicthCheck()">
          <span class="checkbox" :class="{unsel:!ischeck,sel:ischeck}"></span>
          <span class="text">Receive Update</span>
        </div>
        <div class="email_info">Email:
          <a @click="clickMailTo()" href="mailto:contact@topnetwork.org">contact@topnetwork.org</a>
        </div>
      </div>
    </div>
    <div class="social">
      <div class="item">
        <a class="icon telegram" title="Telegram" target="_blank" @click="clickIcon('Telegram')" href="https://t.me/topnetwork_top"></a>
      </div>
      <div class="item">
        <a class="icon medium" title="Medium" target="_blank" @click="clickIcon('Medium')" href="https://medium.com/@topnetwork"></a>
      </div>
      <div class="item">
        <a class="icon twitter" title="Twitter" target="_blank" @click="clickIcon('Twitter')" href="https://twitter.com/topnetwork_top"></a>
      </div>
    </div>
    <div v-if="redeemcode" class="code">Redeem Code: {{ redeemcode }}</div>
    <div class="footer">
      <div class="footer_main">
        <span class="logo"></span>
        <div class="left_area">
          <span>Copyright © 2018 Telos Foundation
            <br> All rights reserved</span>
          <div class="right_area">
            <div class="text">
              <a @click="clickTermsOfService()">Terms</a>
              <a @click="clickPrivacyPolicy()">Privacy</a>
              <a @click="clickBlog()">Blog</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  addContactInfo,
  getRedeemCode,
  getCookie,
  addCookie
} from '../../../fetch/api'
export default {
  data () {
    return {
      ischeck: true,
      email: '',
      message: '',
      errEmail: '',
      redeemcode: null
    }
  },
  created: function () {
    this.$nextTick(() => {
      if (document.referrer.indexOf('google.com') > 0) {
        let redeemcode = getCookie('redeemcodex')
        if (!redeemcode) {
          getRedeemCode().then((res) => {
            if (res.data.Result === 1) {
              this.redeemcode = res.data.data
              addCookie('redeemcodex', this.redeemcode, 30)
            }
          })
        } else {
          this.redeemcode = redeemcode
        }
      }
    })
  },
  methods: {
    swicthCheck () {
      this.ischeck = !this.ischeck
      let str = this.ischeck ? 'true' : 'false'
      this.$ga.event('checkbox', 'click', 'ReceiveUpdate_' + str)
    },
    addEmailInfo () {
      let isemail = this.checkEmail(this.email)
      if (!isemail) {
        this.errEmail = true
        this.$ga.event('sendBtn', 'click', 'Email_error')
        return false
      }
      if (!this.message || this.message.trim() === '') {
        this.$layer.dialog({
          content: 'Please leave a message so we can better communicate with you.',
          contentClass: 'className',
          btn: ['OK']
        })
        this.errEmail = false
        return false
      }
      this.$ga.event('sendBtn', 'click', 'SendMessageSuccess')
      this.$layer.loading()
      let isUpdate = this.check ? 1 : 0
      addContactInfo(this.email, this.message, isUpdate)
        .then(res => {
          this.$layer.close()
          if (res.data.Result === 1) {
            this.email = ''
            this.message = ''
            this.$layer.dialog({
              content: 'We received your message. Please stay tuned for news from TOP.',
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
      var regu = /^[A-Za-z0-9]+([._\\-]*[A-Za-z0-9])*@([A-Za-z0-9]+[-A-Za-z0-9]*[A-Za-z0-9]+.){1,63}[A-Za-z0-9]+$/
      var re = new RegExp(regu)
      if (re.test(s)) {
        return true
      } else {
        return false
      }
    },
    clickTermsOfService () {
      this.$ga.event('bootBtn', 'click', 'TermsOfService')
    },
    clickPrivacyPolicy () {
      this.$ga.event('bootBtn', 'click', 'PrivacyPolicy')
    },
    clickBlog () {
      this.$ga.event('bootBtn', 'click', 'Blog')
      window.open('https://www.topnetwork.org/blog/', '_blank')
    },
    clickIcon (type) {
      this.$ga.event('bootBtn', 'click', 'Click' + type + '')
    },
    clickMailTo () {
      this.$ga.event('emailLink', 'click', 'ClickMailTo')
    },
    textFocus (type) {
      if (type) {
        this.$refs.message_box.style.top = '4rem'
      } else {
        this.$refs.message_box.style.top = '3.5rem'
      }
    }
  },
  components: {}
}

</script>

<style lang='scss' rel='stylesheet/scss' scoped>
  @mixin bg-image($url) {
    background-image: url("img/"+$url+"@2x.png");
    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
      background-image: url("img/"+$url+"@3x.png");
    }
  }

  .p9 {
    height: 100%;
    width: 100%;
    background-color: #0e1457;
    background-image: url(img/bg10.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .p9_main {
      width: 90%;
      height: 65%;
      top: 3%;
      left: 50%;
      margin-left: -45%;
      position: absolute;
      .title {
        font-size: 2rem;
        color: #fff;
        text-align: center;
        font-weight: 600;
      }
      .area1 {
        width: 100%;
        height: 21rem;
        position: relative;
        margin-top: 1.5rem;
        .email_input {
          height: 3rem;
          width: 100%;
          border: none;
          background-color: #3063c1;
          border-radius: 6px;
          padding-left: 3%;
          color: #fff;
          font-size: 1rem;
          position: absolute;
          left: 0;
          outline: none;
          box-sizing: border-box;
        }
        .error {
          border: 1px solid red;
        }
        .email_input::-webkit-input-placeholder {
          color: #fff;
          font-size: 1rem;
          opacity: 0.7;
        }
        .email_input:-moz-placeholder {
          color: #fff;
          font-size: 1rem;
          opacity: 0.7;
        }
        .email_input::-moz-placeholder {
          color: #fff;
          font-size: 1rem;
          opacity: 0.7;
        }
        .email_input:-ms-input-placeholder {
          color: #fff;
          font-size: 1rem;
          opacity: 0.7;
        }
        .btn {
          background-image: linear-gradient( 90deg,
          #00eaff 0%,
          #0093ff 39%,
          #003cff 100%),
          linear-gradient(#88d4ff, #88d4ff);
          height: 2.5rem;
          line-height: 2.5rem;
          vertical-align: top;
          width: 100%;
          color: #fff;
          text-align: center;
          border-radius: 6px;
          display: inline-block;
          cursor: pointer;
          position: absolute;
          top: 14rem;
          right: 0;
          font-size: 1.2rem;
        }
        .message_text {
          background-color: #3063c1;
          border-radius: 6px;
          height: 10rem;
          width: 100%;
          border: none;
          padding-left: 10px;
          padding-top: 10px;
          color: #fff;
          font-size: 1rem;
          box-sizing: border-box;
          position: absolute;
          left: 0;
          top: 3.5rem;
          resize: none;
          font-family: Arial, Helvetica, sans-serif;
          outline: none;
        }
        .message_text::-webkit-input-placeholder {
          color: #fff;
          font-size: 1rem;
          font-family: Arial, Helvetica, sans-serif;
          opacity: 0.7;
        }
        .message_text:-moz-placeholder {
          color: #fff;
          font-size: 1rem;
          font-family: Arial, Helvetica, sans-serif;
          opacity: 0.7;
        }
        .message_text::-moz-placeholder {
          color: #fff;
          font-size: 1rem;
          font-family: Arial, Helvetica, sans-serif;
          opacity: 0.7;
        }
        .message_text:-ms-input-placeholder {
          color: #fff;
          font-size: 1rem;
          font-family: Arial, Helvetica, sans-serif;
          opacity: 0.7;
        }
        .update_area {
          height: 1.5rem;
          line-height: 1.5rem;
          width: 50%;
          position: absolute;
          bottom: 2.5rem;
          left: 0;
          text-align: left;
          .checkbox {
            display: inline-block;
            height: 1.5rem;
            width: 1.5rem;
            background-size: 100%;
            background-repeat: no-repeat;
          }
          .unsel {
            background-image: url(img/9_box.png);
          }
          .sel {
            background-image: url(img/9_box_sel.png);
          }
          .text {
            color: #fff;
            font-size: 1rem;
            vertical-align: top;
            display: inline-block;
            cursor: default;
            margin-left: 0.4rem;
          }
        }
        .email_info {
          width: 100%;
          position: absolute;
          height: 2rem;
          line-height: 2rem;
          bottom: 0%;
          left: 0;
          text-align: left;
          color: #fff;
          font-size: 1.2rem;
          a {
            color: #0093ff;
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
    .social {
      height: 2rem;
      width: 100%;
      text-align: center;
      position: absolute;
      left: 0%;
      bottom: 10rem;
      font-size: 0;
      .item {
        height: 100%;
        width: 33.33%;
        display: inline-block;
      }
      .icon {
        height: 2rem;
        width: 2rem;
        background-size: 100%;
        background-repeat: no-repeat;
        display: inline-block;
        cursor: pointer;
      }
      .telegram {
        @include bg-image("send");
      }
      .twitter {
        @include bg-image("TwitterIcon");
      }
      .medium {
        @include bg-image("medium");
      }
    }
    .code{
      height: 2rem;
      line-height: 1.8rem;
      color: #fff;
      font-size: 0.8rem;
      text-align: center;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 8rem;
      border-top: 1px solid #203486;
    }
    .footer {
      height: 8rem;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      border-top: 1px solid #203486;
      .footer_main {
        width: 98%;
        height: 100%;
        margin: 0 auto;
        position: relative;
        .logo {
          height: 3rem;
          width: 5rem;
          position: absolute;
          top: 50%;
          left: 4%;
          margin-top: -1.5rem;
          background-image: url(img/9_logo.png);
          background-size: 100%;
          background-repeat: no-repeat;
        }
        .left_area {
          height: 100%;
          width: 70%;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          color: #fff;
          line-height: 1.5rem;
          span {
            display: block;
            font-size: 1rem;
            text-align: left;
            position: absolute;
            left: 0;
            top: 20%;
          }
        }
        .right_area {
          position: absolute;
          left: 0;
          bottom: 20%;
          .text {
            color: #3ad7fe;
            font-size: 1rem;
            text-align: left;
            display: inline-block;
            a {
              margin-right: 3em;
            }
          }
        }
      }
    }
  }

</style>
