<template>
  <form class="base-form">
    <slot />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseForm'
})
</script>

<style lang="scss">
  .base-form {
    width: 100%;
    border-radius: 4px;
    overflow: auto;
  }
</style>
