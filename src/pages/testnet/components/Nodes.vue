<template>
  <div class="nodes">
    <div class="nodes-wrapper">
      <div class="nodes-title">Nodes</div>
      <div class="map">
        <div id="main" class="worldmap"/>
      </div>
      <ul class="nodes-annotation">
        <li>
          <div class="annotation">
            <span class="circle"/>
            <span class="text">Advance node</span>
          </div>
          <div class="nodes-number">({{ $store.state.metrics.serverCountData.ADVANCE }})</div>
        </li>
        <li>
          <div class="annotation">
            <span class="circle bgred"/>
            <span class="text">Consensus node</span>
          </div>
          <div class="nodes-number">({{ $store.state.metrics.serverCountData.CONSENSUS }})</div>
        </li>
        <li>
          <div class="annotation">
            <span class="circle bgblue"/>
            <span class="text">Edge node</span>
          </div>
          <div class="nodes-number footer">({{ $store.state.metrics.serverCountData.EDGE }})</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import '../../../../node_modules/echarts/map/js/world.js'

export default {
  name: 'Nodes',
  data() {
    return {}
  },
  created() {
    this.$store
      .dispatch('GetMetrics', { withoutAnimation: false })
      .then(res => {
        this.handleMapData(res)
      })
  },
  methods: {
    handleMapData(data) {
      var arry = []
      let mydict = {}
      for (var i = 0; i < data.servers.length; i++) {
        var total = data.servers[i].total
        var key = data.servers[i].longitude + data.servers[i].latitude
        var geo = [data.servers[i].longitude, data.servers[i].latitude]
        var v = mydict[key]
        if (v) {
          v.v += total
        } else {
          v = {}
          v.geo = geo
          v.v = total
          mydict[key] = v
        }
      }
      for (let prop in mydict) {
        let geo = mydict[prop].geo
        let val = mydict[prop].v
        arry.push({
          type: 'Node',
          value: geo.concat(val)
        })
      }

      this.drawMap(arry)
    },
    // 节点地图分布
    drawMap(nodesData) {
      var myChart = echarts.init(document.getElementById('main'))
      window.onresize = function() {
        myChart.resize()
      }
      myChart.setOption({
        backgroundColor: '#fff',
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            return params.value[2]
          }
        },
        legend: {
          orient: 'vertical',
          x: 'left'
          // data: ['Consensus node', 'Advance  node', 'Edge node']
        },
        geo: {
          map: 'world',
          label: {
            emphasis: {
              show: false
            }
          },
          scaleLimit: { min: 1, max: 3 },
          itemStyle: {
            normal: {
              areaColor: '#ACD6FF',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#ACD6FF'
            }
          }
        },
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            // data: convertData([
            //   { type: 'EDGE', value: 50 },
            //   { type: 'CONSENSUS', value: 100 },
            //   { type: 'ADVANCE', value: 250 }
            // ]),
            data: nodesData,
            symbolSize: 12,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                borderColor: '#fff',
                borderWidth: 1
              }
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .nodes{
    width:100%;
    margin-top:2rem;
    .nodes-wrapper{
      width:89%;
      margin:0 auto;
      .nodes-title{
        width:100%;
        font-size:1.5rem;
        font-family:SF Pro Display;
        font-weight:bold;
        color:rgba(0,0,0,1);
        opacity:0.8;
      }
      .map{
        width:100%;
        margin:0 auto;
        margin-top:1.44rem;
        height:11.13rem;
        background:rgba(89,104,240,0.05);
        .worldmap{
          width:100%;
          // margin:0 auto;
          // margin-top:1.44rem;
          height:11.13rem;
          // background:rgba(89,104,240,0.05);
        }
      }
      .nodes-annotation{
        width:100%;
        margin-top:1rem;
        .annotation{
          width:100%;
          margin-top:1.2rem;
          .circle{
            width:0.5rem;
            height:0.5rem;
            background:rgba(89,240,213,1);
            border-radius:50%;
            display: inline-block;
          }
          .bgred{
            background:rgba(234,104,113,1);
          }
          .bgblue{
            background:rgba(89,104,240,1);
          }
          .text{
            font-size:0.88rem;
            font-family:SF Pro Display;
            font-weight:400;
            color:rgba(68,68,68,1);
            opacity:1;
          }
        }
        .nodes-number{
          font-size:0.69rem;
          font-family:SF Pro Display;
          font-weight:400;
          margin-top:.4rem;
          text-indent: 0.6rem;
          color:rgba(136,136,136,1);
        }
        .footer{
          margin-bottom: 2.5rem;
        }
      }
    }
  }
</style>
