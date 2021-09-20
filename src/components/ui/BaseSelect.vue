<template>
  <select class="base-select">
    <option
      v-for="(option, index) in options"
      :key="option[key]"
    />
  </select>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseSelect',

  props: {
    options: {
      type: Array,
      required: true,
    },
    key: {
      required: false,
    }
  }
})
</script>

<style lang="scss">
  .base-select {
    min-width: 100px;
    background-color: #fff;
    border: none;
    outline: none;
    height: 44px;
    width: 256px;
  }
</style>