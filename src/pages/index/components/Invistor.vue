<template>
  <div class="invistor-roadmap">
    <div class="invistor">
      <div class="invistor-title">Investors</div>
      <img src="@/assets/images/Investors.png" class="Investors-image">
      <div class="line"></div>
    </div>
    <div class="invistor">
      <div class="invistor-title">Roadmap</div>
      <div class="Roadmap-tps">
        <img src="@/assets/images/Roadmap.png" class="Roadmap-image">
        <div class="text">Private Testnet Now <span class="amount">{{tpsNum}}</span> TPS</div>
      </div>
      <a href="https://www.topnetwork.org/testnet/" target="_blank" class="testnet">Join TOP Network Testnet Right Now!</a>
      <img src="@/assets/images/testnetvideo.png" class="testnetvideo-image" @click="openTestnetVideo">
      <transition name="fade">
        <div class="video_area" v-if="showTestnetVideo">
          <div class="close_btn" @click="closeVideo()"></div>
          <video-player class="video-player-box" :playsinline="true" :options="playerOptions"></video-player>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import {getTpsNum} from '../../../../fetch/api'
export default {
  name: 'Invistor',
  data () {
    return {
      tpsNum: '0',
      showTestnetVideo: false,
      playerOptions: {
        autoplay: false,
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'static/testnet.mp4'
        }]
      }
    }
  },
  created () {
    this.refreshTPSNum()
  },
  beforeDestroy () {
    clearInterval(this.tpsId)
  },
  components: {
    videoPlayer
  },
  methods: {
    openTestnet () {
      window.open('https://www.topnetwork.org/testnet', '_blank')
    },
    openTestnetVideo () {
      this.showTestnetVideo = true
    },
    closeVideo () {
      this.showTestnetVideo = false
    },
    getTpsNumInfo () {
      getTpsNum().then(res => {
        if (res.data.Result === 1) {
          this.tpsNum = this.toQfw((res.data.Tps).toString())
        }
      }).catch(res => {
      })
    },
    refreshTPSNum () {
      this.getTpsNumInfo()
      this.tpsId = setInterval(() => {
        this.getTpsNumInfo()
      }, 5000)
    },
    toQfw (str) {
      var re = /(?=(?!(\b))(\d{3})+$)/g
      str = str.replace(re, ',')
      return str
    }
  }
}
</script>

<style lang="scss" scoped>
.invistor-roadmap{
  padding-bottom:2.5rem;
  background-color: #041126;
  .invistor{
    padding-top:1.4rem;
    width:100%;
    position: relative;
    .invistor-title{
      width:100%;
      font-size:0.8rem;
      font-family:Cera Pro;
      font-weight:400;
      margin-bottom: 1.4rem;
      text-align: center;
      color:rgba(255,255,255,1);
    }
    .Investors-image{
      width:84%;
      display: block;
      margin:0 auto;
    }
    .Roadmap-tps{
      position: relative;
      .Roadmap-image{
        width:85%;
        margin:0 auto;
        display: block;
      }
      .text{
        position: absolute;
        right:.5rem;
        top:5.3rem;
        width:3.72rem;
        font-size:0.4rem;
        font-family:Cera Pro;
        font-weight:400;
        line-height:0.53rem;
        color:rgba(255,255,255,1);
        .amount{
          color:#CF9A1F;
        }
      }
    }
    .testnet{
      width:9.09rem;
      font-size:0.53rem;
      font-family:Cera Pro;
      font-weight:300;
      color:rgba(255,255,255,1);
      margin:1rem auto 1rem auto;
      display: block;
      border-bottom: 2px solid #CF9A1F;
      text-align: center;
      padding-bottom: .1rem;
    }
    .testnetvideo-image{
      width:4rem;
      height:0.93rem;
    }
    .line{
      width:8.65rem;
      height:0.03rem;
      background:linear-gradient(117deg,rgba(119,187,211,0) 0%,rgba(119,187,211,1) 49%,rgba(119,187,211,0) 100%);
      margin:1.4rem auto 0 auto;
    }
    .video_area{
      height: 100%;
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 10000;
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
  }
}
</style>
