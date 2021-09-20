<template>
  <div
    class="base-toggle"
    @click="$emit('toggle')"
  >
    <div class="base-toggle__inner">
      <input class="base-toggle__native"
        :checked="checked"
        type="checkbox"
      />
      <div class="base-toggle__track"></div>
      <div
        :class="checked ? 'base-toggle__thumb_truthy' : ''"
        class="base-toggle__thumb"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseToggle',
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss">
  @import'@/styles/variables.scss';

  .base-toggle {
    vertical-align: middle;
    display: inline-flex;
    cursor: pointer;
    outline: none;
    flex-wrap: nowrap;
    align-items: center;

    &__inner {
      position: relative;
      user-select: none;
      font-size: 40px;
      height: 1em;
      min-width: 1.4em;
      padding: .25em .3em;
      width: 1.4em;
    }

    &__native {
      position: absolute;
      display: none;
      margin: none;
      padding: none;
      height: 1px;
      width: 1px;
    }

    &__track {
      background: $success;
      height: 22px;
      border-radius: 11px;
      width: 40px;
    }

    &__thumb {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      height: .5em;
      left: .25em;
      top: .25em;
      transition: left .22s cubic-bezier(.4,0,.2,1);
      user-select: none;
      width: .5em;
      z-index: 0;

      &_truthy {
        left: .7em;
      }

      &::after {
        background: #fff;
        border-radius: 50%;
        bottom: 0;
        box-shadow: 0 3px 1px -2px #0003, 0 2px 2px 0 #00000024, 0 1px 5px 0 #0000001f;
        content: "";
        left: 3px;
        position: absolute;
        right: -3px;
        top: 1.5px;
      }
    }
  }
</style>
