<template>
  <div v-if="show" class="main">
    <mo-mask></mo-mask>
    <div class="modal">
      <div class="cancel_btn" @click="cancel()"></div>
      <div class="text">For better experience of testing our Testnet, we recommend you
      get a try on your computer:<br> <span class="site">www.topnetwork.org/testnode</span><br>Our mobile version will come very soon!</div>
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
      this.$emit('openNoticeModal')
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.main
  height 100%
  width 100%
  position fixed
  left 0
  top 0
  .modal
    height 360px
    width 85%
    z-index 100
    background #ffffff
    border-radius 6px
    position absolute
    left 50%
    top 45%
    transform translate(-50%,-50%)
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
    .text
      color #000
      text-align center
      height 40%
      width 90%
      position absolute
      top 37%
      left 50%
      transform translate(-50%,-50%)
      font-size 16px
      line-height 24px
    .site
      display inline-block
      margin-top 10px
      margin-bottom 10px
      color #ffb400
</style>
