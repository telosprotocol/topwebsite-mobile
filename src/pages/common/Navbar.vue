<template>
  <div>
    <div class="header">
      <img src="@/assets/images/logo.png" class="logo">
      <div class="mobile"></div>
      <a :class="{active:showNav}" class="nav_toggle" @click="navToggle()">
        <div class="bars">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </a>
      <div :style="{'height':showNav ? '100%' : '0px'}" class="mobile_menu">
        <ul>
          <li @click="openHome">
            <div>HOME</div>
          </li>
          <li @click="showAboutList()">
            <div>ABOUT</div>
            <img src="@/assets/images/xiajiantou.png">
          </li>
          <transition name="fade">
            <ul v-if="aboutShow" class="sencondList">
              <li class="aboutItem fontStyle"><a href="https://www.linkedin.com/company/topnetwork/" target="_blank">TEAM</a></li>
              <li class="aboutItem fontStyle" @click="OpenAmbassador()">AMBASSADORS</li>
              <li class="aboutItem fontStyle"><a href="https://medium.com/top-network/top-network-unveils-advisory-board-zoom-founder-eric-yuan-former-fico-ceo-mark-greene-roger-lim-6f005a135d9c" target="_blank">ADVISORS</a></li>
              <li class="fontStyle" @click="OpenFAQ">FAQ</li>
            </ul>
          </transition>
          <li @click="showTestnetList()">
            <div>TESTNET</div>
            <img src="@/assets/images/xiajiantou.png">
          </li>
          <transition name="fade">
            <ul v-if="testnetShow" class="sencondList">
              <li class="aboutItem" @click="OpenTestBounty()">TESTNET BOUNTY</li>
              <li class="aboutItem fontStyle" @click="OpenTestnet()">TOP TESTNET</li>
              <li :class="[navbarPath==='/testnet/wallet'?'hideStyle':'showStyle']" class="fontStyle" @click="OpenWallet()">WALLET</li>
            </ul>
          </transition>
          <li @click="showWhiteList()">
            <div>WHITEPAPER</div>
            <img src="@/assets/images/xiajiantou.png">
          </li>
          <transition name="fade">
            <ul v-if="whiteShow" class="sencondList">
              <li class="aboutItem fontStyle" @click="OpenWhite()">WHITEPAPER</li>
              <li class="fontStyle" @click="OpenPDF()">EXECUTIVE SUMMARY</li>
            </ul>
          </transition>
          <li :class="[bountyList.length?'':'bountyStyle']" @click="showBountyList()">
            <div>BOUNTY</div>
            <img src="@/assets/images/xiajiantou.png">
          </li>
          <transition name="fade">
            <ul v-if="bountyShow" class="sencondList">
              <li v-for="(item,index) in bountyList" :key="index" :class="[index<length?'aboutItem':'']" @click="OpenBountyUrl(item.url)">{{ item.name }}</li>
            </ul>
          </transition>
          <li @click="OpenRedeem()">
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
import { getEventBanner } from '../../api/fetch'
export default {
  name: 'Navbar',
  data() {
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
    navbarPath() {
      return this.$route.path
    },
    length() {
      return this.bountyList.length - 1
    }
  },
  mounted() {
    this.scrollReveal.reveal('.mobile', {
      duration: 500,
      delay: 100,
      origin: 'bottom',
      reset: true,
      mobile: true,
      distance: '150px'
    })
  },
  created() {
    let action = this.$route.query.action
    if (action && action === 'view') {
      this.$router.push({ path: 'pdf' })
    } else if (action && action === 'faq') {
      this.$router.push({ path: 'faq' })
    } else if (action && action === 'redeem') {
      this.$router.push({ path: 'redeem' })
    } else if (action && action === 'submitemail') {
      this.$router.push({ path: 'submitemail' })
    } else if (action && action === 'ambassador') {
      this.$router.push({ path: 'ambassador' })
    }
    this.getBountySec()
  },
  methods: {
    // 导航栏bounty二级菜单
    getBountySec() {
      getEventBanner(-1).then(res => {
        this.bountyList = res.data.bounty
      }).catch(res => {
        console.log('获取bounty失败')
      // getLocalBannerData().then(res => {
      //   this.bountyList = res.data.data.bounty
      // })
      })
    },
    // 导航栏bounty二级打开链接
    OpenBountyUrl(bountyUrl) {
      window.open(bountyUrl, '_blank')
    },
    showAboutList() {
      this.aboutShow = !this.aboutShow
    },
    showTestnetList() {
      this.testnetShow = !this.testnetShow
    },
    showWhiteList() {
      this.whiteShow = !this.whiteShow
    },
    showBountyList() {
      this.bountyShow = !this.bountyShow
    },
    openHome() {
      window.open('https://www.topnetwork.org', '_self')
    },
    OpenPDF() {
      window.open('https://www.topnetwork.org/?action=view', '_blank')
    },
    OpenBounty() {
      window.open('https://bitcointalk.org/index.php?topic=5070267.msg47953223#msg47953223', '_blank')
    },
    OpenGuide() {
      window.open('https://medium.com/@topnetwork/top-network-bounty-campaign-released-2a3e9a9f1e65', '_blank')
    },
    OpenANN() {
      window.open('https://bitcointalk.org/index.php?topic=5049339.msg46994432#msg46994432', '_blank')
    },
    OpenLimitedTime() {
      window.open('https://medium.com/top-network/weekly-limited-time-bounty-offer-6-on-up-to-130-tokens-for-grab-a7247324f7da', '_blank')
    },
    clickToBlog() {
      this.$ga.event('ClickBlogTop', 'click', 'bootBtn')
      window.open('https://www.topnetwork.org/blog/', '_blank')
    },
    OpenFAQ() {
      window.open('https://www.topnetwork.org/?action=faq', '_blank')
      // this.$router.push('/faq')
    },
    OpenTestBounty() {
      this.$router.push('/activepage')
    },
    OpenTestnet() {
      this.$router.push('/')
    },
    OpenWallet() {
      this.$router.push('/testnet/wallet')
    },
    OpenRedeem() {
      window.open('https://www.topnetwork.org/redeem', '_self')
    },
    OpenWhite() {
      window.open('https://www.topnetwork.org/submitemail', '_self')
    },
    OpenAmbassador() {
      window.open('https://www.topnetwork.org/ambassador', '_self')
    },
    navToggle() {
      this.showNav = !this.showNav
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
    position: fixed;
    top:0;
    height: 3.11rem;
    background-color: #030C20;
    z-index:5000;
  }
  .jiange{
    height: 3.11rem;
  }
  .logo{
    position: absolute;
    top: .78rem;
    left: 2.34rem;
    z-index: 1000;
    width:9.04rem;
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
    margin-left: -17.5rem;
  }
  .nav_toggle{
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 50%;
    border:2px solid #fff;
    position: absolute;
    top: .58rem;
    right: 2.34rem;
    z-index: 120;
  }
  .bar{
    width: 1.05rem;
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
    overflow:scroll;
    position: fixed;
    top: 7%;
    left: 0%;
    z-index: 100;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out;
    ul{
      padding: 0;
      margin: 0;
      // margin-top: 3.11rem;
      li{
        border-bottom: 1px solid #fff;
        margin: 0 2.34rem;
        height: 3.23rem;
        line-height:3.23rem;
        list-style: none;
        display: flex;
        justify-content:space-between;
        align-items: center;
        font-size:0.93rem;
        font-family:Cera PRO;
        div{
          font-size:0.93rem;
          font-family:Cera PRO;
          color:rgba(255,255,255,1);
        }
        a{
          color:rgba(255,255,255,1);
          display: block;
          font-size:0.93rem;
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
          width:3.49rem;
          font-size:0.93rem;
          font-family:Cera PRO;
          color:rgba(255,255,255,1);
        }
        a{
          color:rgba(255,255,255,1);
          display: block;
          font-size:0.93rem;
        }
      }
      .hideStyle{
        display: flex;
        justify-content:space-between;
        align-items: center;
        display: none;
        div{
          width:3.49rem;
          font-size:0.93rem;
          font-family:Cera PRO;
          color:rgba(255,255,255,1);
        }
        a{
          color:rgba(255,255,255,1);
          display: block;
          font-size:0.93rem;
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
        .fontStyle{
          font-weight: 300;
        }
      }
    }
  }
  .mobile_menu::-webkit-scrollbar {width: 0;}
</style>
