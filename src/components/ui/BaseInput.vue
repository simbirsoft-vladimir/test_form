<template>
  <input
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
    class="base-input"
  >
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseInput',
})
</script>

<style lang="scss">
  .base-input {
    padding: 0 20px;
    border: none;
    outline: none;
    font-size: 18px;
  }
</style>
