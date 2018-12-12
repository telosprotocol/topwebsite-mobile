<template>
  <div class="entry">
    <img src="@/assets/images/carousel1.png" class="carouselImage">
    <div class="goto">
      <div class="title">Start Testnet</div>
      <router-link to="/testnet/wallet" tag="div" class="wallet-entry">Wallet · Get free test token</router-link>
      <!-- <div class="wallet-entry endmargin">Explorer</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entry'
}
</script>

<style lang="scss" scoped>
  .entry{
    width:100%;
    // height:13.13rem;
    background:rgba(15,20,87,1);
    opacity:1;
    position: relative;
    .carouselImage{
      width:80%;
      padding-left:1.22rem;
      opacity:0.28;
    }
    .goto{
      position: absolute;
      width:89%;
      // height:13rem;
      left:1.22rem;
      top:0;
      padding-bottom: 2rem;
      .title{
        width:100%;
        text-align:center;
        margin:2.22rem 0;
        font-size:2rem;
        font-family:SF Pro Display;
        font-weight:bold;
        color:rgba(255,255,255,1);
        opacity:1;
      }
      .wallet-entry{
        width:100%;
        height:2.75rem;
        background:rgba(243,199,89,1);
        opacity:1;
        border-radius:4px;
        font-size:1rem;
        font-family:SF Pro Display;
        font-weight:400;
        line-height:2.75rem;
        text-align:center;
        color:rgba(255,255,255,1);
        opacity:1;
        margin-bottom:1rem;
      }
      .endmargin{
        margin-bottom: 0;
      }
    }
  }
</style>
