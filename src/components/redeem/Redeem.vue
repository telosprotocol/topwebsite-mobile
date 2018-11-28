<template>
  <div>
    <navbar/>
    <div class="info">
      <div class="title">Redeem the Metal Coin to TOP Tokens</div>
      <div class="keywords">Congratulations! If you have obtained a TOP Network metal coin from one of our offline activities, please follow these instructions and you can redeem the coin.</div>
      <div class="desc">
        <div class="item_one">
          <p class="step_one">1. Find the six-digit redeem code on the cover paper along with the metal coin.</p>
          <img src="./images/Top.png" class="group">
          <div class="underline"></div>
        </div>
        <div class="item_two">
          <p class="step_two">2. Connect to TOP Network bounty bot on Telegram.
            <span class="colory">(Make sure you have Telegram installed first)</span>
          </p>
          <p class="button"><a href="https://t.me/TOPNetworkBot">Enter @TOPNetworkBot</a></p>
          <div class="underline"></div>
        </div>
        <div class="item_three">
          <p class="step_three">3. After connecting to TOP Network bounty bot, click "<span class="colorsy">Redeem a Metal Coin to Tokens!</span>", follow the instructions and redeem your coin to TOP tokens!</p>
          <img src="./images/bot.png" class="bot">
          <div class="underline"></div>
        </div>
        <div class="item_four">
          <p class="question">>> How can I get a metal coin?</p>
          <p class="ask">TOP Network metal coins are being distributed by our team touring all over the world! You can redeem the metal coin to TOP Tokens! Pay close attention to our tour schedule and you might be the next one to get a TOP Network metal coin!</p>
          <p class="ask">TOP Tokens! Pay close attention to our tour schedule and you might be the next one to get a TOP Network metal coin!
            We are kicking off our world tour in September. Our co-founders will be present in Boston in the U.S. and attend Singapore Blockchain Week as scheduled below. If you will be present at these events, please let us know by sending an email to <a href='mailto:contact@topnetwork.org'>contact@topnetwork.org</a>.</p>
          <p class="ask">We look forward to meeting TOP community members around the world!</p>
          <img src="./images/flyer2x2x.png" class="flyer">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
// import Navbar from '@/components/redeem/Navbar'
export default {
  name: 'redeem',
  components: {
    Navbar
  }
}
</script>

<style lang='scss' type="text/css" scoped>
  html{
    font-family:Microsoft YaHei;
    padding: 0;
    margin: 0;
    background-color: #0c1556;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  a:hover{
    opacity: 0.8;
  }
  .info{
    background: url('./images/background.png') no-repeat;
    background-size: 100% 100%;
    width:100%;
    background-color: #0c1556;
  }
  .title{
    width:87%;
    font-size:.7384rem;
    font-weight:bold;
    line-height:0.974rem;
    color:rgba(255,255,255,1);
    margin: 0 auto;
    padding-top: 1.04rem;
    margin-bottom: 0.69rem;
  }
  .keywords{
    width:69%;
    color:#fff;
    text-align:center;
    font-size: 0.43rem;
    font-weight: 400;
    line-height: 0.565rem;
    margin: 0 auto;
    margin-bottom: 0.346rem;
  }
  .desc{
    width: 87%;
    margin: 0 auto;
    background:rgba(31,38,110,1);
    box-shadow:0rem 1.73rem 2.08rem rgba(0,6,38,0.7);
  }
  .item_one{
    padding-top:1.733rem;
  }
  .step_one{
    width:84%;
    font-size:0.48rem;
    font-weight:bold;
    line-height:.62rem;
    color:rgba(255,255,255,1);
    margin: 0 auto;
  }
  .group{
    width:0.038rem;
    background:rgba(0,0,0,0);
    display: block;
    margin: 0 auto;
    margin-top: 0.693rem;
  }
  .underline{
    width:84%;
    height:0rem;
    border:2px solid rgba(63,71,132,1);
    margin: 0 auto;
    margin-top: 0.346rem;
  }
  .step_two{
    width:84%;
    font-size:0.4784rem;
    font-weight:bold;
    line-height:0.4784rem;
    color:#fff;
    margin:0 auto;
    margin-top: 1.38rem;
  }
  .colory{
    color:rgba(255,237,186,1);
    display: block;
    text-align: center;
  }
  .button{
    width: 60%;
    height:1.3rem;
    background:rgba(255,204,65,1);
    border-radius:1.3rem;
    box-shadow:0rem 1.733rem 6.933rem rgba(34,13,150,0.93);
    font-size:0.364rem;
    line-height:1.3rem;
    text-align: center;
    color:rgba(96,52,0,1);
    margin: 0 auto;
    margin-top:0.6933rem;
  }
  .button>a{
    color:rgba(96,52,0,1);
  }
  .step_three{
    width:84%;
    font-size:0.4784rem;
    font-weight:bold;
    line-height:.6274rem;
    color:rgba(255,255,255,1);
    text-align: center;
    margin: 0 auto;
    margin-top: 1.386rem;
  }
  .colorsy{
    color:#ff0;
  }
  .bot{
    width:85%;
    background:rgba(0,0,0,0);
    display: block;
    margin: 0 auto;
    margin-top: 0.693rem;
  }
  .question{
    margin: 1.04rem 0 0.693rem 0;
    // width:60%;
    font-size:0.565rem;
    font-weight:bold;
    line-height:0.627rem;
    color:rgba(255,255,255,1);
  }
  .ask{
    width:95%;
    font-size:0.433rem;
    font-weight:400;
    line-height:0.565rem;
    color:rgba(255,255,255,1);
    margin-bottom:0.693rem;
    text-align:left;
    padding: 0 0 0 0.693rem;
    box-sizing: border-box;
  }
  .ask>a{
    color:#fff;
  }
  .flyer{
    width:100%;
    background:rgba(0,0,0,0);
    box-shadow:0rem 1.73rem 2.08rem rgba(0,0,0,0.16);
    display: block;
    margin: 0 auto;
  }
</style>
