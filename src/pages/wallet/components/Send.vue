<template>
  <div class="send">
    <navbar />
    <div class="header">
      <img src="@/assets/images/leftArrow.png" class="leftarrow" @click="closeTransfer()" >
      <div class="title">Send</div>
    </div>
    <div class="wrapper">
      <div class="adress-wrapper">
        <div class="adress-input">
          <div class="reciver">Receiver</div>
          <input v-model="toAdress" type="text" name="text" class="adress" placeholder="Top testnet wallet address">
          <div v-if="showPop" class="pop-up" @click="opentelegramBot()">
            <p class="text"> {{ popMessage }} </p>
            <p class="btn">GO ></p>
          </div>
        </div>
        <!-- <div class="address-attention">Alias name:{{ property }}</div> -->
        <div v-show="notice" class="address-attention warn">*{{ notice }}</div>
      </div>
      <div class="money-wrapper">
        <div class="money-input">
          <div class="money-title">Money</div>
          <input v-model="amount" type="number" name="money" class="money" placeholder="Test token">
        </div>
        <div class="balance-attention">
          <span class="balance">Balance: {{ balance }} Test token</span>
          <span v-show="amount_notice" class="nobalance">*{{ amount_notice }}</span>
        </div>
      </div>
      <!-- <div class="free">
        <div class="free-attention">100,000 Test Tokens are available for you!</div>
        <div class="entry">Free collection ></div>
      </div> -->
      <div class="sure" @click="transferOutBalance()">Confirm &amp; Send</div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/pages/common/Navbar'
import { transferOut, accountInfo, queryAllProperty, getuserinfo, checkIsTransferAddress } from '@/api/fetch'
import { genKey } from '@/utils/common'
export default {
  name: 'Send',
  components: {
    Navbar
  },
  data() {
    return {
      fee: 0,
      property: '-',
      toAdress: '',
      amount: '',
      notice: '',
      amount_notice: '',
      popMessage: 'Don’t know who to send test tokens to? Get an address from our Telegram group!',
      sign: '',
      showAlias: false,
      showPop: true
    }
  },
  computed: {
    balance() {
      return Number(this.$store.state.user.balance).toFixed(3)
    },
    give() {
      return this.$store.state.user.give
    },
    address() {
      return this.$store.state.user.address
    },
    showCreateModal() {
      return this.$store.state.modal.createModal
    },
    showRewardModal() {
      return this.$store.state.modal.rewardModal
    },
    showrequestModal() {
      return this.$store.state.modal.requestModal
    }
  },
  watch: {
    amount(value, oldVal) {
      if (value) {
        if (value.toString().indexOf('.') === -1) {
          if (value.toString().length > 30) {
            this.amount = oldVal
          } else if (Number(value) <= 0) {
            // 判断正数
            if (value.toString().indexOf('0') === 0) {
              this.amount = value
            } else {
              this.amount = ''
            }
          }
        } else {
          // this.amount = ''
          let count = value.match(/\./g).length
          if (count > 1) {
            this.amount = oldVal
          }
          let floatLen = value.toString().split('.')[1].length
          if (Number(value) < 0) {
            this.amount = oldVal
          }
          if (floatLen > 3) {
            this.amount = oldVal
          }
        }
        // 输入金额不能超过余额
        if (Number(value) > this.balance) {
          this.amount_notice = 'Insufficient balance'
        } else {
          this.amount_notice = ''
        }
        // this.getFee(value)
      } else {
        this.amount = ''
      }
    },
    toAdress(newVal, oldVal) {
      let account = this.$store.state.user.address
      if (!newVal) {
        this.showPop = true
        this.popMessage = 'Don’t know who to send test tokens to? Get an address from our Telegram group!'
        this.notice = 'The address must not be empty'
        this.property = ''
        return
      } else if (newVal.trim() === account) {
        this.notice = "Can't transfer money to yourself"
        return
      } else {
        this.showPop = false
        this.toAdress = newVal.trim()
        this.notice = ''
        this.getProperty(newVal)
      }
    }
  },
  methods: {
    opentelegramBot() {
      window.open('https://t.me/topnetwork_top', '_blank')
    },
    // 关闭转账窗口
    closeTransfer() {
      this.$router.push('/testnet/wallet')
    },
    getProperty() {
      queryAllProperty(this.toAdress).then(res => {
        if (res.Result === 1) {
          if (Object.getOwnPropertyNames(res).length > 1) {
            this.property = ''
            this.showAlias = true
          } else {
            this.showAlias = false
          }
          for (var index in res) {
            if (index !== 'Result') {
              this.property += res[index]
            }
          }
          checkIsTransferAddress(this.$store.state.user.userId, this.toAdress).then(res => {
            if (res.data === null) {
              this.showPop = false
            } else {
              this.popMessage = 'You have sent to this address before! Get a new address from our Telegram group to earn TOP token rewards!'
              this.showPop = true
            }
          })
        } else {
          this.property = '-'
          this.showAlias = false
        }
        if (this.property && this.property !== '-') {
          let str = this.property.toString()
          str = str.substr(0, str.length)
          this.property = str
        }
      })
      this.showPop = false
    },
    transferOutBalance() {
      var account = this.address
      // this.property = '-'
      if (this.notice) {
        return
      }
      if (!this.toAdress) {
        this.notice = 'The address must not be empty'
        return
      } else {
        this.notice = ''
      }
      if (!this.amount) {
        this.amount_notice = 'The amount must not be empty'
        return
      }
      if (Number(this.amount) <= 0) {
        this.amount_notice = 'The amount should not be less than or equal to 0'
        return
      }
      if (Number(this.amount) > this.balance) {
        this.amount_notice = 'Insufficient balance'
        return
      } else {
        this.amount_notice = ''
      }
      // 保证转账的用户存在
      accountInfo(this.toAdress).then(res => {
        if (res.Result === 1) {
          genKey(this)
          accountInfo(account).then(res => {
            if (res.Result === 1) {
              let user = this.$store.state.user
              user.lasthash = res.lasthash
              user.balance = res.balance
              // res.balance = Number(res.balance) / 1000000
              this.$store.commit('SETBALANCE', res.balance)
              this.$store.commit('SETLASTHASH', res.lasthash)
              let lasthash_new = res.lasthash
              let mic_amount = Number(this.amount) * 1000000
              transferOut(
                account,
                this.toAdress,
                '$$',
                lasthash_new,
                this.sign,
                mic_amount
              ).then(res => {
                if (res.Result === 1) {
                  getuserinfo().then(res => {
                    this.$store.commit('SET_USERDATA', res.data)
                    if (this.$store.state.user.bindBot) {
                      this.$store.commit('SetMoreShow', true)
                    } else {
                      this.$store.commit('SetSubmitShow', true)
                      this.closeTransfer()
                    }
                    this.notice = ''
                    this.amount_notice = ''
                    this.amount = ''
                    this.toAdress = ''
                    this.closeTransfer()
                  }).catch(err => {
                    console.log(err)
                  })
                  this.notice = ''
                  this.amount_notice = ''
                  this.amount = ''
                  this.toAdress = ''
                }
                this.closeTransfer()
              }).catch(err => {
                console.log(err)
                this.$toast({
                  'toastMsg': 'Transfer failed, please try again later.'
                })
                this.closeTransfer()
              })
            } else {
              this.$toast({
                'toastMsg': 'Sorry，the wallet address does not exist!'
              })
              return
            }
          }).catch(res => {
            console.log('查询账户信息失败')
          })
        } else {
          this.$toast({
            'toastMsg': 'sorry，the wallet address does not exist'
          })
        }
      }).catch(res => {
        console.log('转账用户账户信息不存在')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.send {
  width: 100%;
  .header {
    width: 100%;
    height: 3rem;
    background: rgba(14, 18, 74, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    .leftarrow {
      // float: left;
      width: 1.13rem;
      line-height: 3rem;
      display: block;
      // margin: 1rem  1.13rem 0 1rem;
      margin-left: 1.43rem;
    }
    .title {
      // float: left;
      text-align: center;
      width: 90%;
      line-height: 3rem;
      font-size: 1.19rem;
      font-family: SF Pro Display;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
  .wrapper {
    width: 100%;
    height:100%;
    background: #f7f7f7;
    padding-top: 1.43rem;
    padding-bottom:3.43rem;
    .adress-wrapper {
      position: relative;
      .adress-input {
        width: 100%;
        // height: 3.25rem;
        background: #fff;
        padding-left: 1.43rem;
        box-sizing: border-box;
        // overflow: hidden;
        .reciver {
          width: 100%;
          font-size: 1rem;
          font-family: SF Pro Display;
          font-weight: 400;
          line-height: 3.25rem;
          color: rgba(0, 0, 0, 1);
        }
        .adress {
          width: 100%;
          border: 0;
          font-size: 1rem;
          font-family: SF Pro Display;
          box-sizing: border-box;
          padding-bottom: 1rem;
          font-weight: 400;
          line-height: 2.25rem;
          color: rgba(0, 0, 0, 1);
          opacity: 0.3;
        }
      }
      .address-attention {
        width: 100%;
        padding-left: 1.43rem;
        box-sizing: border-box;
        font-size: 0.85rem;
        font-family: SF Pro Display;
        font-weight: 400;
        margin-top: 0.8rem;
        margin-bottom: 2rem;
        color: rgba(0, 0, 0, 1);
        opacity: 0.3;
      }
      .warn{
        color:red;
        opacity: 0.7;
      }
      .pop-up {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 7rem;
        width: 90%;
        padding: 1rem;
        background:linear-gradient(90deg,rgba(23,143,254,1) 0%,rgba(23,143,254,1) 100%);
        opacity:1;
        border-radius:.2rem;
        box-sizing: border-box;

        p {
          font-size:0.75rem;
          font-weight:400;
          color: #fff;
        }

        .text {
          width: 14rem;
        }

        .btn {
          font-size:0.75rem;
          font-family:SF Pro Display;
          font-weight:bold;
        }

        &:after {
          content: '';
          display: block;
          position: absolute;
          top: -.4rem;
          left: 1rem;
          width: 0;
          height: 0;
          border-left: .5rem solid transparent;
          border-right: .5rem solid transparent;
          border-bottom: .5rem  solid#178FFE;
        }
      }
    }
    .money-wrapper {
      width: 100%;
      margin-top:4.75rem;
      .money-input {
        background: rgba(255, 255, 255, 1);
        .money-title {
          width: 100%;
          font-size: 1rem;
          font-family: SF Pro Display;
          font-weight: 400;
          padding-top: 1.43rem;
          padding-left: 1.43rem;
          box-sizing: border-box;
          margin-bottom: 1.43rem;
          color: rgba(0, 0, 0, 1);
        }
        .money {
          width: 100%;
          border: 0;
          font-size: 1rem;
          font-family: SF Pro Display;
          padding-left: 1.43rem;
          box-sizing: border-box;
          padding-bottom: 1rem;
          font-weight: 400;
          line-height: 2.25rem;
          color: rgba(0, 0, 0, 1);
          opacity: 0.3;
        }
      }
      .balance-attention {
        width: 90%;
        margin: 0.8rem 0 1.43rem 1.43rem;
        .balance {
          // width: 8.63rem;
          font-size: 0.85rem;
          font-family: SF Pro Display;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          opacity: 0.3;
          margin-right: 1rem;
          display: inline-block;
        }
        .nobalance {
          width: 100%;
          font-size: 0.85rem;
          font-family: SF Pro Display;
          font-weight: 400;
          color: rgba(255, 91, 91, 1);
          display: inline-block;
          margin-top:0.5rem;
        }
      }
    }
    .free {
      width: 100%;
      height: 2.5rem;
      background: linear-gradient(
        90deg,
        rgba(23, 143, 254, 1) 0%,
        rgba(23, 143, 254, 1) 100%
      );
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.65rem;
      font-family: SF Pro Display;
      font-weight: 400;
      // line-height:2.5rem;
      color: rgba(255, 255, 255, 1);
      // box-sizing:border-box;
      .free-attention {
        width: 61%;
        height: 1.86rem;
        border-top: 1px solid rgba(255, 255, 255, 0.15);
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        // padding:0.5rem 0;
        // margin-left:1.43rem;
        line-height: 1.86rem;
      }
      .entry {
        width: 31%;
        text-align: right;
      }
    }
    .sure {
      width: 89%;
      margin: 0 auto;
      margin-top: 6rem;
      height: 2.75rem;
      background: rgba(23, 143, 254, 1);
      line-height: 2.75rem;
      text-align: center;
      border-radius: 4px;
      font-size: 1.19rem;
      font-family: SF Pro Display;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
