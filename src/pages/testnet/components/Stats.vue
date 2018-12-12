<template>
  <div class="stats">
    <!-- 统计数据 -->
    <div class="total">
      <div class="transca-title">Total Transcations</div>
      <div class="transca-number">{{ $store.state.metrics.metrics.TX_TOTAL_NUM }}</div>
      <div class="newest-area">
        <div class="tps-shard">
          <div class="tps-title">Latest TPS</div>
          <div class="tps-number">{{ $store.state.metrics.metrics.RECENT_TPS }}</div>
        </div>
        <div class="tps-shard">
          <div class="tps-title">Shards</div>
          <div class="tps-number">{{ $store.state.metrics.metrics.SHARD_NUM }}</div>
        </div>
      </div>
      <div class="newest-area">
        <div class="tps-shard">
          <div class="tps-title">Nodes</div>
          <div class="tps-number">{{ $store.state.metrics.metrics.NODES_NUM }}</div>
        </div>
        <div class="tps-shard">
          <div class="tps-title">Total Addresses</div>
          <div class="tps-number">{{ $store.state.metrics.metrics.ACCOUNT_NUM }}</div>
        </div>
      </div>
    </div>
    <!-- summary区域 -->
    <div class="summary">
      <!-- <div class="stats-select">
        <div class="stats-title">Stats</div>
        <select id="area" class="select" @change="selectItem()">
          <option value="0">All</option>
          <option value="1">Shard one</option>
          <option value="2">Shard two</option>
          <option value="3">Shard three</option>
          <option value="4">Shard four</option>
          <option value="5">Shard five</option>
          <option value="6">Shard six</option>
        </select>
      </div> -->
      <div v-if="!show" class="summary-area">
        <div class="summary-title">Summary</div>
        <div class="maxtps-title1">Maximum TPS</div>
        <div class="maxtps-number1">{{ $store.state.metrics.metrics.MAX_TPS }}</div>
        <div class="tps-time">
          <div class="maxtps">
            <div class="maxtps-title">Average transcation confirmation time</div>
            <div class="maxtps-number">{{ $store.state.metrics.metrics.TX_TIME_AVE }}</div>
          </div>
          <div class="maxtps">
            <div class="maxtps-title">Fastest transaction confirmation time</div>
            <div class="maxtps-number">{{ $store.state.metrics.metrics.TX_TIME_MIN }}</div>
          </div>
        </div>
      </div>
      <div v-else class="summary-area">
        <div class="summary-title">Summary</div>
        <div class="shard-total">
          <div class="maxtps-shardtitle">Maximum TPS</div>
          <div class="max-shardnumber">{{ $store.state.metrics.metrics.SHARD_MAX_TPS[shard-1] }}</div>
        </div>
      </div>
    </div>
    <!-- 折线图表区域 -->
    <div id="transactionChart" class="transaction"/>
  </div>
</template>

<script>
export default {
  name: 'Status',
  data() {
    return {
      shard: 0,
      show: false
    }
  },
  watch: {
    shard(val, oldval) {
      if (val > 0) {
        this.show = true
      }
      this.$store.dispatch('GetMetrics', { withoutAnimation: false }).then(res => {
        this.handleChartData(res, val)
      })
    }
  },
  created() {
    this.$store.dispatch('GetMetrics', { withoutAnimation: false }).then(res => {
      this.handleChartData(res, -1)
    }).catch(err => {
      console.log(err)
    })
  },
  mounted() {
    this.pollingTps()
  },
  beforeDestroy() {
    clearInterval(this.tpsId)
  },
  methods: {
    handleChartData(data, number) {
      const tranDate = []
      const tranAmount = []
      var shard_TX = data.metrics.SHARD_TX
      var shardArry = shard_TX[number]
      for (var index in shardArry) {
        tranDate.push(shardArry[index].day)
        tranAmount.push(shardArry[index].val)
      }
      this.drawLine(tranDate, tranAmount)
    },
    // 5s刷新一次
    pollingTps() {
      this.tpsId = setInterval(() => {
        this.$store.dispatch('GetMetrics', { withoutAnimation: false })
      }, 5000)
    },
    // 每日交易图表
    drawLine(x, y) {
      const transactionChart = this.$echarts.init(
        document.getElementById('transactionChart')
      )
      window.onresize = function() {
        transactionChart.resize()
      }
      transactionChart.setOption({
        tooltip: {
          trigger: 'axis',
          position: function(pt) {
            return [pt[0], '10%']
          }
        },
        title: {
          left: 'left',
          text: 'Daily transcations'
        },
        grid: {
          x2: 40
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: x
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            start: 0,
            end: 10,
            handleIcon:
              'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0, 0, 0, 0.6)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }
        ],
        series: [
          {
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: 'blue'
            },
            data: y
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .stats{
    width:100%;
    .total{
      width:89%;
      margin:0 auto;
      margin-top:1rem;
      background:rgba(243,199,89,1);
      padding:2rem 0;
      opacity:1;
      .transca-title{
        width:100%;
        font-size:0.88rem;
        font-family:SF Pro Display;
        font-weight:400;
        color:rgba(255,255,255,1);
        opacity:0.7;
        text-align:center;
        margin-bottom: 0.6rem;
      }
      .transca-number{
        width:100%;
        font-size:2rem;
        font-family:SF Pro Display;
        font-weight:bold;
        color:rgba(255,255,255,1);
        opacity:1;
        text-align:center;
        margin-bottom:2rem;
      }
      .newest-area{
        width:100%;
        margin-top:2rem;
        overflow: hidden;
        .tps-shard{
          width: 50%;
          float: left;
          .tps-title{
            width:100%;
            text-align:center;
            font-size:0.88rem;
            font-family:SF Pro Display;
            font-weight:400;
            color:rgba(255,255,255,1);
            opacity:0.7;
            margin-bottom: 0.6rem;
          }
          .tps-number{
            width:100%;
            text-align: center;
            font-size:2rem;
            font-family:SF Pro Display;
            font-weight:bold;
            color:rgba(255,255,255,1);
            opacity:1;
          }
        }
      }
    }
    .summary{
      width:89%;
      margin:0 auto;
      margin-top:2rem;
      .stats-select{
        width:100%;
        overflow:hidden;
        .stats-title{
          width:4.81rem;
          float: left;
          font-size:1.5rem;
          font-family:SF Pro Display;
          font-weight:bold;
          line-height:2.25rem;
          color:rgba(0,0,0,1);
          opacity:0.8;
        }
        .select{
          float:right;
          width:7.06rem;
          height:1.63rem;
          margin-top:.4rem;
          border:2px solid rgba(89,104,240,1);
          opacity:1;
          border-radius:4px;
          appearance:none;
          -moz-appearance:none;
          -webkit-appearance:none;
          background: url('../../../assets/images/arrowSelect.jpg') no-repeat scroll right center;
          padding-left:.6rem;
          option{
            font-size:0.75rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(188,188,188,1);
            opacity:1;
          }
        }
      }
      .summary-area{
        width:100%;
        // height:15.34rem;
        margin:0 auto;
        margin-top:1rem;
        background:rgba(166,183,241,1);
        opacity:1;
        .summary-title{
          // width:100%;
          height:2.25rem;
          border-bottom:2px solid rgba(255,255,255,0.1);
          padding-left:1rem;
          font-size:1rem;
          font-family:SF Pro Display;
          font-weight:bold;
          line-height:2.25rem;
          color:rgba(255,255,255,1);
          opacity:1;
        }
        .maxtps-title1{
          width:100%;
          margin:0 auto;
          font-size:0.88rem;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(255,255,255,1);
          opacity:1;
          margin-bottom: .6rem;
          margin-top:1.25rem;
          text-align: center;
        }
        .maxtps-number1{
          width:100%;
          margin: 0 auto;
          font-size:1.5rem;
          font-family:Arial;
          font-weight:bold;
          color:rgba(82,93,189,1);
          opacity:1;
          text-align: center;
          margin-bottom: 1.25rem;
        }
        .tps-time{
          width:100%;
          overflow: hidden;
          .maxtps{
            width:50%;
            float: left;
            .maxtps-title{
              font-size:0.88rem;
              line-height: 1.25rem;
              font-family:Microsoft YaHei;
              font-weight:400;
              color:rgba(255,255,255,1);
              opacity:1;
              margin-bottom: .6rem;
              margin-top:1.25rem;
              text-align: center;
            }
            .maxtps-number{
              font-size:1.5rem;
              font-family:Arial;
              font-weight:bold;
              color:rgba(82,93,189,1);
              opacity:1;
              text-align: center;
              margin-bottom: 1.25rem;
            }
          }
        }
        .shard-total{
          width: 100%;
          padding-bottom: 1.44rem;
          .maxtps-shardtitle{
            width:100%;
            text-align:center;
            font-size:0.88rem;
            line-height: 1.25rem;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(255,255,255,1);
            opacity:1;
            margin-bottom: .6rem;
            margin-top:1.25rem;
          }
          .max-shardnumber{
            width:100%;
            font-size:1.5rem;
            font-family:Arial;
            font-weight:bold;
            color:rgba(82,93,189,1);
            opacity:1;
            text-align: center;
          }
        }
      }
    }
    .transaction{
      width:89%;
      margin: 0 auto;
      height:17.07rem;
      margin-top:1.44rem;
    }
  }
</style>
