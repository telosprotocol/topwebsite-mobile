<template>
  <div class="page">
    <navbar/>
    <!-- <div class="banner3"></div> -->
    <img src="@/pages/activepage/banner3.png" class="banner3">
    <div class="trans_area">
      <div class="token">Get 10 Tokens Every Day and Even More! </div>
      <!-- <div class="btn" @click="transferBtn()">Make a Transfer</div> -->
      <div class="btn" @click="openNoticeModal()">Send a Transaction</div>
      <div class="token_text">20 tokens for inviting friends to send transactions to your Testnet wallet.</div>
      <div class="invite" @click="openNoticeModal()">Invite Friends to Send Transactions</div>
      <div class="tips_area">
        <div class="title">TIPS</div>
        <div class="text">
          <p>1. Register in our <a href="https://t.me/TOPNetworkBot">Bounty Bot</a> to get at least 100 tokens.</p>
          <p>2. Send test transactions to different wallets to get 10 tokens every day! </p>
          <p>3. Invite friend to the Testnet and send you transactions to get 20 tokens. You can invite up to 15 friends.</p>
          <p>4. If you get token rewards by sending transactions for 7 days in a row, you can get EXTRA 20 tokens. 15 days in a row, you can get EXTRA 50 tokens. 30 days in a row, you can get EXTRA 100 tokens! You will get one extra reward after the activity ends based on how many continuous days you get rewards. </p>
          <p>5.	Special gift will be sent to everyone’s bounty bot account on Thanksgiving Day! Stay tuned!</p>
          <p class="endmargin">6.	TOP Network reserves the right to explain the terms and conditions.</p>
        </div>
      </div>
    </div>
    <!-- <notice-modal :show="showModal" @openNoticeModal="openNoticeModal"></notice-modal> -->
  </div>
</template>

<script>
import Navbar from '@/pages/common/Navbar'
import noticeModal from './noticeModal'
export default {
  components: {
    noticeModal,
    Navbar
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    transferBtn() {
      // this.$router.push('/testnet/wallet')
      window.open('https://www.toptestnet.io/#/login')
    },
    openNoticeModal() {
      // this.showModal = !this.showModal
      this.$router.push('/testnet/wallet')
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@font-face{
  font-family: 'Cera Pro Bold';
  src:url('/static/fonts/CeraProBold.otf')
}
@font-face{
  font-family: 'Cera Pro Medium';
  src:url('/static/fonts/CeraProMedium.otf')
}
@font-face{
  font-family: 'Cera Pro Regular';
  src:url('/static/fonts/CeraProRegular.otf')
}
.page
  width 100%
  min-height 100%
  background-color #061b55
  font-family:Cera Pro !important
  color #fff
  .banner3
    height 18rem
    width 100%
    // background-image url('banner3.png')
    // background-size 100%
    // background-repeat no-repeat
  .trans_area
    width 90%
    margin 0 auto
    .token
      width 100%
      text-align center
      font-size 1.2rem
      font-family 'Cera Pro Medium'
      margin-top 1rem
    .btn
      width 100%
      height 2.25rem
      background-color #ffb400
      border-radius 6px
      text-align center
      line-height 2.25rem
      font-size 1.2rem
      font-family 'Cera Pro Bold'!important
      margin-top 2rem
      .link-color
        color:#fff
    .token_text
      width 100%
      font-size 0.9rem
      line-height 1.2rem
      text-align center
      margin-top 2.5rem
      font-weight:400
    .invite
      font-size 1.2rem
      color #ffc400
      text-decoration underline
      text-align center
      margin-top 1rem
      font-family 'Cera Pro Medium'
      .links
        color #ffc400
  .tips_area
    width 100%
    margin 0 auto
    margin-top 2rem
    .title
      font-size 1.2rem
      font-family 'Cera Pro Medium'
    .text
      line-height 1.2rem
      margin-top 1rem
      padding-bottom 3rem
      font-size 1rem
      p{
        margin-bottom:1.2rem
        font-weight:300
        a{
          color:#FFB400;
          border-bottom:1px solid #FFB400;
        }
      }
      .endmargin{
        margin-bottom:0
      }
</style>
