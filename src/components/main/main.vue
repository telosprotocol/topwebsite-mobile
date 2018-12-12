<template>
  <div id="app">
    <p1></p1>
    <p2></p2>
    <p3></p3>
    <p4></p4>
    <p5></p5>
    <p6></p6>
    <p7></p7>
    <p8></p8>
    <tps></tps>
    <p9></p9>
    <div class="horizontal" v-show="isHorizon">
      <span class="icon_phone"></span>
      <span class="text">For your good experience,<br> please operate your phone/tablet vertical screen.</span>
    </div>
  </div>
</template>

<script>
import p1 from 'components/p1/p1'
import p2 from 'components/p2/p2'
import p3 from 'components/p3/p3'
import p32 from 'components/p3/p3_2'
import p4 from 'components/p4/p4'
import p5 from 'components/p5/p5'
import p6 from 'components/p6/p6'
import p7 from 'components/p7/p7'
import p8 from 'components/p8/p8'
import p82 from 'components/p8/p8_2'
import p9 from 'components/p9/p9'
import tps from 'components/tps/tps'

export default {
  name: 'App',
  data () {
    return {
      isHorizon: false
    }
  },
  created () {
    this.$ga.event('index_page', 'view', 'IndexScreenPage')
  },
  mounted () {
    const vm = this
    window.addEventListener(
      'onorientationchange' in window ? 'orientationchange' : 'resize',
      function () {
        if (window.orientation === 90 || window.orientation === -90) {
          // 想把下面的alert换成能够控制v-show的代码
          // alert('123')
          vm.isHorizon = true
        } else {
          vm.isHorizon = false
        }
      },
      false
    )
  },
  computed: {
  },
  methods: {
    slideNext () {
      this.swiper.slideNext()
    },
    slidePrev () {
      this.swiper.slidePrev()
    }
  },
  components: {
    p1,
    p2,
    p3,
    p32,
    p4,
    p5,
    p6,
    p7,
    p8,
    p82,
    p9,
    tps
  }
}

</script>

<style lang='scss' type="text/css" scoped>
  /* @import '../node_modules/swiper/dist/css/swiper.min.css'; */

  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%；;
  }

  .swiper {
    height: 100%;
    width: 100%;
  }

  .horizontal{
    height: 100%;
    width: 100%;
    z-index: 999999;
    background-color:#1e4085;
    position: fixed;
    top: 0;
    left: 0;
    .icon_phone{
      width: 4.68rem;
      height: 7rem;
      background-image: url(../../assets/icon_phone@3x.png);
      background-size: 100%;
      background-repeat: no-repeat;
      display: inline-block;
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%,-50%);
    }
    .text{
      text-align: center;
      color: #fff;
      font-size: 1.5rem;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
    }
  }

</style>
