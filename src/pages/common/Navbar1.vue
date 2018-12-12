<template>
  <div class="navbar">
    <img src="@/assets/images/logo.png" class="logo">
    <img src="@/assets/images/navbar.png" class="navbar-image" @click="show=!show">
    <div v-if="show" class="wrapper">
      <img src="@/assets/images/close.png" class="close-image" @click="show=!show">
      <ul class="routerItem">
        <li>
          <a href="https://www.topnetwork.org/redeem">
            <div class="path">Reedem Tokens</div>
            <div class="rightarrow">&gt;</div>
          </a>
        </li>
        <router-link to="/" tag="li">
          <div class="path">Testnet</div>
          <div class="rightarrow">&gt;</div>
        </router-link>
        <!-- <router-link to="/testnet/wallet" tag="li">
          <div class="path">Wallet</div>
          <div class="rightarrow">&gt;</div>
        </router-link>
        <li>
          <a href="https://www.toptestnet.io/#/testnet/explorer">
            <div class="path">Explorer</div>
            <div class="rightarrow">&gt;</div>
          </a>
        </li>
        <router-link to="/activepage" tag="li">
          <div class="path">Testnet bounty</div>
          <div class="rightarrow">&gt;</div>
        </router-link> -->
        <li>
          <a href="https://www.topnetwork.org/submitemail">
            <div class="path">Whitepaper</div>
            <div class="rightarrow">&gt;</div>
          </a>
        </li>
        <li>
          <a href="https://www.topnetwork.org/pdf">
            <div class="path">Executive Summary</div>
            <div class="rightarrow">&gt;</div>
          </a>
        </li>
        <li>
          <a href="https://www.topnetwork.org/faq">
            <div class="path">FAQ</div>
            <div class="rightarrow">&gt;</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar{
    width: 100%;
    height: 3rem;
    background-color: #062061;
    .logo{
      float: left;
      width:6.5rem;
      margin:.8rem;
    }
    .navbar-image{
      float: right;
      width: 1rem;
      height:1rem;
      margin:1rem;
    }
    .wrapper{
      width: 100%;
      height:100%;
      position: fixed;
      left:0;
      top:0;
      background: #1F233A;
      z-index:1000;
      .close-image{
        position: absolute;
        right:2rem;
        top:2rem;
        width:2rem;
        height:2rem;
      }
      .routerItem{
        margin:6rem auto 9rem auto;
        width:91%;
        li{
          width:100%;
          height:3rem;
          font-family: Helvetica Neue LT Pro;
          font-size: 0.875rem;
          font-weight: normal;
          font-stretch: normal;
          line-height: 3rem;
          letter-spacing: 0rem;
          color: #ffffff;
          border-bottom:1px solid  #293650;
          a{
            width:100%;
            height:3rem;
            color:#fff;
          }
          .path{
            float: left;
            width: 88%;
          }
          .rightarrow{
            float:left;
            width:12%;
            text-align:center;
            font-size:1.5rem;
            color:#455a75;
          }
        }
        .about{
          border-bottom:1.5px solid  #293650;
          padding-left:0;
          .aboutarrow{
            text-align:right;
          }
        }
        .Testnet{
          color:#ffc400;
          padding-left:0;
        }
        .whitepaper{
          color:#ffc400;
          padding-left:0;
        }
        .FAQ{
          padding-left:0;
        }
      }
    }
  }
</style>
