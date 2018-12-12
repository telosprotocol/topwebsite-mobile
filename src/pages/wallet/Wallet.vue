<template>
  <div>
    <navbar/>
    <message/>
    <myresult/>
  </div>
</template>

<script>
import Navbar from '@/pages/common/Navbar'
import Message from '@/pages/wallet/components/Message'
import Myresult from '@/pages/wallet/components/Myresult'
export default {
  name: 'Wallet',
  components: {
    Navbar,
    Message,
    Myresult
  }
}
</script>

<style lang="scss" scoped>

</style>
