<template>
  <div class="page">
    <div class="banner1"></div>
    <div class="area1">
      <div class="title">Rewards: <span class="notice_text">$100 - $1000</span> for each node.<br>
        This round we only need 100 nodes.</div>
      <div class="title">How to get rewards?</div>
      <div class="content">1. Contribute a server to our Testnet for a week.<br>
        2. Share the test results on social media.</div>
      <div class="btn_area">
        <div class="text close">{{ closeStr }}</div>
        <div class="btn" @click="registerBtn()">Register Now</div>
        <div class="text share" @click="openShareModal()">Increase Your Chance</div>
        <a v-show="!showDetail" class="more_btn" @click="showDetailDiv()">More Details</a>
      </div>
      <div v-show="showDetail" class="detail_area">
        <div class="item">
          <div class="title"> 1. Server Requirements.</div>
          <div class="content">CentOS 7.x, 4 Core CPU (Minimum 2 Core), 8G Memory (Minimum 4G), 500G Disk (Minimum 100G), 100M Bandwidth, Fixed Public IP Address.</div>
        </div>
        <div class="item">
          <div class="title">2. Increase Your Chance to Win.</div>
          <div class="content">
            <div>You can increase your chance to be selected by</div>
            a) getting more test tokens before application is closed. You can share your wallet address with your friends or TOP Network Telegram group to get more test tokens!
            b) sharing our recruitment drives on social media or participating actively in the conversations in our Telegram group.
          </div>
        </div>
        <div class="item">
          <div class="title">3.  More Rounds Are Coming.</div>
          <div class="content">We will run multiple rounds of recruitment for our Testnet before we roll out the mainnet.
          You will be added automatically to our candidate pool for the next round if you are not selected for this round. </div>
        </div>
        <div class="content list">
          Lists of selected nodes will be released at the end of each round. We reserve the right to explain the terms and conditions.
        </div>
        <img src="@/assets/images/arrowup.png" class="arrowup" @click="showDetail=!showDetail">
      </div>
    </div>
    <div class="banner2"></div>
    <div class="area2">
      <div class="btn" @click="toTransferPage()">Play Together and Earn More</div>
      <span class="text">Invite friends to join the test program to get more tokens.<br>
        Your friends will earn tokens too.</span>
    </div>
    <share-modal :show="showModal" @openShareModal="openShareModal"></share-modal>
  </div>
</template>

<script>
import shareModal from './sharemodal'
export default {
  components: {
    shareModal
  },
  data() {
    return {
      closeStr: 'Close in - Days',
      closeDay: 0,
      showModal: false,
      showDetail: false
    }
  },
  created() {
    this.getDiffDays()
    this.initCode()
    this.setMeta()
  },
  methods: {
    transferBtn() {
    },
    toTransferPage() {
      this.$router.push('/transferpage')
    },
    registerBtn() {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSeRi3Ssdu3Ws5WsH28QPkFemRbm0u8QixHV7pC-fniIzt6RBQ/viewform', '_blank')
      // window.location.href = 'https://docs.google.com/forms/d/1Wyof3VtpR2aV7zNxbAjaaoi0uaRxFgArhw3Tpjl2nBE'
    },
    getTimeByTimeZone(timeZone, type) { // type=1 当前时间；type=2 11-05日时间
      let d = new Date()
      if (type === 2) {
        let arr2 = '2018-11-05 23:59:59'.split(/[- : \/]/)
        d = new Date(arr2[0], arr2[1] - 1, arr2[2], arr2[3], arr2[4], arr2[5]) // 兼容ios的写法，不然获取不到时间戳
      }
      let localTime = Date.parse(d)
      let localOffset = d.getTimezoneOffset() * 60000 // 获得当地时间偏移的毫秒数,这里可能是负数
      let utc = localTime + localOffset // utc即GMT时间
      let offset = timeZone // 时区，北京市+8  美国华盛顿为 -5
      let localSecondTime = utc + (3600000 * offset) // 本地对应的毫秒数
      return Math.floor(localSecondTime / 1000)
    },
    getDiffDays(localSecond) {
      let endTime = this.getTimeByTimeZone(-8, 2)
      let nowTime = this.getTimeByTimeZone(-8, 1)
      let total = Math.floor(endTime - nowTime)
      let days = Math.ceil(total / (24 * 3600))
      this.closeDay = days
      this.closeStr = 'Close in ' + days + ' Days'
      if (days === 1 || days === 0) {
        this.closeStr = 'Close in ' + days + ' Day'
      }
    },
    getUrlKey(name) {
      try {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [''])[1].replace(/\+/g, '%20')) || null
      } catch (err) {
        console.log(err)
      }
    },
    initCode() {
      let code = this.getUrlKey('code')
      if (code) {
        this.$store.commit('setCode', code)
      }
    },
    openShareModal() {
      this.showModal = !this.showModal
    },
    showDetailDiv() {
      this.showDetail = !this.showDetail
    },
    setMeta() {
      var oMeta_title = document.createElement('meta')
      oMeta_title.property = 'og:title'
      oMeta_title.content = 'Get $1000 for being a Test Node'
      document.getElementsByTagName('head')[0].appendChild(oMeta_title)
      var oMeta_des = document.createElement('meta')
      oMeta_des.property = 'og:description'
      oMeta_des.content = 'Apply for TOP Network Testnet node, up to $1000 rewards only 100 test nodes needed. '
      document.getElementsByTagName('head')[0].appendChild(oMeta_des)
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
  background-color #061b55
  font-family 'Cera Pro Regular'
  color #fff
  .banner1
    height 18rem
    width 100%
    background-image url('banner.png')
    background-size 100%
    background-repeat no-repeat
  .area1
    // height 20rem
    width 90%
    margin 0 auto
    .notice_text
      color #ffb400
    .title
      font-size 1rem
      font-family 'Cera Pro Medium'
      color #ffffff
      line-height 1rem
      margin 1.3rem 0
      line-height 1.2rem
    .content
      font-size 0.8rem
      font-family 'Cera Pro Regular'
      line-height 1rem
      margin-top -0.5rem
    .btn_area
      height 12rem
      width 100%
      position relative
      .close
        position absolute
        text-align center
        left 50%
        top 25%
        transform translateX(-50%)
        font-family 'Cera Pro Medium'
      .btn
        width 100%
        height 2.25rem
        background-color #ffb400
        border-radius 6px
        text-align center
        line-height 2.25rem
        font-size 1rem
        font-family 'Cera Pro Bold'
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
      .share
        position absolute
        text-align center
        left 50%
        bottom 25%
        transform translateX(-50%)
        text-decoration underline
        font-family 'Cera Pro Medium'
      .more_btn
        position absolute
        right 0
        bottom 14px
        font-size 0.8rem
        color #fff
        text-decoration underline
      .text
        font-size 1rem
    .detail_area
      transition: all 0.5s ease-in-out;
      .list
        margin-top 2rem
        margin-bottom 3rem
  .banner2
    height 18rem
    width 100%
    background-image url('banner2.png')
    background-size 100%
    background-repeat no-repeat
  .area2
    height 10rem
    width 90%
    margin 0 auto
    position relative
    .btn
      margin-top 2rem
      width 100%
      height 2.25rem
      background-color #ffb400
      border-radius 6px
      text-align center
      line-height 2.25rem
      font-size 1rem
      font-family 'Cera Pro Bold'
    .text
      font-size 0.7rem
      text-align center
      width 100%
      line-height 1.2rem
      display inline-block
      margin-top 2rem
  .arrowup
    margin:0 auto
    width:1.6rem
    margin-bottom:1rem
    display:block
</style>
