<template>
  <div class="p2">
    <div class="small_earth" ref="smallearth" :class="{smallearth_scroll:showAnimate}"></div>
    <div class="title_area">
      <div class="p2_title"></div>
      <div class="title_text">
        <span>
          Full-Stack Decentralized
        </span>
        <span>Cloud Communication Services</span>
      </div>
      <div class="paly_area" @click="openVideo()">
        <span class="play_icon"></span>
        <span class="text">Watch a Demo Video</span>
      </div>
    </div>
    <div class="icon_item vpn_position">
      <div class="icon vpn"></div>
      <div class="text vpn_text">VPN</div>
    </div>
    <div class="icon_item VoIP_position">
      <div class="icon voip"></div>
      <div class="text voip_text">VoIP</div>
    </div>
    <div class="icon_item video_position">
      <div class="icon video"></div>
      <div class="text video_text">Video</div>
    </div>
    <div class="icon_item storage_position">
      <div class="icon storage"></div>
      <div class="text storage_text">Storage</div>
    </div>
    <div class="icon_item cdn_position">
      <div class="icon cdn"></div>
      <div class="text cdn_text">CDN</div>
    </div>
    <div class="icon_item Messaging_position">
      <div class="icon messaging"></div>
      <div class="text messaging_text">Messaging</div>
    </div>
    <div class="icon_item live_position">
      <div class="icon live"></div>
      <div class="text2 live_text">Live<br> Streaming</div>
    </div>
    <div class="icon_item iot_position">
      <div class="icon iot"></div>
      <div class="text2 iot_text">IoT Data<br> Sharing</div>
    </div>
    <transition name="fade">
    <div class="video_area" v-if="show_video">
      <div class="close_btn" @click="closeVideo()"></div>
      <video-player class="video-player-box" :playsinline="true" :options="playerOptions" @ended="closeVideo($event)"></video-player>
    </div>
    </transition>
  </div>
</template>

<script>
import scrollReveal from 'scrollreveal'
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

export default {
  data () {
    return {
      scrollReveal: scrollReveal(),
      showAnimate: false,
      show_video: false,
      playerOptions: {
        autoplay: 'any',
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'static/video.mp4'
        }]
      }
    }
  },
  mounted () {
    this.scrollReveal.reveal('.title_area', {
      duration: 500,
      delay: 400,
      origin: 'top',
      reset: true,
      mobile: true,
      distance: '5rem'
    })
    this.scrollReveal.reveal('.vpn_position', {
      duration: 500,
      delay: 400,
      origin: 'bottom',
      reset: true,
      mobile: true,
      distance: '5rem'
    })
    this.scrollReveal.reveal('.video_position', {
      duration: 500,
      delay: 400,
      origin: 'bottom',
      reset: true,
      mobile: true,
      distance: '5rem'
    })
    this.scrollReveal.reveal('.cdn_position', {
      duration: 500,
      delay: 400,
      origin: 'bottom',
      reset: true,
      mobile: true,
      distance: '5rem'
    })
    this.scrollReveal.reveal('.live_position', {
      duration: 500,
      delay: 400,
      origin: 'bottom',
      reset: true,
      mobile: true,
      distance: '5rem'
    })
    this.scrollReveal.reveal('.VoIP_position', {
      duration: 500,
      delay: 400,
      origin: 'bottom',
      reset: true,
      mobile: true,
      distance: '5rem'
    })
    this.scrollReveal.reveal('.storage_position', {
      duration: 500,
      delay: 400,
      origin: 'bottom',
      reset: true,
      mobile: true,
      distance: '5rem'
    })
    this.scrollReveal.reveal('.Messaging_position', {
      duration: 500,
      delay: 400,
      origin: 'bottom',
      reset: true,
      mobile: true,
      distance: '5rem'
    })
    this.scrollReveal.reveal('.iot_position', {
      duration: 500,
      delay: 400,
      origin: 'bottom',
      reset: true,
      mobile: true,
      distance: '5rem'
    })
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      var offsetTop = this.$refs.smallearth.offsetTop
      if (scrollTop < offsetTop) {
        if (scrollTop > offsetTop) {
          this.showAnimate = true
        } else {
          this.showAnimate = false
        }
      } else {
        if (offsetTop + 1100 > scrollTop) {
          this.showAnimate = true
        } else {
          this.showAnimate = false
        }
      }
    },
    openVideo () {
      this.$ga.event('video', 'click', 'openVideo')
      this.show_video = true
    },
    closeVideo () {
      this.$ga.event('video', 'click', 'closeVideo')
      this.show_video = false
    }
  },
  components: {
    videoPlayer
  }
}
</script>

<style lang='scss' type="text/css" scoped>
// @import yurl(p2_scroll.css);
@mixin bg-image($url) {
  background-image: url("img/"+$url+"@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    background-image: url("img/"+$url+"@3x.png");
  }
}
.fade-enter-active,.fade-leave-active{
 transition: opacity 0.3s ease;
}
.fade-enter,.fade-leave-active{
 opacity: 0;
}

.p2 {
  height: 100%;
  width: 100%;
  background-color: #0e1457;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .video-bg {
    height: 100%;
    width: 100%;
    .video-tvc {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: all 0.3s linear;
    }
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
      height: 2rem;
      width: 2rem;
      position: absolute;
      left: 1rem;
      top: 1rem;
      background-image: url(img/close.png);
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
  .small_earth {
    position: absolute;
    height: 18rem;
    width: 14rem;
    @include bg-image("bg2");
    background-size: 100%;
    background-repeat: no-repeat;
    top: 45%;
    left: 50%;
    margin-left: -6rem;
    margin-top: -6rem;
    z-index: 10;
  }
  .title_area {
    position: absolute;
    width: 100%;
    left: 0%;
    top: 11%;
    z-index: 30;
    text-align: center;
    .paly_area{
      width: 90%;
      margin: 1.5rem auto;
      text-align: center;
      cursor: pointer;
      &:hover{
        opacity: 0.8;
      }
      .play_icon{
        height: 1.8rem;
        width: 1.8rem;
        background-image: url(img/play_btn.png);
        background-size: 100%;
        background-repeat: no-repeat;
        display: inline-block;
        margin-right: 0rem;
        vertical-align: middle;
        margin-top: -5px;
      }
      .text{
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: 1.2rem;
        color: #3ad7fe;
        letter-spacing: 1.5px;
        display: inline-block;
      }
    }
    .p2_title {
      width: 16rem;
      height: 4rem;
      margin: 0 auto;
      @include bg-image("OPNetwork");
      background-size: 100%;
      background-repeat: no-repeat;
    }
    .title_text {
      font-size: 1.3rem;
      color: #ffffff;
      line-height: 1rem;
      text-align: center;
      margin-top: 1rem;
      span {
        display: block;
        margin-top: 0.6rem;
      }
    }
  }
  .icon_item {
    height: 2.5rem;
    width: 50%;
    line-height: 2.5rem;
    position: absolute;
    cursor: default;
    z-index: 30;
    text-align: left;
    .icon {
      height: 4rem;
      width: 4rem;
      background-size: 100%;
      background-repeat: no-repeat;
      display: inline-block;
      transition: all 0.2s linear;
      margin-right: 0.3rem;
    }
    .vpn {
      @include bg-image("vpn");
    }
    .voip {
      @include bg-image("voip");
    }
    .video {
      @include bg-image("video");
    }
    .storage {
      @include bg-image("storage");
    }
    .cdn {
      @include bg-image("CDN");
    }
    .messaging {
      @include bg-image("messaging");
    }
    .live {
      @include bg-image("live");
    }
    .iot {
      @include bg-image("sharing");
    }
    .text {
      text-align: left;
      height: 4rem;
      line-height: 4rem;
      display: inline-block;
      color: #fff;
      font-size: 1.1rem;
      vertical-align: top;
    }
    .text2 {
      text-align: left;
      height: 4rem;
      line-height: 4rem;
      display: inline-block;
      color: #fff;
      font-size: 1.1rem;
      line-height: 1.4rem;
      vertical-align: top;
      padding-top: 0.8rem;
    }
  }
  .vpn_position {
    bottom: 50%;
    left: 10%;
  }
  .VoIP_position {
    bottom: 50%;
    left: 50%;
  }
  .video_position {
    bottom: 37%;
    left: 10%;
  }
  .storage_position {
    bottom: 37%;
    left: 50%;
  }
  .cdn_position {
    bottom: 24%;
    left: 10%;
  }
  .Messaging_position {
    bottom: 24%;
    left: 50%;
  }
  .live_position {
    bottom: 11%;
    left: 10%;
  }
  .iot_position {
    bottom: 11%;
    left: 50%;
  }
}

@keyframes smallearth {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.smallearth_scroll {
  animation: smallearth 0.6s ease-in-out 0.2s 1 alternate both;
}
</style>
