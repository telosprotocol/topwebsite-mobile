<template>
 <div class="tps">
   <div class="title"><span class="icon"></span>Chain Private Testnet</div>
   <div class="main">
    <div class="now" :style="{top:tpsPosition}">
      Now <br><span>{{tpsNum}}</span> TPS
      <span class="arrow"></span>
    </div>
    <div class="was">Was 982 TPS</div>
    <div class="line"></div>
    <div class="was was-two">Was 1923 TPS</div>
    <div class="line-two"></div>
    <div class="time_area">
      <div class="time">
      </div>
      <div class="text text1">Single Shard <br><span>1,000</span> TPS</div>
      <div class="text text2">Single Shard Goal <br><span>2,000</span> TPS</div>
      <div class="text text3">3 Zones,<br> 6 Shards <br><span>9,000</span> TPS</div>
      <div class="text text4">5 Zones,<br> 100 Shards <br><span>50,000</span> TPS</div>
    </div>

   </div>
 </div>
</template>

<script>
import {getTpsNum} from '../../../fetch/api'
export default {
  data () {
    return {
      tpsNum: '0',
      tpsPosition: '30%'
    }
  },
  created () {
    this.refreshTPSNum()
  },
  methods: {
    getTpsNumInfo () {
      getTpsNum().then(res => {
        if (res.data.Result === 1) {
          this.tpsNum = this.toQfw((res.data.Tps).toString())
        }
      }).catch(res => {
      })
    },
    refreshTPSNum () {
      this.getTpsNumInfo()
      setInterval(() => {
        this.getTpsNumInfo()
      }, 5000)
    },
    toQfw (str) {
      var re = /(?=(?!(\b))(\d{3})+$)/g
      str = str.replace(re, ',')
      return str
    }
  },
  components: {

  }
}
</script>

<style lang='scss' rel='stylesheet/scss'>
@mixin bg-image($url) {
    background-image: url("img/"+$url+"@2x.png");
    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
      background-image: url("img/"+$url+"@3x.png");
    }
  }

.tps{
  height: 100%;
  width: 100%;
  background-image: url(img/11.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .title{
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    color: #fff;
    font-weight: 600;
    position: absolute;
    left: 0%;
    top: 5%;
    height: 3rem;
    line-height: 3.5rem;
    .icon{
      @include bg-image('OP');
      background-size: 100%;
      background-repeat: no-repeat;
      width: 4rem;
      height: 2.5rem;
      display: inline-block;
      margin-right: 0.7rem;
      vertical-align: top;
    }
  }
  .main{
    width: 90%;
    height: 80%;
    position: absolute;
    left: 5%;
    top: 15%;
    .now{
      font-size: 1.2rem;
      font-weight: 600;
      color: #fff;
      text-align: left;
      position: absolute;
      // top: 7%;
      transform: translateY(-50%);
      left: 0;
      line-height: 1.5rem;
      span{
        color: #f5c541;
        font-family:Helvetica, sans-serif;
        font-weight: 600;
      }
      .arrow{
        height: 1.8rem;
        width: 1.2rem;
        @include bg-image('arrow');
        background-size: 100%;
        background-repeat: no-repeat;
        display: inline-block;
        position: absolute;
        right: -1.8rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .was{
        position: absolute;
        color:#0094ff;
        font-weight: 500;
        left:0;
        top:3%;
        font-size:1rem;
        width:8rem;
      }
    .line{
      width:2.8rem;
      height:2rem;
      border-bottom: 1px dashed #0094ff;
      position: absolute;
      left:7.5rem;
      top:-1%;
    }
    .line-two{
      width:2.5rem;
      height:2rem;
      border-bottom: 1px dashed #0094ff;
      position: absolute;
      left:7.8rem;
      top:16%;
    }
    .was-two{
      top:20%;
    }
    .time_area{
      height: 32.4rem;
      width: 13rem;
      position: absolute;
      left: 40%;
      top: 0;
      .time{
        @include bg-image('line');
        background-size: 100%;
        background-repeat: no-repeat;
        height: 100%;
        width: 4.2rem;
      }
    }
    .text{
        font-size: 1rem;
        color: #fff;
        position: absolute;
        font-family:Helvetica, sans-serif;
        line-height: 1.2rem;
        text-align: left;
      }
      .text1{
        right: 15%;
        top: 3.6rem;
        span{
          color: #65e0ff;
          font-weight: 600;
        }
      }
      .text2{
        right: -4%;
        top: 11.4rem;
        span{
          color: #65e0ff;
          font-weight: 600;
        }
      }
      .text3{
        right: 19%;
        top: 18rem;
        span{
          color: #65e0ff;
          font-weight: 600;
        }
      }
      .text4{
        right: 20%;
        top: 25.8rem;
        span{
          color: #f5c541;
          font-weight: 600;
        }
      }
  }
}

</style>
