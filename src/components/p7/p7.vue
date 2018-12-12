<template>
  <div class="p7">
    <div class="p7_textarea">
      <div class="title">Our Mission</div>
      <div class="slogen">
        <span class="logo"></span>
        <span class="text"><span class="op">OP</span> - A Communication Layer<br> for Web 3.0 Apps</span>
      </div>
    </div>
    <div class="p7_main">
      <div class="item eos_position">
        <div class="icon eos"></div>
        <span class="name">EOS</span>
        <span class="text">Decentralized<br>Apps</span>
      </div>
      <div class="item ipfs_position">
        <div class="icon ipfs"></div>
        <span class="name">IPFS</span>
        <span class="text">Decentralized<br>Storage</span>
      </div>
      <div class="item top_position">
        <div class="icon top"></div>
        <span class="name">TOP</span>
        <span class="text">Decentralized<br>Communication</span>
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

<style lang='scss' rel='stylesheet/scss' scoped>
@mixin bg-image($url) {
    background-image: url("img/" + $url + "@2x.png");
    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
      background-image: url("img/" + $url + "@3x.png");
    }
  }
  .p7 {
    height: 100%;
    width: 100%;
    background-image: url(img/bg7.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .p7_textarea {
      width: 90%;
      position: absolute;
      top: 10%;
      left: 50%;
      margin-left: -45%;
      text-align: center;
      .title {
        font-size: 2.5rem;
        color: #fff;
        letter-spacing: 1px;
        font-weight: 600;
      }
      .slogen {
        margin-top: 1rem;
        .logo {
          height: 2.3rem;
          width: 2rem;
          @include bg-image('T');
          background-size: 100%;
          background-repeat: no-repeat;
          display: inline-block;
          vertical-align: bottom;
          margin-bottom: -4px;
        }
        .text {
          font-size: 1.2rem;
          color: #fff;
          line-height: 1.5rem;
          letter-spacing: 1px;
          margin-top: 1.2rem;
          margin-left: -0.5rem;
          .op{
              font-weight: 500;
          }
        }
      }
    }
    .p7_main {
      width: 90%;
      position: absolute;
      left: 50%;
      top: 32%;
      margin-left: -45%;
      font-size: 0;
      .item {
        width: 100%;
        height: 6rem;
        display: block;
        text-align: center;
        position: relative;
        margin-bottom: 3rem;
        .icon {
          height: 5rem;
          width: 5rem;
          background-size: 100%;
          background-repeat: no-repeat;
          display: inline-block;
          position: absolute;
          left: 15%;
          top: 50%;
          margin-top: -2.5rem;
        }
        .eos {
          @include bg-image('EOS');
          width: 4rem;
          height: 6rem;
          margin-left: 0.2rem;
        }
        .ipfs {
          @include bg-image('IPFS');
          width: 4.5rem;
          height: 5.5rem;
        }
        .top {
          @include bg-image('OP');
          width: 6rem;
          height: 4rem;
          margin-left: -0.2rem;
        }
        .name {
          font-size: 1.5rem;
          color: #fff;
          display: inline-block;
          font-weight: 600;
          position: absolute;
          top: 5%;
          left: 50%;
        }
        .text {
          font-size: 1.2rem;
          color: #fff;
          margin-top: 0px;
          display: inline-block;
          position: absolute;
          bottom: 10%;
          left: 50%;
          text-align: left;
          letter-spacing: 1px;
        }
      }
      .eos_position{
        .name{
          top: 10%;
        }
        .text{
          bottom: 0%;
        }
      }
      .top_position{
        .icon{
          top: 60%;
        }
      }
    }
  }

</style>
