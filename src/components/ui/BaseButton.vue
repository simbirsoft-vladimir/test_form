<template>
  <button
    type="button"
    class="base-button"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseButton',
})
</script>

<style lang="scss">
  .base-button {
    height: 44px;
    width: 130px;
    outline: none;
    border: none;
  }
</style>
