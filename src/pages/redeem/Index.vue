<template>
  <div>
    <navbar/>
    <div class="policy">
      <div class="title">
        <div class="text">Redeem the Metal Coin to TOP Tokens</div>
      </div>
      <div class="title-desc">Congratulations! If you have obtained a TOP Network metal coin from one of our offline activities, please follow these instructions and you can redeem the coin.</div>
      <div class="info">
        <div class="item">
          <div class="stepOne">Step 1. Find the Code</div>
          <div class="detail">Find the six-digit redeem code on the cover paper along with the metal coin.</div>
          <img src="@/assets/images/faq/coin.png" class="coin">
        </div>
        <div class="item">
          <div class="stepOne">Step 2. Connect to Bot</div>
          <div class="detail detail2">Connect to TOP Network bounty bot on Telegram. <span>(Make sure you have Telegram installed first)</span></div>
          <img src="@/assets/images/faq/btn.png" class="bot" @click="openBot">
        </div>
        <div class="item">
          <div class="stepOne">Step 3. Redeem Code on Bot</div>
          <div class="detail">After connecting to TOP Network bounty bot, click "<span>Redeem a Metal Coin to Tokens!</span>", follow the instructions and redeem your coin to TOP tokens!</div>
          <img src="@/assets/images/faq/botgroup.png" class="botgroup">
        </div>
        <div class="item noborder">
          <div class="stepOne">>> How can I get a metal coin?</div>
          <div class="detail nomarginbtm">
            <p>TOP Network metal coins are being distributed by our team touring all over the world! You can redeem the metal coin to TOP Tokens! Pay close attention to our tour schedule and you might be the next one to get a TOP Network metal coin! </p>
            <p class="linedistance">Our latest tour &amp; event schedules and notifications can be found in our official Telegram group: <a href="https://t.me/topnetwork_top" target="_blank">https://t.me/topnetwork_top.</a></p>
            <p>Join now and don't miss anything!</p>
          </div>
        </div>
      </div>
    </div>
    <v-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import vFooter from '@/pages/index/components/Footer'
export default {
  name: 'Redeem',
  components: {
    Navbar,
    vFooter
  },
  methods: {
    openBot () {
      window.open('https://t.me/TOPNetworkBot', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
  .policy{
    width: 100%;
    font-family:Cera Pro;
    background: #041126;
    padding-bottom:1.47rem;
    .title{
      background: url('../../assets/images/faq/background.png') no-repeat;
      background-position: 0 0;
      background-size:100% 100%;
      font-weight:bold;
      font-size:0.59rem;
      color:rgba(255,255,255,1);
      padding:0.73rem 0 0rem 0;
      .text{
        width:7.89rem;
        height:1.41rem;
        line-height:0.71rem;
        margin:0 auto;
      }
    }
    .title-desc{
      width:8.35rem;
      margin:0.57rem auto 0.69rem auto;
      font-size:0.48rem;
      font-weight:400;
      line-height:0.67rem;
      color:rgba(138,159,175,1);
      text-align: left;
    }
    .info{
      width:7.97rem;
      margin:0 auto;
      background:rgba(17,30,49,1);
      padding: 0rem 0.4rem 0rem .4rem;
      .item{
        width: 100%;
        border-bottom: 1px solid rgba(255,255,255,.7);
        padding: .53rem 0;
        .stepOne{
          width:100%;
          text-align: left;
          font-size:0.35rem;
          font-weight:500;
          color:rgba(255,255,255,1);
        }
        .detail{
          width:99%;
          font-size:0.35rem;
          font-weight:300;
          line-height:0.4rem;
          color:rgba(255,255,255,0.8);
          margin:0.53rem 0;
          text-align: left;
          font-family: CeraPro-Light;
          .linedistance{
            margin:0.53rem 0;
          }
          span{
            color:#E4AF0A;
            opacity: 0.8;
          }
          a{
            color:#E4AF0A;
            opacity: 0.8;
            border-bottom: 1px solid #E4AF0A;
            padding-bottom: 1px;
          }
        }
        .detail2{
          width: 100%;
        }
        .nomarginbtm{
          margin-bottom: 0;
        }
        .coin{
          width:6.32rem;
          display: block;
          // margin:0 auto;
          text-align: left;
        }
        .bot{
          width:5.6rem;
        }
        .botgroup{
          width:100%;
        }
      }
      .noborder{
        border-bottom: 0;
      }
    }
  }
</style>
