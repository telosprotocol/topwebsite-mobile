<template>
    <div class="wechatmodal" @touchmove.prevent>
      <div class="mask" @click="closeModal"></div>
      <img src="@/assets/images/erweima.png" class="wechat">
    </div>
</template>

<script>
export default {
  name: 'WechatModal',
  methods: {
    closeModal () {
      this.$emit('modalShow', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.wechatmodal{
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  .mask{
    width:100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    background:rgba(4,17,38,1);
    opacity:0.8;
  }
  .wechat{
      position: absolute;
      width:3.8rem;
      height:3.8rem;
      z-index:1000;
      left:50%;
      top:50%;
      margin:-1.9rem 0 0 -1.9rem;
    }
  }
</style>
