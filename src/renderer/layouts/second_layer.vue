<template>
<div>
  <app-header
    e_min='min2'
    e_max='max2'
    e_close='hid'
  />
  <nuxt />
</div>
</template>

<script>
import appHeader from '@/components/header'
import ButtonCommon from '@/components/ButtonCommon'

export default {
  name: 'second_layer',
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