<template>
  <button
    :class="customClass"
    type="button"
    class="base-button"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseButton',
  props: {
    outline: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    customClass() {
      return {
        'base-button_outline': this.outline,
        'base-button_rounded': this.rounded,
      }
    },
  }
})
</script>

<style lang="scss">
  .base-button {
    position: relative;
    height: 44px;
    width: 130px;
    outline: none;
    border: none;

    &:hover {
      &::after {
        position: absolute;
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: black;
        opacity: 0.1;
      }
    }


    &_outline {
      background-color: unset;
      border: 1px solid;
    }

    &_rounded {
      border-radius: 4px;
    }
  }
</style>
