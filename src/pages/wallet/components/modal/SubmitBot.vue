<template>
  <div class="seemore" @touchmove.prevent>
    <div class="mask"></div>
    <div class="modal">
      <div class="text">Congratulations! You earned 10 TOP tokens reward for transaction today! Submit your wallet address to our Telegram bot and claim your reward!</div>
      <div :data-clipboard-text="$store.state.user.address" class="more" @click="openBot">Copy Address &amp; Claim Reward</div>
      <img src="@/assets/images/cancel.png" class="cancelImage" @click="close">
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  name: 'SubmitBot',
  methods: {
    close() {
      this.$store.commit('SetSubmitShow', false)
    },
    openBot() {
      const clipboard = new Clipboard('.more')
      clipboard.on('success', e => {
        this.$toast({
          'toastMsg': 'Copy successfully'
        })
        clipboard.destroy()
      })
      this.$toast({
        'toastMsg': 'Copy successfully'
      })
      setTimeout(() => {
        // window.location.href = 'https://t.me/TOPNetworkBot'
        window.open('https://t.me/TOPNetworkBot', '_blank')
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .seemore{
    width:100%;
    height:100%;
    left:0;
    top:0;
    position:fixed;
    z-index:1000;
    .mask{
      width:100%;
      height:100%;
      background-color: rgba(0,0,0,0.7);
      position:fixed;
      top:0;
      left:0;
      // z-index:999;
    }
    .modal{
      width:89%;
      position: fixed;
      left:5.5%;
      top:11rem;
      background: #fff;
      padding:1.4rem;
      box-sizing: border-box;
      z-index: 1002;
      border-radius:4px;
      .text{
        font-size:1rem;
        font-family:SF Pro Display;
        line-height:1.4rem;
        font-weight:400;
      }
      .more{
        text-align:right;
        font-size:1rem;
        margin-top:2rem;
        color:rgba(23,143,254,1);
      }
    }
    .cancelImage{
      position: absolute;
      right:0.5rem;
      top:0.5rem;
      width:1.4rem;
      height: 1.4rem;
    }
  }
</style>
