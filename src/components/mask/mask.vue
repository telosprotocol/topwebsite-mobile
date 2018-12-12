<template>
  <div class="mask">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    column: {
      type: Number,
      default: 3
    }
  }
}
</script>
<style scoped>
    .mask {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.6);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
    }
</style>
