<template>
  <div class="realty-search-form-params-toggler">
    <div
      class="flex align-center cursor-pointer realty-search-form-params-toggler__price-block"
      :class="estateParameterType === 'price' ? 'realty-search-form-params-toggler_active' : ''"
      @click="$emit('add-estate-params', 'price')"
    >
      <div class="realty-search-form-params-toggler__icon realty-search-form-params-toggler__icon-price">
        <img v-if="estateParameterType === 'price'" src="../assets/images/times-circle-regular.svg" alt="">
        <img v-else src="../assets/images/plus-circle.svg" alt="">
      </div>
      <span class="realty-search-form-params-toggler__icon-text">Цена</span>
    </div>
    <div
      class="flex align-center cursor-pointer"
      :class="estateParameterType === 'area' ? 'realty-search-form-params-toggler_active' : ''"
      @click="$emit('add-estate-params', 'area')"
    >
      <div class="realty-search-form-params-toggler__icon">
        <img v-if="estateParameterType === 'area'" src="../assets/images/times-circle-regular.svg" alt="">
        <img v-else src="../assets/images/plus-circle.svg" alt="">
      </div>
      <span class="realty-search-form-params-toggler__icon-text">Метраж</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RealtySearchFormParamsToggler',
  props: {
    estateParameterType: {
      type: String,
      required: true,
    }
  }
})
</script>

<style lang="scss">
  @import'@/styles/variables.scss';

  .realty-search-form-params-toggler {
    display: flex;

    @media (max-width: $screen-sm) {
      width: 100%;
      margin-bottom: 20px;
      justify-content: space-between;
    }

    &__price-block {
      margin-right: 20px;
    }

    &__icon {
      margin-right: 12px;
      text-align: center;
      height: 18px;
      line-height: 18px;
      width: 18px;
      color:  #506981;
    }

    &__icon-symbol {
      vertical-align: middle;
    }

    &__icon-text {
      font-size: 16px;
    }

    &_active {
      color: #88949f;
      pointer-events: none;
    }
  }
</style>
