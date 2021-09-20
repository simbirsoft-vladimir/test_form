<template>
  <div class="realty-search-form-toggle">
    <span class="realty-search-form-toggle__label">Основной поиск</span>
    <base-toggle
      :checked="checked"
      class="realty-search-form-toggle__toggler"
      @toggle="$emit('toggle')"
    />
    <span class="realty-search-form-toggle__label">Искать по названию</span>
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
  .realty-search-form-toggle {
    display: flex;
    align-items: center;

    &__realty-search-form-toggle__label {
      color: #506981;

      &_active {
        color: #ADB9C4;
      }
    }

    &__toggler {
      margin-right: 4px;
    }
  }
</style>
