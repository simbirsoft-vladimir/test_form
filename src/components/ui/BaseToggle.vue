<template>
  <div class="base-toggle">
    <div class="base-toggle__inner">
      <input class="base-toggle__native" type="checkbox" />
      <div class="base-toggle__track"></div>
      <div class="base-toggle__thumb"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseToggle',
})
</script>

<style lang="scss">
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
      padding: .325em .3em;
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
      opacity: .5;
      background: currentColor;
      border-radius: .175em;
      height: .35em;
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
    }
  }
</style>
