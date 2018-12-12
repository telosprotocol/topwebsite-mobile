<template>
  <div class="message">
    <div class="header">
      <div class="title">Wallet</div>
    </div>
    <router-link to="/activepage" tag="div" class="activity">
      Test a transaction to earn 10 TOP tokens and invite friends to earn more >>
    </router-link>
    <!-- <div class="activity">
      Test a transaction &amp; join our Telegram group to claim TOP token rewards!
    </div> -->
    <div class="balance-wrapper">
      <span class="balance">{{ $store.state.user.balance }}</span>
      <span class="token">Test token</span>
      <!-- <img src="@/assets/images/onload.png" class="onload-image" @click="refreshBalance"> -->
      <!--<div class="pop-up">
        <p class="text">Create wallet and receive 100,000,000 test tokens</p>
        <p class="btn">Free to receive ></p>
      </div> -->
    </div>
    <div class="user-message">
      <div class="private">Private key</div>
      <div class="secret-eye">
        <span v-if="pwdType" class="secret">{{ $store.state.user.privateKey }}</span>
        <span v-else class="secret">******************</span>
        <span>
          <img :src="seen?seenImg:unseenImg" class="closeEye" @click="changeType()">
        </span>
        <!-- <span class="secret">****************</span>
        <span><img src="@/assets/images/eye_close.png" class="eye"></span> -->
      </div>
      <div class="public-wrapper">
        <div class="public">Public key</div>
        <div class="public-key">{{ $store.state.user.publicKey }}</div>
      </div>
      <div class="address-wrapper">
        <div class="address-title">Wallet address</div>
        <div class="address">{{ $store.state.user.address }}</div>
      </div>
      <a :data-clipboard-text="$store.state.user.address" class="gotobot" @click="openBot">Submit your wallet address to our Telegram bot and claim your rewards! &nbsp;&nbsp;Go></a>
      <div class="warn">
        Warning: Test token is only used for testnet, it has no value and will be cleared out from your account after test.
      </div>
    </div>
    <div class="btn-wrapper">
      <router-link tag="span" to="/testnet/wallet/send" class="btn send">Send</router-link>
      <span class="btn request" @click="openInvition()">Receive</span>
    </div>
    <invition v-if="showProp"/>
    <see-more v-if="moreShow"/>
    <submit-bot v-if="submitShow"/>
  </div>
</template>

<script>
import Invition from '@/pages/wallet/components/Invition'
import SeeMore from '@/pages/wallet/components/modal/SeeMore'
import SubmitBot from '@/pages/wallet/components/modal/SubmitBot'
import Clipboard from 'clipboard'
export default {
  name: 'Message',
  components: {
    Invition,
    SeeMore,
    SubmitBot
  },
  data() {
    return {
      show: false,
      seen: '',
      seenImg: require('@/assets/images/eye_open.png'),
      unseenImg: require('@/assets/images/eye_close.png'),
      pwdType: false
    }
  },
  computed: {
    showProp() {
      return this.$store.state.top.showProp
    },
    moreShow() {
      return this.$store.state.top.moreShow
    },
    submitShow() {
      return this.$store.state.top.submitShow
    }
  },
  methods: {
    // 密码显示隐藏
    changeType() {
      this.seen = !this.seen
      this.pwdType = !this.pwdType
    },
    refreshBalance() {
      return this.$store.state.user.balance
    },
    openInvition() {
      this.$store.commit('SetShowProp', true)
    },
    openBot() {
      const clipboard = new Clipboard('.gotobot')
      clipboard.on('success', e => {
        this.$toast({
          'toastMsg': 'Copy successfully'
        })
        clipboard.destroy()
      })
      this.$toast({
        'toastMsg': 'Copy successfully'
      })
      // window.location.href = '协议跳转地址://'
      setTimeout(() => {
        window.open('https://t.me/TOPNetworkBot', '_blank')
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .message{
    width:100%;
    .header{
      background:rgba(14,18,74,1);
      width: 100%;
      height:2.75rem;
      line-height: 2.75rem;
    }
    .title{
      width:4rem;
      margin:0 auto;
      text-align:center;
      font-size:1.19rem;
      font-family:SF Pro Display;
      font-weight:400;
      color:rgba(255,255,255,1);
    }
    .activity{
      width:100%;
      padding:0.5rem 1.5rem;
      height:3.25rem;
      background:linear-gradient(270deg,rgba(0,198,183,1) 0%,rgba(23,143,254,1) 100%);
      box-sizing: border-box;
      font-size:0.79rem;
      font-family:SF Pro Display;
      font-weight:400;
      line-height:1rem;
      cursor:pointer;
      color:rgba(255,255,255,1);
      opacity:1;
    }
    .balance-wrapper{
      width:89%;
      margin:0 auto;
      border-bottom:2px solid rgba(0,0,0,0.08);
      position: relative;
      .balance{
        display: inline-block;
        margin:1.5rem 0;
        font-size:1.65rem;
        font-family:SF Pro Display;
        font-weight:bold;
        color:rgba(0,0,0,1);
        opacity:0.8;
      }
      .token{
        display: inline-block;
        margin: 2.5rem 0 1.8rem 0.5rem;
        font-size:0.95rem;
        font-family:SF Pro Display;
        font-weight:400;
        color:rgba(0,0,0,1);
        opacity:0.54
      }
      .onload-image{
        position:absolute;
        right:0;
        top:1.7rem;
        width:2rem;
        height:2rem;
      }

      .pop-up {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 4rem;
        width: 100%;
        padding: 1rem;
        background:linear-gradient(90deg,rgba(23,143,254,1) 0%,rgba(23,143,254,1) 100%);
        border-radius:.2rem;
        box-sizing: border-box;

        p {
          font-size:0.75rem;
          font-weight:400;
          color: #fff;
        }

        .text {
          width: 11rem;
        }

        .btn {
          font-size:0.75rem;
          font-family:SF Pro Display;
          font-weight:bold;
        }

        &:after {
          content: '';
          display: block;
          position: absolute;
          top: -.4rem;
          left: 1rem;
          width: 0;
          height: 0;
          border-left: .5rem solid transparent;
          border-right: .5rem solid transparent;
          border-bottom: .5rem  solid#178FFE;
        }
      }
    }
    .user-message{
      width:89%;
      margin:0 auto;
      .private{
        width:100%;
        font-size:1rem;
        font-family:SF Pro Display;
        font-weight:bold;
        color:rgba(0,0,0,1);
        opacity:0.8;
        margin-top:1rem;
        margin-bottom: .5rem;
      }
      .secret-eye{
        width:100%;
        line-height:1.25rem;
        .secret{
          font-size:.79rem;
          font-family:SF Pro Display;
          font-weight:400;
          color:rgba(68,68,68,1);
          word-break: break-all;
        }
        .closeEye{
          width:1.38rem;
          height:1.25rem;
        }
      }
      .public-wrapper{
        width: 100%;
        margin-top:1rem;
        .public{
          font-size:1rem;
          font-family:SF Pro Display;
          font-weight:bold;
          color:rgba(68,68,68,1);
          margin-bottom:.5rem;
        }
        .public-key{
          width:100%;
          font-size:0.79rem;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(68,68,68,1);
          word-wrap: break-word;
          line-height: 1.25rem;
        }
      }
      .address-wrapper{
        width:100%;
        margin-top:1.2rem;
        .address-title{
          width:100%;
          font-size:1rem;
          font-family:SF Pro Display;
          font-weight:bold;
          line-height:2.25rem;
          color:rgba(68,68,68,1);
        }
        .address{
          width:100%;
          font-size:0.79rem;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(68,68,68,1);
          opacity:1;
          word-wrap:break-word;
        }
      }
      .warn{
        margin:1.6rem 0 1rem 0;
        height:4.35rem;
        background:rgba(247,247,247,1);
        font-size:0.95rem;
        font-family:SF Pro Display;
        font-weight:400;
        line-height:1.15rem;
        color:rgba(255,91,91,1);
        padding: .8rem;
      }
    }
    .btn-wrapper{
      width:89%;
      margin:0 auto;
      margin-bottom: 1rem;
      .btn{
        display: inline-block;
        width:46%;
        height:2.75rem;
        line-height: 2.75rem;
        text-align:center;
        font-size:1.19rem;
        font-family:SF Pro Display;
        font-weight:bold;
        color:rgba(255,255,255,1);
        border:2px solid rgba(23,143,254,1);
        border-radius:4px;
      }
      .send{
        background:rgba(23,143,254,1);
        margin-right:2.5%;
      }
      .request{
        // background: #fff;
        color:rgba(23,143,254,1);
      }
    }
    .gotobot{
      width:89%;
      margin-top:1.43rem;
      // padding-left:1.43rem;
      line-height: 1.25rem;
      font-size:.85rem;
      color:rgba(23,143,254,1);
      display: block;
    }
  }
</style>
