<template>
  <div class="mask">
    <div class="window">
      <div class="title">Wallet address</div>
      <div class="address">sdjsncewenmklfkasfdsjfjesnmfn</div>
      <div class="copy-title" @click="showRequest=!showRequest">Copy address</div>
      <div class="warn">*Copy the wallet address and send it to payor</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Request',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .mask{
    position: fixed;
    left:0;
    top:0;
    width:100%;
    height: 100%;
    background:rgba(0,0,0,.45);
    z-index:999;
    .window{
      width:89%;
      position: fixed;
      left:5.5%;
      top:11rem;
      background: #fff;
      padding:0 1.4rem 1.4rem 1.4rem;
      box-sizing: border-box;
      z-index: 1000;
      .title{
        width:100%;
        font-size:1.19rem;
        margin:1.4rem 0 1.4rem 0;
        font-family:SF Pro Display;
        font-weight:bold;
        color:rgba(0,0,0,1);
      }
      .address{
        width:100%;
        font-size:1rem;
        font-family:SF Pro Display;
        font-weight:400;
        color:rgba(0,0,0,1);
        opacity:0.8;
        word-wrap:break-word;
      }
      .copy-title{
        width:100%;
        height:2.75rem;
        line-height: 2.75rem;
        text-align:center;
        background:rgba(23,143,254,1);
        border-radius:4px;
        margin-top:3rem;
        font-size:1.19rem;
        font-family:SF Pro Display;
        font-weight:bold;
        color:rgba(255,255,255,1);
      }
      .warn{
        width:100%;
        margin-top:1rem;
        font-size:0.82rem;
        font-family:SF Pro Display;
        font-weight:400;
        line-height: 1.15rem;
        color:rgba(0,0,0,1);
        opacity:0.5;
      }
    }
  }
</style>
