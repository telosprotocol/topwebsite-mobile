<template>
  <div class="Testnet">
    <navbar/>
    <entry/>
    <stats/>
    <nodes/>
  </div>
</template>

<script>
import Navbar from '@/pages/common/Navbar'
import Entry from '@/pages/testnet/components/Entry'
import Stats from '@/pages/testnet/components/Stats'
import Nodes from '@/pages/testnet/components/Nodes'
export default {
  name: 'Testnet',
  components: {
    Navbar,
    Entry,
    Stats,
    Nodes
  }
}
</script>

<style lang="scss" scoped>

</style>
