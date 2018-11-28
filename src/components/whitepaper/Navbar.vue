<template>
  <div class="header">
      <img src="@/assets/images/logo.png" class="logo">
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
        <li @click="OpenHome()"><a>Home</a><i class="iconfont icon-xiangyou"></i></li>
        <li @click="OpenRedeem()"><a>Redeem Tokens</a><i class="iconfont icon-xiangyou"></i></li>
        <li @click="OpenTestnet()"><a>Testnet</a><i class="iconfont icon-xiangyou"></i></li>
        <li @click="clickToBlog()"><a>Blog</a><i class="iconfont icon-xiangyou"></i></li>
        <li @click="OpenAmbassador()"><a>Ambassadors</a><i class="iconfont icon-xiangyou"></i></li>
        <li @click="OpenPDF()"><a>Executive Summary</a><i class="iconfont icon-xiangyou"></i></li>
        <li @click="OpenBounty()"><a>Bitcointalk  &nbsp;Bounty</a><i class="iconfont icon-xiangyou"></i></li>
        <li @click="OpenGuide()"><a>Bounty &nbsp;Guide</a><i class="iconfont icon-xiangyou"></i></li>
        <li @click="OpenANN()"><a>Bitcointalk  &nbsp;ANN</a><i class="iconfont icon-xiangyou"></i></li>
        <li @click="OpenLimitedTime()"><a>Limited-Time &nbsp;Bounty</a><i class="iconfont icon-xiangyou"></i></li>
        <li @click="OpenFAQ()"><a>FAQ</a><i class="iconfont icon-xiangyou"></i></li>
      </ul>
    </div>
    </div>
</template>

<script>
import scrollReveal from 'scrollreveal'
export default {
  name: 'Navbar',
  data () {
    return {
      scrollReveal: scrollReveal(),
      showNav: false
    }
  },
  mounted () {
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
      this.$ga.event('viewPdf', 'click', 'bootBtn')
      window.open('https://www.topnetwork.org/?action=view', '_blank')
    },
    OpenBounty () {
      window.open('https://bitcointalk.org/index.php?topic=5070267.msg47953223#msg47953223', '_blank')
    },
    OpenGuide () {
      window.open('https://medium.com/@topnetwork/top-network-bounty-campaign-released-2a3e9a9f1e65', '_blank')
    },
    OpenANN () {
      window.open('https://bitcointalk.org/index.php?topic=5049339.msg46994432#msg46994432', '_blank')
    },
    OpenLimitedTime () {
      window.open('https://medium.com/top-network/weekly-limited-time-bounty-offer-3-on-up-to-130-tokens-for-grab-54ffad5d033e', '_blank')
    },
    clickToBlog () {
      this.$ga.event('ClickBlogTop', 'click', 'bootBtn')
      window.open('https://www.topnetwork.org/blog', '_blank')
    },
    OpenFAQ () {
      this.$ga.event('viewPdf', 'click', 'bootBtn')
      window.open('https://www.topnetwork.org/?action=faq', '_blank')
    },
    OpenHome () {
      this.$router.push('/')
    },
    OpenRedeem () {
      this.$ga.event('viewRedeem', 'click', 'bootBtn')
      this.$router.push('/redeem')
    },
    OpenAmbassador () {
      this.$ga.event('ambassador', 'click', 'bootBtn')
      this.$router.push('/ambassador')
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
    } else if (action && action === 'ambassador') {
      this.$router.push({path: 'ambassador'})
    }
  }
}
</script>

<style lang='scss' type="text/css" scoped>
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  a:hover{
    opacity: 0.8;
  }
  .header{
    width:100%;
    position: relative;
    height:1.3rem;
    background:rgba(5,10,59,1);
  }
  .logo{
    position: absolute;
    top: .285rem;
    left: .34rem;
    z-index: 1000;
    width: 4.16rem;
  }
  .mobile {
    width: 5.2rem;
    height: 3.05rem;
    position: absolute;
    // @include bg-image("iPhone_X");
    background-size: 100%;
    background-repeat: no-repeat;
    bottom: 3%;
    left: 50%;
    margin-left: -2.6rem;
  }
  .nav_toggle{
    height: 32px;
    width: 32px;
    border-radius: 50%;
    border:2px solid #fff;
    position: absolute;
    top: .15rem;
    right:.34rem;
    z-index: 120;
  }
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
      margin-top: 1.3rem;
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
