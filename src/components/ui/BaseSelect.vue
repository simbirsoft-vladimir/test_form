<template>
  <label class="base-select">
    <select
      class="base-select__native"
      @change="$emit('select', $event.target.value)"
    >
      <option
        v-for="(option, index) in options"
        :key="option[optionKey] || index"
        :value="option[optionValue]"
      >
        {{ option[optionText] || option }}
      </option>
    </select>
  </label>
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
    optionKey: {
      required: false,
    },
    optionText: {
      required: false,
    },
    optionValue: {
      required: true,
    },
  },
})
</script>

<style lang="scss">
  .base-select {
    position: relative;
    overflow: hidden;
    background-color: #fff;

    &::after {
      content: '\23F7';
      position: absolute;
      top: calc(50% - 13px);
      right: 20px;
      z-index: 100;
      color: #63758C;
    }

    &__native {
      position: relative;
      min-width: 100px;
      padding: 0 20px;
      border: none;
      outline: none;
      height: 44px;
      width: 256px;
      font-size: 18px;
      color: #333333;
      font-weight: 400;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: unset;
      z-index: 101;
    }

  }
</style>