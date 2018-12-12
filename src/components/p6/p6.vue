<template>
  <div class="p6">
    <div class="p6_textarea">
      <div class="title">A Blossom Ecosystem</div>
      <div class="text">Three DApps with over
        <span class="notice">45,000,000</span> users<br>
        will be immediately available on
        <span class="notice">TOP</span>
      </div>
    </div>
    <div class="p6_main">
      <div class="item dingtone_position">
        <div class="icon dingtone"></div>
        <span class="name">Dingtone</span>
        <span class="text">Decentralized<br>Messaging App</span>
        <!-- <span class="text">Messaging App</span> -->
      </div>
      <div class="item skyvpn_position">
        <div class="icon skyvpn"></div>
        <span class="name">SkyVPN</span>
        <span class="text">Decentralized<br>VPN Service</span>
      </div>
      <div class="item coverme_position">
        <div class="icon coverme"></div>
        <span class="name">CoverMe</span>
        <span class="text">Secure<br>Messaging App</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}

</script>

<style lang='scss' type='text/css' scoped>
@mixin bg-image($url) {
    background-image: url("img/" + $url + "@2x.png");
    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
      background-image: url("img/" + $url + "@3x.png");
    }
  }
  .p6 {
    height: 100%;
    width: 100%;
    background-image: url(img/bg6.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .p6_textarea {
      width: 100%;
      position: absolute;
      top: 15%;
      text-align: center;
      .title {
        font-size: 1.8rem;
        color: #fff;
        letter-spacing: 1px;
        font-weight: 600;
      }
      .text {
        font-size: 1.2rem;
        color: #fff;
        line-height: 30px;
        letter-spacing: 0px;
        margin-top: 1.6rem;
        line-height: 1.5rem;
        .notice {
          color: #f5c541;
          font-weight: 600;
          font-size: 1.4rem;
        }
      }
    }
    .p6_main {
      width: 90%;
      position: absolute;
      left: 50%;
      top: 40%;
      margin-left: -45%;
      font-size: 0;
      .item {
        width: 100%;
        height: 6rem;
        display: block;
        text-align: center;
        position: relative;
        margin-bottom: 1.5rem;
        .icon {
          height: 5rem;
          width: 5rem;
          background-size: cover;
          background-repeat: no-repeat;
          display: inline-block;
          position: absolute;
          left: 15%;
          top: 50%;
          margin-top: -2.5rem;
        }
        .dingtone {
          @include bg-image('dingtone');
        }
        .skyvpn {
          @include bg-image('skyvpn');
        }
        .coverme {
          @include bg-image('coverme');
        }
        .name {
          font-size: 1.4rem;
          color: #fff;
          display: inline-block;
          font-weight: 600;
          position: absolute;
          top: 10%;
          left: 50%;
        }
        .text {
          font-size: 1.1rem;
          color: #fff;
          margin-top: 0px;
          display: inline-block;
          position: absolute;
          bottom: 5%;
          left: 50%;
          text-align: left;
        }
      }
    }
  }

</style>
