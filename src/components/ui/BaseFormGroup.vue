<template>
  <div class="base-form-group">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseFormGroup',
})
</script>

<style lang="scss">
  .base-form-group {
    display: flex;

    input,
    label,
    button,
    div {
      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
</style>
