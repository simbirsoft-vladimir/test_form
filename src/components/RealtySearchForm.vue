<template>
  <base-form class="realty-search-form">
    <div class="realty-search-form__main-block">
      <div class="realty-search-form__search-controls">
        <base-form-group>
          <template v-if="true">
            <base-select
              :options="cities"
              class="realty-search-form__select realty-search-form__select_first"
            />
            <base-select class="realty-search-form__select"/>
            <base-select class="realty-search-form__select"/>
          </template>
          <div v-else></div>
          <base-button>Найти</base-button>
        </base-form-group>
      </div>
    </div>
    <div class="realty-search-form__footer">
      <realty-search-form-toggle />
    </div>
  </base-form>
</template>

<script lang="ts">
import Vue from 'vue'
import RealtySearchFormToggle from './RealtySearchFormToggle.vue'
import BaseButton from './ui/BaseButton.vue'
import BaseForm from './ui/BaseForm.vue'
import BaseFormGroup from './ui/BaseFormGroup.vue'
import BaseSelect from './ui/BaseSelect.vue'
import {cities} from '../mocks/cities'

export default Vue.extend({
  name: 'RealtySearchForm',
  components: { BaseForm, BaseSelect, BaseButton, BaseFormGroup, RealtySearchFormToggle },

  data() {
    return {
      cities: cities ?? [],
      chosenCity: null,
    }
  }
})
</script>

<style lang="scss">
  .realty-search-form {
    max-width: 940px;

    &__main-block {
      padding: 36px 20px 0;
      background-color: #8cbbe6;
    }

    &__search-controls {
      padding-bottom: 28px;
    }

    &__footer {
      height: 45px;
      background-color: #E6F2FE;
    }

    &__select {
      margin-left: 1px;

      &_first {
        margin-left: 0;
      }
    }
  }
</style>