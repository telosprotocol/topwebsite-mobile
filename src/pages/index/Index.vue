<template>
    <div>
      <navbar/>
      <v-header/>
      <fullstack/>
      <team/>
      <invistor/>
      <v-footer/>
    </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import vHeader from '@/pages/index/components/Header'
import Fullstack from '@/pages/index/components/Fullstack'
import Team from '@/pages/index/components/Team'
import Invistor from '@/pages/index/components/Invistor'
import vFooter from '@/pages/index/components/Footer'
export default {
  name: 'Index',
  components: {
    vHeader,
    Fullstack,
    Navbar,
    Team,
    Invistor,
    vFooter
  }
}
</script>

<style lang="scss" scoped>
</style>
