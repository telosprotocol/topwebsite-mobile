<template>
  <div class="myresult">
    <div class="title">My Transaction Records</div>
    <div v-if="!list" class="not-trading">
      <img src="@/assets/images/trading.png">
      <p>No transaction records are available</p>
    </div>
    <div ref="wrapper" class="main-body">
      <mt-loadmore ref="loadmore" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="isAutoFill">
        <ul class="result" >
          <li v-for="item in list" :key="item.id" class="result-item">
            <div class="address">{{ item.source }}</div>
            <div class="amount-time">
              <div :class="[item.amount<0?'amount color1':'amount color2']">{{ item.amount }}</div>
              <div class="time">{{ item.rpc_time }}</div>
            </div>
          </li>
        </ul>
      </mt-loadmore>
      <div v-show="moreshow" class="pullup">Pull up to load more... </div>
      <div v-show="loadshow" class="pullup">Loading...</div>
      <div v-show="endshow" class="pullup">Already in the end </div>
    </div>
  </div>
</template>

<script>
import { accountPending, transferIn, accountHistory, accountInfo } from '@/api/fetch'
import { myHistory, genKey } from '@/utils/common'
import { timeDecorate } from '@/utils/date'
import { isOutIn } from '@/utils/arry'

export default {
  name: 'Myresult',
  data() {
    return {
      account: '',
      sign: '',
      allLoaded: false,
      isAutoFill: false,
      pending: false,
      currentpage: 1,
      moreshow: false,
      loadshow: false,
      endshow: false
    }
  },
  computed: {
    list() {
      return this.$store.state.top.list
    },
    count() {
      return this.$store.state.top.count
    }
  },
  mounted() {
    this.getMyHistory()
    this.PollingToTransfer()
  },
  beforeDestroy() {
    clearInterval(this.myResultId)
    clearInterval(this.transferId)
  },
  methods: {
    // 查询我的交易记录
    getMyHistory() {
      let account = this.$store.state.user.address
      myHistory(this, account, 0, 15)
    },
    // 3s刷新一次转账接收
    PollingToTransfer() {
      this.transferId = setInterval(() => {
        this.getPendingInfo()
      }, 2000)
    },
    getPendingInfo() {
      let account = this.$store.state.user.address
      let vm = this
      accountPending(account, 1).then(res => {
        if (res.Result === 1) {
          var counts = Number(res.count)
          if (counts === 0) {
            return
          } else {
            // for (let i = 0; i < count; i++) {
            //   let block = res.blocks[i].block
            //   let sender = res.blocks[i].sender
            //   let amount = Number(res.blocks[i].amount / 1000000).toFixed(3)
            //   vm.transIn(block, sender, amount)
            // }
            let block = res.blocks[0].block
            let sender = res.blocks[0].sender
            let amount = Number(res.blocks[0].amount / 1000000).toFixed(3)
            vm.transIn(block, sender, amount)
          }
        }
      }).catch(err => {
        console.log(err)
      })
    },
    transIn(block, sender, amount) {
      if (this.pending) {
        return
      }
      this.pending = true
      let account = this.$store.state.user.address
      let lasthash = this.$store.state.user.lasthash
      let that = this
      genKey(this)
      transferIn(account, block, lasthash, sender, amount, this.sign).then(res => {
        that.pending = false
        if (res.Result === 1) {
          accountInfo(account).then(res => {
            if (res.Result === 1) {
              let user = this.$store.state.user
              user.lasthash = res.lasthash
              user.balance = res.balance
              this.$store.commit('SETBALANCE', res.balance)
              this.$store.commit('SETLASTHASH', res.lasthash)
            }
          }).catch(res => {
            console.log('查询账户信息失败')
          })
          myHistory(this, account, 0, 15)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 上拉加载
    loadBottom() {
      if (this.count <= 15) {
        return
      }
      this.loadshow = true
      this.moreshow = false
      let account = this.$store.state.user.address
      let page = this.currentpage
      let _this = this
      accountHistory(account, page, 15).then(res => {
        var totalpage = res.count / 15
        if (_this.currentpage >= totalpage) {
          _this.allLoaded = true
          this.endshow = true
          this.loadshow = false
          return
        }
        timeDecorate(res.blocks, 'rpc_time')
        isOutIn(account, res.blocks, 'transaction_type', 'amount', 'destination', 'source', 'source_tag', 'destination_tag')
        let newList = _this.list.concat(res.blocks)
        _this.$store.commit('SetList', newList)
        _this.currentpage++
        _this.$refs.loadmore.onBottomLoaded()
        this.loadshow = false
        this.moreshow = true
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .myresult{
    width: 89%;
    margin:0 auto;
    padding-bottom: 1.43rem;
    .title{
      width:100%;
      font-size:1rem;
      font-family:SF Pro Display;
      font-weight:400;
      color:rgba(0,0,0,1);
    }
    // 无交易记录的样式
    .not-trading {
      margin-top: 1rem;
      text-align: center;
      img {
        // width: 2rem;
        height: 3rem;
      }
      p {
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size:.75rem;
        font-weight:400;
        // line-height:1.94rem;
        color:rgba(68,68,68,1);
        opacity:0.3;
      }
    }
    .result{
      width: 100%;
      margin: 0 auto;
      .result-item{
        width:100%;
        border-bottom: 2px solid rgba(0,0,0,.05);
        padding-bottom:1rem;
        padding-top:1.4rem;
        height:2.5rem;
        overflow: hidden;
        .address{
          width:53%;
          height:2.5rem;
          float: left;
          font-size:0.85rem;
          font-family:SF Pro Display;
          font-weight:400;
          line-height:1.23rem;
          color:rgba(68,68,68,1);
          margin-right:12.9%;
          word-break:break-all;
          line-height:1.25rem;
          // white-space: nowrap;
          // overflow: hidden;
          // text-overflow: ellipsis;
        }
        .amount-time{
          float: left;
          width:28.4%;
          .amount{
            width:100%;
            font-size:0.88rem;
            font-family:SF Pro Display;
            font-weight:bold;
            text-align:right;
          }
           .color1{
             color:red;
           }
          .color2{
            color:green;
          }
          .time{
            width:100%;
            font-size:0.79rem;
            font-family:SF Pro Display;
            font-weight:400;
            margin-top:.5rem;
            text-align:right;
            color:rgba(0,0,0,1);
            opacity:0.3;
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  .main-body {
    overflow: scroll;
    touch-action: none;
    margin-top:1.25rem;
    // overflow-y: hidden;
    .mint-loadmore-text{
      display: none !important;
    }
    .pullup{
      text-align:center;
      font-size:.75rem;
      margin-top:1.25rem;
    }
    .mint-loadmore-content{
      transform:translate3d(0px, -20px, 0px) !important;
    }
  }
</style>
