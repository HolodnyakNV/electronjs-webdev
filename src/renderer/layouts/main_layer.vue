<template>
<div>
  <app-header
    e_min='min1'
    e_max='max1'
    all_close='cls2,cls1'
  />
  <nuxt />
</div>
</template>

<script>
import appHeader from '@/components/header'
import ButtonCommon from '@/components/ButtonCommon'

export default {
  name: 'main_layer',
  components: {
    appHeader,
    ButtonCommon
  },
}
</script>

<style scoped>
  .menu {
    position: relative;
    display: flex;
    justify-content: center;
    min-width: 1000rem;
  }
</style>