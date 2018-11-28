<template>
  <div class="p4">
    <div class="p4_logo"></div>
    <div class="P4_text">A high performance blockchain platform for real-world business</div>
    <div class="text_area">
    <div class="content_row">
      <div class="img"></div>
      <div class="text_item first_item">
        <div class="title">Multi-Chain Platform</div>
        <div class="content">Pluggable service chains to meet the complexity of real-world business. Financial settlement is separated from business logic.</div>
      </div>
    </div>
      <div class="text_item">
        <div class="title">High Performance Blockchain</div>
        <div class="content">Book and settle high volume of transactions in real-world business on blockchain.</div>
      </div>
      <div class="text_item">
        <div class="title">Three Layers of Distributed Ledgers</div>
        <div class="content">Seamless combination of main chain, service chains, and off-chain ledger to store, process, book,
            and settle any volume and any size of real-world business.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {}
}

</script>

<style lang='scss' rel='stylesheet/scss'>
@mixin bg-image($url) {
    background-image: url("img/" + $url + "@2x.png");
    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
      background-image: url("img/" + $url + "@3x.png");
    }
  }
.p4{
    height: 100%;
    width: 100%;
    position: relative;
    background-image: url(img/bg4.png);
    background-color: #0e1457;
    background-size: cover;
    background-repeat: no-repeat;
    .p4_logo{
        height: 5rem;
        width: 14rem;
        position: absolute;
        @include bg-image('OPChain');
        background-size: 100%;
        background-repeat: no-repeat;
        top: 11%;
        left: 50%;
        margin-left: -7rem;
    }
    .P4_text{
        text-align: center;
        position: absolute;
        width: 90%;
        top: 23%;
        left: 5%;
        font-size: 1.2rem;
        color: #fff;
    }

    .text_area{
        height: 50%;
        width: 90%;
        position: absolute;
        right: 5%;
        top: 35%;
        text-align: left;
        .content_row{
            display: flex;
            margin-bottom: 0.5rem;
            .img{
                height: 7.5rem;
                width: 7rem;
                @include bg-image('chahua');
                background-size: 100%;
                background-repeat: no-repeat;
            }
            .first_item{
                flex: 1;
                margin-left: 1rem;
                margin-bottom: 1.2rem;
            }
        }
        .text_item{
            height: auto;
            margin-bottom: 2rem;
            .title{
                font-size: 1.2rem;
                color: #f5c541;
                letter-spacing: 1px;
            }
            .content{
                font-size: 1rem;
                color: #fff;
                letter-spacing: 1px;
                margin-top: 0.5rem;
            }
        }

    }
}
</style>
