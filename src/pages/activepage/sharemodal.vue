<template>
  <div v-if="show" class="share_modal">
    <mo-mask></mo-mask>
    <div class="modal_main">
      <div class="title">Increase Your Chance</div>
      <div class="share_area">
        <div class="item" @click="shareToTwitter()">
          <div class="twitter icon"></div>
          <div class="text">Twitter</div>
        </div>
        <!-- <div class="item" @click="shareToFb()">
          <div class="facebook icon"></div>
        </div> -->
        <div class="item" @click="shareToTelegram()">
          <div class="telegram icon"></div>
          <div class="text">Telegram</div>
        </div>
        <!-- <div class="item" @click="shareToMessager()">
          <div class="messager icon"></div>
        </div> -->
      </div>
      <div class="cancel_btn" @click="cancel()"></div>
    </div>
  </div>
</template>

<script>
import Mask from '@/components/mask/mask'
export default {
  components: {
    'mo-mask': Mask
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  methods: {
    cancel() {
      this.$emit('openShareModal')
    },
    shareToTwitter() {
      let shareContent = 'TOP Network @topnetwork_top is recruiting #Testnet nodes! Up to 💰$1000 per node! Only 100 nodes needed! Apply right now👉'
      let shareLink = window.location.href
      let shareUrl = 'https://twitter.com/intent/tweet?text='.concat(encodeURIComponent(shareContent)).concat(
        ' ').concat(encodeURIComponent(shareLink))
      window.open(shareUrl, '_blank')
    },
    shareToFb() {
      let shareContent = 'TOP Network Testnet is launched! Chance to win $1000 for being a Test node. Apply it right now 👉. First come, first served!'
      let shareLink = window.location.href
      let shareUrl = 'http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareLink) + '&t=' + encodeURIComponent(shareContent) + ''
      window.open(shareUrl, '_blank')
    },
    shareToTelegram() {
      let shareContent = 'TOP Network is recruiting Testnet nodes! Up to $1000 per node! Only 100 nodes needed! Click here to apply: 👉.'
      let shareLink = window.location.href
      let shareUrl = 'https://telegram.me/share/url?url=' + encodeURIComponent(shareLink) + '&text=' + encodeURIComponent(shareContent) + ''
      window.open(shareUrl, '_blank')
      // window.location.href = shareUrl
    },
    shareToMessager() {
      // var appid = '331009227654791'
      let shareContent = 'TOP Network is recruiting Testnet nodes! Up to $1000 per node! Only 100 nodes needed! Click here to apply: 👉.'
      let shareLink = window.location.href
      window.open('fb-messenger://share?link=' + encodeURIComponent(shareLink) + '&app_id=' + encodeURIComponent(shareContent))
      let shareUrl = 'fb-messenger://share?link=' + encodeURIComponent(shareLink) + '&app_id=' + encodeURIComponent(shareContent)
      window.location.href = shareUrl
    },
    popupwindow(url, title, w, h) {
      let wLeft = window.screenLeft ? window.screenLeft : window.screenX
      let wTop = window.screenTop ? window.screenTop : window.screenY

      var left = wLeft + (window.innerWidth / 2) - (w / 2)
      var top = wTop + (window.innerHeight / 2) - (h / 2)
      return window.open(url, title,
        'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' +
            w + ', height=' + h + ', top=' + top + ', left=' + left)
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.share_modal
  height 100%
  width 100%
  position fixed
  left 0
  top 0
  .modal_main
    height 40%
    width 70%
    z-index 100
    background #ffffff
    border-radius 6px
    position absolute
    left 50%
    top 50%
    transform translate(-50%,-50%)
    .title
      font-size 1.5rem
      width 100%
      position absolute
      top 2rem
      text-align center
      color #000
    .share_area
      height 60%
      width 90%
      position absolute
      left 50%
      top 66%
      transform translate(-50%,-50%)
      font-size 0
      .item
        height 100%
        width 50%
        display inline-block
        cursor pointer
        position relative
        &:hover
          opacity 0.8
      .icon
        background-size 100%
        background-repeat no-repeat
        height 48px
        width 48px
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
      .text
        font-size:1rem
        color:#000
        position absolute
        top 75%
        left 20%
      .twitter
        background-image url('twitter.png')
      .facebook
        background-image url('facebook.png')
      .telegram
        background-image url('telegram.png')
      .messager
        background-image url('messager.png')
    .cancel_btn
      color #000
      display inline-block
      position absolute
      right 10px
      top 10px
      font-size 16px
      cursor pointer
      background-image url('close.png')
      background-size 100%
      background-repeat no-repeat
      height 20px
      width 20px
</style>
