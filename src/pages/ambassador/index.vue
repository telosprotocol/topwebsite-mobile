<template>
  <div class="ambassador">
    <navbar/>
    <!--<v-header/>-->
    <div class="am-header">
      <div class="btn-line">
        <button class="btn act-btn" v-on:click="openGoforms"></button>
      </div>
    </div>
    <div class="main-section">
      <div class="big-Tip">
        <p class="tip-content">
          Looking back on the past few months, we are glad to find that we have accomplished so much in our community.
          We have successfully launched our Testnet, built our advisory board and paved the way for the Mainnet coming
          early next year. We continue to grow in the journey towards becoming the high-performance public blockchain
          platform to carry real-world business of any type, size or volume.
        </p>
        <p class="tip-content p-top">
          We want you to become part of our great journey. We want you to hear our voice, make it yours, and spread it
          to more people. Join us now to be TOP Network ambassadors. Together we’ll realize the dream of true
          decentralization.
        </p>
      </div>
      <div class="content-panel">
        <div class="title">
          <p class="title-content">How can you benefit from being a TOP ambassador?</p>
        </div>
        <div class="act-list">
          <p class="act-item">1. Early access to project updates, source code and technical documents.</p>
          <p class="act-item">2. Networking opportunities with TOP Network team, partners, investors and other
            ambassadors.</p>
          <p class="act-item">3. Gain influence as your name will show up on our website and in our communities.</p>
          <p class="act-item">4. <span class="out">Token rewards</span>  based on your contribution.</p>
        </div>
      </div>

      <div class="content-panel">
        <div class="title">
          <p class="title-content">What makes you an ideal TOP Network ambassador?</p>
        </div>
        <div class="act-list">
          <p class="act-item">1. A good understanding of blockchain and cryptocurrency.</p>
          <p class="act-item">2. Enthusiasm about TOP Network – you will introduce this promising project to your community.</p>
          <p class="act-item">3. Influence in online communities or your local crypto circles.</p>
          <p class="act-item">4. Excellent communication skills – you will communicate with community members on behalf of TOP Network.</p>
        </div>
      </div>

      <div class="content-panel">
        <div class="title">
          <p class="title-content">What you need to do as an ambassador?</p>
        </div>
        <div class="act-list">
          <p class="act-item row-margin"><span class="tit">Community</span><br/>Help expand our community globally while increasing your influence within and beyond our community.
          </p>
          <p class="act-item row-margin"><span class="tit">Promotion</span><br/>Spread the name of TOP Network and help others learn more about TOP Network!
          </p>
          <p class="act-item"><span class="tit">Events</span><br/>Represent TOP Network at offline events/meetups. You’re the local voice of TOP Network.</p>
        </div>
      </div>
      <div class="btn-line">
        <button class="btn" v-on:click="openGoforms"></button>
      </div>
    </div>
    <v-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import vHeader from '@/pages/index/components/Header'
import vFooter from '@/pages/index/components/Footer'

export default {
  name: 'Event',
  components: {
    Navbar,
    vHeader,
    vFooter
  },
  data () {
    return {}
  },
  created () {
  },
  updated () {
  },
  methods: {
    openGoforms () {
      window.open('https://goo.gl/forms/U0chLTqEJ8PHQwOG2', '_blank')
    },
    // 回到顶部
    toTop () {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<style scoped>
  .ambassador {
    background: #041126;
  }

  .ambassador .am-header {
    height: 5.333rem;
    background: url(../../assets/images/ambassador/bg1.png) no-repeat;
    -webkit-background-size: contain;
    background-size: cover;
    position: relative;
  }

  .am-header .btn-line {
    text-align: center;
    position: absolute;
    bottom:0.72rem;
    width: 100%;
  }
  .main-section .btn-line {
    text-align: center;
    width: 100%;
  }

  .btn-line .btn {
    background: url(../../assets/images/ambassador/btn1.png) no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    width: 5.4133rem;
    height: 1.0666rem;
    cursor: pointer;
  }

  .btn-line .btn.act-btn {

  }

  .ambassador .main-section {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    /*margin: 0.666rem;*/
    padding: 0.666rem 0.666rem 1.866rem;
    background: url(../../assets/images/ambassador/bg2.png) no-repeat;
    background-position: bottom;
    background-size: contain;
    margin-bottom: 0.8rem;
  }

  .main-section .big-Tip {
    padding: 0 0.2rem 0.5333rem;
    text-align: left;
  }

  .big-Tip .tip-content {
    margin: 0;
    padding: 0;
    color: #E5B882;
    font-size: 0.3466rem;
    line-height: 0.4rem;
    font-family: Cera Pro;
    /*font-weight: 300;*/
  }

  .big-Tip .tip-content.p-top {
    margin-top: 0.5333rem;
  }

  .main-section .content-panel {
    background: #111E31;
    padding: 0.5333rem 0.4rem;
    margin-bottom: 0.5333rem;
  }

  .main-section .content-panel .title {
  }

  .content-panel .title .title-content {
    margin: 0;
    padding: 0;
    font-size: 0.3733rem;
    line-height: 0.4rem;
    font-family: Cera Pro;
    font-weight: 900;
    color: #ffffff;
    text-align: left;
  }

  .content-panel .act-list {
    margin-top: 0.5333rem;
  }

  .content-panel .act-item {
    margin: 0;
    padding: 0;
    font-family: Cera Pro;
    font-weight: 300;
    line-height: 0.4rem;
    font-size: 0.346rem;
    color: #ffffff;
    text-align: left;
  }
  .content-panel .act-item.row-margin{
    margin-bottom: 0.5333rem;
  }
  .content-panel .act-item .tit{
    font-weight: 600;
  }
  .content-panel .act-item .out{
    font-weight: 700;
    color: #E5B882;
  }
</style>
