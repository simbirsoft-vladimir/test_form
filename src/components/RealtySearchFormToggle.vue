<template>
  <div class="realty-search-form-toggle">
    <span
      :class="checked ? '' : 'realty-search-form-toggle__label_active'"
      class="realty-search-form-toggle__label"
      @click="$emit('toggle')"
    >
      Основной поиск
    </span>
    <base-toggle
      :checked="checked"
      class="realty-search-form-toggle__toggler"
      @toggle="$emit('toggle')"
    />
    <span
      :class="checked ? 'realty-search-form-toggle__label_active' : ''"
      class="realty-search-form-toggle__label"
      @click="$emit('toggle')"
    >
      Искать по названию
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseToggle from './ui/BaseToggle.vue'

export default Vue.extend({
  name: 'RealtySearchFormToggle',
  components: { BaseToggle },
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

  .realty-search-form-toggle {
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 16px;

    @media (max-width: $screen-sm) {
      width: 100%;
      margin: 20px 0;
      justify-content: space-between;
    }

    &__label {
      border-bottom: 1px dotted;
      line-height: 1;
      color: #506981;
      cursor: pointer;

      &_active {
        color: #ADB9C4;
        border: none;
        pointer-events: none;
      }
    }

    &__toggler {
      margin-right: 4px;

      @media (max-width: $screen-sm) {
        display: none;
      }
    }
  }
</style>
