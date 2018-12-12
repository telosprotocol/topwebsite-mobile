<template>
  <div>
    <!--banner-->
    <div class="header">
      <swiper class="swiper swiper-container" :options="swiperOption" ref="mySwiper">
        <swiper-slide><a @click="openVideo"><img src="@/assets/images/banner1.png"></a></swiper-slide>
        <swiper-slide><a href="https://www.topnetwork.org/ambassador" target="_blank"><img src="@/assets/images/banner2.png"></a></swiper-slide>
        <swiper-slide><a href="https://bitcointalk.org/index.php?topic=5070267.msg47953223#msg47953223" target="_blank"><img src="@/assets/images/banner3.png"></a></swiper-slide>
        <swiper-slide><a href=" https://www.eventbrite.com/e/wdas-x-dorahacks-hacker-arena-tickets-51641231313" target="_blank"><img src="@/assets/images/banner4.png"></a></swiper-slide>
        <swiper-slide><a href="https://www.topnetwork.org/testnet/#/activepage" target="_blank"><img src="@/assets/images/banner5.png"></a></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <transition name="fade">
        <div class="video_area" v-if="show_video">
          <div class="close_btn" @click="closeVideo()"></div>
          <video-player class="video-player-box" :playsinline="true" :options="playerOptions" @ended="closeVideo($event)"></video-player>
        </div>
      </transition>
      <!-- <div class="header-title">Cloud Communication Services On Blockchain</div>
      <div class="header-info">World's first decentralized open communication network powered by blockchain 4.0 technology</div>
      <img src="@/assets/images/summaryBtn.png" class="summaryBtn" @click="OpenPDF()"> -->
    </div>
    <!-- banner end-->
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'Header',
  data () {
    return {
      show_video: false,
      playerOptions: {
        autoplay: 'any',
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'static/4.mp4'
        }]
      },
      swiperOption: {
        direction: 'horizontal',
        mousewheel: false,
        slidesPerView: 1,
        allowTouchMove: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        loop: true,
        speed: 300,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {
    videoPlayer,
    swiper,
    swiperSlide
  },
  methods: {
    OpenPDF () {
      this.$ga.event('viewPdf', 'click', 'bootBtn')
      window.open('https://www.topnetwork.org/?action=view', '_blank')
    },
    openVideo () {
      this.$ga.event('video', 'click', 'openVideo')
      this.show_video = true
    },
    closeVideo () {
      this.$ga.event('video', 'click', 'closeVideo')
      this.show_video = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .header{
    width: 100%;
    // padding:1.4rem 0 1rem 0;
    // background-color: #041126;
    // background: url('../../../assets/images/background.png') no-repeat;
    // background-position: 0px 0px;
    // background-size: 100% 100%;
    .swiper{
      width:100%;
      a{
        display: block;
        width: 100%;
        img{
          width: 100%;
        }
      }
    }
    .demovideo{
      width:3.57rem;
      height:0.93rem;
    }
    .video_area{
      height: 100%;
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 999;
      .video-player-box{
        height: 100%;
        width: 100%;
      }
      .close_btn{
        height: .64rem;
        width: .64rem;
        position: absolute;
        right: .62rem;
        top: .32rem;
        background-image: url('../../../assets/images/close.png');
        background-size: 100%;
        background-repeat: no-repeat;
        z-index: 1000;
      }
    }
    .video-player-box /deep/ .video-js{
      height: 100%;
      width: 100%;
    }
    .video-player-box /deep/ .vjs-big-play-button{
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    .swiper-pagination-bullets /deep/ .swiper-pagination-bullet{
        background:#8A9FAF;
      }
     .swiper-pagination-bullets /deep/ .swiper-pagination-bullet-active{
       background: #ffffff;
     }
    .header-title{
      width:7.75rem;
      font-size:0.67rem;
      font-family:Cera Pro;
      font-weight:bold;
      line-height:0.8rem;
      color:rgba(255,255,255,1);
      margin: 0 auto;
    }
    .header-info{
      width:7.89rem;
      height:2rem;
      font-size:0.48rem;
      font-family:Cera Pro;
      font-weight:400;
      line-height:0.67rem;
      color:rgba(138,159,175,1);
      margin:1rem auto 1rem auto;
    }
    .summaryBtn{
      width:5.23rem;
      height:0.93rem;
      margin:0 auto;
    }
  }
</style>
