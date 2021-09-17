<template>
  <div class="main-layout">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainLayout',
})
</script>

<style lang="scss">
  .main-layout {
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
