<template>
  <div class="realty-search-form-area-editor">
    <base-button
      outline
      rounded
      class="realty-search-form-area-editor__button"
      @click="$emit('add-estate-params', 'price')"
    >
      Добавить цену
    </base-button>
    <base-form-group>
      <base-input
        :value="from"
        placeholder="От"
        class="realty-search-form-area-editor__input realty-search-form-area-editor__input_first"
        @input="$emit('update:from', $event)"
      />
      <base-input
        :value="to"
        placeholder="До"
        class="realty-search-form-area-editor__input"
        @input="$emit('update:to', $event)"
      />
      <div class="realty-search-form-area-editor__input-append">
        <span>м<sup>2</sup></span>
      </div>
    </base-form-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from './ui/BaseButton.vue'
import BaseFormGroup from './ui/BaseFormGroup.vue'
import BaseInput from './ui/BaseInput.vue'

export default Vue.extend({
  name: 'RealtySearchFormAreaEditor',
  components: {BaseFormGroup, BaseInput, BaseButton},
  props: {
    from: {
      type: Number,
      default: null,
    },
    to: {
      type: Number,
      default: null,
    },
  },
})
</script>

<style lang="scss">
  .realty-search-form-area-editor {
    display: flex;
    justify-content: space-between;

    &__button {
      width: 100%;
      height: 44px;
      max-width: 550px;
      color: #506981;
    }

    &__input {
      max-width: 138px;

      &_first {
        margin-right: 1px;
      }
    }

    &__input-append {
      padding-top: 6px;
      width: 55px;
      background-color: #C2E3F2;
      text-align: center;
    }
  }
</style>