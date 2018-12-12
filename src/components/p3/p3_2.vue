<template>
  <div class="p3">
    <div class="p3_title"></div>
    <div class="p3_main">
      <!-- <div class="item token_position">
        <div class="icon token"></div>
        <div class="text_area">
          <span class="title">Tokenized</span>
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
          <span class="title">Infinite Layered</span>
          <span class="text">The network is intelligently organized into multiple layers. A cluster of nodes can be virtualized into one node.</span>
        </div>
      </div> -->
      <div class="item dns_position">
        <div class="icon dns"></div>
        <div class="text_area">
          <span class="title">Smart DNS</span>
          <span class="text">A decentralized naming system for accounts, services, and nodes.</span>
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
          <span class="text">The network is a decentralized, programmable, object-based database service.</span>
        </div>
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
// @import url(p3_scroll.css);
.p3 {
    height: 100%;
    width: 100%;
    position: relative;
    background-image: url(img/3_bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    .p3_title {
        width: 18rem;
        height: 3rem;
        background-image: url(img/3_titile.png);
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
        position: absolute;
        top: 30%;
        left: 50%;
        margin-left: -45%;
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
                background-image: url(img/3_icon_tokenized.png);
            }
            .routing {
                background-image: url(img/3_icon_routing.png);
            }
            .layered {
                background-image: url(img/3_icon_layered.png);
            }
            .dns {
                background-image: url(img/3_icon_dns.png);
            }
            .e2e {
                background-image: url(img/3_icon_e2e.png);
            }
            .object {
                background-image: url(img/3_icon_object.png);
            }
            .text_area {
                display: inline-block;
                vertical-align: top;
                width: 70%;
                margin-left: 0.5rem;
                .title {
                    color: #65e0ff;
                    font-size: 1.5rem;
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
    }
}
</style>
