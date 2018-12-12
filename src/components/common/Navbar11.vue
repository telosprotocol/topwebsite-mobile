<template>
  <div class="navbar">
    <img src="@/assets/images/logo.png" class="logo">
    <img src="@/assets/images/navbar.png" class="navbar-image">
    <div class="wrapper" v-if="!show">
      <img src="@/assets/images/close.png" class="close-image">
      <ul class="routerItem">
        <li class="about">
          <div class="path">About</div>
          <div class="rightarrow aboutarrow">&gt;</div>
        </li>
        <li class="Testnet">Testnet</li>
        <router-link to="/testnet/wallet" tag="li">
          <div class="path">Wallet</div>
          <div class="rightarrow">&gt;</div>
        </router-link>
        <li>
          <div class="path">Explorer</div>
          <div class="rightarrow">&gt;</div>
        </li>
        <li>
          <div class="path">Win $1000</div>
          <div class="rightarrow">&gt;</div>
        </li>
        <li>
          <div class="path">Testnet bounty</div>
          <div class="rightarrow">&gt;</div>
        </li>
        <li class="whitepaper">Whitepaper</li>
        <li>
          <div class="path">Whitepaper</div>
          <div class="rightarrow">&gt;</div>
        </li>
        <li>
          <div class="path">Executive Summary</div>
          <div class="rightarrow">&gt;</div>
        </li>
        <li class="FAQ">FAQ</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar{
    width: 100%;
    height: 1.33rem;
    background-color: #030C20;
    .logo{
      float: left;
      width:3.46rem;
      margin:.42rem 0 .42rem 1rem;
      display:block;
    }
    .navbar-image{
      float: right;
      width: .45rem;
      height:0.6rem;
      margin:.36rem 1rem .36rem 0rem;
    }
    .wrapper{
      width: 100%;
      height:100%;
      position: fixed;
      left:0;
      top:0;
      background: #030C20;
      z-index:1000;
      .close-image{
        position: absolute;
        right:1rem;
        top:0.55rem;
        width:0.45rem;
        height:0.45rem;
      }
      .routerItem{
        margin:2rem auto 0rem auto;
        width:8rem;
        li{
          width:100%;
          height:1rem;
          font-family:Cera PRO;
          font-size:0.4rem;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1rem;
          text-align: left;
          font-weight:bold;
          color:rgba(255,255,255,1);
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
          border-top:1.5px solid  #293650;
          color:#ffc400;
          padding-left:0;
        }
        .FAQ{
          border-top:1.5px solid  #293650;
          padding-left:0;
        }
      }
    }
  }
</style>
