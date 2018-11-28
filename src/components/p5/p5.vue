<template>
 <div class="p5">
     <div class="p5_title">Core Features</div>
     <div class="p5_main">
         <div class="item">
             <span class="icon lattice"></span>
             <span class="text">Two-Layer<br> Lattice</span>
         </div>
         <div class="item">
             <span class="icon sharding"></span>
             <span class="text">Two-Layer<br> Sharding</span>
         </div>
         <div class="item">
             <span class="icon vm"></span>
             <span class="text">Two-Layer<br> VM</span>
         </div>
         <div class="item">
             <span class="icon speed"></span>
             <span class="text">High-Speed <br>
                    Parallel PBFT</span>
         </div>
         <div class="item">
             <span class="icon zero"></span>
             <span class="text"> Instant Transactions
                        <br>Zero Fees</span>
         </div>
         <div class="item">
             <span class="icon privacy"></span>
             <span class="text">Built-In Security
                    <br>Privacy Protection</span>
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

<style lang='scss' rel='stylesheet/scss'>
@mixin bg-image($url) {
    background-image: url("img/" + $url + "@2x.png");
    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
      background-image: url("img/" + $url + "@3x.png");
    }
  }
.p5{
    height: 100%;
    width: 100%;
    background-image: url(img/bg5.png);
    background-color: #0b1f60;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .p5_title{
        width: 100%;
        text-align: center;
        position: absolute;
        top: 9%;
        font-size: 2.5rem;
        color: #fff;
        letter-spacing: 2px;
        font-weight: 600;
    }
    .p5_main{
        width: 90%;
        height: 50%;
        position: absolute;
        top: 20%;
        left: 5%;
        font-size: 0;
        .item{
            width: 50%;
            height: 40%;
            display: inline-block;
            margin-top: 1.2rem;
            vertical-align: top;
            .icon{
                height: 5rem;
                width:5rem;
                background-size: 100%;
                background-repeat: no-repeat;
                margin: 0 auto;
                display: block;
            }
            .text{
                display: block;
                width: 100%;
                height: 1.2rem;
                line-height: 30px;
                font-size: 1rem;
                text-align: center;
                margin-top: 0.5rem;
                color: #fff;
                line-height: 1.2rem;
            }
            .lattice{
                @include bg-image('lattice');
            }
            .sharding{
                @include bg-image('sharding');
                height: 5rem;
                width:5.5rem;
            }
            .vm{
                @include bg-image('VM');
                height: 5rem;
                width:6rem;
            }
            .speed{
                @include bg-image('high_speed');
            }
            .zero{
                @include bg-image('instant');
            }
            .privacy{
                @include bg-image('built');
            }
        }
    }
}
</style>
