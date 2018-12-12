<template>
  <div class="p1">
    <div id="video2_area" class="video-bg">
      <!-- <video id="video2" class="video-tvc2" loop="loop" autoplay="autoplay" src="./img/video.mp4" muted>
                        Your browser does not support the video tag.
                    </video> -->
    </div>
    <!-- <div style="height: 100%;width: 100%;background: transparent;" id="p1_bg"></div> -->
    <div class="logo"></div>
    <div class="p1_slogen">Cloud Communication Services on
      <span class="notice">Blockchain</span>
    </div>
    <!-- <select class="langurage">
      <option value="1">English</option>
    </select> -->
    <!-- <div class="title"></div> -->
    <div class="slogen_area">
      <span>World’s first decentralized open communication network
        <br>powered by blockchain 4.0 technology</span>
    </div>
    <div class="mobile"></div>
    <a class="nav_toggle" :class={active:showNav} @click="navToggle()">
      <div class="bars">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </a>
    <div class="mobile_menu" @touchmove.prevent :style="{'height':showNav ? '100%' : '0px'}">
      <ul>
        <li @click="OpenRedeem()"><a>Redeem Tokens</a><i class="iconfont icon-xiangyou"></i></li>
        <li @click="OpenTestnet()"><a>Testnet</a><i class="iconfont icon-xiangyou"></i></li>
        <li @click="clickToBlog()"><a>Blog</a><i class="iconfont icon-xiangyou"></i></li>
        <li @click="OpenWhite()"><a>Whitepaper</a><i class="iconfont icon-xiangyou"></i></li>
        <li @click="OpenPDF()"><a>Executive Summary</a><i class="iconfont icon-xiangyou"></i></li>
        <li @click="OpenFAQ()"><a>FAQ</a><i class="iconfont icon-xiangyou"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
import scrollReveal from 'scrollreveal'

export default {
  data () {
    return {
      scrollReveal: scrollReveal(),
      showNav: false
    }
  },
  mounted () {
    this.scrollReveal.reveal('.p1_slogen', {
      duration: 500,
      delay: 100,
      origin: 'top',
      reset: true,
      mobile: true,
      distance: '0px'
    })
    this.scrollReveal.reveal('.slogen_area', {
      duration: 500,
      delay: 100,
      origin: 'top',
      reset: true,
      mobile: true,
      distance: '0px'
    })
    this.scrollReveal.reveal('.mobile', {
      duration: 500,
      delay: 100,
      origin: 'bottom',
      reset: true,
      mobile: true,
      distance: '150px'
    })
  },
  methods: {
    OpenPDF () {
      this.$ga.event('topBtn', 'click', 'viewPdf')
      window.open('/pdf', '_blank')
    },
    clickToBlog () {
      this.$ga.event('topBtn', 'click', 'ClickBlog')
      window.open('/blog', '_blank')
    },
    OpenFAQ () {
      this.$ga.event('topBtn', 'click', 'viewFAQ')
      window.open('/faq', '_blank')
    },
    OpenRedeem () {
      this.$ga.event('viewRedeem', 'click', 'bootBtn')
      // window.open(location.href + '?action=redeem', '_blank')
      this.$router.push('/redeem')
    },
    OpenWhite () {
      this.$ga.event('viewPdf', 'click', 'bootBtn')
      // window.open('https://www.topnetwork.org/?action=whitepaper', '_blank')
      this.$router.push('/submitemail')
    },
    OpenTestnet () {
      this.$ga.event('topBtn', 'click', 'ClickTestnet')
      window.open('https://www.topnetwork.org/testnet/', '_blank')
    },
    navToggle () {
      this.showNav = !this.showNav
    }
  },
  created () {
    let action = this.$route.query.action
    if (action && action === 'view') {
      this.$router.push({path: 'pdf'})
    } else if (action && action === 'faq') {
      this.$router.push({path: 'faq'})
    } else if (action && action === 'redeem') {
      this.$router.push({path: 'redeem'})
    } else if (action && action === 'submitemail') {
      this.$router.push({path: 'submitemail'})
    } else if (action && action === 'whitepaper') {
      this.$router.push({path: 'whitepaper'})
    } else if (action && action === 'ambassador') {
      this.$router.push({path: 'ambassador'})
    }
  },
  components: {}
}
</script>

<style lang='scss' type="text/css" scoped>
// @import url(p1_scroll.css);

@mixin bg-image($url) {
  background-image: url("img/"+$url+"@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    background-image: url("img/"+$url+"@3x.png");
  }
}

.p1 {
  height: 100%;
  width: 100%;
  background-color: #0e1457;
  position: relative;
  background-image: url("img/bg1.png");
  background-size: cover;
  background-repeat: no-repeat;
  .video-bg {
    height: 100%;
    width: 100%;
    .video-tvc {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: all 0.3s linear;
    }
    .video-tvc2 {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: all 0.3s linear;
    }
  }
  .mobile {
    width: 15rem;
    height: 8.8rem;
    position: absolute;
    @include bg-image("iPhone_X");
    background-size: 100%;
    background-repeat: no-repeat;
    bottom: 3%;
    left: 50%;
    margin-left: -7.5rem;
  }
  .btn_area{
    font-size: 1rem;
    color: #fff;
    position: absolute;
    left: 50%;
    bottom: 3%;
    transform: translateX(-50%);
    text-align: center;
    .pdf{
      display: inline-block;
    }
    .blog_btn{
      color: #fff;
      text-decoration: none;
    }
  }
  .logo {
    position: absolute;
    top: 2rem;
    left: 1rem;
    width: 14rem;
    height: 4rem;
    display: inline-block;
    @include bg-image("OP-TelosProtocol");
    background-size: 100%;
    background-repeat: no-repeat;
    z-index: 120;
  }

  .p1_slogen {
    width: 98%;
    text-align: center;
    color: #fff;
    font-size: 2rem;
    letter-spacing: 0.125rem;
    position: absolute;
    top: 25%;
    left: 1%;
    font-weight: 600;
    .notice {
      color: #f5c541;
    }
  }
  .slogen_area {
    width: 96%;
    text-align: center;
    position: absolute;
    top: 48%;
    left: 2%;
    font-size: 1.5rem;
    color: #fff;
    letter-spacing: 0.125rem;
    z-index: 100;
    span {
      display: block;
      margin-top: 1rem;
    }
  }
  .langurage {
    position: absolute;
    width: 5.5rem;
    height: 2rem;
    right: 1rem;
    top: 2.5rem;
    border: none;
    color: #fff;
    font-size: 1rem;
    background: url("img/jiant@2x.png") no-repeat scroll right center
      transparent;
    outline: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    padding-right: 0rem;
    option {
      background-color: #0e175a;
      border: none;
    }
  }
  @media screen and (min-width: 401px) and (max-width: 414px) {
  .langurage {
    width: 5rem;
  }
}
}

.nav_toggle{
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border:2px solid #fff;
  position: absolute;
  top: 2rem;
  right: 1rem;
  z-index: 120;
  .bar{
    width: 16px;
    height: 2px;
    background-color: #fff;
    border-radius: 1px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -8px;
    transition: opacity 0.2s linear 0.2s, margin 0.2s linear 0.2s, transform 0.2s linear 0s;
    &:nth-child(1) {
      margin-top: -8px;
    }
    &:nth-child(2) {
      margin-top: -1px;
    }
    &:nth-child(3) {
      margin-top: 5px;
    }
  }
}

.active{
  background-color: #fff;
  .bar:nth-child(1){
    transform: rotate(45deg);
    margin-top: -1px;
    background-color: #07157f;
  }
  .bar:nth-child(2){
    opacity: 0;
  }
  .bar:nth-child(3){
    transform: rotate(-45deg);
    margin-top: -1px;
    background-color: #07157f;
  }
}
.mobile_menu{
  background: #242f41;
  color: #fff;
  height: 100px;
  transition: height 500ms;
  overflow: hidden;
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 100;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
  ul{
    padding: 0;
    margin: 0;
    margin-top: 5.5rem;
    li{
      border-bottom: 1px solid #5c6472;
      margin: 0 16px;
      height: 50px;
      line-height: 50px;
      list-style: none;
      text-align: left;
      position: relative;
      i{
        height: 100%;
        display: inline-block;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
}
</style>
