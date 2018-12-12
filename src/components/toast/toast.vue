<template>
  <div v-show="show" class="toast">
    <span class="toastMask">
      {{ toastMsg }}
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      destroy: false,
      show: true,
      toastMsg: ''
    }
  },
  created() {
    const that = this
    setTimeout(() => {
      that.destroyElement()
    }, 3000)
  },
  methods: {
    destroyElement() {
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.toast
  position fixed
  top 0
  bottom 0
  right 0
  left 0
  margin auto
  z-index 2147483647
  height 100%
  line-height 30px
  .toastMask
    padding 1.43rem
    display inline-block
    font-size:.85rem
    text-align:center
    width:80%
    color #fff
    border-radius 8px
    background-color rgba(0, 0, 0, 0.7)
    position absolute
    left 50%
    top 40%
    transform translateX(-50%)
</style>
