<template>
  <div class="p3">
    <div class="p3_title"></div>
      <!-- <swiper class="swiper" :options="swiperOption" ref="mySwiper2">
        <swiper-slide class="firslide_margin">
          <div class="p3_main">
          <div class="item token_position">
            <div class="icon token"></div>
            <div class="text_area">
              <span class="title">Tokens</span>
              <span class="text">Network service is completely tokenized via various proof-of-service consensuses.</span>
            </div>
          </div>
          <div class="item routing_position">
            <div class="icon routing"></div>
            <div class="text_area">
              <span class="title">Smart Routing</span>
              <span class="text">Intelligently find the best routing path between any pair of nodes.</span>
            </div>
          </div>
          <div class="item layered_position">
            <div class="icon layered"></div>
            <div class="text_area">
              <span class="title">Infinite Layers</span>
              <span class="text">The network is intelligently organized into multiple layers. A cluster of nodes can be virtualized into one
                node to create infinite layers.</span>
            </div>
          </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="p3_main">
          <div class="item dns_position">
            <div class="icon dns"></div>
            <div class="text_area">
              <span class="title">Smart DNS</span>
              <span class="text">A decentralized naming system for accounts,services and nodes.</span>
            </div>
          </div>
          <div class="item e2e_position">
            <div class="icon e2e"></div>
            <div class="text_area">
              <span class="title">E2E Encryption</span>
              <span class="text">Communication is end-to-end encrypted to ensure network security.</span>
            </div>
          </div>
          <div class="item object_position">
            <div class="icon object"></div>
            <div class="text_area">
              <span class="title">Smart Object</span>
              <span class="text">A decentralized programmable objec-based database service.</span>
            </div>
          </div>
          </div>
        </swiper-slide>
      </swiper> -->
      <div class="p3_main">
          <div class="item token_position">
            <div class="icon token"></div>
            <div class="text_area">
              <span class="title">Tokens</span>
              <span class="text">Network service is completely tokenized via various proof-of-service consensuses.</span>
            </div>
          </div>
          <div class="item routing_position">
            <div class="icon routing"></div>
            <div class="text_area">
              <span class="title">Smart Routing</span>
              <span class="text">Intelligently find the best routing path between any pair of nodes.</span>
            </div>
          </div>
          <div class="item layered_position">
            <div class="icon layered"></div>
            <div class="text_area">
              <span class="title">Infinite Layers</span>
              <span class="text">The network is intelligently organized into multiple layers. A cluster of nodes can be virtualized into one
                node to create infinite layers.</span>
            </div>
          </div>
          <div class="item dns_position">
            <div class="icon dns"></div>
            <div class="text_area">
              <span class="title">Smart DNS</span>
              <span class="text">A decentralized naming system for accounts,services and nodes.</span>
            </div>
          </div>
          <div class="item e2e_position">
            <div class="icon e2e"></div>
            <div class="text_area">
              <span class="title">E2E Encryption</span>
              <span class="text">Communication is end-to-end encrypted to ensure network security.</span>
            </div>
          </div>
          <div class="item object_position">
            <div class="icon object"></div>
            <div class="text_area">
              <span class="title">Smart Object</span>
              <span class="text">A decentralized programmable objec-based database service.</span>
            </div>
          </div>
          </div>
  </div>
</template>

<script>

export default {
  data () {
    // const vm = this
    return {
    }
  },
  computed: {
  },
  components: {
  }
}

</script>

<style lang='scss' type='text/css' scoped>
  // @import url(p3_scroll.css);
  @mixin bg-image($url) {
    background-image: url("img/" + $url + "@2x.png");
    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
      background-image: url("img/" + $url + "@3x.png");
    }
  }
  .swiper{
    height: 65%;
    width: 100%;
    left: 0%;
    position: absolute;
    top: 25%;
    .swiper-slide{
      width: 100%;
      height: 100%;
      color: #fff;
    }
    .firslide_margin{
      margin-bottom: 30px;
    }
  }

  .p3 {
    height: 170%;
    width: 100%;
    position: relative;
    background-image: url('img/3_1.jpg');
    background-size: 100%;
    background-color: #0a124b;
    background-repeat: no-repeat;
    .p3_title {
      width: 18rem;
      height: 3rem;
      @include bg-image('echnologies');
      background-size: 100%;
      background-repeat: no-repeat;
      position: absolute;
      top: 10%;
      left: 50%;
      margin-top: 0;
      margin-left: -9rem;
    }
    .p3_main {
      width: 90%;
      margin: 0 auto;
      font-size: 0;
      display: inline-block;
      position: absolute;
      top: 20%;
      left: 5%;
      .item {
        display: block;
        width: 100%;
        height: 7rem;
        font-size: 0;
        text-align: left;
        margin-bottom: 20px;
        .icon {
          height: 4.5rem;
          width: 4.5rem;
          background-size: 100%;
          background-repeat: no-repeat;
          display: inline-block;
          vertical-align: middle;
          margin-top: 15px;
        }
        .token {
          @include bg-image('tokenized');
        }
        .routing {
          @include bg-image('routing');
        }
        .layered {
          @include bg-image('infinite');
        }
        .dns {
          @include bg-image('DNS');
        }
        .e2e {
          @include bg-image('E2E');
        }
        .object {
          @include bg-image('object');
        }
        .text_area {
          display: inline-block;
          vertical-align: top;
          width: 70%;
          margin-left: 1.2rem;
          .title {
            color: #65e0ff;
            font-size: 1.3rem;
            display: block;
            margin-bottom: 10px;
          }
          .text {
            color: #fff;
            font-size: 1rem;
            letter-spacing: 1px;
            line-height: 1.2rem;
          }
        }
      }
      .layered_position{
        margin-bottom: 3rem;
      }
    }
  }

  @media screen and (min-height: 736px) {
  .p3{
    height: 150%;
  }
}

</style>
