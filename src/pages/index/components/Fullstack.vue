<template>
  <div>
    <!-- fullstack区域 -->
    <div class="fullstack">
      <div class="fullstack-title">Full-Stack Decentralized Cloud Communication Services</div>
      <ul class="fullstack-list">
        <li><img src="@/assets/images/vpn.png" ></li>
        <li class="endmarright"><img src="@/assets/images/voip.png" ></li>
        <li><img src="@/assets/images/video.png" ></li>
        <li class="endmarright"><img src="@/assets/images/lot.png" ></li>
        <li><img src="@/assets/images/storage.png" ></li>
        <li class="endmarright"><img src="@/assets/images/message.png" ></li>
        <li class="endmarbottom"><img src="@/assets/images/cdn.png" ></li>
        <li class="endmarbottom endmarright"><img src="@/assets/images/live.png" ></li>
      </ul>
      <img src="@/assets/images/demovideo.png" class="demovideo" @click="openVideo()">
      <transition name="fade">
        <div class="video_area" v-if="show_video">
          <div class="close_btn" @click="closeVideo()"></div>
          <video-player class="video-player-box" :playsinline="true" :options="playerOptions" @ended="closeVideo($event)"></video-player>
        </div>
      </transition>
      <div class="line"></div>
    </div>
    <!-- fullstack区域 end -->
    <!-- TOP chain区域 -->
    <div class="TOPchain">
      <img src="@/assets/images/topchain.png" class="topchain">
      <div class="chaintitle">A high performance blockchain platform for real-world business</div>
      <div class="info-title">Multi-Chain Platform</div>
      <div class="info-detail detail-one-width">Pluggable service chains to meet the complexity of real-world business. Financial settlement is separated from business logic.</div>
      <div class="info-title">High Performance Blockchain</div>
      <div class="info-detail detail-two-width">Book and settle high volume of transactions in real-world business on blockchain.</div>
      <div class="info-title">Three Layers of Distributed Ledgers</div>
      <div class="info-detail detail-three-width">Seamless combination of main chain, service chains and off-chain ledger to store, process, book and settle any volume and any size of real-world business.</div>
      <div class="line"></div>
    </div>
    <!-- TOP chain区域 end-->
    <!-- Core Features-->
    <div class="corefeatures">
      <div class="corefeatures-title">Core Features</div>
      <ul class="corefeatures-list">
        <li>
          <img src="@/assets/images/Lattice.png">
          <div class="image-title">Two-Layer Lattice</div>
        </li>
        <li class="endmarright">
          <img src="@/assets/images/Sharding.png">
          <div class="image-title">Two-Layer Sharding</div>
        </li>
        <li>
          <img src="@/assets/images/VM.png">
          <div class="image-title">Two-Layer VM</div>
        </li>
        <li class="endmarright endmarbottom">
          <img src="@/assets/images/Parallel.png">
          <div class="image-title">High-Speed Parallel</div>
        </li>
        <li>
          <img src="@/assets/images/Transactions.png">
          <div class="image-title">Instant Transactions Zero Fees</div>
        </li>
        <li class="endmarright endmarbottom">
          <img src="@/assets/images/Security.png">
          <div class="image-title">Built-In Security Privacy Protection</div>
        </li>
      </ul>
      <div class="line"></div>
    </div>
    <!-- Core Features end -->
    <div></div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'Fullstack',
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
          src: 'static/video.mp4'
        }]
      }
    }
  },
  components: {
    videoPlayer
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
  .fullstack{
    width: 100%;
    padding: 1.4rem 0 0 0;
    background-color: #041126;
    position: relative;
    .fullstack-title{
      width:7.73rem;
      height:1.23rem;
      font-size:0.53rem;
      font-family:Cera Pro;
      font-weight:400;
      line-height:0.67rem;
      color:rgba(255,255,255,1);
      margin:0 auto;
    }
    .fullstack-list{
      width:8.9rem;
      overflow: hidden;
      margin:1rem auto 1.4rem auto;
      li{
        width:4.27rem;
        height:1.92rem;
        border-radius:2px;
        margin:0 0.16rem 0.16rem 0;
        float: left;
        img{
          display: block;
          width: 100%;
        }
      }
      .endmarright{
        margin-right: 0;
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
    .line{
      width:8.65rem;
      height:0.03rem;
      background:linear-gradient(117deg,rgba(119,187,211,0) 0%,rgba(119,187,211,1) 49%,rgba(119,187,211,0) 100%);
      margin:1.4rem auto 0 auto;
    }
  }
  .TOPchain{
    width: 100%;
    padding-top:1.4rem;
    background-color: #041126;
    .topchain{
      width:3.25rem;
      height: 0.84rem;
      margin:0 auto;
      display: block;
    }
    .chaintitle{
      width:7.57rem;
      height:1.17rem;
      font-size:0.48rem;
      font-family:Cera Pro;
      font-weight:400;
      line-height:0.67rem;
      color:rgba(255,255,255,1);
      margin:1.6rem auto 1.6rem auto;
    }
    .info-title{
      width: 100%;
      text-align: center;
      font-size:0.51rem;
      font-family:Cera Pro;
      font-weight:300;
      color:rgba(119,187,211,1);
      margin-bottom: 1rem;
    }
    .info-detail{
      font-size:0.4rem;
      font-family:Cera Pro;
      font-weight:400;
      line-height:0.6rem;
      color:rgba(138,159,175,1);
      text-align: center;
      margin: 0 auto 1rem auto;
    }
    .detail-one-width{
      width:6.4rem;
    }
    .detail-two-width{
      width:7.32rem;;
    }
    .detail-three-width{
      width:6.64rem;
    }
    .line{
      width:8.65rem;
      height:0.03rem;
      background:linear-gradient(117deg,rgba(119,187,211,0) 0%,rgba(119,187,211,1) 49%,rgba(119,187,211,0) 100%);
      margin:1.4rem auto 0 auto;
    }
  }
  .corefeatures{
    width: 100%;
    padding-top:1.4rem;
    background-color: #041126;
    .corefeatures-title{
      width:100%;
      text-align: center;
      font-size:0.8rem;
      font-family:Cera Pro;
      font-weight:400;
      line-height:0.84rem;
      color:rgba(255,255,255,1);
      margin-bottom:1.6rem;
    }
    .corefeatures-list{
      width:90%;
      overflow: hidden;
      margin:0 auto;
      li{
        margin: 0 1rem 1rem 0;
        width:44%;
        overflow: hidden;
        float: left;
        img{
          float: left;
          width:1.25rem;
          height:1.25rem;
          display: block;
          margin-right: 0.26rem;
        }
        .image-title{
          float: left;
          width:2.41rem;
          font-size:0.4rem;
          font-family:Cera Pro;
          font-weight:400;
          line-height:0.43rem;
          color:rgba(255,255,255,1);
          text-align: left;
        }
      }
      .endmarright{
        margin-right: 0;
      }
      .endbottom{
        margin-bottom:0;
      }
    }
    .line{
      width:8.65rem;
      height:0.03rem;
      background:linear-gradient(117deg,rgba(119,187,211,0) 0%,rgba(119,187,211,1) 49%,rgba(119,187,211,0) 100%);
      margin:1.4rem auto 0 auto;
    }
  }
</style>
