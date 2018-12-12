<template>
  <div class="seemore" @touchmove.prevent>
    <div class="mask"></div>
    <div class="modal">
      <div class="text">Congratulations! You have received your reward for today's transaction! Reward delivered on TOP Network Telegram bot.</div>
      <!-- <router-link to="/transferpage" tag="div" class="more"> Close</router-link> -->
      <div class="more" @click="close">Close</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeeMore',
  methods: {
    close() {
      this.$store.commit('SetMoreShow', false)
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
  }
</style>
