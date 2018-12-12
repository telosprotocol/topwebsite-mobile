<template>
  <div>
    <div class="header">
      <img src="@/assets/images/logo.png" class="logo" @click="openHome">
      <div class="mobile"></div>
      <a class="nav_toggle" :class={active:showNav} @click="navToggle()">
      <div class="bars">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </a>
      <div class="mobile_menu" :style="{'height':showNav ? '100%' : '0px'}">
        <ul>
          <li @click="openHome" :class="[navbarPath==='/'?'hideStyle':'showStyle']">
            <div>HOME</div>
          </li>
          <li @click="showAboutList()">
            <div>ABOUT</div>
            <img src="@/assets/images/xiajiantou.png">
          </li>
          <transition name="fade">
            <ul class="sencondList" v-if="aboutShow">
              <li class="aboutItem fontStyle"><a href="https://www.linkedin.com/company/topnetwork/" target="_blank">TEAM</a></li>
              <li @click="OpenAmbassador()" class="aboutItem fontStyle" :class="[navbarPath==='/ambassador'?'hideStyle':'showStyle']">AMBASSADORS</li>
              <li class="fontStyle" :class="[navbarPath==='/faq'?'':'aboutItem']"><a href="https://medium.com/top-network/top-network-unveils-advisory-board-zoom-founder-eric-yuan-former-fico-ceo-mark-greene-roger-lim-6f005a135d9c" target="_blank">ADVISORS</a></li>
              <li @click="OpenFAQ" class="fontStyle" :class="[navbarPath==='/faq'?'hideStyle':'showStyle']">FAQ</li>
            </ul>
          </transition>
          <li @click="showTestnetList()">
            <div>TESTNET</div>
            <img src="@/assets/images/xiajiantou.png">
          </li>
          <transition name="fade">
            <ul class="sencondList" v-if="testnetShow">
              <li class="aboutItem fontStyle" @click="OpenTestBounty()">TESTNET BOUNTY</li>
              <li class="aboutItem fontStyle" @click="OpenTestnet()">TOP TESTNET</li>
              <li @click="OpenWallet()" class="fontStyle">WALLET</li>
            </ul>
          </transition>
          <li @click="showWhiteList()">
            <div>WHITEPAPER</div>
            <img src="@/assets/images/xiajiantou.png">
          </li>
          <transition name="fade">
            <ul class="sencondList" v-if="whiteShow">
              <li class="aboutItem fontStyle" @click="OpenWhite()" :class="[navbarPath==='/submitemail'?'hideStyle':'showStyle']">WHITEPAPER</li>
              <li @click="OpenPDF()" class="fontStyle">EXECUTIVE SUMMARY</li>
            </ul>
          </transition>
          <li @click="OpenEvent()" :class="[navbarPath==='/event'?'hideStyle':'showStyle']">
            <div>EVENT</div>
          </li>
          <li @click="showBountyList()" :class="[bountyList.length?'':'bountyStyle']">
            <div>BOUNTY</div>
            <img src="@/assets/images/xiajiantou.png">
          </li>
          <transition name="fade">
            <ul class="sencondList" v-if="bountyShow">
              <li class="fontStyle" @click="OpenBountyUrl(item.url)" v-for="(item,index) in bountyList" :key="index" :class="[index<length?'aboutItem':'']">{{item.name}}</li>
            </ul>
          </transition>
          <li @click="OpenRedeem()" :class="[navbarPath==='/redeem'?'hideStyle':'showStyle']">
            <div>REDEEM</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="jiange"></div>
  </div>
</template>

<script>
import scrollReveal from 'scrollreveal'
import {getEventBanner, getLocalBannerData} from '../../../fetch/api'
export default {
  name: 'Navbar',
  data () {
    return {
      scrollReveal: scrollReveal(),
      showNav: false,
      aboutShow: false,
      testnetShow: false,
      whiteShow: false,
      bountyShow: false,
      bountyList: []
    }
  },
  computed: {
    navbarPath () {
      return this.$route.path
    },
    length () {
      return this.bountyList.length - 1
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
    // 导航栏bounty二级菜单
    getBountySec () {
      getEventBanner(-1).then(res => {
        this.bountyList = res.data.data.bounty
      }).catch(res => {
        getLocalBannerData().then(res => {
          this.bountyList = res.data.data.bounty
        })
      })
    },
    // 导航栏bounty二级打开链接
    OpenBountyUrl (bountyUrl) {
      window.open(bountyUrl, '_blank')
    },
    showAboutList () {
      this.aboutShow = !this.aboutShow
    },
    showTestnetList () {
      this.testnetShow = !this.testnetShow
    },
    showWhiteList () {
      this.whiteShow = !this.whiteShow
    },
    showBountyList () {
      this.bountyShow = !this.bountyShow
    },
    openHome () {
      this.$ga.event('viewHome', 'click', 'bootBtn')
      this.$router.push('/')
    },
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
      window.open('https://medium.com/top-network/weekly-limited-time-bounty-offer-6-on-up-to-130-tokens-for-grab-a7247324f7da', '_blank')
    },
    clickToBlog () {
      this.$ga.event('ClickBlogTop', 'click', 'bootBtn')
      window.open('https://www.topnetwork.org/blog/', '_blank')
    },
    OpenFAQ () {
      this.$ga.event('viewPdf', 'click', 'bootBtn')
      this.$router.push('/faq')
    },
    OpenHome () {
      this.$router.push('/')
    },
    OpenTestBounty () {
      this.$ga.event('viewTestnet', 'click', 'testnet')
      window.open('https://www.topnetwork.org/testnet/#/activepage', '_self')
    },
    OpenTestnet () {
      this.$ga.event('viewTestnet', 'click', 'testnet')
      window.open('https://www.topnetwork.org/testnet/', '_self')
    },
    OpenWallet () {
      this.$ga.event('viewTestnet', 'click', 'wallet')
      window.open('https://www.topnetwork.org/testnet/#/testnet/wallet', '_self')
    },
    OpenRedeem () {
      this.$ga.event('viewRedeem', 'click', 'bootBtn')
      this.$router.push('/redeem')
    },
    OpenWhite () {
      this.$ga.event('viewPdf', 'click', 'bootBtn')
      this.$router.push('/submitemail')
    },
    OpenAmbassador () {
      this.$ga.event('ambassador', 'click', 'bootBtn')
      this.$router.push('/ambassador')
    },
    OpenEvent () {
      this.$ga.event('event', 'click', 'bootBtn')
      this.$router.push('/event')
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
    } else if (action && action === 'ambassador') {
      this.$router.push({path: 'ambassador'})
    } else if (action && action === 'event') {
      this.$router.push({path: 'event'})
    } else if (action && action === 'terms') {
      this.$router.push({path: 'terms'})
    } else if (action && action === 'policy') {
      this.$router.push({path: 'policy'})
    }
    this.getBountySec()
  }
}
</script>

<style lang='scss' type="text/css" scoped>
  .jiange{
    height: 1.33rem;
    background-color: #030C20;
    width:100%;
  }
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
    position: fixed;
    left:0;
    top:0;
    height: 1.33rem;
    background-color: #030C20;
    z-index:5000;
  }
  .logo{
    position: absolute;
    top: .32rem;
    left: 0.8rem;
    z-index: 1000;
    width:3.86rem;
  }
  .mobile {
    // width: 15rem;
    // height: 8.8rem;
    position: absolute;
    // @include bg-image("iPhone_X");
    background-size: 100%;
    background-repeat: no-repeat;
    bottom: 3%;
    left: 50%;
    margin-left: -7.5rem;
  }
  .nav_toggle{
    height: .75rem;
    width: .75rem;
    border-radius: 50%;
    border:2px solid #fff;
    position: absolute;
    top: .25rem;
    right: 1rem;
    z-index: 120;
  }
  .bar{
    width: .45rem;
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
    background: #030C20;
    color: #fff;
    height: 100px;
    transition: height 500ms;
    position: fixed;
    overflow:scroll;
    top: 7%;
    left: 0%;
    z-index: 100;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out;
    ul{
      padding: 0;
      margin: 0;
      // margin-top: 1.33rem;
      li{
        border-bottom: 1px solid rgba(255,255,255,0.8);
        margin: 0 1rem;
        height: 1.38rem;
        line-height:1.38rem;
        list-style: none;
        display: flex;
        justify-content:space-between;
        align-items: center;
        font-size:0.4rem;
        font-family:Cera PRO;
        div{
          font-size:0.4rem;
          font-family:Cera PRO;
          color:rgba(255,255,255,1);
          font-weight: bold;
        }
        a{
          color:rgba(255,255,255,1);
          display: block;
          font-size:0.4rem;
          font-weight: 300;
        }
      }
      .bountyStyle{
        display: none;
      }
      .showStyle{
        display: block;
        display: flex;
        justify-content:space-between;
        align-items: center;
        div{
          font-size:0.4rem;
          font-family:Cera PRO;
          color:rgba(255,255,255,1);
        }
        a{
          color:rgba(255,255,255,1);
          display: block;
          font-size:0.4rem;
        }
      }
      .hideStyle{
        display: flex;
        justify-content:space-between;
        align-items: center;
        display: none;
        div{
          width:1.49rem;
          font-size:0.4rem;
          font-family:Cera PRO;
          color:rgba(255,255,255,1);
        }
        a{
          color:rgba(255,255,255,1);
          display: block;
          font-size:0.4rem;
        }
      }
      .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
      }
      .fade-enter, .fade-leave-to {
        opacity: 0;
      }
      .sencondList{
        margin-top:0;
        .aboutItem{
          border-bottom: 0px;
        }
        li{
          height: 1.08rem;
          line-height: 1.08rem;
        }
        .fontStyle{
          font-weight: 300;
        }
      }
    }
  }
  .mobile_menu::-webkit-scrollbar {width: 0;}
</style>
