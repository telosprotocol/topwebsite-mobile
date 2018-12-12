<template>
  <div class="event">
    <navbar/>
    <div class="event-header">
      <!-- <img src="@/assets/images/faq/EventBgpic.png" class="logo-image"> -->
      <img :src="imagePath" class="logo-image" @click="openBanner()">
      <!-- <img src="@/assets/images/faq/moreDetails.png" class="moreBtn" @click="openBanner()"> -->
    </div>
    <div class="info-list">
      <div  v-for="(item,index) in detailList" :key="index" class="item-text">
          <div class="info-details" >
            <img class="list-image" :src="'api/'+item.imagePath" @click="openDetail(item.url)">
            <div class="title" @click="openDetail(item.url)">{{item.name}}</div>
            <div class="time-place">
                <span class="canledar-area"><img src="@/assets/images/faq/calendar.png" class="canledar-image"></span>
                <span class="time">{{item.showDate}}</span>
                <span class="position-area"><img src="@/assets/images/faq/position.png" class="position-image"></span>
                <span class="place">{{item.address}}</span>
            </div>
            <div class="descption-details">{{item.content}}</div>
          </div>
      </div>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
    <v-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import vFooter from '@/pages/index/components/Footer'
import {getEventBanner, getEventDetails} from '../../../fetch/api'
import clamp from '../../../static/clamp.js'
import InfiniteLoading from 'vue-infinite-loading' // 无限加载
export default {
  name: 'Event',
  components: {
    Navbar,
    vFooter,
    InfiniteLoading
  },
  data () {
    return {
      bannerData: '',
      imagePath: '',
      detailList: [],
      total: 0,
      pageSize: 10,
      page: 1
    }
  },
  created () {
    this.getBannerData()
    this.getDetailsData()
  },
  updated () {
    this.handleContent()
  },
  methods: {
    infiniteHandler ($state) {
      getEventDetails(10, this.page * 10, '').then(res => {
        if (res.data.data.rows.length) {
          this.page += 1
          this.detailList = this.detailList.concat(res.data.data.rows)
          // console.log(this.detailList)
          $state.loaded()
        } else {
          $state.complete()
        }
      }).catch(res => {
        console.log('get detailData failed')
      })
    },
    // js解决多行文本溢出省略号兼容性(firefox)
    handleContent () {
      this.$nextTick(() => {
        var descptions = document.getElementsByClassName('descption-details')
        for (var i = 0; i < descptions.length; i++) {
          window.$clamp(descptions[i], {clamp: 6})
          // console.log(clamp)
        }
      })
    },
    // 获取banner数据
    getBannerData () {
      getEventBanner(1).then(res => {
        this.bannerData = res.data.data.banner[0]
        this.imagePath = 'api/' + this.bannerData.imagePath
      }).catch(res => {
        console.log('get bannerData failed')
      })
    },
    // created时获取内容数据
    getDetailsData () {
      getEventDetails(10, 0, '').then(res => {
        this.detailList = res.data.data.rows
      }).catch(res => {
        console.log('get detailData failed')
      })
    },
    openDetail (url) {
      window.open(url, '_blank')
    },
    openBanner () {
      window.open(this.bannerData.url, '_blank')
    },
    openTelegram () {
      window.open('https://t.me/topnetwork_top', '_blank')
    },
    // 回到顶部
    toTop () {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .event{
    width: 100%;
    background:rgba(4,17,38,1);
    .event-header{
      width:100%;
      background-color:rgba(4,17,38,1);
      position: relative;
      .moreBtn{
        width:5.23rem;
        height:0.93rem;
        border-radius: 0.465rem;
        position: absolute;
        left:0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top:9rem;
      }
      .logo-image{
          width:100%;
        }
    }
    .info-list{
      padding:0.93rem 0 1.46rem 0;
      width:8.67rem;
      margin:0 auto;
      text-align: left;
      .item-text{
        margin-bottom: .93rem;
        .list-image{
        width:100%;
        margin:0 auto;
        border-radius:4px;
      }
      .title{
        width:100%;
        font-size:0.37rem;
        font-family:Cera Pro;
        font-weight:500;
        color:rgba(255,255,255,1);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space:nowrap;
        margin:0.4rem 0 0.26rem 0;
      }
      .time-place{
        width: 100%;
        .canledar-area{
          display: inline-block;
          margin-right: 0.26rem;
          .canledar-image{
            width:0.35rem;
            height:0.35rem;
          }
        }
        .time{
          display: inline-block;
          margin-right:0.49rem;
          font-size:0.35rem;
          font-family:Cera Pro;
          font-weight:500;
          color:rgba(255,255,255,1);
          vertical-align: middle;
          opacity: 0.5;
        }
        .position-area{
          display: inline-block;
          margin-right: 0.26rem;
          .position-image{
            width:0.35rem;
            height:0.35rem;
          }
        }
        .place{
          font-size:0.35rem;
          font-family:Cera Pro;
          font-weight:500;
          color:rgba(255,255,255,1);
          vertical-align: middle;
          opacity: 0.5;
        }
      }
      .descption-details{
        width:100%;
        font-size:0.35rem;
        font-family:Arial;
        font-weight:300;
        line-height:0.4rem;
        color:rgba(138,159,175,1);
        opacity: 0.5;
        position: relative;
        overflow: hidden;
        margin-top:.4rem;
      }
      .descption-details-after:after{
        content: "...";
        position: absolute;
        bottom: 0;
        right: 0;
        padding-left: 0.533rem;
        background: -webkit-linear-gradient(left, transparent, #fff 55%);
        background: -moz-linear-gradient(left, transparent, #fff 55%);
        background: -o-linear-gradient(left, transparent, #fff 55%);
        background: linear-gradient(to right, transparent, #fff 55%);
      }
      }
    }
  }
</style>
