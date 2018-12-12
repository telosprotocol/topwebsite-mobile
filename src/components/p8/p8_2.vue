<template>
  <div class="p8">
    <div class="p8_team">
      <div class="title">Investors</div>
          <div class="investor_area">
              <div class="item pic1"></div>
              <div class="item pic2"></div>
              <div class="item pic3"></div>
              <div class="item pic4"></div>
              <div class="item pic5"></div>
              <div class="item pic6"></div>
              <div class="item pic7"></div>
              <div class="item pic8"></div>
              <div class="item pic9"></div>
              <div class="item pic10"></div>
              <div class="item pic11"></div>
              <div class="item pic12"></div>
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
    background-image: url("img2/" + $url + "@2x.png");
    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
      background-image: url("img2/" + $url + "@3x.png");
    }
  }

  .p8 {
    height: 100%;
    width: 100%;
    background-color: #0e1457;
    background-image: url(img2/bg9.png);
    background-size: cover;
    background-repeat: no-repeat;
    .p8_team{
        height: 100%;
        // overflow:auto;
        position: relative;
        .investors{
            width: 80%;
            margin: 0 auto;
            margin-top: 50px;

        }
        .title{
                width: 80%;
                height: 2rem;
                text-align: center;
                color: #fff;
                font-size: 2.5rem;
                position: absolute;
                top: 13%;
                left: 50%;
                margin-left: -40%;
                font-weight: 600;
            }
            .investor_area{
                width: 90%;
                height: 80%;
                font-size: 0;
                position: absolute;
                top: 28%;
                left: 5%;
                .item{
                    width: 30%;
                    height: 6rem;
                    display: inline-block;
                    position: relative;
                    margin-bottom: 0.5rem;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    margin-left: 5%;
                    &:nth-child(3n+1){
                        margin-left: 0;
                    }
                }
                .pic1{
                    @include bg-image('1fen')
                }
                .pic2{
                    @include bg-image('2dhvc')
                }
                .pic3{
                    @include bg-image('3gen')
                }
                .pic4{
                    @include bg-image('4ld')
                }
                .pic5{
                    @include bg-image('5ngc')
                }
                .pic6{
                    @include bg-image('6root')
                }
                .pic7{
                    @include bg-image('7van')
                }
                .pic8{
                    @include bg-image('8capital')
                }
                .pic9{
                    @include bg-image('9fund')
                }
                .pic10{
                    @include bg-image('10origin')
                }
                .pic11{
                    @include bg-image('11mek')
                }
                .pic12{
                    @include bg-image('12ju')
                }
                .pic13{
                    @include bg-image('13ds')
                }
                .pic14{
                    @include bg-image('14dream')
                }
                .pic15{
                    @include bg-image('15teec')
                }
                .pic16{
                    @include bg-image('16star')
                }
            }
    }
  }

</style>
