<template>
  <div class="invition" @touchmove.prevent>
    <div class="mask"></div>
    <!-- <div v-show="false" class="create">
      <p class="text">Create a wallet and collect 100,000 first The test token</p>
      <p class="btn">Create a wallet and get it</p>
    </div> -->

    <div class="inviter">
      <div class="header">
        <h2>Invite friends to send you Test tokens</h2>
        <ul>
          <li>1) Invite your friends to send test tokens to your wallet.</li>
          <li>2) You earn 20 TOP tokens reward.</li>
        </ul>
      </div>
      <img src="@/assets/images/cancel.png" class="cancelImage" @click="closeInvition">
      <div class="address">
        <h3>Wallet Address:</h3>
        <p class="address-text">{{ address }}</p>
        <h3>Invitation link</h3>
        <p>{{ link }}</p>
      </div>
      <div class="share">
        <ul>
          <li class="twitter" @click="shareToTwitter()">
            <img src="@/assets/images/twitter.png">
            <p>Twitter</p>
          </li>
          <!-- <li class="facebook">
            <img src="@/assets/images/facebook.png">
            <p>Facebook</p>
          </li> -->
          <li class="telegram" @click="shareToTelegram()">
            <img src="@/assets/images/telegram.png">
            <p>Telegram</p>
          </li>
          <li :data-clipboard-text="shareText" class="copy" @click="copyLink()">
            <img src="@/assets/images/link.png">
            <p>Copy</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  name: 'Invition',
  data() {
    return {
      showRequest: true
    }
  },
  computed: {
    address() {
      return this.$store.state.user.address
    },
    code() {
      return this.$store.state.user.code
    },
    link() {
      let link = location.href.replace('/testnet/wallet', '/activepage').concat('?code=' + this.code)
      return link
    },
    shareText() {
      let str = 'Wallet Address:"' + this.address + '",Invite link:"' + this.link + '"'
      return str
    }
  },
  methods: {
    shareToTwitter() {
      // let shareContent = 'TOP Network @topnetwork_top is giving away 💰1 million tokens for its Testnet. Make a TEST transfer on ' + this.link + ' to my Testnet wallet address "' + this.address + '". Let’s get tokens together! '
      let shareContent = '🎁🎁TOP Network @topnetwork_top is giving away 💰5,000,000 tokens for its #Testnet. Send a test transaction to me on ' + this.link + '. We can both get rewards. My Testnet wallet address is ' + this.address
      // let shareLink = this.link
      let shareUrl = 'https://twitter.com/intent/tweet?text='.concat(encodeURIComponent(shareContent)).concat(
        ' ')
      // this.popupwindow(shareUrl, 'Twitter', 600, 400)
      window.open(shareUrl, '_blank')
    },
    shareToTelegram() {
      let shareContent = 'TOP Network is giving away 5,000,000 tokens!!! Join here ' + this.link + ' and send a transaction to my Testnet wallet address ' + this.address + '. Let us get tokens together!'
      // let shareLink = this.link
      let shareUrl = 'https://telegram.me/share/url?url=' + ' ' + '&text=' + encodeURIComponent(shareContent) + ''
      // this.popupwindow(shareUrl, 'Telegram', 600, 400)
      window.open(shareUrl, '_blank')
    },
    copyLink() {
      const clipboard = new Clipboard('.copy')
      clipboard.on('success', e => {
        this.$toast({
          'toastMsg': 'Copy successfully'
        })
        clipboard.destroy()
      })
    },
    closeInvition() {
      this.$store.commit('SetShowProp', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.invition {
  left: 0;
  top:0;
  display: flex;
  justify-content: center;
  position:fixed;
  width: 100%;
  height: 100%;
  z-index:1;
  // background-color:rgba(0,0,0,0.7);
  .mask{
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.7);
    z-index:1;
  }
  .create {
    width: 17rem;
    background-color: #fff;
    align-self: center;
    border-radius: 0.7rem;
    font-size: 1rem;
    font-family: SF Pro Display;
    text-align: center;
    .text {
      padding: 2rem;
      width: 16.88rem;
      border: 1px solid rgba(0, 0, 0, 0.08);
      font-weight: 400;
      line-height: 1rem;
      color: #000;
      opacity: 0.8;
      box-sizing: border-box;
    }

    .btn {
      padding: 1rem 0;
      font-weight: bold;
      line-height: 1rem;
      color: rgba(23, 143, 254, 1);
      opacity: 1;
    }
  }

  .inviter {
    position: fixed;
    top:3.5rem;
    margin-top: 6rem;
    // padding: 1rem;
    height: 31.5rem;
    background-color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    // padding-bottom: 1.43rem;
    width:89%;
    margin: 0 auto;
    color: #fff;
    z-index:1000;
    .header {
      padding: 1rem;
      background-color: #1497fe;
      border-radius: 4px 4px 0 0;

      h2 {
        width:90%;
        font-size: 1.5rem;
        font-family: SF Pro Display;
        font-weight: bold;
        line-height: 1.75rem;
      }
      ul {
        li {
          margin-top: 0.5rem;
          font-size: 0.85rem;
          font-family: SF Pro Display;
          font-weight: 400;
          line-height: 1.25rem;
          opacity: 1;
        }
      }
    }

    .cancelImage{
      position: absolute;
      right:0.5rem;
      top:0.5rem;
    }
    .address {
      padding: 0 1rem 1rem 1rem;
      color: #000;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);

      h3 {
        margin-top: 1rem;
        font-size: 1rem;
        font-family: SF Pro Display;
        font-weight: bold;
      }

      p {
        margin-top: 0.5rem;
        font-size: 0.85rem;
        font-family: SF Pro Display;
        font-weight: 400;
        // word-wrap: break-word;
        word-break: break-all;
        line-height: 1.25rem;
      }
    }

    .share {
      padding: 1rem;
      color: #000;
      font-size: .88rem;
      text-align: center;

      ul {
        display: flex;
        justify-content: space-between;

        li {

          img {
            width: 3rem;
            height: 3rem;
          }

          p {
            margin-top: .5rem;
          }
        }
      }
    }
  }
}
</style>
