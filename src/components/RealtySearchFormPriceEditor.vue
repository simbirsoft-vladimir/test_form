<template>
  <div class="realty-search-form-price-editor">
    <base-form-group>
      <base-input
        :value="from"
        placeholder="От"
        type="number"
        class="realty-search-form-price-editor__input"
        @input="$emit('update:from', $event)"
      />
      <base-input
        :value="to"
        placeholder="До"
        type="number"
        class="realty-search-form-price-editor__input"
        @input="$emit('update:to', $event)"
      />
      <base-select
        :options="options"
        optionValue="value"
        optionText="title"
        class="realty-search-form-price-editor__select"
        @select="$emit('update:selectValue', $event)"
      />
    </base-form-group>
    <base-button
      outline
      rounded
      class="realty-search-form-price-editor__button"
      @click="$emit('add-estate-params', 'area')"
    >
      Добавить метраж
    </base-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from './ui/BaseButton.vue'
import BaseFormGroup from './ui/BaseFormGroup.vue'
import BaseInput from './ui/BaseInput.vue'
import BaseSelect from './ui/BaseSelect.vue'

export default Vue.extend({
  name: 'RealtySearchFormPriceEditor',
  components: {
    BaseFormGroup,
    BaseInput,
    BaseSelect,
    BaseButton
  },
  props: {
    from: {
      type: Number,
      default: null,
    },
    to: {
      type: Number,
      default: null,
    },
    options: {
      type: Array,
      required: true,
    },
    selectValue: {
      type: String,
      required: true,
    }
  }
})
</script>

<style lang="scss">
  .realty-search-form-price-editor {
    display: flex;
    justify-content: space-between;

    &__input {
      max-width: 183px;
      margin-right: 1px;
      background-color: #E6F2FE;
    }

    &__select {
      max-width: 183px;
      background-color: #E6F2FE;
    }

    &__button {
      width: 100%;
      max-width: 330px;
      font-size: 18px;
      color: #506981;
    }
  }
</style>
